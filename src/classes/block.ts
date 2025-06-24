export class Block extends HTMLElement {
  private x: number = 0;
  private y: number = 0;
  private rows: number = 7;
  private columns: number = 12;
  private brickWidth: number = 64;
  private brickHeight: number = 32;

  constructor(row: number, column: number) {
    super();
    // plaats het grid met blokken in het midden van het scherm
    let offsetX = (window.innerWidth - this.columns * this.brickWidth) / 2;
    let x = column * this.brickWidth + offsetX;

    // en op de y-as 100px vanaf de top
    let y = row * this.brickHeight + 100;

    // Voeg op deze plek een nieuw blok toe aan het spel
    let game = document.getElementsByTagName("game")[0];
    game.appendChild(this);

    this.x = x;
    this.y = y;

    console.log(`Place brick at (${x}, ${y})`);
  }

  public draw(): void {
    this.style.transform = `translate(${this.x}px, ${this.y}px)`;
  }
}

window.customElements.define("brick-component", Block as any);
