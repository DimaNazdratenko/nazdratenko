import * as PIXI from 'pixi.js';

import preLoader from './PreLoader';

class PixiGame {
  constructor() {
    this.size = [960, 540];
    this.ratio = this.size[0] / this.size[1];
    this.fullscreenIndex = 1.3;
    this.state = () => {};
    this.gapBetweenBirds = 0;

    this.style = {
      fontFamily: 'Arial',
      fontSize: '30px',
      fontStyle: 'italic',
      fontWeight: 'bold',
      fill: '#ffffff',
      stroke: '#4a1850',
      strokeThickness: 5,
      dropShadow: true,
      dropShadowColor: '#000000',
      dropShadowAngle: Math.PI / 6,
      dropShadowDistance: 6
    };

    this.resizeCanvas = () => {
      let w;
      let h;

      if (window.innerWidth / window.innerHeight >= this.ratio) {
        w = window.innerHeight * this.ratio;
        h = window.innerHeight;
      } else {
        w = window.innerWidth;
        h = window.innerWidth / this.ratio;
      }

      this.app.view.style.position = '';
      this.app.view.style.width = `${w / this.fullscreenIndex}px`;
      this.app.view.style.height = `${h / this.fullscreenIndex}px`;
    };
  }

  initGame() {
    this.app = new PIXI.Application(this.size[0], this.size[1]);
    this.gameElements = new PIXI.Container();
    this.uiElements = new PIXI.Container();

    this.app.stage.addChild(this.gameElements);
    this.app.stage.addChild(this.uiElements);

    // Create gameScene
    this.gameScene = new PIXI.Container();
    this.gameElements.addChild(this.gameScene);

    // Create gameOverScene
    this.gameOverScene = new PIXI.Container();
    this.gameOverScene.visible = false;
    this.gameElements.addChild(this.gameOverScene);

    this.position = {
      START_X: this.app.view.width + 85 / 2, // 85/2 it is monsters width/2, because point anchor = 0.5
      START_Y: 0,
      END_X: 0,
      END_Y: 450,
      STEP_X: 10,
      STEP_Y: 8,
      SCORE_X: 50,
      SCORE_Y: 480
    };

    // Game loop
    this.ticker = new PIXI.ticker.Ticker();
    this.ticker.stop();
    this.ticker.add((deltaTime) => {
      this.state();
    });

    this.resizeCanvas();

    preLoader.start();
  }

  destroyGame() {
    // this.app.stop();
    this.app.destroy();
  }

  // Return random value
  getRandomIntValue(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
}

const pixiGame = new PixiGame();

export default pixiGame;
