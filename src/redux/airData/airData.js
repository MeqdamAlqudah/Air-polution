const fetchAirData = 'airData/airData/fetchAirData';
const resetData = 'airData/airData/resetData';
const failed = 'airData/airData/failed';
const initialState = [];

export const getAirData = (payload, name, continents) => ({
  type: fetchAirData,
  payload,
  name,
  continents,
});

export const resetDataActions = () => ({
  type: resetData,
});

export const apiFailed = () => ({
  type: failed,
});

let flag = true;
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchAirData:
      if (flag) {
        flag = false;
      }
      return [[action.name, ...Object.values(
        action.payload.list.map((el) => el.components),
      )]];
    case resetData:
      return [];
    case failed:
      return 'Error';
    default:
      return state;
  }
};

export default reducer;
