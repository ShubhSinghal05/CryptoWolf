let useReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_NOW:
            return {
                ...state,

            }
        case REMOVE:
            return {
                ...state,

            }
        case ADD_TO_CART:
            return {
                ...state,

            }
        default:
            return state
    }
}

