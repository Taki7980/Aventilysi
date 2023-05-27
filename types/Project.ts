
import { PortableTextBlock } from "sanity";

export type Project = {
      map(arg0: (project: Project) => import("react").JSX.Element): import("react").ReactNode | import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
      _id: string;
      _createdAt: Date;
      name: string,
      shortdescription:string,
      slug: String,
      content: PortableTextBlock[],
      image: string,
      url: string,
}