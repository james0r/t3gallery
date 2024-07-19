/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { db } from '~/server/db'

const mockUrls = [
  'https://utfs.io/f/9e0b6d89-b464-402b-8738-6f90a5ef51ce-r7zltl.jpg',
  'https://utfs.io/f/bb95e7c4-f0b7-4540-9261-d5b50d745e86-uozway.jpg',
  'https://utfs.io/f/62597e4b-99c4-4e2f-a680-1d9abf6e2794-13yh46.jpg',
  'https://utfs.io/f/b56ac61e-a049-4590-a222-d9f1c1aa815a-73pfnp.jpg'
]

const mockImages = mockUrls.map((url, index) => ({
  id: index,
  url
}))

export default async function HomePage() {

  const posts = await db.query.posts.findMany()

  console.log(posts)

  return (
    <main className="">
      {
        posts.map(post => (
          <div key={post.id} className="w-96 p-2">
            <span>Name:&nbsp;</span>
            <span>{post.name}</span>
          </div>
        ))
      }
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={index} className="w-96 p-2">
            <img src={image.url} alt="image" className="w-full aspect-video" />
          </div>
        ))}
      </div>
    </main>
  )
}
