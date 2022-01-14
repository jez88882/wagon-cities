// TODO: add and export your own actions
import cities from '../cities';

const setCities = () => {
  // TODO: Api call! For now, simulate a DB
  return {
    type: 'SET_CITIES',
    payload: cities
  };
};

export { setCities };

const selectCity = (city) => {
  // TODO: Api call! For now, simulate a DB
  console.log('select city');
  return {
    type: 'SELECT_CITY',
    payload: city
  };
};

export { selectCity };
