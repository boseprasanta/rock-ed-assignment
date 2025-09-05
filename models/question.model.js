

const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Question extends Model {}

Question.init({
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
        type: Sequelize.DataTypes.ENUM('single', 'multiple'),
        allowNull: false
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
  },
   {
    sequelize,
    modelName: 'Question',
    tableName: 'Questions',
    timestamps: true
  }
);

module.exports = Question;