"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});

process.stdin.on("end", _ => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map(str => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  var n = parseInt(readLine(), 10);
  // Convert base 10 number to base 2 and store digits in array
  var binary = [];
  while (n > 0) {
    // Keep dividing by 2 (for base 2), unshift (add to front) remainders into arr
    var remainder = n % 2;
    binary.unshift(remainder);
    // console.log(n/2)
    n = Math.floor(n / 2);
    // console.log(n)
  }

  //
  // binary = binary.reverse()
  // console.log(binary)

  // Set counts to keep track of ones and max consecutive ones
  var current = 0;
  var maxCount = 0;

  for (var i = 0; i < binary.length; i++) {
    // loop through array, if 1 ones++
    if (binary[i] === 1) {
      current += 1;
    } else if (binary[i] === 0) {
      // If 0, check if current > max
      if (current > maxCount) maxCount = current;
      current = 0;
    }
  }

  if (current > maxCount) maxCount = current;

  console.log(maxCount);
}
