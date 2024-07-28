/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { db } from '~/server/db'
import { getMyImages } from '~/server/db/queries'
import Image from 'next/image'
import Link from 'next/link'

export const dynamic = "force-dynamic"

const Images = async () => {

  const images = await getMyImages()

  return (
    <>
      <div className="flex flex-wrap gap-4 justify-center py-12">
        {
          images.map((image) => (
            <div key={image.id} className="">
              <div className="w-96 p-2 relative">
                <Link href={`/img/${image.id}`}>
                  <Image
                    src={image.url}
                    alt="image"
                    width={368}
                    height={207}
                    className="w-full aspect-video object-cover"
                  />
                </Link>
              </div>
              <div>{image.name}</div>
            </div>
          ))
        }
      </div>

    </>
  )
}

export default Images