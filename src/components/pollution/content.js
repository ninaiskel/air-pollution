import React, { Component } from 'react'

import Icon from '../icon'
class Content extends Component {

	render () {
		// const { city, date } = this.props
		return (
		  <div className="pollution-content" >
		  	<div className="container">
		  		<div className="col col-full">
						<div className="information">
		  				<p className="information-city">Madrid</p>
		  				<p className="information-date">18.04.2017</p>
		  			</div>
						<div className="air-quality">
		  				<div className="air-quality-aqi">
		  					<h1>29</h1>
		  					<span><Icon name="icon-aqi" /> aqi</span>
		  				</div>
		  				<div className="air-quality-scale">
		  					<h1>good</h1>
		  				</div>
		  			</div>
		  		</div>
		  	</div>
		  </div>
		);
	}
}

export default Content

