import { logIn } from '../api/railsApi'
import {
    SPOTIFY_TOKENS,
    SPOTIFY_ME_BEGIN,
    SPOTIFY_ME_SUCCESS,
    SPOTIFY_ME_FAILURE
} from '../constants'
import Spotify from 'spotify-web-api-js'
const spotifyApi = new Spotify()

// SPOTIFY

export function setTokens({ accessToken, refreshToken }) {
    if (accessToken) {
        spotifyApi.setAccessToken(accessToken)
        localStorage.setItem('spotify_token', accessToken)
    }
    return { type: SPOTIFY_TOKENS, accessToken, refreshToken }
}

export function getMyInfo(history) {
    return dispatch => {
        dispatch({ type: SPOTIFY_ME_BEGIN })
        spotifyApi.getMe().then(data => {
            dispatch({ type: SPOTIFY_ME_SUCCESS, data: data })
            localStorage.setItem('spotify_token', data.spotify_token)
            dispatch(fetchLogIn(data.email, history))
        }).catch(e => {
            dispatch({ type: SPOTIFY_ME_FAILURE, error: e })
        })
    }
}

// RAILS

export function logInAction() {
    return {
        type: 'LOG_IN'
    }
}

export function logOut() {
    return function (dispatch) {
        localStorage.clear()
        dispatch({
            type: 'LOG_OUT'
        })
    }
}

export function fetchLogIn(user, history) {
    return function (dispatch, history) {
        dispatch(requestLogIn())
        return logIn(user, history)
            .then(data => {
                if (data.error) {
                    dispatch(logInError(data.error))
                } else {
                    dispatch(receiveLogIn(data))
                    return data
                }
            })
    }
}

export function logInError(error) {
    return {
        type: 'RECEIVE_LOG_IN',
        status: 'error',
        error,
        receivedAt: Date.now()
    }
}

export function requestLogIn(account) {
    return {
        type: 'REQUEST_LOG_IN'
    }
}

export function receiveLogIn(user) {
    return function (dispatch) {
        localStorage.setItem('jwt', user.token)
        localStorage.setItem('user_id', user.id)
        localStorage.setItem('profile_image', user.image)
        localStorage.setItem('spotify_token', user.spotify_token)
        localStorage.setItem('spotify_refresh_token', user.spotify_refresh_token)
        localStorage.setItem('spotify_uid', user.spotify_uid)
        dispatch(logInAction())
        dispatch({
            type: 'RECEIVE_LOG_IN',
            status: 'success',
            payload: { user },
            receivedAt: Date.now()
        })
    }
}