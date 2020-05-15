import React, { Fragment } from 'react';

import { connect } from 'react-redux';

import { Creators as Actions } from '../store/ducks/increment';

const Couter = ({ dispatch }) => {
    return (
        <Fragment>
            <button onClick={() => (dispatch(Actions.addOne(1)))}>Increment</button>
            <button onClick={() => (dispatch(Actions.removeOne(1)))}>Decrement</button>
        </Fragment>
    );
}

export default connect()(Couter);