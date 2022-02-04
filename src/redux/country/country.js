const fetchData = 'countries/countries/fetchcountries';
const resetCountryData = 'countries/countries/reset';
const initialState = [];

export const getCountry = (payload) => ({
  type: fetchData,
  payload,

});

export const resetCountries = () => ({
  type: resetCountryData,
});
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchData:
      return [...Object.entries(action.payload).map((el) => el)];
    case resetCountryData:
      return [];
    default:
      return state;
  }
};

export default reducer;
