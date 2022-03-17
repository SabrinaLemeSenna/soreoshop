import React from 'react';
import Item1 from '../images/item1.jpg';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const Product = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Item1} />
            <Card.Body className='product-container'>
                <Card.Title>Emma</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}
export default Product;