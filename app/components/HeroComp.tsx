'use client';

import Image from "next/image";
import SplitType from "split-type";
import Container from "./Container";

interface HeroCompProps {
      title: string;
      subtitle: string;
      imageUrl: string;
}


const HeroComp: React.FC<HeroCompProps> = ({ title, subtitle, imageUrl, }) => {
      return (
            <>
                  <Container>
                        <div className="w-full flex items-center justify-center self-center px-1 pt-2">

                              {/* Hero content */}
                              <div className="animate-fade-in-down1 py-3 md:py-5 lg:py-8 w-full md:w-full lg:w-full px-1 md:px-1 lg:px-1">
                                    {/* Section header */}
                                    <div className="text-center pb-12 md:pb-16 w-full">
                                          <div className="w-full flex flex-col justify-center items-center md:flex-row lg:flex-row mb-4 space-y-1 lg:space-y-0 md:space-y-0 space-x-3" data-aos="zoom-y-out">
                                                <h1 className="lg:text-4xl md:text-3xl text-[34px] drop-shadow-lg font-extrabold ">{title.slice(0, 26)}</h1>
                                                <h1 className="lg:text-4xl md:text-3xl text-[33px] drop-shadow-lg font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-orange-600 to-slate-900">{title.slice(26,)}</h1>
                                          </div>
                                          <div className="w-full lg:w-full md:w-full mx-auto px-1">
                                                <p className=" drop-shadow-lg lg:text-xl md:text-base sm:text-sm text-[15px] font-thin text-gray-900 pb-8" data-aos="zoom-y-out" data-aos-delay="150">{subtitle}</p>
                                                <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                                                      <div>
                                                            <a className="btn text-white text-justify bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl w-full mb-4 sm:w-auto sm:mb-0" href="https://www.greenheck.com/en/home">Visit Official Page</a>
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
                                          className="rounded-xl shadow-2xl m-auto animate-fade-in-down"

                                    />

                              </div>

                        </div>
                  </Container>

            </>
      )
}

export default HeroComp