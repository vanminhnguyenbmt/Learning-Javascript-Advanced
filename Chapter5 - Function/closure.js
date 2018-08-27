function talkTo(people) {
    var age = 22;

    return function send(message) {
        debugger;
        console.log('Hi, ' + people + ' ' + message + ' ' + age);
    }
}

// talkTo('Nguyen')('Wasssuppp');

var hi = talkTo('Nguyen');

console.log(hi);

hi('Wasssuppp');