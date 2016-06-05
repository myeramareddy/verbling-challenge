import React from 'react';
import _ from 'lodash';
import ListItem from './ListItem'

export default class ListBox extends React.Component {

  constructor(props) {
    super(props);
    console.log("From App "+this.props.openAll);
  }

  renderItems() {
    var test = this.props.openAll;
    console.log("rendering open list items? : "+test);

    return _.map(this.props.items, (item, index) => <ListItem key={index} {...item} openAll={test}  />);

  }

  render() {
    return (
      <div className="list-box">
        {this.renderItems()}
      </div>
    );
  }

};