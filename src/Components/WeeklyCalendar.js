import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../Styles/WeeklyCalendar.css'

class WeeklyCalendar extends Component {

    render() { 
        return (
            <div>
                <Row className="justify-content-md-center">
                    <Col xs={2}>
                        <p className="day">Mon</p>
                        <p className="date">2</p>
                    </Col>
                    <Col xs={2}>
                        <span className="annualEventTag"></span>
                        <p className="day">Tue</p>
                        <p className="date">3</p>
                    </Col>
                    <Col xs={2}>
                        <span className="featuredEventTag"></span>
                        <p className="day">Wed</p>
                        <p className="date">4</p>
                    </Col>
                    <Col xs={2}>
                        <p className="day">Thu</p>
                        <p className="date">5</p>
                    </Col>
                    <Col xs={2} >
                        <span className="registeredEventTag" ></span>
                        <p className="activeDay">Fri</p>
                        <p className="activeDate">6</p>
                    </Col>
                    <Col xs={2}>
                        <p className="day">Sat</p>
                        <p className="date">7</p>
                    </Col>
                </Row>
            </div>
          );
    }
}
 
export default WeeklyCalendar;