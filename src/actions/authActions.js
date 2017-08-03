import { logIn } from '../api/railsApi'

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

export function fetchLogIn(spotify_uid, history) {
    return function (dispatch) {
        dispatch(requestLogIn())

        return logIn(spotify_uid)
            .then(data => {
                console.log(data)
                if (data.error) {
                    dispatch(logInError(data.error))
                } else {
                    dispatch(receiveLogIn(data))
                    history.push('/')
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