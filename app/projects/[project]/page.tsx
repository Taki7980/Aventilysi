
import { getProject } from '../../../sanity/sanity-utils';
// @ts-ignore
import React from 'react'
import Image from 'next/image';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';


interface Props {
      params: { project: string }
}


const page = async ({ params }: Props) => {
      const slug = params.project;
      const project = await getProject(slug);

      return (
            <div >
                  <Container>
                        <div className="mt-6 lg:px-24 md:px-10 sm:px-5">
                              <Heading title={project.name} subtitle={project.url} />
                              <Image src={project.image} alt={project.name} width={600} height={400} className='object-cover rounded-lg my-4' />
                              <div className="content-body my-10 ">
                                    <PortableText value={project.content} />
                              </div>
                              <Link href={project.url} target='_blank' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Visit Site To know more</Link>
                        </div>
                  </Container>
            </div>
      )
}

export default page