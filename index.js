// Code your solution in this file!

// Syntax referenceStr.localeCompare(compareString)
// Return value A negative number if the reference string occurs before the compare string; positive if the reference string occurs after the compare string; 0 if they are equivalent.


function logDriverNames(drivers){
  drivers.forEach(function(driver){
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers,location){
  drivers.filter(function(driver){return driver.hometown === location}).forEach(function(driver){return console.log(driver.name)})
}

function driversByRevenue(drivers){
  return drivers.slice().sort(function (d1, d2) {return d1.revenue - d2.revenue})
}

function driversByName(drivers){
  return drivers.slice().sort(function (a, b) {return a.name.localeCompare(b.name)})
  // .reduce(function(agg, el, i, arr){return [...agg, el.name]}, [])
//    // returns a new array of driver objects sorted by their name
//     // attribute from A to Z. Here, you may have to use the
//     // String.prototype.localeCompare() method.
}

function totalRevenue(drivers){
  // debugger
  return drivers.reduce(function(agg, el, i, arr){return agg+el.revenue},0)
   // returns the sum of the revenue earned by each driver.

}

function averageRevenue(drivers){
  return totalRevenue(drivers)/drivers.length
//    // returns the average revenue earned by each driver.
}
