'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Exams', {
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },

      numberOfQuestions: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },

      totalOfQuestions: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },

      passPercentage: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },

      startDate: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
        defaultValue: Date.now
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Exams');
  },
};
