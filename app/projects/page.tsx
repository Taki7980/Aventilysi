
import { getProjects } from '../../sanity/sanity-utils'
import Link from 'next/link';
import Container from '../components/Container';
import Heading from '../components/Heading';
import Cards from '../components/Cards';




export default async function Home() {
      const projects = await getProjects();
      return (
            <div>
                  <Container>
                        <Heading title='Projects from GreenHeck' subtitle='Building Value In Air' />
                        <Container>
                              <div className="mt-6 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 ">
                                    {projects.map((project) => (
                                          <Link href={`/projects/${project.slug}`} key={project._id}>
                                                <Cards project={project} />
                                          </Link>
                                    ))}
                              </div>
                        </Container>
                  </Container>
            </div>
      )
}