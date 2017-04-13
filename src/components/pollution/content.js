import React, { Component } from 'react'

import Icon from '../ui/icon'
import Button from '../ui/buttons'
import Image from './image'

class Content extends Component {

	render () {
		// const { city, date } = this.props
		return (
		  <section className="pollution-content" >
		  	<div className="container">
		  		<div className="col col-full">
		  			<div className="pollution-content-data" >
							<div className="information">
			  				<div className="information-wrap">
			  					<p className="information-city">Madrid</p>
			  					<p className="information-date">18.04.2017</p>
			  				</div>
			  				<div className="information-button">
			  					<Button />
			  				</div>
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
		  				<Image />
		  			</div>
		  		</div>
		  	</div>
		  </section>
		);
	}
}

export default Content

