import React from 'react';
import ReactDOM from 'react-dom';
import ReactContents from './ReactContents';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {incrementCounter} from './reducers'

const initialState = window.__initial_state__;
const store = createStore(incrementCounter, initialState);

ReactDOM.hydrate(
	<Provider store={store}>
		<ReactContents />
	</Provider>, 
	document.getElementById('root')
);