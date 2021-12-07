function getToDestination(age, isInsured, hasCar, canGetRideshare){
    if (age > 16 && isInsured && hasCar){
        console.log("They can use their own vehicle.")
    } else if (age < 16 || !isInsured || !hasCar && canGetRideshare) {
        console.log("They can call up a rideshare service.")
    } else {
        console.log("They can call a friend for a ride.")
    }
}

getToDestination(17, true, false, true);

