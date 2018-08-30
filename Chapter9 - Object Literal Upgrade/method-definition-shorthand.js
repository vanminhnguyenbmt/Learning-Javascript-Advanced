// method definition shorthand - hàm ngắn gọn

var user = {
    showName: function (name) {
        
    },
    showAge: function (age) {
        
    },
    showAddress: function (address) {
        
    }
};

// với method definition shorthand
var user = {
    age: 18,
    showName(name) {
        console.log(name);
        console.log(this);
    },
    showAddress(address) {
        console.log(address);
    }
}

user.showName('Nguyen');