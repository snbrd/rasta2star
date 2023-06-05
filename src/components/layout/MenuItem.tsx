import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import * as IoIcons from 'react-icons/io'
import AnchorLink from 'react-anchor-link-smooth-scroll-v2'

export default function MenuItem({ menu, showSidebar }) {
  const location = useLocation()
  const [children, setChildren] = useState(false)
  const showChildren = (isParent) => {
    if (isParent) setChildren(!children)
    else showSidebar(false)
  }
  return (
    <li key={menu.label}>
      {menu.path.includes('http') ? (
        <a
          href={menu.path}
          className="flex flex-row space-x-4 items-center"
          onClick={() => showChildren(menu.parent)}
          target="_blank"
          rel="noreferrer nofollow"
        >
          {menu.icon}
          <span className="flex-grow-1 bg-gradient-to-br hover:from-newpurple-900 to-blue-zion_cyan px-2 py-1 rounded-sm w-full" style={{ fontSize: '16px' }}>
            {menu.label}
            <h1 style={{ fontSize: '13px', color: 'white' }}>{menu.sublabel}</h1>
          </span>
        </a>
      ) : (
        <Link to={menu.path} className="flex flex-row space-x-0 items-center" onClick={() => showChildren(menu.parent)}>
          {menu.icon}
          <span className="flex-grow-1  bg-gradient-to-br hover:from-newpurple-900 to-blue-zion_cyan px-2 py-1 rounded-sm w-full" style={{ fontSize: '16px' }}>
            {menu.label}
            <h1 style={{ fontSize: '13px' }}>{menu.sublabel}</h1>
          </span>
          {menu.parent && children && <IoIcons.IoIosArrowDropdown style={{ fontSize: '16px', width: 20 }} />}
          {menu.parent && !children && <IoIcons.IoIosArrowDropright style={{ fontSize: '16px', width: 20 }} />}
        </Link>
      )}
      {menu.child.length > 0 && children && (
        <ul className="flex flex-col items-start text-sm space-y-4 font-normal mt-4">
          {menu.child.map((i) => {
            return (
              <li key={i.label} className='bg-gradient-to-br hover:from-newpurple-900 to-blue-zion_cyan px-2 py-1 rounded-sm w-full'>
                {(() => {
                  if (i.blank) {
                    return (
                      <a href={i.path} onClick={showSidebar} target="_blank" rel="noreferrer">
                        <p className="ml-10 whitespace-nowrap overflow-hidden overflow-ellipsis" style={{ fontSize: '14px', marginLeft: '1rem' }}>
                          {i.label}
                        </p>
                      </a>
                    )
                  }
                  if (i.path.includes('http')) {
                    return (
                      <a href={i.path} onClick={showSidebar} target="_blank" rel="noreferrer nofollow">
                        <p className="ml-10 whitespace-nowrap overflow-hidden overflow-ellipsis" style={{ fontSize: '14px', marginLeft: '1rem' }}>
                          {i.label}
                        </p>
                      </a>
                    )
                  }

                  if (i.path.includes('/#')) {
                    if (location.pathname !== '/') {
                      return (
                        <a href={i.path} onClick={showSidebar} rel="noreferrer">
                          <p className="ml-10 whitespace-nowrap overflow-hidden overflow-ellipsis" style={{ fontSize: '14px', marginLeft: '1rem' }}>
                            {i.label}
                          </p>
                        </a>
                      )
                    }
                    return (
                      <AnchorLink href="#mintstation">
                        <p className="ml-10 whitespace-nowrap overflow-hidden overflow-ellipsis" style={{ fontSize: '14px', marginLeft: '1rem' }}>
                          {i.label}
                        </p>
                      </AnchorLink>
                      // <a href={i.path} onClick={showSidebar} target="_blank" rel="noreferrer">
                      //   <span className="ml-10 whitespace-nowrap overflow-hidden overflow-ellipsis" style={{ fontSize: '14px', marginLeft: '1rem' }}>
                      //     {i.label}
                      //   </span>
                      // </a>
                    )
                  }

                  return (
                    <Link to={i.path} onClick={showSidebar}>
                      <p className="ml-10 whitespace-nowrap overflow-hidden overflow-ellipsis" style={{ fontSize: '14px', marginLeft: '1rem' }}>
                        {i.label}
                      </p>
                    </Link>
                  )
                })()}
              </li>
            )
          })}
        </ul>
      )}
    </li>
  )
}
