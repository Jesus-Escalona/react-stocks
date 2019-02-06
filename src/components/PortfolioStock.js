import React, { Fragment } from 'react'

const Stock = (props) => (
  <Fragment>
    <li className="list-group-item">
      {
        `${props.stock.ticker} - ${props.stock.price}`
      }
    </li>
  </Fragment>
);

export default Stock
