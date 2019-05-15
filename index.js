// function context and bind

var mouse = {
	name: 'Mickey',
	sayHi: function() {
		console.log('Hi, my name is ', this.name);
	}
};

// mouse.sayHi();  // function context

// var say = mouse.sayHi; // global context
// say();

var say = mouse.sayHi.bind(mouse);
say();

// var cat = {
// 	name: 'Tom'
// };

// var say = mouse.sayHi.bind(cat);
// say();