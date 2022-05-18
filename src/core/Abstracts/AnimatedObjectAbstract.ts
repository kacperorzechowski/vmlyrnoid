export abstract class AnimatedObjectAbstract {
  callback: Function;

  setAnimateCallback(callback: Function) {
    this.callback = callback;

    this.animate();
  }

  private animate() {
    requestAnimationFrame(this.animate.bind(this))

    let then = window.performance.now();
    const fpsInterval = 30;
    const now = Date.now();
    const elapsed = now - then;

    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval);

      this.callback();
    }
  }
}
