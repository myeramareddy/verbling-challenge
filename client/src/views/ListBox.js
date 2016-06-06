import React from 'react';
import _ from 'lodash';
import ListItem from './ListItem'

export default class ListBox extends React.Component {

  constructor(props) {
    super(props);
  }

  renderItems() {
    var test = this.props.openAll;
    //console.log("Rendering open list items? : "+this.props.items);

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