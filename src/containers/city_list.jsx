import React, { Component } from 'react';
import City from './city';

class CityList extends Component {
  constructor(props){
    super(props);
  }
  renderCities = (cities) => {
    return (
      cities.map(city => <City name={city.name} key={city.name}/>)
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

export default CityList;
