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
var BellCurveLine = { view: function (_a) {
        var attrs = _a.attrs;
        return mithril_1.default("svg", __assign({ "version": 1.1, "width": 36, "height": 36, "viewBox": "0 0 36 36", "preserveAspectRatio": "xMidYMid meet", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }, attrs), mithril_1.default("title", {}, "bell-curve-line"), mithril_1.default("path", { "d": "M33,29H3A1,1,0,1,1,3,27H33A1,1,0,1,1,33,29Z", "class": "clr-i-outline clr-i-outline-path-1" }), mithril_1.default("path", { "d": "M33,25h-.62a8.11,8.11,0,0,1-8-6.67C23.62,14.44,21.89,7.94,18,7.94s-5.69,6.51-6.38,10.39a8.11,8.11,0,0,1-8,6.65H3a1,1,0,1,1,0-2h.6A6.11,6.11,0,0,0,9.6,18c1.41-7.88,4.3-12,8.35-12s6.93,4.16,8.33,12a6.11,6.11,0,0,0,6,5H33a1,1,0,0,1,0,2Z", "class": "clr-i-outline clr-i-outline-path-2" }), mithril_1.default("rect", { "x": 0, "y": 0, "width": 36, "height": 36, "fill-opacity": 0 }));
    } };
exports.default = BellCurveLine;
