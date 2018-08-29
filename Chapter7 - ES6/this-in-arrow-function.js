// This in arrow function

var hi = function () {
    console.log(this);
}

var sayHello = () => {
    console.log(this);
}

// hi();
// sayHello();

var firstname = 'Huy';

var user = {
    firstname: 'Nguyen',
    showName: function() {
        console.log(this.firstname);
    },
    logName: () => {
        console.log(this.firstname);
    }
}

user.showName();
user.logName();