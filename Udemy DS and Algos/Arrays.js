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

