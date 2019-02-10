import React from 'react';
import PropTypes from 'prop-types';
import './Repos.scss';

export default function Repos(props) {
  return (
    <ul className='Repos'>
      {props.repos.map((repo, index) => {
        return (
          <li key={repo.name} className='item'>
            <div className='item-rank'>#{index + 1}</div>
            <ul className='spaced-list-items'>
              <li>
                <img
                  className='avatar'
                  src={repo.owner.avatar_url}
                  alt={`Avatar for ${repo.owner.login}`}
                />
              </li>
              <li>
                <a href={repo.html_url} rel='noopener noreferrer' target='_blank'>
                  {repo.name}
                </a>
            </li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count} stars</li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

Repos.propTypes = {
  repos: PropTypes.array.isRequired
};
