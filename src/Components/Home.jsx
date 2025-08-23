import React from 'react';
import BannerSlider from './BannerSlider';
import FeaturedGardeners from './FeaturedGardeners';
import TopTrendingTips from './TopTrendingTips';
import PlantCare from '../Pages/PlantCare';
import PopularPlants from '../Pages/GardenTestimonials';
import Heading from '../Pages/Heading';
import PlantCardWithTooltip from './PlantCardWithTooltip ';

const Home = () => {
    return (
        <div>
            <Heading></Heading>
            <BannerSlider></BannerSlider>
            <PlantCardWithTooltip></PlantCardWithTooltip>
            <FeaturedGardeners></FeaturedGardeners>
            <TopTrendingTips></TopTrendingTips>
            <PlantCare></PlantCare>
            <PopularPlants></PopularPlants>
        </div>
    );
};

export default Home;