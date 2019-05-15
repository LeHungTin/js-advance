// enhanced object literals

const name = 'Tom';

const cat = {
	name,
	run() {
		console.log('Hi', this.name);
	}
};

cat.run();

// cach viet ngan gon hon so voi viet kieu object literals
// cac object co key trung voi ten cua value