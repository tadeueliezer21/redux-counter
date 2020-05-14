import React, { Fragment } from 'react';

import { connect } from 'react-redux';

const ShowCounter = ({ count, title }) => (
    <Fragment>
        <h1>{title}</h1>
        <h2>{count}</h2>
    </Fragment>
)
export default connect(state => ({ count: state.increment.count }))(ShowCounter);