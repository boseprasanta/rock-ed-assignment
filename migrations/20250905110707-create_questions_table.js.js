'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Questions', {
      statement: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      options: {
        type: Sequelize.DataTypes.JSON,
        defaultValue: []
      },
      correctOptions: {
        type: Sequelize.DataTypes.JSON,
        defaultValue: []
      },

      questionType: {
        type: Sequelize.DataTypes.STRING,
        enum: ["single", "multiple"]
      }
    }, {
      timestamps: true
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Questions');
  },
};
