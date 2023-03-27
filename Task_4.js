function ElectroDevice(name, power) {
  this.name = name;
  this.power = power;
  this.turnDevice = false; 
}
// Включение в розетку
ElectroDevice.prototype.turnOn = function(){
  console.log(`The ${this.name} is turned on.`);
  this.turnDevice = true;
}
// Выключение из розетки
ElectroDevice.prototype.turnOff = function(){
  console.log(`The ${this.name} is turned off.`);
  this.turnDevice = false;
}

// Прибор 1
function ElectroLamp(name, color, power){
  this.name = name;
  this.color = color;
  this.power = power;
  this.turnDevice = false;
}
ElectroLamp.prototype = new ElectroDevice();

// Прибор 2
function TV(name, size, power) {
  this.name = name;
  this.size = size;
  this.power = power;
  this.turnDevice = false;
}
TV.prototype = new ElectroDevice();

// Экземпляр лампы
const tableLamp = new ElectroLamp('Table lamp', 'white', 5);
// Экземпляр телевизора
const kitchenTv = new TV('Kitchen tv', 'small', 100);

// Включение в розетку
tableLamp.turnOn();
kitchenTv.turnOn();

// Выключение из розетки
tableLamp.turnOff();
kitchenTv.turnOff();

// Результат
console.log(tableLamp)
console.log(kitchenTv)