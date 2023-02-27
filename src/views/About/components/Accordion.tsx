import React, { useState } from 'react'
import renderHTML from 'react-render-html'

export default function Accordion({ title, content }) {
  const [accordion, setAccordion] = useState(false)

  return (
    <div className="accordion">
      <div className="accordion-item">
        <div
          // className="accordion-title flex bg-gradient-to-r from-blue-zion to-blue-zion_cyan py-2 px-5 rounded-md text-white justify-between"
          className="accordion-title flex shadow-md text-black py-4 px-5 rounded-md justify-between"
          onClick={() => setAccordion(!accordion)}
          style={{
            cursor: 'pointer',
          }}
        >
          <div>
            <strong>{title}</strong>
          </div>
          <div>{accordion ? '-' : '+'}</div>
        </div>
        {accordion && <div className="accordion-content ml-2 md:ml-5">{renderHTML(content)}</div>}
      </div>
    </div>
  )
}
