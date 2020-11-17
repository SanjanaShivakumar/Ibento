import React, { useState } from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import { CaretLeft } from 'react-bootstrap-icons';
import '../Styles/Calendar.css'

function CalendarUI() {
    
    return ( 
      <Container> 
          <Navbar className="welcome">
              <a href="/"><CaretLeft /></a>
              <h3 className="scheduleTitle">Your Schedule</h3>
          </Navbar>
          <h2 className="month"> November </h2>
                <Row className="justify-content-md-center">

                    <Col xs={2}>
                        <p className="day">Mon</p>
                        <p className="date">2</p>
                        <div className="temp">
                        <p className="mandatoryDate">9</p>
                        <div className="theEvent">
                            Art Exhibition
                        </div>
                        </div>
                        <p className="date">16</p>
                        <p className="date">23</p>
                        <div className="temp">
                        <p className="annualDate">30</p>
                        <div className="theEvent">
                            Creative Writing
                          </div>
                        </div>
                    </Col>
                    <Col xs={2}>
                        <p className="day">Tue</p>
                        <div className="temp">
                        <p className="annualDate">3</p>
                        <div className="theEvent">
                            REVA Fest
                          </div>
                        </div>
                        <p className="date">10</p>
                        <p className="date">17</p>
                        <div className="temp">
                        <p className="registeredDate">24</p>
                        <div className="theEvent">
                            Science Expo
                          </div>
                          </div>
                    </Col>
                    <Col xs={2}>
                        <p className="day">Wed</p>
                        <div className="temp">
                        <p className="featuredDate">4</p>
                        <div className="theEvent">
                            Fresher's Day
                          </div>
                          </div>
                        <p className="date">11</p>
                        <p className="date">18</p>
                        <div className="temp">
                        <p className="mandatoryDate">25</p>
                        <div className="theEvent">
                            Skill Development
                          </div>
                          </div>
                    </Col>
                    <Col  xs={2} >
                        <p className="day">Thu</p>
                        <p className="date">5</p>
                        <div className="temp">
                        <p className="registeredDate">12</p>
                        <div className="theEvent">
                            Film Festival 2020
                          </div>
                          </div>
                        <p className="date">19</p>
                        <div className="temp">
                        <p className="mandatoryDate">26</p>
                        <div className="theEvent">
                            Skill Development
                          </div>
                          </div>
                    </Col>
                    <Col xs={2} >
                        <p className="day">Fri</p>
                        <div className="temp">
                        <p className="registeredDate">6</p>
                        <div className="theEvent">
                            REVA Hack 
                          </div>
                          </div>
                        <p className="date">13</p>
                        <p className="date">20</p>
                        <p className="date">27</p>
                    </Col>
                    <Col  xs={2}>
                        <p className="day">Sat</p>
                        <p className="date">7</p>
                        <p className="date">14</p>
                        <div className="temp">
                        <p className="featuredDate">21</p>
                        <div className="theEvent">
                            Extra Classes
                          </div>
                          </div>
                        <p className="date">28</p>
                    </Col>
                </Row>
            </Container>
     );
}
 
export default CalendarUI;