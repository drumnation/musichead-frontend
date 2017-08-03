import React, { Component } from 'react'
import { Nav, Navbar, ButtonGroup, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './style.css'
import { environment } from './../../api/railsApi'

class UserProfileSubNav extends Component {
    render() {
        return (
            <Navbar>
                <Nav pullRight>
                    {localStorage["spotify_token"] !== ''
                        ?
                        <LinkContainer to={`${environment[1]}/auth/spotify?show_dialog=true`}>
                            <Button
                                className="spotify-connect-button"
                                bsStyle="success"
                            >
                                <img width={32} height={32} src='/assets/spotify-icon-25.png' alt="spotify icon" />
                                <span className="spotify-button-text">
                                    Connect Spotify
                                </span>
                            </Button>
                        </LinkContainer>
                        :
                        <div></div>
                    }
                    <ButtonGroup>
                        <LinkContainer to="/profile">
                            <Button className="sub-menu-buttons">
                                Listening History
                            </Button>
                        </LinkContainer>
                        <LinkContainer to="/profile/bands">
                            <Button className="sub-menu-buttons">
                                Bands
                            </Button>
                        </LinkContainer>
                        <LinkContainer to="/profile/tracks">
                            <Button className="sub-menu-buttons">
                                Tracks
                            </Button>
                        </LinkContainer>
                    </ButtonGroup>
                </Nav>
            </Navbar>
        )
    }
}

export default UserProfileSubNav