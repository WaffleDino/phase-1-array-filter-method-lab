// Code your solution here

// function findMatching(drivers, nameSearchedString) {
//     return drivers.filter(function(match) {
//         return match.toLowerCase() == nameSearchedString.toLowerCase();
//     })
// }

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const findMatching = (driversNamesArray, nameSearchedString) => {
    return driversNamesArray.filter(driverName => driverName.toLowerCase() == nameSearchedString.toLowerCase())
}
findMatching(drivers,'Bobby')

// * `fuzzyMatch` - This function takes an array of drivers' names and a `string`
//   as arguments for querying the array, and returns all drivers whose names begin
//   with the provided letters.

const fuzzyMatch = (driversNamesArray, nameSearchedString) => {
    return driversNamesArray.filter(driverName => driverName.charAt(0).toLowerCase() == nameSearchedString.charAt(0).toLowerCase());
}
fuzzyMatch(drivers,'Sa')

// * `matchName` - This function takes an array of `driver` objects and a `string`
//   as arguments. Each `driver` object has two properties: `name` and `hometown`.
//   The function should return each element whose `name` property matches the
//   provided `string` argument.

const matchName = (drivers, nameSearchedString) => {
    return drivers.filter(function(hometown){
      return hometown.name === nameSearchedString
    })
  }

