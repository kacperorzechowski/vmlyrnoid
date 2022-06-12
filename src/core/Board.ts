import {GameObject} from "./Abstracts/GameObject";
import {Block} from "../Entities/Block";
import {blocksInRow, rows, boardConfig} from "../configuration/config";

export class Board extends GameObject {
  blocks: Block[] = [];
  colors: string[][] = [];

  constructor() {
    super();
    this.initColors();
    this.initBlocks();
  }

  drawBlocks() {
    this.blocks.forEach(block => {
      if (!block.hit) {
        block.draw();
      }
    })
  }

  private initColors () {
    for (let i = 0; i < rows; i++) {
      this.colors[i] = [];
      for (let j = 0; j < blocksInRow; j++) {
        this.colors[i][j] = boardConfig[i][j];
      }
    }
  }

  private initBlocks () {
    const block = new Block(20, 20);
    const paddingTop = 15;
    let separator = this.calcSeparator(block);

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < blocksInRow; j++) {
        this.blocks.push(
          new Block(j * (block.x + block.width) + separator, i * (block.y + block.height) + separator + paddingTop, this.colors[i][j])
        );
      }
    }

    this.ctx.clearRect(20, 20, block.width, block.height);
  }

  private calcSeparator(block: Block): number {
    return (this.ctx.canvas.width - (blocksInRow * block.width) - 40) / (blocksInRow - 1);
  }
}
