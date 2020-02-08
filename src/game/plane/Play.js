import pixiGame from './PixiGame';
import setup from './Setup';
import Monster from './Monster';
import background from './Background';
import score from './Score';
import { monsterSprites } from './imageLinks';
import detectCollision from './collision';
import preLoader from "./PreLoader";
import end from "./End";

function play() {
  if (detectCollision(setup.plane, setup.enemy)) {
    preLoader.musicBackground.stop();
    setup.musicGameOver.play();
    setup.plane.onDragEnd();
    pixiGame.state = end;
  } else {
    background.changePosition();
    setup.plane.keyboardVerticalMove();
    setup.plane.keyboardHorizontalMove();

    for (let i = 0; i < setup.enemy.length; i++) {
      setup.enemy[i].updatePosition();
      if (setup.enemy[i].hideEnemy) {
        setup.enemy.splice(i, 1, new Monster(monsterSprites[pixiGame.getRandomIntValue(0, monsterSprites.length - 1)], pixiGame.position.START_X));
      }
    }

    score.update(pixiGame.gameTime);
  }
}

export default play;
