const INITIAL_STATE = { count: 0 };

export default function increment(state = INITIAL_STATE, action) {
    if (action.type === 'TOGGLE_INCREMENT') {
        return { ...state, count: state.count + 1 }
    }
    if (action.type === 'TOGGLE_DECREMENT') {
        return { ...state, count: state.count - 1 }
    }
    return state;
}
