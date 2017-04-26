import React, { Component } from 'react'

class IndexScale extends Component {

	render () {
		return (
			<section className="index-scale">
				<div className="wrap-index-scale">
					<div className="col col-one-third">
						<div className="index-scale-card good">
							<header className="index-scale-head">
								<div className="aqui-range">
									<span className="aqui">aqi</span>
									<span className="range">0 - 50</span>
								</div>
								<p>Good</p>
							</header>
							<p>Air quality is considered satisfactory, and air pollution poses little or no risk</p>
						</div>
					</div>

					<div className="col col-one-third">
						<div className="index-scale-card moderate">
							<header className="index-scale-head">
								<div className="aqui-range">
									<span className="aqui">aqi</span>
									<span className="range">51-100</span>
								</div>
								<p>Moderate</p>
							</header>
							<p>AAir quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.</p>
						</div>
					</div>

					<div className="col col-one-third">
						<div className="index-scale-card no-bad-no-good">
							<header className="index-scale-head">
								<div className="aqui-range">
									<span className="aqui">aqi</span>
									<span className="range">101 - 150</span>
								</div>
								<p>Unhealthy for Sensitive Groups</p>
							</header>
							<p>Members of sensitive groups may experience health effects. The general public is not likely to be affected.</p>
						</div>
					</div>

					<div className="col col-one-third">
						<div className="index-scale-card unhealthy">
							<header className="index-scale-head">
								<div className="aqui-range">
									<span className="aqui">aqi</span>
									<span className="range">151 - 200</span>
								</div>
								<p>Unhealthy</p>
							</header>
							<p>Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects</p>
						</div>
					</div>

					<div className="col col-one-third">
						<div className="index-scale-card bad">
							<header className="index-scale-head">
								<div className="aqui-range">
									<span className="aqui">aqi</span>
									<span className="range">201-300</span>
								</div>
								<p>Very unhealthy</p>
							</header>
							<p>Health alert: everyone may experience more serious health effects</p>
						</div>
					</div>

					<div className="col col-one-third">
						<div className="index-scale-card danger">
							<header className="index-scale-head">
								<div className="aqui-range">
									<span className="aqui">aqi</span>
									<span className="range">300 +</span>
								</div>
								<p>dangerous</p>
							</header>
							<p>Health alert: everyone may experience more serious health effects</p>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default IndexScale