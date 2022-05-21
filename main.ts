import {Paddle} from "./src/Entities/Paddle";
import {Ball} from "./src/Entities/Ball";
import {CanvasHandler} from "./src/core/CanvasHandler";
import {UpdateHandler} from "./src/core/UpdateHandler";
import {Collidable} from "./src/core/Interfaces/Collidable";
import {Board} from "./src/core/Board";
import GameController from "./src/core/GameController";
import Score from "./src/Entities/Score";

function main() {
  const paddle = new Paddle();
  const ball = new Ball();
  const board = new Board();
  const score = new Score(20, 25);
  const gameController = GameController.getInstance();

  const canvasHandler = new CanvasHandler("game");
  const ctx = canvasHandler.getContext2d();

  document.addEventListener("keydown", onSpaceDown.bind(this));

  function onSpaceDown(event: KeyboardEvent) {
    if (event.code === "Space") {
      if (gameController.getStatus() === "NEW") {
        gameController.setStatus("IN-PROGRESS");
      }
    }
  }

  new UpdateHandler(update)

  function update() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    board.drawBlocks();
    paddle.draw();
    ball.draw();
    score.draw();

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
