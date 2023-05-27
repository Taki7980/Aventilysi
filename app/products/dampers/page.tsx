'use clinet';

import Container from '@/app/components/Container'
import Heading from '@/app/components/Heading';
import Image from 'next/image';
import React from 'react'

const page = () => {
      const items = [
            {
                  title: 'Life Safety Dampers',
                  description: 'Life safety dampers protect openings in walls, ceilings, floors and/or partitions to prevent the spread of fire and/or smoke. These products are tested and classified in accordance with UL.',
                  imageUrl: 'https://content.greenheck.com/public/DAMProd/Website_Square_Desktop/10007/Dampers_Life-Safety_India.png',
                  websiteUrl: 'https://www.greenheck.in/en/products/air-control/dampers/life-safety-dampers'
            },
            {
                  title: 'Control Dampers',
                  description: 'Control dampers regulate the flow of air in an HVAC system for intake, exhaust, or mixed air applications.',
                  imageUrl: 'https://content.greenheck.com/public/DAMProd/Website_Square_Desktop/10001/Dampers_Volume-Control_India.png',
                  websiteUrl: 'https://www.greenheck.in/en/products/air-control/dampers/control-dampers'
            },
            {
                  title: 'Manual Balancing Dampers',
                  description: 'Balancing dampers are control dampers that balance the flow of air in an HVAC system. The intended applications for these dampers do not include a positive shutoff or for automatic control. The MBD series are shipped manual hand quadrants that can lock in place.',
                  imageUrl: 'https://content.greenheck.com/public/DAMProd/Website_Square_Desktop/10006/Dampers_Manual-Balancing_India.png',
                  websiteUrl: 'https://www.greenheck.in/en/products/air-control/dampers/manual-balancing-dampers'
            },
            {
                  title: 'Tunnel Dampers',
                  description: 'A tunnel transit damper is a heavy-duty flanged air damper designed to meet the rigorous environment of a transit tunnel. It is qualified to withstand the stresses and pressures of such environments. It meets the requirements of NFPA-130, NFPA-502, UL 555S, and BS476 standards.',
                  imageUrl: 'https://content.greenheck.com/public/DAMProd/Website_Square_Desktop/10002/HTD_Open.png',
                  websiteUrl: 'https://www.greenheck.in/en/products/air-control/dampers/tunnel-dampers'
            },
      ]
      return (

            <div>
                  <Container>
                        <Heading title='Dampers' center subtitle='A line of damper products for fire and smoke control in life safety systems and for airflow control in commercial HVAC and industrial systems.' />
                        <div className="max-w-xl pt-5 mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-center md:max-w-2xl lg:max-w-none justify-center">

                              {items.map((item) => (
                                    <div key={item.title} className="space-y-4 relative flex flex-col items-center p-6 bg-white rounded shadow-xl ">
                                          <Image src={item.imageUrl} className="w-auto h-auto p-1 -mt-1 mb-2" width={100} height={100} alt={"hh"} />
                                          <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">{item.title}</h4>
                                          <p className="text-gray-600 text-center">{item.description}</p>
                                          <a target='_blank' className="btn text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl w-full mb-4 sm:w-auto sm:mb-0" href={item.websiteUrl}>Want to know more? Visit Official Page</a>
                                    </div>
                              ))}

                        </div>
                  </Container>
            </div>
      )
}

export default page