import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import UserProfileHeader from '../components/user/userProfileHeader'
import UserListeningHistory from '../components/user/userListeningHistory'
import UserAbout from '../components/user/userAbout'
import UserFavoriteBands from '../components/user/userFavoriteBands'
import UserFavoriteTracks from '../components/user/userFavoriteTracks'
import connectedWithRoutes from '../hocs/connectedWithRoutes'
import { fetchLogIn } from './../actions/authActions'
import { getMyInfo, setTokens } from './../actions/spotifyActions'

class UserShow extends Component {
    componentDidMount(props) {
        const { dispatch, params } = this.props
        const { accessToken, refreshToken } = params
        console.log('params', params)
        dispatch(setTokens({ accessToken, refreshToken }))
        dispatch(getMyInfo())
        // if (this.props.match.params.spotify_uid) {
        //     localStorage.setItem('spotify_uid', this.props.match.params.spotify_uid)
        //     localStorage.setItem('spotify_token', this.props.match.params.access_token)
        //     localStorage.setItem('spotify_refresh_token', this.props.match.params.refresh_token)
        //     this.props.fetchLogIn(this.props.match.params.email, this.props.history)
        // }

        if (!localStorage.jwt) {
            this.props.history.push('/')
        }
    }

    render() {
        return (
            <div>
                <UserProfileHeader />
                <Switch>
                    <Route path="/profile/about" component={UserAbout} />
                    <Route path="/profile/bands" component={UserFavoriteBands} />
                    <Route path="/profile/tracks" component={UserFavoriteTracks} />
                    <Route path="/profile/" component={UserListeningHistory} />
                </Switch>
            </div>
        )
    }
}

export default connectedWithRoutes(null, { fetchLogIn, getMyInfo, setTokens })(UserShow)