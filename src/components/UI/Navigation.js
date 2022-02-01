import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';

const Navigation = () => (
  <ul>
    <NavLink to="/" className={classes.font}>Country 1</NavLink>
    <NavLink to="/" className={classes.font}>Country 2</NavLink>
    <NavLink to="/" className={classes.font}>Country 3</NavLink>
    <NavLink to="/" className={classes.font}>Country 4</NavLink>
    <NavLink to="/" className={classes.font}>Country 5</NavLink>
  </ul>
);

export default Navigation;
