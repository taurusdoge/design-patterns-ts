interface IObserver {
  update: () => void;
}

class Sensor {
  observers: Array<IObserver> = [];

  constructor(public temperature: number) {
    this.temperature = temperature;
  }

  add(o: IObserver) {
    this.observers.push(o);
  }

  getState() {
    return this.temperature;
  }

  setState(value: number) {
    this.temperature = value;
    this.execute();
  }

  execute() {
    this.observers.forEach(o => o.update());
  }
}

class Display implements IObserver {
  constructor(public sensor: Sensor) {
    this.sensor = sensor;
  }

  update() {
    console.log(`New temperature is ${this.sensor.getState()}`);
  }
}

const tempSensor = new Sensor(54);
const display = new Display(tempSensor);
tempSensor.add(display);

tempSensor.setState(32);
tempSensor.setState(48);