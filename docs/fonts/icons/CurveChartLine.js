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
var CurveChartLine = { view: function (_a) {
        var attrs = _a.attrs;
        return mithril_1.default("svg", __assign({ "version": 1.1, "width": 36, "height": 36, "viewBox": "0 0 36 36", "preserveAspectRatio": "xMidYMid meet", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }, attrs), mithril_1.default("title", {}, "curve-chart-line"), mithril_1.default("path", { "class": "clr-i-outline clr-i-outline-path-1", "d": "M 32 5 L 4 5 C 2.895 5 2 5.895 2 7 L 2 29 C 2 30.105 2.895 31 4 31 L 32 31 C 33.105 31 34 30.105 34 29 L 34 7 C 34 5.895 33.105 5 32 5 Z M 4 29 L 4 7 L 32 7 L 32 29 Z" }), mithril_1.default("path", { "d": "M 7 11.8 C 6.558 11.8 6.2 11.442 6.2 11 C 6.2 10.558 6.558 10.2 7 10.2 L 13 10.2 C 15.404 10.2 16.368 11.907 17.653 16.478 C 17.695 16.628 17.744 16.803 17.835 17.129 C 17.909 17.392 17.964 17.588 18.019 17.78 C 19.332 22.375 20.549 24.2 23 24.2 L 29 24.2 C 29.442 24.2 29.8 24.558 29.8 25 C 29.8 25.442 29.442 25.8 29 25.8 L 23 25.8 C 19.535 25.8 17.981 23.469 16.481 18.22 C 16.425 18.025 16.369 17.826 16.295 17.56 C 16.203 17.234 16.154 17.06 16.113 16.911 C 15.043 13.105 14.305 11.8 13 11.8 L 7 11.8 Z", "class": "clr-i-outline clr-i-outline-path-2" }), mithril_1.default("rect", { "x": 0, "y": 0, "width": 36, "height": 36, "fill-opacity": 0 }));
    } };
exports.default = CurveChartLine;
