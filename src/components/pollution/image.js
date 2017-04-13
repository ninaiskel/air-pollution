import React, { Component } from 'react'

import Icon from '../icon'
class Image extends Component {

	render () {
		return (
		  <div className="polution-img" >
		  	<div className="container">
		  		<div className="col col-full">
		  			<Icon name="pollution-img-good" className=""/>
		  		</div>
		  	</div>
		  </div>
		);
	}
}

export default Image
