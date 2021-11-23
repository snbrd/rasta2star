import React from 'react'

export default function CardButton({ items }: { items: any[] }) {
  const convertHtml = (str) => {
    const strArr = str.split('<br>')
    return (
      <>
        {strArr[0]}
        <br />
        {strArr[1]}
      </>
    )
  }
  return (
    <div className="max-w-screen-xl mx-auto w-full card-wrapper grid grid-cols-2 md:grid-cols-6 gap-3 text-green-rasta">
      {items.map((item) => {
        return (
          <a
            href={item.link}
            key={item.label}
            className="px-8  md:flex text-center shadow-box items-center
            content-center py-8 justify-center font-bold rounded-xl bg-gradient-to-r hover:text-white hover:from-yellow-rasta hover:to-green-rasta"
            target='_blank'
            rel="noreferrer"
          >
            {convertHtml(item.label)}
          </a>
        )
      })}
    </div>
  )
}
