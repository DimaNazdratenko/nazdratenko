import React, { Component } from 'react';
import './Plane.scss';

import pixiGame from '../../game/plane/PixiGame';

class Plane extends Component {
  constructor() {
    super();

    this.pixiGame = pixiGame;
    this.listener = this.pixiGame.resizeCanvas;
    this.listenerKeydown = this.pixiGame.keydownHandler;
    this.listenerKeyup = this.pixiGame.keyupHandler;
  }

  componentDidMount() {
    this.pixiGame.initGame();
    this.gameCanvas.appendChild(this.pixiGame.app.view);

    window.addEventListener('resize', this.listener);
    window.addEventListener('keydown', this.listenerKeydown);
    window.addEventListener('keyup', this.listenerKeyup);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.listener);
    window.removeEventListener('keydown', this.listenerKeydown);
    window.removeEventListener('keyup', this.listenerKeyup);

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
