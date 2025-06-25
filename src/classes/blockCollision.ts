import { Ball } from "./ball";
import { Block } from "./block";
import { Collision } from "./collision";
import { RedBlock } from "./redBlock";
import { YellowBlock } from "./yellowBlock";
export class blockCollision implements Collision {
  private blocks: Block[];
  private ball: Ball;

  constructor(blocks: Block[], ball: Ball) {
    this.blocks = blocks;
    this.ball = ball;
  }

  collide(): Block[] {
    for (let i = 0; i < this.blocks.length; i++) {
      if (
        this.ball.x >= this.blocks[i].x - this.blocks[i].brickWidth / 2 &&
        this.ball.x <= this.blocks[i].x + this.blocks[i].brickWidth / 2 &&
        this.ball.y >= this.blocks[i].y &&
        this.ball.y <= this.blocks[i].y + this.blocks[i].brickHeight
      ) {
        this.ball.changeDirection();
        this.blocks[i].die();
        if (this.blocks[i] instanceof YellowBlock) {
          this.blocks[i] = new RedBlock(this.blocks[i]);
          this.blocks[i].draw();
        } else if (this.blocks[i] instanceof RedBlock) {
          let block: RedBlock = this.blocks[i];
          let upgrade = block.upgrade;
          upgrade.notAlive();
          this.blocks.splice(i, 1);
        } else {
          this.blocks.splice(i, 1);
        }
      }
    }
    return this.blocks;
  }
}
