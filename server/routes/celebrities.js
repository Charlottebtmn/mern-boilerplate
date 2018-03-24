var express = require('express');
const Celebrity = require('../models/celebrity')

var router = express.Router();

// Route to get all celebrities
router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.json(celebrities);
    })
    .catch(err => next(err))
});

// Route to get a specific celebrity
router.get('/:id', function (req, res, next) {
  let id = req.params.id;
  Celebrity.findById(id)
    .then( celebrity => {
      res.json(
        celebrity
      );
    })
    .catch(error => {
      console.error(error);
    });
});

module.exports = router;
