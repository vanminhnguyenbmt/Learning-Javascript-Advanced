// const avatarPromise = new Promise((resolve) => {
//     setTimeout(function () {
//         const result = {
//             url: "http://facebook.com/user/image12314",
//             status: 'OK'
//         };
//         resolve(result);
//     }, 2000);
// })

// const coverImagePromise = new Promise(resolve => {
//     setTimeout(function () {
//         resolve('http://facebook.com/user/cover/image1');
//     }, 3000);
// })

// const coverImagePromise2 = new Promise(resolve => {
//     setTimeout(function () {
//         resolve('http://facebook.com/user/cover/image2');
//     }, 4000);
// })

// const coverImagePromise3 = new Promise(resolve => {
//     setTimeout(function () {
//         resolve('http://facebook.com/user/cover/image3');
//     }, 5000);
// })

// Promise.all([coverImagePromise, avatarPromise, coverImagePromise2, coverImagePromise3])
//     .then(res => console.log(res));

const evolutionChainPromise = fetch('http://5b7bbce8f583510014298cdb.mockapi.io/api/todos');
const typePromise = fetch('http://5b67b441f793e00014562611.mockapi.io/api/products');

Promise.all([evolutionChainPromise, typePromise])
    .then(responses => responses.map(response => response.json()))
    .then(data => console.log(data))
    .catch(err => console.log(err))