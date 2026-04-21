const API_BASE = 'https://jsonblob.com/api/jsonBlob';

// Reuse the same factory blob ID used in 03-remote-factory.
const FACTORY_BLOB_ID = 'REPLACE_WITH_FACTORY_BLOB_ID';

const loaderEl = document.getElementById('loader');
const errorEl = document.getElementById('error');
const contentEl = document.getElementById('content');
const factoryEl = document.getElementById('factory');
const carsEl = document.getElementById('cars');

bootstrap();

async function bootstrap() {
	setLoading(true);
	hideError();
	contentEl.hidden = true;

	if (FACTORY_BLOB_ID === 'REPLACE_WITH_FACTORY_BLOB_ID') {
		showError('Set FACTORY_BLOB_ID in scripts/main.js to your existing factory blob ID.');
		setLoading(false);
		return;
	}

	try {
		const factory = await fetchBlob(FACTORY_BLOB_ID);

		if (!Array.isArray(factory.carBlobIds)) {
			throw new Error('Factory JSON is invalid: carBlobIds must be an array.');
		}

		// Requests all car blobs at the same time.
		const cars = await Promise.all(factory.carBlobIds.map(fetchBlob));

		renderFactory(factory);
		renderCars(cars);
		contentEl.hidden = false;
	} catch (error) {
		showError(error.message);
	} finally {
		setLoading(false);
	}
}

async function fetchBlob(blobId) {
	const response = await fetch(`${API_BASE}/${blobId}`);

	if (!response.ok) {
		throw new Error(`Request failed for blob ${blobId}: HTTP ${response.status}.`);
	}

	try {
		return await response.json();
	} catch {
		throw new Error(`Blob ${blobId} does not contain valid JSON.`);
	}
}

function renderFactory(factory) {
	factoryEl.innerHTML = `
		<h2>${escapeHtml(factory.name ?? 'Unknown factory')}</h2>
		<p><strong>Location:</strong> ${escapeHtml(factory.location ?? 'N/A')}</p>
		<p><strong>Established:</strong> ${escapeHtml(String(factory.established ?? 'N/A'))}</p>
		<p><strong>Production Capacity:</strong> ${escapeHtml(String(factory.productionCapacity ?? 'N/A'))}</p>
		<p><strong>Employees:</strong> ${escapeHtml(String(factory.employees ?? 'N/A'))}</p>
		<p><strong>Hiring:</strong> ${factory.hiring ? 'Yes' : 'No'}</p>
	`;
}

function renderCars(cars) {
	carsEl.innerHTML = '';

	if (cars.length === 0) {
		carsEl.innerHTML = '<p>No cars found.</p>';
		return;
	}

	cars.forEach(car => {
		const card = document.createElement('article');
		card.className = 'car-card';

		card.innerHTML = `
			<h3>${escapeHtml(car.make ?? 'Unknown')} ${escapeHtml(car.model ?? 'Model')}</h3>
			<p><strong>Year:</strong> ${escapeHtml(String(car.year ?? 'N/A'))}</p>
			<p><strong>Colors:</strong> ${escapeHtml((car.avalableColors ?? []).join(', ') || 'N/A')}</p>
			<p><strong>Fuel:</strong> ${escapeHtml((car.fuel ?? []).join(', ') || 'N/A')}</p>
			<p><strong>Features:</strong></p>
			<ul>
				<li>Air conditioning: ${car.features?.airConditioning ? 'Yes' : 'No'}</li>
				<li>Power steering: ${car.features?.powerSteering ? 'Yes' : 'No'}</li>
				<li>ABS: ${car.features?.abs ? 'Yes' : 'No'}</li>
				<li>Sunroof: ${car.features?.sunroof ? 'Yes' : 'No'}</li>
			</ul>
		`;

		carsEl.appendChild(card);
	});
}

function setLoading(isLoading) {
	loaderEl.hidden = !isLoading;
}

function showError(message) {
	errorEl.textContent = message;
	errorEl.hidden = false;
}

function hideError() {
	errorEl.textContent = '';
	errorEl.hidden = true;
}

function escapeHtml(value) {
	return String(value)
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&#39;');
}
