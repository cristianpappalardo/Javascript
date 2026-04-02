/**
 * @file main.js
 * @author Cristian Pappalardo
 * Enhanced Arrivals & Departures Board Exercise
 * 
 * @description This JavaScript file simulates an airport arrivals and departures board with dynamic flight data, status updates, and interactive details panels.
 * The user can switch between arrivals and departures tabs, view detailed information for each flight, and see real-time updates as flight statuses change.
 */

const arrivalsBody = document.getElementById("arrivals-body");
const departuresBody = document.getElementById("departures-body");
const totalsEl = document.getElementById("totals");
const lastUpdateEl = document.getElementById("last-update");

const arrivalsTab = document.getElementById("arrivals-tab");
const departuresTab = document.getElementById("departures-tab");
const arrivalsPanel = document.getElementById("arrivals-panel");
const departuresPanel = document.getElementById("departures-panel");

const updateEveryMs = 10000;
const removeDoneAfterMs = 60000;

const airlines = [
    "ITA Airways",
    "Lufthansa",
    "Air France",
    "Ryanair",
    "KLM",
    "easyJet",
    "Wizz Air",
    "British Airways"
];

const cities = [
    "Rome FCO",
    "Paris CDG",
    "London LHR",
    "Berlin BER",
    "Madrid MAD",
    "Amsterdam AMS",
    "Dublin DUB",
    "Vienna VIE"
];

const aircrafts = ["A320", "A319", "A321neo", "B737-800", "B737 MAX 8", "E190"];
const terminals = ["T1", "T2"];

const openDetails = {
    arrivals: null,
    departures: null
};

let arrivalsFlights = [];
let departuresFlights = [];

let arrivalsCounter = 120;
let departuresCounter = 700;
let nextArrivalTime = createInitialScheduledTime(20);
let nextDepartureTime = createInitialScheduledTime(15);
let visibleSection = "arrivals";

/**
 * Creates a rounded starting time offset from now.
 * @param {number} offsetMinutes - Minutes to add to the current time.
 * @returns {Date} The generated scheduled date-time.
 */
function createInitialScheduledTime(offsetMinutes) {
    const date = new Date();
    date.setSeconds(0, 0);
    date.setMinutes(date.getMinutes() + offsetMinutes);
    return date;
}

/**
 * Returns a random item from a list.
 * @template T
 * @param {T[]} items - Source array.
 * @returns {T} A randomly selected element.
 */
function randomItem(items) {
    const index = Math.floor(Math.random() * items.length);
    return items[index];
}

/**
 * Generates a random integer in the inclusive range [min, max].
 * @param {number} min - Lower bound.
 * @param {number} max - Upper bound.
 * @returns {number} Random integer.
 */
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Formats a Date value as DD/MM/YYYY.
 * @param {Date} date - Date to format.
 * @returns {string} Formatted date text.
 */
function formatDate(date) {
    return date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
}

/**
 * Formats a Date value as HH:mm.
 * @param {Date} date - Date to format.
 * @returns {string} Formatted time text.
 */
function formatTime(date) {
    return date.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit"
    });
}

/**
 * Maps a flight status to the corresponding CSS class.
 * @param {string} status - Flight status code.
 * @returns {string} CSS class name for the status badge.
 */
function statusClass(status) {
    if (status === "DEPARTING" || status === "BOARDING") {
        return "status-departing";
    }
    if (status === "ON_TIME") {
        return "status-on-time";
    }
    if (status === "DELAYED") {
        return "status-delayed";
    }
    if (status === "ARRIVED") {
        return "status-arrived";
    }
    return "status-departed";
}

/**
 * Creates a synthetic arrival flight object.
 * @returns {object} Arrival flight data.
 */
