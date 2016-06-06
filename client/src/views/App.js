import React from 'react';
import ReactDOM from 'react-dom';
import ListBox from './ListBox';
import AddEntry from './AddEntry';


var items = [
{
	id: 1,
	name: '1 - I’m obsessed',
	desc: 'With the creative, at-times frustrating, and always impactful process of learning and writing software. It’s not something that stops when I leave the office.'
},
{
	id: 2,
	name: '2 - For Example',
	desc: 'I will be attending my second AWS developers conference this month to feed my curiosity and also be part of an upcoming Startup Weekend where I’ll be working with smart, driven people all committed to the same goal of building an amazing product.'
},
{
	id: 3,
	name: '3 - Not convinced huh?',
	desc: 'Last month, while working full-time, I’ve single-handedly developed and published my first iOS app on the side. There were many sleepless nights teaching myself the fundamentals. It was frustrating! But at the same time, I felt proud to have created something that has the potential to be a very useful tool.'
},
{
	id: 4,
	name: '4 - Proven Experience',
	desc: 'Being an integral part of a small core group of developers in an agile financial business environment. Working on multiple modules and projects and integrating them together to make a cohesive system. Beyond just development, I’ve also supported production deployments in a high traffic, load balanced environment.'
},
{
	id: 5,
	name: '5 - Most importantly',
	desc: 'I learnt the importance of language on a fundamental level -- the hard way. I tried to forget Hindi when I moved to the US to fit in, and didn’t realize till a few years ago how ridiculous that was. I am now working to get back the comfort level I once had with it. So I know the importance of Verbling’s mission.'
}
]

export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			items,
			searchText : "",
			currId : items.length,
			openAll : false,
			showAddEntryBox : false
		};
		//console.log("MAIN APP CONSTRCUTOR BEING CALLED");
		//React components using ES6 classes no longer autobind this to non React methods
	}

	getSearchInput(e) {
	    this.setState({
	      searchText: e.target.value
	    });
	}

  	filterDataBasedOnSearchTxt(dataE) {
  		return dataE.name.toLowerCase().concat(dataE.desc.toLowerCase()).includes(this.state.searchText);
  	}

  	//Somewhat of a hack I think? 
  	//Without this - when save is called without inputs, 
  	//this constructor gets called again causing items get reset to default only ones, 
  	//losing the previously added ones.
  	//NEED TO RESEARCH MORE ON WHY
  	doNothing() {
  		this.setState({
		    showAddEntryBox : false
	    });
	    var elem = document.getElementById("addEntryButton");
		elem.innerHTML = 'Add';
	    console.log("doNothing state items: "+this.state.items);
  	}


	addNewEntry(n, d) {
		if(n && d) {
			var newId = this.state.currId+1;
			var newEntryList = this.state.items;
			newEntryList.push({
		        "name": n,
		        "desc": d,
		        "id": newId
			});

		    this.setState({
			    items: newEntryList,
			    currId : items.length,
			    showAddEntryBox : false
		    });
		    var elem = document.getElementById("addEntryButton");
			elem.innerHTML = 'Add';
		    console.log("AFTER Show state items: "+this.state.items);
		}
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

	showAddEntryBoxButtonClick() {
		this.setState({
			showAddEntryBox: this.state.showAddEntryBox ? false: true
		})
		var elem = document.getElementById("addEntryButton");
		elem.innerHTML = this.state.showAddEntryBox ? 'Add' : 'Cancel';
	}

	render() {
		var ordered = this.sortById(this.state.items, 'id');
		var fileredItems = ordered.filter(this.filterDataBasedOnSearchTxt.bind(this));
		return (
			<div className="area-width">
				<h1>Verbling Challenge</h1>
				<h5>Why I should be considered...</h5>
				<div>
					<input className="search-bar" onChange={this.getSearchInput.bind(this)} placeholder="Search..."></input>
					<ListBox items={fileredItems} openAll={this.state.openAll}/>
					<div className="options-list">
						<button className="button-style" onClick={this.openAllEntries.bind(this)}>Open</button>
						<button className="button-style" onClick={this.closeAllEntries.bind(this)}>Close</button>
						<button className="button-style" onClick={this.toogleAllEntries.bind(this)}>Toggle</button>
				        <button className="button-style" id="addEntryButton" onClick={this.showAddEntryBoxButtonClick.bind(this)}>Add</button>
					</div>	
					<AddEntry showAddEntryBox={this.state.showAddEntryBox} addNewEntry={this.addNewEntry.bind(this)} doNothing={this.doNothing.bind(this)}/>				
				</div>
				<div className="page-footer center-text"><p>&copy; 2016 Manisha Yeramareddy</p></div>
			</div>
		);
	}

}
