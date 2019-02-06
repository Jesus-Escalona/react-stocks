import React, { Component, Fragment } from 'react';
import PortfolioStock from '../components/PortfolioStock'
class PortfolioContainer extends Component {

  render() {
    const stockList = this.props.stocks.map((s,i) => <PortfolioStock key={i} stock={s} add={this.props.add}/>)
    return (
      <Fragment>
        <ul className="list-group">
          <h2>My Portfolio</h2>
          {
            stockList
          }
        </ul>
      </Fragment>
    );
  }

}

export default PortfolioContainer;
