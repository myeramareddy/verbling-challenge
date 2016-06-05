import React from 'react';
import _ from 'lodash';
import Option from './Option';

export default class OptionList extends React.Component {

	renderItems() {
		return _.map(this.props.options, (option, index) => <Option key={index} {...option} />);
	}

	render () {
	    return (
		    <div className="button-list">
		        {this.renderItems()}
        	</div>
	    );
	}

}
