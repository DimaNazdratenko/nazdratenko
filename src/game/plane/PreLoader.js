import * as PIXI from 'pixi.js';
import { Howl } from 'howler';

import pixiGame from './PixiGame';
import Button from './Button';
import imageLinks from './imageLinks';

class PreLoader {
  start() {
    this.preLoaderScene = new PIXI.Container();
    pixiGame.gameElements.addChild(this.preLoaderScene);

    // Create dark effect and add it into preLoaderScene
    this.darkEffectPreLoader = new PIXI.Graphics();
    this.darkEffectPreLoader.beginFill(0x000000, 1);
    this.darkEffectPreLoader.drawRect(0, 0, 1920, 1080);
    this.preLoaderScene.addChild(this.darkEffectPreLoader);

    // Create musics
    this.musicBackground = new Howl({
      src: ['assets/music/background_music.mp3'],
      volume: 0.5
    });

    // Create Text "Rotate the screen"
    pixiGame.style.fontSize = '50px';
    this.rotateScreen = new PIXI.Text('Переверните экран!', pixiGame.style);
    this.rotateScreen.x = pixiGame.app.view.width / 2 - this.rotateScreen.width / 2;
    this.rotateScreen.y = pixiGame.app.view.height / 1.5 - this.rotateScreen.height / 2;
    this.rotateScreen.visible = false;
    pixiGame.uiElements.addChild(this.rotateScreen);

    // Create loader and add it into preLoaderScene
    const preLoaderTexture = PIXI.Texture.from(imageLinks.preLoader);
    this.preLoader = new PIXI.Sprite(preLoaderTexture);
    this.preLoader.anchor.set(0.5);
    this.preLoader.x = pixiGame.app.view.width / 2;
    this.preLoader.y = pixiGame.app.view.height / 2;
    this.preLoaderScene.addChild(this.preLoader);

    // Add the "Start" button
    this.createStartButton = () => {
      const textureButtonStart = {
        original: PIXI.Texture.fromImage(imageLinks.start_button),
        down: PIXI.Texture.fromImage(imageLinks.start_button_down),
        over: PIXI.Texture.fromImage(imageLinks.start_button_over),
        positionX: pixiGame.app.view.width / 2,
        positionY: pixiGame.app.view.height / 2,
        scale: 0.5
      };

      const buttonStart = new Button(textureButtonStart, 'start');

      this.preLoaderScene.addChild(buttonStart);
    };

    this.createFullscreenButton = () => {
      const textureButtonFullscreen = {
        original: PIXI.Texture.fromImage(imageLinks.fullscreen_button),
        over: PIXI.Texture.fromImage(imageLinks.fullscreen_button_over),
        down: PIXI.Texture.fromImage(imageLinks.fullscreen_button_down),
        positionX: pixiGame.app.view.width - 50,
        positionY: pixiGame.app.view.height - 40,
        scale: 0.3
      };

      const buttonFullscreen = new Button(textureButtonFullscreen, 'fullscreen');

      pixiGame.uiElements.addChild(buttonFullscreen);
    };

    // Downloading assets
    const onProgressCallback = (event) => {
      console.log(`progress: ${Math.round(event.progress)} %`);
    };

    // TODO: try fix like in the book with array
    for (const key in imageLinks) {
      PIXI.loader.add(imageLinks[key]);
    }

    PIXI.loader
      .on('progress', onProgressCallback)
      .load(() => {
        console.log('All files loaded');
        this.preLoaderScene.removeChild(this.preLoader);

        // add start button
        this.createStartButton();
        this.createFullscreenButton();
      });

    const rotatePreLoader = () => {
      this.preLoader.rotation += 0.1;
    };

    // set state function
    pixiGame.state = rotatePreLoader;

    // Start the game loop
    pixiGame.ticker.start();
  }
}

const preLoader = new PreLoader();

export default preLoader;
