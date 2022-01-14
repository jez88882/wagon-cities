import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectCity } from '../actions';

class City extends Component {
  handleClick = () => {
    this.props.selectCity(this.props.city);
  }
  render() {
    return (
      <li className="list-group-item" onClick={this.handleClick}>{this.props.city.name}</li>
    );
  }
}

const mapDispatchToProps = (dispatch) => { // redux passes the dispatch argument
  //  binds action to the props of the component
  return bindActionCreators({ selectCity }, dispatch);
};

const mapStateToProps = (state) => {
  return { selectedCity: state.selectedCity };
};

export default connect(mapStateToProps, mapDispatchToProps)(City);
