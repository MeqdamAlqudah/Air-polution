import reducer, { getCountryData } from '../redux/country/countryName';

describe('Test geting the data from the air api', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, getCountryData(
      {
        name: 'Jordan',
        continent: 'Asia',
        lan: 29.11,
        long: 34.59,

      },
    ))).toEqual({
      name: 'Jordan',
      continent: 'Asia',
      lan: 29.11,
      long: 34.59,

    });
  });
});
