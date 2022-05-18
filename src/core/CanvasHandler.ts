export interface ICanvasHandler {
  canvas: HTMLCanvasElement;
  getContext2d: () => CanvasRenderingContext2D | null;
}

export class CanvasHandler implements ICanvasHandler {
  canvas: HTMLCanvasElement

  constructor(id: string) {
    this.canvas = <HTMLCanvasElement>document.getElementById(id)
  }

  getContext2d(): CanvasRenderingContext2D {
    if (this.canvas.getContext) {
      return this.canvas.getContext("2d")
    }

    throw new TypeError("Unable to get context from canvas.")
  }
}
