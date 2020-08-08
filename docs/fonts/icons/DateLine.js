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
var DateLine = { view: function (_a) {
        var attrs = _a.attrs;
        return mithril_1.default("svg", __assign({ "version": 1.1, "width": 36, "height": 36, "viewBox": "0 0 36 36", "preserveAspectRatio": "xMidYMid meet", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }, attrs), mithril_1.default("title", {}, "date-line"), mithril_1.default("path", { "class": "clr-i-outline clr-i-outline-path-1", "d": "M32.25,6H29V8h3V30H4V8H7V6H3.75A1.78,1.78,0,0,0,2,7.81V30.19A1.78,1.78,0,0,0,3.75,32h28.5A1.78,1.78,0,0,0,34,30.19V7.81A1.78,1.78,0,0,0,32.25,6Z" }), mithril_1.default("rect", { "class": "clr-i-outline clr-i-outline-path-2", "x": 8, "y": 14, "width": 2, "height": 2 }), mithril_1.default("rect", { "class": "clr-i-outline clr-i-outline-path-3", "x": 14, "y": 14, "width": 2, "height": 2 }), mithril_1.default("rect", { "class": "clr-i-outline clr-i-outline-path-4", "x": 20, "y": 14, "width": 2, "height": 2 }), mithril_1.default("rect", { "class": "clr-i-outline clr-i-outline-path-5", "x": 26, "y": 14, "width": 2, "height": 2 }), mithril_1.default("rect", { "class": "clr-i-outline clr-i-outline-path-6", "x": 8, "y": 19, "width": 2, "height": 2 }), mithril_1.default("rect", { "class": "clr-i-outline clr-i-outline-path-7", "x": 14, "y": 19, "width": 2, "height": 2 }), mithril_1.default("rect", { "class": "clr-i-outline clr-i-outline-path-8", "x": 20, "y": 19, "width": 2, "height": 2 }), mithril_1.default("rect", { "class": "clr-i-outline clr-i-outline-path-9", "x": 26, "y": 19, "width": 2, "height": 2 }), mithril_1.default("rect", { "class": "clr-i-outline clr-i-outline-path-10", "x": 8, "y": 24, "width": 2, "height": 2 }), mithril_1.default("rect", { "class": "clr-i-outline clr-i-outline-path-11", "x": 14, "y": 24, "width": 2, "height": 2 }), mithril_1.default("rect", { "class": "clr-i-outline clr-i-outline-path-12", "x": 20, "y": 24, "width": 2, "height": 2 }), mithril_1.default("rect", { "class": "clr-i-outline clr-i-outline-path-13", "x": 26, "y": 24, "width": 2, "height": 2 }), mithril_1.default("path", { "class": "clr-i-outline clr-i-outline-path-14", "d": "M10,10a1,1,0,0,0,1-1V3A1,1,0,0,0,9,3V9A1,1,0,0,0,10,10Z" }), mithril_1.default("path", { "class": "clr-i-outline clr-i-outline-path-15", "d": "M26,10a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V9A1,1,0,0,0,26,10Z" }), mithril_1.default("rect", { "class": "clr-i-outline clr-i-outline-path-16", "x": 13, "y": 6, "width": 10, "height": 2 }), mithril_1.default("rect", { "x": 0, "y": 0, "width": 36, "height": 36, "fill-opacity": 0 }));
    } };
exports.default = DateLine;
