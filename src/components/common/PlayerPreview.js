import React from 'react';
import PropTypes from 'prop-types';
import './PlayerPreview.scss'

export default function PlayerPreview(props) {
  return (
    <div className='PlayerPreview'>
      <div className='column'>
        <img
          className='avatar'
          src={props.avatar}
          alt={`Avatar for ${props.username}`}
        />

        <h2 className='username'>@{props.username}</h2>
      </div>

      {props.children}
    </div>
  );
}

PlayerPreview.propTypes = {
  avatar:   PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};
