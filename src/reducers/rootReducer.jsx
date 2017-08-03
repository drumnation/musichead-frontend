import { combineReducers } from 'redux'
import authReducer from './authReducer'
import apiReducer from './apiReducer'
import spotifyReducer from './spotifyReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    api: apiReducer,
    spotify: spotifyReducer
})

export default rootReducer