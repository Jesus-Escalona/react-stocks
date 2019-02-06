import React, { Component, Fragment } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    const stockList = this.props.stocks.map(s => <Stock key={s.id} stock={s} add={this.props.add}/>)
    return (
      <Fragment>
        <h2>Stocks</h2>
        {
          stockList
        }
      </Fragment>
    );
  }

}

export default StockContainer;
