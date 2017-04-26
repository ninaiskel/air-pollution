import React, { Component } from 'react'

import Icon from './icon'

class Loading extends Component {

	render () {
		return (
		  <div className="loading">
		  	<div className="wrap-load">
				  <div className="dot dot-1"></div>
				  <div className="dot dot-2"></div>
				  <div className="dot dot-3"></div>
				</div>
				<Icon name="loading-svg" />	
		  </div>
		);
	}
}

export default Loading 
