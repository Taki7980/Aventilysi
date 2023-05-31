

import { AnimationComponent } from "../components/AnimationComponent";
import Container from "../components/Container";
import Heading from "../components/Heading";
import { FcContacts } from 'react-icons/fc'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { FaRegAddressCard } from 'react-icons/fa'





const page = () => {
      return (
            <div>
                  <Container>
                        <Heading title="Contact Us" center subtitle="Want to know More!!" />
                        <div className="containerBox grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 py-8">
                              <div className="box1 px-8 space-y-6 flex flex-col justify-center items-center sm:space-y-7 md:space-y-5 lg:space-y-5 sm:mt-5 md:mt-5 lg:mt-0">
                                    <div className="namePart flex items-center justify-center gap-4">
                                          <FcContacts size={50} />
                                          <h1 className="text-3xl font-bold text-black">Amitava Dutta</h1>
                                    </div>
                                    <div className="contactInfoBox space-y-6 w-full">
                                          <div className="emailBox flex items-center justify-center gap-4">
                                                <MdOutlineAlternateEmail size={20} />
                                                <p className="text-xl font-bold text-black">sales@aventilysi.com / amitava.dutta.avl@gmail.com / amitava.dutta@aventilysi.com</p>
                                          </div>
                                          <div className="addressb flex items-center justify-center gap-4">
                                                <FaRegAddressCard size={20} />
                                                <p className="text-lg text-black font-medium">185, KONA PILOT BAGAN, KONA, HOWRAH-711 114</p>
                                          </div>
                                    </div>
                              </div>
                              <div className=" box2 rounded-lg">
                                    <AnimationComponent />
                              </div>
                        </div>     
                  </Container>
            </div>
      )
}

export default page