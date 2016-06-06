import React from 'react';

export default class AddEntry extends React.Component {

  constructor(props) {
    super(props);    
  }

  saveButtonPressed() {
    const name = this.refs.name.value;
    const desc = this.refs.desc.value;
    console.log("Potential new entry? "+name+" --- "+desc);
    if(name && desc) {
      this.props.addNewEntry(name, desc);
      this.refs.name.value = "";
      this.refs.desc.value = "";
    } else {
      console.log("NOT CALLING ADD NEW Entry");
      this.props.doNothing();
    }
  }


  renderForm() {
    return (
      <div>
        <div>
          <label>Add New Entry</label>
        </div>
        <div>
          <span><input type="text" ref="name" placeholder="Name"/></span>
        </div>
        <div>
          <span><textarea ref="desc" placeholder="Type away..."/></span>
        </div>
        <div className="entry-box-buttons">
          <button className="button-style" onClick={this.saveButtonPressed.bind(this)}>Save</button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.props.showAddEntryBox ?
           <form className="add-entry-box"><div>{this.renderForm()}</div></form> :
           <form></form>
        }
      </div>
    );
  }

};