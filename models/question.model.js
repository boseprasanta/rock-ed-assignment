

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("sequelize")

class Question extends Model {}

Question.init({
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
  },
   {
    sequelize,
    tableName: "Question",
  }
);


module.exports = Question