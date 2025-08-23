import React from 'react';
import BannerSlider from './BannerSlider';
import FeaturedGardeners from './FeaturedGardeners';
import TopTrendingTips from './TopTrendingTips';
import PlantCare from '../Pages/PlantCare';

const Home = () => {
    return (
        <div>
            <BannerSlider></BannerSlider>
            <FeaturedGardeners></FeaturedGardeners>
            <TopTrendingTips></TopTrendingTips>
            <PlantCare></PlantCare>
        </div>
    );
};

export default Home;