/**
 * router for all requests related to companies
 */
const router = require('express').Router();
const Company = require('../db').model('company');

module.exports = router;

// GET request for companies
router.get('/', (req, res, next) => {
  Company.findAll()
  .then(companies => res.json(companies))
  .catch(next);
});
