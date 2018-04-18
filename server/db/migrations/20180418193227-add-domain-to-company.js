'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   queryInterface.addColumn( 'companies', 'domain', Sequelize.STRING );
  },

  down: (queryInterface, Sequelize) => {
   queryInterface.removeColumn( 'companies', 'domain' );
  }
};
