var express = require('express');
var Bookings = require('../models/booking');
var verify = require('../verify');
// var fs = require('fs');
var router = express.Router();

router.route('/')
    .get((req, res, next) => {
        Bookings.find({})
            .then((bookings) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(bookings);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        Bookings.create(req.body)
            .then((booking) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(booking);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported!');
    })
    .delete((req, res, next) => {
        Bookings.deleteMany({})
            .then((reply) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(reply);
            }, (err) => next(err))
            .catch((err) => next(err));
    });


    router.route('/accept')
    .get((req, res, next) => {
        Bookings.find({status:req.query.status})
            .then((bookings) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(bookings);
            }, (err) => next(err))
            .catch((err) => next(err));

    });
    router.route('/check')
    .get((req, res, next) => {
        Bookings.find({status: true, bookingDate:req.query.date, bookingTime:req.query.time})
            .then((bookings) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(bookings);
            }, (err) => next(err))
            .catch((err) => next(err));

    });
    router.route('/all')
    .get((req, res, next) => {
        Bookings.find({status:req.query.status})
            .then((bookings) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(bookings);
            }, (err) => next(err))
            .catch((err) => next(err));

    });

router.route('/:id')
    .get((req, res, next) => {
        Bookings.findById(req.params.id)
            .then((booking) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(booking);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end("POST operation not supported!");
    })
    .put((req, res, next) => {
        Bookings.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true, useFindAndModify: false })
            .then((booking) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(booking);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete((req, res, next) => {
        // Heroes.findById(req.params.id)
        //     .then((hero) => {
        //         let path = './public/uploads/' + hero.image;
        //         fs.unlink(path, (err) => {
        //             if (err) console.log(err);
        //         })
        //         hero.delete()
        //             .then((reply) => {
        //                 res.statusCode = 200;
        //                 res.setHeader('Content-Type', 'application/json');
        //                 res.json(reply);
        //             })
        //     }).catch((err) => next(err));

        Bookings.findByIdAndDelete(req.params.id)
            .then((reply) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(reply);
            }, (err) => next(err))
            .catch((err) => next(err));
    });



module.exports = router;