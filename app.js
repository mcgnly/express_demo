require('source-map-support').install();
import express from 'express';
import cookieParser from 'cookie-parser';
import { renderToString } from 'react-dom/server';
import reactString from './serverSideRendering.js';
import {initialState} from './serverSideRendering.js';
import htmlTemplate from './template.js';
import React from 'react';
const app = express();

// this is the rest of the html, as a string, filled in with the guts of the react
const htmlString = htmlTemplate({
	body:reactString, 
	state: JSON.stringify(initialState)
})

app.get('/', (req, res, next)=> {

// this sends the string, which happens to be html, which the client picks up and starts digesting
 	res.send(htmlString);
});
// serving public as well to get access to the css that the client will ask for
app.use('/',express.static('public'));

app.listen(3000, () => console.log("app listening on 3000"));

