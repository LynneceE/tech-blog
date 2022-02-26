const sequelize = require('../config/connection');
const { User, Post } = require('../models');


const userdata = [
    {
      username: 'FredA',
      email: 'freda@email.com',
      password: 'password1234'
    },
    {
      username: 'KayleeD',
      email: 'kayleed@email.com',
      password: 'password1234'
    },
    {
      username: 'CassieM',
      email: 'casseiem@email.com',
      password: 'password1234'
    },
    {
      username: 'DanielP',
      email: 'danielp',
      password: 'password1234'
    },
    {
      username: 'ChrisJ',
      email: 'gmidgley4@weather.com',
      password: 'password1234'
    },
    {
        username: 'IvanH',
        email: 'ivanh@email.com',
        password: 'password1234'
      },
      {
        username: 'TammieT',
        email: 'tammiet@email.com',
        password: 'password1234'
      },
      {
        username: 'GregG',
        email: 'gregg',
        password: 'password123'
      },
      {
        username: 'JackD',
        email: 'jackd@email.com',
        password: 'password123'
      },
      {
        username: 'JohnnieW',
        email: 'johnniew@email.com',
        password: 'password123'
      },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;