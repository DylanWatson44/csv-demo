const newlineRegex = /\r?\n|\r/;

const ParseCSVStringToArray = function (
  csvString: string,
  delimiter: string
): Object[] {
  const linesOfCSV = csvString.split(newlineRegex);

  const headerline = linesOfCSV.shift();
  const columnNames = headerline.split(delimiter);

  const resultObjs = linesOfCSV.map((line) => {
    const columns = line.split(delimiter);
    const obj = {};
    columns.forEach((value, index) => {
      const columnName = columnNames[index];
      obj[columnName] = value;
    });

    return obj;
  });

  return resultObjs;
};

module.exports = ParseCSVStringToArray;
