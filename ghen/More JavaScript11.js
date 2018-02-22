vehiclesList.push('scooter');
advertisement = "Amazing Joe's Garage, we service ";
vList = [vehiclesList[0]], vLast = vehiclesList[vehiclesList.length - 1];

for (let i = 1; i < vehiclesList.length - 1; i++) {
   vList.push(vehiclesList[i]);
}

advertisement = advertisement + vList.join('s, ') + 's and ' + vLast + 's.';
console.log(advertisement);