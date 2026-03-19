import React from 'react';
import { data } from '../../../data';
import { useReducer } from 'react';
import { CLEAR_LIST, REMOVE_LIST, RESET_LIST } from './actions';
import reducer from './reducer';

const defaultState = { people: data }


const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)
  
  const removeItem = (id) => {
    dispatch({type:REMOVE_LIST, payload:{ id }})
  };
  const clearList = () => {
    dispatch({ type: CLEAR_LIST })
  }
  const resetItems = () => dispatch({type:RESET_LIST})
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length ? <button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={clearList}
      >
        clear items
      </button> : <button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={resetItems}
      >
        Reset
      </button>}
    </div>
  );
};

export default ReducerBasics;
