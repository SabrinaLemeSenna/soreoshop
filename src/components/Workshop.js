import React from 'react';
import Workshop1 from '../images/workshop1.png';
import { Card } from 'react-bootstrap';

const Workshop = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Workshop1} />
            <Card.Body className='product-container'>
                <Card.Title>Workshop</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default Workshop;