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
var BubbleChartOutlineAlerted = { view: function (_a) {
        var attrs = _a.attrs;
        return mithril_1.default("svg", __assign({ "version": 1.1, "width": 36, "height": 36, "viewBox": "0 0 36 36", "preserveAspectRatio": "xMidYMid meet", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }, attrs), mithril_1.default("title", {}, "bubble-chart-outline-alerted"), mithril_1.default("path", { "class": "clr-i-outline--alerted clr-i-outline-path-1--alerted", "d": "M 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.895 31 2 30.105 2 29 L 2 7 C 2 5.895 2.895 5 4 5 L 21.958 5 L 20.786 7 L 4 7 L 4 29 L 32 29 L 32 15.357 L 34 15.357 Z" }), mithril_1.default("path", { "d": "M 29 18 C 29 19.657 27.657 21 26 21 C 24.343 21 23 19.657 23 18 C 23 16.343 24.343 15 26 15 C 27.657 15 29 16.343 29 18 Z M 26 16.6 C 25.227 16.6 24.6 17.227 24.6 18 C 24.6 18.773 25.227 19.4 26 19.4 C 26.773 19.4 27.4 18.773 27.4 18 C 27.4 17.227 26.773 16.6 26 16.6 Z", "class": "clr-i-outline--alerted clr-i-outline-path-2--alerted", "rx": 3 }), mithril_1.default("path", { "d": "M 15 14 C 15 16.209 13.209 18 11 18 C 8.791 18 7 16.209 7 14 C 7 11.791 8.791 10 11 10 C 13.209 10 15 11.791 15 14 Z M 11 11.6 C 9.675 11.6 8.6 12.675 8.6 14 C 8.6 15.325 9.675 16.4 11 16.4 C 12.325 16.4 13.4 15.325 13.4 14 C 13.4 12.675 12.325 11.6 11 11.6 Z", "class": "clr-i-outline--alerted clr-i-outline-path-3--alerted", "rx": 3 }), mithril_1.default("path", { "d": "M 21 23 C 21 24.657 19.657 26 18 26 C 16.343 26 15 24.657 15 23 C 15 21.343 16.343 20 18 20 C 19.657 20 21 21.343 21 23 Z M 18 21.6 C 17.227 21.6 16.6 22.227 16.6 23 C 16.6 23.773 17.227 24.4 18 24.4 C 18.773 24.4 19.4 23.773 19.4 23 C 19.4 22.227 18.773 21.6 18 21.6 Z", "class": "clr-i-outline--alerted clr-i-outline-path-4--alerted", "rx": 3 }), mithril_1.default("path", { "class": "clr-i-outline--alerted clr-i-outline-path-5--alerted clr-i-alert", "d": "M 26.854 1.144 L 21.134 11.004 C 20.579 11.818 21.114 12.928 22.097 13.001 C 22.142 13.005 22.188 13.006 22.234 13.004 L 33.684 13.004 C 34.669 13.036 35.319 11.991 34.855 11.122 C 34.834 11.081 34.81 11.042 34.784 11.004 L 29.064 1.144 C 28.57 0.299 27.348 0.299 26.854 1.144 Z" }), mithril_1.default("rect", { "x": 0, "y": 0, "width": 36, "height": 36, "fill-opacity": 0 }));
    } };
exports.default = BubbleChartOutlineAlerted;
