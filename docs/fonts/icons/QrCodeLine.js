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
var QrCodeLine = { view: function (_a) {
        var attrs = _a.attrs;
        return mithril_1.default("svg", __assign({ "version": 1.1, "width": 36, "height": 36, "viewBox": "0 0 36 36", "preserveAspectRatio": "xMidYMid meet", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }, attrs), mithril_1.default("title", {}, "qr-code-line"), mithril_1.default("path", { "d": "M5.6,4A1.6,1.6,0,0,0,4,5.6V12h8V4ZM10,10H6V6h4Z", "class": "clr-i-outline clr-i-outline-path-1" }), mithril_1.default("path", { "d": "M4,30.4A1.6,1.6,0,0,0,5.6,32H12V24H4ZM6,26h4v4H6Z", "class": "clr-i-outline clr-i-outline-path-2" }), mithril_1.default("path", { "d": "M24,32h6.4A1.6,1.6,0,0,0,32,30.4V24H24Zm2-6h4v4H26Z", "class": "clr-i-outline clr-i-outline-path-3" }), mithril_1.default("path", { "d": "M30.4,4H24v8h8V5.6A1.6,1.6,0,0,0,30.4,4ZM30,10H26V6h4Z", "class": "clr-i-outline clr-i-outline-path-4" }), mithril_1.default("polygon", { "points": "20 10 20 8 16 8 16 12 18 12 18 10 20 10", "class": "clr-i-outline clr-i-outline-path-5" }), mithril_1.default("rect", { "x": 12, "y": 12, "width": 2, "height": 2, "class": "clr-i-outline clr-i-outline-path-6" }), mithril_1.default("rect", { "x": 14, "y": 14, "width": 4, "height": 2, "class": "clr-i-outline clr-i-outline-path-7" }), mithril_1.default("polygon", { "points": "20 6 20 8 22 8 22 4 14 4 14 8 16 8 16 6 20 6", "class": "clr-i-outline clr-i-outline-path-8" }), mithril_1.default("rect", { "x": 4, "y": 14, "width": 2, "height": 4, "class": "clr-i-outline clr-i-outline-path-9" }), mithril_1.default("polygon", { "points": "12 16 12 18 10 18 10 14 8 14 8 18 6 18 6 20 4 20 4 22 8 22 8 20 10 20 10 22 12 22 12 20 14 20 14 16 12 16", "class": "clr-i-outline clr-i-outline-path-10" }), mithril_1.default("polygon", { "points": "20 16 22 16 22 18 24 18 24 16 26 16 26 14 22 14 22 10 20 10 20 12 18 12 18 14 20 14 20 16", "class": "clr-i-outline clr-i-outline-path-11" }), mithril_1.default("polygon", { "points": "18 30 14 30 14 32 22 32 22 30 20 30 20 28 18 28 18 30", "class": "clr-i-outline clr-i-outline-path-12" }), mithril_1.default("polygon", { "points": "22 20 22 18 20 18 20 16 18 16 18 18 16 18 16 20 18 20 18 22 20 22 20 20 22 20", "class": "clr-i-outline clr-i-outline-path-13" }), mithril_1.default("rect", { "x": 30, "y": 20, "width": 2, "height": 2, "class": "clr-i-outline clr-i-outline-path-14" }), mithril_1.default("rect", { "x": 22, "y": 20, "width": 6, "height": 2, "class": "clr-i-outline clr-i-outline-path-15" }), mithril_1.default("polygon", { "points": "30 14 28 14 28 16 26 16 26 18 28 18 28 20 30 20 30 18 32 18 32 16 30 16 30 14", "class": "clr-i-outline clr-i-outline-path-16" }), mithril_1.default("rect", { "x": 20, "y": 22, "width": 2, "height": 6, "class": "clr-i-outline clr-i-outline-path-17" }), mithril_1.default("polygon", { "points": "14 28 16 28 16 26 18 26 18 24 16 24 16 20 14 20 14 28", "class": "clr-i-outline clr-i-outline-path-18" }), mithril_1.default("rect", { "x": 0, "y": 0, "width": 36, "height": 36, "fill-opacity": 0 }));
    } };
exports.default = QrCodeLine;
