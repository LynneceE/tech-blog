const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models'); 


//display post with user and comment data
router.get('/', (req,res) => {
   Post.findAll({
       attributes: [
           'id',
           'post_url',
           'title',
           'created_at'
       ],
       include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => {
        console.log(dbPostData[0]);
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('homepage', { posts });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
   });
});

//LOGIN PAGE
router.get('/login', (req, res) => {
    console.log(req.session);
    res.render('login');
  });


module.exports = router; 