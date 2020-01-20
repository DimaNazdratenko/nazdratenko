import * as PIXI from 'pixi.js';

import pixiGame from './PixiGame';

class Plane extends PIXI.extras.AnimatedSprite {
  constructor(...arg) {
    super(...arg);

    this.velocityVertical = 0;
    this.velocityHorizontal = 0;
    this.planeIndent = 5; // 5 it's just that the plane would not touch the edges of the canvas
    this.x = 100;
    this.y = 200;
    this.anchor.set(0.5);
    this.animationSpeed = 0.5;
    this.rotation = Math.PI / 2;
    this.width = 85;
    this.height = 120;
    this.interactive = true;
    this.buttonMode = true;

    this.on('mousedown', this.onDragStart)
      .on('touchstart', this.onDragStart)
      .on('pointerup', this.onDragEnd)
      .on('pointerupoutside', this.onDragEnd)
      .on('mousemove', this.onDragMove)
      .on('touchmove', this.onDragMove);
  }

  onDragStart(e) {
    this.data = e.data;
    this.dragging = true;

    // e.type === 'touchstart' ? this.x += this.width : this.x;
  }

  onDragEnd() {
    this.alpha = 1;
    this.dragging = false;
    this.data = null;
  }

  onDragMove(e) {
    if (this.dragging) {
      const newPosition = e.data.getLocalPosition(pixiGame.app.stage);
      this.x = e.type === 'touchmove' ? newPosition.x + this.width : newPosition.x;
      this.y = newPosition.y;
    }
  }

  keyboardVerticalMove() {
    if (!this) return;
    this.y -= this.velocityVertical;
    if (this.y <= this.planeIndent + this.width / 2) {
      this.y = this.planeIndent + this.width / 2;
    } else if (this.y >= pixiGame.position.END_Y - this.width / 2) {
      this.y = pixiGame.position.END_Y - this.width / 2;
    }
  }

  keyboardHorizontalMove() {
    if (!this) return;
    this.x += this.velocityHorizontal;
    if (this.x <= this.planeIndent + this.height / 2) {
      this.x = this.planeIndent + this.height / 2;
    } else if (this.x >= pixiGame.app.view.width - this.height / 2 - this.planeIndent) {
      this.x = pixiGame.app.view.width - this.height / 2 - this.planeIndent;
    }
  }
}

export default Plane;
