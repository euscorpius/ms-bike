'use strict';

var express = require('express');  
var router = express.Router();

const Bike = require('../schemas/bike');

router.get('/bikes', function (req, res) {
    let query = Bike.find();

    query.exec(function (error, bikes) {
        if (error) {
            return next(error);
        }
        res.json(bikes);
    })
})

router.get('/bike/:id', function (req, res, next) {
    Bike.findById(req.params.id, function (error, bike) {
        if (error) {
            return next("Error!");
        } else if (bike) {
            return res.json(bike);
        } else {
            return next(`Id '${req.params.id}' didn't match any bikes.`);
        }
    });
});


router.post('/bike', function (req, res, next) {
    let body = req.body;

    const bike = new Bike(body);
    bike.save(function (error, doc) {
        if (error) {
            return next(error);
        } else if (doc) {
            res.json(doc);
        } else {
            return new Error("Unable to save bike.");
        }
    })
});


router.put('/bike/:bikeId', function (req, res, next) {
    let bikeId = req.params.bikeId;

    Bike.findOneAndUpdate(bikeId, {$set:req.body}, function(error, result) {
        if (error) {
            return next(error);
        } else {
            res.json({ message : `Bike with id '${bikeId}' updated.`});
        }
    });
});


router.delete('/bike/:bikeId', function (req, res, next) {
    let bikeId = req.params.bikeId;

    Bike.findByIdAndRemove(bikeId, function (error) {
        if (error) {
            return next(error);
        } else {
            res.json({ message : `Bike with id '${bikeId}' deleted.`});
        }
    });
})

module.exports = router;