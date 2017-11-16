import React from 'react';
import {connect} from 'react-redux';

const ReactContents = ({count, increment}) => {
	console.log('count is: ', count)
	return (
		<div>
			<p>this is the react contents</p>
			<h3>{count}</h3>
			<button onClick = {increment}>count up</button>
		</div>
	);
}

const mapStateToProps = state => {
  return {
    count: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment : () => dispatch({
      type : 'INCREMENT'
    })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReactContents);