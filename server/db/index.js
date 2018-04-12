/**
 * todo: connect to a postgres database
 */
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://localhost:5432/offeredDB_dev')

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
