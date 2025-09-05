

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("sequelize")


const Submission = sequelize.define('Submission', {
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
  },
);


module.exports = Submission