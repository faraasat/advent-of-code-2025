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

    let flag = true;

    if (!isEven) {
      for (let i = 0; i < numStr.length - 1; i++) {
        flag = flag && numStr[i] == numStr[i + 1];
      }

      if (flag) {
        sum += i;
        console.log(i);
      }
    } else {
      const half = numStr.length / 2;

      for (let j = 1; j < half; j++) {
        let flag = true;

        for (let k = 0; k < numStr.length - 1; k += j) {
          const part = numStr.slice(k, k + j);
          const nextPart = numStr.slice(k + j, k + j + j);

          console.log({ j, k, numStr, half, part, nextPart });

          flag = flag && part === nextPart;

          if (flag === false) break;
        }

        if (flag) {
          console.log(i);
          sum += i;
        }
      }
    }

    i++;
  }
}

console.log("Sum:", sum);
