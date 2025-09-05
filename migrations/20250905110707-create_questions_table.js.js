'use strict';

const { UUID } = require('sequelize');

const UUIDV4 = require('uuid').v4;
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Questions', {
      id: {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
        primaryKey: true
      },
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
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
      }
    }, {
      timestamps: true
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Questions');
  },
};
