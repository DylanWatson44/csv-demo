const fs = require("node:fs");
const ParseCSVStringToArray = require("./src/parseCSV");

const args = process.argv.slice(2);

if (args.length < 1) {
  console.error("A file path is required as an argument");
  process.exit(2);
}

if (args.length > 2) {
  console.error("a max of two arguments are expected");
  process.exit(2);
}

const fileToProcess = args[0];
let data: string = "";
try {
  data = fs.readFileSync(fileToProcess, "utf8");
} catch (err) {
  console.error("failed to read csv file", err);
  process.exit(2);
}

let delimiter = ",";
if (args[1]) {
  delimiter = args[1];
}

const parsedContent = ParseCSVStringToArray(data, delimiter);
console.log(parsedContent);
