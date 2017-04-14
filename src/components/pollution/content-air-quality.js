import React, { Component } from 'react'

import Icon from '../ui/icon'


class AirQuality extends Component {

	render () {
		// const { city, date } = this.props
		return (
			<div className="air-quality">
				<div className="air-quality-aqi">
					<h1>29</h1>
					<span><Icon name="icon-aqi" /> aqi</span>
				</div>
				<div className="air-quality-scale">
					<h1>good</h1>
				</div>
			</div>
		);
	}
}

export default AirQuality
