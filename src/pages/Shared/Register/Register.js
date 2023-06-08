import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Register = () => {
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const { createUser, updateUserProfile, varifyEmail } = useContext(AuthContext)
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photourl = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, password, photoURL, email)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
                handleUpdateUserProfile(name, photourl)
                handleEmailVarrification();
                toast.success("Please check your email address and varify")
                form.reset();
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })

    }
    const handleUpdateUserProfile = (name, photourl) => {

        const profile = {
            displayName: name,
            photoURL: photourl
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(() => { })
    };
    const handleEmailVarrification = () => {
        varifyEmail()
            .then(() => { })
            .catch(() => { })
    }
    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGroupName">
                    <Form.Label>Enter your name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPhoturl">
                    <Form.Label>PhotoURL</Form.Label>
                    <Form.Control type="text" name='photoURL' placeholder="Enter your photo url" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" onClick={handleAccepted} label={<> accepted <Link to='/terms'>Terms and condition</Link> </>} />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={!accepted}>
                    SignUp
                </Button>

                <Form.Text className='text-danger'>{error}</Form.Text>
            </Form>
        </div>
    );
};

export default Register;