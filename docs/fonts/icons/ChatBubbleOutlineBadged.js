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
var ChatBubbleOutlineBadged = { view: function (_a) {
        var attrs = _a.attrs;
        return mithril_1.default("svg", __assign({ "version": 1.1, "width": 36, "height": 36, "viewBox": "0 0 36 36", "preserveAspectRatio": "xMidYMid meet", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }, attrs), mithril_1.default("title", {}, "chat-bubble-outline-badged"), mithril_1.default("path", { "d": "M33.38,12.69a7.43,7.43,0,0,1-1.89.66A10.35,10.35,0,0,1,32,16.5a11.08,11.08,0,0,1-3.71,8.11,1,1,0,0,0-.32.73l0,5.34-4.38-2.79a1,1,0,0,0-.83-.11A16,16,0,0,1,18,28.5c-7.72,0-14-5.38-14-12s6.28-12,14-12a16,16,0,0,1,4.55.66A7.44,7.44,0,0,1,23,3.22a18,18,0,0,0-5-.72c-8.82,0-16,6.28-16,14s7.18,14,16,14a18,18,0,0,0,4.88-.68l5.53,3.52a1,1,0,0,0,1.54-.84l0-6.73a13,13,0,0,0,4-9.27A12.32,12.32,0,0,0,33.38,12.69Z", "class": "clr-i-outline--badged clr-i-outline-path-1--badged" }), mithril_1.default("path", { "d": "M11,15.5a1,1,0,0,0,0,2H25a1,1,0,0,0,0-2Z", "class": "clr-i-outline--badged clr-i-outline-path-2--badged" }), mithril_1.default("path", { "d": "M14.25,20.5a1,1,0,0,0,0,2h7.5a1,1,0,0,0,0-2Z", "class": "clr-i-outline--badged clr-i-outline-path-3--badged" }), mithril_1.default("path", { "d": "M10.28,11.5a1,1,0,0,0,1,1H24.72a1,1,0,0,0,.83-.47A7.53,7.53,0,0,1,24,10.5H11.28A1,1,0,0,0,10.28,11.5Z", "class": "clr-i-outline--badged clr-i-outline-path-4--badged" }), mithril_1.default("circle", { "cx": 30, "cy": 6, "r": 5, "class": "clr-i-outline--badged clr-i-outline-path-5--badged clr-i-badge" }), mithril_1.default("rect", { "x": 0, "y": 0, "width": 36, "height": 36, "fill-opacity": 0 }));
    } };
exports.default = ChatBubbleOutlineBadged;
