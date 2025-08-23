import React from 'react';
import BannerSlider from './BannerSlider';
import FeaturedGardeners from './FeaturedGardeners';
import TopTrendingTips from './TopTrendingTips';

const Home = () => {
    return (
        <div>
            <BannerSlider></BannerSlider>
            <FeaturedGardeners></FeaturedGardeners>
            <TopTrendingTips></TopTrendingTips>
        </div>
    );
};

export default Home;