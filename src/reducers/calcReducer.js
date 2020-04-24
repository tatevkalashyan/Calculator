export const calcReducer = (state = {}, action) => {

    switch (action.type) {
        case 'FETCH_CALC': {
            return {
                ...state,
                isFetching: true
            }
        }
        case 'SUCCESS_CALC': {
            return {
                ...state,
                calc: action.calc,
                isFetching: false
            }
        }
        default: return state;
    }
}