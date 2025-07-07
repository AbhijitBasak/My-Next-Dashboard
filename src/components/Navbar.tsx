"use client"
import React from 'react'

import {
  SignedIn,
  UserButton,
} from '@clerk/nextjs'

import { Moon, Sun, } from 'lucide-react'
import { Avatar } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from 'next-themes'
import { Button } from './ui/button'
import { SidebarTrigger } from './ui/sidebar'


export default function Navbar() {
  const { setTheme } = useTheme()
  return (
    <>
      <nav className='flex justify-between items-center p-4'>
        {/* collapse menu icon */}
        <SidebarTrigger />
        {/* collapse menu icon */}
        <div className='flex items-center gap-4'>
          <span>Search</span>
          <input type="text" className='bg-primary-foreground rounded-2xl px-4 py-2' />
        </div>
        <div className='flex gap-4'>

          {/* ThemeProvider */}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* ThemeProvider */}

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                {/* <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>AJ</AvatarFallback> */}

                <SignedIn>
                  <UserButton />
                </SignedIn>

              </Avatar>
            </DropdownMenuTrigger>
            {/* <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem><User /> Profile</DropdownMenuItem>
              <DropdownMenuItem><Settings /> Setting</DropdownMenuItem>

              <DropdownMenuItem>
                <SignedIn>
                  <DropdownMenuItem variant='destructive'><LogOut /> Logout</DropdownMenuItem>
                </SignedIn>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <SignedOut>
                  <SignInButton />
                  <SignUpButton />
                </SignedOut>
              </DropdownMenuItem>

            </DropdownMenuContent> */}
          </DropdownMenu>


        </div>
      </nav>
    </>
  )
}
