const { Post } = require('../models');

const postData = [
    {
        title: "Dev-tech launches!",
        post_content: "Finally a tech blog for people that like to blog about tech. Simple, easy to use interface with login capabilities",
        user_id: 3
    },
    {
        title: "Rising tech stars",
        post_content: "Check back for our list of rising tech stars. Innovators, entrepenuers and coders all represented!",
        user_id: 1
    },
    {
        title: "Outcast Quiz app Released",
        post_content: "A quiz app for movie buffs of all kinds. This app is fun and well done!",
        user_id: 2

    },
    {
        title: "Dev-Tech rises!",
        post_content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,",
        user_id: 5
    },
    {
        title: "Stark on board with Dev-Tech!",
        post_content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;