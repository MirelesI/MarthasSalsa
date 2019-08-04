import React, { Component } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { MemberCard } from './MemberCard';
import MEMBERS from '../members.json';
import './AboutUsPage.css';


export class AboutUsPage extends Component {
    render() {
        let members = MEMBERS.map((member, i) => <MemberCard info={member} key={i} />)
        return (
            <Grid fluid className="main-container">
                <h1 className='text-center'> Meet Martha's Salsa</h1>
                <p className="text-center">
                   Martha's Salsa is about...
                </p>
                <div className='text-center'>
                    {members}
                </div>
                <p></p>
                <p></p>
                <h1 className='text-center'>Contact Us!</h1>
                <p className="text-center">
                    If you have any feedback on our website or product,
                    feel free to contact Martha's Salsa at <a href="mailto:Marthassalsaseattle@gmail.com" target="_top">Marthassalsaseattle@gmail.com</a>
                </p>
                <p></p>
            </Grid>
        );
    }
}
