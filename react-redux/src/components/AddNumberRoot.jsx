import React, { Component } from 'react';
import AddNumber from './AddNumber';

class AddNumberRoot extends Component {
  render() {
    return (
      <div>
        <h1>Add Numnber Root</h1>
        <AddNumber
          onClick={function(size) {
            this.props.onClick(size);
          }.bind(this)}
        />
      </div>
    );
  }
}

export default AddNumberRoot;
