import React, { Component, Fragment } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: [],
    radio: true
  }

  componentDidMount() {
    this.fetchStocks()
  }

  fetchStocks = () => {
    fetch("http://localhost:3001/stocks")
    .then(res => res.json())
    .then(stocks => this.setState({stocks}))
  }

  addToPortfolio = (stock) => {
    this.setState({portfolio: [...this.state.portfolio, stock]})
  }


  handleRadio = (e) => {
    this.setState({radio: !this.state.radio})
  }

  handleSelect = () => {

  }

  render() {
    const stocks = this.state.radio ? this.state.stocks.sort((a,b) => a.name.localeCompare(b.name)) : this.state.stocks.sort((a,b) => b.price - a.price)
    return (
      <Fragment>
        <SearchBar radio={this.handleRadio} check={this.state.radio}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={stocks} add={this.addToPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.portfolio}/>

            </div>
          </div>
      </Fragment>
    );
  }

}

export default MainContainer;
