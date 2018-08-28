// extends object default

var a = 2;

Number.prototype.square = function () {
    return this * this;
}

Number.prototype.cube = function () {
    return this.square()*this;
}

console.log(a.square());
console.log(a.cube());


var b = 3;
console.log(b.cube());
