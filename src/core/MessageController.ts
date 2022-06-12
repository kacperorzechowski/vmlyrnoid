import {GameObject} from "./Abstracts/GameObject";

export class MessageController extends GameObject {
  private static messageController: MessageController;
  color: string = "#0088f8";
  fontColor: string = "#fff";
  width: number = 400;
  height: number = 200;
  x: number;
  y: number;

  constructor() {
    super();
    this.x = this.ctx.canvas.width / 2 - this.width / 2;
    this.y = this.ctx.canvas.height / 2 - this.height / 2;
  }

  static getInstance(): MessageController {
    if (this.messageController) {
      return this.messageController;
    } else {
      this.messageController = new MessageController();
      return this.messageController;
    }
  }

  private drawRect() {
    this.ctx.beginPath();
    this.drawOverlay();
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.closePath();
  }

  private drawText(text: string, fontSize: number = 27, yMargin: number = 0) {
    this.ctx.font = `${fontSize}px Verdana`;
    this.ctx.fillStyle = this.fontColor;
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle"
    this.ctx.fillText(text, this.width / 2 + this.x, this.y + this.height / 2 + yMargin);
  }

  private drawOverlay() {
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  drawStartMessage() {
    this.drawRect();
    this.drawText("👉 Press space to play");
  }

  drawLostMessage(score: number) {
    this.drawRect();
    this.drawText(`You lost 😢, score: ${score}`, 27, -15);
    this.drawText("(Press space to restart)", 20, 20);
  }

  drawWonMessage() {
    this.drawRect();
    this.drawText("Hurray 🥳, you won! 🎉", 27, -15);
    this.drawText("(Press space to restart)", 20, 20);
  }
}
