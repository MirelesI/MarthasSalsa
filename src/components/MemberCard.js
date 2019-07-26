import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Marthasweblogo from '../assets/Marthasweblogo.PNG';
import './MemberCard.css';


export class MemberCard extends Component {
    render() {
        return (
            <Card style={{ width: '50rem' }}>
                <Card.Img variant="top" src={this.props.info.img} />
                <Card.Body>
                    <Card.Title>{this.props.info.name}</Card.Title>
                    <Card.Text className="text-left">
                        {this.props.info.text}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}
