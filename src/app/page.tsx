/* eslint-disable @next/next/no-img-element */
import { SignedIn, SignedOut } from "@clerk/nextjs"
import Link from "next/link"
import { db } from '~/server/db'

export const dynamic = "force-dynamic"

export default async function HomePage() {

  const images = await db.query.images.findMany({
    orderBy: (model, { asc }) => asc(model.name),
  })

  // console.log(images)

  return (
    <main className="">
      <div className="flex flex-col gap-4">

        <SignedOut>
          <div>
            You&apos;re signed out. Please sign in above.
          </div>
        </SignedOut>
        <SignedIn>
          {[...images, ...images, ...images].map((image, index) => (
            <div key={index} className="w-96 p-2">
              <img src={image.url} alt="image" className="w-full aspect-video" />
              <div>{image.name}</div>
            </div>
          ))}
        </SignedIn>
      </div>
    </main>
  )
}
