import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import logger from 'redux-logger';
import countriesReducer, { getCountry } from './country/country';
import airDataReducer, { getAirData, apiFailed } from './airData/airData';
import countryName from './country/countryName';

const getDataFromApi = 'getDataFromApiCountry';
const getAirDataFromApi = 'getDataFromApiAir';
const reducer = combineReducers({
  countriesReducer,
  // additional reducers could be added here
  airDataReducer,
  countryName,
});

const url = 'https://restcountries.com/v3.1/all';
const fetchCountriesMiddleware = (storeAPI) => (next) => (action) => {
  if (action.type === getDataFromApi) {
    // Make an API call to fetch Book from the server
    fetch(url).then((response) => response.json()).then((el) => storeAPI.dispatch(getCountry(el)));
  } else if (action.type === getAirDataFromApi) {
    const airUrl = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${action.lang[0]}&lon=${action.lang[1]}&appid=ef04f5820200d1d083520262be5c3e41`;
    fetch(airUrl).then(
      (response) => {
        if (response.status === 429) {
          storeAPI.dispatch(apiFailed());
        }
        return response.json();
      },
    ).then((el) => storeAPI.dispatch(
      getAirData(el, action.name, action.continents),
    ));
  }

  return next(action);
};
const composeEnchancer = compose(applyMiddleware(logger),
  applyMiddleware(fetchCountriesMiddleware));
const store = createStore(
  reducer,
  composeEnchancer, // dispatching  actions asynchronously
);

export default store;
