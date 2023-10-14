import { Project } from '../types/Project';
import { createClient,groq } from 'next-sanity';
import ClientConfig from './config/client-config';

export async function getProjects():Promise<Project[]> {
    
      return createClient(ClientConfig).fetch(
            groq`*[_type == "project"]{
                  _id,
                  _createdAt,
                  name,
                  shortdescription,
                  'slug' : slug.current,
                  content,
                  'image' : image.asset->url,
                  url,
            }`
      )
}


export async function getProject(slug:string):Promise<Project>{
      
      return createClient(ClientConfig).fetch(
            groq`*[_type == "project" && slug.current == $slug][0]{
                  _id,
                  _createdAt,
                  name,
                  shortdescription,
                  'slug' : slug.current,
                  content,
                  'image' : image.asset->url,
                  url,
            }`,
            {slug}
      )
}