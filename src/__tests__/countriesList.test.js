import React from 'react';
import renderer from 'react-test-renderer';
import {
  NavLink,
  BrowserRouter as Router,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import { getCountry } from '../redux/country/country';
import App from '../App';

describe('Test countriesList', () => {
  test('test NavLink path', async () => {
    const goBackHandler = jest.fn();
    const component = renderer.create(
      <Router>
        <NavLink onClick={goBackHandler} to="/" />
      </Router>,
    );
    const tree = component.toJSON();
    expect(tree.props.href).toEqual('/');
  });
  test('test country rendering ', () => {
    store.dispatch(getCountry({
      name: { common: 'Jordan' },
      population: 1000000,
      continent: ['Asia'],
    }));
    const component = renderer.create(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <App />

          </Router>
        </Provider>
      </React.StrictMode>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
