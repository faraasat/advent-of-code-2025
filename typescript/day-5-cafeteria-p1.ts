import { readFileString } from "./utils/read-file";

const content = readFileString("/inputs/d5.txt");

const splittedContent = content.split("\n\n");

const [mappings, toCheck] = [
  splittedContent[0].split("\n"),
  splittedContent[1].split("\n"),
];

const mappingList = [];

for (const mapping of mappings) {
  mappingList.push(mapping.split("-").map((x) => +x));
}

let result = 0;

for (const check of toCheck) {
  const tc = +check;

  for (const mapping of mappingList) {
    if (tc >= mapping[0] && tc <= mapping[1]) {
      result++;
      break;
    }
  }
}

console.log(result);
