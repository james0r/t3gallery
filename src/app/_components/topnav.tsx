import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'

function TopNav() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-between space-x-4 font-semibold">
        <li>
          <Link href="/">Gallery</Link>
        </li>
        <li>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </li>
      </ul>
    </nav>
  )
}

export default TopNav