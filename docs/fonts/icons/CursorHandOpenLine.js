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
var CursorHandOpenLine = { view: function (_a) {
        var attrs = _a.attrs;
        return mithril_1.default("svg", __assign({ "version": 1.1, "width": 36, "height": 36, "viewBox": "0 0 36 36", "preserveAspectRatio": "xMidYMid meet", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }, attrs), mithril_1.default("title", {}, "cursor-hand-open-line"), mithril_1.default("path", { "d": "M31.46,8.57A3.11,3.11,0,0,0,27,5.75a3.19,3.19,0,0,0-4.66-2.64,3.29,3.29,0,0,0-6.42-.76,3.23,3.23,0,0,0-1.66-.46A3.27,3.27,0,0,0,11,5.18V17.84c-1.28-1.6-2.53-3.18-2.72-3.45A3.19,3.19,0,0,0,5.56,12.9a3.37,3.37,0,0,0-3.47,3.48C2.18,18.18,5.66,24.54,8,28c3.54,5.24,6.92,6,7.07,6l.18,0H25.59a.92.92,0,0,0,.55-.19,13.13,13.13,0,0,0,3.75-6.13c1-3.09,1.53-7.53,1.58-13.56ZM28.18,27.12a12.46,12.46,0,0,1-2.94,5.08H15.33c-.47-.14-3.07-1.1-5.87-5.25S3.94,17.27,3.89,16.29a1.5,1.5,0,0,1,.45-1.13,1.52,1.52,0,0,1,1.14-.46,1.43,1.43,0,0,1,1.32.71c.29.43,2.36,3,3.57,4.53L12.8,18.3V5.18a1.48,1.48,0,1,1,2.95,0V16.32h1.8v-13a1.51,1.51,0,0,1,3,0V16.45h1.8V6a1.43,1.43,0,1,1,2.85,0V17.44H27V8.54a1.33,1.33,0,0,1,2.65,0v5.55C29.62,20,29.14,24.21,28.18,27.12Z", "class": "clr-i-outline clr-i-outline-path-1" }), mithril_1.default("rect", { "x": 0, "y": 0, "width": 36, "height": 36, "fill-opacity": 0 }));
    } };
exports.default = CursorHandOpenLine;
