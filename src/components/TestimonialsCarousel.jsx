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
      slidesPerView={1} 
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {testimonials.map((test, index) => (
        <SwiperSlide key={index}>
          <div className='group flex items-center bg-white border border-black/15 rounded-lg px-6 pt-13 pb-5 relative mt-10 hover:border-[#0065F4] transition duration-150'>
            <img className='w-20 h-20 rounded-full absolute -top-10 right-5 border border-black/15 group-hover:border-[#0065F4] transition duration-150' src={`./img/${test.gender === "male" ? "male" : "female"}comment.webp`} alt="#" />
            <div>
              <div className='flex items-center justify-between'>
                <h5 className='font-bold'>{test.name}</h5>
                <span className={clsx(test.status == 0 && 'bg-green-100 text-green-600 border-green-300', test.status == 1 && 'bg-sky-100 text-sky-600 border-sky-300', 'border rounded-xl text-xs px-2 py-0.5')}>{clsx(test.status == 0 && 'فارغ التحصیل', test.status == 1 && 'دانشجو')}</span>
              </div>

              <p className='mt-4 line-clamp-2 min-h-10 sm:min-h-12 text-gray-500 text-sm'>{test.text}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
