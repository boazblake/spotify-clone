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
var GridChartSolidBadged = { view: function (_a) {
        var attrs = _a.attrs;
        return mithril_1.default("svg", __assign({ "version": 1.1, "width": 36, "height": 36, "viewBox": "0 0 36 36", "preserveAspectRatio": "xMidYMid meet", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }, attrs), mithril_1.default("title", {}, "grid-chart-solid-badged"), mithril_1.default("path", { "class": "clr-i-solid--badged clr-i-solid-path-1--badged", "d": "M 15 17 L 4 17 C 2.895 17 2 16.105 2 15 L 2 8 C 2 6.895 2.895 6 4 6 L 15 6 C 16.105 6 17 6.895 17 8 L 17 15 C 17 16.105 16.105 17 15 17 Z" }), mithril_1.default("path", { "class": "clr-i-solid--badged clr-i-solid-path-2--badged", "d": "M 32 17 L 21 17 C 19.895 17 19 16.105 19 15 L 19 8 C 19 6.895 19.895 6 21 6 L 22.59 6 C 22.59 6.019 22.59 6.037 22.59 6.056 C 22.59 10.141 25.901 13.452 29.986 13.452 C 31.466 13.452 32.844 13.018 34 12.269 L 34 15 C 34 16.105 33.105 17 32 17 Z" }), mithril_1.default("path", { "class": "clr-i-solid--badged clr-i-solid-path-3--badged", "d": "M 15 30 L 4 30 C 2.895 30 2 29.105 2 28 L 2 21 C 2 19.895 2.895 19 4 19 L 15 19 C 16.105 19 17 19.895 17 21 L 17 28 C 17 29.105 16.105 30 15 30 Z" }), mithril_1.default("path", { "class": "clr-i-solid--badged clr-i-solid-path-4--badged", "d": "M 32 30 L 21 30 C 19.895 30 19 29.105 19 28 L 19 21 C 19 19.895 19.895 19 21 19 L 32 19 C 33.105 19 34 19.895 34 21 L 34 28 C 34 29.105 33.105 30 32 30 Z" }), mithril_1.default("circle", { "class": "clr-i-solid--badged clr-i-solid-path-5--badged clr-i-badge", "cx": 30, "cy": 6, "r": 5 }), mithril_1.default("rect", { "x": 0, "y": 0, "width": 36, "height": 36, "fill-opacity": 0 }));
    } };
exports.default = GridChartSolidBadged;
