import React, { Component } from 'react'

class IndexScale extends Component {

	render () {
		return (
			<section className="index-scale">
				<div className="col col-quarter">
					<div className="index-scale-card good">
						<header className="index-scale-head">
							<div className="aqui-range">
								<span>aqui</span>
								<span>0-50</span>
							</div>
							<p>Good</p>
						</header>
						<p>Air quality is considered satisfactory, and air pollution poses little or no risk</p>
					</div>
				</div>
			</section>
		);
	}
}

export default IndexScale