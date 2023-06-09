'use client';
"use strict";
exports.__esModule = true;
exports.dynamic = void 0;
var Features_1 = require("./components/Features");
var HeroComp_1 = require("./components/HeroComp");
var page = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(HeroComp_1["default"], { title: "Breathing Fresh Life into Every Space!", subtitle: "Our Dedicated Outdoor Air Systems provide a complete supply of fresh outdoor air, along with the added benefit of energy recovery for enhanced efficiency.", imageUrl: "https://img.freepik.com/free-vector/illustrated-people-renovating-living-room_23-2148677770.jpg?w=740&t=st=1684505222~exp=1684505822~hmac=14a3276c3a5314de6ac25d9d5932c9ec4a222af9efabae547f6a048e01f3c0b3" }),
        React.createElement(Features_1["default"], { subtitle: "Our extensive range of products provides dependable air comfort, ensuring the safety and energy efficiency of building owners and occupants on a global scale" })));
};
exports["default"] = page;
exports.dynamic = 'force-dynamic';
