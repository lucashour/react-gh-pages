import React from 'react';
import PropTypes from 'prop-types';
import './LanguageSelect.scss';

export default function LanguageSelect(props) {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

  return (
    <ul className='LanguageSelect'>
      {languages.map((language) => (
        <li
          style={language === props.selectedLanguage ? {color: '#d0021b'} : null}
          onClick={props.onSelect.bind(null, language)}
          key={language}>
            {language}
        </li>
      ))}
    </ul>
  );
}

LanguageSelect.propTypes = {
  onSelect:         PropTypes.func.isRequired,
  selectedLanguage: PropTypes.string.isRequired
};
