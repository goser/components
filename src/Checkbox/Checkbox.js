"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var common_1 = require("@goser/common");
var Checkbox_module_css_1 = __importDefault(require("./Checkbox.module.css"));
var Checkbox = function (_a) {
    var className = _a.className, children = _a.children, checked = _a.checked, onChange = _a.onChange;
    var onInputChange = onChange ? function (event) {
        onChange(event.target.checked);
    } : undefined;
    return (0, jsx_runtime_1.jsxs)("label", { className: (0, common_1.cls)(className, Checkbox_module_css_1.default.main), children: [(0, jsx_runtime_1.jsx)("input", { type: 'checkbox', className: Checkbox_module_css_1.default.checkbox, checked: checked, onChange: onInputChange }), (0, jsx_runtime_1.jsx)("span", { children: children })] });
};
exports.Checkbox = Checkbox;
