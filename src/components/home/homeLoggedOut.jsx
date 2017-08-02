import React, { Component } from 'react'
import {
    Grid,
    Row,
    Col,
    Form,
    FormControl,
    FormGroup,
    Button,
    Glyphicon
} from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import { fetchSignUp } from '../../actions/signupActions'
import connectedWithRoutes from '../../hocs/connectedWithRoutes'
import { environment } from './../../api/railsApi'
// import FacebookLogin from 'react-facebook-login'

const features = {
    fontSize: "18px"
}

const tombstone = {
    height: "40px",
    width: "40px"
}

const submitButton = {
    marginTop: "10px"
}

// const responseFacebook = (response) => {
//     console.log(response);
// }

class HomeLoggedOut extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
        }
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.signUp(this.state, this.props.history)
    }

    render() {
        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col md={6} mdPush={6}>

                            <div className="text-left">
                                <center>
                                    <Button
                                        eventKey={1}
                                        className="spotify-connect-button"
                                        bsStyle="danger"
                                        bsSize="large"
                                        href={`${environment[1]}/auth/spotify?show_dialog=true`}
                                    >
                                        <img width={64} height={64} src='/assets/spotify-icon-25.png' alt="spotify icon" />
                                        <span className="spotify-button-text">
                                            Sign in with Spotify Premium
                                        </span>
                                    </Button>
                                </center>
                            </div>

                        </Col>
                        <Col md={6} mdPull={6}>
                            <h2 className="text-left">Connect with music heads from around the world to watch, listen, and share your favorite tracks.</h2>
                            <br />
                            <div className="text-left">
                                <p style={features}><Glyphicon glyph="cd" /> <strong>See latest releases</strong> from record labels in News Feed</p>
                                <p style={features}><Glyphicon glyph="headphones" /> <strong>Share your listener footprint</strong> with Listening History</p>
                                <p style={features}><Glyphicon glyph="search" /> <strong>Discover new tracks</strong> to save using MusicHead Search&trade;</p>
                            </div>
                            <br />
                            <img src="/assets/spotify-1-2.png" alt="powered by spotify" />
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return ownProps
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        signUp: (state, history) => dispatch(fetchSignUp(state, history))
    }
}

export default connectedWithRoutes(mapStateToProps, mapDispatchToProps)(HomeLoggedOut)
