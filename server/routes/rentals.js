const express = require('express');
const router = express.Router();
const Rental = require('../models/rental')

router.get('', (req, res) => {
  Rental.find({}).sort({createdAt:'desc'})
  .then(foundRentals => {
    res.json(
      foundRentals.map(rental => {
        const {_id, ...rest} = rental.toObject();
        return {
          id: _id,
          ...rest,
        };
      })
    )
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
    const {_id,...rest} = foundRental.toObject();
    res.json({
      id: _id,
      ...rest,
    });
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
