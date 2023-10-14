"use strict";
exports.__esModule = true;
exports.runtime = exports.metadata = void 0;
var Footer_1 = require("./components/Footer");
var Navbar_1 = require("./components/Navbar");
require("./globals.css");
var google_1 = require("next/font/google");
var nunito = google_1.Nunito({
    weight: ['500'], subsets: ['latin']
});
exports.metadata = {
    title: 'Aventi-lysi',
    description: 'A ventilation solution'
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", { className: nunito.className + " bounce cardBg bg-cover bg-center bg-fixed " },
            React.createElement(Navbar_1["default"], null),
            children,
            React.createElement(Footer_1["default"], null))));
}
exports["default"] = RootLayout;
exports.runtime = 'edge';
