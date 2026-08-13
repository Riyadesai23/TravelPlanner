const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
    tripName: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    travelers: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: "Planned"
    }
});

module.exports = mongoose.model("Trip", tripSchema);