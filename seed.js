const db = require('./server/db');
const Company = db.model('company');
const clearbitApiKey = require('./secrets').clearbitApiKey
const clearbit = require('clearbit')(clearbitApiKey);
const CbCompany = clearbit.Company;
// const query = 'SELECT * FROM company'


// db.query(query)
//   .spread((res, metadata) => Company.bulkCreate(res))
//   .catch(e => console.error(e.stack))



CbCompany.find({domain: 'meetup.com'})
  .then(function (company) {
    console.log('Name: ', company.name);
  })
  .catch(CbCompany.QueuedError, function (err) {
    console.log('Company lookup queued - try again later')
  })
  .catch(CbCompany.NotFoundError, function (err) {
    // Company could not be found
    console.log(err);
  })
  .catch(function (err) {
    console.error(err);
  });
