import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Slider from 'react-slick'

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
            <div
              key={item.name}
              className="flex-imp py-16 flex-col w-full items-center content-center justify-center shadow-md bg-white"
            >
              <LazyLoadImage src={item.avatar} alt="Logo" className="w-1/2 mx-auto" effect="blur"/>
              <h2 className="mt-8 font-bold text-xl">{item.name}</h2>
              <h3 className="mt-4 text-md">{item.position}</h3>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}
