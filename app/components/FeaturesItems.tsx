'use client';


import Image from 'next/image'

const FeaturesItems = () => {
      return (
            <div>
                  <div className="animate-fade-in-down1 grid lg:w-3/5 md:w-1/2 w-auto grid-cols-2 gap-8 mx-auto pb-10">


                        <div className=" p-2 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 bg-gradient-to-r from-[#D8B4FE] to-[#818CF8]">
                              <div className=" bg-white shadow-md item1 px-3 py-4 border-2 w-auto h-auto flex flex-col items-center justify-center rounded-lg space-y-3">
                                    <Image src={'https://cdn-icons-png.flaticon.com/512/10108/10108269.png'} height={80} width={80} alt={'he'} />
                                    <h2 className="font-extrabold text-xl md:text-2xl lg:text-2xl">Reliable</h2>
                              </div>

                        </div>




                        <div className=" p-2 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 bg-gradient-to-r from-[#D8B4FE] to-[#818CF8]">
                              <div className=" bg-white shadow-md item1 px-3 py-4 border-2 w-auto h-auto flex flex-col items-center justify-center rounded-lg space-y-3">
                                    <Image src={'https://cdn-icons-png.flaticon.com/512/5969/5969490.png'} height={80} width={80} alt={'he'} />
                                    <h2 className="font-extrabold text-xl md:text-2xl lg:text-2xl">Comfort</h2>
                              </div>

                        </div>




                        <div className=" p-2 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 bg-gradient-to-r from-[#D8B4FE] to-[#818CF8]">
                              <div className=" bg-white shadow-md item1 px-3 py-4 border-2 w-auto h-auto flex flex-col items-center justify-center rounded-lg space-y-3">
                                    <Image src={'https://cdn-icons-png.flaticon.com/512/6512/6512351.png'} height={80} width={80} alt={'he'} />
                                    <h2 className="font-extrabold text-xl md:text-2xl lg:text-2xl">Safety</h2>
                              </div>

                        </div>



                        <div className=" p-2 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 bg-gradient-to-r from-[#D8B4FE] to-[#818CF8]">
                              <div className=" bg-white shadow-md item1 px-3 py-4 border-2 w-auto h-auto flex flex-col items-center justify-center rounded-lg space-y-3">
                                    <Image src={'https://cdn-icons-png.flaticon.com/512/1838/1838305.png'} height={80} width={80} alt={'he'} />
                                    <h2 className="font-extrabold text-xl md:text-2xl lg:text-2xl">Efficiency</h2>
                              </div>

                        </div>
                  </div>
            </div>
      )
}

export default FeaturesItems