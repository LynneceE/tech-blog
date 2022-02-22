const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class User extends Model {}


User.init(
  {
    id: {

        type: DataTypes.INTEGER,

        allowNull: false,

        primaryKey: true,

        autoIncrement: true
      },

      username: {
        type: DataTypes.STRING,
        allowNull: false
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        //make sure email is unique and has no duplicates
        unique: true,

        validate: {
          isEmail: true
        }
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {

          len: [8] // password must be at least 8 characters long
        }
      }
  },
  {
    


    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User; 
