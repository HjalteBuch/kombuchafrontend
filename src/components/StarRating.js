import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({metric, rating, setRating}) => {
    const [hover, setHover] = useState(null);

    const getStarClass = (starValue) => {
        return starValue <= (hover || rating) ? 'text-warning' : 'text-muted';
    };

    return (
        <div className="mb-3 align-items-center">
            <h2>{metric}:</h2>
            {[...Array(5)].map((_, index) => {
                const starValue = index + 1;

                return (
                    <FaStar
                        key={index}
                        className={getStarClass(starValue)}
                        onMouseEnter={() => setHover(starValue)}
                        onMouseLeave={() => setHover(null)}
                        onClick={() => setRating(starValue)}
                        style={{ cursor: 'pointer', fontSize: '40px' }}
                    />
                );
            })}
        </div>
    );
};

export default StarRating;
