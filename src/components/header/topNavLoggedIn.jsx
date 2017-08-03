import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { ButtonGroup, ButtonToolbar, Button, Row, Col } from 'react-bootstrap'
import connectedWithRoutes from '../../hocs/connectedWithRoutes'
import { logOut } from '../../actions/authActions'
import './style.css'

class TopNavLoggedIn extends Component {
    render() {
        return (
            <Row>
                <Col xs={4} md={8} className="brand-vertical-align">
                    <h2 className="text-left">
                        <strong>
                            <NavLink className="brand" to="/">
                                <img className="brand-image" alt="metal hand logo" src="/assets/long-beard-2-1.png" /> <span className="logo">MusicHead</span>
                            </NavLink>
                        </strong>
                    </h2>
                </Col>
                <ButtonToolbar className="profile-buttons">
                    <Button className="log-out-button" bsSize="lg" onClick={this.props.logUserOut}>Log Out</Button>
                    <LinkContainer className="profile-link-button" to="/profile/">
                        <Button bsStyle="primary" bsSize="large" href="#!" >
                            Profile
                        </Button>
                    </LinkContainer>
                    <LinkContainer to="/profile/">
                        <img className="topnav-profile-img" width={64} height={64} src={localStorage["profile_image"]} alt="face" />
                    </LinkContainer>
                </ButtonToolbar>
                <ButtonGroup bsSize="lg" className="loggedInMenu" justified>
                    <LinkContainer to="/artist">
                        <Button bsStyle="primary" href="#!" type="button">
                            <strong>ARTIST</strong>
                        </Button>
                    </LinkContainer>
                    <LinkContainer to="/album">
                        <Button bsStyle="primary" href="#!" type="button">
                            <strong>ALBUM</strong>
                        </Button>
                    </LinkContainer>
                    <LinkContainer to="/track">
                        <Button bsStyle="primary" href="#!" type="button">
                            <strong>TRACK</strong>
                        </Button>
                    </LinkContainer>
                </ButtonGroup>
            </Row>
        )
    }
}

function mapStateFromProps(state, ownProps) {
    return { ...ownProps, loggedIn: state.auth.loggedIn }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        logUserOut: (data) => dispatch(logOut())
    }
}

export default connectedWithRoutes(mapStateFromProps, mapDispatchToProps)(TopNavLoggedIn)