import * as PIXI from 'pixi.js';
import { gsap } from 'gsap';

import Container from '../utils/container';
import pixiGame from './PixiGame';
import { imageLinks } from './imageLinks';

class Background {
  constructor() {
    this.backgroundsConfig = [
      [
        { texture: imageLinks.background_1_layer_5, isAnimation: true },
        { texture: imageLinks.background_1_layer_4, isAnimation: true },
        { texture: imageLinks.background_1_layer_3, isAnimation: true },
        { texture: imageLinks.background_1_layer_2, isAnimation: true },
        { texture: imageLinks.background_1_layer_1, isAnimation: true }
      ],
      [
        { texture: imageLinks.background_2_layer_7, isAnimation: false },
        { texture: imageLinks.background_2_layer_6, isAnimation: false },
        { texture: imageLinks.background_2_layer_5, isAnimation: true },
        { texture: imageLinks.background_2_layer_4, isAnimation: true },
        { texture: imageLinks.background_2_layer_3, isAnimation: true },
        { texture: imageLinks.background_2_layer_2, isAnimation: true },
        { texture: imageLinks.background_2_layer_1, isAnimation: true }
      ],
      [
        { texture: imageLinks.background_3_layer_8, isAnimation: false },
        { texture: imageLinks.background_3_layer_7, isAnimation: true },
        { texture: imageLinks.background_3_layer_6, isAnimation: true },
        { texture: imageLinks.background_3_layer_5, isAnimation: true },
        { texture: imageLinks.background_3_layer_4, isAnimation: true },
        { texture: imageLinks.background_3_layer_3, isAnimation: true },
        { texture: imageLinks.background_3_layer_2, isAnimation: true },
        { texture: imageLinks.background_3_layer_1, isAnimation: true }
      ]
    ];

    this.backgroundIndex = 0;
  }

  addOnScene() {
    this.backgroundsContainer = new Container({
      container: pixiGame.gameScene,
      name: 'backgroundsContainer'
    });

    this.backgroundsConfig.forEach((bg, i) => {
      const bgContainer = new Container({
        container: this.backgroundsContainer,
        name: 'bgContainer',
        alpha: 0
      });

      bg.forEach((layer) => {
        const tilingSprite = new PIXI.extras.TilingSprite(PIXI.Texture.from(layer.texture), pixiGame.app.view.width, pixiGame.app.view.height);
        tilingSprite.tileScale.set(0.5);

        bgContainer.addChild(tilingSprite);
      });
    });

    this.changeBackground(this.backgroundIndex);
  }

  changePosition() {
    this.backgroundsContainer.children[this.backgroundIndex].children.forEach((item, i) => {
      if (this.backgroundsConfig[this.backgroundIndex][i].isAnimation) item.tilePosition.x -= pixiGame.deltaTime * ((i / 4) + 0.5);
    });
  }

  changeBackground(index = 0, time = 0) {
    gsap.to(this.backgroundsContainer.children[this.backgroundIndex], { duration: time, alpha: 0 });

    this.backgroundIndex = index;

    gsap.to(this.backgroundsContainer.children[this.backgroundIndex], { duration: time, alpha: 1 });
  }
}

const background = new Background();

export default background;
