import pixiGame from './PixiGame';
import setup from './Setup';
import score from './Score';

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
  pixiGame.gameOverScene.addChild(score);
  pixiGame.gameScene.removeChild(score);

  // Movement the "Score" to the center of the screen and scaling it
  if (score.x <= pixiGame.app.view.width / 2 - score.width / 2 || score.y >= pixiGame.app.view.height / 3 - setup.gameOverMessage.height) {
    score.x += 2.7;
    score.y -= 3;
  }

  if (score.scale.x <= 1.2 && score.scale.y <= 1.2) {
    score.scale.x += 0.002;
    score.scale.y += 0.002;
  }

  // Enable filter Blur
  pixiGame.gameScene.filters = [pixiGame.blurFilter];
  pixiGame.filtersValue += 0.005;
  pixiGame.blurFilter.blur = Math.sin(pixiGame.filtersValue) * 10;
}

export default end;
