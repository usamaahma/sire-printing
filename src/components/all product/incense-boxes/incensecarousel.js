import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import { Card, Avatar } from 'antd';
import 'react-alice-carousel/lib/alice-carousel.css';


// Carousel items
const carouselItems = [
  {
    img: "../images/pillowreview.avif",
    name: "John Wick",
    occupation: "Broker – About Roatan Real Estate",
    review: "“Thrive exceeded our expectations in every way. They are honest, reliable, and handle all needs quickly. They deliver on their promises without any fuss.”"
  },
  {
    img: "../images/review.jpg",
    name: "ACP",
    occupation: "Practice Manager – PARC Urology",
    review: "“Thrive is incredible. They helped us grow our business so much that our biggest challenge now is managing the overflow. We're exactly where we wanted to be, thanks to them.”"
  },
  {
    img: "../images/pillowreview.avif",
    name: "NINI",
    occupation: "CEO – Accurate Leak and Line",
    review: "“Working with Thrive has been a pleasure. Their dedication, exceptional support, and attention to our needs make us excited for a long-term partnership.”"
  }
];

// Render carousel items
const renderItems = () => (
  carouselItems.map((item, index) => (
    <div className="pillowcarousel-item-content" key={index}>
      <Card className="pillowcarousel-card">
        <Avatar className='pillowcarousel-avatar-review' src={item.img} />
        <h5>{item.name}</h5>
        {/* <Rate disabled defaultValue={5} /> */}
        <p>{item.review}</p>
      </Card>
    </div>
  ))
);

const Incensecarousel = () => {
  const carouselRef = React.useRef(null);

  return (
    <div className="pillowcarousel-customerdiv">
      <div className="pillowcarousel-background">
        <div className="pillowcarousel-wrapper">
          <div className="pillowcarousel-container1">
            <AliceCarousel
              ref={carouselRef} 
              items={renderItems()}
              responsive={{
                0: { items: 1 },   // Show 1 item for small screens
                568: { items: 1 }, // Show 1 item for medium screens
                1024: { items: 1 }, // Show 1 item for large screens
              }}
              controlsStrategy="alternate"
              autoPlay
              autoPlayInterval={3000}
              infinite
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Incensecarousel;
