// Default parameters

function greeting(name = 'friend', language = 'ja') {
	if(language === 'en') {
		return `Hi, ${name}`;
	}

	if(language === 'ja') {
		return `Konichiwa, ${name}`; 
	}

	return 'Chao ban';
}

console.log(greeting('Tin'));

//cho phep cac tham so duoc dat ten duoc khoi tao voi gia tri mac dinh neu khong co value duoc truyen vao hoac undefined duoc truyen vao