function createArrival() {
    const incrementMinutes = randomInt(6, 18);
    nextArrivalTime = new Date(nextArrivalTime.getTime() + incrementMinutes * 60000);

    arrivalsCounter += 1;
    const origin = randomItem(cities);

    return {
        id: crypto.randomUUID(),
        dateTime: new Date(nextArrivalTime),
        flightCode: "AZ" + String(arrivalsCounter),
        airline: randomItem(airlines),
        location: origin,
        terminal: randomItem(terminals),
        gate: "G" + randomInt(1, 24),
        belt: "B" + randomInt(1, 14),
        aircraft: randomItem(aircrafts),
        estimatedTime: new Date(nextArrivalTime),
        status: "DEPARTING",
        notes: "Inbound aircraft preparing for descent",
        doneAtMs: null,
        details: {
            route: origin + " -> Torino TRN",
            weather: randomItem(["Clear", "Light rain", "Windy", "Cloudy"]),
            passengers: randomInt(95, 210),
            crew: randomInt(5, 9)
        }
    };
}

/**
 * Creates a synthetic departure flight object.
 * @returns {object} Departure flight data.
 */
function createDeparture() {
    const incrementMinutes = randomInt(5, 16);
    nextDepartureTime = new Date(nextDepartureTime.getTime() + incrementMinutes * 60000);

    departuresCounter += 1;
    const destination = randomItem(cities);

    return {
        id: crypto.randomUUID(),
        dateTime: new Date(nextDepartureTime),
        flightCode: "TP" + String(departuresCounter),
        airline: randomItem(airlines),
        location: destination,
        terminal: randomItem(terminals),
        gate: "G" + randomInt(1, 24),
        checkin: "C" + randomInt(1, 30),
        aircraft: randomItem(aircrafts),
        estimatedTime: new Date(nextDepartureTime),
        status: "BOARDING",
        notes: "Boarding announced",
        doneAtMs: null,
        details: {
            route: "Torino TRN -> " + destination,
            weather: randomItem(["Clear", "Light rain", "Windy", "Cloudy"]),
            passengers: randomInt(80, 205),
            crew: randomInt(5, 10)
        }
    };
}

/**
 * Advances an arrival flight status through its lifecycle.
 * @param {object} flight - Arrival flight to update in place.
 * @returns {void}
 */
function updateArrivalStatus(flight) {
    // Arrival lifecycle: DEPARTING -> ON_TIME/DELAYED -> ARRIVED.
    if (flight.status === "DEPARTING") {
        flight.status = "ON_TIME";
        flight.notes = "Approaching airport airspace";
        return;
    }

    if (flight.status === "ON_TIME") {
        if (Math.random() < 0.4) {
            flight.status = "DELAYED";
            flight.estimatedTime = new Date(flight.estimatedTime.getTime() + randomInt(5, 25) * 60000);
            flight.notes = "Holding pattern due to traffic";
        } else {
            flight.status = "ARRIVED";
            flight.doneAtMs = Date.now();
            flight.notes = "Landed and taxiing to gate";
        }
        return;
    }

    if (flight.status === "DELAYED") {
        flight.status = "ARRIVED";
        flight.doneAtMs = Date.now();
        flight.notes = "Landed after delay";
    }
}

/**
 * Advances a departure flight status through its lifecycle.
 * @param {object} flight - Departure flight to update in place.
 * @returns {void}
 */
function updateDepartureStatus(flight) {
    // Departure lifecycle: BOARDING -> ON_TIME/DELAYED -> DEPARTED.
    if (flight.status === "BOARDING") {
        flight.status = "ON_TIME";
        flight.notes = "Final boarding call";
        return;
    }

    if (flight.status === "ON_TIME") {
        if (Math.random() < 0.35) {
            flight.status = "DELAYED";
            flight.estimatedTime = new Date(flight.estimatedTime.getTime() + randomInt(5, 20) * 60000);
            flight.notes = "Departure slot delayed";
        } else {
            flight.status = "DEPARTED";
            flight.doneAtMs = Date.now();
            flight.notes = "Aircraft has taken off";
        }
        return;
    }

    if (flight.status === "DELAYED") {
        flight.status = "DEPARTED";
        flight.doneAtMs = Date.now();
        flight.notes = "Departed after delay";
    }
}

/**
 * Removes flights that have been in final state for too long.
 * @param {object[]} list - Flights collection.
 * @param {string} doneStatus - Terminal status to evaluate.
 * @returns {object[]} Filtered list with recent flights only.
 */
