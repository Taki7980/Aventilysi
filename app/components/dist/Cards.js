"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var react_1 = require("react");
var Cards = function (_a) {
    var project = _a.project;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "rounded overflow-hidden shadow-lg cardBg" },
            react_1["default"].createElement(image_1["default"], { src: project.image, alt: project.name, width: 400, height: 200, className: 'm-auto object-cover rounded-lg my-4' }),
            react_1["default"].createElement("div", { className: "px-6 py-4" },
                react_1["default"].createElement("div", { className: "font-bold text-xl mb-2" }, project.name),
                react_1["default"].createElement("p", { className: "text-gray-700 text-base" }, project.shortdescription)))));
};
exports["default"] = Cards;
