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
var SuperscriptLine = { view: function (_a) {
        var attrs = _a.attrs;
        return mithril_1.default("svg", __assign({ "version": 1.1, "width": 36, "height": 36, "viewBox": "0 0 36 36", "preserveAspectRatio": "xMidYMid meet", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }, attrs), mithril_1.default("title", {}, "superscript-line"), mithril_1.default("path", { "d": "M14.43,18l6.79,8.6a1.17,1.17,0,0,1-.92,1.9h0a1.17,1.17,0,0,1-.92-.44l-6.44-8.13L6.47,28a1.17,1.17,0,0,1-.92.44h0a1.17,1.17,0,0,1-.92-1.9L11.43,18l-6.8-8.6a1.17,1.17,0,0,1,.92-1.9h0A1.2,1.2,0,0,1,6.51,8l6.43,8.13L19.38,8a1.17,1.17,0,0,1,.92-.44h0a1.17,1.17,0,0,1,.92,1.9Z", "class": "clr-i-outline clr-i-outline-path-1" }), mithril_1.default("path", { "d": "M22.85,14.47l4.51-3.85a9.37,9.37,0,0,0,1.88-2,3.43,3.43,0,0,0,.59-1.86,2.27,2.27,0,0,0-.36-1.27,2.38,2.38,0,0,0-.95-.83,2.77,2.77,0,0,0-1.26-.29,3.39,3.39,0,0,0-1.83.5,5.83,5.83,0,0,0-1.49,1.42l-1-.81a5.12,5.12,0,0,1,4.36-2.37,4.36,4.36,0,0,1,2,.45,3.47,3.47,0,0,1,2,3.18A4.44,4.44,0,0,1,30.58,9a11.14,11.14,0,0,1-2.24,2.46L25.1,14.31h6.28v1.33H22.85Z", "class": "clr-i-outline clr-i-outline-path-2" }), mithril_1.default("rect", { "x": 0, "y": 0, "width": 36, "height": 36, "fill-opacity": 0 }));
    } };
exports.default = SuperscriptLine;
