import {GameObject} from "../core/Abstracts/GameObject";
import {Collidable} from "../core/Interfaces/Collidable";

export interface IBlock extends Collidable {
  hit: boolean;
  width: number;
  height: number;
}

export class Block extends GameObject implements IBlock {
  x: number;
  y: number;
  width: number = 70;
  height: number = 30;
  hit: boolean = false;
  name: string = "block";
  color: string;

  constructor(x: number, y: number, color: string = "hsl(206, 70%, 50%)") {
    super();
    this.x = x;
    this.y = y;
    this.color = color;

    this.draw();
  }

  handleCollision(collider: Collidable) {
    //
  }

  draw() {
    this.createEntity();
  }

  private createEntity() {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.closePath();
  }
}
