
import { useQuery } from '@tanstack/react-query';
import { Navigation } from 'swiper';
// import Swiper from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import SectionTitle from '../Shared/SectionTitle';

// import { Navigation } from "swiper";
const Testimonials = () => {
      const { data: testimonials = [] } = useQuery({
            queryKey: ['testimonials'],
            queryFn: async () => {
                  const res = await fetch('/testimonmials.json');
                  return res.json()
            }
      })

      console.log(testimonials);
      return (
            <div>
                 <SectionTitle title={'Client Testimonials'} subTitle={'What Out Client Say'}></SectionTitle>
                  <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        {
                              testimonials.map(testimonial => <SwiperSlide key={testimonial.id}>
                                    
                                    <div className=' flex flex-col gap-10 justify-center items-center px-10 md:px-24 bg-slate-200 py-16'>
                                          <img className=' rounded-md' src={testimonial.image} alt="" />
                                          <FaQuoteLeft size={100}></FaQuoteLeft>
                                          <p>{testimonial.testimonial}</p>

                                    </div>
                              </SwiperSlide>)
                        }
                        {/*  */}

                  </Swiper>
            </div>
      );
};

export default Testimonials;