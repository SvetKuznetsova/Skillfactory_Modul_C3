class ElectroDevice {
    constructor(name, power){
    this.name = name;
    this.power = power;
    this.turnDevice = false; 
  }
  // Включение в розетку
  turnOn(){
    console.log(`The ${this.name} is turned on.`);
    this.turnDevice = true;
  }
  // Выключение из розетки
  turnOff(){
    console.log(`The ${this.name} is turned off.`);
    this.turnDevice = false;
  }
}
  // Прибор 1
  class ElectroLamp extends ElectroDevice {
    constructor(name, color, power){
    super(name, power);
    this.color = color;
    this.turnDevice = false;
  }
}
  
  // Прибор 2
  class TV extends ElectroDevice {
    constructor(name, size, power){
    super(name, power);
    this.size = size;
    this.turnDevice = false;
  }
}
    
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