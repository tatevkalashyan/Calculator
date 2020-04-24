import { combineReducers } from 'redux'
import { calcReducer } from './calcReducer'

const appReducer = combineReducers({
    calcReducer
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer