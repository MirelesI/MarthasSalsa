import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Button from '@material-ui/core/Button';

export class OverviewPage extends Component {


    render() {
        return (
            <Grid fluid>
                <Row center="xs" className="splash">
                    <Col lg={8} xs={10}>
                        <div className="main-title">Project Gravity</div>
                        <div className="sub-title">Unified people for a unified EHR system.</div>
                    </Col>
                </Row>
                <Row className="content-row">
                    <Col xsOffset={1} xs={10} md={6}>

                        <h1 className="landing-header">Together, we can build a better EHR system. Join the movement.</h1>
                        <p>Bringing patients, clinicians, and health care leaders together to create a market demand for robust interoperability between electronic health record (EHR) systems. Add your name for the latest updates.</p>
                        <Button className="button-style padding-top" variant="contained" color="secondary" component={Link} to="/contact">
                            Learn More
                        </Button>

                    </Col>
                </Row>

                <Row className="content-row bg-blue">
                    <Col xsOffset={1} xs={10}>
                        <p>
                            The problem of information sharing across different hospitals and healthcare systems is a huge issue in the medical field.
                            Hospitals use many types of electronic health records (EHR) solutions that do not communicate well with each other, so transmission of patient records
                            becomes tedious and challenging. Interoperability is a problem that many hospitals face, which is the problem of EHRs from one hospital system
                            being unable to interact with an EHR from another system. To solve this problem, legislation needs to be created to either mandate a single EHR for all United
                            States hospitals to use or enforce interoperability standards. We have built a platform to facilitate discussion around the standardization of healthcare record
                            formats and transmission of those documents. Our goal is creating an accessible repository with information as to why this consolidation is a worthy cause, and
                            a place to start a discussion on how to achieve mandatory consolidation or interoperability standards through reaching out to state and national legislators.
                </p>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
