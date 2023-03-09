const mongoose = require('mongoose')

const eventsSchema = new mongoose.Schema({
    name: String,
    location: String,
    info: String,
    date: String,
    time: String
});

// laith added models may have to look up wtf that is and means
const eventModel = mongoose.model("event", eventsSchema);

module.exports = eventModel;
