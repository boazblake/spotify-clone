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
var HostGroupLine = { view: function (_a) {
        var attrs = _a.attrs;
        return mithril_1.default("svg", __assign({ "version": 1.1, "width": 36, "height": 36, "viewBox": "0 0 36 36", "preserveAspectRatio": "xMidYMid meet", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }, attrs), mithril_1.default("title", {}, "host-group-line"), mithril_1.default("path", { "d": "M21.08,34h-14A1.08,1.08,0,0,1,6,33V12a1.08,1.08,0,0,1,1.08-1.08h14A1.08,1.08,0,0,1,22.16,12V33A1.08,1.08,0,0,1,21.08,34ZM8.16,31.88H20V13H8.16Z", "class": "clr-i-outline clr-i-outline-path-1" }), mithril_1.default("rect", { "x": 10.08, "y": 14.96, "width": 8, "height": 2, "class": "clr-i-outline clr-i-outline-path-2" }), mithril_1.default("path", { "d": "M26.1,27.81h-2V9h-12V7h13a1,1,0,0,1,1,1Z", "class": "clr-i-outline clr-i-outline-path-3" }), mithril_1.default("path", { "d": "M30.08,23h-2V5h-11V3h12a1,1,0,0,1,1,1Z", "class": "clr-i-outline clr-i-outline-path-4" }), mithril_1.default("rect", { "x": 13.08, "y": 27.88, "width": 2, "height": 2.16, "class": "clr-i-outline clr-i-outline-path-5" }), mithril_1.default("rect", { "x": 0, "y": 0, "width": 36, "height": 36, "fill-opacity": 0 }));
    } };
exports.default = HostGroupLine;