'use client';

import { Skeleton } from '@/components/ui/skeleton'
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/nextjs'
import React, { useEffect } from 'react'
import ThemeButton from './ThemeButton';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { defaultBtnCss } from './EditDrawer';

const Head = () => {
  const { isLoaded, user } = useUser()
  const navigate = useRouter()

  useEffect(() => {
    if(user?.id) {
      navigate.push(`/${user?.id}`)
    } else {
      navigate.push(`/`)
    }
  }, [user]);

  return (
    <div className='bg-background w-full h-[70px] flex justify-between items-center px-10 border-b'>
      <h1 className='text-foreground md:text-3xl text-xl font-custom'>KAAM PURA.</h1>
      <div className='flex gap-3 items-center'>
        <div>
          <SignedOut>
            <span className={cn(defaultBtnCss, 'bg-foreground text-background hover:bg-gray-300')} >
              <SignInButton />
            </span>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn></div>
        <ThemeButton />
      </div>

      {
        !isLoaded && <Skeleton className='h-[28px] w-[28px] bg-gray-300 rounded-full'></Skeleton>
      }
    </div>
  )
}

export default Head