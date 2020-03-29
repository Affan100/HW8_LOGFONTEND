import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { bindActionCreators } from 'redux';
import { AuthActions } from '../redux/store';
import { useDispatch } from 'react-redux';
import { Button, Form, Card } from 'react-bootstrap';

const LoginForm = (props) => {
    const [facebookLink, setFacebookLink] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const actions = bindActionCreators({ ...AuthActions }, useDispatch())
    const getFacebookLink = async () => {
        const res = await axios.get(`http://localhost/api/auth/facebook`)
        console.log(res.data)
        setFacebookLink(res.data);
    }
    useEffect(() => {
        getFacebookLink();
    })
    const LoginPSU = (e) => {
        e.preventDefault();
        // const { username, password } = e.target.elements;
        // console.log(username.value, password.value)
        actions.loginPSU(username, password);
    }
    return (
        <div>
            <div className="d-flex justify-content-center">
                <div className="d-flex flex-column bd-highlight mb-2">
                    <div>
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src="https://www.finnomena.com/wp-content/uploads/2018/07/pile-of-3d-facebook-logos_1379-875.jpg" />
                            <Card.Body>
                                <Card.Title>Facebook LOGIN</Card.Title>
                                <Card.Text>
                                    Affan Pathan
                                    6035512016
                            </Card.Text>
                                <Button variant="outline-success" href={facebookLink}>LOGIN</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    {' '}
                    <div>
                        <div className="">
                            <form>
                                <div>
                                    <div>
                                        {/* USERNAME : <input type="text" name="username" />
                            PASSWORD : <input type="password" name="password" /> */}
                                        <div>
                                            <Card style={{ width: '20rem' }}>
                                                <Card.Img variant="top" src="data:image/png;base64,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" />
                                                <Card.Body>
                                                    <Card.Title>PSU LOGIN</Card.Title>
                                                    <Card.Text>
                                                        <Form style={{ width: '18rem' }}>
                                                            <Form.Group controlId="formBasicEmail">
                                                                <Form.Label>Username</Form.Label>
                                                                <Form.Control type="text" placeholder="Enter Username" name="username" onChange={(e) => setUsername(e.target.value)} />
                                                            </Form.Group>
                                                            <Form.Group controlId="formBasicPassword">
                                                                <Form.Label>Password</Form.Label>
                                                                <Form.Control type="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} />
                                                            </Form.Group>
                                                        </Form>
                                                    </Card.Text>
                                                    <Button variant="outline-danger" onClick={LoginPSU}>LOGIN</Button>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default LoginForm;