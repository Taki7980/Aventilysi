

import CardForInfo from "../components/CardForInfo";
import Container from "../components/Container";
import Heading from "../components/Heading";


export const aboutInfo=[
      {
            title:'Building value in air',
            description:'As an industry-leading manufacturer, our focus is to build value in air. This is more than a catchy play on words. It`s what we do. We offer the widest range of reliable air movement, control and conditioning equipment available. Then, we do everything to exceed your expectations for on-time delivery, easy installation, and performance.',
            url:'',

      },
      {
            title:'Overview',
            description:'Greenheck has come a long way since 1947 when it began business as a tiny sheet metal shop in Schofield, Wisconsin. Today, our flagship ventilation products are behind walls, in ductwork or on the roofs of non-residential buildings around the world.',
            url:'https://www.greenheck.com/about-us/overview',

      },
      {
            title:'Philosophy',
            description:'Greenheck founders, Bob and Bernie Greenheck, promoted a business philosophy based on two main concepts. These are, continuous improvement and the determination to be the easiest company to do business with. Today, that approach is captured in our motto “building value in air.” It`s our commitment to our customers and it remains the fundamental driving force behind our company`s success.',
            url:'https://www.greenheck.com/about-us/philosophy',

      },
      {
            title:'Indoor Air Quality',
            description:`Healthy buildings and indoor air quality begin with Greenheck's comprehensive line of air movement, control, distribution, and conditioning equipment. We are committed to supplying safe, healthy, comfortable air in commercial and institutional buildings, leveraging engineering excellence and innovation.`,
            url:'https://www.greenheck.com/about-us/indoor-air-quality',

      },
      {
            title:'Facilities',
            description:'Greenheck manufactures its products in one of eight facilities across the globe. We also have five strategically located U.S. distribution centers, so our products are available when you need them.',
            url:'https://www.greenheck.com/about-us/facilities',

      },
      {
            title:'Sustainability',
            description:'Greenheck has come a long way since 1947 when it began business as a tiny sheet metal shop in Schofield, Wisconsin. Today, our flagship ventilation products are behind walls, in ductwork or on the roofs of non-residential buildings around the world.',
            url:'https://www.greenheck.com/sustainability',

      },
      {
            title:'Compliance Policies',
            description:'Greenheck is dedicated to full and complete compliance with all U.S. Export laws and regulations relevant to the conduct of its business. Learn moreabout the practices Greenheck follows to ensure compliance with these laws.',
            url:'https://www.greenheck.com/about-us/compliance-policies',

      },
      {
            title:'Privacy Statement',
            description:'Greenheck has come a long way since 1947 when it began business as a tiny sheet metal shop in Schofield, Wisconsin. Today, our flagship ventilation products are behind walls, in ductwork or on the roofs of non-residential buildings around the world.',
            url:'https://www.greenheck.com/about-us/privacy-statement',
      }
]


const page = () => {
      return (
            <div className="pb-20">
                  <Container>
                        <Heading title="About Us" center subtitle="Learn more About Us"/>
                        {aboutInfo.map((item)=>(
                              <CardForInfo key={item.title} title={item.title} description={item.description} url={item.url}/>
                        ))}
                  </Container>
            </div>
      )
}

export default page