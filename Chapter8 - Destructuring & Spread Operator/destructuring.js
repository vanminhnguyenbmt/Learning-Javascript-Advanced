// ES6 - Destructuring

let user = {
    firstname: 'Minh',
    lastname: 'Nguyen',
    email: 'vanminhnguyenbmt@gmail.com',
    address: {
        block: 3,
        number: '22/1'
    }
}

// cách thông thường để lấy giá trị trong object
// const firstname = user.firstname;
// const lastname = user.lastname;

// với destructuring
const { firstname, lastname, email } = user;

// đặt lại tên biến
const { firstname: first, lastname: last, email: mail } = user;

// object lồng trong object
// const { block, number } = user.address;
// hoặc
const { address } = user;
const { block, number } = address; 