import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../helper/Connector'

export default function SideNavigation({ sidenav, showSidenav }) {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const getPost = async () => {
      api
        .get(`/wp-json/wp/v2/categories`)
        .then((response) => {
          setCategories(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }

    getPost()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className={`w-full bg-black h-full top-0 absolute z-10 opacity-50 ${sidenav ? 'visible' : 'invisible'}`}>
        &nbsp;
      </div>
      <div
        className={`h-full bg-black fixed w-full md:w-1/6 z-10 p-6 top-0 transition duration-500 ${
          sidenav ? 'right-0' : '-right-full md:-right-1/4'
        }`}
      >
        <div className="h-full flex flex-col items-start justify-center space-y-10">
          <h2 className="text-white text-2xl font-bold">Categories</h2>
          <ul className="space-y-3 w-full md:w-1/2">
            {categories.map((category) => (
              <li key={category.id} className="list-none list-outside border-b-1 border-gray-400 pb-4">
                <Link to={`/category/${category.slug}`} onClick={showSidenav}>
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
