import React, { Component } from 'react'

import ReactModal from 'react-modal'
import Icon from '../ui/icon'
import IndexScale from '../index-scale/content'

class Button extends Component {

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
			<div>
				<button className="button" onClick={this.handleOpenModal}>
		 			Index scale
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
					<IndexScale />

				</ReactModal>
			</div>
		);
	}
}

export default Button