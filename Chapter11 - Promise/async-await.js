const posts = [
    {
        content: "I am richest man in the world",
        likes: 51,
        user: "Bill Gates",
        id: 1
    },
    {
        content: "I dropped out of Harvard",
        likes: 5991,
        user: "Mark Zuckerberg",
        id: 2
    },
    { content: "Macbook is so cool!", likes: 391, user: "Steve Jobs", id: 3 }
];

const users = [
    { username: "Bill Gates", age: 61, userId: 111 },
    { username: "Mark Zuckerberg", age: 33 },
    { username: "Steve Jobs", age: 56 }
];

function findPostById(id) {
    const post = posts.find(post => post.id === id);

    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (post) {
                resolve(post);
            } else {
                reject('can not find post with id: ' + id);
            }
        }, 2000);
    });
}

function queryUserDetail(post) {
    const user = users.find(user => user.username === post.user);
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (user) {
                post.userDetails = user;
                resolve(post);
            } else {
                reject('can not find user of posts: ' + post);
            }
        }, 2000);
    });
}

// findPostById(2)
//     .then(post => queryUserDetail(post))
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

async function findStatusByIdAsync() {
    try {
        let post = await findPostById(5).then();
        let user = await queryUserDetail(post);
        console.log(post);
        console.log(user);
    } catch (error) {
        console.log(error);
    }

}

findStatusByIdAsync();