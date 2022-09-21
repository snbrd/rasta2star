import React, { useEffect, useState } from 'react'
import renderHTML from 'react-render-html'
import { Link } from 'react-router-dom'
import api from './helper/Connector'

import Hero from './components/Hero'
import SideNavigation from './components/SideNavigation'

export default function Blog() {
  const [blogs, setBlogs] = useState([])
  const [sidenav, setSidenav] = useState(false)

  const showSidenav = () => {
    setSidenav(!sidenav)
    // console.info(sidenav)
  }

  useEffect(() => {
    const getPosts = async () => {
      api.get('/wp-json/wp/v2/posts?_embed').then((response) => {
        setBlogs(response.data)
      })
    }

    getPosts()

    return () => {
      getPosts()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Hero />

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

      <div className="bg-white py-24 px-12 md:px-24 h-auto">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {blogs ? (
              blogs.map((blog) => (
                <div
                  className="rounded-lg overflow-hidden shadow-lg min-w-full text-black"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  key={blog.id}
                >
                  <figure>
                    <img src={blog._embedded['wp:featuredmedia'][0].source_url} alt="" />
                  </figure>

                  <div className="card-body p-2 flex flex-col justify-between">
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">
                        <Link to={`/education/${blog.slug}`}>{blog.title.rendered}</Link>
                      </div>
                      {renderHTML(blog.excerpt.rendered)}
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      <span className="inline-block bg-blue-zion_cyan rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                        {blog._embedded['wp:term'][0][0].name}
                      </span>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      <Link to={`/education/${blog.slug}`}>Read more</Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <>
                <h1>blog empty</h1>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
