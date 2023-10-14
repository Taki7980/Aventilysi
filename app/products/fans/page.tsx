"use clinet";

import Image from "next/image";
import Container from "../../components/Container";
import Heading from "../../components/Heading";

const page = () => {
      const items = [
            {
                  title: "Vane Axial Fans",
                  description:
                        "Vane axial inline fans are the most efficient axial design. Precision machining creates a tight tip clearance between blade tips and the fan housing. Integral straightening vanes redirect swirling airflow after the impeller into a linear flow at the discharge, further adding increased efficiency.",
                  imageUrl:
                        "https://content.greenheck.com/public/DAMProd/Website_Square_Desktop/10001/Fans_Vane-Axial_India.png",
                  websiteUrl:
                        "https://www.greenheck.in/en/products/air-movement/fans/vane-axial-fans",
            },
            {
                  title: "Inline Fans",
                  description:
                        "inline fan models meet a wide range of supply or exhaust applications in commercial and industrial facilities. There are models available for clean air, sound sensitive and heavy-duty industrial applications.",
                  imageUrl:
                        "https://content.greenheck.com/public/DAMProd/Website_Square_Desktop/10001/Fans_Centrifugal-Inline_India.png",
                  websiteUrl:
                        "https://www.greenheck.in/en/products/air-movement/fans/inline-fans",
            },
            {
                  title: "Jet fans",
                  description:
                        "Cars parked in an underground parking structure emit carbon monoxide (CO), smoke and other noxious fumes, which are hazardous. Ductless designs use transfer fans to dilute and remove contaminants and control the smoke.",
                  imageUrl:
                        "https://content.greenheck.com/public/DAMProd/Website_Square_Desktop/10001/Fans_Jet_India.png",
                  websiteUrl:
                        "https://www.greenheck.in/en/products/air-movement/fans/jet-fans",
            },
            {
                  title: "Centrifugal Fans",
                  description:
                        "Backward inclined double-width centrifugal fans offer a wide performance range and are suitable for clean air, supply or exhaust applications.",
                  imageUrl:
                        "https://content.greenheck.com/public/DAMProd/Website_Square_Desktop/10012/Fans_Centrifugal_India.png",
                  websiteUrl:
                        "https://www.greenheck.in/en/products/air-movement/fans/centrifugal-fans",
            },
            {
                  title: "Plenum Fans",
                  description:
                        "Excellent performance and reliability are typical of plenum fans. These fans work best in commercial or industrial air handling settings and pressurized plenum applications.",
                  imageUrl:
                        "https://content.greenheck.com/public/DAMProd/Website_Square_Desktop/10001/Fans_Plenum_India.png",
                  websiteUrl:
                        "https://www.greenheck.in/en/products/air-movement/fans/plenum-fans",
            },
            {
                  title: "High Volume Low Speed Fans",
                  description:
                        "Large diameter ceiling fans provide airflow for effective air circulation and enhanced comfort in commercial and industrial spaces. With a variety of benefits including personnel cooling, humidity control, and heat distribution, these fans are an ideal selection for many applications.",
                  imageUrl:
                        "https://content.greenheck.com/public/DAMProd/Website_Square_Desktop/10013/Fans_HVLS_India.png",
                  websiteUrl:
                        "https://www.greenheck.in/en/products/air-movement/fans/high-volume-low-speed-hvls",
            },
            {
                  title: "Fume Exhaust Fans",
                  description:
                        "The fume exhaust fan design allows for safe exhaust and dispersion of contaminated air in commercial, institutional or industrial applications.",
                  imageUrl:
                        "https://content.greenheck.com/public/DAMProd/Website_Square_Desktop/10014/FJ-M-315_Nozzle.png",
                  websiteUrl:
                        "https://www.greenheck.in/en/products/air-movement/fans/fume-exhaust-fans",
            },
            {
                  title: "Root Mounted Fans",
                  description:
                        "Fan and ventilator products for commercial, institutional, and industrial roof installations, offering the industry’s best performance and durability for clean air applications.",
                  imageUrl:
                        "https://content.greenheck.com/public/DAMProd/Website_Square_Desktop/10015/RV-D-315-3kW.png",
                  websiteUrl:
                        "https://www.greenheck.in/en/products/air-movement/fans/roof-mounted-fans",
            },
            {
                  title: "WallMounted Fans",
                  description:
                        "Wall-mounted propeller style fans are available for exhaust and supply applications.",
                  imageUrl:
                        "https://content.greenheck.com/public/DAMProd/Website_Square_Desktop/10001/AER-M-800_Supply_Front.png",
                  websiteUrl:
                        "https://www.greenheck.in/en/products/air-movement/fans/wall-mounted-fans",
            },
      ];
      return (
            <>
                  <Container>
                        <Heading
                              title="Fans"
                              center
                              subtitle="Fans for every commercial, industrial and institutional application."
                        />
                        <div className="max-w-xl py-7 mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-center md:max-w-2xl lg:max-w-none justify-center">
                              {items.map((item) => (
                                    <div
                                          key={item.title}
                                          className=" dark:bg-gray-800 dark:border-gray-700 bg-gradient-to-r from-[#67f936] to-[#4f60f2] space-y-4 relative flex flex-col items-center p-2 bg-white rounded shadow-2xl "
                                    >
                                          <div className=" bg-white shadow-md item1 px-3 py-4 border-2 w-auto h-auto flex flex-col items-center justify-center rounded-lg space-y-3">
                                                <Image
                                                      src={item.imageUrl}
                                                      className="w-auto h-auto p-1 -mt-1 mb-2"
                                                      width={100}
                                                      height={100}
                                                      alt={"hh"}
                                                />
                                                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                                                      {item.title}
                                                </h4>
                                                <p className="text-gray-600 text-center">{item.description}</p>
                                                <a
                                                      target="_blank"
                                                      className="btn text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl w-full mb-4 sm:w-auto sm:mb-0"
                                                      href={item.websiteUrl}
                                                >
                                                      Want to know more? Visit Official Page
                                                </a>
                                          </div>
                                    </div>
                              ))}
                        </div>
                  </Container>
            </>
      );
};

export default page;
