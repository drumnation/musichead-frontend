import React, { Component } from 'react'
import { Nav, NavItem, Navbar, ButtonGroup, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './style.css'

class UserProfileSubNav extends Component {
    render() {
        return (
            <Navbar>
                <Nav pullRight>
                    <NavItem>
                        <ButtonGroup bsSize="large" >
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
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}

export default UserProfileSubNav