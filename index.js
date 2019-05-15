// call

function greeting(name) {
	console.log(`Hi! My name is ${this.name} I am  ${this.age}`);
}

var cat = {
	name: 'Tom',
	age: '100'
};

greeting.call(cat);
// greeting.call(cat, 'Mickey'); khi da truyen object vao roi thi tham so cung ten khong con tac dung haha :)))

// Goi ham va tra ve gia tri cua ham.
// Nhan vao tham so thu nhat dai dien cho this cua ham, cac tham so sau la cac tham so cua ham