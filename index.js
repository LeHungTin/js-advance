// super

// class Hero {
// 	constructor(name, hp, damage) {
// 		this.name = name;
// 		this.hp = hp;
// 		this.damage = damage;
// 	}

// 	applyDamage(damage) {
// 		this.hp -= damage;
// 	}

// 	attack(enemy) {
// 		enemy.applyDamage(this.damage);
// 	}
// }

// const Tin = new Hero('Tin', 100, 10);
// const Quang = new Hero('Quang', 150, 5);

// console.log({ Tin, Quang });
// Tin.attack(Quang);
// console.log({ Tin, Quang });

class Hero {
	constructor(name, hp, damage) {
		this.name = name;
		this.hp = hp;
		this.damage = damage;
	}

	applyDamage(damage) {
		this.hp -= damage;
	}

	attack(enemy) {
		enemy.applyDamage(this.damage);
	}
}

class RangedHero extends Hero {  // subclass
	constructor(name, hp, damage, range) {
		super(name, hp, damage);
		this.range = range;
	}

	attack(enemy) {
		super.attack(enemy);
		this.hp += this.damage;
	}
}

const Tin = new RangedHero('Tin', 100, 10);
const Quang = new Hero('Quang', 150, 5);

console.log({ Tin, Quang });
Tin.attack(Quang);
console.log({ Tin, Quang });
