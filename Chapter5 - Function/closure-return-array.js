function functionCreator() {
    var arrays = [];
    for(var i = 0; i < 3; i++) { // dùng let i thay cho var
        arrays[i] = function() {
            console.log(i);
        }
    }
    return arrays; // array of functions
}

var showNumbers = functionCreator();

// console.log(showNumbers);


showNumbers[0]()
showNumbers[1]()
showNumbers[2]()