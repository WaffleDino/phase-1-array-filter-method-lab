// Code your solution here

// function findMatching(drivers, nameSearchedString) {
//     return drivers.filter(function(match) {
//         return match.toLowerCase() == nameSearchedString.toLowerCase();
//     })
// }

const drivers = ['Bobby', 'Sammy', 'Sully', 'Annette', 'Sarah', 'bobby'];
const driversObj = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

const findMatching = (driversNamesArray, nameSearchedString) => {
    return driversNamesArray.filter(driverName => driverName.toLowerCase() == nameSearchedString.toLowerCase())
}
findMatching(drivers,'Bobby')

// // * `fuzzyMatch` - This function takes an array of drivers' names and a `string`
// //   as arguments for querying the array, and returns all drivers whose names begin
// //   with the provided letters.

const fuzzyMatch = (driversNamesArray, nameSearchedString) => {
    return driversNamesArray.filter(driverName => driverName.charAt(0).toLowerCase() == nameSearchedString.charAt(0).toLowerCase());
}

console.log(fuzzyMatch(drivers,'Sa'))

// * `matchName` - This function takes an array of `driver` objects and a `string`
//   as arguments. Each `driver` object has two properties: `name` and `hometown`.
//   The function should return each element whose `name` property matches the
//   provided `string` argument.

const matchName = (driversNamesArray, nameSearchedString) => {
   return driversNamesArray.filter(driverName => driverName.name === nameSearchedString); 
}

console.log(matchName(driversObj,'Bobby'))