import React from 'react';
import Masonry from 'react-masonry-css';

function MasonryGrid(props) {
  // if app is done fetching from api, run functionality
  if (props.isLoaded === true) {
    //declare var cards which will display the cards for the masonry grid
    const cards = props.items.cards.map((el, index) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      // declare var date of props.items.hero_text.date transposed into proper title format
      let date = new Date(el.date).toLocaleDateString('en-US', options).replace(',', '');
      return (
        <div key={'card' + index} id={new Date(el.date) } className='card'>
          <img src={el.image} alt={el.title} id='card-image' />
          <p id='card-date'>{date.toUpperCase()}</p>
          <a href='/#' id='card-title'>
            {el.title}
          </a>
          <p id='card-author'>
            Presented By{' '}
            <a href='/#' id='author-reroute'>
              {el.author.toUpperCase()}
            </a>
          </p>
        </div>
      );
    });

    return (
      <Masonry
        breakpointCols={{ 600: 1, 1200: 2, default: 3 }}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {cards.sort((a, b) => {
          return b.props.id - a.props.id;
        })}
      </Masonry>
    );
  } else {
    // if not loaded, return nothing
    return '';
  }
}

export default MasonryGrid;
