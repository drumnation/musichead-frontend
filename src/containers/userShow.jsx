import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import UserProfileHeader from '../components/user/userProfileHeader'
import UserListeningHistory from '../components/user/userListeningHistory'
import UserAbout from '../components/user/userAbout'
import UserFavoriteBands from '../components/user/userFavoriteBands'
import UserFavoriteTracks from '../components/user/userFavoriteTracks'
import connectedWithRoutes from '../hocs/connectedWithRoutes'
import { fetchLogIn, getMyInfo, setTokens } from './../actions/authActions'

class UserShow extends Component {
    async componentDidMount(props) {
        try {
            const { params } = this.props.match
            const { accessToken, refreshToken } = params
            this.props.setTokens({ accessToken, refreshToken })
            await this.props.getMyInfo(this.props.history)
            if (!localStorage.jwt) {
                this.props.history.push('/')
            }
        } catch (err) {
            console.log(err)
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

function mapStateToProps(state) {
    return {
        store: state
    }
}

export default connectedWithRoutes(mapStateToProps, { fetchLogIn, getMyInfo, setTokens })(UserShow)