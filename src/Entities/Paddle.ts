import {PaddleMovement} from "../@types";
import {GameObject} from "../core/Abstracts/GameObject";
import {Collidable} from "../core/Interfaces/Collidable";

export interface IPaddle extends Collidable {
  width: number;
  height: number;
}

export class Paddle extends GameObject implements IPaddle {
  width: number = 100;
  height: number = 20;
  x: number;
  y: number;
  name: string = "paddle";
  moveDistance: number = 7;
  centerX: number;
  color: string = "hsl(206, 70%, 50%)";
  leftPressed: boolean = false;
  rightPressed: boolean = false;

  constructor() {
    super();
    this.y = this.canvasHandler.canvas.height - (this.height + 20);
    this.centerX = this.getCenterX();
    this.x = this.centerX;

    this.addMovementListeners();
    this.setAnimateCallback(this.movePaddle);
  }

  draw() {
    this.createEntity();
  }

  movePaddle() {
    if (this.rightPressed) {
      if (this.validatePaddleMovement("RIGHT")) {
        this.x += this.moveDistance;
      }
    }

    if (this.leftPressed) {
      if (this.validatePaddleMovement("LEFT")) {
        this.x -= this.moveDistance;
      }
    }

    this.draw();
  }

  handleCollision(collider: Collidable) {
    // if (collider.x === this.x && collider.y === this.y) {
    //   console.log(typeof collider, 'from paddle')
    // }
  }

  private createEntity() {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.closePath();
  }

  private validatePaddleMovement(side: PaddleMovement): boolean {
    let valid = false;

    if (side === "LEFT") {
      if (this.x > 0)
        valid = true;
    }

    if (side === "RIGHT") {
      if (this.x + this.width < this.ctx.canvas.width)
        valid = true;
    }

    return valid;
  }

  private getCenterX(): number {
    return this.canvasHandler.canvas.width / 2 - (this.width / 2);
  }

  private addMovementListeners() {
    document.addEventListener("keydown", this.keyDownHandler.bind(this));
    document.addEventListener("keyup", this.keyUpHandler.bind(this));
  }

  private keyDownHandler(event: KeyboardEvent) {
    if (event.key == "Right" || event.key == "ArrowRight") {
      this.rightPressed = true
    } else if (event.key == "Left" || event.key == "ArrowLeft") {
      this.leftPressed = true;
    }
  }

  private keyUpHandler(event: KeyboardEvent) {
    if (event.key == "Right" || event.key == "ArrowRight") {
      this.rightPressed = false;
    } else if (event.key == "Left" || event.key == "ArrowLeft") {
      this.leftPressed = false;
    }
  }
}
