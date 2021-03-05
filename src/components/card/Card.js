import React from 'react';
import './Card.css';

const Card = ({ imgData }) => (
  <div className="flip-box-inner">
    <div className="flip-box-front">
      <img src={imgData.urls.small} alt={imgData.alt_description} />
    </div>
    <div className="flip-box-back">
      <a className="author" target="_blank" rel="noreferrer" href={imgData.user.portfolio_url}>
        by
        {' '}
        {imgData.user.name}
        {' '}
        <i className="fas fa-external-link-alt" />
      </a>
      <p className="description">{imgData.description}</p>
      <a className="button download" target="_blank" rel="noreferrer" href={imgData.links.download}>Download</a>
    </div>
  </div>
);

export default Card;
