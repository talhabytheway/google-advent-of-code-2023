import { gameRecords } from "./constant";
const constraint = {
  red: 12,
  green: 13,
  blue: 14,
};
const getRecordsSumP1 = (
  inputRecords: string,
  constraint: { [key: string]: number }
): number => {
  const gameRecordsObject = {};
  var sumOfGameNumbers = 0;
  inputRecords.split("\n").forEach((gameRecordString) => {
    const [key, value] = gameRecordString.split(": ");
    const gameNumber = key.replace("Game ", "");
    let flag = false;
    value.split("; ").forEach((passes) => {
      passes.split(", ").forEach((color) => {
        const answer = color.split(" ");
        const [numberOfDiceString, colorKey] = answer;
        const numberOfDice = parseInt(numberOfDiceString);
        flag = constraint[colorKey] < numberOfDice || flag;
      });
    });

    if (!flag) {
      sumOfGameNumbers += parseInt(gameNumber);
    }
  });
  return sumOfGameNumbers;
};

const getRecordsSumP2 = (inputRecords: string): number => {
  let powerSum = 0;
  inputRecords.split("\n").forEach((gameRecordString, index) => {
    const [key, value] = gameRecordString.split(": ");

    const numberOfColorsPerGame = {
      red: 0,
      blue: 0,
      green: 0,
    };
    value.split("; ").forEach((passes) => {
      passes.split(", ").forEach((color) => {
        const answer = color.split(" ");
        const [numberOfDiceString, colorKey] = answer;
        const numberOfDice = parseInt(numberOfDiceString);
        if (numberOfColorsPerGame[colorKey] < numberOfDice)
          numberOfColorsPerGame[colorKey] = numberOfDice;
      });
    });
    const power =
      numberOfColorsPerGame.red *
      numberOfColorsPerGame.blue *
      numberOfColorsPerGame.green;
    powerSum += power;
  });
  return powerSum;
};

const testConst = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

// const result = getRecordsSum(testConst, constraint);
const result = getRecordsSumP2(gameRecords);
console.log(result);
