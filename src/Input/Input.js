"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Input_module_css_1 = __importDefault(require("./Input.module.css"));
var common_1 = require("@goser/common");
var Input = function (_a) {
    var className = _a.className, value = _a.value, onChange = _a.onChange, type = _a.type, onBlur = _a.onBlur, max = _a.max, min = _a.min, placeholder = _a.placeholder, invalid = _a.invalid, title = _a.title, autoFocus = _a.autoFocus;
    var onInputChange = onChange ? function (event) {
        onChange(event.currentTarget.value);
    } : undefined;
    return (0, jsx_runtime_1.jsx)("input", { className: (0, common_1.cls)(className, Input_module_css_1.default.main, invalid && Input_module_css_1.default.invalid), type: type || 'text', value: value, onChange: onInputChange, onBlur: onBlur, max: max, min: min, placeholder: placeholder, title: title, autoFocus: autoFocus });
};
exports.Input = Input;
