'use client';

import Link from 'next/link'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import Footer from './Footer';

const Sidebar = ({user}: SiderbarProps) => {

    const pathname = usePathname()

    return (
        <section className='sidebar'>
            <nav className='flex flex-col gap-4'>
                <Link 
                    href='/'
                    className='mb-12 cursor-pointer items-center gap-2'
                >
                    <Image 
                        src='/icons/logo.svg'
                        width={34}
                        height={34}
                        alt='Horizon Logo'
                        className='size-[34px] max-xl:size-14'
                    />
                    <h1 className='sidebar-logo'>
                        Horizon
                    </h1>
                </Link>

                {sidebarLinks.map((items) => {
                    
                    const isActive = pathname === items.route || pathname.startsWith(`${items.route}/`)
                    
                    return (
                        <Link
                            href={items.route}
                            key={items.label}
                            className={cn('sidebar-link', {'bg-bank-gradient':isActive} )}
                        >
                            <div className='relative size-6'>
                                <Image 
                                    src={items.imgURL}
                                    alt={items.label}
                                    fill
                                    className={cn({'brightness-[3] invert-0':isActive})}
                                />                                
                            </div>
                            <p className={cn('sidebar-label', {'!text-white': isActive})}>
                                {items.label}
                            </p>
                        </Link>
                    )
                })}

                USER

            </nav>

            <Footer user={user} />
        </section>
  )
}

export default Sidebar