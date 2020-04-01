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
  var arr = [];
  for (var i = 0; i < 6; i++) {
    arr[i] = readLine().split(" ");
    // // console.log(arr)
    arr[i] = arr[i].map(Number);
  }
  // console.log(arr)
  var sumsArray = [];
  for (var x = 0; x < arr.length; x++) {
    for (var y = 0; y < arr[x].length; y++) {
      var currentSum = 0;
      if (arr[x] && arr[x + 1] && arr[x + 2]) {
        if (arr[x][y + 1] != undefined && arr[x][y + 2] != undefined) {
          sumsArray.push(
            arr[x][y] +
              arr[x][y + 1] +
              arr[x][y + 2] +
              arr[x + 1][y + 1] +
              arr[x + 2][y] +
              arr[x + 2][y + 1] +
              arr[x + 2][y + 2]
          );
        }
      }
    }
  }

  // console.log(sumsArray)
  console.log(Math.max.apply(null, sumsArray));
  // ______________________ CODE BELOW FAILED 2/8 TEST CASES
  // let arr = Array(6);
  // // console.log(arr)
  // // Create input array
  // for (var x = 0; x < 6; x++) {
  //     arr[x] = readLine().split(' ');
  //     // console.log(arr[x])
  //     arr[x] = arr[x].map(Number);
  // }
  // // console.log(arr)
  // var currentSum = 0;
  // var currentMax = 0;

  // // Loop through each row of numbers
  // for (var x = 0; x < arr.length; x++) {
  //     // Loop through each column
  //     for (var y = 0; y < arr[x].length; y++) {
  //         // Check if there are 3 consecutive numbers
  //         if (arr[x] && arr[x + 1] && arr[x + 2]) {
  //             if (arr[x][y + 1] != undefined && arr[x][y + 2] != undefined) {
  //                 // Add numbers from hourglass shape
  //                 currentSum = (arr[x][y] + arr[x][y+1] + arr[x][y+2] + arr[x+1][y+1] + arr[x+2][y] + arr[x+2][y+1] + arr[x+2][y+2])
  //             }
  //             // Replace currentMax if the currentSum is larger
  //             if (currentSum > currentMax){
  //                 currentMax = currentSum
  //             }
  //         }
  //     }
  // }
  // console.log(currentMax)
}
