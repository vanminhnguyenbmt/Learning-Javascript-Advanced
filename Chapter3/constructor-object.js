var user = {
    username: 'minhnguyen',
    gender: 'male',
    age: 21,
    viewInfo: function () {
        console.log(this.username + ' ' + this.gender + ' ' + this.age);
    },
    location: {
        latitude: 0.002,
        longitude: 0.49
    }
}

function viewInfo(params) {
    console.log(params.username + ' ' + params.gender + ' ' + params.age);
}

// viewInfo(user);

user.viewInfo();

viewInfo({ username: 'nguyen', gender: 'male', age: 22 });