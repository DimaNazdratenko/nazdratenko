import pixiGame from './PixiGame';
import setup from './Setup';

const end = () => {
  pixiGame.gameOverScene.visible = true;

  // Falling birds and the plane in a collision
  if (pixiGame.flagCollision) {
    setup.plane.rotation -= 0.03;
    setup.plane.y += pixiGame.position.STEP_Y;

    for (let i = 0; i < setup.enemy.length; i++) {
      if (i !== pixiGame.flagCollision) {
        setup.enemy[i].movieclip.y += pixiGame.position.STEP_Y / 2;
      } else {
        setup.enemy[i].movieclip.rotation += 0.03;
        setup.enemy[i].movieclip.y += pixiGame.position.STEP_Y;
      }
    }
  }

  // Change scene for Score, that it was on top of the dark background
  pixiGame.gameOverScene.addChild(pixiGame.score);
  pixiGame.gameScene.removeChild(pixiGame.score);

  // Movement the "Score" to the center of the screen and scaling it
  if (pixiGame.score.x <= pixiGame.app.view.width / 2 - pixiGame.score.width / 2 || pixiGame.score.y >= pixiGame.app.view.height / 3 - setup.gameOverMessage.height) {
    pixiGame.score.x += 2.7;
    pixiGame.score.y -= 3;
  }

  if (pixiGame.score.scale.x <= 1.2 && pixiGame.score.scale.y <= 1.2) {
    pixiGame.score.scale.x += 0.002;
    pixiGame.score.scale.y += 0.002;
  }

  // Enable filter Blur
  pixiGame.gameScene.filters = [pixiGame.blurFilter];
  pixiGame.filtersValue += 0.005;
  pixiGame.blurFilter.blur = Math.sin(pixiGame.filtersValue) * 10;
}

export default end;
