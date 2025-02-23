'use client'

import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/nextjs";

export default function Home() {
  const { isSignedIn, user, isLoaded } = useUser()

  return (
    <div className="min-h-screen flex-col gap-10 p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] w-screen bg-gray-200 text-black items-center justify-center flex">
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      {
        !isLoaded && <h1>Loading...</h1>
      }
      {
        isSignedIn && <div className="flex flex-col gap-3">
          <h1>full name: {user?.fullName}</h1>
          <h1>first Name: {user?.firstName}</h1>
          <h1>last Name: {user?.lastName}</h1>
          <h1>Email: {user?.primaryEmailAddress?.emailAddress}</h1>
          <h1>Number: {user?.primaryPhoneNumber?.phoneNumber}</h1>
          <h1>ImageURL: <a className="text-blue-600" href={user?.imageUrl} target="_blank" >Link</a></h1>
        </div>
      }
    </div>
  );
}
