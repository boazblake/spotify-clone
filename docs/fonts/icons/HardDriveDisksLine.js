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
var HardDriveDisksLine = { view: function (_a) {
        var attrs = _a.attrs;
        return mithril_1.default("svg", __assign({ "version": 1.1, "width": 36, "height": 36, "viewBox": "0 0 36 36", "preserveAspectRatio": "xMidYMid meet", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }, attrs), mithril_1.default("title", {}, "hard-drive-disks-line"), mithril_1.default("path", { "d": "M26,5.74A1.74,1.74,0,0,0,24.26,4H3.74A1.74,1.74,0,0,0,2,5.74V20.26A1.74,1.74,0,0,0,3.74,22H4V6H26Z", "class": "clr-i-outline clr-i-outline-path-1" }), mithril_1.default("path", { "d": "M30,9.74A1.74,1.74,0,0,0,28.26,8H7.74A1.74,1.74,0,0,0,6,9.74V24.26A1.74,1.74,0,0,0,7.74,26H8V10H30Z", "class": "clr-i-outline clr-i-outline-path-2" }), mithril_1.default("path", { "d": "M32.26,12H11.74A1.74,1.74,0,0,0,10,13.74V28.26A1.74,1.74,0,0,0,11.74,30H32.26A1.74,1.74,0,0,0,34,28.26V13.74A1.74,1.74,0,0,0,32.26,12ZM32,28H12V14H32Z", "class": "clr-i-outline clr-i-outline-path-3" }), mithril_1.default("path", { "d": "M19.94,23.68a2.64,2.64,0,1,0-2.7-2.63A2.67,2.67,0,0,0,19.94,23.68Zm0-3.87a1.24,1.24,0,1,1-1.29,1.24A1.27,1.27,0,0,1,19.94,19.81Z", "class": "clr-i-outline clr-i-outline-path-4" }), mithril_1.default("path", { "d": "M19.94,16.22a4.93,4.93,0,0,1,4.95,4.35H23.71V22h4.41a.7.7,0,0,0,0-1.4H26.31a6.33,6.33,0,0,0-6.37-5.75,6.58,6.58,0,0,0-1.48.17l.35,1.37A4.73,4.73,0,0,1,19.94,16.22Z", "class": "clr-i-outline clr-i-outline-path-5" }), mithril_1.default("path", { "d": "M19.94,27.27a6.42,6.42,0,0,0,5.67-3.35H23.93a5,5,0,0,1-4,1.95,4.91,4.91,0,0,1-5-4.82,5.16,5.16,0,0,1,.08-.79L13.63,20a7,7,0,0,0-.09,1A6.32,6.32,0,0,0,19.94,27.27Z", "class": "clr-i-outline clr-i-outline-path-6" }), mithril_1.default("rect", { "x": 0, "y": 0, "width": 36, "height": 36, "fill-opacity": 0 }));
    } };
exports.default = HardDriveDisksLine;
