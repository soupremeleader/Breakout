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

    let rows: number = 7;
    let columns: number = 12;
    let block: Block;
    for (let row = 0; row < rows; row++) {
      for (let column = 0; column < columns; column++) {
        block = new Block(row, column, columns);
        block.draw();
        this.blocks.push(block);
      }
    }
    this.ball = new Ball();

    this.gameLoop();
  }

  private gameLoop() {
    this.paddle.update();
    // this.block.update();

    this.ball.update();


    for (const block of this.blocks) {
      if (
        this.ball.x >= block.x - block.brickWidth / 2 &&
        this.ball.x <= block.x + block.brickWidth / 2 &&
        this.ball.y >= block.y &&
        this.ball.y <= block.y + block.brickHeight
      ) {
        this.ball.changeDirection();
        block.die();
      }
    }

    requestAnimationFrame(() => this.gameLoop());
  }
}
// This is the entry point of the game. It is called when the page is loaded.
window.addEventListener("load", () => new Game());
