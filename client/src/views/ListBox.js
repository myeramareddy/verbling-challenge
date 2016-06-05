import React from 'react';
import _ from 'lodash';
import ListItem from './ListItem'

export default class ListBox extends React.Component {

  constructor(props) {
    super(props);
    
  }

  renderItems() {
    return _.map(this.props.items, (item, index) => <ListItem key={index} {...item} />);


  }

  render() {
    return (
      <div className="list-box">
        {this.renderItems()}
      </div>
    );
  }

};