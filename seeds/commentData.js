const { Comments } = require('../models');

const commentdata = [{
    user: "User54321",
    post_date: 'July 5, 2021',
    text: "I love this blog!"
}];

const seedComments = () => Comments.bulkCreate(commentdata);

module.exports = seedComments;