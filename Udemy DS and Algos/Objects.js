// Inheritance

const object4 = {
	a: function() {
		console.log(this);
	}
}
// Instantiation
class Player {
	constructor(name, type) {
	console.log('player' , this);
		this.name = name;
		this.type = type;
	}
	introduce() {
		console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
	}
}
class Wizard extends Player {
	constructor(name, type) {
		super(name, type)
		console.log('wizard', this);
	}
	play() {
		console.log(`WEEEEEEE I'm a ${this.type}`);
	}
}
const wizard1 = new Wizard('Shelly' , 'Healer');
const wizard2 = new Wizard('Shawn' , 'Dark Magic');





// Implementing Hash tables from scratch

class HashTable {
	constructor(size){
		this.data = new Array(size);
	}


	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) %
			this.data.length
		}
		return hash;
	}

	set(key, value){
		let address = this._hash(key);
		if (!this.data[address]) {
			this.data[address] = [];
			this.data[address].push([key, value])
			console.log(this.data)
		} else {
			this.data[address].push([key, value])
		}
	}

	get(key){
		let address = this._hash(key);
		const currentBucket = this.data[address];
		console.log(currentBucket)

		if (currentBucket) {
			for (let i = 0; i < currentBucket.length; i++) {
				if (currentBucket[i][0] === key) {
					return currentBucket[i][1]
				}
				
			}
		}
	}

	keys(){
		const keysArray = [];
		for (let i = 0; i < this.data.length; i++) {
			if (this.data[i]) {
				keysArray.push(this.data[i][0][0])
			}
			
		}
		return keysArray;
	}

	values() {
		const valuesArray = [];
		for (let i = 0; i < this.data.length; i++) {
			if(this.data[i]){
				valuesArray.push(this.data[i][0][1])
			}
			
		}
	}
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.get('grapes');