import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as Io5Icons from 'react-icons/io5'
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
        text: 'devs@rasta.finance',
        link: 'mailto:devs@rasta.finance',
      },
    ],

    socialMedia: [
      {
        icon: <FaIcons.FaTwitter />,
        link: 'https://www.twitter.com/RastaFinance',
      },
      {
        icon: <FaIcons.FaTelegramPlane />,
        link: 'https://www.t.me/rastafinance',
      },
      {
        icon: <Io5Icons.IoLogoTiktok />,
        link: 'https://www.tiktok.com/@rasta.finance',
      },
      {
        icon: <FaIcons.FaMediumM />,
        link: 'https:///rastafinance.medium.com',
      },
      { icon: <FaIcons.FaDiscord />, link: 'https://discord.gg/JgMKca38' },
    ],
  }
  return (
    <div>
      <Heading />
      <Forms fields={fields} desc={heading.desc} contactInfo={contactInfo} />
    </div>
  )
}
