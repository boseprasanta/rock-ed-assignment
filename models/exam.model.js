
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class Question extends Model {}


Question.init( 
{
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
  }, {
    sequelize,
  }
);

module.exports = Exam