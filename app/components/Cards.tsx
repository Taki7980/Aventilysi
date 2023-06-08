
import { Project } from '@/types/Project'
import Image from 'next/image'

import React from 'react'


interface Props {
      project: Project;
}

const Cards: React.FC<Props> = ({ project }) => {
      return (
            <>
                  <div className="rounded overflow-hidden shadow-lg cardBg">
                        <Image src={project.image} alt={project.name} width={400} height={200} className='m-auto object-cover rounded-lg my-4' />
                        <div className="px-6 py-4">
                              <div className="font-bold text-xl mb-2">{project.name}</div>
                              <p className="text-gray-700 text-base">
                                    {project.shortdescription}
                              </p>
                        </div>
                  </div>
            </>
      )
}
export default Cards;




