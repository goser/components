"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Input_module_css_1 = __importDefault(require("./Input.module.css"));
var Input = function (_a) {
    var value = _a.value, onChange = _a.onChange, type = _a.type, onBlur = _a.onBlur, max = _a.max, min = _a.min;
    var onInputChange = onChange ? function (event) {
        onChange(event.currentTarget.value);
    } : undefined;
    return (0, jsx_runtime_1.jsx)("input", { type: type || 'text', className: Input_module_css_1.default.main, value: value, onChange: onInputChange, onBlur: onBlur, max: max, min: min });
};
exports.Input = Input;
