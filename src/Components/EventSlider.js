import React, { Component } from "react";
import arts from '../Styles/Events/arts.jpg';
import create from '../Styles/Events/create.jpg';
import film from '../Styles/Events/film.jpg';
import hack from '../Styles/Events/hack.jpg';
import sports from '../Styles/Events/sports.jpg';
import revaHack from '../Styles/Events/reva-hack.JPG';
import { Swiper } from 'swiper';
import '../Styles/EventSlider.css'

const images = [film, hack, sports]

export default class EventSlider extends Component{

    componentDidMount() {
        var swiper = new Swiper('.swiper-container', {
            loop: true,
            grabCursor: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
          });
    }

    render(){

        return(
            <div class="container" >

            {/* Here we use Swiper touch slider for a resposnsive,
            and for efficient native behaviour */}

              <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide" >
                  <a href="/revahack">
                  <img alt="" src={revaHack} />
                  </a>
                </div>
                <div class="swiper-slide" >
                    <a href="/filmfestival">
                  <img alt="" src={film} />
                  </a>
                </div>
                <div class="swiper-slide" >
                    <a href="/revahack">
                  <img alt="" src={create} />
                  </a>
                </div>
                <div class="swiper-slide" >
                    <a href="/revahack">
                  <img alt="" src={sports} />
                  </a>
                </div>
                <div class="swiper-slide" >
                    <a href="/revahack">
                  <img alt="" src={arts} />
                  </a>
                </div>
                <div class="swiper-slide" >
                    <a href="/revahack">
                  <img alt="" src={hack} />
                  </a>
                </div>
            </div>
            <div class="swiper-pagination"></div>
              </div>
            </div>
        
  );
}
}
