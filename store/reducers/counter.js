const initialState = {
    counter: 0
};

function counter(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return Object.assign({}, state, {
                counter: state.counter + 1
            });
        case 'DECRIMENT':
            return Object.assign({}, state, {
                counter: state.counter - 1
            });
        default:
            return state;
    }
}

export default counter;
