import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

const News = () => {
    const newsDetails = useLoaderData();
    console.log(newsDetails);
    const { title, image_url, details } = newsDetails

    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title><h2>{title}</h2></Card.Title>
                    <Card.Img src={image_url}></Card.Img>
                    <Card.Text>
                        <p>{details}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;