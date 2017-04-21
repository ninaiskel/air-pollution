import React, { Component } from 'react'

import Icon from '../ui/icon'


class AirQuality extends Component {

	constructor(props) {
    super(props);
    this.state = {
      aqi: "20",
      scale: 'good'
    };
  }
  
	render () {
		const { aqi, scale } = this.state
		return (
			<div className="air-quality">
				<div className="air-quality-aqi">
					<h1>{ aqi }</h1>
					<span><Icon name="icon-aqi" /> aqi</span>
				</div>
				<div className="air-quality-scale">
					<h1>{ scale }</h1>
				</div>
			</div>
		);
	}
}

export default AirQuality
