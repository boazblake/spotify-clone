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
var ComputerOutlineBadged = { view: function (_a) {
        var attrs = _a.attrs;
        return mithril_1.default("svg", __assign({ "version": 1.1, "width": 36, "height": 36, "viewBox": "0 0 36 36", "preserveAspectRatio": "xMidYMid meet", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }, attrs), mithril_1.default("title", {}, "computer-outline-badged"), mithril_1.default("path", { "d": "M1,25v3.4A2.6,2.6,0,0,0,3.6,31H32.34a2.6,2.6,0,0,0,2.6-2.6V25Zm32,3.4a.6.6,0,0,1-.6.6H3.56a.6.6,0,0,1-.6-.6V26.53h9.95a1.64,1.64,0,0,0,1.5,1h7.13a1.64,1.64,0,0,0,1.5-1H33Z", "class": "clr-i-outline--badged clr-i-outline-path-1--badged" }), mithril_1.default("path", { "d": "M22.5,6a7.52,7.52,0,0,1,.07-1H5.5A1.5,1.5,0,0,0,4,6.5V23H6V7H22.57A7.52,7.52,0,0,1,22.5,6Z", "class": "clr-i-outline--badged clr-i-outline-path-2--badged" }), mithril_1.default("path", { "d": "M30,13.5V23h2V13.22A7.49,7.49,0,0,1,30,13.5Z", "class": "clr-i-outline--badged clr-i-outline-path-3--badged" }), mithril_1.default("path", { "d": "M23.13,9H8V22.88H9.6V10.6H24.08A7.49,7.49,0,0,1,23.13,9Z", "class": "clr-i-outline--badged clr-i-outline-path-4--badged" }), mithril_1.default("circle", { "cx": 30, "cy": 6, "r": 5, "class": "clr-i-outline--badged clr-i-outline-path-5--badged clr-i-badge" }), mithril_1.default("rect", { "x": 0, "y": 0, "width": 36, "height": 36, "fill-opacity": 0 }));
    } };
exports.default = ComputerOutlineBadged;
