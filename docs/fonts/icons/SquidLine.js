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
var SquidLine = { view: function (_a) {
        var attrs = _a.attrs;
        return mithril_1.default("svg", __assign({ "version": 1.1, "width": 36, "height": 36, "viewBox": "0 0 36 36", "preserveAspectRatio": "xMidYMid meet", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }, attrs), mithril_1.default("title", {}, "squid-line"), mithril_1.default("path", { "d": "M18,7a1,1,0,0,1-1-1V3.19a1,1,0,0,1,2,0V6A1,1,0,0,1,18,7Z", "class": "clr-i-outline clr-i-outline-path-1" }), mithril_1.default("path", { "d": "M18,34a1,1,0,0,1-1-1V30a1,1,0,0,1,2,0v3A1,1,0,0,1,18,34Z", "class": "clr-i-outline clr-i-outline-path-2" }), mithril_1.default("path", { "d": "M7.41,18l1.78-1.77a1,1,0,1,0-1.42-1.42L6,16.59,4.23,14.81a1,1,0,1,0-1.42,1.42L4.59,18,2.81,19.77a1,1,0,0,0,0,1.42,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29L6,19.41l1.77,1.78a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z", "class": "clr-i-outline clr-i-outline-path-3" }), mithril_1.default("path", { "d": "M6,13.76l.36-.36a3,3,0,0,1,2.11-.88,11,11,0,0,1,19,0,3,3,0,0,1,2.12.88l.36.36.2-.2a13,13,0,0,0-24.4,0Z", "class": "clr-i-outline clr-i-outline-path-4" }), mithril_1.default("path", { "d": "M30,22.24l-.36.36a3,3,0,0,1-2.12.88,11,11,0,0,1-19,0,3,3,0,0,1-2.12-.88L6,22.24l-.2.2a13,13,0,0,0,24.4,0Z", "class": "clr-i-outline clr-i-outline-path-5" }), mithril_1.default("path", { "d": "M31.41,18l1.78-1.77a1,1,0,0,0-1.42-1.42L30,16.59l-1.77-1.78a1,1,0,1,0-1.42,1.42L28.59,18l-1.78,1.77a1,1,0,0,0,0,1.42,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29L30,19.41l1.77,1.78a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z", "class": "clr-i-outline clr-i-outline-path-6" }), mithril_1.default("rect", { "x": 0, "y": 0, "width": 36, "height": 36, "fill-opacity": 0 }));
    } };
exports.default = SquidLine;
