import pixiGame from './PixiGame';

const detectCollision = (plane, enemy) => {
  let resultDetectCollision = false;

  const subDetectCollision = (monster) => {
    // hit will determine whether there's a collision
    let hit = false;

    // Find the center points of each sprite
    plane.centerX = plane.x;
    plane.centerY = plane.y;
    monster.movieclip.centerX = monster.movieclip.x;
    monster.movieclip.centerY = monster.movieclip.y;

    // Find the half-widths and half-heights of each sprite
    plane.halfWidth = plane.width / 2;
    plane.halfHeight = plane.height / 2;
    monster.movieclip.halfWidth = monster.movieclip.width / 2;
    monster.movieclip.halfHeight = monster.movieclip.height / 2;

    // Calculate the distance vector between the sprites
    const vx = Math.abs(plane.centerX - monster.movieclip.centerX);
    const vy = Math.abs(plane.centerY - monster.movieclip.centerY);

    // Figure out the combined half-widths and half-heights
    const combinedHalfWidths = plane.halfHeight + monster.movieclip.halfWidth;
    const combinedHalfHeights = plane.halfWidth + monster.movieclip.halfHeight;

    // Check for a collision on the x and y axis
    if (vx < combinedHalfWidths && vy < combinedHalfHeights) {
      hit = true;
    }

    // There's no collision on the x and y axis
    // `hit` will be either `true` or `false`
    return hit;
  };

  enemy.forEach((monster, index) => {
    if (subDetectCollision(monster)) {
      resultDetectCollision = true;
      // +1 only for not 0
      pixiGame.flagCollision = index + 1;
    }
  });

  return resultDetectCollision;
};

export default detectCollision;
