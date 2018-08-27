// Function overloading

function sayHi(first, last) {
    let middle = arguments[2];
    console.log('Hi ', first, last);
    console.log('Hi ', first, middle, last);
    console.log(2);
    console.log(arguments);
}

// function sayHi(first, middle, last) {
//     console.log('Hi ', first, middle, last);
//     console.log(3);
// }

// sayHi('Van', 'Nguyen');
sayHi('Van', 'Nguyen', 'Minh');