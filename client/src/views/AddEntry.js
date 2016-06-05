import React from 'react';
import _ from 'lodash';

export default class AddEntry extends React.Component {

  cancelButtonPressed() {
    React.unmountComponentAtNode(document.getElementById('prompt'));
  }

  renderForm() {
    return (
      <div>
        <div>
          <label>Add New Entry</label>
        </div>
        <div>
          <input type="text" name="name" />
        </div>
        <div>
          <textarea rows="4" name="desc"/>
        </div>
        <div>
          <button className="button-style" onClick={this.cancelButtonPressed.bind(this)}>Cancel</button>
          <button className="button-style">Save</button>
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