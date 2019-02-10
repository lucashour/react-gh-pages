import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import PlayerPreview from '../common/PlayerPreview';
import Loading from '../common/Loading';
import API from '../../services/api';
import { BATTLE } from '../../services/routes';

function Profile (props) {
  const info = props.info;

  return (
    <PlayerPreview username={info.login} avatar={info.avatar_url}>
      <ul className='spaced-list-items'>
        {info.name && <li>{info.name}</li>}
        {info.location && <li>{info.location}</li>}
        {info.company && <li>{info.company}</li>}

        <li>Followers: {info.followers}</li>
        <li>Following: {info.following}</li>
        <li>Public Repos: {info.public_repos}</li>

        {info.blog && <li><a href={info.blog}>{info.blog}</a></li>}
      </ul>
    </PlayerPreview>
  );
}

Profile.propTypes = {
  info: PropTypes.object.isRequired,
}

function Player (props) {
  return (
    <div>
      <h1 className='centered-lead'>{props.label}</h1>
      <h3 className='text-center'>Score: {props.score}</h3>
      <Profile info={props.profile} />
    </div>
  );
}

Player.propTypes = {
  label: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  profile: PropTypes.object.isRequired,
}

export default class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error:   null,
      loading: true,
      loser:   null,
      winner:  null,
    };
  }

  componentDidMount() {
    const players = queryString.parse(this.props.location.search);

    API.battle([
      players.playerOneName,
      players.playerTwoName
    ]).then((players) => {
      if (players === null) {
        return this.setState(() => {
          return {
            error:   'Looks like there was an error. Check that both users exist on GitHub.',
            loading: false
          };
        });
      }

      this.setState(() => {
        return {
          error:   null,
          loading: false,
          loser:   players[1],
          winner:  players[0]
        };
      });
    });
  }

  render() {
    const error   = this.state.error;
    const loading = this.state.loading;
    const loser   = this.state.loser;
    const winner  = this.state.winner;

    if (loading) {
      return <Loading />;
    }

    if (error) {
      return (
        <div>
          <p>{error}</p>
          <Link to={BATTLE}>Reset</Link>
        </div>
      );
    }

    return (
      <div>
        <div className='row'>
          <Player
            label='Winner'
            score={winner.score}
            profile={winner.profile}
          />

          <Player
            label='Loser'
            score={loser.score}
            profile={loser.profile}
          />
        </div>

        <div className='row'>
          <Link to={BATTLE}>Reset</Link>
        </div>
      </div>
    );
  }
}
