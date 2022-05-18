import {AnimatedObjectAbstract} from "./Abstracts/AnimatedObjectAbstract";

export class UpdateHandler extends AnimatedObjectAbstract {
  constructor(callback: Function) {
    super();

    this.setAnimateCallback(callback);
  }
}
