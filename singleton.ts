class Singleton {
  private static s: Singleton;
  private static data:number;

  private constructor(data: number) {
    Singleton.data = data;
  }

  static getInstance(): Singleton {
    if (!Singleton.s) {
      return new Singleton(15);
    } else {
      return Singleton.s;
    }
  }

  print() {
    console.log(Singleton.data);
  }
}

const mySingleton = Singleton.getInstance();
mySingleton.print();