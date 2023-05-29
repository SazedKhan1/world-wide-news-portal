import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { FaBookmark, FaEye, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsSummary = ({ news }) => {

    const { image_url, details, title, total_view, author, _id, rating } = news;
    return (
        <div>
            <Card className='mb-5'>
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <Image className='me-3' src={author.img} style={{ height: '60px' }} roundedCircle />
                        <div>
                            <p className='mb-0'>{author.name}</p>
                            <p>{author.published_date}</p>
                        </div>
                    </div>
                    <div>
                        <FaBookmark></FaBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img src={image_url}></Card.Img>
                    <Card.Text>
                        {
                            details.length > 250 ?
                                <p> {details.slice(0, 250) + '....'} <Link to={`/news/${_id}`} >Read More</Link></p>
                                :
                                <p>{details}</p>
                        }

                    </Card.Text>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-between align-items-center '>
                    <div>
                        <FaStar className='text-warning me-2'></FaStar>
                        <span>{rating?.number}</span>
                    </div>
                    <div>
                        <FaEye className='me-2'></FaEye>
                        <span>{total_view}</span>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummary;