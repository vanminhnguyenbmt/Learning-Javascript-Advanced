// This in arrow function

// var hi = function () {
//     console.log(this);
// }

// var sayHello = () => {
//     console.log(this);
// }

// // hi();
// // sayHello();

// var firstname = 'Huy';

// var user = {
//     firstname: 'Nguyen',
//     showName: function() {
//         console.log(this.firstname);
//     },
//     logName: () => { // không nên dùng arrow function ở trong objects
//         console.log(this.firstname);
//     }
// }

// user.showName();
// user.logName();

function User(firstname) {
    this.firstname = 'Nguyen';
}

// User.prototype.showName = () => { // dùng arrow function thì this đang là global object
//     console.log(this);
//     console.log(this.firstname);
// }

User.prototype.showName = function() {
    console.log(this);
    console.log(this.firstname);
}

var nguyen = new User();

nguyen.showName();