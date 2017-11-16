import React from 'react';
import { renderToString } from 'react-dom/server';
import ReactContents from './ReactContents';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {incrementCounter} from './reducers'

export const initialState = {counter:7};
const store = createStore(incrementCounter, initialState);
console.log('store is', store.getState())

// this will make the react guts to paste into the html template
const reactString = renderToString(
	<Provider store={store}>
		<ReactContents />
	</Provider>
);


export default reactString;