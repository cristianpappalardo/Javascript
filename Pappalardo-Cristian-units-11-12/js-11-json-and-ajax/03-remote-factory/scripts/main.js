const API_BASE = 'https://jsonblob.com/api/jsonBlob';

// Replace this with your actual factory blob ID from jsonblob.
const FACTORY_BLOB_ID = 'REPLACE_WITH_FACTORY_BLOB_ID';

const messageEl = document.getElementById('message');
const factoryInfoEl = document.getElementById('factory-info');
const carListEl = document.getElementById('car-list');

init();

async function init() {
    if (FACTORY_BLOB_ID === 'REPLACE_WITH_FACTORY_BLOB_ID') {
        setMessage('Configure FACTORY_BLOB_ID in scripts/main.js before running the app.', 'error');
        return;
    }

    await reloadAllData('Loading factory data...');
}

async function reloadAllData(loadingMessage = 'Reloading data...') {
    setMessage(loadingMessage, 'info');

    try {
        const factory = await fetchBlob(FACTORY_BLOB_ID);

        if (!Array.isArray(factory.carBlobIds)) {
            throw new Error('Factory data is invalid: missing "carBlobIds" array.');
        }

        const cars = await Promise.all(
            factory.carBlobIds.map(async carBlobId => {
                const car = await fetchBlob(carBlobId);
                return { blobId: carBlobId, data: car };
            })
        );

        renderFactory(factory);
        renderCars(cars);
        setMessage('Data loaded successfully.', 'success');
    } catch (error) {
        setMessage(error.message, 'error');
        factoryInfoEl.innerHTML = '';
        carListEl.innerHTML = '';
    }
}

async function fetchBlob(blobId) {
    const response = await fetch(`${API_BASE}/${blobId}`);

    if (!response.ok) {
        throw new Error(`GET failed for blob ${blobId}: HTTP ${response.status}`);
    }

    try {
        return await response.json();
    } catch {
        throw new Error(`Blob ${blobId} does not contain valid JSON.`);
    }
}

async function saveBlob(blobId, data) {
    const response = await fetch(`${API_BASE}/${blobId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error(`PUT failed for blob ${blobId}: HTTP ${response.status}`);
    }
}

function renderFactory(factory) {
    factoryInfoEl.innerHTML = `
        <h2>${escapeHtml(factory.name ?? 'Unknown factory')}</h2>
        <p><strong>Location:</strong> ${escapeHtml(factory.location ?? 'N/A')}</p>
        <p><strong>Established:</strong> ${escapeHtml(String(factory.established ?? 'N/A'))}</p>
        <p><strong>Production Capacity:</strong> ${escapeHtml(String(factory.productionCapacity ?? 'N/A'))}</p>
        <p><strong>Employees:</strong> ${escapeHtml(String(factory.employees ?? 'N/A'))}</p>
        <p><strong>Hiring:</strong> ${factory.hiring ? 'Yes' : 'No'}</p>
        <p><strong>Contact:</strong> ${escapeHtml(factory.contact?.email ?? 'N/A')} - ${escapeHtml(factory.contact?.phone ?? 'N/A')}</p>
    `;
}

function renderCars(cars) {
    carListEl.innerHTML = '';

    if (cars.length === 0) {
        carListEl.innerHTML = '<p>No cars found.</p>';
        return;
    }

    cars.forEach(carItem => {
        carListEl.appendChild(buildCarEditor(carItem));
    });
}

function buildCarEditor(carItem) {
    const details = document.createElement('details');
    const summary = document.createElement('summary');
    const { data: car, blobId } = carItem;
    summary.textContent = `${car.make ?? 'Unknown'} ${car.model ?? 'Model'} (${car.year ?? 'N/A'})`;

    const form = document.createElement('form');
    form.className = 'car-form';
    form.innerHTML = `
        <label>Make<input name="make" value="${escapeAttribute(car.make ?? '')}" required></label>
        <label>Model<input name="model" value="${escapeAttribute(car.model ?? '')}" required></label>
        <label>Year<input name="year" type="number" min="1886" max="2100" value="${escapeAttribute(String(car.year ?? ''))}" required></label>
        <label>Available colors (comma separated)<input name="avalableColors" value="${escapeAttribute((car.avalableColors ?? []).join(', '))}"></label>
        <label>Fuel (comma separated)<input name="fuel" value="${escapeAttribute((car.fuel ?? []).join(', '))}"></label>

        <fieldset>
            <legend>Features</legend>
            <label><input type="checkbox" name="airConditioning" ${car.features?.airConditioning ? 'checked' : ''}>Air conditioning</label>
            <label><input type="checkbox" name="powerSteering" ${car.features?.powerSteering ? 'checked' : ''}>Power steering</label>
            <label><input type="checkbox" name="abs" ${car.features?.abs ? 'checked' : ''}>ABS</label>
            <label><input type="checkbox" name="sunroof" ${car.features?.sunroof ? 'checked' : ''}>Sunroof</label>
        </fieldset>

        <button type="submit">Save car</button>
        <p class="inline-status" aria-live="polite"></p>
    `;

    form.addEventListener('submit', async event => {
        event.preventDefault();
        const statusEl = form.querySelector('.inline-status');

        try {
            setBusy(form, true);
            statusEl.textContent = 'Saving...';

            const updatedCar = extractCarFromForm(form, car);
            await saveBlob(blobId, updatedCar);

            statusEl.textContent = 'Saved. Reloading latest data...';
            await reloadAllData('Reloading after save...');
        } catch (error) {
            statusEl.textContent = error.message;
            setMessage(error.message, 'error');
        } finally {
            setBusy(form, false);
        }
    });

    details.appendChild(summary);
    details.appendChild(form);
    return details;
}

function extractCarFromForm(form, originalCar) {
    const formData = new FormData(form);

    return {
        ...originalCar,
        make: String(formData.get('make') ?? '').trim(),
        model: String(formData.get('model') ?? '').trim(),
        year: Number(formData.get('year')),
        avalableColors: parseCsvToArray(formData.get('avalableColors')),
        fuel: parseCsvToArray(formData.get('fuel')),
        features: {
            airConditioning: formData.get('airConditioning') === 'on',
            powerSteering: formData.get('powerSteering') === 'on',
            abs: formData.get('abs') === 'on',
            sunroof: formData.get('sunroof') === 'on'
        }
    };
}

function parseCsvToArray(value) {
    return String(value ?? '')
        .split(',')
        .map(item => item.trim())
        .filter(Boolean);
}

function setBusy(form, isBusy) {
    const controls = form.querySelectorAll('input, button');
    controls.forEach(control => {
        control.disabled = isBusy;
    });
}

function setMessage(text, type) {
    messageEl.textContent = text;
    messageEl.className = `message ${type}`;
}

function escapeHtml(value) {
    return String(value)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
}

function escapeAttribute(value) {
    return escapeHtml(value);
}


