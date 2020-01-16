import * as PIXI from 'pixi.js';

import pixiGame from './PixiGame';
import { imageLinks } from './imageLinks';

const backgroundAddOnScene = () => {
  const textureLayer = {
    textureLayer5: PIXI.Texture.fromImage(imageLinks.background5),
    textureLayer4: PIXI.Texture.fromImage(imageLinks.background4),
    textureLayer3: PIXI.Texture.fromImage(imageLinks.background3),
    textureLayer2: PIXI.Texture.fromImage(imageLinks.background2),
    textureLayer1: PIXI.Texture.fromImage(imageLinks.background1)
  };

  const layer = {
    layer5: new PIXI.extras.TilingSprite(textureLayer.textureLayer5, pixiGame.app.view.width, pixiGame.app.view.height),
    layer4: new PIXI.extras.TilingSprite(textureLayer.textureLayer4, pixiGame.app.view.width, pixiGame.app.view.height),
    layer3: new PIXI.extras.TilingSprite(textureLayer.textureLayer3, pixiGame.app.view.width, pixiGame.app.view.height),
    layer2: new PIXI.extras.TilingSprite(textureLayer.textureLayer2, pixiGame.app.view.width, pixiGame.app.view.height),
    layer1: new PIXI.extras.TilingSprite(textureLayer.textureLayer1, pixiGame.app.view.width, pixiGame.app.view.height)
  };

  for (const key in layer) {
    pixiGame.gameScene.addChild(layer[key]);
  }
};

const backgroundLogic = (layer1, speed, gameTime) => {
  layer1.tilePosition.x = -(gameTime / 1000 * speed);
};

export { backgroundAddOnScene, backgroundLogic };
