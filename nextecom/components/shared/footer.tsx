import React from 'react'
import { Button } from '../ui/button'
import { ChevronUp } from 'lucide-react'
import Link from 'next/link'
import { APP_NAME } from '@/lib/constants'

const Footer = () => {
  return (
    <footer className='bg-black text-white underline-link'>
        <div className='w-full'>
            <Button 
            variant={'ghost'}
            className='bg-gray-800 w-full rounded-none'
            >
                <ChevronUp className='mr-2 h-4 w-4'/>
                Back to top
            </Button>
        </div>
        <div className='p-4'>
            <div className='flex justify-center center gap-3 text-sm'>
                <Link href={'/page/condition-of-use'} >Condition of Use</Link>
                <Link href={'/page/privacy-policy'} >Privacy Notice</Link>
                <Link href={'/page/help'} >Help</Link>
            </div>
            <div className='flex justify-center text-sm'>
                <p>2000- 2024 ,{APP_NAME}</p>
            </div>
            <div className='mt-8 flex justify-center text-sm text-gray-400'>
                123 Address
            </div>
        </div>
    </footer>
  )
}

export default Footer