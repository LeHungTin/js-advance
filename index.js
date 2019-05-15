class Mouse {
	constructor(name) {
		this.name = name;
	}

	run() {
		console.log(this.name + ' is running');
	}
}

const mouse = new Mouse('Mickey');
mouse.run();

// viet theo kieu huong doi tuong
// thuc chat la dua tren prototype