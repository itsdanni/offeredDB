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
    type: Sequelize.TEXT
  },
  builtinnyc: {
    type: Sequelize.STRING
  },
  domain: {
    type: Sequelize.STRING
  },
  handles: {
    type: Sequelize.JSON
  },
  logo: {
    type: Sequelize.STRING
  },
  employees: {
    type: Sequelize.BIGINT
  },
  geo: {
    type: Sequelize.JSON
  },
  foundedYear: {
    type: Sequelize.INTEGER
  },
  raised: {
    type: Sequelize.BIGINT
  },
});

module.exports = Company;
