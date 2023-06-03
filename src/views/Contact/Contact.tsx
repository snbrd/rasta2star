import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as Io5Icons from 'react-icons/io5'
// import AnimatedPage from 'components/AnimatedPage'
import Heading from './components/Heading'
import Forms from './components/Forms'

export default function Contact() {
  const heading = {
    title: 'Contact Us',
    desc: (
      <>
        Feel free to contact us any time
        <br />
        Let’s make some magic together!
      </>
    ),
  }
  const fields = [
    {
      name: 'name',
      type: 'text',
      placeholder: 'Name',
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Email',
    },
    {
      name: 'message',
      type: 'textarea',
      placeholder: 'Message',
    },
  ]
  const contactInfo = {
    title: 'Contact Info',
    detail: [
      {
        icon: <FaIcons.FaRegEnvelope />,
        text: 'devs@zionlabs.info',
        link: 'mailto:devs@zionlabs.info',
      },
    ],

    socialMedia: [
      {
        icon: <FaIcons.FaTwitter />,
        link: 'https://twitter.com/_Zion_Royal_?s=20',
      },
      {
        icon: <FaIcons.FaTelegramPlane />,
        link: 'https://www.t.me/zionroyal',
      },
      {
        icon: <Io5Icons.IoLogoTiktok />,
        link: 'https://www.tiktok.com/@zionlabs.info',
      },
      {
        icon: <FaIcons.FaMediumM />,
        link: 'https:///rastafinance.medium.com',
      },
      { icon: <FaIcons.FaInstagram />, link: 'https://instagram.com/zionlabs_info?igshid=YmMyMTA2M2Y=' },
    ],
  }
  return (
    // <AnimatedPage>
      <div>
        <Heading />
        <Forms fields={fields} desc={heading.desc} contactInfo={contactInfo} />
      </div>
    // </AnimatedPage>
  )
}
