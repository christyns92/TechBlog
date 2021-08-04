const { Posts } = require('../models');

const postdata = [{
    user: 'christyns92',
    posting_date: 'August 4, 2021 03:34:00',
    text: 'Helllooooooo',
}, ];

const seedPosts = () => Posts.bulkCreate(postdata);

module.exports = seedPosts;