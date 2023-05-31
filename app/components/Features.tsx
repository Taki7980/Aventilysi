'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import FeaturesItems from './FeaturesItems';
import Container from './Container';
// import FeaturesBg from '@/public/images/features-bg.png'

// import FeaturesElement from '@/public/images/features-element.png'



interface FeaturesProps {
      subtitle: string;
}


export default function Features({ subtitle }: FeaturesProps) {

      const [tab, setTab] = useState<number>(1)

      return (

            <Container>
                        <div className="w-full mx-auto text-center pb-12 md:pb-16">
                              <h1 className="text-3xl md:text-3xl lg::text-4xl font-extrabold mb-4 drop-shadow-lg">Explore the solutions</h1>
                              <p className="text-sm lg:text-xl md:text-lg text-gray-900 text-center">{subtitle}</p>
                        </div>

                        <FeaturesItems />

                        <div className="lg:max-w-3xl md:w-full w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
                              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                                    <h3 className="lg:text-xl md:text-lg text-xl mb-3 font-semibold">Powerful suite of tools</h3>
                                    <p className="text-base text-gray-900">The unwavering dedication of Aventilysi towards providing dependable, cutting-edge products and comprehensive support at all stages instills in me a profound assurance to endorse the entirety of your product portfolio.</p>
                              </div>
                              {/* Tabs buttons */}
                              <div className="mb-8 md:mb-0 w-auto">
                                    <div
                                          className={`flex w-auto cursor-pointer items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-900 text-white border-transparent'}`}
                                          
                                          onClick={(e) => { e.preventDefault(); setTab(1); }}
                                    >
                                          <div>
                                                <div className="font-bold leading-snug tracking-tight mb-1">Control of Air</div>
                                                <div className="text-gray-600">Aventilysi stands as the foremost provider of air movement, control, and conditioning apparatus, encompassing an extensive range of fans.</div>
                                          </div>
                                          <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                                                <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                                                </svg>
                                          </div>
                                    </div>
                                    <div
                                          className={`flex w-auto cursor-pointer items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-900 text-white border-transparent'}`}
                                          
                                          onClick={(e) => { e.preventDefault(); setTab(2); }}
                                    >
                                          <div>
                                                <div className="font-bold leading-snug tracking-tight mb-1">Putting value in Air</div>
                                                <div className="text-gray-600">Our air conditioning products are designed to infuse value into the very air you breathe, ensuring comfort and enhancing your surroundings with optimal temperature control. Trust us to deliver an atmosphere that elevates your experience to new heights.</div>
                                          </div>
                                          <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                                                <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" fillRule="nonzero" />
                                                </svg>
                                          </div>
                                    </div>
                                    <div
                                          className={`flex w-auto cursor-pointer items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-900 text-white border-transparent'}`}
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
                                    </div>
                              </div>
                        </div>
                  

            </Container>





      )
}