// static
// static  method chi duoc goi truc tiep tu class
// cac instance duoc tao ra tu class khong the goi cac static method


class Foo {
	static someMethod() {
		console.log('some method');
	}

	anotherMethod() {
		console.log('another method');
	}
}

Foo.someMethod();

// no tuong tu nhu prototye

function Foo() {

}

Foo.protopye.anotherMethod = function() {
	console.log('another method');
}

Foo.someMethod = function() {
	console.log('some method');
}