function removeExpiredFlights(list, doneStatus) {
    const now = Date.now();
    return list.filter(function (flight) {
        if (flight.status !== doneStatus) {
            return true;
        }
        return now - flight.doneAtMs < removeDoneAfterMs;
    });
}

/**
 * Sorts flights by scheduled date-time in ascending order.
 * @param {object[]} list - Flights collection to sort in place.
 * @returns {void}
 */
function sortFlights(list) {
    list.sort(function (a, b) {
        return a.dateTime.getTime() - b.dateTime.getTime();
    });
}

/**
 * Builds the expandable HTML details block for a flight row.
 * @param {object} flight - Flight data object.
 * @param {"arrivals"|"departures"} section - Current board section.
 * @returns {string} HTML string for details content.
 */
function detailsHtml(flight, section) {
    const modeLabel = section === "arrivals" ? "Arrival" : "Departure";
    return "<div class='details-content'>" +
        "<strong>" + modeLabel + " details</strong><br>" +
        "Route: " + flight.details.route + "<br>" +
        "Weather: " + flight.details.weather + "<br>" +
        "Passengers: " + flight.details.passengers + "<br>" +
        "Crew: " + flight.details.crew + "<br>" +
        "Scheduled: " + formatDate(flight.dateTime) + " " + formatTime(flight.dateTime) + "<br>" +
        "Estimated: " + formatDate(flight.estimatedTime) + " " + formatTime(flight.estimatedTime) +
        "</div>";
}

/**
 * Renders one board section and its expandable flight rows.
 * @param {object[]} list - Flights to render.
 * @param {HTMLElement} bodyEl - Table body target.
 * @param {"arrivals"|"departures"} section - Section name.
 * @param {string} doneStatus - Terminal status for this section.
 * @returns {void}
 */
function renderSection(list, bodyEl, section, doneStatus) {
    if (list.length === 0) {
        const label = section === "arrivals" ? "arrivals" : "departures";
        bodyEl.innerHTML = "<tr><td colspan='12' class='empty-row'>No " + label + " in the board right now.</td></tr>";
        return;
    }

    const rows = list.map(function (flight) {
        const delayedClass = flight.status === "DELAYED" ? "is-delayed" : "";
        const detailsOpenClass = openDetails[section] === flight.id ? "is-open" : "";
        const statusCssClass = statusClass(flight.status);

        const locationCell = section === "arrivals" ? flight.location : flight.location;
        const middleLabel = section === "arrivals" ? flight.belt : flight.checkin;

        const mainRow = "<tr class='flight-row " + delayedClass + "' data-flight-id='" + flight.id + "' data-section='" + section + "'>" +
            "<td>" + formatDate(flight.dateTime) + "</td>" +
            "<td>" + formatTime(flight.dateTime) + "</td>" +
            "<td>" + flight.flightCode + "</td>" +
            "<td>" + flight.airline + "</td>" +
            "<td>" + locationCell + "</td>" +
            "<td>" + flight.terminal + "</td>" +
            "<td>" + flight.gate + "</td>" +
            "<td>" + middleLabel + "</td>" +
            "<td>" + flight.aircraft + "</td>" +
            "<td>" + formatTime(flight.estimatedTime) + "</td>" +
            "<td><span class='status " + statusCssClass + "'>" + flight.status + "</span></td>" +
            "<td>" + flight.notes + "</td>" +
            "</tr>";

        const detailsRow = "<tr class='details-row " + detailsOpenClass + "'>" +
            "<td colspan='12'>" + detailsHtml(flight, section) + "</td>" +
            "</tr>";

        return mainRow + detailsRow;
    }).join("");

    bodyEl.innerHTML = rows;

    // Auto-close details if the selected flight no longer exists.
    if (openDetails[section] !== null) {
        const stillExists = list.some(function (flight) {
            return flight.id === openDetails[section];
        });
        if (!stillExists) {
            openDetails[section] = null;
        }
    }
}

/**
 * Updates the top totals summary for both sections.
 * @returns {void}
 */
function updateTotals() {
    totalsEl.textContent = "Arrivals: " + arrivalsFlights.length + " | Departures: " + departuresFlights.length;
}

