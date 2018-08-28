// Create object with class

class User {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    
    // showName() {
    //     return this.firstname + ' ' + this.lastname;
    // }
}


// function User(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
// }

var nguyen = new User('Minh', 'Nguyen');

User.prototype.showName = function () {
    return this.firstname + ' ' + this.lastname;    
}