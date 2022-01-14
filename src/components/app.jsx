import React from 'react';
import CityList from '../containers/city_list'
import ActiveCity from '../containers/active_city'

// TODO: remove this line and use Redux

const App = () => {
  return (
    <div className="app">
      <CityList/>
      <div className="active-city">
        <ActiveCity />
      </div>
    </div>
  );
};

export default App;
