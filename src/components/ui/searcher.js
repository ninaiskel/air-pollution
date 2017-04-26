import React, { Component } from 'react'

class Searcher extends Component {

	render () {
		const { onSubmit } = this.props
		return (
		  <form className="searcher" onSubmit={ onSubmit }>
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
