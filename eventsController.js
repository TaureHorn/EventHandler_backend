const Event  = require('./models/eventsModel');
const createError = require('http-errors');

let events = [];

exports.index = function (req, res) {
    Event.find().then((events) => {
        res.send(events);
    })
};

exports.create = function(req, res, next) {
    const event = req.body;
    if (!event.name) {
        return (next(createError(400, 'Event not found in request body')));
    }

    const newEvent = new Event({
        name: event.name,
        location: event.location,
        info: event.info,
        date: event.date,
        time: event.time
    });

    newEvent.save().then((event) => {
        res.send(event);
    })
};

exports.show = function(req, res, next) {
    Event.findById(req.params.id).then((event) => {
        if (!event) {
            return (next(createError(404, "Event entry not found.")))
        }
        res.send(event)
    })
};

exports.findByName = function(req, res, next) {
    Event.find({ name: req.params.name }).then((event) => {
        if (!event) {
            return (next(createError(404, "Event entry not found")))
        }
        res.send(event)
    })
};

exports.findByLocation = function(req, res, next) {
    Event.find({ location: req.params.location }).then((event) => {
        if (!event) {
            return (next(createError(404, "Event entry not found")))
        }
        res.send(event)
    })
};

exports.findByDate = function(req, res, next) { 
    Event.find({ date: req.params.date }).then((event) => {
        if (!event) {
            return (next(createError(404, "Event entry not found")))
        }
        res.send(event)
    })
};

exports.findByTime = function(req, res, next) { 
    Event.find({ time: req.params.time }).then((event) => {
        if (!event) {
            return (next(createError(404, "Event entry not found")))
        }
        res.send(event)
    })
};

exports.update = function(req, res, next) {
    Event.findById(req.params.id).then((event) => {
        if (!event) {
            return (next(createError(404, "Event by this name not found")))
        }
        if (!event) {
            return (next(createError(404, "Event not found")))
        }
        if (req.body.name) event.name = req.body.name
        if (req.body.location) event.location = req.body.location
        if (req.body.info) event.info = req.body.info
        if (req.body.date) event.date = req.body.date
        if (req.body.time) event.time = req.body.time
        event.save().then((event) => {
            res.send(event)
        })
    })
}

exports.delete = function(req, res, next) {
    Event.findByIdAndDelete(req.params.id).then((event) => {
        if (!event) {
            return (next(createError(404, "Event entry not found.")))
        }
        res.send({
            result: true
        })
    })
}

exports.deleteAll = function() {
    Event.deleteMany().then((event) => {
        if (!event) {
            return (next(createError(404, "Event entry not found.")))
        }
        res.send({
            result: true
        })
    })
}