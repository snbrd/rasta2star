import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Slider from 'react-slick'
import TeamBackground from '../../assets/team-paper.png'

export default function MultipleSlick({ items }: { items: any[] }) {
  const [sliders, setSliders] = useState([])
  useEffect(() => {
    setSliders(items)
  }, [items])
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className="text-black">
      <Slider {...settings}>
        {sliders.map((item) => {
          return (
            // <div
            //   key={item.name}
            //   data-aos="fade-up"
            //   data-aos-duration="1000"
            //   className="flex-imp py-16 flex-col w-full items-center content-center justify-center shadow-md bg-white"
            // >
            <div
              key={item.name}
              data-aos="fade-up"
              data-aos-duration="1000"
              className="flex-imp  flex-col w-full items-center content-center justify-center"
            >
              <div
                style={{
                  backgroundImage: `url(${TeamBackground})`,
                  backgroundSize: '100% 100%',
                  backgroundRepeat: 'no-repeat',
                }}
                className="md:py-12 md:px-8"
              >
                <LazyLoadImage src={item.avatar} alt="Logo" className="p-6 md:p-0 w-64 mx-auto" effect="blur" />
                {/* <h2 className="mt-8 font-bold text-xl">{item.name}</h2> */}
                <h3 className="mt-0 mb-4 md:mt-4 md:mb-0 text-xl font-bold text-black text-center">{item.position}</h3>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}
