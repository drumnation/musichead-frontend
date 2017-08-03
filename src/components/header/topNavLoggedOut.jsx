import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { fetchLogIn } from '../../actions/authActions'
import { connect } from 'react-redux'
import {
    Navbar,
    Grid,
    Row,
    Col
} from 'react-bootstrap'
import './style.css'
import '../../App.css'

class TopNavNotLoggedIn extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={4} md={8} className="text-left">
                        <h2>
                            <Link className="brand" to="/">
                                <img alt="metal hand logo" src="/assets/long-beard-2-1.png" />
                                <span className="logo">
                                    MusicHead
                                </span>
                            </Link>
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Navbar inverse></Navbar>
                </Row>
            </Grid>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return ownProps
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        login: (user, history) => dispatch(fetchLogIn(user, history))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopNavNotLoggedIn))