import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as IoIcons from 'react-icons/io'

export default function MenuItem({ menu, showSidebar }) {
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
          rel="noreferrer"
        >
          {menu.icon}
          <span className="flex-grow-1" style={{ fontSize: '18px' }}>
            {menu.label}
            <h1 style={{ fontSize: '13px', color: "white" }}>{menu.sublabel}</h1>
          </span>
        </a>
      ) : (
        <Link to={menu.path} className="flex flex-row space-x-4 items-center" onClick={() => showChildren(menu.parent)}>
          {menu.icon}
          <span className="flex-grow-1" style={{ fontSize: '18px' }}>
            {menu.label}
            <h1 style={{ fontSize: '13px' }}>{menu.sublabel}</h1>
          </span>
          {menu.parent && children && <IoIcons.IoIosArrowDropdown />}
          {menu.parent && !children && <IoIcons.IoIosArrowDropright />}
        </Link>
      )}
      {menu.child.length > 0 && children && (
        <ul className="flex flex-col items-start text-sm space-y-4 font-normal mt-4">
          {menu.child.map((i) => {
            return (
              <li key={i.label}>
                {(() => {
                  if (i.blank) {
                    return <a
                      href={i.path}
                      onClick={showSidebar}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="ml-10" style={{ fontSize: '18px', marginLeft: '3rem' }}>
                        {i.label}
                      </span>
                    </a>;
                  }
                  if (i.path.includes('http')) {
                    return <a
                      href={i.path}
                      onClick={showSidebar}
                    >
                      <span className="ml-10" style={{ fontSize: '18px', marginLeft: '3rem' }}>
                        {i.label}
                      </span>
                    </a>
                  }

                  return <Link to={i.path} onClick={showSidebar}>
                    <span className="ml-10" style={{ fontSize: '18px', marginLeft: '3rem' }}>
                      {i.label}
                    </span>
                  </Link>
                })()}
              </li>
            )
          })}
        </ul>
      )
      }
    </li >
  )
}
