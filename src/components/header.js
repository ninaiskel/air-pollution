import React, { Component } from 'react'

import Icon from './ui/icon';
import ReactModal from 'react-modal';
import Searcher from './ui/searcher';
import Loading from './ui/loading';

class Header extends Component {
	constructor () {
    super();
    this.state = {
      showModal: false,
      loading: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  onSubmit (e) {
    e.preventDefault()
    console.log(e.target)
    //
    // codigo de fetch
    this.setState({ loading : true })
    setTimeout( () => this.setState({ loading : false }), 3000);
    //
    //
    this.setState({ showModal : false })
    this.props.searchIsTrue()
  }

	render () {
		return (
			<div className="header">
				<div className="header-logo">Air Pollution</div>
				<div className="header-search">
					<button onClick={this.handleOpenModal}>
						<Icon name="icon-search" />
					</button>  
        	{ this.state.loading && <Loading /> }
        	<ReactModal 
            overlayClassName="overlay"
           	isOpen={this.state.showModal}
           	contentLabel="Search modal"
           	className="modal">

          	<button 
          		className="button-close"
          		onClick={this.handleCloseModal}>
          		<Icon name="icon-close" />
          	</button>

            <Searcher onSubmit={ this.onSubmit } />
        	</ReactModal>
				</div>
			</div>
		);
	}
}

export default Header;

