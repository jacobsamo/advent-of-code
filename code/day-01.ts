import data from "../data/day-01-part1.json";

const sortedLeft = data.colLeft.sort();
const sortedRight = data.colRight.sort();

// Part 1
let sum = 0;

sortedLeft.forEach((item, index) => {
  sum += Math.abs(item - sortedRight[index]);
});

console.log("Part 1 answer:", sum);


// Part 2

console.log("Part 2 answer:", "TODO");