import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Styles/Categories.css'

class Categories extends Component {

    render() { 
        return ( 
            <div class="container" className="categoriesTitle">
                Categories
                <br />
                <br />
                    <Row class="container" className="categoriesRow">
                        <Col xs={3} sm={3} md={3} lg={3}>
                            <p className="artsCategory">Arts</p>
                        </Col>
                        <Col xs={3} sm={3} md={3} lg={3}>
                            <p className="sportsCategory">Sports</p>
                        </Col>
                        <Col xs={3} sm={3} md={3} lg={3}>
                            <p className="codingCategory">Coding</p>
                        </Col>
                        <Col xs={3} sm={3} md={3} lg={3}>
                            <p className="eventsCategory">Events</p>
                        </Col>

                    </Row>
            
            
        </div>
         );
    }
}
 
export default Categories;