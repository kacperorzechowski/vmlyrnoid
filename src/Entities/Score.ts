import {GameObject} from "../core/Abstracts/GameObject";
import GameController from "../core/GameController";

export default class Score extends GameObject {
  x: number;
  y: number;
  gameController = GameController.getInstance();

  constructor(x: number, y: number) {
    super();
    this.x = x;
    this.y = y;
  }

  draw() {
    this.createEntity();
  }

  private createEntity() {
    this.ctx.font = "18px Verdana";
    this.ctx.fillStyle = "#00aaf8";
    this.ctx.fillText(`Score: ${this.gameController.getScore()}`, this.x, this.y);
  }
}
