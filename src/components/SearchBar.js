import React, { Fragment } from 'react';

const SearchBar = (props) => {
  return (
    <Fragment>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="alphabetically" checked={props.check} onChange={props.radio}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="price" checked={!props.check} onChange={props.radio} />
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={null}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </Fragment>
  );
}


export default SearchBar;
