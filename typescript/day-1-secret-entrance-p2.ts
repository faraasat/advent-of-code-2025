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

  const before = startingPoint;

  startingPoint =
    direction == "L" ? startingPoint - number : startingPoint + number;

  if (startingPoint > 100) {
    password += Math.trunc(startingPoint / 100);
  }

  if(startingPoint < -100) {
    password -= Math.trunc(startingPoint / 100);

    startingPoint = 100 + (startingPoint % 100);

  } else if (startingPoint < 0 && before > 0) {
    password -= Math.trunc(startingPoint / 100);

    startingPoint = 100 + (startingPoint % 100);
  }

  startingPoint %= 100;

  if (startingPoint == 0) {
    password++;
  }
}

console.log(password);
