import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import classes from './CountryAirData.module.css';
import store from '../../redux/configureStore';
import { resetDataActions } from '../../redux/airData/airData';

const CountryAirData = (props) => {
  const data = useSelector((el) => el.airDataReducer);
  const {
    name, continent, lan, long,
  } = props;
  const pathName = `/${continent}`;
  useEffect(() => {
    const getAirDataFromApi = 'getDataFromApiAir';
    store.dispatch({
      type: getAirDataFromApi, lang: [lan, long], name, continent,
    });
  }, []);
  const goBackHandler = () => {
    store.dispatch(resetDataActions());
  };
  if (data === 'Error') {
    return (

      <div style={{ color: 'red', fontSize: 30 }}>
        <NavLink to={pathName}><BiChevronLeft className={classes.icon} /></NavLink>
        <p>
          The API is Broken, please try to get the data tomorrow.
        </p>

      </div>
    );
  }
  if (data.length > 0) {
    const newDataArray = data.filter((el) => (
      el[0].toLowerCase().trim() === name.toLowerCase().trim()));
    return (
      <div className={classes.div}>
        <NavLink to={pathName} onClick={goBackHandler}>
          <BiChevronLeft className={classes.icon} />
        </NavLink>
        <div className={classes.mapouter}>
          <div className={classes.gmap_canvas}>
            <iframe title={`${name} map`} width="300" height="300" id="gmap_canvas" src={`https://maps.google.com/maps?q=${name}&t=&z=5&ie=UTF8&iwloc=&output=embed`} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" />
            <a className={classes.hide} href="https://putlocker-is.org">{name}</a>
            <br />
            <a className={classes.hide} href="https://www.embedgooglemap.net">{name}</a>
          </div>

        </div>
        <div><embde title="googleMap" /></div>
        <h2 className={classes.h2}>{name}</h2>
        <ul className={classes.ul}>
          {
            Object.entries(newDataArray[0][1]).map((el) => <li key={uuidv4()}>{`${el[0].toUpperCase()} Value:  ${el[1]}`}</li>)
          }
        </ul>
        <p className={classes.p}>Check this video about global polution:  </p>
        <iframe width="300" height="300" src="https://www.youtube.com/embed/ejnd1hq7DHE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        <p className={classes.p}>Most Polluted Major City On Earth: </p>
        <iframe width="300" height="300" src="https://www.youtube.com/embed/mNZIdHhdQs8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
    );
  }
  return (<div className={classes.p}>...Loading</div>);
};

CountryAirData.propTypes = {
  name: PropTypes.string,
  continent: PropTypes.string,
  lan: PropTypes.number,
  long: PropTypes.number,
};

CountryAirData.defaultProps = {
  name: '',
  lan: 0,
  long: 0,
  continent: '',
};
export default CountryAirData;
