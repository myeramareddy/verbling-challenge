import React from 'react';

export default class Option extends React.Component {

	addListItem() {
	    var name = window.prompt("What's the title of your list item?");
	    var desc = window.prompt("What's the content of your list item?", "please enter text here");
	    //var newItemList = this.state.items;
	    //newItemList.push([title, content]);



	    //var newJSON={"name": name, "desc": desc};
	    console.log("yo man, i am here!: "+this.props.items);
	    //this.props.items.add(newJSON);
	    
	  }

	render () {
	    return (
		    <button className="button-style" onClick={this.addListItem.bind(this)}>{this.props.action}</button>
	    );
	}

}
