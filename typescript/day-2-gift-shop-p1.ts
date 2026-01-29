import { readFile } from "./utils/read-file";

const content = readFile("/inputs/d2.txt");

const idList = content[0]
  .split(",")
  .map((id) => id.split("-"))
  .map(([row, col]) => [+row, +col]);

let sum = 0;

for (const [min, max] of idList) {
  let i = min;

  while (i <= max) {
    const numStr = i.toString();

    if (numStr.startsWith("0")) continue;

    const isEven = numStr.length % 2 == 0;

    if (isEven) {
      const half = numStr.length / 2;
      const firstHalf = numStr.slice(0, half);
      const secondHalf = numStr.slice(half);

      if (firstHalf === secondHalf) {
        sum += i;
      }
    }

    i++;
  }
}

console.log("Sum:", sum);
