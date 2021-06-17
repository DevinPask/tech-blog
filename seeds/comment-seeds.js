const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Amazing work"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Wow, amazing work!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Do you freelance!"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "I make $91 an hr from my computer. Ask me how!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "Oh my!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "What a progressive app!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Genius!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "I'm sold!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;