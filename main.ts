import {Paddle} from "./src/Entities/Paddle";
import {Ball} from "./src/Entities/Ball";
import {CanvasHandler} from "./src/core/CanvasHandler";
import {UpdateHandler} from "./src/core/UpdateHandler";
import {Collidable} from "./src/core/Interfaces/Collidable";
import {Board} from "./src/core/Board";
import GameController from "./src/core/GameController";
import Score from "./src/Entities/Score";
import {MessageController} from "./src/core/MessageController";

function main() {
  const paddle = new Paddle();
  const ball = new Ball();
  const board = new Board();
  const score = new Score(20, 25);
  const gameController = GameController.getInstance();
  const messageController = MessageController.getInstance()

  const canvasHandler = new CanvasHandler("game");
  const ctx = canvasHandler.getContext2d();

  document.addEventListener("keydown", onSpaceDown.bind(this));

  function onSpaceDown(event: KeyboardEvent) {
    if (event.code === "Space") {
      if (gameController.getStatus() === "NEW") {
        gameController.setStatus("IN-PROGRESS");
      }

      if (["LOST", "WON"].includes(gameController.getStatus())) {
        window.location.reload();
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

    if (gameController.getStatus() === "NEW") {
      messageController.drawStartMessage();
    }

    if (gameController.getStatus() === "LOST") {
      messageController.drawLostMessage(gameController.getScore());
    }

    if (gameController.getStatus() === "WON") {
      messageController.drawWonMessage();
    }

    if (board.blocks.filter(block => !block.hit).length === 0) {
      gameController.setStatus("WON");
    }

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
