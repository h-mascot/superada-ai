export interface Frame {
  /** seconds since start (slowed under reduced motion) */
  t: number;
  /** seconds since previous frame, clamped */
  dt: number;
  /** scroll progress through the chapter, 0..1 */
  p: number;
  /** viewport size in CSS pixels */
  w: number;
  h: number;
}

export interface Scene {
  resize?(w: number, h: number): void;
  draw(ctx: CanvasRenderingContext2D, f: Frame): void;
}

export type SceneFactory = () => Scene;
