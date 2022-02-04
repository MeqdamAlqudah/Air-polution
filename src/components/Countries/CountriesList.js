import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BiChevronLeft, BiChevronLeftCircle } from 'react-icons/bi';
import store from '../../redux/configureStore';
import { getCountryData } from '../../redux/country/countryName';
import { resetDataActions } from '../../redux/airData/airData';
import classes from './CountriesList.module.css';
import europImg from '../../Images/Continent/Europe.png';
import asiaImg from '../../Images/Continent/Asia.png';
import africaImg from '../../Images/Continent/Africa.png';
import southAmericaImg from '../../Images/Continent/SouthAmerica.png';
import northAmericaImg from '../../Images/Continent/NorthAmerica.png';
import antarcticaImg from '../../Images/Continent/Antarctica.png';
import oceaniaImg from '../../Images/Continent/Oceania.png';

const CountriesList = (props) => {
  const getDataFromApi = 'getDataFromApiCountry';
  const { Continent } = props;
  const continent = `/${Continent.replace(' ', '')}/Data`;
  const countries = useSelector((el) => el.countriesReducer);
  const newCountries = countries.filter((el) => ((el[1].name.common !== 'Israel') && (el[1].continents[0] === Continent)));
  useEffect(() => {
    store.dispatch({ type: getDataFromApi });
  }, []);
  if (newCountries.length > 0) {
    const clickHandler = (name = '', Continent = '', maps = '', lan = 0, long = 0) => {
      store.dispatch(getCountryData({
        name, Continent, maps, lan, long,
      }));
    };
    const goBackHandler = () => {
      store.dispatch(resetDataActions());
    };
    return (
      <div>
        <NavLink onClick={goBackHandler} to="/"><BiChevronLeft className={classes.icon} /></NavLink>
        <div className={classes.div}>
          {Continent === 'Europe' && <img src={europImg} className={classes.img} alt={`${Continent}`} />}
          {Continent === 'Asia' && <img src={asiaImg} className={classes.img} alt={`${Continent}`} />}
          {Continent === 'Africa' && <img src={africaImg} className={classes.img} alt={`${Continent}`} />}
          {Continent === 'South America' && <img src={southAmericaImg} className={classes.img} alt={`${Continent}`} style={{ width: '6rem' }} />}
          {Continent === 'North America' && <img src={northAmericaImg} className={classes.img} alt={`${Continent}`} />}
          {Continent === 'Antarctica' && <img src={antarcticaImg} className={classes.img} alt={`${Continent}`} />}
          {Continent === 'Oceania' && <img src={oceaniaImg} className={classes.img} alt={`${Continent}`} />}
          <p className={classes.p}>{Continent}</p>
        </div>
        <p className={classes.status}>Status By Country</p>
        <ul className={classes.ul}>
          {newCountries.map((el) => ((
            <li key={uuidv4()} className={classes.country}>
              <BiChevronLeftCircle />
              <NavLink
                className={classes.country}
                onClick={() => clickHandler(el[1].name.common,
                  Continent.replace(' ', ''), el[1].maps.googleMaps, el[1].latlng[0], el[1].latlng[1])}
                to={continent}
              >
                <img src={el[1].flags.png} alt={`${el[1].name.common}`} className={classes.flag} />
                <p className={classes.name}>
                  {' '}
                  {
                    el[1].name.common
                  }

                </p>
                {' '}
                <p className={classes.name}>
                  Pop:
                  {' '}
                  {el[1].population}

                </p>
              </NavLink>
            </li>
          )
          ))}
        </ul>
      </div>
    );
  }
  return (<div>....Loading</div>);
};

CountriesList.propTypes = {
  Continent: PropTypes.string.isRequired,
};

export default CountriesList;
