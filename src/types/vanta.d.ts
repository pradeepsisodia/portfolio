declare module "vanta/dist/vanta.net.min" {
  interface VantaEffect {
    destroy: () => void;
    resize: () => void;
    setOptions: (options: Record<string, unknown>) => void;
  }

  interface VantaNetOptions {
    el: HTMLElement | string | null;
    THREE?: unknown;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    color?: number;
    backgroundColor?: number;
    points?: number;
    maxDistance?: number;
    spacing?: number;
  }

  type VantaNetFactory = (options: VantaNetOptions) => VantaEffect;

  const NET: VantaNetFactory;
  export default NET;
}
