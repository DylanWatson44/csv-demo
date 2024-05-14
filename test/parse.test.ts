const ParseCSVStringToArray = require("../src/parseCSV");

describe("ParseCSVStringToArray", () => {
  test("handles a basic happy path case", () => {
    let testString =
      "product name,number of products,product price\napples,2,$3\npears,4,$5";

    expect(ParseCSVStringToArray(testString, ",")).toEqual([
      {
        "product name": "apples",
        "number of products": "2",
        "product price": "$3",
      },
      {
        "product name": "pears",
        "number of products": "4",
        "product price": "$5",
      },
    ]);
  });

  test("handles case with a different line ending", () => {
    let testString =
      "product name,number of products,product price\r\napples,2,$3\r\npears,4,$5";

    expect(ParseCSVStringToArray(testString, ",")).toEqual([
      {
        "product name": "apples",
        "number of products": "2",
        "product price": "$3",
      },
      {
        "product name": "pears",
        "number of products": "4",
        "product price": "$5",
      },
    ]);
  });

  test("handles a case with another delimiter", () => {
    let testString =
      "product name;number of products;product price\napples;2;$3\npears;4;$5";

    expect(ParseCSVStringToArray(testString, ";")).toEqual([
      {
        "product name": "apples",
        "number of products": "2",
        "product price": "$3",
      },
      {
        "product name": "pears",
        "number of products": "4",
        "product price": "$5",
      },
    ]);
  });

  test("handles a case where items are missing", () => {
    let testString =
      "product name,number of products,product price\napples,,$3\npears,4,";

    expect(ParseCSVStringToArray(testString, ",")).toEqual([
      {
        "product name": "apples",
        "number of products": "",
        "product price": "$3",
      },
      {
        "product name": "pears",
        "number of products": "4",
        "product price": "",
      },
    ]);
  });

  test("handles a case with no data", () => {
    let testString = "product name,number of products,product price";
    let result = ParseCSVStringToArray(testString, ",");
    expect(result).toHaveLength(0);
    expect(result).toEqual([]);
  });
});
