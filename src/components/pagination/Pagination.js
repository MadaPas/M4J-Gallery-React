import React from 'react';
import Gallery from '../gallery/Gallery';
import Button from '../button/Button';
import './Pagination.css';

const Pagination = ({ gallery, links, fetchData }) => {
  const linksArray = links.split(',');
  const linkData = linksArray.map(link => {
    const rel = link.match(/(?<=rel=")(.*)(?=")/)[0];
    const url = link.match(/(?<=<)(.*)(?=>)/)[0];
    return { rel, url };
  });
  const buttonRels = ['first', 'prev', 'next', 'last'];
  const linkSorted = buttonRels.map(rel => linkData.find(link => link.rel === rel));
  const linkSortedFiltered = linkSorted.filter(link => link);
  console.log(linkSortedFiltered);
  const buttons = linkSortedFiltered.map(link => (
    <Button key={link.rel} url={link.url} rel={link.rel} fetchData={fetchData} />
  ));
  return (
    <div>
      <Gallery gallery={gallery} />
      <div className="buttons-container">
        <div className="buttons">{buttons}</div>
      </div>
    </div>
  );
};

export default Pagination;
