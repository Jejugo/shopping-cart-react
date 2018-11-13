import React from 'react';
import logo from '../logo.svg';
import '../App.css';

const List = (props) => {
  const {items} = props;
  return (
    <div>
	 <p className="items">Items</p>
        <ol className="item-list">
          {items.map((item, index) => <li key={index}>{item}</li>)}
        </ol>
	</div>
  );
 
}

export default List;
