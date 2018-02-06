import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export default ({ id, description, amount, createdAt }) => {
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>
        {numeral(amount / 100).format('$0,0.00')}
        -
        {moment(createdAt).format('MMMM Do, YYYY')}
      </p>
    </div>
  );
};
