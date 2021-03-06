const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
     // checks password for every user
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}


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
    hooks: { // before creating password
        async beforeCreate(newUserData) {
           newUserData.password = await bcrypt.hash(newUserData.password, 10);
           return newUserData
         },
               // before updating/changing password
         async beforeUpdate(updatedUserData) {
           updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
           return updatedUserData;
         }
       }, 


    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User; 
