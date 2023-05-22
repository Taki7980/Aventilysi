"use client"
import { Project } from '@/types/Project'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'


interface Props {
      project: Project;
}

const Cards: React.FC<Props> = ({ project }) => {
      return (
            <div>
                  <div className="max-w-sm rounded overflow-hidden shadow-xl p-5">
                              <Image src={project.image} alt={project.name} width={400} height={200} className='m-auto object-cover rounded-lg my-4' />
                        <div className="px-6 py-4">
                              <div className="font-bold text-xl mb-2">{project.name}</div>
                              <div className="text-gray-700 text-base">
                                    {project.shortdescription}
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default Cards