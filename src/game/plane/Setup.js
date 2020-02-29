import * as PIXI from 'pixi.js';
import { Howl } from 'howler';

import pixiGame from './PixiGame';
import background from './Background';
import Monster from './Monster';
import Plane from './Plane';
import play from './Play';
import preLoader from './PreLoader';
import Button from './Button';
import { monsterSprites, imageLinks } from './imageLinks';

class Setup {
  constructor() {
    this.enemy = [];
  }

  start() {
    // Add monsters and background on the scene
    background.addOnScene();

    for (let i = 0; i < 4; i++) {
      this.enemy[i] = new Monster(monsterSprites[i], pixiGame.position.START_X + pixiGame.gapBetweenBirds);

      // Equally gap Between Birds and canvas border => only when we have 3 birds on the canvas
      // In this situation we have 4 gap Between Birds
      // + birds.width because point anchor = 0.5
      pixiGame.gapBetweenBirds += (pixiGame.app.view.width - this.enemy[i].movieclip.width * 3) / 4 + this.enemy[i].movieclip.width;
    }

    // Add Plane
    const frames = [];
    for (let j = 0; j < 30; j++) {
      const val = j < 10 ? `0${j}` : j;
      frames.push(PIXI.Texture.fromFrame(`rollSequence00${val}.png`));
    }

    this.plane = new Plane(frames);
    this.plane.play();
    pixiGame.gameScene.addChild(this.plane);

    // Add Score
    pixiGame.score.init();

    // Create musics
    this.musicGameOver = new Howl({
      src: ['assets/music/game_over_music.mp3'],
      volume: 0.5
    });

    // Create the black effect in gameOverScene
    const darkEffectEndGame = new PIXI.Graphics();
    darkEffectEndGame.beginFill(0x000000, 0.6);
    darkEffectEndGame.drawRect(0, 0, pixiGame.app.view.width, pixiGame.app.view.height);
    pixiGame.gameOverScene.addChild(darkEffectEndGame);

    // Create the text sprite and add it to the gameOverScene
    pixiGame.style.fontSize = '50px';
    this.gameOverMessage = new PIXI.Text('Game over!', pixiGame.style);
    this.gameOverMessage.x = pixiGame.app.view.width / 2 - this.gameOverMessage.width / 2;
    this.gameOverMessage.y = pixiGame.app.view.height / 3 - this.gameOverMessage.height / 2;
    pixiGame.gameOverScene.addChild(this.gameOverMessage);

    preLoader.preLoaderScene.visible = false;
    // Set the game state
    pixiGame.startTime = Date.now();
    pixiGame.state = play;

    // Add Replay button
    this.createReplayButton = () => {
      const textureButtonReplay = {
        original: PIXI.Texture.fromImage(imageLinks.replay_button),
        down: PIXI.Texture.fromImage(imageLinks.replay_button_down),
        over: PIXI.Texture.fromImage(imageLinks.replay_button_over),
        positionX: pixiGame.app.view.width / 2,
        positionY: pixiGame.app.view.height / 2,
        scale: 0.5
      };

      const buttonReplay = new Button(textureButtonReplay, "replay");
      pixiGame.gameOverScene.addChild(buttonReplay);
    };
    this.createReplayButton();
  }
}

const setup = new Setup();

export default setup;
