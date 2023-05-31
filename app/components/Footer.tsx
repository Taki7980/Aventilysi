'use client';
import Link from "next/link";
import {  BsLinkedin,BsFacebook,} from "react-icons/bs";

export default function Footer() {
      const year = new Date().getFullYear();
      return (
            <footer>
                  <div className="max-w-6xl h-auto mx-auto px-4 py-4">

                        {/* Top area: Blocks */}


                        {/* Bottom area */}
                        <div className="lg:flex lg:items-center lg:justify-between lg:flex-row md:flex-row sm:flex-col sm:items-center sm:justify-between py-2">

                              {/* Social as */}
                              <div className="flex mb-4 md:order-1 md:ml-4 md:mb-0 text-2xl">
                                    <div className="ml-4">
                                          <Link href="https://www.linkedin.com/in/amitava-dutta-b3108873/" target="_blank" className="h-8 w-8 flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="LinkedIn">
                                                <BsLinkedin height={80} width={80}  />
                                          </Link>
                                    </div>
                                    <div className="ml-4">
                                          <Link href="https://www.facebook.com/people/Aventi-Lysi/100088696593366/?mibextid=ZbWKwL" target="_blank" className="h-8 w-8 flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                                                <BsFacebook height={80} width={80} />
                                          </Link>
                                    </div>
                              </div>

                              {/* Copyrights note */}
                              <div className="text-xl text-gray-900 mr-4">©{year} Aventilysi. All Rights Reserved.</div>

                        </div>

                  </div>
            </footer>
      )
}
