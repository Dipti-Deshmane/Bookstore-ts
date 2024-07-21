import bookImg from './../Assets/bookImg.jpg';
import React from 'react';
import "./../Style/bookCard.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const BookCard = () => {
    return (
        <div className="bookCard">
            <div className="imgSection">
                <img src={bookImg} alt="Book Cover" />
            </div>
            <div className='bookInformation'>
            <div className='bookName'>Don't Make Me Think</div>
            <div className='bookAuthor'>by Steve Krug</div>
            <div className='bookRate'>
            <div className='bookRating'>4.5   <FontAwesomeIcon icon={faStar} className="starIcon" /></div>
            <div className='bookCount'>(20)</div>
            </div>
            <div className='bookPrice'>
                <div className='offerPrice'>Rs.1500</div>
                <div className='originalPrice'>Rs.2000</div>
            </div>
            </div>
        </div>
    );
}

export default BookCard;
