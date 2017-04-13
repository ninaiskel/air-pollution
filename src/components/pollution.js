import React, { Component } from 'react'

import Header from './header'
import Content from './pollution/content'
import Image from './pollution/image'

class Pollution extends Component {

	render () {
		return (
		  <section className="pollution">
		  	<Header />
		  	<Content />
		  	<Image />
		  </section>
		);
	}
}

export default Pollution
