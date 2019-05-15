// class inheritance

class Animal {
	constructor(name) {
		this.name = name;
	}

	eat() {
		console.log('Eatting...');
	}
}

class Bird extends Animal {
	fly() {
		console.log('Flying...');
	}
}

class Parrot extends Bird {
	speak() {
		console.log('Speaking...');
	}
}

const vet = new Parrot('Tin');

vet.eat();
vet.speak();