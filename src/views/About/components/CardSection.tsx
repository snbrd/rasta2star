import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'

export default function CardSection({ items }: { items: any[] }) {
  const [desc, setDesc] = useState(false)
  const showDesc = () => setDesc(!desc)

  return (
    <div className="w-full px-2 md:px-8 py-4 text-black flex-grow-1 bg-white z-index-88 mt-8 md:-mt-32 items-center content-center shadow-xl rounded-md md:max-w-screen-xl mx-auto">
      <div className="wrap flex flex-col md:grid md:grid-cols-3 ">
        {items.map((item, index) => {
          return (
            <div
              key={item.title}
              data-aos="fade-up" data-aos-duration="1000" data-aos-delay={100 * (index + 1)}
              className="card-item border-b-2 md:border-b-0 md:border-r-2 last:border-b-0 last:border-r-0 flex flex-col flex-grow-1 items-center align-center content-center border-gray-200 py-8 md:py-4 px-4 md:px-16"
            >
              <div className="icon text-center text-5xl text-green-rasta">{item.icon}</div>
              <div className="title text-xl mt-6">
                <h2 className="text-center md:text-left">{item.title}</h2>
              </div>
              <div className={`desc text-center mt-4 transition delay-700 duration-700 ${desc ? 'block' : 'hidden'}`}>
                <p>{item.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
      <div className="btn w-full mt-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
        {!desc && (
          <button type="button" className="flex flex-col items-center mx-auto" onClick={showDesc}>
            <span className="text block">Read All More</span>
            <span className="icon block">
              <FaIcons.FaCaretDown />
            </span>
          </button>
        )}
        {desc && (
          <button type="button" className="flex flex-col items-center mx-auto text-green-rasta" onClick={showDesc}>
            <span className="icon block">
              <FaIcons.FaCaretUp />
            </span>
            <span className="text block">Close</span>
          </button>
        )}
      </div>
    </div>
  )
}
