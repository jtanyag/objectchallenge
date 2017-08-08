

//function to create car objects
function createNewCar (newModelYear, newMake, newColor) {
  return {
    modelYear: newModelYear,
    make: newMake,
    color: newColor,
    getCar: function() {
      return this.modelYear+" "+this.color+" "+this.make
    }
  }
}

//how to enter car, saves entry in car1
var car1 = createNewCar(2001, "Honda", "silver")


//add functions to get current speed, accelerate, and brake
function createNewCar (newModelYear, newMake, newColor) {
  var speed = 0;
  return {
    modelYear: newModelYear,
    make: newMake,
    color: newColor,
    getCar: function() {
      return this.modelYear+" "+this.color+" "+this.make
    },
    //return current speed
    getSpeed: function() {
      return speed
    },
    //add 10
    accelerate: function() {
      speed += 10
    },
    //subtract 7
    brake: function() {
      speed -= 7
    },
  }
}



//accelerate to 50, decelerate to 0
function createNewCar (newModelYear, newMake, newColor) {
  var speed = 0;
  while (speed < 50) {
    speed++;
  }
  while (speed > 0) {
    speed--;
  }
  return {
    modelYear: newModelYear,
    make: newMake,
    color: newColor,
    getCar: function() {
      return this.modelYear+" "+this.color+" "+this.make
    },
    //return current speed
    getSpeed: function() {
      return speed
    },
    //add 10
    accelerate: function() {
      speed += 10
    },
    //subtract 7
    brake: function() {
      speed -= 7
    },
  }
}
