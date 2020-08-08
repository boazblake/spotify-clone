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
var ContainerVolumeLine = { view: function (_a) {
        var attrs = _a.attrs;
        return mithril_1.default("svg", __assign({ "version": 1.1, "width": 36, "height": 36, "viewBox": "0 0 36 36", "preserveAspectRatio": "xMidYMid meet", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }, attrs), mithril_1.default("title", {}, "container-volume-line"), mithril_1.default("path", { "d": "M8,17.58a32.35,32.35,0,0,0,6.3.92,4.13,4.13,0,0,1,.92-1.37,30.94,30.94,0,0,1-7.22-1Z", "class": "clr-i-outline clr-i-outline-path-1" }), mithril_1.default("path", { "d": "M6,28V8.19c.34-.76,4.31-2.11,11-2.11s10.67,1.35,11,2v.3c-.82.79-4.58,2.05-11.11,2.05A33.48,33.48,0,0,1,8,9.44v1.44a35.6,35.6,0,0,0,8.89,1c4.29,0,8.8-.58,11.11-1.82v5.07a5.3,5.3,0,0,1-1.81.88H30V8.12c0-3.19-8.17-4-13-4s-13,.85-13,4V28C4,30.63,9.39,31.68,14,32V30C9.13,29.66,6.28,28.62,6,28Z", "class": "clr-i-outline clr-i-outline-path-2" }), mithril_1.default("path", { "d": "M8,24.28a31.3,31.3,0,0,0,6,.89v-1.4a28.93,28.93,0,0,1-6-.93Z", "class": "clr-i-outline clr-i-outline-path-3" }), mithril_1.default("path", { "d": "M32,18H18a2,2,0,0,0-2,2V32a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V20A2,2,0,0,0,32,18ZM18,32V20H32V32Z", "class": "clr-i-outline clr-i-outline-path-4" }), mithril_1.default("path", { "d": "M21,21.7a.7.7,0,0,0-.7.7v7.49a.7.7,0,0,0,1.4,0V22.4A.7.7,0,0,0,21,21.7Z", "class": "clr-i-outline clr-i-outline-path-5" }), mithril_1.default("path", { "d": "M25,21.82a.7.7,0,0,0-.7.7V30a.7.7,0,1,0,1.4,0V22.52A.7.7,0,0,0,25,21.82Z", "class": "clr-i-outline clr-i-outline-path-6" }), mithril_1.default("path", { "d": "M29,21.7a.7.7,0,0,0-.7.7v7.49a.7.7,0,1,0,1.4,0V22.4A.7.7,0,0,0,29,21.7Z", "class": "clr-i-outline clr-i-outline-path-7" }), mithril_1.default("rect", { "x": 0, "y": 0, "width": 36, "height": 36, "fill-opacity": 0 }));
    } };
exports.default = ContainerVolumeLine;
