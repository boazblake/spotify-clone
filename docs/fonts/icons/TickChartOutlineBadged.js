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
var TickChartOutlineBadged = { view: function (_a) {
        var attrs = _a.attrs;
        return mithril_1.default("svg", __assign({ "version": 1.1, "width": 36, "height": 36, "viewBox": "0 0 36 36", "preserveAspectRatio": "xMidYMid meet", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }, attrs), mithril_1.default("title", {}, "tick-chart-outline-badged"), mithril_1.default("path", { "class": "clr-i-outline--badged clr-i-outline-path-1--badged", "d": "M 32 13.22 L 32 29 L 4 29 L 4 7 L 22.57 7 C 22.524 6.668 22.501 6.334 22.5 6 C 22.501 5.665 22.524 5.331 22.57 5 L 4 5 C 2.895 5 2 5.895 2 7 L 2 29 C 2 30.104 2.895 31 4 31 L 32 31 C 33.104 31 34 30.104 34 29 L 34 12.34 C 33.38 12.73 32.706 13.026 32 13.22 Z" }), mithril_1.default("path", { "class": "clr-i-outline--badged clr-i-outline-path-2--badged", "d": "M 6 25 L 8 25 L 8 22 L 10 22 L 10 25 L 13 25 L 13 22 L 15 22 L 15 25 L 18 25 L 18 22 L 20 22 L 20 25 L 23 25 L 23 22 L 25 22 L 25 25 L 27.723 25 C 28.023 25.02 28.293 25.18 28.463 25.43 C 28.903 26.06 28.483 26.93 27.723 26.99 L 6 26.991 Z" }), mithril_1.default("circle", { "class": "clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge", "cx": 30, "cy": 6, "r": 5 }), mithril_1.default("rect", { "x": 0, "y": 0, "width": 36, "height": 36, "fill-opacity": 0 }));
    } };
exports.default = TickChartOutlineBadged;
