import * as PIXI from 'pixi.js';

import pixiGame from './PixiGame';

class Score {
  init() {
    pixiGame.style.fontSize = '30px';

    this.distance = 0;
    this.score = new PIXI.Text(`Score: ${this.distance}`, pixiGame.style);
    this.score.x = pixiGame.position.SCORE_X;
    this.score.y = pixiGame.position.SCORE_Y;
    pixiGame.gameScene.addChild(this.score);
  }

  update(gameTime) {
    this.distance = Math.round(gameTime / 1000 * 10);
    this.score.text = `Score: ${this.distance}`;
  }
}

const score = new Score();

export default score;
