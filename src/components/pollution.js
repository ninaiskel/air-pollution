import React, { Component } from 'react'

import Header from './header'
import Content from './pollution/content'

class Pollution extends Component {

	render () {
		return (
		  <section className="pollution">
		  	<Header />
		  	<Content />
		  </section>
		);
	}
}

export default Pollution
