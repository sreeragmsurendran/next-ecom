import { APP_NAME } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Search from './search'
import Menu from './menu'
import { Button } from '@/components/ui/button'
import { MenuIcon } from 'lucide-react'
import data from '@/lib/data'


const Header = () => {
  return (
    <header className='bg-black text-white'>
        <div className='px-2 py-2'>
            <div className='flex item-center justify-between'>
                <div className='flex items-center'>
                    <Link href="/">
                    <p className='text-lg'>NexTcom</p>
                    {/* <Image
                    src='/icons/log.svg'
                    
                    width={80}
                    height={80}
                    alt={`${APP_NAME}-logo`}
                    /> */}
                    </Link>
                </div>
                <div className='md:block flex-1 max-w-xl flex item-center'>
                    <Search/>
                </div>
                <Menu/>
            </div>
            <div className=' md:hidden py-2 flex item-center'>
                <Search />
            </div>
        </div>
        <div className='flex items-center px-3 mb-[1px] bg-gray-800'>
            <Button
            variant={'ghost'}
            className='header-button flex items-center gap-1 text-base [&_svg]:size-6'>
                <MenuIcon/>
                All
            </Button>
            <div className='flex items-center flex-wrap gap-3 overflow-hidden max-h-[42px]'>
                {
                    data.headerMenus.map((menu)=>(
                        <Link href={menu.href}
                        key={menu.href}
                        className='header-button !p2'
                        >
                            {menu.name}
                        </Link>
                    ))
                }
            </div>
        </div>
    </header>
  )
}

export default Header