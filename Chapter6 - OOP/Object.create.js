var user = {
    firstname: 'default',
    lastname: 'default'
};

var nguyen = {};

// nguyen.__proto__ = user; // không nên gán như vậy

nguyen = Object.create(user);

