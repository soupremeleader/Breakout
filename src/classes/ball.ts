import { Block } from "./block";

/**
 * Paddle class
 * automatically added to the game tag in index.html
 */
export class Ball extends HTMLElement {
  // Fields
  private _x: number = 0;
  private _y: number = 0;

  private moveUp: boolean = false;
  private moveLeft: boolean = false;
  private moveRight: boolean = false;

  private xSpeed: number = 7;
  private ySpeed: number = -7;

  constructor() {
    super();
    console.log("Paddle created!");

    let game = document.getElementsByTagName("game")[0];
    game.appendChild(this);

    // center of the screen
    this._x = window.innerWidth / 2 - this.clientWidth / 2;
    // 5% from bottom of the screen
    this._y = window.innerHeight * 0.915;

    window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));
    window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e));
  }

  public get x() {
    return this._x;
  }

  public get y() {
    return this._y;
  }

  private onKeyDown(e: KeyboardEvent): void {
    if (e.key == "ArrowUp" && !this.moveUp) {
      this.moveUp = true;
      this.xSpeed = Math.random() < 0.5 ? -3 : 3;
    }
    if (e.key == "ArrowLeft" && !this.moveUp) this.moveLeft = true;
    else if (e.key == "ArrowRight" && !this.moveUp) this.moveRight = true;
  }

  private onKeyUp(e: KeyboardEvent): void {
    if (e.key == "ArrowLeft") this.moveLeft = false;
    else if (e.key == "ArrowRight") this.moveRight = false;
  }

  public update() {
    let newX: number = 0;
    let newY: number = 0;

    if (this.moveUp) {
      newX = this._x + this.xSpeed;
    } else {
      if (this.moveLeft) newX = this._x - this.xSpeed;
      if (this.moveRight) newX = this._x + this.xSpeed;
    }

    if (this.moveUp) newY = this._y + this.ySpeed;

    // // check if new x position is within the screen and move it
    if (newY > 0 && newY + this.clientHeight < window.innerHeight) {
      this._y = newY;
    } else {
        this.ySpeed *= -1;
    }
    if (newX > 0 && newX + this.clientWidth < window.innerWidth) {
        this._x = newX;
    } else {
        this.xSpeed *= -1;
    }
    
    this.draw();
  }

  public changeDirection(): void {
    this.ySpeed *= -1;
  }

  private draw(): void {
    this.style.transform = `translate(${this._x}px, ${this._y}px)`;
  }
}

// This object is style in style.css under the paddle-component tag
window.customElements.define("ball-component", Ball as any);
