import React from 'react';
import { NavLink } from 'react-router-dom';
import * as Routes from '../../services/routes';
import './Nav.scss';

export default function Nav() {
  return (
    <ul className='Nav'>
      <li>
        <NavLink exact activeClassName='active' to={Routes.HOME}>
          Home
        </NavLink>
      </li>

      <li>
        <NavLink activeClassName='active' to={Routes.BATTLE}>
          Battle
        </NavLink>
      </li>

      <li>
        <NavLink activeClassName='active' to={Routes.POPULAR}>
          Popular
        </NavLink>
      </li>
    </ul>
  );
}
