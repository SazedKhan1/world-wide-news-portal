import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaYoutube, FaTwitch, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../../contexts/AuthProvider';

const RightSideNav = () => {
    const { providerLogin } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary" > <FcGoogle></FcGoogle> Login with Google</Button>
                <Button className='mb-2' variant="outline-dark"> <FaGithub></FaGithub> Login in with Github</Button>
            </ButtonGroup>

            <div className='mt-4'>
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaYoutube /> YouTube</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch /> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaInstagram /> Instragram</ListGroup.Item>
                </ListGroup>
            </div>
            <div className='mt-3'>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;