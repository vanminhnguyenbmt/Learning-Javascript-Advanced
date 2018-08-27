// 4 - Implicit Binding
// thằng nào đang gọi hàm đó

function welcome() {
    console.log('Welcome ' + this.username);
}

var user = {
    username: 'nguyen',
    welcome: welcome
}

// context
user.welcome();

// welcome();
