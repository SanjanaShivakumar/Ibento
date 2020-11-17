import React from "react";
import { Navbar, Button } from 'react-bootstrap'
import EventSlider from './EventSlider';
import Navigation from '../Components/Navigation'
import Content from '../Components/Content'
import "../Styles/Home.css"

const Home = () => {
  return (
    <div className="row no-gutters homePage">

      <Navbar className="welcome">
        Welcome, Sanjana
      </Navbar>

      {/* In this Home page, three other components are being rendered */}

      <Content />

      <EventSlider />
      <Navigation />
      <Button href="/addevent" variant="outline-primary" className="addEvent" size="lg">
        Add Event
      </Button>
      <br />
      <br /><br />
      <br /><br />
    </div>
  );
};

export default Home;