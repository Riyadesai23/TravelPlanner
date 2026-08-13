const tripForm = document.getElementById("tripForm");
const tripContainer = document.getElementById("tripContainer");

const tripId = document.getElementById("tripId");
const tripName = document.getElementById("tripName");
const destination = document.getElementById("destination");
const startDate = document.getElementById("startDate");
const endDate = document.getElementById("endDate");
const budget = document.getElementById("budget");
const travelers = document.getElementById("travelers");
const status = document.getElementById("status");

const formTitle = document.getElementById("formTitle");
const submitButton = document.getElementById("submitButton");
const cancelButton = document.getElementById("cancelButton");

// Load trips when page opens
loadTrips();

async function loadTrips() {
  try {
    const response = await fetch("/api/trips");
    const trips = await response.json();

    displayTrips(trips);
  } catch (error) {
    tripContainer.innerHTML =
      "<p class='empty'>Unable to load trips.</p>";
  }
}

function displayTrips(trips) {
  if (trips.length === 0) {
    tripContainer.innerHTML =
      "<p class='empty'>No trips added yet.</p>";
    return;
  }

  tripContainer.innerHTML = trips.map((trip) => `
    <div class="trip-card">

      <h3>${escapeHtml(trip.tripName)}</h3>

      <p>
        <strong>Destination:</strong>
        ${escapeHtml(trip.destination)}
      </p>

      <p>
        <strong>Dates:</strong>
        ${trip.startDate} to ${trip.endDate}
      </p>

      <p>
        <strong>Budget:</strong>
        ₹${trip.budget}
      </p>

      <p>
        <strong>Travelers:</strong>
        ${trip.travelers}
      </p>

      <p>
        <strong>Status:</strong>
        ${escapeHtml(trip.status)}
      </p>

      <div class="trip-actions">

        <button
          class="edit-button"
          onclick="editTrip('${trip._id}')"
        >
          Edit
        </button>

        <button
          class="delete-button"
          onclick="deleteTrip('${trip._id}')"
        >
          Delete
        </button>

      </div>

    </div>
  `).join("");
}

tripForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const tripData = {
    tripName: tripName.value.trim(),
    destination: destination.value.trim(),
    startDate: startDate.value,
    endDate: endDate.value,
    budget: Number(budget.value),
    travelers: Number(travelers.value),
    status: status.value
  };

  try {
    let response;

    if (tripId.value) {
      response = await fetch(`/api/trips/${tripId.value}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(tripData)
      });
    } else {
      response = await fetch("/api/trips", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(tripData)
      });
    }

    if (!response.ok) {
      throw new Error("Request failed");
    }

    resetForm();
    loadTrips();

  } catch (error) {
    alert("Something went wrong while saving the trip.");
  }
});

async function editTrip(id) {
  try {
    const response = await fetch("/api/trips");
    const trips = await response.json();

    const trip = trips.find(item => item._id === id);

    if (!trip) {
      alert("Trip not found.");
      return;
    }

    tripId.value = trip._id;
    tripName.value = trip.tripName;
    destination.value = trip.destination;
    startDate.value = trip.startDate;
    endDate.value = trip.endDate;
    budget.value = trip.budget;
    travelers.value = trip.travelers;
    status.value = trip.status;

    formTitle.textContent = "Edit Trip";
    submitButton.textContent = "Update Trip";
    cancelButton.hidden = false;

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  } catch (error) {
    alert("Unable to edit trip.");
  }
}

async function deleteTrip(id) {
  const confirmed = confirm(
    "Are you sure you want to delete this trip?"
  );

  if (!confirmed) {
    return;
  }

  try {
    const response = await fetch(`/api/trips/${id}`, {
      method: "DELETE"
    });

    if (!response.ok) {
      throw new Error("Delete failed");
    }

    loadTrips();

  } catch (error) {
    alert("Unable to delete trip.");
  }
}

function cancelEdit() {
  resetForm();
}

function resetForm() {
  tripForm.reset();

  tripId.value = "";

  formTitle.textContent = "Add New Trip";
  submitButton.textContent = "Add Trip";
  cancelButton.hidden = true;
}

function escapeHtml(value) {
  const div = document.createElement("div");
  div.textContent = value;
  return div.innerHTML;
}