import {GameObject} from "./Abstracts/GameObject";
import {Block} from "../Entities/Block";

export class Board extends GameObject {
  blocks: Block[] = [];
  blocksInRow: number = 13;
  rows: number = 6;
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
    for (let i = 0; i < this.rows; i++) {
      this.colors[i] = [];
      for (let j = 0; j < this.blocksInRow; j++) {
        this.colors[i][j] = `hsl(${Math.floor(Math.random() * 255)}, ${30 + i * 7}%, ${30 + j * 3}%)`;
        // console.log(`hsl(${Math.floor(Math.random() * 255)}, ${i * 15}%, ${j * 7}%)`)
      }
    }
    // console.log(this.colors);
  }

  private initBlocks () {
    const block = new Block(20, 20);
    let separator = this.calcSeparator(block);

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.blocksInRow; j++) {
        this.blocks.push(
          new Block(j * (block.x + block.width) + separator, i * (block.y + block.height) + separator, this.colors[i][j])
        );
      }
    }

    this.ctx.clearRect(20, 20, block.width, block.height);
  }

  private calcSeparator(block: Block): number {
    return (this.ctx.canvas.width - (this.blocksInRow * block.width) - 40) / (this.blocksInRow - 1);
  }
}
