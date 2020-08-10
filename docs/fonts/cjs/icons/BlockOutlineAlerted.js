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
var BlockOutlineAlerted = { view: function (_a) {
        var attrs = _a.attrs;
        return mithril_1.default("svg", __assign({ "version": 1.1, "width": 36, "height": 36, "viewBox": "0 0 36 36", "preserveAspectRatio": "xMidYMid meet", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }, attrs), mithril_1.default("title", {}, "block-outline-alerted"), mithril_1.default("path", { "d": "M30,15.53V26.36L19,31.44V16.64l2.57-1.19a3.67,3.67,0,0,1-2.11-1.22L18,14.9,7.39,10,18,5.1l3.08,1.42,1-1.74L18.42,3.09a1,1,0,0,0-.84,0l-13,6A1,1,0,0,0,4,10V27a1,1,0,0,0,.58.91l13,6a1,1,0,0,0,.84,0l13-6A1,1,0,0,0,32,27V15.53ZM17,31.44,6,26.36V11.56l11,5.08Z", "class": "clr-i-outline--alerted clr-i-outline-path-1--alerted" }), mithril_1.default("path", { "d": "M26.87,1.26l-5.72,9.91a1.28,1.28,0,0,0,1.1,1.92H33.7a1.28,1.28,0,0,0,1.1-1.92L29.08,1.26A1.28,1.28,0,0,0,26.87,1.26Z", "class": "clr-i-outline--alerted clr-i-outline-path-2--alerted clr-i-alert" }), mithril_1.default("rect", { "x": 0, "y": 0, "width": 36, "height": 36, "fill-opacity": 0 }));
    } };
exports.default = BlockOutlineAlerted;