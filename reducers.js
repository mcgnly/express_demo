export function incrementCounter(state, action) {
  switch (action.type) {
    case 'INCREMENT':
    	console.log('fired the action', state)
      return {counter: state.counter + 1};
    default:
      return state;
  }
}