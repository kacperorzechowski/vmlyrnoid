import {Paddle} from "./src/Entities/Paddle";
import {Ball} from "./src/Entities/Ball";
import {CanvasHandler} from "./src/core/CanvasHandler";
import {UpdateHandler} from "./src/core/UpdateHandler";
import {Collidable} from "./src/core/Interfaces/Collidable";
import {Board} from "./src/core/Board";

function main() {
  const paddle = new Paddle();
  const ball = new Ball();
  const board = new Board();

  const canvasHandler = new CanvasHandler("game");
  const ctx = canvasHandler.getContext2d();

  new UpdateHandler(update)

  function update() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    board.drawBlocks();
    paddle.draw();
    ball.draw();

    onCollision(paddle, ball);
    board.blocks.forEach((block) => {
      onCollision(block, ball);
    })
  }
}

function onCollision(colliderA: Collidable, colliderB: Collidable) {
  colliderA.handleCollision(colliderB);
  colliderB.handleCollision(colliderA);
}

main();
