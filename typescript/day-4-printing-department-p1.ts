import { readFile } from "./utils/read-file";

const content = readFile("/inputs/d4.txt");

const twoDimMatrix: string[][] = content.map((x) => x.split(""));
const height = twoDimMatrix.length;
const width = twoDimMatrix[0].length;

let result = 0;

enum Directions {
  top,
  topRight,
  right,
  bottomRight,
  bottom,
  bottomLeft,
  left,
  topLeft,
}

const checker: Record<Directions, Function> = {
  [`${Directions.top}`]: (x: number, y: number) => twoDimMatrix[y - 1][x],
  [`${Directions.topRight}`]: (x: number, y: number) =>
    twoDimMatrix[y - 1][x + 1],
  [`${Directions.right}`]: (x: number, y: number) => twoDimMatrix[y][x + 1],
  [`${Directions.bottomRight}`]: (x: number, y: number) =>
    twoDimMatrix[y + 1][x + 1],
  [`${Directions.bottom}`]: (x: number, y: number) => twoDimMatrix[y + 1][x],
  [`${Directions.bottomLeft}`]: (x: number, y: number) =>
    twoDimMatrix[y + 1][x - 1],
  [`${Directions.left}`]: (x: number, y: number) => twoDimMatrix[y][x - 1],
  [`${Directions.topLeft}`]: (x: number, y: number) =>
    twoDimMatrix[y - 1][x - 1],
};

const checkSurroundings = (x: number, y: number): boolean => {
  let count = 0;
  let areasToCheck: Array<Directions> = [];

  if (
    ((x == 0 && y == 0) ||
      (x == width - 1 && y == height - 1) ||
      (x == width - 1 && y == 0) ||
      (x == 0 && y == height - 1)) &&
    twoDimMatrix[y][x] != "."
  ) {
    return false;
  } else if (twoDimMatrix[y][x] == ".") {
    return true;
  } else if (x == width - 1 && y != 0) {
    areasToCheck = [
      Directions.top,
      Directions.bottom,
      Directions.topLeft,
      Directions.bottomLeft,
      Directions.left,
    ];
  } else if (y == height - 1 && x != 0) {
    areasToCheck = [
      Directions.left,
      Directions.right,
      Directions.top,
      Directions.topLeft,
      Directions.topRight,
    ];
  } else if (x == 0) {
    areasToCheck = [
      Directions.top,
      Directions.bottom,
      Directions.topRight,
      Directions.bottomRight,
      Directions.right,
    ];
  } else if (y == 0) {
    areasToCheck = [
      Directions.left,
      Directions.right,
      Directions.bottom,
      Directions.bottomLeft,
      Directions.bottomRight,
    ];
  } else {
    areasToCheck = [
      Directions.left,
      Directions.right,
      Directions.top,
      Directions.topLeft,
      Directions.topRight,
      Directions.bottom,
      Directions.bottomLeft,
      Directions.bottomRight,
    ];
  }

  for (const area of areasToCheck) {
    if (checker[area](x, y) == "@") count++;
  }

  return count >= 4;
};

for (let i = 0; i < height; i++) {
  for (let j = 0; j < width; j++) {
    const resp = checkSurroundings(j, i);
    if (!resp) {
      result++;
    }
  }
}

console.log(result);
