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
var AirplaneSolid = { view: function (_a) {
        var attrs = _a.attrs;
        return mithril_1.default("svg", __assign({ "version": 1.1, "width": 36, "height": 36, "viewBox": "0 0 36 36", "preserveAspectRatio": "xMidYMid meet", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }, attrs), mithril_1.default("title", {}, "airplane-solid"), mithril_1.default("path", { "class": "clr-i-solid clr-i-solid-path-1", "d": "M6.25,11.5,12,13.16l6.32-4.59-9.07.26A.52.52,0,0,0,9,8.91L6.13,10.56A.51.51,0,0,0,6.25,11.5Z" }), mithril_1.default("path", { "class": "clr-i-solid clr-i-solid-path-2", "d": "M34.52,6.36,28.22,5a3.78,3.78,0,0,0-3.07.67L6.12,19.5l-4.57-.2a1.25,1.25,0,0,0-.83,2.22l4.45,3.53a.55.55,0,0,0,.53.09c1.27-.49,6-3,11.59-6.07l1.12,11.51a.55.55,0,0,0,.9.37l2.5-2.08a.76.76,0,0,0,.26-.45l2.37-13.29c4-2.22,7.82-4.37,10.51-5.89A1.55,1.55,0,0,0,34.52,6.36Z" }), mithril_1.default("rect", { "x": 0, "y": 0, "width": 36, "height": 36, "fill-opacity": 0 }));
    } };
exports.default = AirplaneSolid;
