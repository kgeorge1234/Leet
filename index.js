function greet(name) {
    var data = [1, 2, 3];
    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
    }
    return "Hello, ".concat(name, "!");
}
console.log(greet("John"));
