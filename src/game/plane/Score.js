import * as PIXI from 'pixi.js';

import pixiGame from './PixiGame';
import background from './Background';

class Score extends PIXI.Text {
  init() {
    pixiGame.style.fontSize = '30px';

    this.distance = 0;
    this.style = pixiGame.style;
    this.text = new PIXI.Text(`Score: ${this.distance}`, pixiGame.style);
    this.x = pixiGame.position.SCORE_X;
    this.y = pixiGame.position.SCORE_Y;
    pixiGame.gameScene.addChild(this);
  }

  update(gameTime) {
    this.distance = Math.round(gameTime / 1000 * 10);
    this.text = `Score: ${this.distance}`;

    if (this.distance === 200) background.changeBackground(2, 2);
    else if (this.distance === 100) background.changeBackground(1, 2);
  }
}

export default Score;
