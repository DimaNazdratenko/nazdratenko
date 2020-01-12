import * as PIXI from 'pixi.js';

class PixiGame {
  constructor() {
    this.size = [960, 540];
    this.ratio = this.size[0] / this.size[1];
    this.fullscreenIndex = 1.3;

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

    this.resizeCanvas();

    // this.app.start();
  }

  destroyGame() {
    // this.app.stop();
    this.app.destroy();
  }
}

const pixiGame = new PixiGame();

export default pixiGame;
