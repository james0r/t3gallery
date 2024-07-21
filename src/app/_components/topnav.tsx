"use client"

import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { UploadButton } from '~/utils/uploadThing'

function TopNav() {
  const router = useRouter()


  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-between space-x-4 font-semibold">
        <li>
          <Link href="/">Gallery</Link>
        </li>
        <li className="flex flex-row items-center">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UploadButton 
              endpoint="imageUploader"
              onClientUploadComplete={() => {
                router.refresh()
              }}
               />
            <UserButton />
          </SignedIn>
        </li>
      </ul>
    </nav>
  )
}

export default TopNav