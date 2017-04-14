import React, { Component } from 'react'

import Icon from './ui/icon'
import ReactModal from 'react-modal';
import Searcher from './ui/searcher';

class Header extends Component {
	constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

	render () {
		return (
			<div className="header">
				<div className="header-logo">Air Pollution</div>
				<div className="header-search">
					<button onClick={this.handleOpenModal}>
						<Icon name="icon-search" />
					</button>
        		
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

          	<Searcher />
        	</ReactModal>

				</div>
			</div>
		);
	}
}

export default Header;

