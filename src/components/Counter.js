import React, { Fragment } from 'react';

import { connect } from 'react-redux';

import * as countIncrement from '../action/actions';

const Couter = ({ dispatch }) => {
    return (
        <Fragment>
            <button onClick={() => dispatch(countIncrement.toggleIncrement())}>Increment</button>
            <button onClick={() => dispatch(countIncrement.toggleDecrement())}>Decrement</button>
        </Fragment>
    );
}

export default connect()(Couter);