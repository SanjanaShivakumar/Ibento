import React, { Component } from 'react';
import WeeklyCalendar from './WeeklyCalendar'
import Categories from './Categories'
import '../Styles/Content.css';


class Content extends Component {
    render() { 
        return ( 
            <div class="container">
                
                {/* This container class was used to test, and render
                the weekly calendar and categories component */}

                <WeeklyCalendar />
                <Categories />
            </div>
         );
    }
}
 
export default Content;