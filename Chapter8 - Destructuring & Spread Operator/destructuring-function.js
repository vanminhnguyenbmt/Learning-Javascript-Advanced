
// destructuring với function không tham số
function sayHi() {
    return {
        en: 'Hello',
        vn: 'Xin Chao',
        cn: 'Chao Xin',
        sp: 'Hola'
    }
}

const { en: english, vn: vietnamese } = sayHi();

// destructuring với function có tham số
var names = ['Nguyen', 'Huy', 'End'];

function logInfo([first, second, third] = []) {
    console.log(`Hello ${first} ${second} ${third}`);
}

logInfo(names);