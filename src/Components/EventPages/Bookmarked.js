import React, {Component} from 'react';
import {Navbar, Row, Col} from 'react-bootstrap';
import Navigation from '../Navigation';

import film from './film.jpg';
import hack from './hack.jpg';
import sports from './sports.jpg';

import './Events.css'

class Bookmarked extends Component {

    render() { 
        return ( 
        <div class="container">
        <Navbar className="bookmarkedTitle">
            Bookmarked Events
            </Navbar>
            <Row class="container" className="posterRow">
                <Col xs={12} md={4} lg={4} >
                    <img className="bookmarkedPosters" src={film} />
                </Col>
                <Col xs={12} md={4} lg={4}>
                    <img className="bookmarkedPosters" src={sports} />
                </Col>
                <Col xs={12} md={4} lg={4}>
                    <img className="bookmarkedPosters" src={hack} />
                </Col>
            </Row>
            <Navigation />
        </div> 
        );
    }
}
 
export default Bookmarked;