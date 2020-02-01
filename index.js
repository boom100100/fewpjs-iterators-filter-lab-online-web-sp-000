// Code your solution here


function findMatching(drivers, searchValue){
  return drivers.filter(driver => driver.toLowerCase() === searchValue.toLowerCase());
}

function fuzzyMatch(drivers, searchValue){
  return drivers.filter(driver => driver.toLowerCase() === searchValue.toLowerCase());
}

function matchName(drivers, searchValue){
  return drivers.filter(driver => driver.name === searchValue);
}