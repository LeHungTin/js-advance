// var a = {
// 	name: 'aaa',
// 	run: function() {
// 		var run2 = function() {
// 			console.log('My name is ', this.name);
// 		}.bind(this);

// 		run2();
// 	}
// };

// a.run();

var a = {
	name: 'aaa',
	run: function() {
		var run2 = () => {
			console.log('My name is ', this.name);
		}

		run2();
	}
};

a.run();

// arrow function khong co context, this cua no la context cua ham gan nhat chua no.