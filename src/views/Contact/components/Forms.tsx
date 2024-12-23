import React, { useState } from 'react'
import axios from 'axios'
import MrLionFull from "../../../assets/lion-mr-full.png"
import MsLionFull from "../../../assets/lion-ms-full.png"

type Props = {
  fields: any[]
  contactInfo: any
  desc: any
}

export default function Form({ fields, contactInfo, desc }: Props) {

  const [isSuccess, setIsSuccess] = useState(false);

  function handleSubmit(e) {
    e.preventDefault()
    const chatId = "-624206229";
    const { name, email, message } = e.target.elements;
    const text = `Email:${email.value}\n\n
                Name: ${name.value}\n\n
                Message: ${message.value}`

    const url = `https://api.telegram.org/bot2106092499:AAGctmQaa68yFC-i--XyEhzonDiQRiLSSec/sendMessage?chat_id=${chatId}&text=${text}&parse_mode=HTML`
    axios.get(url).then(resp => {
      if (resp.status === 200) {
        setIsSuccess(true);
        name.value = ''
        email.value = ''
        message.value = ''
      }
    })

  }

  return (
    <div className="bg-white pb-16 md:pb-32 flex px-8 md:px-0">
      <div data-aos="fade-left" data-aos-duration="1000" className="img-right absolute hidden md:block right-0 top-1/4">
        <img src={MrLionFull} alt="Full body mr lion" />
      </div>
      <div data-aos="fade-right" data-aos-duration="1000" className="img-left absolute hidden md:block left-0 top-1/4">
        <img src={MsLionFull} alt="Full body ms lion" />
      </div>
      <div className="max-w-screen-xl mx-auto bg-white shadow-box flex flex-col md:flex-row  -mt-16 md:-mt-64 w-full md:px-0">
        <div className="forms flex items-center  px-8 md:px-32 py-6 md:py-16 mt-4 w-full md:w-3/5">
          <form action="" className="flex-grow-1 " id="contactForm" onSubmit={handleSubmit}>
            <div className="fields space-y-12">
              {fields.map((item, index) => {
                return (
                  <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay={100 * index} className="w-full" key={index}>
                    <input
                      type={item.type}
                      placeholder={item.placeholder}
                      name={item.name}
                      className="w-full py-4 px-2
                        border-b-1 border-gray-400 text-black"
                    />
                  </div>
                )
              })}
            </div>
            {isSuccess &&
              <div className="message mt-8 text-black border-green-rasta py-2 border-2 px-2">Your message has been sent.</div>
            }
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="button w-full flex items-center mt-24">
              <button
                type="submit"
                className="bg-gradient-to-r from-yellow-rasta to-green-rasta py-2 rounded-xl mx-auto w-full md:w-2/4"
              >
                SEND IT
              </button>
            </div>
          </form>
        </div>
        <div className="contact-info bg-gray-rasta flex-grow-1 py-16 px-4 md:px-16 flex flex-col">
          <h2 data-aos="fade-in" data-aos-duration="1000" className="text-3xl font-bold">{contactInfo.title}</h2>

          <p data-aos="fade-in" data-aos-duration="1000" className="mt-8 leading-loose">{desc}</p>
          <div data-aos="fade-in" data-aos-duration="1000" className="detail flex flex-col space-y-16 mt-4 md:mt-8">
            {contactInfo.detail.map((item, index) => {
              return (
                <div className="" key={index}>
                  <a href={item.link} className="flex flex-row flex-grow-1 items-center space-x-4">
                    <span className="text-2xl">{item.icon}</span>
                    <span>{item.text}</span>
                  </a>
                </div>
              )
            })}
          </div>
          <div data-aos="fade-in" data-aos-duration="1000" className="social mt-4 md:mt-24 flex flex-row space-x-4">
            {contactInfo.socialMedia.map((item, index) => {
              return (
                <a
                  href={item.link}
                  key={index}
                  className="rounded-full p-2 border-1 border-white bg-gradient-to-r hover:border-gray-rasta hover:from-yellow-rasta hover:to-green-rasta"
                >
                  {item.icon}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
