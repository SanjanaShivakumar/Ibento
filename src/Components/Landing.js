import React, { Component } from 'react';
import '../Styles/Landing.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import 'swiper/swiper-bundle.css';
import Swiper, { Navigation, Pagination } from 'swiper';

import { ArrowRight } from 'react-bootstrap-icons'; 


Swiper.use([Navigation, Pagination]);

class landing extends Component {

    render() {

        return (
            <div className="AppLanding">
                <Navbar className="Appname">Ibento</Navbar>
                <br />
                <div class="jumbotron-fluid" className="jumbotronInfo">
                <div class="container">
                    <h1 class="display-5">Collaborate. Organize. Learn.</h1>
                    <p class="lead">An all in one platform for promoting and organizing events, workshops and seminars.
                    No more missing out!</p>
                </div>
                </div>
                <div className="container">
                <br /><br />
            <br />
            <a href="signup" className="getStarted">Let's Get You Started</a>
            <br />
            <br />
            <div className="loginDirectly">
            <a href="login">
                Have We Met Before? Log In 
                <ArrowRight /></a>
            </div>
             </div> 
            </div>
        );
    }
}

export default landing;