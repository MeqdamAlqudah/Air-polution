const countryData = 'countries/countryName/changeTheCountry';
const resetCountryData = 'countries/countryName/reset';
const initialState = {};

export const getCountryData = (payload) => ({
  type: countryData,
  payload,

});

export const resetCountryName = () => ({
  type: resetCountryData,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case countryData:
      return action.payload;
    case resetCountryData:
      return {};
    default:
      return state;
  }
};

export default reducer;
