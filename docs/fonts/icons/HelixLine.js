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
var HelixLine = { view: function (_a) {
        var attrs = _a.attrs;
        return mithril_1.default("svg", __assign({ "version": 1.1, "width": 36, "height": 36, "viewBox": "0 0 36 36", "preserveAspectRatio": "xMidYMid meet", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }, attrs), mithril_1.default("title", {}, "helix-line"), mithril_1.default("path", { "class": "clr-i-outline clr-i-outline-path-1", "d": "M8.88,13.07a.9.9,0,0,1-.49-1.66l8.93-5.73a.9.9,0,1,1,1,1.52L9.37,12.92A.9.9,0,0,1,8.88,13.07Z" }), mithril_1.default("path", { "class": "clr-i-outline clr-i-outline-path-2", "d": "M13.25,15.11a.9.9,0,0,1-.49-1.66L18,10.08a.9.9,0,1,1,1,1.52L13.74,15A.9.9,0,0,1,13.25,15.11Z" }), mithril_1.default("path", { "class": "clr-i-outline clr-i-outline-path-3", "d": "M19.72,30.23a.9.9,0,0,1-.49-1.66l8.93-5.73a.9.9,0,0,1,1,1.52L20.2,30.09A.9.9,0,0,1,19.72,30.23Z" }), mithril_1.default("path", { "class": "clr-i-outline clr-i-outline-path-4", "d": "M18.92,25.94a.9.9,0,0,1-.49-1.66l5.25-3.37a.9.9,0,1,1,1,1.51L19.4,25.8A.89.89,0,0,1,18.92,25.94Z" }), mithril_1.default("path", { "class": "clr-i-outline clr-i-outline-path-5", "d": "M21.56,5.69a3.59,3.59,0,0,1,.15,3.53L18.83,15h2.25l2.43-4.87a5.61,5.61,0,0,0-5-8.14H13.26l-1,2h6.22A3.61,3.61,0,0,1,21.56,5.69Z" }), mithril_1.default("path", { "class": "clr-i-outline clr-i-outline-path-1", "d": "M32.91,20.78A5.53,5.53,0,0,0,27.66,17H9.31a3.54,3.54,0,0,1-3.56-3.67,3.61,3.61,0,0,1,.42-1.54l4.26-8.49a1,1,0,1,0-1.79-.9L4.4,10.84A5.67,5.67,0,0,0,4,15.22,5.53,5.53,0,0,0,9.28,19h7.6l-3.44,6.87a5.64,5.64,0,0,0,1.5,6.92A5.38,5.38,0,0,0,18.41,34h5.25l1-2H18.43a3.58,3.58,0,0,1-3.22-5.21L19.11,19h8.54a3.42,3.42,0,0,1,2.15.71,3.57,3.57,0,0,1,1,4.43l-4.12,8.22a1,1,0,1,0,1.79.9l4.06-8.1A5.67,5.67,0,0,0,32.91,20.78Z" }), mithril_1.default("rect", { "x": 0, "y": 0, "width": 36, "height": 36, "fill-opacity": 0 }));
    } };
exports.default = HelixLine;
