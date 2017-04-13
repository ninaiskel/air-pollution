import React, { Component } from 'react'

import Icon from '../ui/icon'
class Image extends Component {

	render () {
		return (
		  <div className="polution-img" >
				<Icon name="pollution-img-good"/>
				<Icon name="pollution-img-good-mobile"/>
			</div>
		);
	}
}

export default Image
