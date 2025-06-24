import { Ball } from "./ball";
import { Collision } from "./collision";
import { Paddle } from "./paddle";
export class PaddleCollision implements Collision {
  private paddle: Paddle;
  private ball: Ball;

  constructor(paddle: Paddle, ball: Ball) {
    this.paddle = paddle;
    this.ball = ball;
  }

  collide(): void {
    if (
      this.ball.x >= this.paddle.x - this.paddle.clientWidth / 2 &&
      this.ball.x <= this.paddle.x + this.paddle.clientWidth / 2 &&
      this.ball.y >= this.paddle.y &&
      this.ball.y <= this.paddle.y + this.paddle.clientHeight
    ) {
      this.ball.changeDirection();
    }
  }
}
