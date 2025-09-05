'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Submissions', {
      email: {
        type: Sequelize.DataTypes.STRING,
        required: true,
        allowNull: false
      },

      submitedResponse: {
        type: Sequelize.DataTypes.JSON,
        defaultValue: []
      },

      score: {
        type: Sequelize.DataTypes.INTEGER,
        defaultValue: 0
      }
    }, {
      timestamps: true
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Submissions');
  },
};
