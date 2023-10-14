"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("@headlessui/react");
var outline_1 = require("@heroicons/react/24/outline");
var image_1 = require("next/image");
var link_1 = require("next/link");
var logo_png_1 = require("../../anim/logo.png");
var navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'About Us', href: '/about', current: false },
    { name: 'Projects', href: '/projects', current: false },
    { name: 'Contact Us', href: '/contact', current: false },
    { name: 'Products', href: '/products', current: false },
];
function classNames() {
    var classes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classes[_i] = arguments[_i];
    }
    return classes.filter(Boolean).join(' ');
}
function Navbar() {
    return (React.createElement(React.Fragment, null,
        React.createElement(react_1.Disclosure, { as: "nav" }, function (_a) {
            var open = _a.open;
            return (React.createElement(React.Fragment, null,
                React.createElement("div", { className: "mx-auto max-w-7xl px-6 sm:px-6 lg:px-8" },
                    React.createElement("div", { className: "relative flex h-16 items-center justify-around" },
                        React.createElement("div", { className: "absolute inset-y-0 left-0 flex items-center sm:hidden" },
                            React.createElement(react_1.Disclosure.Button, { className: "inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" },
                                React.createElement("span", { className: "sr-only" }, "Open main menu"),
                                open ? (React.createElement(outline_1.XMarkIcon, { className: "block h-6 w-6", "aria-hidden": "true" })) : (React.createElement(outline_1.Bars3Icon, { className: "block h-6 w-6", "aria-hidden": "true" })))),
                        React.createElement("div", { className: "flex flex-1 items-center justify-center sm:items-stretch sm:justify-start" },
                            React.createElement("div", { className: "flex flex-shrink-0 items-center" },
                                React.createElement(image_1["default"], { className: "block h-8 w-auto lg:hidden text-black", src: logo_png_1["default"], alt: "Your Company", height: 20, width: 20, quality: 100 }),
                                React.createElement(image_1["default"], { className: "hidden h-8 w-auto lg:block text-black", src: logo_png_1["default"], alt: "Your Company", height: 20, width: 20, quality: 100 })),
                            React.createElement("div", { className: "hidden xl:block sm:ml-6 sm:block" },
                                React.createElement("div", { className: "flex flex-row space-x-4" }, navigation.map(function (item) { return (React.createElement(link_1["default"], { key: item.name, href: item.href, className: classNames(item.current ? 'bg-gray-900 text-black' : 'text-black  hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-lg font-thin'), "aria-current": item.current ? 'page' : undefined }, item.name)); })))),
                        React.createElement("div", { className: "absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0" },
                            React.createElement(react_1.Menu, { as: "div", className: "relative ml-3" },
                                React.createElement(link_1["default"], { href: "/admin" },
                                    React.createElement(react_1.Menu.Button, { className: "flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" },
                                        React.createElement(image_1["default"], { className: "h-8 w-8 rounded-full", src: "https://www.rataindia.com/images/uploads/1622804521_large.jpg", alt: "hello", height: 20, width: 20, quality: 100 }))))))),
                React.createElement(react_1.Disclosure.Panel, { className: "sm:hidden" },
                    React.createElement("div", { className: "space-y-1 px-2 pb-3 pt-2" }, navigation.map(function (item) { return (React.createElement(react_1.Disclosure.Button, { key: item.name, as: "a", href: item.href, className: classNames(item.current ? 'bg-gray-900 text-black' : 'text-black hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-lg font-thin'), "aria-current": item.current ? 'page' : undefined }, item.name)); })))));
        })));
}
exports["default"] = Navbar;
