// extends class

class User {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        console.log('In class User');
    }
    
    showName() {
        return this.firstname + ' ' + this.lastname;
    }
}

class Student extends User {
    constructor(firstname, lastname, id) {
        super(firstname, lastname);
        this.id = id;
    }

    showId() {
        return this.id;
    }
}

var nguyen = new Student('Minh', 'Nguyen', '22');

console.log(nguyen.showName());
console.log(nguyen.showId());
