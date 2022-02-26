const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'JS broke my brain :/',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'What are the best resources for learning javascript?',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'I love JS too!!',
    user_id: 3,
    post_id: 1
  },
  {
    comment_text: 'Amazing!Keep it up',
    user_id: 3,
    post_id: 2
  },
  {
    comment_text: 'Keep documenting your progress',
    user_id: 7,
    post_id: 2
  },
  {
    comment_text: 'which packages do you use the most?',
    user_id: 1,
    post_id: 3
  },
  {
    comment_text: 'ive burntout at least twice before, make sure you take care of your health guys',
    user_id: 6,
    post_id: 4
  },
  {
    comment_text: 'Super helpful. Thank you!!',
    user_id: 7,
    post_id: 4
  },
  {
    comment_text: 'So excited!! Finally gonna learn to code!!',
    user_id: 6,
    post_id: 5
  },
  {
    comment_text: 'How do you keep up with career trends?',
    user_id: 8,
    post_id: 5
  },
  {
    comment_text: 'but why?',
    user_id: 10,
    post_id: 6
  },
  {
    comment_text: 'Self-taught or bootcamp?',
    user_id: 8,
    post_id: 7
  },
  {
    comment_text: 'theres no way! thats literally impossible',
    user_id: 5,
    post_id: 7
  },
  {
    comment_text: 'Next post: How I Drink Coffee (as a trillionaire) lol',
    user_id: 4,
    post_id: 8
  },
  {
    comment_text: 'how do you become a trillionaire as a trillionire?',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'TLDR; the answer is no',
    user_id: 1,
    post_id: 9
  },
  {
    comment_text: 'which resources would you recommend for very beginners?',
    user_id: 6,
    post_id: 10
  },
  {
    comment_text: 'How do you pace yourself and how do you decide what to learn first?',
    user_id: 6,
    post_id: 8
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;