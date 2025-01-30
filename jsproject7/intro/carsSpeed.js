const cars = [{
  brand: "Ferrari",
  maxSpeed: 350
},
{
  brand: "Lamborghinhi",
  maxSpeed: 330
},
{
  brand: "Porsche",
  maxSpeed: 310
},
{
  brand: "Maserati",
  maxSpeed: 305
}]

const drivers = [{
  lastname: prompt("Give driver's name"),
  driverTopSpeed: 305
},
{
  lastname: prompt("Give driver's name"),
  driverTopSpeed: 330
},
{
  lastname: prompt("Give driver's name"),
  driverTopSpeed: 350
},
{
  lastname: prompt("Give driver's name"),
  driverTopSpeed: 310,
}]

const speedLimit = 310;

function carTest() {
  cars.forEach(car => {
    if (car.maxSpeed > speedLimit) {
      document.write(`--${car.brand} top speed ${car.maxSpeed} is more than the ${speedLimit}`)
    } else {
      document.write(`--${car.brand} top speed ${car.maxSpeed} is less than the ${speedLimit}`)
    }
  });
}

function testDriver() {
  drivers.forEach(driver => {
    cars.forEach(car => {
      if (driver.driverTopSpeed == car.maxSpeed) {
        document.write(`--The ${driver.lastname} will be the driver of ${car.brand}`)
      }
    })
  })
}

carTest()
testDriver()

