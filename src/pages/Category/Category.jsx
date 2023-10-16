import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import slide1 from '../../assets/contact/home/slide1.jpg'
import slide2 from '../../assets/contact/home/slide2.jpg'
import slide3 from '../../assets/contact/home/slide3.jpg'
import slide4 from '../../assets/contact/home/slide4.jpg'
import slide5 from '../../assets/contact/home/slide5.jpg'



const Category = () => {
    return (
        <div className='p-20 m-auto'>
            <div className=' text-center'>
                <p className='mb-5 text-amber-400	'>---From 11:00am to 10:00pm---</p>
                <h1 className='text-4xl border-y-2 p-5 mb-10 w-80 m-auto'>ORDER ONLINE</h1>

            </div>



             <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h1 className='text-4xl uppercase text-center -mt-20 text-white w-full'>salads</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
            <h1 className='text-4xl uppercase text-center -mt-20 text-white w-full'>Soups</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="" />
            <h1 className='text-4xl uppercase text-center -mt-20 text-white w-full'>pizzas</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="" />
            <h1 className='text-4xl uppercase text-center -mt-20 text-white w-full'>desserts</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="" />
            <h1 className='text-4xl uppercase text-center -mt-20 text-white w-full'>desserts</h1>
        </SwiperSlide>

       
        
      </Swiper>
            
        </div>
    );
};

export default Category;