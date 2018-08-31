// asynchronous

function sayHello() {
    console.log("Hello");
}

var a = 2;

console.log(a);

setTimeout(function () {
    console.log('Downloading.......');
}, 5000);

sayHello();
