const db = require('./server/db');
const Company = db.model('company');

const query = 'SELECT * FROM company'

db.query(query)
  .spread((res, metadata) => Company.bulkCreate(res))
  .catch(e => console.error(e.stack))
