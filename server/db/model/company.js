/**
 * data schema for company
 */
const Sequelize = require('sequelize');
const db = require('../db');

const Company = db.define('company', {
  name: {
    type: Sequelize.STRING //varchar(255)
  },
  website: {
    type: Sequelize.STRING
  },
  builtinnyc: {
    type: Sequelize.STRING
  }
});

module.exports = Company;
