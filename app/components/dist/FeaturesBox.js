"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
function FeaturesBlocks() {
    var items = [
        {
            title: "Air Movement",
            description: "Moving air for indoor comfort, safety, health, and productivity as well as material handling.",
            imageUrl: 'https://greenheck-cms-prod.azureedge.net/atg-cms-prod/images/default-source/icons/air-movement.png?sfvrsn=49e4866d_4',
            websiteUrl: 'https://www.greenheck.com/products/air-movement'
        },
        {
            title: "Air Control",
            description: "Controlling airflow and saving lives.",
            imageUrl: 'https://greenheck-cms-prod.azureedge.net/atg-cms-prod/images/default-source/icons/air-control.png?sfvrsn=3c9b3c85_4',
            websiteUrl: 'https://www.greenheck.com/products/air-control'
        },
        {
            title: "Air Distribution",
            description: "Functional and aesthetic products to maximize occupant comfort.",
            imageUrl: 'https://greenheck-cms-prod.azureedge.net/atg-cms-prod/images/default-source/icons/air-distribution.png?sfvrsn=cb6f3698_4',
            websiteUrl: 'https://www.greenheck.com/products/air-distribution'
        },
        {
            title: "Air Conditioning",
            description: "Heating, cooling and dehumidifying air for comfort and energy savings.",
            imageUrl: 'https://greenheck-cms-prod.azureedge.net/atg-cms-prod/images/default-source/icons/air-conditioning.png?sfvrsn=1ccb0dd0_4',
            websiteUrl: 'https://www.greenheck.com/products/air-conditioning'
        },
        {
            title: "Kitchen ventilation System",
            description: "Manufacturing single-source complete commercial kitchen solutions since 1975.",
            imageUrl: 'https://greenheck-cms-prod.azureedge.net/atg-cms-prod/images/default-source/icons/kitchen-ventilation-systems.png?sfvrsn=9aea5fdf_4',
            websiteUrl: 'https://www.greenheck.com/products/kitchen-ventilation-systems'
        },
        {
            title: "Controls",
            description: "Optimizing operation while maximizing energy efficiency.",
            imageUrl: 'https://greenheck-cms-prod.azureedge.net/atg-cms-prod/images/default-source/icons/controls.png?sfvrsn=e6c9991e_4',
            websiteUrl: 'https://www.greenheck.com/products/controls'
        },
    ];
    return (React.createElement("div", { className: "flex flex-row lg:max-w-6xl md:max-w-3xl sm:max-w-xl my-auto mx-auto px-4 sm:px-6 lg:py-0 md:py-5 sm:py-20" },
        React.createElement("div", { className: "py-12 md:py-20" },
            React.createElement("div", { className: "relative max-w-6xl mx-auto px-4 sm:px-6 space-y-2" },
                React.createElement("h2", { className: "text-3xl text-center font-bold mb-4" }, "Other Features"),
                React.createElement("p", { className: "text-xl text-gray-900" }, "As the worldwide leader in manufacturing high quality air movement, control and conditioning products, Greenheck offers the most comprehensive line of ventilation equipment available including fans, dampers, louvers, kitchen ventilation systems, energy recovery, and make-up air units.")),
            React.createElement("div", { className: "max-w-xl  pt-5 mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none" }, items.map(function (item) { return (React.createElement("div", { key: item.title, className: "cardBg space-y-4 relative flex flex-col items-center p-6 bg-white rounded shadow-xl " },
                React.createElement(image_1["default"], { src: item.imageUrl, className: "w-16 h-16 p-1 -mt-1 mb-2", width: 50, height: 50, alt: "hh" }),
                React.createElement("h4", { className: "text-xl font-bold leading-snug tracking-tight mb-1" }, item.title),
                React.createElement("p", { className: "text-gray-600 text-center" }, item.description),
                React.createElement("a", { className: "btn text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl w-full mb-4 sm:w-auto sm:mb-0", href: item.websiteUrl }, "Visit Official Page"))); })))));
}
exports["default"] = FeaturesBlocks;
