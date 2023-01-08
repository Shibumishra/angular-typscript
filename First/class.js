"use strict";
class Employee {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    getNameWithAddress() {
        return `${this.name} stays at ${this.address}`;
    }
}
let john = new Employee(1, 'Jhone', 'USA');
let address = john.getNameWithAddress();
console.log(john);
console.log(address);
