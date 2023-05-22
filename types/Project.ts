
import { PortableTextBlock } from "sanity";

export type Project = {
      _id: string;
      _createdAt: Date;
      name: string,
      shortdescription:string,
      slug: String,
      content: PortableTextBlock[],
      image: string,
      url: string,
}