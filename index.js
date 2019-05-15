// apply: func.apply(this, [param1, param2,...])

function sum() {
	const numbers = Array.from(arguments);
	return numbers.reduce((sum, num) => sum + num, 0);
}

// console.log(sum(1, 2));

function average() {
	const x = sum.apply(null, arguments);
	return x/arguments.length;
}

console.log(average(1, 2, 3, 6));

// dung tuong tu nhu thang call, nhung nhan vao la 1 mang cac tham so => dung cho truong hop khong biet chinh xac so luong tham so duoc truyen vao (dung arguments)