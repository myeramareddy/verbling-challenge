import React from 'react';
import ListBox from './ListBox';


const items = [
{
	id: 1,
	name: 'learn react',
	desc: 'long way to go'
},
{
	id: 2,
	name: 'eat',
	desc: 'im starving'
},
{
	id: 3,
	name: 'I should',
	desc: 'change the song'
},
{
	id: 4,
	name: 'sleep',
	desc: 'I need'
},
{
	id: 5,
	name: 'Test',
	desc: 'more test'
}
]

export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			items,
			searchText : "",
			currId: items.length,
			openAll : false
		};
	}

	getSearchInput(e) {
	    this.setState({
	      searchText: e.target.value
	    });
	}

  	filterDataBasedOnSearchTxt(dataE) {
  		return dataE.name.toLowerCase().concat(dataE.desc.toLowerCase()).includes(this.state.searchText);
  	}

  	addNewEntry() {
  		//TODO - if cancel is pressed!
  		var newId = this.state.currId+1;
	    var name = window.prompt("Enter Name", "New Name: "+newId);
	    var desc = window.prompt("Enter Description", "something: "+newId);
	    var newEntryList = this.state.items;
	    newEntryList.push({
	        "name": name,
	        "desc": desc,
	        "id": newId
		});

	    this.setState({
		    items: newEntryList,
		    currId : items.length
	    });
	}

	openAllEntries() {
		this.setState({
		    openAll : true
	    });
	}

	closeAllEntries() {
		this.setState({
		    openAll : false
	    });
	}

	toogleAllEntries() {
		this.setState({
		    openAll : null
	    });
	}

	sortById(array, attr) {
		return array.sort(function(a, b) {
		    return b[attr] - a[attr];
		});
	}

	render() {
		var ordered = this.sortById(this.state.items, 'id');
		var fileredItems = ordered.filter(this.filterDataBasedOnSearchTxt.bind(this));
		return (
			<div className="area-width">
				<h1>Verbling Challenge</h1>
				<div>
					<input className="search-bar" onChange={this.getSearchInput.bind(this)} placeholder="Search..."></input>
					<ListBox items={fileredItems} openAll={this.state.openAll}/>
					<div className="options-list">
						<button className="button-style" onClick={this.openAllEntries.bind(this)}>Open</button>
						<button className="button-style" onClick={this.closeAllEntries.bind(this)}>Close</button>
						<button className="button-style" onClick={this.toogleAllEntries.bind(this)}>Toggle</button>
						<button className="button-style" onClick={this.addNewEntry.bind(this)}>Add</button>
					</div>
					
			        <h1>My Verbling Challenge!!!</h1>
				</div>
			</div>
		);
	}

}
