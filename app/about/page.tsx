'use client';

import CardForInfo from "../components/CardForInfo";
import Container from "../components/Container";
import Heading from "../components/Heading";





const page = () => {
      const aboutInfo = [
            {
                  title: 'Building value in air',
                  description: 'The Refrigeration & Air-Conditioning Trades Association Ltd. (RATA) is one of the oldest associations working for the development of MSME in the field Air-Conditioning & Refrigeration industry in India. Established in the year 1949, the association brings together people from the entire industry and gives them a central forum to help them accomplish their common goal of making progress and achieving success.',


            },
            {
                  title: 'Philosophy',
                  description: 'To bring this vision to reality, RATA with its base of ethics and a strong code of conduct, actively and responsibly helps its members to grow and has also encouraged new entrepreneurs for the expansion and betterment of the industry.',


            },
            {
                  title: 'Commitment',
                  description: `The diverse membership of the organisation brings together different aspects, RATA believes in providing a platform to its members to showcase their offerings which in turn will promote internal as well as external trade. In this constantly evolving industry and changing market trends, the association contributes towards the promotion and an overall development of its members. RATA is an association of business owners in the HVACnR Trade and only companies in this field can become its members. The owners of these businesses can participate in various RATA activities. RATA represents business owners who are manufacturers both equipment and component, Dealers, Service providers, Traders, Importers, Wholesalers, Retailers and Consultants in the field of air conditioning, refrigeration and ventilation.`,


            },
            {
                  title: 'Goals and Objectives',
                  description: `To promote the organisation and achieve the optimum trade benefits.
                  To engage with the Central and State governments to ensure the trade gets its due importance and the MSMEs are supported to grow their business.
                  To unite trade members so they can collaborate learn from each other and grow their business.
                  To extend help to the members whenever need especially when it comes to unfair trade practises that affect their business.
                  To develop and knowledge banks that can help self sufficiency in local manufacturing and develop ideas and products that can be truly Made in India.`,
            },


      ]
      return (
            <div className="pb-20">
                  <Container>
                        <Heading title="About Us" center subtitle="Learn more About Us" />
                        {aboutInfo.map((item) => (
                              <CardForInfo key={item.title} imageUrl={item.title} title={item.title} description={item.description}  />
                        ))}
                  </Container>
            </div>
      )
}

export default page