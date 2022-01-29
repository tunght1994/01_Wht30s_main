import React from 'react';
import './card.scss'
import { Favorite } from '@mui/icons-material'

const Card = ({ img }) => {
    return (
        <div className='card'>
            <img src={img} alt="" />
            <p>
                [what happen] How to create
            </p>
            <div className="card-price">
                <span>2,500 won</span>
                <div className="card-like">
                    <Favorite className='card-like-icon'/>
                    <span>236</span>
                </div>
            </div>
        </div>
    );
};

export default Card;
