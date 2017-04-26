import React, { Component } from 'react'

import ButtonModal from '../ui/button-modal'

const dataQuality = {
	range: "50", scale: "good" 
}

class Information extends Component {

	render () {
		return (
			<div className="information">
				<div className="information-wrap">
					<p className="information-city">Madrid</p>
					<p className="information-date">18.04.2017</p>
				</div>
				<div className="information-button">
					<ButtonModal />
				</div>
			</div>
		);
	}
}

export default Information

