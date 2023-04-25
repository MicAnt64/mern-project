import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ value, text, color }) => {
  const ratingStars = (vals) => {
    const starIcons = [];
    for (let i = 0; i < 5; i++) {
      let icon = (
        <span key={(Math.random() * 1000).toString()}>
          <i
            style={{ color: color }}
            className={
              vals >= 1 + i
                ? 'fas fa-star'
                : vals >= 0.5 + i
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }></i>
        </span>
      );
      starIcons.push(icon);
    }
    return starIcons;
  };
  return (
    <div className='rating'>
      {ratingStars(value)}
      {/* <span>{text ? text : ''}</span> */}
      <span>{text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: '#f8e825',
};

// For type checking
Rating.propTypes = {
  color: PropTypes.string,
};

export default Rating;
