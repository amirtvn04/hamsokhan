import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules"
import { testimonials } from '../data/testimonials';
import clsx from 'clsx';

export default function TestimonialsCarousel() {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={16}
      slidesPerView={3}
    >
      {testimonials.map((test, index) => (
        <SwiperSlide key={index}>
          <div className='flex items-center bg-white border border-black/15 rounded-lg px-6 pt-15 pb-5 relative mt-11.5 hover:border-[#0065F4] transition duration-200'>
            <img className='w-23 h-23 rounded-full absolute -top-11.5 right-4' src={`./img/${test.gender === "male" ? "male" : "female"}comment.webp`} alt="#" />
            <div>
              <div className='flex items-center justify-between'>
                <h5 className='text-lg font-bold'>{test.name}</h5>
                <span className={clsx(test.status == 0 && 'bg-green-100 text-green-600 border-green-300', test.status == 1 && 'bg-sky-100 text-sky-600 border-sky-300', 'border rounded-xl text-sm px-2 py-0.5')}>{clsx(test.status == 0 && 'فارغ التحصیل', test.status == 1 && 'دانشجو')}</span>
              </div>
              
              <p className='mt-4 line-clamp-2 min-h-12 text-gray-500'>{test.text}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
