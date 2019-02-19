const express = require('express');
const router = express.Router();
const Rental = require('../models/rental')

router.get('', (req, res) => {
  Rental.find({}).sort({createdAt:'desc'})
  .then(foundRentals => {
    res.json(foundRentals);
  })
  .catch(err => {
    res.status(404).json({
      errors: [{
        title: "Rental Error",
        detail: "Could not fetch rentals!"
      }],
    });
  });
});

router.get('/:id', (req, res) => {
  Rental.findById(req.params.id)
  .then(foundRental => {
    res.json(foundRental);
  })
  .catch(err => {
    res.status(404).json({
      errors: [{
        titles: "Rental Error",
        detail: "Could not find rental!"
      }],
    });
  });
});

module.exports = router;
