import { readFile } from "./utils/read-file";

let password = 0;
let startingPoint = 50;

const getDirectionAndNumber = (str: string): [string, number] => {
  const direction = str.charAt(0);
  const num = parseInt(str.slice(1, str.length), 10);
  return [direction, num];
};

const content = readFile("/inputs/d1.txt");

for (const cont of content) {
  const [direction, number] = getDirectionAndNumber(cont);

  if (direction == "L") {
    startingPoint -= number;
    startingPoint = 100 + startingPoint;
  }
  if (direction == "R") {
    startingPoint += number;
  }

  startingPoint %= 100;

  if (startingPoint == 0) {
    password++;
  }
}

console.log(password);
