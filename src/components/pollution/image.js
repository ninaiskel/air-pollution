import React, { Component } from 'react'

class Image extends Component {

	render () {
		return (
		  <div className="air-img" >
				<img className="air-img-common air-img-good" src="images/backgrounds/good.svg" alt="good pollution"></img>
				<img className="air-img-common-mobile air-img-good-mobile" src="images/backgrounds/good-mobile.svg" alt="good pollution"></img>
			</div>
		);
	}
}

export default Image
