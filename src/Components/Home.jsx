import React from 'react';
import BannerSlider from './BannerSlider';
import FeaturedGardeners from './FeaturedGardeners';
import TopTrendingTips from './TopTrendingTips';
import PlantCare from '../Pages/PlantCare';
import PopularPlants from '../Pages/GardenTestimonials';

const Home = () => {
    return (
        <div>
            <BannerSlider></BannerSlider>
            <FeaturedGardeners></FeaturedGardeners>
            <TopTrendingTips></TopTrendingTips>
            <PlantCare></PlantCare>
            <PopularPlants></PopularPlants>
        </div>
    );
};

export default Home;