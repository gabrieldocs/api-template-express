'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("Users",
        "pin",
        {
          type: Sequelize.STRING,
          allowNull: true                
        }
      ),
      queryInterface.addColumn("Users",
        "username", 
        {
          type: Sequelize.STRING,
          allowNull: true    
        }
      )
    ])
  },

  down: async (queryInterface, Sequelize) => {    
      await queryInterface.removeColumn("Users", "pin", "username");    
  }
};
