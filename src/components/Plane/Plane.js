import React, { Component } from 'react';
import './Plane.scss';

import * as PIXI from 'pixi.js';

class Plane extends Component {
  constructor() {
    super();

    this.size = [960, 540];
  }

  componentDidMount() {
    this.app = new PIXI.Application(this.size[0], this.size[1]);
    this.gameCanvas.appendChild(this.app.view);
    this.app.start();
  }

  componentWillUnmount() {
    this.app.stop();
  }

  render() {
    const component = this;
    return (
      <div ref={(thisDiv) => { component.gameCanvas = thisDiv; }} />
    );
  }
}

export default Plane;
