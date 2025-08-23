import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const BannerSlider = () => {
  const events = [
    {
      id: 1,
      title: "Balcony Gardening Workshop",
      description: "Learn how to create a beautiful garden even in small spaces.",
      image: "https://i.ibb.co.com/N8s3gSx/pests.jpg",
      button: "Join Now",
    },
    {
      id: 2,
      title: "Composting",
      description: "Discover how to turn kitchen waste into natural fertilizer.",
      image: "https://i.ibb.co.com/q3B50SRM/indoor-garden.jpg",
      button: "Learn More",
    },
    {
      id: 3,
      title: "Community Gardening Meetup",
      description: "Connect with local gardeners and share your experiences",
      image: "https://i.ibb.co.com/pjzPsLDf/Bid5-min.png",
      button: "See Details",
    },
  ];

  return (
    <div className="w-full h-[500px] border rounded-2xl overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        speed={800}
        className="h-[500px]"
      >
        {events.map((event) => (
          <SwiperSlide key={event.id}>
            <div
              className="h-[500px] flex flex-col items-center justify-center text-white text-center px-6"
              style={{
                backgroundImage: `url(${event.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-black/40 p-3 rounded-lg">
                {event.title}
              </h2>
              <p className="text-lg md:text-xl mb-6 bg-black/40 p-3 rounded-lg max-w-2xl mx-auto">
                {event.description}
              </p>
              <button className="px-6 py-2 bg-green-600 hover:bg-green-800 rounded-lg shadow-lg">
                {event.button}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
