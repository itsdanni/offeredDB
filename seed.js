const Sequelize = require('sequelize');
const fs = require('fs');
const db = new Sequelize('postgres://localhost:5432/offered_dev', {
  dialect: 'postgres',
  logging: false
})
const db_prev = require('./server/db');

//const Company = db.model('Companies');
// const clearbitApiKey = require('./secrets').clearbitApiKey
// const clearbit = require('clearbit')(clearbitApiKey);
// const CbCompany = clearbit.Company;

const query = 'SELECT * FROM Company'


db.query(query)
  .spread((res, metadata) => console.log(res[0]))
  .catch(e => console.error(e.stack))

// db_prev.query(query)
//   .spread((res, meta) => res)
//   .then(res => fs.appendFile('data.js', res, (e) => {
//     if (e) throw e
//     console.log('data saved to file')
//   }))

// CbCompany.find({domain: 'meetup.com'})
//   .then(function (company) {
//     console.log('Name: ', company.name);
//   })
//   .catch(CbCompany.QueuedError, function (err) {
//     console.log('Company lookup queued - try again later')
//   })
//   .catch(CbCompany.NotFoundError, function (err) {
//     // Company could not be found
//     console.log(err);
//   })
//   .catch(function (err) {
//     console.error(err);
//   });
