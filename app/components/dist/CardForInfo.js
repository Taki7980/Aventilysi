'use client';
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var CardForInfo = function (_a) {
    var title = _a.title, description = _a.description, url = _a.url;
    return (React.createElement("div", null,
        React.createElement("div", { className: "card w-full bg-base-100 my-10" },
            React.createElement("div", { className: "card-body space-y-2" },
                React.createElement("h2", { className: "card-title text-center font-semibold text-3xl" }, title),
                React.createElement("div", { className: "text-gray-900" }, description),
                React.createElement("div", { className: "card-actions justify-end" }, url && (React.createElement(link_1["default"], { href: url, target: '_blank', className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" }, "Visit Site To know more")))))));
};
exports["default"] = CardForInfo;
