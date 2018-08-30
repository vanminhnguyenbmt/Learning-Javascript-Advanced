// Object Literals Upgrade
// Property value shorthand - cùng tên bỏ được

var first = "Minh";
var last = "Nguyen";

// var user = {
//     first: first,
//     last: last
// }

// Property value shorthand 
var user = {
    first,
    last
}

function logInfo({ address }) {
    console.log(address);
}

let address = "HCM";

var user1 = {
    address
};

logInfo(user1);