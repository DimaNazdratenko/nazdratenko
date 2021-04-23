import * as PIXI from 'pixi.js';

export default class Container extends PIXI.Container {
  constructor({
    container,
    name,
    x = 0,
    y = 0,
    scale = 1,
    alpha = 1,
    visible = true,
    rotation = 0
  }) {
    super();

    this.name = name;
    this.roundPixels = true;
    this.x = x;
    this.y = y;
    this.alpha = alpha;
    this.visible = visible;
    this.rotation = rotation;
    this.scale.set(scale);

    container.addChild(this);
  }
}
