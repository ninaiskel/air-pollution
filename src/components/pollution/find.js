import React, { Component } from 'react'

import Image from './image';
import Icon from '../ui/icon';

class FindCity extends Component {

	render () {
		return (
		  <section className="pollution-content" >
		  	<div className="container">
		  		<div className="col col-full">
		  			<div className="pollution-content-data" >
		  				<div className="wrap-find">
									<Icon name="find-svg" /> 
			  				<h1>Find a city to measure Air Pollution</h1>
			  			</div>
							<Image />
		  			</div>
		  		</div>
		  	</div>

		  </section>
		);
	}
}

export default FindCity
