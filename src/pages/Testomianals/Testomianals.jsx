import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./Testomianals.css";
import { FaQuoteLeft } from "react-icons/fa";

const Testomianals = () => {
  const [reviews, setReviews] = useState([]);
  
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews?.map((review) => (
          <SwiperSlide className="tes-data">
             
      <p>

      </p>

            <FaQuoteLeft className="text-6xl" />
            <p>{review?.details}</p>
            <h3 className="text-4xl">{review?.name}</h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testomianals;
