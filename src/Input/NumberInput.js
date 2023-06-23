"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberInput = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Input_1 = require("./Input");
var NumberInput = function (_a) {
    var className = _a.className, value = _a.value, onChange = _a.onChange, min = _a.min, max = _a.max, invalid = _a.invalid;
    var onInputChange;
    var onBlur;
    if (onChange) {
        onInputChange = function (value) { return onChange(parseInt(value)); };
        onBlur = function () {
            var newValue = value;
            if (min !== undefined) {
                newValue = Math.max(min, newValue);
            }
            if (max !== undefined) {
                newValue = Math.min(max, newValue);
            }
            if (newValue !== value) {
                onChange(newValue);
            }
        };
    }
    return (0, jsx_runtime_1.jsx)(Input_1.Input, { className: className, value: value.toString(), onChange: onInputChange, type: 'number', onBlur: onBlur, min: min, max: max, invalid: invalid });
};
exports.NumberInput = NumberInput;
