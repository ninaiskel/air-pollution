import React, { Component } from 'react'

import Button from '../ui/buttons'
import Icon from '../ui/icon'

class Information extends Component {

	render () {
		return (
			<div className="information">
				<div className="information-wrap">
					<p className="information-city">Madrid</p>
					<p className="information-date">18.04.2017</p>
				</div>
				<div className="information-button">
					<Button />
				</div>
			</div>
		);
	}
}

export default Information

