import {GameObject} from "./Abstracts/GameObject";
import {Block} from "../Entities/Block";
import {blocksInRow, rows, boardConfig} from "../configuration/config";

console.log(boardConfig);


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
        // this.colors[i][j] = `hsl(${Math.floor(Math.random() * 255)}, ${30 + i * 7}%, ${30 + j * 3}%)`;
        this.colors[i][j] = boardConfig[i][j];

        // console.log(`hsl(${Math.floor(Math.random() * 255)}, ${i * 15}%, ${j * 7}%)`)
      }
    }
    // console.log(this.colors);
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
