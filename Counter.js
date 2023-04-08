const { createStore } = require('redux');

// initial state
const initialState = {
  count: 0,
}

// actions - action - action creator
// action - increment, decrement, increaseByAmount, and reset
{
  type: "INCREMENT";
}

{
	type: 'DECREMENT';
}
{
	type: 'RESET';
}
{
	type: 'INCREASE_BY_AMOUNT';
}

// increment action creator
const incrementAction = () => {
  return {
    type: 'INCREMENT'
  }
}

// decrement action creator
const decrementAction = () => {
  return {
		type: 'DECREMENT',
	};
}

// reset action creator
const resetAction = () => {
  return {
		type: 'RESET',
	};
}

// increase by amount action creator
const increaseByAmountAction = (anyAmount) => {
  return {
		type: 'INCREASE_BY_AMOUNT',
    payload: anyAmount,
	};
}

// reducer
const counterReducer = (state = initialState, action) => {
  // console.log(action)
  if(action.type === 'INCREMENT') {
    return {
      count: state.count + 1,
    }
  } else if(action.type === 'DECREMENT') {
    return {
      count: state.count -1,
    }
  } else if(action.type === 'RESET') {
    return {
      count: 0,
    }
  } else if(action.type === 'INCREASE_BY_AMOUNT') {
    return {
      count: state.count + action.payload
    }
  }
}

// store
const store = createStore(counterReducer);
store.subscribe(() => {
  const data = store.getState();
  console.log(data)
})

// dispatch action - increment
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());

// dispatch action - decrement
store.dispatch(decrementAction());

// dispatch action - reset
store.dispatch(resetAction());

// dispatch action - increase by any amount
store.dispatch(increaseByAmountAction(10));