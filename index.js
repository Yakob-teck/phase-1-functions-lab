// Code your solution in this file!
function distanceFromHqInBlocks(pickUp) {
    //returns the number of blocks given a value
    return Math.abs(42-pickUp);
  }
  let feet1=distanceFromHqInBlocks();
  function distanceFromHqInFeet(pickUp,){
  

  return Math.abs(42-pickUp)*264;
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,

   
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }
  function distanceTravelledInFeet(start, destination) {
    //returns the n(umber of feet traveled
    return Math.abs((destination-start)*264)
  }
  distanceTravelledInFeet(43,48)
  function calculatesFarePrice(start,destination) {
   let travelprice =distanceTravelledInFeet(start,destination)
   if (travelprice<=400) {
    return 0;
  }
   else if (travelprice>400 && travelprice<=2000){
    return Math.abs((travelprice-400))*0.02;
   }
else if(travelprice>2000 && travelprice <=2500){
    return 25;
}
    else if(travelprice > 2500){
        return 'cannot travel that far'
    }
}
    //returns the fare for the customer
