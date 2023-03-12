// finances with all the input data
const finances = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099],
];
// Calculate the number of months in finances
const totalMonths = finances.length;
// console.log(totalMonths);

// calculate the net total amount of Profit/Losses for entire period
let netTotal = 0;
for (let i = 0; i < totalMonths; i++) {
  netTotal += finances[i][1];
  // console.log(finances[i][1]);
}

// calculate the average change in Profit/Losses for entire period
let totalChange = 0;
for (let i = 1; i < totalMonths; i++) {
  totalChange += finances[i][1] - finances[i - 1][1];
}

const averageChange = (totalChange / (totalMonths - 1)).toFixed(2);
// console.log(averageChange);

// calculate the greatest increase in profits (date & amount) for entire period
let greatestIncrease = ['', 0];
for (let i = 1; i < totalMonths; i++) {
  const increase = finances[i][1] - finances[i - 1][1];
  if (increase > greatestIncrease[1]) {
    greatestIncrease = [finances[i - 1][0], increase];
  }
}
// console.log(greatestIncrease);

// calculate the greatest decrease in losses (date & amount) for entire period
let greatestDecrease = ['', 0];
for (let i = 1; i < totalMonths; i++) {
  const decrease = finances[i][1] - finances[i - 1][1];
  if (decrease < greatestDecrease[1]) {
    greatestDecrease = [finances[i - 1][0], decrease];
  }
}
// console.log(greatestDecrease);

// output the results to the console using console.log with template literals (${}) you gotta luv em!
console.log('Financial Analysis');
console.log('-------------------');
console.log(`Total Months: ${totalMonths}`);
console.log(`Total: $${netTotal}`);
console.log(`Average Change: $${averageChange}`);
console.log(`Greatest Increase in Profits/Losses: ${greatestIncrease[0]} (${greatestIncrease[1]})`);
console.log(`Greatest Decrease in Profits/Losses: ${greatestDecrease[0]} (${greatestDecrease[1]})`);



// MY IDE IS AWESOME!
// template literals
// const Fullname = 'john shrimp taco VI';
// const age = 27;
// const sentence = `I am ${Fullname} and I am ${age} years old. And here is some simple math ${2.3 * 3.9}`;
//  console.log(sentence);


 // for loop
// const names = ['bob', 'dennis', 'leroy', 'gregory', 'alton'];
// const lastName = 'reggaeMusic';
// let fullName = [];

// for(let i = 0; i < names.length; i++) {
//   console.log(i);
//   console.log(names[i]);

//   const fullName = `${names[i]} ${lastName}`;
//   console.log(fullName);
// }
// console.log(names);
// console.log(lastName);

// Array properties and Methods
//let names = ['bob', 'dennis', 'leroy', 'gregory', 'alton'];

// length
//console.log(names.length);
//console.log(names[names.length - 2]);

// concat adds array elements together
//const lastNames = ['mango', 'kiwi', 'pineapple'];
//const allNames = names.concat(lastNames);
//console.log(allNames);
// reverse 
//console.log(allNames.reverse());
// unshift adds to the beginning of the array
//allNames.unshift('chronixx');
//console.log(allNames);
// pop removes the last element 
//allNames.pop();
//console.log(allNames);
// shift removes the first element
//allNames.shift();
//console.log(allNames);
// sort sorts the array in ascending, ASCII character order.
//allNames.sort();
//console.log(allNames);
// push adds an element to the end of the array
//allNames.push('cherry');
//console.log(allNames);
// below map gets each element from the array and console logs it
//allNames.map(allNames => console.log(allNames));
// splice - mutates original array
//below splice removes an element from the array at index point, and how many elements to remove (2, 2)
//const specificNames = allNames.splice(2, 2);
//console.log(allNames);
