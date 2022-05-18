export interface Collidable {
  x: number;
  y: number;
  name: string;

  handleCollision(collider: Collidable);
}
