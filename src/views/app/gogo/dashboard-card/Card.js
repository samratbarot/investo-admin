import React from 'react';
import {NavLink} from 'react-router-dom'

const Card = () => {
  return (
    <li className="glide__slide mx-2">
      <NavLink to="#" className="card">
        <div className="card-body text-center">
          <i className="iconsminds-clock" />
          <p className="card-text mb-0">Pending Orders</p>
          <p className="lead text-center">16</p>
        </div>
      </NavLink>
    </li>
  );
};
export default Card;