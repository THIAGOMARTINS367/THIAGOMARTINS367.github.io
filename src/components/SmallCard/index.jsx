import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function SmallCard({ cardTitle, imagePath, imageAltText, redirectLink = '' }) {
  return (
    <a href={ redirectLink } target="_blank" rel="noreferrer">
      <div className="skill">
        <img
          src={ imagePath }
          alt={ imageAltText }
          className="skill-img"
        />
        <span className="card-title">{ cardTitle }</span>
      </div>
    </a>
  );
}

SmallCard.propTypes = {
  cardTitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  imageAltText: PropTypes.string.isRequired,
  redirectLink: PropTypes.string,
};

export default SmallCard;
