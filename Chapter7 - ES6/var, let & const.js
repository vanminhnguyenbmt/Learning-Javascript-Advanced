// var id = 123;

// // có thể khai báo trồng id ở trên
// var id = '123';

// if (true) {
//     var i = 2;
// }

// function sayHi() {
//     var hi = 'hi';
// }

// console.log(i);
// // console.log(hi); // không thể gọi trực tiếp hi thì scope của nó chỉ ở trong function


// // // có thể thay đổi giá trị ở dưới
// // let address = 'HCM';
// // address = 'HN';

// // // không thể thay đổi giá trị ở dưới
// // const street = 35;
// // street = 45;


// // đổi với object có thể thay đổi value bên trong nó, nhưng khi thay đổi chính nó thì không được
// const user = {
//     firstname: 'Nguyen'
// }

// user.firstname = 'Huy';
// user = {};




// khi nào thì sử dụng var, let & const

var arrays = [];

for (let i = 0; i < 5; i++) {
    arrays[i] = function () {
        console.log(i);
    }
}

if (true) {
    // let or const in order to create variable
}

arrays[0]();
arrays[1]();
arrays[2]();
arrays[3]();
arrays[4]();

