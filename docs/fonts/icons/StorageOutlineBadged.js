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
var StorageOutlineBadged = { view: function (_a) {
        var attrs = _a.attrs;
        return mithril_1.default("svg", __assign({ "version": 1.1, "width": 36, "height": 36, "viewBox": "0 0 36 36", "preserveAspectRatio": "xMidYMid meet", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }, attrs), mithril_1.default("title", {}, "storage-outline-badged"), mithril_1.default("path", { "class": "clr-i-outline--badged clr-i-outline-path-1--badged", "d": "M7,7.76V9.85a43.53,43.53,0,0,0,11,1.27,54.82,54.82,0,0,0,6.2-.36,7.5,7.5,0,0,1-1.13-1.88c-1.5.15-3.2.24-5.07.24A37.6,37.6,0,0,1,7,7.76Z" }), mithril_1.default("path", { "class": "clr-i-outline--badged clr-i-outline-path-2--badged", "d": "M31,13.43v.82c-.33.86-5.06,2.45-13,2.45A37.45,37.45,0,0,1,7,15.34v2.08A43.33,43.33,0,0,0,18,18.7c4,0,9.93-.48,13-2v5.17c-.33.86-5.06,2.45-13,2.45A37.45,37.45,0,0,1,7,22.92V25a43.33,43.33,0,0,0,11,1.28c4,0,9.93-.48,13-2v5.1c-.35.86-5.08,2.45-13,2.45S5.3,30.2,5,29.37V6.82C5.3,6,10,4.36,18,4.36c1.7,0,3.25.08,4.64.2a7.44,7.44,0,0,1,.67-1.94c-1.88-.18-3.75-.26-5.31-.26-5.57,0-15,.93-15,4.43V29.37c0,3.49,9.43,4.43,15,4.43s15-.93,15-4.43V12.87A7.45,7.45,0,0,1,31,13.43Z" }), mithril_1.default("circle", { "class": "clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge", "cx": 30, "cy": 6, "r": 5 }), mithril_1.default("rect", { "x": 0, "y": 0, "width": 36, "height": 36, "fill-opacity": 0 }));
    } };
exports.default = StorageOutlineBadged;
