function sayHello(name) {

    // if (name === undefined || name === null) {
    //     name = 'Default name';
    // }

    name = name || "Default name";
    console.log("Hi ", name);
}

sayHello();