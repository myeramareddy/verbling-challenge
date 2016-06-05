import React from 'react';

export default class ListItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isOpen : false
		}
	}

	componentWillReceiveProps(props) {
		if(props.openAll == null) {
			this.toggleEntry();
		} else {
			this.setState({
		      isOpen : props.openAll
		    });
		}
	  }

	entryName() {
	    return (
	      <p className="list-title">{this.props.name}</p>
	    );
	}

	entryDescription() {
	    return (
	        <p className="list-body">{this.props.desc}</p>
	    );
	}

	setToogleIcon() {
		if(this.state.isOpen) {
	  		return (
	        	<i className="fa fa-minus-circle fa-2x" aria-hidden="true"></i>
	      	);
	  	} else {
	  		return (
	        	<i className="fa fa-plus-circle fa-2x" aria-hidden="true"></i>
	      	);
	  	}	
	}

	openItem() {
		if(!this.state.isOpen) {
			this.setState({isOpen: true});
		}
	}

	closeItem() {
		if(this.state.isOpen) {
			this.setState({isOpen: false});
		}
	}

	toggleEntry() {
	  	if(this.state.isOpen) {
	  		this.closeItem();
	  	} else {
	  		this.openItem();
	  	}
	}

	render() {
	    return (
	    	<div className="list-item">

		    	<div>
		        	{this.entryName()}
		      	</div>

		      	<button className="toggle-button" onClick={this.toggleEntry.bind(this)}>
		          	{this.setToogleIcon()}
		       	</button>

		       	{this.state.isOpen ?
				   <div>{this.entryDescription()}</div> :
				   <div></div>
				}

	    	</div>
	    );
	}

};