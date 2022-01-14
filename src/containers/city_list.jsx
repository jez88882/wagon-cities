import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import City from './city';
import { setCities } from '../actions';

class CityList extends Component {
  componentWillMount() {
    this.props.setCities();
  }

  renderCities = (cities) => {
    return (
      cities.map(city => <City city={city} key={city.name} />)
    );
  }

  render() {
    return (
      <div className="cities">
        {this.renderCities(this.props.cities)}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => { // redux passes the dispatch argument
  //  binds action to the props of the component
  return bindActionCreators({ setCities }, dispatch);
};

const mapStateToProps = (state) => {
  return { cities: state.cities };
};

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
