import React from 'react';
import logo from '../logo.svg';
import '../App.css';

const Form = (props) => {
 
  const {addItem, handleChange, inputIsEmpty, value, deleteLastItem, noItemsFound} = props;
  return (
    <div>
	 <h2>Shopping List</h2>
        <form onSubmit={(e) => addItem(e)}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={value}
            onChange={(e) => handleChange(e)}
          />
          <button disabled={inputIsEmpty()}>Add</button>
        </form>

        <button onClick={(e) => deleteLastItem(e)} disabled={noItemsFound()}>
          Delete Last Item
        </button>
	</div>
  );
 
}

export default Form;
