/**
 * router for all requests related to companies
 */
const router = require('express').Router();
const db = require('../db');
const Company = db.company;

module.exports = router;

// GET request for companies
router.get('/', (req, res, next) => {
  Company.findAll()
  .then(companies => {
    res.json(companies)
  })
  .catch(next);
});
