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
var PinboardLine = { view: function (_a) {
        var attrs = _a.attrs;
        return mithril_1.default("svg", __assign({ "version": 1.1, "width": 36, "height": 36, "viewBox": "0 0 36 36", "preserveAspectRatio": "xMidYMid meet", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }, attrs), mithril_1.default("title", {}, "pinboard-line"), mithril_1.default("path", { "class": "clr-i-outline clr-i-outline-path-1", "d": "M30,30,6,30,6,6H22V4H6A2,2,0,0,0,4,6V30a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V14H30Z" }), mithril_1.default("path", { "class": "clr-i-outline clr-i-outline-path-2", "d": "M33.57,9.33l-7-7a1,1,0,0,0-1.41,1.41l7,7a1,1,0,1,0,1.41-1.41Z" }), mithril_1.default("path", { "class": "clr-i-outline clr-i-outline-path-3", "d": "M22.1,11.19l.7.5L26.46,8,25,6.56,22.51,9.13c-2-.87-4.35.14-5.92,1.68l-.72.71,3.54,3.54-3.67,3.67,1.41,1.41,3.67-3.67L24.37,20l.71-.72c1.54-1.57,2.55-3.92,1.68-5.93l2.54-2.57L27.88,9.38,24.21,13.1l.49.69c.76,1,.25,2.37-.41,3.33L18.77,11.6C19.84,10.86,21.15,10.5,22.1,11.19Z" }), mithril_1.default("rect", { "x": 0, "y": 0, "width": 36, "height": 36, "fill-opacity": 0 }));
    } };
exports.default = PinboardLine;
