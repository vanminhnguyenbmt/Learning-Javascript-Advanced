// 5 - Implicit Lost

function welcome() {
    // debugger;
    console.log('Welcome ' + this.username);
}

var user = {
    username: 'nguyen',
    welcome: welcome
}

var hi = user.welcome;

var username = 'minh nguyen';

hi();