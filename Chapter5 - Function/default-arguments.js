// default arguments

function pay(total, tips = 0, tax = 0) {
    // tips = tips || 0
    return total + tips + tax*0.2;
}

console.log(pay(100, 0, 5));
