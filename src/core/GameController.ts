export type statuses = "NEW" | "IN-PROGRESS" | "LOST" | "WON";

export default class GameController {
  private static gameController: GameController;
  private score: number;
  private status: statuses;

  static getInstance(): GameController {
    if (this.gameController) {
      return this.gameController;
    } else {
      this.gameController = new GameController(0, "NEW");
      return this.gameController;
    }
  }

  setScore(score: number): void {
    this.score = score;
  }

  setStatus(status: statuses): void {
    this.status = status;
  }

  getScore(): number {
    return this.score;
  }

  addScore(): void {
    this.score += 1;
  }

  getStatus(): statuses {
    return this.status;
  }

  private constructor(score: number, status: statuses) {
    this.score = score;
    this.status = status;
  }
}
