// Immediately Invoked Function Expression

function sayHi(name) {
    console.log('Tao dang o trong ham sayHi');
}

function sayHi2(name) {
    console.log('Tao dang o trong ham sayHi 2');
}

// var hi = function (name) {
//     console.log(name);
//     return true;
// }('nguyen')

// console.log(hi); // log ra return của hi

sayHi
sayHi2

(function (name) {
    console.log(name);
}('Nguyen'))