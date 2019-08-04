import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


export class Navigation extends Component {
 

  


    componentDidMount() {

    }

    render() {

        return (
            <AppBar position="fixed" className="app-bar">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap className="app-bar-title">
                        <Link to="/">Martha's Salsa</Link>
                    </Typography>
                    <Button className="button-style button-spacer nav-buttons" component={Link} to="/">Home</Button>
                    <Button className="button-style button-spacer nav-buttons" component={Link} to="/products">Products</Button> 
                    <Button className="button-style button-spacer nav-buttons" component={Link} to="/about-us">About Us</Button>
                </Toolbar>
            </AppBar>
        );
    }
}
