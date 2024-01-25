// iterable

// iterator

// concrete collection

// interface myIterable {
//   getIterator: () => myIterator;
// }

// interface myIterator {
//   hasNext: () => boolean;
//   next: () => void;
//   current: () => any;
// }

class myArray {
  private _values: Array<string> = [];

  constructor(
    ...values: Array<string>
  ) {
    this._values = values;
  }

  getIterator() {
    return new myArrayIterator(this._values);
  }
}

class myArrayIterator {
  constructor(
    private _values: Array<string>
  ) {
    this._values = _values;
  }

  hasNext() {

  }

  next() {

  }

  current() {
    
  }
}
