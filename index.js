// Code your solution in this file!
function returnFirstTwoDrivers(drivers){
    const firstTwoDrivers = drivers.slice(0,2)
    return firstTwoDrivers
}

function returnLastTwoDrivers(drivers) {
    const lastTwoDrivers = drivers.slice(2)
    return lastTwoDrivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(number){
    function fareMultiplier() {
        return number * number;
    }
    return fareMultiplier;
}

function fareDoubler(fare2){
    return fare2 * 2;
}
const fare2 = fareDoubler(createFareMultiplier());

function fareTripler(fare3){
    return fare3 * 3;
}
const fare3 = fareTripler(createFareMultiplier());

function selectDifferentDrivers(drivers, functionName) {
   return functionName(drivers)
}
    
