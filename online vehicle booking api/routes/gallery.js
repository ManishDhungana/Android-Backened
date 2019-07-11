var express = require('express');
var Gallery = require('../models/gallery');
var verify = require('../verify');
// var fs = require('fs');
var router = express.Router();

router.route('/')
    .get((req, res, next) => {
        Gallery.find({})
            .then((gallery) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(gallery);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        Gallery.create(req.body)
            .then((gallery) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(gallery);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported!');
    })
    .delete((req, res, next) => {
        Gallery.deleteMany({})
            .then((reply) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(reply);
            }, (err) => next(err))
            .catch((err) => next(err));
    });




router.route('/:id')
    .get((req, res, next) => {
        Gallery.findById(req.params.id)
            .then((gallery) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(gallery);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end("POST operation not supported!");
    })
    .put((req, res, next) => {
        Gallery.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true, useFindAndModify: false })
            .then((gallery) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(gallery);
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

        Gallery.findByIdAndDelete(req.params.id)
            .then((reply) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(reply);
            }, (err) => next(err))
            .catch((err) => next(err));
    });



module.exports = router;