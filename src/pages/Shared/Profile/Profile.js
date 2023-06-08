import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [name, setName] = useState(user.displayName);

    const photoRef = useRef(user.photourl)
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name)
        console.log(photoRef.current.value)

    }
    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" readOnly defaultValue={user.email} placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control onChange={handleNameChange} defaultValue={name} type="text" placeholder="your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>photoURL</Form.Label>
                    <Form.Control ref={photoRef} defaultValue={user.photoURL} type="text" placeholder="photoURL" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Profile;