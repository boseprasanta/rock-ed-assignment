

const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Submission extends Model {}

Submission.init({
    id: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.DataTypes.UUIDV4,
      primaryKey: true
    },
    email: {
        type: Sequelize.DataTypes.STRING,
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
  {
    sequelize,
    modelName: 'Submission',
    tableName: 'Submissions',
    timestamps: true
  }
);

module.exports = Submission;