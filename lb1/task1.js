function hoisting() {
    console.log(a);
    var a = 1;
    console.log(a);
}

hoisting();