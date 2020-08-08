"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mithril_1 = __importDefault(require("mithril"));
var CalculatorLine = { view: function (_a) {
        var attrs = _a.attrs;
        return mithril_1.default("svg", __assign({ "version": 1.1, "width": 36, "height": 36, "viewBox": "0 0 36 36", "preserveAspectRatio": "xMidYMid meet", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }, attrs), mithril_1.default("title", {}, "calculator-line"), mithril_1.default("path", { "class": "clr-i-outline clr-i-outline-path-1", "d": "M28,2H8A2,2,0,0,0,6,4V32a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V4A2,2,0,0,0,28,2ZM8,32V4H28V32Z" }), mithril_1.default("path", { "class": "clr-i-outline clr-i-outline-path-2", "d": "M12,8H25.67V6H11a1,1,0,0,0-1,1v4.67h2Z" }), mithril_1.default("polygon", { "class": "clr-i-outline clr-i-outline-path-3", "points": "12 16 10 16 10 18 14 18 14 14 12 14 12 16" }), mithril_1.default("polygon", { "class": "clr-i-outline clr-i-outline-path-4", "points": "24 16 22 16 22 18 26 18 26 14 24 14 24 16" }), mithril_1.default("polygon", { "class": "clr-i-outline clr-i-outline-path-5", "points": "18 16 16 16 16 18 20 18 20 14 18 14 18 16" }), mithril_1.default("polygon", { "class": "clr-i-outline clr-i-outline-path-6", "points": "12 22 10 22 10 24 14 24 14 20 12 20 12 22" }), mithril_1.default("polygon", { "class": "clr-i-outline clr-i-outline-path-7", "points": "24 22 22 22 22 24 26 24 26 20 24 20 24 22" }), mithril_1.default("polygon", { "class": "clr-i-outline clr-i-outline-path-8", "points": "18 22 16 22 16 24 20 24 20 20 18 20 18 22" }), mithril_1.default("polygon", { "class": "clr-i-outline clr-i-outline-path-9", "points": "12 28 10 28 10 30 14 30 14 26 12 26 12 28" }), mithril_1.default("polygon", { "class": "clr-i-outline clr-i-outline-path-10", "points": "24 28 22 28 22 30 26 30 26 26 24 26 24 28" }), mithril_1.default("polygon", { "class": "clr-i-outline clr-i-outline-path-11", "points": "18 28 16 28 16 30 20 30 20 26 18 26 18 28" }), mithril_1.default("rect", { "x": 0, "y": 0, "width": 36, "height": 36, "fill-opacity": 0 }));
    } };
exports.default = CalculatorLine;
