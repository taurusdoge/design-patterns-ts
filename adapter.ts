class EuropeOutlet {
  private target: OutletAdapter;

  constructor(
    private voltage: number = 220
  ) {
    this.voltage = voltage;
  }
  
  connect(type: string = 'eu') {
    switch (type) {
      case 'eu':
        console.log(`Connected to the Europe outlet`);
        break;
      case 'us':
        this.target = new OutletAdapter(new UsaOutlet);
        this.target.connect();
        break;
      default:
        break;
    }
  }
}

class OutletAdapter {
  constructor(
    private adaptee: UsaOutlet
  ) {
    this.adaptee = adaptee;
  }

  connect() {
    this.adaptee.usaConnect();
  }
}

class UsaOutlet {
  constructor(
    private voltage: number = 110
  ) {
    this.voltage = voltage;
  }

  usaConnect() {
    console.log(`Connected to the USA outlet`);
  }
}

const myOutlet = new EuropeOutlet();
myOutlet.connect();
myOutlet.connect('us');   
