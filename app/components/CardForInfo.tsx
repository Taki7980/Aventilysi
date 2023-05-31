'use client';


import Link from "next/link";
import Container from "./Container";


interface CardForInfoProps {
      title: string;
      description: string;
      url?: string;
      imageUrl?: string;
}

const CardForInfo: React.FC<CardForInfoProps> = ({ title, description, url }) => {
      return (
            <div>
                  
                        <div className="card w-full bg-base-100 my-10">
                              <div className="card-body space-y-2">
                                    <h2 className="card-title text-center font-semibold text-3xl">{title}</h2>
                                    <div className="text-gray-900">{description}</div>
                                    <div className="card-actions justify-end">
                                          {url && (

                                                <Link href={url} target='_blank' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Visit Site To know more</Link>

                                          )}
                                    </div>
                              </div>
                        </div>
                  
            </div>
      )
}

export default CardForInfo