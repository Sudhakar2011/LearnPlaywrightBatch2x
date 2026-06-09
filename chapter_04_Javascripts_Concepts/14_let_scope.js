let a = 10;
console.log(a);    // Global variable global scope

function printHello() {

    console.log("Welcome to JavaScripts Concepts let scope");

    let a = 20;
    console.log(a);

    if (true) {

        let a = 30;
        console.log(a);
    }
    console.log("F->", a); // let scope variable a is 20
}

printHello();
console.log("G->", a);    // Global variable global scope   
