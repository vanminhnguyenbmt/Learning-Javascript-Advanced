var nguyen = {
    firstname: 'Van',
    lastname: 'Nguyen',
    showName: function () {
    console.log(firstname + ' ' + lastname);
}
}

function displayName(age, address) {
    console.log(this.firstname + ' ' + this.lastname);
    console.log(age + ' ' + address);
    return true;
}

// var sayIntro = displayName.bind(nguyen);
// var sayIntro = displayName.call(nguyen);
var sayIntro = displayName.apply(nguyen, [22, 'HCM']);

// sayIntro();
// console.log(sayIntro);

// sayIntro(22, 'HCM');
