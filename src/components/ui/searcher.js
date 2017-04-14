import React, { Component } from 'react'

class Searcher extends Component {

	render () {
		return (
		  <form className="searcher">
				<input 
					className="searcher-input" 
					type="text" 
					name="search" 
					placeholder="Search..."/>

					<p>Type the country that you want see the air poluttion</p>
			</form>
		);
	}
}

export default Searcher 
