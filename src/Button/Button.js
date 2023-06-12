"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var common_1 = require("@goser/common");
var Button_module_css_1 = __importDefault(require("./Button.module.css"));
var Button = function (_a) {
    var className = _a.className, label = _a.label;
    return (0, jsx_runtime_1.jsx)("button", { className: (0, common_1.cls)(className, Button_module_css_1.default.main), children: (0, jsx_runtime_1.jsx)("span", { className: (0, common_1.cls)(Button_module_css_1.default.label), children: label }) });
};
exports.Button = Button;