/**
 * Renders full board content and totals.
 * @returns {void}
 */
function renderBoard() {
    renderSection(arrivalsFlights, arrivalsBody, "arrivals", "ARRIVED");
    renderSection(departuresFlights, departuresBody, "departures", "DEPARTED");
    updateTotals();
}

/**
 * Executes one simulation cycle: add flights, update statuses, cleanup, sort and render.
 * @returns {void}
 */
function tickBoard() {
    arrivalsFlights.push(createArrival());
    departuresFlights.push(createDeparture());

    // Update each flight status independently at every tick.
    arrivalsFlights.forEach(function (flight) {
        updateArrivalStatus(flight);
    });

    departuresFlights.forEach(function (flight) {
        updateDepartureStatus(flight);
    });

    arrivalsFlights = removeExpiredFlights(arrivalsFlights, "ARRIVED");
    departuresFlights = removeExpiredFlights(departuresFlights, "DEPARTED");

    sortFlights(arrivalsFlights);
    sortFlights(departuresFlights);
    renderBoard();

    lastUpdateEl.textContent = "Last update: " + new Date().toLocaleTimeString("en-GB");
}

/**
 * Toggles open details row for a section while allowing only one open row.
 * @param {"arrivals"|"departures"} section - Board section.
 * @param {string} rowId - Clicked flight id.
 * @returns {void}
 */
function closeOtherRows(section, rowId) {
    if (openDetails[section] === rowId) {
        openDetails[section] = null;
        return;
    }
    openDetails[section] = rowId;
}

/**
 * Enables row-click accordion behavior for a table section.
 * @param {HTMLElement} bodyEl - Table body with flight rows.
 * @param {"arrivals"|"departures"} section - Board section.
 * @returns {void}
 */
function setupAccordion(bodyEl, section) {
    bodyEl.addEventListener("click", function (event) {
        const row = event.target.closest("tr.flight-row");
        if (!row) {
            return;
        }

        const rowId = row.dataset.flightId;
        closeOtherRows(section, rowId);
        renderBoard();
    });
}

/**
 * Updates tab visual state and related ARIA attributes.
 * @param {"arrivals"|"departures"} activeSection - Active tab section.
 * @returns {void}
 */
function setTabState(activeSection) {
    const isArrivals = activeSection === "arrivals";
    arrivalsTab.classList.toggle("is-active", isArrivals);
    departuresTab.classList.toggle("is-active", !isArrivals);
    arrivalsTab.setAttribute("aria-selected", String(isArrivals));
    departuresTab.setAttribute("aria-selected", String(!isArrivals));
}

/**
 * Switches visible panel with fade transition.
 * @param {"arrivals"|"departures"} nextSection - Section to show.
 * @returns {void}
 */
function switchPanel(nextSection) {
    if (nextSection === visibleSection) {
        return;
    }

    const currentPanel = visibleSection === "arrivals" ? arrivalsPanel : departuresPanel;
    const nextPanel = nextSection === "arrivals" ? arrivalsPanel : departuresPanel;

    currentPanel.classList.add("is-fading-out");

    setTimeout(function () {
        currentPanel.classList.remove("is-fading-out");
        currentPanel.classList.add("is-hidden");

        nextPanel.classList.remove("is-hidden");
        nextPanel.classList.add("is-fading-in");

        requestAnimationFrame(function () {
            nextPanel.style.opacity = "1";
            nextPanel.style.transform = "translateY(0)";
        });

        setTimeout(function () {
            nextPanel.classList.remove("is-fading-in");
            nextPanel.style.opacity = "";
            nextPanel.style.transform = "";
        }, 300);
    }, 300);

    visibleSection = nextSection;
    setTabState(nextSection);
}

// Tabs control which board panel is visible.
arrivalsTab.addEventListener("click", function () {
    switchPanel("arrivals");
});

departuresTab.addEventListener("click", function () {
    switchPanel("departures");
});

// Enable per-section row expansion for extra flight details.
setupAccordion(arrivalsBody, "arrivals");
setupAccordion(departuresBody, "departures");

// Initial render and scheduled updates.
renderBoard();
setInterval(tickBoard, updateEveryMs);
