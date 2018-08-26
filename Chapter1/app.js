
hello();

var homepage = 'fb.com/Nguyen.Gamer.UIT';
function hello() {
    var name = 'Nguyên';
    console.log('hello');
    function hi() {              //lexical environment của hi này nằm trong hello
        var middleName = 'Minh'; //lexical environment của biến này nằm trong hi
    }
}

console.log(homepage);

var age = 16;

function greet() {
    var a = "hello world"
    console.log(a);
    function shakeHands() {
        var count = 5;
        console.log(count);
    }
}

greet();