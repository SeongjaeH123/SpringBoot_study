import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'

const MenuItem = ({data}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={data.img} />
            <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>
                    {data.price}
                </Card.Text>
                <Button variant="primary">주문하기</Button>
            </Card.Body>
        </Card>
    )
}

export default MenuItem