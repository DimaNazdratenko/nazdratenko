import pixiGame from './PixiGame';
import setup from './Setup';
import play from './Play';
import preLoader from "./PreLoader";

function reset() {
  pixiGame.gameOverScene.visible = false;

  setup.plane.x = 100;
  setup.plane.y = 200;
  setup.plane.rotation = Math.PI / 2;

  pixiGame.gapBetweenBirds = 0;
  for (let i = 0; i < setup.enemy.length; i++) {
    setup.enemy[i].movieclip.x = pixiGame.position.START_X + pixiGame.gapBetweenBirds;

    // Equally gap Between Birds and canvas border => only when we have 3 birds on the canvas
    // In this situation we have 4 gap Between Birds
    // + birds.width because point anchor = 0.5
    pixiGame.gapBetweenBirds += (pixiGame.app.view.width - setup.enemy[i].movieclip.width * 3) / 4 + setup.enemy[i].movieclip.width;

    setup.enemy[i].movieclip.y = pixiGame.getRandomIntValue(pixiGame.position.START_Y + setup.enemy[i].movieclip.height / 2, pixiGame.position.END_Y - setup.enemy[i].movieclip.height / 2);
    setup.enemy[i].movieclip.rotation = 0;
  }

  pixiGame.gameScene.addChild(pixiGame.score);
  pixiGame.gameOverScene.removeChild(pixiGame.score);

  pixiGame.score.x = pixiGame.position.SCORE_X;
  pixiGame.score.y = pixiGame.position.SCORE_Y;
  pixiGame.score.scale.x = 1;
  pixiGame.score.scale.y = 1;

  pixiGame.startTime = Date.now();
  pixiGame.state = play;
  preLoader.musicBackground.play();

  // Disable filter Blur
  pixiGame.gameScene.filters = [];
  pixiGame.filtersValue = 0;
}

export default reset;
