export class Block extends HTMLElement {
  private _x: number = 0;
  private _y: number = 0;
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

    console.log(`Place brick at (${x}, ${y})`);
  }

  public get x() {
    return this._x;
  }

  public get y() {
    return this._y;
  }
  
  public get brickWidth() {
    return this._brickWidth;
  }
  
  public get brickHeight() {
    return this._brickHeight;
  }

  public draw(): void {
    this.style.transform = `translate(${this._x}px, ${this._y}px)`;
  }

  public die(): void {
    this.game.removeChild(this)
  }
}

window.customElements.define("brick-component", Block as any);
