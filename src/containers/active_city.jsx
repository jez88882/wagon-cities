import React, { Component } from 'react';
import { connect } from 'react-redux';

const ActiveCity = (props) => {
  if (props.selectedCity) {
    const src = `https://kitt.lewagon.com/placeholder/cities/${props.selectedCity.slug}`;
    return (
      <div>
        <h3>{props.selectedCity.name}</h3>
        <img src={src} alt="" />
      </div>
    );
  }
  return null;
};

const mapStateToProps = (state) => {
  return { selectedCity: state.selectedCity };
};

export default connect(mapStateToProps)(ActiveCity);
