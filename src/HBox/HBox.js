"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HBox = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var HBox_module_css_1 = __importDefault(require("./HBox.module.css"));
var common_1 = require("@goser/common");
var HBox = function (_a) {
    var className = _a.className, children = _a.children;
    return (0, jsx_runtime_1.jsx)("div", { className: (0, common_1.cls)(className, HBox_module_css_1.default.main), children: children });
};
exports.HBox = HBox;
