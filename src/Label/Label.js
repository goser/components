"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var common_1 = require("@goser/common");
var Label_module_css_1 = __importDefault(require("./Label.module.css"));
var Label = function (_a) {
    var className = _a.className, children = _a.children, disabled = _a.disabled;
    return (0, jsx_runtime_1.jsx)("div", { className: (0, common_1.cls)(className, Label_module_css_1.default.main, !disabled || Label_module_css_1.default.disabled), children: children });
};
exports.Label = Label;
