// abstract factory
class UIFactory {
  constructor(
    private os: string
  ) {
    this.os = os;
  }

  getButton(): Button {
    return ButtonFactory.getButton(this.os);
  }

  getAlert(): Alert {
    return AlertFactory.getAlert(this.os);
  }
}

class AlertFactory {
  static getAlert(os: string) {
    switch (os) {
      case 'win':
        return new WinAlert();
      case 'lin':
        return new LinAlert();
      default:
        break;
    }
  }
}

class ButtonFactory {
  static getButton(os: string) {
    switch (os) {
      case 'win':
        return new WinButton();
      case 'lin':
        return new LinButton();
      default:
        break;
    }
  }
}

// product
abstract class Alert {
  constructor(
    private os: string,
    private width: number,
    private height: number
  ) {
    this.os = os;
    this.width = width;
    this.height = height;
  }
  
  about(): string {
    return `${this.os}_ALERT: ${this.width}x${this.height}`;
  }
}

class WinAlert extends Alert {
  private static TYPE = 'WIN';

  constructor(
    width: number = 640,
    height: number = 480
  ) {
    super(WinAlert.TYPE, width, height);
  }
}

class LinAlert extends Alert {
  private static TYPE = 'LIN';

  constructor(
    width: number = 640,
    height: number = 480
  ) {
    super(LinAlert.TYPE, width, height);
  }
}

abstract class Button {
  constructor(
    private os: string,
    private width: number,
    private height: number
  ) {
    this.os = os;
    this.width = width;
    this.height = height;
  }
  
  about(): string {
    return `${this.os}_BUTTON: ${this.width}x${this.height}`;
  }
}

class WinButton extends Button {
  private static TYPE = 'WIN';

  constructor(
    width: number = 110,
    height: number = 40
  ) {
    super(WinButton.TYPE, width, height);
  }
}

class LinButton extends Button {
  private static TYPE = 'LIN';

  constructor(
    width: number = 100,
    height: number = 50
  ) {
    super(LinButton.TYPE, width, height);
  }
}

const windowsWidgets = new UIFactory('win');
const winButton = windowsWidgets.getButton();
const winAlert = windowsWidgets.getAlert();
console.log(winButton.about(), winAlert.about());

const linuxWidgets = new UIFactory('lin');
const linButton = linuxWidgets.getButton();
const linAlert = linuxWidgets.getAlert();
console.log(linButton.about(), linAlert.about());