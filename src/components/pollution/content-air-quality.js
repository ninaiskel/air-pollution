import React, { Component } from 'react'

import Icon from '../ui/icon'

// const dataQuality = [
//   { range: "0 - 50", scale: "good" },
//   { range: "51-100", scale: "moderate" },
//   { range: "101-150", scale: "Unhealthy for sensitive groups" },
//   { range: "151-200", scale: "Unhealthy" },
// 	{ range: "201-300", scale: "Very unhealthy" },
// 	{ range: "300+", scale: "Dangerous" }
// ];
const dataQuality = {
	range: "50", 
	scale: "good",
	city: "madrid",
}

class AirQuality extends Component {
  
	render () {
		return (
			<div 
				className="air-quality">
				<div className="air-quality-aqi">
					<h1>{ dataQuality.range }</h1>
						<span><Icon name="icon-aqi" /> aqi</span>
				</div>
				<div className="air-quality-scale">
						<h1>{ dataQuality.scale }</h1>
				</div>
			</div>
		)
	}
}

export default AirQuality

