var raceNumber = Math.floor(Math.random() * 1000);

var earlyRegister = false;

var runnersAge = 33;

if (runnersAge > 18 && earlyRegister === true) {
    raceNumber += 1000;
    console.log(`You will race at 9:30am. Your race number is ${raceNumber}.`);
}
else if ( runnersAge > 18 && earlyRegister === false ){
    console.log(`You will race at 11:00am. Your race number is ${raceNumber}.`);
}
else if (runnersAge < 18) {
    console.log(`You will race at 12:30pm. Your race number is ${raceNumber}.`);
}
