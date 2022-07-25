import React from 'react'
import Slide from '../../../components/SlickSlide/SlickSlide'

export default function TeamSlide({ items }: { items: any }) {
  return (
    // <div className="mx-auto" style={{ width: 'calc(100% - 70px)' }}>
    //   <Slide items={items} />
    // </div>
    <div className="mx-auto" style={{ width: 'calc(100% - 35%)' }}>
      <Slide items={items} />
    </div>
  )
}
