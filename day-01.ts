import { calibrationValue } from "./constant";

const replacements = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

const getCalibrationValue = (input: string): number => {
  const regex = new RegExp(Object.keys(replacements).join("|"), "g");
  const result = input.replace(regex, (matched) => replacements[matched]);
  let sum = 0;
  result.split("\n").forEach((e) => {
    const numberArray = e.replace(/[^0-9]/g, "");
    const numberArrayLength = numberArray.length;
    const number =
      numberArrayLength > 0
        ? numberArray[0] + numberArray[numberArrayLength - 1]
        : "0";
    sum += parseInt(number);
  });
  return sum;
};

const calibratedValue = getCalibrationValue(calibrationValue);
console.log(calibratedValue);
// Output: 54076
export { getCalibrationValue };
