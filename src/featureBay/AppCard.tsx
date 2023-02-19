import React from "react";
import { FaStar } from "react-icons/fa";

interface Props {
    title: string;
    description: string;
    imageUrl: string;
    videoUrl?: string;
    rating: number;
    downloads: number;
}

export function AppCard(props: Props) {
    const { title, description, imageUrl, videoUrl, rating, downloads } = props;

    return (
        <div className='app-card'>
            <div className='app-card-image'>
                {videoUrl ? (
                    <video src={videoUrl} autoPlay loop muted />
                ) : (
                    <img src={imageUrl} alt={title} />
                )}
            </div>
            <div className='app-card-content'>
                <h2>{title}</h2>
                <p>{description}</p>
                <div className='app-card-rating'>
                    <div className='rating-stars'>
                        {[...Array(5)].map((star, index) => {
                            const ratingValue = index + 1;
                            return (
                                <FaStar
                                    key={ratingValue}
                                    className='star'
                                    color={
                                        ratingValue <= rating
                                            ? "#ffc107"
                                            : "#e4e5e9"
                                    }
                                />
                            );
                        })}
                    </div>
                    <span className='rating-number'>{rating} stars</span>
                </div>
                <div className='app-card-downloads'>
                    <span>{downloads} downloads</span>
                </div>
                <button className='install-button'>Install App</button>
            </div>
        </div>
    );
}
