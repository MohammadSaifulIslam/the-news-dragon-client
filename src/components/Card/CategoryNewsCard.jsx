import React from 'react';
import {  Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const CategoryNewsCard = ({ news }) => {
    const { _id, title, author, thumbnail_url, details, rating, total_view } = news
    return (
        <div>
            <Card className="mb-4">
                <Card.Header className='d-flex align-items-center'>
                    <Card.Img style={{ height: '40px', width: '40px' }} className='rounded-circle' variant="top" src={author?.img} />
                    <div className='ms-3 flex-grow-1 '>
                        <h5 className='mb-0'>{author?.name}</h5>
                        <p className='my-0'>{author?.published_date}</p>
                    </div>
                    <div>
                        <FaRegBookmark ></FaRegBookmark>
                        <FaShareAlt className='ms-2' />
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title className='mb-4'>{title}</Card.Title>
                    <figure className='h-25' style={{ height: '100px' }} ><Card.Img className='img-fluid' variant="top" src={thumbnail_url} /></figure>
                    <Card.Text>
                        {details.length < 250 ? details : <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>read more</Link></>}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex">
                    <div className='flex-grow-1'>
                      <Rating 
                      className='text-warning'
                            placeholderRating={rating?.number}
                            readonly
                            emptySymbol={<FaRegStar/>}
                            placeholderSymbol={<FaStar/>}
                            fullSymbol={<FaStar/>}
                        />
                        <span className='ms-2'>{rating?.number}</span>
                    </div>
                    <div className='d-flex align-items-center'>
                        <FaEye className='' />
                        <p className='mb-0 ms-2'>{total_view}</p>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default CategoryNewsCard;