/**
 * router for all requests related to companies
 */
const router = require('express').Router();
const db = require('../db/db');
const Company = db.model('company');

module.exports = router;

// GET request for companies
router.get('/', (req, res, next) => {
  Company.findAll()
  .then(companies => {
    console.log('companies: ', companies[0])
    res.json(companies)
  })
  .catch(next);
});
