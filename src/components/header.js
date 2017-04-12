import React, { Component } from 'react'

import Icon from './icon'

class Header extends Component {

	render () {

		return (
			<div className="header">
				<div className="header-logo">Air Pollution</div>
				<div className="search">
					<button onClick={ () => console.log('open search form') }>
          	<Icon name="icon-search" />
        	</button>
				</div>
			</div>
		);
	}
}

export default Header;