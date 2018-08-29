// Arrow function


// Function expression
var hi = function () {
    console.log('Hi');
}

var hello = (name, age) => {
    console.log('Hi ' + name, age);
}

hello('Nguyen', 22);

var hello2 = name => console.log('Hi ' + name);

hello2('Nguyen');

var numbers = [1, 2, 3, 4, 5, 6, 7];

numbers.forEach(i => console.log(i));