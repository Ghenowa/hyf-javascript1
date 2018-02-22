let vehiclesList = ["motorbike", "caravan", "bike", "car"];
console.log(vehiclesList)

function vehicle2(color, code, age) {
   if (age > 2) {
       console.log('a ' + color + ' used ' + vehiclesList[code]);
   }
   if (age <= 2) {
       console.log('a ' + color + ' new ' + vehiclesList[code]);
   }
}
vehicle2("green", 2, 5);
vehicle2("silver", 1, 1);
vehicle2("blue", 0, 2);