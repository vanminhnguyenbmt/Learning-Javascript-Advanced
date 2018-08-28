var firstname = 'Van';

function User(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    console.log(this);
    this.showName = function () {
        console.log(this.firstname, this.lastname);
    }
}

var nguyen = new User('Minh', 'Nguyen');

User.prototype.showFullName = function () {
    console.log(this.firstname, this.lastname);
}

User.prototype.showViewnamese = function () {
    console.log('Ten cua toi la ' + this.firstname, this.lastname);
}