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
var GridChartSolidAlerted = { view: function (_a) {
        var attrs = _a.attrs;
        return mithril_1.default("svg", __assign({ "version": 1.1, "width": 36, "height": 36, "viewBox": "0 0 36 36", "preserveAspectRatio": "xMidYMid meet", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }, attrs), mithril_1.default("title", {}, "grid-chart-solid-alerted"), mithril_1.default("path", { "class": "clr-i-solid--alerted clr-i-solid-path-1--alerted", "d": "M 15 17 L 4 17 C 2.895 17 2 16.105 2 15 L 2 8 C 2 6.895 2.895 6 4 6 L 15 6 C 16.105 6 17 6.895 17 8 L 17 15 C 17 16.105 16.105 17 15 17 Z" }), mithril_1.default("path", { "class": "clr-i-solid--alerted clr-i-solid-path-2--alerted", "d": "M 32 17 L 21 17 C 20.014 17 19.195 16.287 19.03 15.348 C 19.041 15.349 19.053 15.35 19.064 15.351 C 19.134 15.357 19.201 15.359 19.27 15.357 L 33.968 15.357 C 33.8 16.292 32.983 17 32 17 Z M 19 8 C 19 6.895 19.895 6 21 6 L 21.372 6 L 19 10.048 Z" }), mithril_1.default("path", { "class": "clr-i-solid--alerted clr-i-solid-path-3--alerted", "d": "M 15 30 L 4 30 C 2.895 30 2 29.105 2 28 L 2 21 C 2 19.895 2.895 19 4 19 L 15 19 C 16.105 19 17 19.895 17 21 L 17 28 C 17 29.105 16.105 30 15 30 Z" }), mithril_1.default("path", { "class": "clr-i-solid--alerted clr-i-solid-path-4--alerted", "d": "M 32 30 L 21 30 C 19.895 30 19 29.105 19 28 L 19 21 C 19 19.895 19.895 19 21 19 L 32 19 C 33.105 19 34 19.895 34 21 L 34 28 C 34 29.105 33.105 30 32 30 Z" }), mithril_1.default("path", { "class": "clr-i-solid--alerted clr-i-solid-path-5--alerted clr-i-alert", "d": "M 26.854 1.144 L 21.134 11.004 C 20.579 11.818 21.114 12.928 22.097 13.001 C 22.142 13.005 22.188 13.006 22.234 13.004 L 33.684 13.004 C 34.669 13.036 35.319 11.991 34.855 11.122 C 34.834 11.081 34.81 11.042 34.784 11.004 L 29.064 1.144 C 28.57 0.299 27.348 0.299 26.854 1.144 Z" }), mithril_1.default("rect", { "x": 0, "y": 0, "width": 36, "height": 36, "fill-opacity": 0 }));
    } };
exports.default = GridChartSolidAlerted;
