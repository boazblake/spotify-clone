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
var FishLine = { view: function (_a) {
        var attrs = _a.attrs;
        return mithril_1.default("svg", __assign({ "version": 1.1, "width": 36, "height": 36, "viewBox": "0 0 36 36", "preserveAspectRatio": "xMidYMid meet", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }, attrs), mithril_1.default("title", {}, "fish-line"), mithril_1.default("circle", { "cx": 11.49, "cy": 17.5, "r": 1.5, "class": "clr-i-outline clr-i-outline-path-1" }), mithril_1.default("path", { "d": "M33.48,9.29a1,1,0,0,0-1,0c-3.37,2-5.91,5.81-6.9,7.45L24.85,18s-1,1.62-1,1.62c-1.76,2.49-5.1,6.36-8.79,6.36-4.65,0-8.75-6.15-9.84-7.94,1.09-1.79,5.18-7.94,9.84-7.94,3.54,0,6.77,3.58,8.58,6.07l.28-.48s.36-.51.93-1.25C22.72,11.64,19.18,8.06,15,8.06c-6.59,0-11.67,9.07-11.88,9.46L2.89,18l.27.48c.21.39,5.29,9.46,11.88,9.46,5.06,0,9.22-5.34,11-8C26,20,27.18,18,27.18,18h0l.07-.11a18.06,18.06,0,0,1,1.88-2.75s0,0,0,0a20.31,20.31,0,0,1,2.86-3V23.88a20.93,20.93,0,0,1-3.61-4l-.16.26h0l-1,1.59a18.74,18.74,0,0,0,5.21,4.95,1,1,0,0,0,.5.14,1.13,1.13,0,0,0,.5-.13,1,1,0,0,0,.5-.87V10.16A1,1,0,0,0,33.48,9.29Z", "class": "clr-i-outline clr-i-outline-path-2" }), mithril_1.default("rect", { "x": 0, "y": 0, "width": 36, "height": 36, "fill-opacity": 0 }));
    } };
exports.default = FishLine;
