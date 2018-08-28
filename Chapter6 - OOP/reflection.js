// Reflection in javascript -> View/Edit

user = {
    firstname: 'firstname',
    showName: function () {
        console.log(this.firstname, this.lastname);
    }
}

nguyen = {
    firstname: 'Van',
    lastname: 'Nguyen'
}

console.log(Reflect.get(user, 'firstname'));
console.log(Reflect.has(user, 'firstname'));

Reflect.setPrototypeOf(nguyen, user);

nguyen.showName();