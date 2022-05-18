import {CanvasHandler, ICanvasHandler} from "../CanvasHandler";
import {AnimatedObjectAbstract} from "./AnimatedObjectAbstract";

export abstract class GameObject extends AnimatedObjectAbstract {
  canvasHandler: ICanvasHandler;
  ctx: CanvasRenderingContext2D | null;

  protected constructor(id: string = "game") {
    super();
    this.canvasHandler = new CanvasHandler(id);
    this.ctx = this.canvasHandler.getContext2d();
  }
}
