import React, { Component } from 'react'
import { Col, Form, FormControl, FormGroup } from 'react-bootstrap'

class SignUpForm extends Component {
    state = {}
    render() {
        return (
            <Col md={6} mdPush={6}>

                <div className="text-left">
                    <h1>
                        Sign Up <img src="/assets/music-video-1-1.png" style={tombstone} alt="tombstone" />
                    </h1>
                    <h4>And it won't cost you a dime...</h4>
                    <br />
                </div>

                <Form onSubmit={this.handleSubmit.bind(this)} horizontal>
                    <FormGroup controlId="formHorizontalUsername">
                        <Col sm={10}>
                            <FormControl
                                type="text"
                                placeholder="Name"
                                value={this.state.name}
                                onChange={event => this.setState({ name: event.target.value })}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalEmail">
                        <Col sm={10}>
                            <FormControl
                                type="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={(event) => this.setState({ email: event.target.value })}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col sm={10}>
                            <FormControl
                                type="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={(event) => this.setState({ password: event.target.value })}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPasswordConfirmation">
                        <Col sm={10}>
                            <FormControl
                                type="password"
                                placeholder="Password Confirmation"
                                value={this.state.password_confirmation}
                                onChange={(event) => this.setState({ password_confirmation: event.target.value })}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col md={3}>
                            <Button bsStyle="danger" bsSize="large" type="submit" style={submitButton}>
                                Create Account
                                        </Button>
                            {/*<FacebookLogin
                                            appId="306729159767109"
                                            autoLoad={true}
                                            fields="name,email,picture"
                                            callback={responseFacebook} 
                                        />*/}
                        </Col>
                    </FormGroup>

                </Form>
            </Col>
        )
    }
}

export default SignUpForm