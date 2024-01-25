class Check {
  
}

class Bank {
  private money: number;
  constructor(money: number) {
    this.money = money;
  }

  getMoney() {
    return this.money;
  }  

  setMoney(money: number) {
    this.money = money;
  }
}