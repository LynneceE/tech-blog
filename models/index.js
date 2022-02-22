//import models
const User = require('./User');
const Post = require('./Post');

// ASSOCIATIONS

//nba has many teams
User.hasMany(Post, {
    foreignKey: 'user_id'
});

//this team belongs to the nba
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Post }; 