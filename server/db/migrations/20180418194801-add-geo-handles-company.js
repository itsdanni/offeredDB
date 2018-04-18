'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.addColumn( 'companies', 'geo', Sequelize.JSON)
     .then(queryInterface.addColumn('companies', 'handles', Sequelize.JSON))
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.removeColumn( 'companies', 'geo')
     .then(queryInterface.removeColumn('companies', 'handles'))
  }
};
