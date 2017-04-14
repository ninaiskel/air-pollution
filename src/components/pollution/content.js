import React, { Component } from 'react'

import Information from './content-information'
import AirQuality from './content-air-quality'
import Image from './image'


class Content extends Component {

	render () {
		// const { city, date } = this.props
		return (
		  <section className="pollution-content" >
		  	<div className="container">
		  		<div className="col col-full">
		  			<div className="pollution-content-data" >
			  			<Information />
			  			<AirQuality />
							<Image />
		  			</div>
		  		</div>
		  	</div>
		  </section>
		);
	}
}

export default Content

