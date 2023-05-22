'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
// import FeaturesBg from '@/public/images/features-bg.png'

// import FeaturesElement from '@/public/images/features-element.png'

const FeaturesBg = 'https://greenheck-cms-prod.azureedge.net/atg-cms-prod/images/default-source/renderings/fans_22.png?sfvrsn=62a25b92_3'
const FeaturesElement = 'https://greenheck-cms-prod.azureedge.net/atg-cms-prod/images/default-source/renderings/make-up-air_open.png?sfvrsn=b53de973_12'
const FeaturesElement1 = 'https://greenheck-cms-prod.azureedge.net/atg-cms-prod/images/default-source/renderings/dedicated-outdoor-air-systems_1.png?sfvrsn=262c9e68_4'

interface FeaturesProps {
      subtitle: string;
}


export default function Features({ subtitle }: FeaturesProps) {

      const [tab, setTab] = useState<number>(1)

      const tabs = useRef<HTMLDivElement>(null)

      return (



            <div className="w-full mx-auto px-4 sm:px-6 h-full py-12">
                  <div className="mx-auto py-12 sm:px-6 max-w-5xl lg:py-16 lg:px-0">

                        {/* Section header */}
                        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                              <h1 className="text-4xl md:text-3xl sm:text-2xl font-extrabold mb-4">Explore the solutions</h1>
                              <p className="text-xl text-gray-600">{subtitle}</p>
                        </div>

                        {/* Section content */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 sm:block">

                              {/* Content */}
                              <div className=" max-w-xl md:max-w-none md:w-full sm:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
                                    <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                                          <h3 className="lg:text-xl md:text-lg sm:text-xl mb-3 font-semibold">Powerful suite of tools</h3>
                                          <p className="text-sm text-gray-600">Greenhecks commitment to delivering reliable industry leading products and support at every level gives me great confidence to promote all of your product offerings.</p>
                                    </div>
                                    {/* Tabs buttons */}
                                    <div className="mb-8 md:mb-0 w-auto">
                                          <a
                                                className={`flex w-auto items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                                                href="#0"
                                                onClick={(e) => { e.preventDefault(); setTab(1); }}
                                          >
                                                <div>
                                                      <div className="font-bold leading-snug tracking-tight mb-1">Fans</div>
                                                      <div className="text-gray-600">Greenheck is the leading supplier of air movement, control and conditioning equipment including fans.</div>
                                                </div>
                                                <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                                                      <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                                                      </svg>
                                                </div>
                                          </a>
                                          <a
                                                className={`flex w-auto items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                                                href="#0"
                                                onClick={(e) => { e.preventDefault(); setTab(2); }}
                                          >
                                                <div>
                                                      <div className="font-bold leading-snug tracking-tight mb-1">Make-up Air</div>
                                                      <div className="text-gray-600">Select from a variety of make-up air units for commercial, industrial and kitchen applications.</div>
                                                </div>
                                                <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                                                      <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" fillRule="nonzero" />
                                                      </svg>
                                                </div>
                                          </a>
                                          <a
                                                className={`flex w-auto items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                                                href="#0"
                                                onClick={(e) => { e.preventDefault(); setTab(3); }}
                                          >
                                                <div>
                                                      <div className="font-bold leading-snug tracking-tight mb-1">Dedicated Outdoor Air Systems</div>
                                                      <div className="text-gray-600">A dedicated outdoor air system (DOAS) is a unit supplying cooled, dehumidified outside air to a building in the summer and heated outside air in the winter. </div>
                                                </div>
                                                <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                                                      <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z" fill="#191919" fillRule="nonzero" />
                                                      </svg>
                                                </div>
                                          </a>
                                    </div>
                              </div>

                              {/* Tabs items */}
                              <div className="max-w-5xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 sm:col-span-4 mb-8 md:mb-0 md:order-1" data-aos="zoom-y-out" ref={tabs}>
                                    <div className="relative flex flex-col text-center lg:text-right">
                                          {/* Item 1 */}
                                          <Transition
                                                show={tab === 1}
                                                appear={true}
                                                className="w-full"
                                                enter="transition ease-in-out duration-700 transform order-first"
                                                enterFrom="opacity-0 translate-y-16"
                                                enterTo="opacity-100 translate-y-0"
                                                leave="transition ease-in-out duration-300 transform absolute"
                                                leaveFrom="opacity-100 translate-y-0"
                                                leaveTo="opacity-0 -translate-y-16"
                                          >
                                                <div className="relative inline-flex flex-row ">
                                                      <Image className="mx-auto  rounded transform animate-float" src={FeaturesBg} width={400} height={362} alt="Features bg" />
                                                </div>
                                          </Transition>
                                          {/* Item 2 */}
                                          <Transition
                                                show={tab === 2}
                                                appear={true}
                                                className="w-full"
                                                enter="transition ease-in-out duration-700 transform order-first"
                                                enterFrom="opacity-0 translate-y-16"
                                                enterTo="opacity-100 translate-y-0"
                                                leave="transition ease-in-out duration-300 transform absolute"
                                                leaveFrom="opacity-100 translate-y-0"
                                                leaveTo="opacity-0 -translate-y-16"
                                          >
                                                <div className="relative inline-flex flex-row ">
                                                      <Image className=" mx-auto  rounded transform animate-float" src={FeaturesElement} width={400} height={362} alt="Featuresbg" />
                                                </div>
                                          </Transition>
                                          {/* Item 3 */}
                                          <Transition
                                                show={tab === 3}
                                                appear={true}
                                                className="w-full"
                                                enter="transition ease-in-out duration-700 transform order-first"
                                                enterFrom="opacity-0 translate-y-16"
                                                enterTo="opacity-100 translate-y-0"
                                                leave="transition ease-in-out duration-300 transform absolute"
                                                leaveFrom="opacity-100 translate-y-0"
                                                leaveTo="opacity-0 -translate-y-16"
                                          >
                                                <div className="relative inline-flex flex-row">
                                                      <Image className=" mx-auto  rounded transform animate-float" src={FeaturesElement1} width={400} height={362} alt="Features bg" />
                                                </div>
                                          </Transition>
                                    </div>
                              </div>

                        </div>

                  </div>
            </div>

      )
}