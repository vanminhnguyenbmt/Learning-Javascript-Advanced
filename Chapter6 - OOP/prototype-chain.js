user = {
    firstname: 'firstname',
    lastname: 'lastname',
    showName: function () {
        console.log(this.firstname, this.lastname);
    }
}

nguyen = {
    firstname: 'Van',
    lastname: 'Nguyen'
}

huy = {
    firstname: 'Huy'
}

nguyen.__proto__ = user;
huy.__proto__ = nguyen;

huy.showName();


// hiểu rõ về __proto__

var sayHi = function () {
    console.log('Hi');
}

var names = ['nguyen', 'huy', 'end'];