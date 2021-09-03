import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function HeroCarousel(props) {
  // if app is done fetching from api, run functionality
  if (props.isLoaded === true) {
    // to avoid hardcoding the title, created two seperate vars that will display the title based on conditions
    // declare var title1 to seperate string onto seperate line if includes key word 'screening'
    const title1 = props.items.hero_text.title.includes('Screening:')
      //if true, retrieve word to appear on seperate line up to 11th index
      ? props.items.hero_text.title.slice(0, 11)
      //if it does not, then remain as an empty string
      : '';

    // declare var title2 if includes key word 'screening'
    const title2 = props.items.hero_text.title.includes('Screening:')
      //if true, slice the remaining string for the rest of the strings length after the 11th index
      ? props.items.hero_text.title.slice(11, props.items.hero_text.title.length)
      // else, return string in original state
      : props.items.hero_text.title;

    // declare var slides with value of props.items.hero_slides mapped accessing each seperate element and return seperate divs with images for carousel
    const slides = props.items.hero_slides.map((el, index) => {
      return (
        <div key={'slide' + index} className='slide-imgs'>
          <img src={el.image} alt={el.alt}></img>
        </div>
      );
    });

    // declare var options for options of display for date
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    // declare var date of props.items.hero_text.date transposed into proper title format
    const date = new Date(props.items.hero_text.date).toLocaleDateString('en-US', options);

    return (
      <div>
        <div className='carousel-text'>
          <p id='carousel-title1'>{title1}</p>
          <p id='carousel-title2'>{title2}</p>
          <p id='carousel-title-date'>{date}</p>
          <p id='carousel-subtitle'>{props.items.hero_text.subtitle}</p>
        </div>
        <div className="slider-container">
          <Carousel infiniteLoop autoPlay interval={5000} showThumbs={false} showStatus={false} showArrows={false} dynamicHeight={true}>
            {slides}
          </Carousel>
        </div>
        <br />
        <br />
      </div>
    );
  } else {
    return '';
  }
}

export default HeroCarousel;
