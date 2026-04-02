const arrivalsBody = document.getElementById("arrivals-body");
const totalsEl = document.getElementById("totals");
const lastUpdateEl = document.getElementById("last-update");

const updateEveryMs = 10000;
const removeArrivedAfterMs = 60000;

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

const origins = [
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

let flights = [];
let flightNumberCounter = 120;
let nextScheduledTime = createInitialScheduledTime();

function createInitialScheduledTime() {
	const date = new Date();
	date.setSeconds(0, 0);
	date.setMinutes(date.getMinutes() + 20);
	return date;
}

function randomItem(items) {
	const index = Math.floor(Math.random() * items.length);
	return items[index];
}

function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatDate(date) {
	return date.toLocaleDateString("en-GB", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric"
	});
}

function formatTime(date) {
	return date.toLocaleTimeString("en-GB", {
		hour: "2-digit",
		minute: "2-digit"
	});
}

function statusClass(status) {
	if (status === "DEPARTING") {
		return "status-departing";
	}
	if (status === "ON_TIME") {
		return "status-on-time";
	}
	if (status === "DELAYED") {
		return "status-delayed";
	}
	return "status-arrived";
}

function createFlight() {
	const incrementMinutes = randomInt(6, 18);
	nextScheduledTime = new Date(nextScheduledTime.getTime() + incrementMinutes * 60000);

	flightNumberCounter += 1;
	const flightCode = "AZ" + String(flightNumberCounter);

	return {
		id: crypto.randomUUID(),
		dateTime: new Date(nextScheduledTime),
		flightCode: flightCode,
		airline: randomItem(airlines),
		origin: randomItem(origins),
		terminal: randomItem(terminals),
		gate: "G" + randomInt(1, 24),
		belt: "B" + randomInt(1, 14),
		aircraft: randomItem(aircrafts),
		estimatedTime: new Date(nextScheduledTime),
		status: "DEPARTING",
		notes: "Inbound aircraft preparing for descent",
		arrivedAtMs: null
	};
}

function updateFlightStatus(flight) {
	if (flight.status === "DEPARTING") {
		flight.status = "ON_TIME";
		flight.notes = "Approaching airport airspace";
		return;
	}

	if (flight.status === "ON_TIME") {
		const becomesDelayed = Math.random() < 0.4;
		if (becomesDelayed) {
			flight.status = "DELAYED";
			flight.estimatedTime = new Date(flight.estimatedTime.getTime() + randomInt(5, 25) * 60000);
			flight.notes = "Holding pattern due to traffic";
		} else {
			flight.status = "ARRIVED";
			flight.arrivedAtMs = Date.now();
			flight.notes = "Landed and taxiing to gate";
		}
		return;
	}

	if (flight.status === "DELAYED") {
		flight.status = "ARRIVED";
		flight.arrivedAtMs = Date.now();
		flight.notes = "Landed after delay";
	}
}

function removeExpiredArrivals() {
	const now = Date.now();
	flights = flights.filter(function (flight) {
		if (flight.status !== "ARRIVED") {
			return true;
		}
		return now - flight.arrivedAtMs < removeArrivedAfterMs;
	});
}

function sortFlights() {
	flights.sort(function (a, b) {
		return a.dateTime.getTime() - b.dateTime.getTime();
	});
}

function renderFlights() {
	if (flights.length === 0) {
		arrivalsBody.innerHTML = '<tr><td colspan="12" class="empty-row">No flights in the board right now.</td></tr>';
		totalsEl.textContent = "Active flights: 0";
		return;
	}

	const rowsHtml = flights
		.map(function (flight) {
			const delayedRowClass = flight.status === "DELAYED" ? "is-delayed" : "";
			const statusCssClass = statusClass(flight.status);

			return "<tr class='" + delayedRowClass + "'>" +
				"<td>" + formatDate(flight.dateTime) + "</td>" +
				"<td>" + formatTime(flight.dateTime) + "</td>" +
				"<td>" + flight.flightCode + "</td>" +
				"<td>" + flight.airline + "</td>" +
				"<td>" + flight.origin + "</td>" +
				"<td>" + flight.terminal + "</td>" +
				"<td>" + flight.gate + "</td>" +
				"<td>" + flight.belt + "</td>" +
				"<td>" + flight.aircraft + "</td>" +
				"<td>" + formatTime(flight.estimatedTime) + "</td>" +
				"<td><span class='status " + statusCssClass + "'>" + flight.status + "</span></td>" +
				"<td>" + flight.notes + "</td>" +
				"</tr>";
		})
		.join("");

	arrivalsBody.innerHTML = rowsHtml;
	totalsEl.textContent = "Active flights: " + flights.length;
}

function tickBoard() {
	flights.push(createFlight());

	flights.forEach(function (flight) {
		updateFlightStatus(flight);
	});

	removeExpiredArrivals();
	sortFlights();
	renderFlights();

	lastUpdateEl.textContent = "Last update: " + new Date().toLocaleTimeString("en-GB");
}

renderFlights();
setInterval(tickBoard, updateEveryMs);
