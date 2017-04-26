import React, { Component } from 'react'

import Header from './header'
import Content from './pollution/content'
import FindCity from './pollution/find'


class Pollution extends Component {
	constructor () {
    super();
    this.state = {
      isSearched: false,
    };
    this.searchIsTrue = this.searchIsTrue.bind(this)
  }

  searchIsTrue () {
    this.setState({ isSearched: true })
  }

	render () {
		console.log(this.state.isSearched)
		return (
		  <section className="pollution good">
		  	<Header searchIsTrue={ this.searchIsTrue }/>
		  	{ this.state.isSearched ?  <Content /> : <FindCity /> }
		  </section>
		);
	}
}

export default Pollution
