import {GameObject} from "../core/Abstracts/GameObject";
import {Collidable} from "../core/Interfaces/Collidable";
import {IBlock} from "./Block";
import {IPaddle} from "./Paddle";

export class Ball extends GameObject implements Collidable {
  x: number;
  y: number;
  radius: number = 10;
  dx: number = 1;
  dy: number = -2;
  name: string = "ball";

  constructor() {
    super();
    this.x = this.ctx.canvas.width/2;
    this.y = this.ctx.canvas.height-150;

    this.setAnimateCallback(this.draw);
  }

  draw() {
    this.createEntity();

    if (this.x + this.dx > this.ctx.canvas.width - this.radius || this.x + this.dx < this.radius) {
      this.dx = -this.dx;
    }

    if (this.y + this.dy < this.radius) {
      this.dy = -this.dy;
    }

    if (this.y + this.dy > this.ctx.canvas.height - this.radius) {
      console.log("game over")
      this.dy = 0;
      this.dx = 0;
    }

    // this.x += this.dx;
    // this.y += this.dy;
  }

  handleCollision(collider: Collidable) {
    if (collider.name === "paddle") {
      this.handlePaddleCollision(collider as IPaddle);
    }

    if (collider.name === "block") {
      this.handleBlockCollision(collider as IBlock);
    }
  }

  private handlePaddleCollision(paddle: IPaddle) {
    const ballBottomEdge = this.y + this.radius * 3;
    const colliderLeftEdge = paddle.x;
    const colliderRightEdge = paddle.x + paddle.width;
    const colliderTopEdge = paddle.y + paddle.height;

    if ((colliderTopEdge === ballBottomEdge) && (this.x >= colliderLeftEdge && this.x <= colliderRightEdge)) {
      const diff = this.x - (paddle.x + paddle.width / 2)
      this.dy = -this.dy;

      if (this.dx > 0) {
        if (diff > 0) {
          this.dx = this.dx * 1.5;
        } else {
          this.dx = this.dx * 0.5;
        }
      } else {
        if (diff > 0) {
          this.dx = this.dx * 0.5;
        } else {
          this.dx = this.dx * 1.5;
        }
      }
    }
  }

  private handleBlockCollision(block: IBlock) {
    if (!block.hit) {
      if (this.x > block.x && this.x < block.x + block.width && this.y > block.y && this.y < block.y + block.height) {
        block.hit = true;
        this.dy = - this.dy;
        this.dx = this.dx > 0 ? 2 : -2;
      }
    }
  }

  private createEntity() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
    this.ctx.fillStyle = "#0095DD";
    this.ctx.fill();
    this.ctx.closePath();
  }
}
