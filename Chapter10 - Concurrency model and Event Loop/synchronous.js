// synchronous

function sayHello() {
    console.log("Hello");
    sayHi();
    function sayHi() {
        console.log('Hi');
    }
}

var a = 2;

console.log(a);

sayHello();
