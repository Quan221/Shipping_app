import React, { useState, useContext } from 'react'
import { Form, Button, Container, Col } from 'react-bootstrap'
import { UserContext } from '../App'
import { Link, Navigate } from 'react-router-dom'
import Apis, {endpoints, authApi} from '../config/Apis'
import cookies from 'react-cookies'
import "./Css.css"



const Login = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [user, dispatch] = useContext(UserContext)

    const login = async (evt) => {
        evt.preventDefault() 
         
        const res = await Apis.post(endpoints['login'], {
            'username': username,
            'password': password,
            'client_id': '10CmnmdevYcyDLfIqVVpyGlHPI2zoclByiXcyDaX',
            'client_secret': 'DE6NX2tpT39tqKEm2IE44SsoxjrTEv3owa3m5qUxeD8fchKxxYRQlcAs7qLa2xKNtJZVWDwlM2FsS11V1MOc5JCkCA6ixl89GrmD78nCJaHWgpwSH78RxJOnD0q5a8fG',
            'grant_type': 'password'
        })

        console.info(res.data)
        cookies.save('token', res.data.access_token)

        const user = await authApi().get(endpoints['current-user'])
        console.info(user.data)
        dispatch({
            'type': 'login',
            'payload': user.data
        })
    }


    if (user != null)
        return <Navigate to="/" />
        
    return (
        <div  className="sign-up-container form form-container">
        <Container >
            <h1 className="text-center text-danger">DANG NHAP</h1>
            <Col >
            <Form onSubmit={login} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" 
                        value={username} 
                        onChange={(evt) => setUsername(evt.target.value)}
                        placeholder="Nhap username" 
                        required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" 
                            value={password} 
                            onChange={(evt) => setPassword(evt.target.value)}
                            placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Dang nhap
                </Button>
               <Button className="button "> <Link to="/register" className='link' >Dang ky</Link></Button>
            </Form>
            </Col>
        </Container>
        </div>
    )
}

export default Login