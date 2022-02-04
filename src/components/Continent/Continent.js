import { NavLink } from 'react-router-dom';
import classes from './Continent.module.css';
import store from '../../redux/configureStore';
import { resetDataActions } from '../../redux/airData/airData';
import europImg from '../../Images/Continent/Europe.png';
import asiaImg from '../../Images/Continent/Asia.png';
import africaImg from '../../Images/Continent/Africa.png';
import southAmericaImg from '../../Images/Continent/SouthAmerica.png';
import northAmericaImg from '../../Images/Continent/NorthAmerica.png';
import antarcticaImg from '../../Images/Continent/Antarctica.png';
import oceaniaImg from '../../Images/Continent/Oceania.png';

const Continent = () => {
  const clickHandler = () => {
    store.dispatch(resetDataActions());
  };
  return (
    <div className={classes.container}>
      <div className={classes.worldMap}>
        <iframe
          aria-controls="none"
          width="200"
          height="200"
          src="https://www.youtube.com/embed/e6rglsLy1Ys"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <h1 className={classes.h1}>Air Polution</h1>
      <ul className={classes.ul}>
        <li className={classes.firstContinent}>
          <NavLink to="/Europe" onClick={clickHandler}>
            <img src={europImg} alt="europ" />
            {' '}
            <span>Europe</span>
            <p>44 coutry</p>
          </NavLink>
        </li>
        <li className={classes.secondContinent}>
          <NavLink to="/SouthAmerica" onClick={clickHandler}>
            <img src={southAmericaImg} alt="South America" />
            <span>South America</span>
            <p>12 coutry</p>
          </NavLink>
        </li>
        <li className={classes.thirdContinent}>
          <NavLink to="/NorthAmerica" onClick={clickHandler}>
            <img src={northAmericaImg} alt="North America" />
            <span>North America</span>
            <p>23 coutry</p>
          </NavLink>
        </li>
        <li className={classes.fourthContinent}>
          <NavLink to="/Oceania" onClick={clickHandler}>
            <img src={oceaniaImg} alt="Oceania" />
            <span>Oceania</span>
            <p>14 coutry</p>
          </NavLink>
        </li>
        <li className={classes.fifthContinent}>
          <NavLink to="/Asia" onClick={clickHandler}>
            <img src={asiaImg} alt="Asia" />
            <span>Asia</span>
            <p>48 coutry</p>
          </NavLink>
        </li>
        <li className={classes.sixContinent}>
          <NavLink to="/Antarctica" onClick={clickHandler}>
            <img src={antarcticaImg} alt="Antarctica" />
            <span>Antarctica</span>
            <p>5 coutry</p>
          </NavLink>
        </li>
        <li className={classes.sevenContinent}>
          <NavLink to="/Africa" onClick={clickHandler}>
            <img src={africaImg} alt="Africa" />
            <span>Africa</span>
            <p> 54coutry</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Continent;
