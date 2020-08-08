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
var FlameLine = { view: function (_a) {
        var attrs = _a.attrs;
        return mithril_1.default("svg", __assign({ "version": 1.1, "width": 36, "height": 36, "viewBox": "0 0 36 36", "preserveAspectRatio": "xMidYMid meet", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }, attrs), mithril_1.default("title", {}, "flame-line"), mithril_1.default("path", { "d": "M31.3,16.66c-1.19-2.09-7.94-14.15-7.94-14.15a1,1,0,0,0-1.75,0l-6,10.64-3-5.28a1,1,0,0,0-1.75,0S5.4,17.78,4.42,19.5A9.3,9.3,0,0,0,3,24.61C3,29.72,5.86,34,11.67,34H22.48C28.28,34,33,29,33,22.78A11.13,11.13,0,0,0,31.3,16.66ZM22.48,32H11.77C8.13,32,5,28.66,5,24.61a7.43,7.43,0,0,1,1.16-4.13c.73-1.29,4.05-7.21,5.65-10.07l3,5.28a1,1,0,0,0,.87.51h0a1,1,0,0,0,.87-.51L22.49,5c1.86,3.33,6.15,11,7.07,12.6A9.24,9.24,0,0,1,31,22.78C31,27.87,27.18,32,22.48,32Z", "class": "clr-i-outline clr-i-outline-path-1" }), mithril_1.default("path", { "d": "M25.75,21.73c-.65-1.16-4.38-7.81-4.38-7.81a.8.8,0,0,0-1.4,0l-4.2,7.48-1.59-2.49a.8.8,0,0,0-1.35,0L9.37,24.35a4.35,4.35,0,0,0-.82,2.6,4.49,4.49,0,0,0,.5,2H11a3,3,0,0,1-.83-2,2.78,2.78,0,0,1,.56-1.73l2.8-4.38,1.66,2.6a.8.8,0,0,0,1.41-.12,7.82,7.82,0,0,1,.4-.8L20.67,16l3.69,6.57a4.83,4.83,0,0,1,.77,2.71A5,5,0,0,1,23.46,29h2.13a6.68,6.68,0,0,0,1.14-3.74,6.45,6.45,0,0,0-1-3.5Z", "class": "clr-i-outline clr-i-outline-path-2" }), mithril_1.default("rect", { "x": 0, "y": 0, "width": 36, "height": 36, "fill-opacity": 0 }));
    } };
exports.default = FlameLine;
