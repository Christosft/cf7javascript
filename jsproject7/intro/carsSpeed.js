const cars = {
  ferrari: 350,
  lambo: 330,
  porsche: 310,
  maserati: 295
}

const topSpeed = 310;

if (cars.ferrari > topSpeed) {
  document.write(`Ferrari top speed ${cars.ferrari} is more than 310kmh`);
} else {
  document.write(`Ferrari top speed ${cars.ferrari} is less than 310kmh`)
}

if (cars.lambo > topSpeed) {
  document.write(`--- Lambo top speed ${cars.lambo} is more than 310kmh`);
} else {
  document.write(`--- Lambo top speed ${cars.lambo} is less than 310kmh`)
}

if (cars.porsche > topSpeed) {
  document.write(`--- Porsche top speed ${cars.porsche} is more than 310kmh`);
} else {
  document.write(`--- Porsche top speed ${cars.porsche} is less than 310kmh`)
}

if (cars.maserati > topSpeed) {
  document.write(`--- Maserati top speed ${cars.maserati} is more than 310kmh`);
} else {
  document.write(`--- Maserati top speed ${cars.maserati} is less than 310kmh`)
}
