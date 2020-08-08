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
var MapLine = { view: function (_a) {
        var attrs = _a.attrs;
        return mithril_1.default("svg", __assign({ "version": 1.1, "width": 36, "height": 36, "viewBox": "0 0 36 36", "preserveAspectRatio": "xMidYMid meet", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }, attrs), mithril_1.default("title", {}, "map-line"), mithril_1.default("path", { "class": "clr-i-outline clr-i-outline-path-1", "d": "M33.59,6.19A1,1,0,0,0,32.7,6L23.09,9,13.46,4.11a1,1,0,0,0-.84,0L2.62,8.2A1,1,0,0,0,2,9.13V29.61a1,1,0,0,0,1.38.92L13,26.58l9.59,4.92a1,1,0,0,0,.46.11,1,1,0,0,0,.3,0l10-3.12a1,1,0,0,0,.7-1V7A1,1,0,0,0,33.59,6.19ZM32,26.75l-8.32,2.6V27.06h-1.6v2l-8.4-4.31V23.06h-1.6v1.72L4,28.11V9.79l8.08-3.33V8.81h1.6V6.47l8.4,4.3v2.1h1.6V11L32,8.36Z" }), mithril_1.default("rect", { "class": "clr-i-outline clr-i-outline-path-2", "x": 22.08, "y": 15.06, "width": 1.6, "height": 3.81 }), mithril_1.default("rect", { "class": "clr-i-outline clr-i-outline-path-3", "x": 22.08, "y": 21.06, "width": 1.6, "height": 3.81 }), mithril_1.default("rect", { "class": "clr-i-outline clr-i-outline-path-4", "x": 12.08, "y": 11.06, "width": 1.6, "height": 3.81 }), mithril_1.default("rect", { "class": "clr-i-outline clr-i-outline-path-5", "x": 12.08, "y": 17.13, "width": 1.6, "height": 3.75 }), mithril_1.default("rect", { "x": 0, "y": 0, "width": 36, "height": 36, "fill-opacity": 0 }));
    } };
exports.default = MapLine;
