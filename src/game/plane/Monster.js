import * as PIXI from 'pixi.js';

import pixiGame from './PixiGame';

class Monster {
  constructor(monsterImages, startX) {
    this.hideEnemy = false;
    const frames = [];

    for (let i = 0; i < monsterImages.length; i++) {
      const texture = PIXI.Texture.fromImage(monsterImages[i]);
      frames.push(texture);
    }

    this.movieclip = new PIXI.extras.AnimatedSprite(frames);

    this.movieclip.scale.x = -1;
    this.movieclip.anchor.set(0.5);
    this.movieclip.x = startX;
    this.movieclip.y = pixiGame.getRandomIntValue(pixiGame.position.START_Y + this.movieclip.height / 2, pixiGame.position.END_Y - this.movieclip.height / 2);
    this.movieclip.animationSpeed = 0.4;

    this.movieclip.play();
    pixiGame.gameScene.addChild(this.movieclip);
  }

  updatePosition() {
    if (this.movieclip.x > pixiGame.position.END_X - this.movieclip.width / 2) {
      this.movieclip.x -= pixiGame.position.STEP_X;
    } else {
      this.hideEnemy = true;
      this.movieclip.destroy();
      this.movieclip = null;
    }
  }
}

export default Monster;
