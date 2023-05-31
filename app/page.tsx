'use client';

import Features from "./components/Features";
import FeaturesBlocks from "./components/FeaturesBox";
import HeroComp from "./components/HeroComp";
import Testimonials from "./components/Testimonial";



const page = () => {
      return (
            <>
                  <HeroComp title="FRESH ENGINEERING. ELEVATED VENTILATION" subtitle="Our Dedicated Outdoor Air Systems provide a complete supply of fresh outdoor air, along with the added benefit of energy recovery for enhanced efficiency." imageUrl="https://img.freepik.com/free-vector/illustrated-people-renovating-living-room_23-2148677770.jpg?w=740&t=st=1684505222~exp=1684505822~hmac=14a3276c3a5314de6ac25d9d5932c9ec4a222af9efabae547f6a048e01f3c0b3" />
                  <Features subtitle="Our extensive range of products provides dependable air comfort, ensuring the safety and energy efficiency of building owners and occupants on a global scale" />
                  <FeaturesBlocks />
                  {/* <Testimonials userImage="https://img.freepik.com/free-vector/illustrated-people-renovating-living-room_23-2148677770.jpg?w=740&t=st=1684505222~exp=1684505822~hmac=14a3276c3a5314de6ac25d9d5932c9ec4a222af9efabae547f6a048e01f3c0b3" userName="Nirjhar" userReview="this is great" /> */}
            </>
      )
}

export default page
export const dynamic = 'force-dynamic'