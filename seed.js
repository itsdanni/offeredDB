const db = require('./server/db');
const Company = db.model('company');
const axios = require('axios');
const Promise = require('bluebird');
const Sequelize = require('sequelize');

const buildNewCompany = () => db.define('newCompany', {
  name: {
    type: Sequelize.STRING //varchar(255)
  },
  website: {
    type: Sequelize.TEXT
  },
  builtinnyc: {
    type: Sequelize.STRING
  }
}, {
  tableName: 'company'
});

const testTable = () => db.define(
  'newTestTable', {
    test: {
      type: Sequelize.TEXT
    },
  }, {
    tableName: 'test'
  }
)

const { Client } = require('pg')
const connectionString = 'postgresql://localhost:5432/offeredDB_dev'
// //const client = new Client({
//   connectionString: connectionString
// })
const query = 'SELECT * FROM company'

const client = new Client({
  connectionString: connectionString,
})
client.connect()

client.query(query)
  .then(res => console.log(res.rows[0]))
  .catch(e => console.error(e.stack))


// const makeClient = () => new Promise((resolve, reject) => new Client({
//     connectionString: connectionString
//   })
// )
// let client;
// const copyContents = () => {
//   makeClient()
//   .then(res => {
//     client = res
//     console.log(client)
//     return client.connect()
//   })
//   .then(client => client.query(query))
//   .then(res => res[0])
//   .then(client.end())
//   .catch(err => console.log(err))
// }




// db.authenticate()
// .then(testTable)
// .then(console.log('seeding success'))
// .catch(err => console.log(err))
