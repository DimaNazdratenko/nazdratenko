import React, { Component } from 'react';
import './Plane.scss';

import pixiGame from '../../game/plane/PixiGame';

class Plane extends Component {
  constructor() {
    super();

    this.pixiGame = pixiGame;
    this.listener = this.pixiGame.resizeCanvas;
  }

  componentDidMount() {
    this.pixiGame.initGame();
    this.gameCanvas.appendChild(this.pixiGame.app.view);

    window.addEventListener('resize', this.listener);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.listener);

    this.pixiGame.destroyGame();
  }

  render() {
    const component = this;
    return (
      <div ref={(thisDiv) => { component.gameCanvas = thisDiv; }} />
    );
  }
}

export default Plane;
