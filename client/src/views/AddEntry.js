import React from 'react';
import _ from 'lodash';

export default class AddEntry extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      inputName : "",
      inputDesc : ""
    }
  }

  cancelButtonPressed() {
    React.unmountComponentAtNode(document.getElementById('prompt'));
  }

  saveButtonPressed() {
    console.log("new name? "+this.state.inputName);
    console.log("new desc? "+this.state.inputDesc);

    //this.cancelButtonPressed();
  }

  nameChanged(e) {
      this.setState({
        inputName: e.target.value
      });
  }

  descChanged(e) {
    this.setState({
        inputDesc: e.target.value
      });
  }

  renderForm() {
    return (
      <div>
        <div>
          <label>Add New Entry</label>
        </div>
        <div>
          <span><input type="text" name="name" onChange={this.nameChanged.bind(this)}/></span>
        </div>
        <div>
          <span><textarea name="desc" onChange={this.descChanged.bind(this)}/></span>
        </div>
        <div className="entry-box-buttons">
          <button className="button-style" onClick={this.cancelButtonPressed.bind(this)}>Cancel</button>
          <button className="button-style" onClick={this.saveButtonPressed.bind(this)}>Save</button>
        </div>
      </div>
    );

  }

  render() {
    return (
        <form className="add-entry-box">
          {this.renderForm()}
        </form>
    );
  }

};