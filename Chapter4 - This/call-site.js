// 1 - this in a function

// var name = 'nguyen';

// function sayHello() {
//     console.log(this.name);
// }

// sayHello();

// 2 - use this
// function login() {
//     var username = 'nguyen';
//     this.welcome(username);
// }

// function welcome(username) {
//     console.log('Hi, ' + this);
// }

// login();

// 3 - Call stack & call site

function login() {
    // call-stack is: `login`
    // so, our call-site is in the global scope

    console.log("login");
    welcome(); // <-- call-site for `welcome`
}

function welcome() {
    // call-stack is: `login` -> `welcome`
    //so, our call-site is in `login`

    console.log("welcome");
    like(); // <-- call-site for `like`
}

function like() {
    // call-stack is: `login` -> `welcome` -> `like`
    // so, our call-site is in `welcome`
    // debugger;
    console.log("like");
}

login(); // <-- call-site for `login`

