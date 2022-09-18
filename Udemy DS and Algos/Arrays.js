// Examples

// 4*4 = 16 bytes of storage
const strings = ['a', 'b', 'c', 'd']

// Grabs 'c' from strings array
strings[2]

// push adds item to the end of the array O(1)
strings.push('e');

// pop removes last item from the array O(1)
strings.pop();

// unshift adds item to the beginning of the array, O(n)
// returns ['x', 'a', 'b', 'c', 'd']
strings.unshift('x');

// splice O(n)
// strings.splice(startIndex, deleteCount, itemToAdd)
// returns ['x', 'a', 'alien', 'b', 'c']
strings.splice(2, 0, 'alien')





// Building an array from scratch in JS
// Arrays in JS are just objects with integer based keys that act like indices

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop(){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }

    shiftItems(index){
        for (let i = index; i < this.length-1; i++) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }
}

const newArray = new MyArray();
newArray.push('hi');
newArray.push('you');
newArray.push('! ');
newArray.delete(0);
newArray.push( ' are');
newArray.push('nice');
newArray.delete(1)
console.log(newArray);
