import { combineReducers } from 'redux'
import { calcReducer } from './calcReducer'
import { videoReducer } from './videoReducer'

const appReducer = combineReducers({
    calcReducer,
    videoReducer
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer