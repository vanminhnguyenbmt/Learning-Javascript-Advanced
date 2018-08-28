var nguyen = {
    firstname: 'Van',
    lastname: 'Nguyen',
    showName: function () {
        console.log(this.firstname + ' ' + this.lastname);
    }
}

// function borrowing

var huy = {
    firstname: 'Van',
    lastname: 'Huy'
}

nguyen.showName.call(huy);

// hoặc dùng IIFE
nguyen.showName.bind(huy)();