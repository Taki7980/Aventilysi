'use client';

import Image from "next/image";

interface HeroCompProps {
      title: string;
      subtitle: string;
      imageUrl: string;
      bgColor: string;
}

const HeroComp: React.FC<HeroCompProps> = ({ title, subtitle, imageUrl, bgColor }) => {
      return (
            <>

                  <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-5">

                        {/* Hero content */}
                        <div className="lg:pt-32 sm:pt-7  pb-12 md:pt-40 md:pb-20 ">

                              {/* Section header */}
                              <div className="text-center pb-12 md:pb-16 ">
                                    <h1 className="lg:text-5xl md:text-4xl sm:text-2xl  font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">{title} <span className="bg-clip-text lg:text-5xl md:text-4xl sm:text-2xl text-transparent bg-gradient-to-r from-blue-500 to-teal-400">VENTILATION</span></h1>
                                    <div className="max-w-3xl mx-auto">
                                          <p className="lg:text-xl md:text-base sm:text-sm text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">{subtitle}</p>
                                          <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                                                <div>
                                                      <a className="btn text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl w-full mb-4 sm:w-auto sm:mb-0" href="https://www.greenheck.com/en/home">Visit Official Page</a>
                                                </div>
                                          </div>
                                    </div>
                              </div>

                              {/* Hero image */}
                              <Image
                                    src={imageUrl}
                                    width={768}
                                    height={432}
                                    alt={title}
                                    className="rounded-xl shadow-2xl m-auto"/>

                        </div>

                  </div>
            </>
      )
}

export default HeroComp