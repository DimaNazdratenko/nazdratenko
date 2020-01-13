import * as PIXI from 'pixi.js';

import pixiGame from './PixiGame';
import preLoader from './PreLoader';

class Button extends PIXI.Sprite {
  constructor(texture, type, ...arg) {
    super(...arg);

    this.textureButton = texture;
    this.texture = this.textureButton.original;

    this.buttonMode = true;
    this.interactive = true;
    this.scale.set(this.textureButton.scale, this.textureButton.scale);
    this.x = this.textureButton.positionX - this.width / 2;
    this.y = this.textureButton.positionY - this.height / 2;
    this.isdown = false;
    this.fullIphone = false;
    this.buttonType = type;

    this.on('mousedown', this.onButtonDown)
      .on('touchstart', this.onButtonDown)

      .on('mouseup', this.onButtonUp)
      .on('touchend', this.onButtonUp)

      .on('mouseupoutside', this.onButtonUpOutside)
      .on('touchendoutside', this.onButtonUpOutside)

      .on('mouseover', this.onButtonOver)

      .on('mouseout', this.onButtonOut);
  }

  onButtonDown() {
    this.isdown = true;
    this.texture = this.textureButton.down;
    this.alpha = 1;
  }

  onButtonUp(e) {
    if (this.isdown) {
      this.isdown = false;
      this.texture = this.textureButton.original;

      if (this.buttonType === 'start') {
        // TODO: fix
        // pixiGame.state = setup;
        pixiGame.musicBackground.play();
        this.interactive = false;
      } else if (this.buttonType === 'replay') {
        // TODO: fix
        // pixiGame.state = reset;
        // musicGameOver.stop();
      } else if (this.buttonType === 'fullscreen' && e.type == 'mouseup') {
        Button.toggleFullScreen();
      } else if (this.buttonType === 'fullscreen' && e.type == 'touchend') {
        this.toggleFullScreenIphone();
      }
    }
  }

  onButtonUpOutside() {
    this.isdown = false;
    this.texture = this.textureButton.original;
  }

  onButtonOver() {
    if (this.isdown) {
      return;
    }
    this.texture = this.textureButton.over;
  }

  onButtonOut() {
    if (this.isdown) {
      return;
    }
    this.texture = this.textureButton.original;
  }

  toggleFullScreenIphone() {
    if (!this.fullIphone && window.innerWidth / window.innerHeight > 1) {
      this.fullIphone = true;

      pixiGame.app.view.style.position = 'absolute';
      pixiGame.app.view.style.top = '0';
      pixiGame.app.view.style.left = '0';
      pixiGame.app.view.style.width = '100%';
      pixiGame.app.view.style.height = '100%';
      pixiGame.app.view.style.zIndex = '1030';

      preLoader.rotateScreen.visible = false;
    } else if (!this.fullIphone && window.innerWidth / window.innerHeight < 1) {
      this.fullIphone = false;

      preLoader.rotateScreen.visible = true;
    } else {
      this.fullIphone = false;

      pixiGame.app.view.style.position = '';
      pixiGame.app.view.style.zIndex = '10';
      pixiGame.resizeCanvas();
    }
  }

  static toggleFullScreen() {
    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {
      pixiGame.fullscreenIndex = 1;

      if (pixiGame.app.view.requestFullscreen) {
        pixiGame.app.view.requestFullscreen();
      } else if (pixiGame.app.view.mozRequestFullScreen) {
        pixiGame.app.view.mozRequestFullScreen();
      } else if (pixiGame.app.view.webkitRequestFullscreen) {
        pixiGame.app.view.webkitRequestFullscreen();
      }
    } else {
      pixiGame.fullscreenIndex = 1.3;

      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }
}

export default Button;
