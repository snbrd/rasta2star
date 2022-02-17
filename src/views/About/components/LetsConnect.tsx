import React from 'react'
import * as TiIcons from 'react-icons/ti'
import { Link } from 'react-router-dom'

type Props = {
  bg: any
  items: any
}
export default function LetsConnect({ bg, items }: Props) {
  return (
    <div
      className="w-full pt-64 pb-0 md:py-64 px-0 md:px-4 items-center flex"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
      }}
    >
      <div className="max-w-screen-xl mx-auto bg-white text-black px-6 flex md:px-48 py-16 flex-col md:flex-row mt-8 md:mt-32">
        <div className="rastaFinance flex flex-col flex-grow-1">
          <h2 className="text-2xl font-bold text-center md:text-left">{items.heading}</h2>
          <div className="list-content mt-4 md:mt-12 ">
            {items.listContent.map((item, index) => {
              return (
                <div className="flex flex-row item-list items-center  px-16 md:px-0" key={index}>
                  <span className="icon text-green-rasta text-2xl">
                    <TiIcons.TiTick />
                  </span>
                  <span className="icon  font-bold flex-grow-1">{item}</span>
                </div>
              )
            })}
          </div>
        </div>
        <div className="lets-connect flex flex-col w-full md:w-6/12 mt-8">
          <h3 className="text-xl  border-l-0 md:border-l-4 border-green-rasta pl-0 md:pl-8 font-bold text-center md:text-left">
            {items.subHeading}
          </h3>
          <div className="desc pl-0 md:pl-8 mt-8 text-center md:text-left">{items.textContent}</div>
          <div className="button flex flex-col md:flex-row pl-0 md:pl-8 mt-8 space-y-4 space-x-0 md:space-y-0 md:space-x-8">
            <a
              href={items.link.btn.joinNowLink}
              className="border-2 border-green-rasta items-center text-center px-8 py py-2 rounded-xl bg-gradient-to-r hover:border-white hover:text-white hover:from-green-rasta hover:to-yellow-rasta"
              target="_blank"
              rel="noreferrer"
            >
              <button type="button">Join Now</button>
            </a>

            <Link
              to={items.link.btn.farmRastaLink}
              className="border-2 border-green-rasta px-8 py-2 text-center rounded-xl bg-gradient-to-r hover:border-white hover:text-white hover:from-green-rasta hover:to-yellow-rasta"
            >
              <button type="button">Farm Rasta</button>
            </Link>
          </div>
          <div className="social-media  mx-auto md:mx-0 flex flex-row space-x-4 pl-0 items-center md:pl-8 mt-4">
            {items.link.social.map((item, index) => {
              return (
                <a href={item.link} key={index} target="_blank" rel="noreferrer">
                  <div className="border-2 rounded-full border-gray-500 text-gray-500 text-xl p-2 bg-gradient-to-r hover:border-white hover:text-white hover:from-green-rasta hover:to-yellow-rasta">
                    {item.icon}
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
