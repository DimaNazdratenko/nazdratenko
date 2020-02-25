import * as PIXI from 'pixi.js';

import preLoader from './PreLoader';
import setup from './Setup';

class PixiGame {
  constructor() {
    this.size = [960, 540];
    this.ratio = this.size[0] / this.size[1];
    this.fullscreenIndex = 1.3;
    this.state = () => {};
    this.gapBetweenBirds = 0;
    this.startTime = 0;
    this.gameTime = 0;
    this.flagCollision = null;
    this.filtersValue = 0;
    this.blurFilter = new PIXI.filters.BlurFilter();

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
    this.app.ticker.stop();
    this.app.ticker.add((deltaTime) => {
      this.gameTime = Date.now() - this.startTime;

      this.state();
    });

    this.resizeCanvas();

    preLoader.start();
  }

  destroyGame() {
    preLoader.musicBackground.stop();
    this.app.destroy(true, true);
  }

  // Return random value
  getRandomIntValue(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  keydownHandler(e) {
    switch (e.keyCode) {
      case 37: // left
        setup.plane.velocityHorizontal = -20;
        break;
      case 38: // top
        setup.plane.velocityVertical = 20;
        break;
      case 39: // right
        setup.plane.velocityHorizontal = 20;
        break;
      case 40: // down
        setup.plane.velocityVertical = -20;
        break;
      default:
        setup.plane.velocityVertical = 0;
        break;
    }
    e.preventDefault();
  }

  keyupHandler(e) {
    if (e.keyCode === 38 || e.keyCode === 40) {
      setup.plane.velocityVertical = 0;
    } else if (e.keyCode === 37 || e.keyCode === 39) {
      setup.plane.velocityHorizontal = 0;
    }
  }
}

const pixiGame = new PixiGame();

export default pixiGame;
