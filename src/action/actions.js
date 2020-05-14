function toggleIncrement(){
    return {
        type: 'TOGGLE_INCREMENT',
    };
}

function toggleDecrement(){
    return {
        type: 'TOGGLE_DECREMENT',
    }
}

export {toggleIncrement, toggleDecrement};