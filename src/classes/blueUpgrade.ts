export class BlueUpgrade extends HTMLElement {
  private _x: number = 0;
  private _y: number = 0;
  private _alive = false;
  private speed = 7;
  
  private game: Element;

  constructor(x: number, y: number) {
    super();
    this.game = document.getElementsByTagName("game")[0];
    this.game.appendChild(this);

    this._x = x;
    this._y = y;

  }

  public notAlive() {
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