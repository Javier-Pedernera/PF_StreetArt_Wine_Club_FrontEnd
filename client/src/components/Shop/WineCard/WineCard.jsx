import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Winecards = ({ name, winery, price, image }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body className="d-flex flex-column align-items-center">
      <Card.Title style={{ fontSize: "24px", fontFamily: "cursive" }}>{name}</Card.Title>
        <Card.Text className="text-center">
          {winery}
        </Card.Text>
        <Card.Text className="text-center">
           {price}
        </Card.Text>
        <Link to="/new-route">
          <Button variant="primary">BUY</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Winecards;