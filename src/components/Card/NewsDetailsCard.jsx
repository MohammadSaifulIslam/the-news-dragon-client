import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const NewsDetailsCard = ({newsDetails}) => {
    const { _id,category_id, title, author, thumbnail_url, details, rating, total_view } = newsDetails
    return (
        <Card className='p-4'>
      <Card.Img variant="top"  className='img-fluid' src={thumbnail_url} />
      <Card.Body>
        <Card.Title className='fw-bold fs-3'>{title}</Card.Title>
        <Card.Text>
            {details}
        </Card.Text>
        <Link to={`/category/${category_id}`}><Button variant="danger"><FaArrowLeft/> All news in this category</Button></Link>
      </Card.Body>
    </Card>
    );
};

export default NewsDetailsCard;