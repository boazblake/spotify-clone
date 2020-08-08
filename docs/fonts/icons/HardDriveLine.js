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
var HardDriveLine = { view: function (_a) {
        var attrs = _a.attrs;
        return mithril_1.default("svg", __assign({ "version": 1.1, "width": 36, "height": 36, "viewBox": "0 0 36 36", "preserveAspectRatio": "xMidYMid meet", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }, attrs), mithril_1.default("title", {}, "hard-drive-line"), mithril_1.default("path", { "d": "M34,8a2,2,0,0,0-2-2H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2ZM32,28H4V8H32V28Z", "class": "clr-i-outline clr-i-outline-path-1" }), mithril_1.default("circle", { "cx": 6.21, "cy": 10.25, "r": 1.25, "class": "clr-i-outline clr-i-outline-path-2" }), mithril_1.default("circle", { "cx": 29.81, "cy": 10.25, "r": 1.25, "class": "clr-i-outline clr-i-outline-path-3" }), mithril_1.default("circle", { "cx": 6.21, "cy": 25.42, "r": 1.25, "class": "clr-i-outline clr-i-outline-path-4" }), mithril_1.default("circle", { "cx": 29.81, "cy": 25.42, "r": 1.25, "class": "clr-i-outline clr-i-outline-path-5" }), mithril_1.default("path", { "d": "M11.88,18.08a3.59,3.59,0,1,0,3.59-3.59,3.84,3.84,0,0,0-.91.13L15,16.16a2.08,2.08,0,0,1,.5-.07,2,2,0,1,1-2,2,1.64,1.64,0,0,1,.08-.5L12,17.16A3.53,3.53,0,0,0,11.88,18.08Z", "class": "clr-i-outline clr-i-outline-path-6" }), mithril_1.default("path", { "d": "M15.47,25.73a7.66,7.66,0,0,1-7.65-7.65,7.55,7.55,0,0,1,.27-2L6.54,15.7a9.24,9.24,0,0,0,17.8,4.95H22.66A7.64,7.64,0,0,1,15.47,25.73Z", "class": "clr-i-outline clr-i-outline-path-7" }), mithril_1.default("path", { "d": "M28.22,17.83a.8.8,0,0,0-.8-.8H24.66a9.26,9.26,0,0,0-9.19-8.2,9.36,9.36,0,0,0-2.38.32l.42,1.54a7.86,7.86,0,0,1,2-.26A7.66,7.66,0,0,1,23,17H20.92a.8.8,0,0,0,0,1.6h6.5A.8.8,0,0,0,28.22,17.83Z", "class": "clr-i-outline clr-i-outline-path-8" }), mithril_1.default("rect", { "x": 0, "y": 0, "width": 36, "height": 36, "fill-opacity": 0 }));
    } };
exports.default = HardDriveLine;
