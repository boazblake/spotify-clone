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
var ECheckLine = { view: function (_a) {
        var attrs = _a.attrs;
        return mithril_1.default("svg", __assign({ "version": 1.1, "width": 36, "height": 36, "viewBox": "0 0 36 36", "preserveAspectRatio": "xMidYMid meet", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }, attrs), mithril_1.default("title", {}, "e-check-line"), mithril_1.default("rect", { "class": "clr-i-outline clr-i-outline-path-1", "x": 16, "y": 16, "width": 15, "height": 2 }), mithril_1.default("rect", { "class": "clr-i-outline clr-i-outline-path-2", "x": 20, "y": 21, "width": 11, "height": 2 }), mithril_1.default("path", { "class": "clr-i-outline clr-i-outline-path-3", "d": "M34,8H12.93a8.35,8.35,0,0,1,.79,2H33V26H3V19.9a7.83,7.83,0,0,1-2-1.34V27a1,1,0,0,0,1,1H34a1,1,0,0,0,1-1V9A1,1,0,0,0,34,8Z" }), mithril_1.default("path", { "class": "clr-i-outline clr-i-outline-path-4", "d": "M6.57,18.68a6.17,6.17,0,0,0,4.32-1.59,1.2,1.2,0,0,0,.36-.84,1.08,1.08,0,0,0-1.09-1.11,1,1,0,0,0-.71.25,4.32,4.32,0,0,1-2.84,1,3.35,3.35,0,0,1-3.46-3h7.53A1.29,1.29,0,0,0,12,12.06,5.68,5.68,0,0,0,6.27,6.14,6,6,0,0,0,.4,12.4v0A6,6,0,0,0,6.57,18.68ZM6.25,8.39c1.82,0,2.87,1.39,3,3.16H3.13C3.38,9.69,4.56,8.39,6.25,8.39Z" }), mithril_1.default("rect", { "x": 0, "y": 0, "width": 36, "height": 36, "fill-opacity": 0 }));
    } };
exports.default = ECheckLine;
