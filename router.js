// HANDLES THE ROUTES FOR HTTP REQUESTS
const express = require('express')
const events = require('./eventsController')
const login = require('./loginController')
const router = express.Router()


//////////////// GET REQUESTS \\\\\\\\\\\\\\\\

 // add a new event
router.post('/event/create', events.create)

// view list of events
router.get("/event", events.index)

// view specific event by id
router.get("/event/:id", events.show)
        // ++ extension

// view specific event by NAME
router.get('/event/name/:name', events.findByName)
        // ++ extension

// view specific event by LOCATION
router.get('/event/location/:location', events.findByLocation)
        // ++ extension

// view specific event by DATE
router.get('/event/date/:date', events.findByDate)
        // ++ extension

// view specific event by TIME
router.get('/event/time/:time', events.findByTime)

// update event
router.put('/event/:id', events.update)

// delete event
router.delete('/event/delete/:id', events.delete)

// delete ALL events
router.delete('/event/deleteall', events.deleteAll)
        // ++ extension

module.exports = router;