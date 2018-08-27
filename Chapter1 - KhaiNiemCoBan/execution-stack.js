function b() {
    console.log('b called');
    
    console.log(myVar);
}

function a() {
    console.log('a called');
    
    b() //invoke hàm
    myVar = 69
}

var myVar = 0
a() //invoke hàm
console.log(myVar);

// var text = 'outside';
// function show(){
//     console.log(text);
//     var text = 'inside';
// };
// show();
