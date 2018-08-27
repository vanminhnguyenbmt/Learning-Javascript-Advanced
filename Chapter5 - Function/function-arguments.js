// parameters, arguments

function sayHi(name) {
    console.log(arguments);
    console.log(typeof arguments);

    let totalAge = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'object') {
            totalAge += arguments[i].age;
        }
    }
    console.log(totalAge);
}

var user1 = {
    age: 12
};

var user2 = {
    age: 13
};

var user3 = {
    age: 14
};

sayHi(user1, user2, user3, 'HCM', 'HN', 'DN');