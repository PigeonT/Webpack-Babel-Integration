class Foo {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

}

let foo = new Foo('Nob');

console.log(foo.getName());
