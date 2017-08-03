import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import UserProfileHeader from '../components/user/userProfileHeader'
import UserListeningHistory from '../components/user/userListeningHistory'
import UserAbout from '../components/user/userAbout'
import UserFavoriteBands from '../components/user/userFavoriteBands'
import UserFavoriteTracks from '../components/user/userFavoriteTracks'
import connectedWithRoutes from '../hocs/connectedWithRoutes'
import { fetchLogIn } from './../actions/authActions'

class UserShow extends Component {
    componentDidMount(props) {
        console.log('match', this.props.match.params.spotify_uid)
        if (this.props.match.params.spotify_uid) {
            localStorage.setItem('spotify_uid', this.props.match.params.spotify_uid)
            this.props.fetchLogIn(this.props.match.params.spotify_uid, this.props.history)
        } else if (!localStorage.jwt) {
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

export default connectedWithRoutes(null, { fetchLogIn })(UserShow)