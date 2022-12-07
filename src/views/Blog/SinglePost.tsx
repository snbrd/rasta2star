import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import renderHTML from 'react-render-html'
import api from './helper/Connector'

import './style/index.css'

import SideNavigation from './components/SideNavigation'

export default function SinglePost() {
  const { id: slug }: { id: string } = useParams()
  const [sidenav, setSidenav] = useState(false)

  const [post, setPost] = useState([])

  const showSidenav = () => {
    setSidenav(!sidenav)
  }

  useEffect(() => {
    const getPost = async () => {
      api
        .get(`/wp-json/wp/v2/posts?_embed&slug=${slug}`)
        .then((response) => {
          setPost(response.data)
        })
        .catch((error) => {
          console.error(error)
        })
    }

    getPost()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className="flex items-center justify-center align-middle">
        <button
          className={`-right-6 p-5 h-auto bg-blue-zion_cyan w-auto fixed bottom-1/2 z-20 transform -rotate-90 rounded-lg `}
          type="button"
          onClick={showSidenav}
        >
          {sidenav ? 'Close' : 'Expand'}
        </button>

        <SideNavigation sidenav={sidenav} showSidenav={showSidenav} />
      </div>

      {post.map((pos) => (
        <div key={pos.id}>
          <div
            className="h-screen flex items-center px-10 md:px-40"
            style={{
              backgroundColor: '#00000059',
              backgroundImage: `url(${pos._embedded['wp:featuredmedia'][0].source_url})`,
              backgroundSize: 'cover',
              backgroundBlendMode: 'multiply',
              backgroundAttachment: 'fixed',
            }}
          >
            <h1 className="text-4xl font-bold" data-aos="fade-right" data-aos-duration="1000">
              {pos.title.rendered}
            </h1>
          </div>

          <div className="bg-white text-black w-full py-20">
            <div className="container mx-auto px-10 md:px-10 lg:px-0">
              <div className="flex flex-col space-y-8" data-aos="fade-up" data-aos-duration="1000">
                {renderHTML(pos.content.rendered)}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
