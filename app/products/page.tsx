'use clinet';

import Image from "next/image";
import Container from "../components/Container";
import Heading from "../components/Heading";





const page = () => {
      const items = [
            {
                  title: "Fans",
                  description: "Fans for every commercial, industrial and institutional application.",
                  imageUrl: 'https://content.greenheck.com/public/DAMProd/Website_Square_Desktop/10005/Fans_India.png',
                  websiteUrl: '/products/fans'
            },
            {
                  title: "Dampers",
                  description: "A line of damper products for fire and smoke control in life safety systems and for airflow control in commercial HVAC and industrial systems.",
                  imageUrl: 'https://content.greenheck.com/public/DAMProd/Website_Square_Desktop/10007/Dampers_Life-Safety_India.png',
                  websiteUrl: '/products/dampers',
            },
            {
                  title: "Rooftop solar system",
                  description: "Complete rootop solar solution provider",
                  imageUrl: 'https://docs.exideindustries.com/images/solar-sunday-banner-inside_dsk.jpg',
                  websiteUrl: '/products/solarsystem',
            },
      ]
      return (
            <div>
                  <Container>
                        <Heading title="Our Products" center subtitle="We provide the best products for you" />
                        <div className="max-w-xl pt-5 mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-center md:max-w-2xl lg:max-w-none justify-center">

                              {items.map((item) => (
                                    <div key={item.title} className="cardBg space-y-4 relative flex flex-col items-center p-6 bg-white rounded shadow-xl ">
                                          <Image src={item.imageUrl} className="w-auto h-auto p-1 -mt-1 mb-2" width={100} height={100} alt={"hh"} />
                                          <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">{item.title}</h4>
                                          <p className="text-gray-600 text-center">{item.description}</p>
                                          <a className="btn text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl w-full mb-4 sm:w-auto sm:mb-0" href={item.websiteUrl}>Click to know More!!</a>
                                    </div>
                              ))}

                        </div>
                  </Container>
            </div>
      )
}

export default page