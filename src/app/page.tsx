import { SignedIn, SignedOut } from "@clerk/nextjs"
import Link from "next/link"
import Images from "~/app/_components/images"

export default async function HomePage() {



  // console.log(images)

  return (
    <main className="">
      <div className="flex flex-col gap-4">

        <SignedOut>
          <div className="text-2xl mx-auto max-w-max font-semibold">
            You&apos;re signed out. Please sign in above.
          </div>
        </SignedOut>
        <SignedIn>
          <Images />
        </SignedIn>
      </div>
    </main>
  )
}
