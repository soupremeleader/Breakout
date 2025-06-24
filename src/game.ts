import { Ball } from "./classes/ball";
import { Block } from "./classes/block";
import { Paddle } from "./classes/paddle";

/**
 * The game class is the main class of the game. It creates all the objects and
 * starts the game loop.
 */
class Game {
  // Fields
  private paddle: Paddle;
  private blocks: Block[] = [];
  private ball: Ball;

  constructor() {
    this.paddle = new Paddle();
    // this.ball = new Ball();
    let rows: number = 7;
    let columns: number = 12;
    let block : Block;
    for (let row = 0; row < rows; row++) {
      for (let column = 0; column < columns; column++) {
        block = new Block(row, column);
        block.draw();
        this.blocks.push();
      }
    }

    this.gameLoop();
  }

  private gameLoop() {
    this.paddle.update();
    // this.block.update();
    
    // this.ball.update();

    requestAnimationFrame(() => this.gameLoop());
  }
}
// This is the entry point of the game. It is called when the page is loaded.
window.addEventListener("load", () => new Game());
