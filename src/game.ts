import { Ball } from "./classes/ball";
import { Block } from "./classes/block";
import { blockCollision } from "./classes/blockCollision";
import { BlueUpgrade } from "./classes/blueUpgrade";
import { Paddle } from "./classes/paddle";
import { PaddleCollision } from "./classes/paddleCollision";
import { YellowBlock } from "./classes/yellowBlock";

/**
 * The game class is the main class of the game. It creates all the objects and
 * starts the game loop.
 */
class Game {
  // Fields
  private paddle: Paddle;
  private blocks: Block[] = [];
  private upgrades: BlueUpgrade[] = [];
  private ball: Ball;
  private paddleCollision: PaddleCollision;
  private blockCollsion: blockCollision;
  private yellowBricksAmount = 1;

  constructor() {
    this.paddle = new Paddle();

    let rows: number = 7;
    let columns: number = 12;
    let block: Block;
    let upgrade: BlueUpgrade;
    for (let row = 0; row < rows; row++) {
      for (let column = 0; column < columns; column++) {
        if (Math.random() <= this.yellowBricksAmount) {
          upgrade = new BlueUpgrade(row, column, columns);
          upgrade.draw();
          this.upgrades.push(upgrade);
          block = new YellowBlock(row, column, columns, upgrade);
        } else {
          block = new Block(row, column, columns);
        }
        block.draw();
        this.blocks.push(block);
      }
    }
    this.ball = new Ball();

    this.paddleCollision = new PaddleCollision(this.paddle, this.ball);
    this.blockCollsion = new blockCollision(this.blocks, this.ball);

    this.gameLoop();
  }

  private gameLoop() {
    this.paddle.update();
    this.ball.update();

    this.paddleCollision.collide();
    this.blocks = this.blockCollsion.collide();

    // for (const upgrade of this.upgrades) {
    //   upgrade.update();
    // }

    requestAnimationFrame(() => this.gameLoop());
  }
}
// This is the entry point of the game. It is called when the page is loaded.
window.addEventListener("load", () => new Game());
