var express = require('express');
var vehicle_type = require('../models/vehicle_type');
var verify= require('../models/vehicle_type');
var router = express.Router();




router.route('/')
    .get((req, res, next) => {
        vehicle_type.find({})
            .then((vehicletype) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(vehicletype);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        console.log(req.body);
        vehicle_type.create(req.body)
            .then((vehicletype) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(vehicletype);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported!');
    })
    .delete((req, res, next) => {
        vehicle_type.deleteMany({})
            .then((reply) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(reply);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

router.route('/:id')
    .get((req, res, next) => {
        vehicle_type.findById(req.params.id)
            .then((vehicletype) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(vehicletype);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end("POST operation not supported!");
    })
    .put((req, res, next) => {
        vehicle_type.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true, useFindAndModify: false })
            .then((vehicletype) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(vehicletype);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete((req, res, next) => {
        vehicle_type.findByIdAndDelete(req.params.id)
            .then((reply) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(reply);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

module.exports = router;

