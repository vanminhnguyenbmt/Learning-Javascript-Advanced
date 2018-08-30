const iphones = ["iphone3", "iphone4", "iphone5"];
const macbooks = ["macbook2012", "macbook2013", "macbook2014"];

// 1. concat array

// cách thông thường
// const appleProducts = iphones.concat(macbooks);

// spread operator
const appleProducts = [...iphones, 'iphone6', 'iphone7s', 'macbook2011', ...macbooks, 'macbook2015'];

// 2. spread string
let arrString = [..."Nguyen"];

// 3. copy array

// không nên dùng cách gán như này
// const oldModels = iphones;

// sử dụng operator
const oldModels = [...iphones];
oldModels[0] = "iphone2";

// 4. trong function
const values = [3, 5, 7, 25, 33, 55, 77];

function sum() {
    var total = 0;
    for (const value of arguments) {
        total += value;
    }
    return total;
}

// console.log(sum(...values));

// ...rest vs spread operator

// ...spread -> tách array
// ...rest -> gom lại thành array

// 1. parameter of function

function calcutateGPA(math, literature, ...rest) { // rest ở đây để gom lại các params còn lại thành array
    console.log(rest);
    return ((math * 2 + literature * 2 + sum(...rest)) / (rest.length + 4)); // rest ở đây để tách array ra là spread
}

console.log(calcutateGPA(3, 5, 7, 25));

// 2. destructuring
const VietNamTeam = [
    "Nguyen Huu Thang",
    "Nguyen Cong Phuong",
    "Luong Xuan Truong",
    "Nguyen Van Toan",
    "Nguyen Tuan Anh",
    "Phan Van Hau",
    "Ha Duc Chinh"
];

const [coach, captain, ...players] = VietNamTeam;