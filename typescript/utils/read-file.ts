import fs from "fs";
import path from "path";

export function readFile(fileName: string): Array<string> {
  const filePath = path.join(__dirname, "../", fileName);
  console.log(`Reading file from: ${filePath}`);
  return fs.readFileSync(filePath, "utf-8").split("\n");
}

export function readFileString(fileName: string): string {
  const filePath = path.join(__dirname, "../", fileName);
  console.log(`Reading file from: ${filePath}`);
  return fs.readFileSync(filePath, "utf-8");
}
