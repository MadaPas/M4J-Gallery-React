/* eslint-disable no-alert */
/* eslint-disable max-len */
import React, { useState } from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import './App.css';

import Footer from '../footer/Footer';
import SearchBar from '../searchbar/SearchBar';
import Pagination from '../pagination/Pagination';
import About from '../about/About';
import Header from '../header/Header';

const App = () => {
  const [input, setInput] = useState('');
  const [gallery, setGallery] = useState([]);
  const [links, setLinks] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState();

  const fetchData = async url => {
    try {
      let result = await fetch(url, {
        method: 'get',
        headers: new Headers({
          Authorization: 'Client-ID 7jyECUn10SXnlPckNM81J2cgCIo_X6_t1YLkJ1yfoH4',
        }),
      });
      const data = await result.json();
      console.log('result.headers: ', result.headers);
      console.log('[...result.headers]: ', [...result.headers]);
      console.log('[...result.headers][0]: ', [...result.headers][0]);
      result = {
        headers: [...result.headers].reduce((acc, header) => ({ ...acc, [header[0]]: header[1] }), {}),
        status: result.status,
        data,
      };
      // console.log(result.headers);
      if (result.data.results.length === 0) {
        setError('No pictures found');
        setError();
      }

      // console.log('result.data: ', result.data);
      // console.log('data.results: ', data.results);

      setLinks(result.headers.link);
      setGallery(result.data.results);
      // setGallery(data.results);
      setRedirect(true);
      setRedirect(false);
    } catch (err) {
      setError(err);
      setError();
    }
  };
  const handleSubmit = search => {
    const url = `https://api.unsplash.com/search/photos/?query=${search}`;
    setInput(search);
    fetchData(url);
  };

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/search">
            <SearchBar handleSubmit={handleSubmit} />
            {!input || gallery.length === 0 || error || !links ? (
              <p className="message">No images found.</p>
            ) : (
              <Pagination gallery={gallery} links={links} fetchData={fetchData} />
            )}
            {redirect ? (
              <Redirect to={`/search?query=${input}`} />
            ) : (
              null
            )}
          </Route>

          <Route path="/">
            <SearchBar handleSubmit={handleSubmit} />
            {redirect ? (
              <Redirect to={`/search?query=${input}`} />
            ) : (
              null
            )}
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
