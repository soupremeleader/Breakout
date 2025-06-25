export class BlueUpgrade extends HTMLElement {
  private _x: number = 0;
  private _y: number = 0;
  private _alive = false;
  private speed = 7;
  private _brickWidth: number = 64;
  private _brickHeight: number = 32;
  
  private game: Element;

  constructor(row: number, column: number, columns: number) {
    super();
    // plaats het grid met blokken in het midden van het scherm
    let offsetX = (window.innerWidth - columns * this._brickWidth) / 2;
    let x = column * this._brickWidth + offsetX;

    // en op de y-as 100px vanaf de top
    let y = row * this._brickHeight + 100;

    // Voeg op deze plek een nieuw blok toe aan het spel
    this.game = document.getElementsByTagName("game")[0];
    this.game.appendChild(this);

    this._x = x;
    this._y = y;

  }

  public notAlive() {
    console.log("yippee")
    return !this._alive;
  }

  public update() {
    if (this._alive) {
        let newY: number = 0;
        newY = this._y + this.speed;
    }
    this.draw()
  }

  public draw(): void {
    this.style.transform = `translate(${this._x}px, ${this._y}px)`;
  }
}

window.customElements.define("faster-upgrade", BlueUpgrade as any);