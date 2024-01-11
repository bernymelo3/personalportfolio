"use client"
import React from 'react';

interface Props {
    skillName: string;
    rating: number;
    index: number;
}

const SkillDataProvider = ({ skillName, rating, index }: Props) => {
    const renderStars = () => {
        return [...Array(5)].map((_, i) => (
            <span key={i} className={`star ${i < rating ? 'text-yellow-300' : 'text-gray-400'}`}>★</span>
        ));
    };

    return (
        <div className="skill-item flex items-center my-2">
            <h3 className="skill-name text-gray-400 mr-2">{skillName}</h3>
            <div className="skill-rating flex">
                {renderStars()}
            </div>
        </div>
    );
}

export default SkillDataProvider;
