class Animal {
  constructor(public name: string) {
    this.name = name;
  }

  about(): string {
    return `I don't know who I am`;
  }
}

class Dog extends Animal {
  constructor(public name: string) {
    super(name);
  }

  about(): string {
    return `${this.name} goes woof-woof!`;
  }
}

class Cat extends Animal {
  constructor(public name: string) {
    super(name);
  }

  about(): string {
    return `${this.name} goes purr-purr...`;
  }
}

class DecisionMaker {
  static createAnimal(type?: string, name?: string) {
    switch (type) {
      case 'dog':
        return new Dog(name);
      case 'cat':
        return new Cat(name);
      default:
        return new Animal(name);
    }
  } 
}

const myAnimal = DecisionMaker.createAnimal();
console.log(myAnimal.about());