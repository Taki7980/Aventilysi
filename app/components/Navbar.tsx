"use client";


import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link';
import Logo from '../../anim/logo.png'

const navigation = [
   { name: 'Home', href: '/', current: false },
   { name: 'About Us', href: '/about', current: false },
   { name: 'Projects', href: '/projects', current: false },
   { name: 'Contact Us', href: '/contact', current: false },
   { name: 'Products', href: '/products', current: false },
]

function classNames(...classes: string[]) {
   return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
   return (
      <>
         <Disclosure as="nav">
            {({ open }) => (
               <>
                  <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
                     <div className="relative flex h-16 items-center justify-around">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                           {/* Mobile menu button*/}
                           <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                              <span className="sr-only">Open main menu</span>
                              {open ? (
                                 <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                              ) : (
                                 <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                              )}
                           </Disclosure.Button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                           <div className="flex flex-shrink-0 items-center">
                              <Image
                                 className="block h-8 w-auto lg:hidden text-black"
                                 src={Logo}
                                 alt="Your Company"
                                 height={20}
                                 width={20}
                                 quality={100}
                              />
                              <Image
                                 className="hidden h-8 w-auto lg:block text-black"
                                 src={Logo}
                                 alt="Your Company"
                                 height={20}
                                 width={20}
                                 quality={100}
                              />
                           </div>
                           <div className="hidden xl:block sm:ml-6 sm:block">
                              <div className="flex flex-row space-x-4">
                                 {navigation.map((item) => (
                                    <Link
                                       key={item.name}
                                       href={item.href}
                                       className={classNames(
                                          item.current ? 'bg-gray-900 text-black' : 'text-black  hover:bg-gray-700 hover:text-white',
                                          'rounded-md px-3 py-2 text-lg font-thin'
                                       )}
                                       aria-current={item.current ? 'page' : undefined}
                                    >
                                       {item.name}
                                    </Link>
                                 ))}
                              </div>
                           </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                           {/* Profile dropdown */}
                           <Menu as="div" className="relative ml-3">
                              <Link href="/admin">
                                 <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <Image
                                       className="h-8 w-8 rounded-full"
                                       src="https://www.rataindia.com/images/uploads/1622804521_large.jpg"
                                       alt="hello"
                                       height={20}
                                       width={20}
                                       quality={100}
                                    />
                                 </Menu.Button>
                              </Link>
                           </Menu>
                        </div>
                     </div>
                  </div>

                  <Disclosure.Panel className="sm:hidden">
                     <div className="space-y-1 px-2 pb-3 pt-2">
                        {navigation.map((item) => (
                           <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className={classNames(
                                 item.current ? 'bg-gray-900 text-black' : 'text-black hover:bg-gray-700 hover:text-white',
                                 'block rounded-md px-3 py-2 text-lg font-thin'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                           >
                              {item.name}
                           </Disclosure.Button>
                        ))}
                     </div>
                  </Disclosure.Panel>
               </>
            )}
         </Disclosure>
      </>
   )
}
