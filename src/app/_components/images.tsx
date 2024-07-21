/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { db } from '~/server/db'

export const dynamic = "force-dynamic"

const Images = async () => {
  const images = await db.query.images.findMany({
    orderBy: (model, { asc }) => asc(model.name),
  })

  return (
    <>
      <div className="flex flex-wrap">
        {
          images.map((image) => (
            <div key={image.id} className="w-96 p-2">
              <img src={image.url} alt="image" className="w-full aspect-video" />
              <div>{image.name}</div>
            </div>
          ))
        }
      </div>

    </>
  )
}

export default Images