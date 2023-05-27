import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { FaBookmark, FaShareAlt } from 'react-icons/fa';

const NewsSummary = ({ news }) => {
    console.log(news)
    const { image_url, details, title, total_view, author } = news;
    return (
        <div>
            <Card className='mb-5'>
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <Image className='me-3' src={author.img} style={{ height: '60px' }} roundedCircle />
                        <div>
                            <p>{author.name}</p>
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
                        {details}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default NewsSummary;