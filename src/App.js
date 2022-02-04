import { useSelector } from 'react-redux';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Continent from './components/Continent/Continent';
import CountriesList from './components/Countries/CountriesList';
import CountryAirData from './components/Countries/CountryAirData';

function App() {
  const countryData = useSelector((el) => el.countryName);
  return (
    <Routes>
      <Route
        path="/"
        element={(
          <Continent />

        )}
        exact
      />
      <Route
        path="/Europe"
        element={
          <CountriesList Continent="Europe" />
        }
      />
      <Route path="/SouthAmerica" element={<CountriesList Continent="South America" />} />
      <Route path="/NorthAmerica" element={<CountriesList Continent="North America" />} />
      <Route path="/Oceania" element={<CountriesList Continent="Oceania" />} />
      <Route path="/Asia" element={<CountriesList Continent="Asia" />} />
      <Route path="/Antarctica" element={<CountriesList Continent="Antarctica" />} />
      <Route path="/Africa" element={<CountriesList Continent="Africa" />} />
      <Route
        key={uuidv4()}
        path={`/${countryData.Continent}/Data`}
        element={(
          <CountryAirData
            name={countryData.name}
            continent={countryData.Continent}
            imgUrl={countryData.maps}
            lan={countryData.lan}
            long={countryData.long}
          />
        )}
      />

    </Routes>
  );
}

export default App;
