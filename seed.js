const db = require('./server/db');
const Company = db.model('company');
const axios = require('axios');
const Promise = require('bluebird');
