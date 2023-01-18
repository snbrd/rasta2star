import React from 'react'
// import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as Io5Icons from 'react-icons/io5'
// import Logo from '../../assets/z1-rescaled.png'

export default function Footer() {
  // const textUnderLogo = ['@zionlabs_info', 'www.zionlabs.info']
  const textUnderLogo = ['Enjoy your Rasta experience on web 3']
  const navigation = [
    {
      title: 'Useful Links',
      item: [
        { label: 'About', path: '/about' },
        { label: 'Contact', path: '/contact' },
        { label: 'Zion Launchpad', path: 'https://zionlp.com' },
      ],
    },
    {
      title: 'Stake',
      item: [
        { label: 'Mr. Rasta', path: '/liquidity' },
        { label: 'Ms. Rasta', path: '/liquidity' },
      ],
    },
  ]
  const socialMedia = [
    { name: 'Twitter', icon: <FaIcons.FaTwitter />, link: 'https://www.twitter.com/zionlabs_info' },
    { name: 'Telegram', icon: <FaIcons.FaTelegramPlane />, link: 'https://t.me/zionlabscommunity' },
    { name: 'Tik Tok', icon: <Io5Icons.IoLogoTiktok />, link: 'https://www.tiktok.com/@zionlabs.info' },
    { name: 'Medium', icon: <FaIcons.FaMediumM />, link: 'https:///zionlabs.medium.com' },
    { name: 'Instagram', icon: <FaIcons.FaInstagram />, link: 'https://instagram.com/zionlabs_info' },
  ]
  function ShowLinks(props) {
    return props.items.map((item, index) => {
      return (
        <li key={index}>
          {item.path.includes('http') ? (
            <a href={item.path}>{item.label}</a>
          ) : (
            <Link to={item.path}>
              <span className="">{item.label}</span>
            </Link>
          )}
        </li>
      )
    })
  }
  return (
    <div className="w-full bg-black text-white py-10 md:py-12">
      <div className="mx-auto w-10/12">
        <div className="flex flex-col md:flex-row space-between border-b-0 pb-8 mb-4">
          <div className="flex-grow-1 flex flex-col">
            {/* <LazyLoadImage
              data-aos="fade-up"
              data-aos-duration="1000"
              src={Logo}
              alt="Logo"
              className="w-40 pl-6 md:pl-0"
              effect="blur"
            /> */}
            <span className='text-heading uppercase font-bold text-3xl'>Zion Labs</span>
            {textUnderLogo.map((item, index) => {
              return (
                <span data-aos="fade-up" data-aos-duration="1000" key={index} className="pl-6 md:pl-0">
                  {item}
                </span>
              )
            })}
          </div>
          {navigation.map((item, index) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="flex flex-col mr-4 last:mr-0 pl-6 md:pl-0 mt-4"
                key={index}
              >
                {item.title}
                <ul className="list-none mt-0 md:mt-6 text-yellow-rasta">
                  <ShowLinks items={item.item} />
                </ul>
              </div>
            )
          })}
        </div>

        <div className="bottom-footer flex space-between pl-6 md:pl-0 pr-6 md:pr-0 flex-col md:flex-row w-full space-between mx-auto">
          <div className="copyright flex-grow-1">
            <span>
              <a href="/" className="text-yellow-rasta">
                Zion Labs
              </a>{' '}
              2022 // All Rights Reserved
            </span>
          </div>
          <div className="social-media text-left md:text-right justify-items-end">
            <div className="md:flex md:flex-row md:space-x-4 gap-4 md:gap-0 mt-4">
              {socialMedia.map((item, index) => {
                return (
                  <a
                    className=" inline-block md:block mr-5 last:mr-0 md:mr-0 text-md w-50 h-50 rounded-full p-2 hover:bg-yellow-rasta hover:text-green-rasta"
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.icon}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
