import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
    addOne: ['i'],
    removeOne: ['i']
})

const INITIAL_STATE = { count: 0 };

export const add = (state = INITIAL_STATE, action) => {
    return { ...state, count: state.count + action.i };
}
export const remove = (state = INITIAL_STATE, action) => {
    return { ...state, count: state.count - action.i }
}
export const HANDLES = {
    [Types.ADD_ONE]: add,
    [Types.REMOVE_ONE]: remove
}
export default createReducer(INITIAL_STATE, HANDLES);

Creators.addOne();