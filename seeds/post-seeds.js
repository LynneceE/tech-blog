const { Post } = require('../models');

const postdata = [
  {
    title: 'Why I Love JavaScript (and why you should too!)',
    post_url: 'https://technobabble/blogs',
    user_id: 5
  },
  {
    title: 'My First Blog',
    post_url: 'https://technobabble/blogs',
    user_id: 2
  },
  {
    title: 'New NPM Packages',
    post_url: 'https://technobabble/blogs',
    user_id: 9
  },
  {
    title: '10 Ways to Deal With Burnout.',
    post_url: 'http://technobabble/blogs',
    user_id: 3
  },
  {
    title: 'Web Development Trends for 2022!!',
    post_url: 'http://technobabble/blogs',
    user_id: 4
  },
  {
    title: 'Stop Using Console Log.',
    post_url: 'https://technobabble/blogs',
    user_id: 6
  },
  {
    title: 'How I became a Web Developer in 6 days.',
    post_url: 'http://technobabble/blogs',
    user_id: 7
  },
  {
    title: 'How I Got Good at Code (as a trillionaire)',
    post_url: 'http://ucla.edu/consequat/nulla.html',
    user_id: 8
  },
  {
    title: 'Are Web Dev Jobs in Danger?',
    post_url: 'http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx',
    user_id: 4
  },
  {
    title: 'My Tech Journey',
    post_url: 'https://reverbnation.com/ligula/sit.jpg',
    user_id: 9
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;