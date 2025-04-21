import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { slidesData } from './mockData';

const HeaderCrausel = () => {
  return (
    <div
      style={{
        padding: '20px',
        margin: '0 auto',
        maxWidth: '1200px',
      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        style={{ width: '100%', height: '400px' }}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            {slide.type === 'video' ? (
              <div
                style={{
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#000', // Fallback background color
                }}
              >
                <video
                  src={slide.src}
                  autoPlay
                  muted
                  loop
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
            ) : (
              <a href={slide.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </a>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeaderCrausel;