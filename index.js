// Array-like object & arguments

// const names = ['Tin', 'Tuan', 'Hung'];

// for(let i = 0; i < names.length; i++) {
// 	console.log(names[i]);
// }

// const obj = {
// 	0: 'Tin',
// 	1: 'Tuan',
// 	2: 'Hung',
// 	length: 3
// };

// for(let i = 0; i < obj.length; i++) {
// 	console.log(obj[i]);
// }

function sum() {
	// console.log(arguments);
	// console.log(arguments.length);
	let result = 0;
	for(let i = 0; i < arguments.length; i++) {
		result += arguments[i];
	}
	return result;
}

// function sum() {
// 	const numbers = Array.from(arguments);
// 	return numbers.reduce(function(sum, num) {
// 		return sum + num;
// 	}, 0);
// }

console.log(sum(1, 2, 3, 5, 7, 9));