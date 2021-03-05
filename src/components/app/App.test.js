import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from './App';
import Header from '../header/Header';
import SearchBar from '../searchbar/SearchBar';
import Footer from '../footer/Footer';

configure({
  adapter: new Adapter(),
});

it('renders one <Header /> components', () => {
  const app = shallow(<App />);
  expect(app.find(Header)).toHaveLength(1);
});

it('renders one <Header /> components', () => {
  const app = shallow(<App />);
  expect(app.find(SearchBar)).toHaveLength(1);
});

it('renders one <Header /> components', () => {
  const app = shallow(<App />);
  expect(app.find(Footer)).toHaveLength(1);
});
