import React, { Component } from 'react'

import ButtonModal from '../ui/button-modal'

const dataQuality = {
	range: "50", 
	scale: "good",
	city: "Madrid",
}

class Information extends Component {

	render () {
		return (
			<div className="information">
				<p className="information-city">{ dataQuality.city }</p>
				<div className="information-button">
					<ButtonModal />
				</div>
			</div>
		);
	}
}

export default Information

