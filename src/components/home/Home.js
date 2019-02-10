import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BATTLE } from '../../services/routes';
import './Home.scss';

export default class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <h1>Github Battle: Battle your friends... and stuff.</h1>
        <Link className='button' to={BATTLE}>Battle</Link>
      </div>
    );
  }
}
