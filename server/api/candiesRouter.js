const router = require('express').Router();
const Candy = require('../db/models/CandyModel');

router.get('/', async (req, res, next) => {
  try {
    const candies = await Candy.findAll();
    res.send(candies);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
