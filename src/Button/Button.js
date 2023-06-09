"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var common_1 = require("@goser/common");
var Button = function (_a) {
    var className = _a.className, label = _a.label;
    return (0, jsx_runtime_1.jsx)("button", { className: (0, common_1.cls)(className, 'main'), children: label });
};
exports.Button = Button;
