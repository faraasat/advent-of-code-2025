import { readFile } from "./utils/read-file";

const content = readFile("/inputs/d3.txt");

let sum = 0;

for (const line of content) {
  let largestNumber = "0";
  let largestNumberIndex = -1;
  let anotherLargestNumber = "0";

  for (let l = 0; l < line.length - 1; l++) {
    if (line[l] > largestNumber) {
      largestNumber = line[l];
      largestNumberIndex = l;
    }
  }

  for (let l = largestNumberIndex + 1; l < line.length; l++) {
    if (line[l] > anotherLargestNumber) {
      anotherLargestNumber = line[l];
    }
  }

  sum += +(largestNumber + anotherLargestNumber);
}

console.log(sum);
