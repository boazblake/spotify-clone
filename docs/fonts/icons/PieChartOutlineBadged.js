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
var PieChartOutlineBadged = { view: function (_a) {
        var attrs = _a.attrs;
        return mithril_1.default("svg", __assign({ "version": 1.1, "width": 36, "height": 36, "viewBox": "0 0 36 36", "preserveAspectRatio": "xMidYMid meet", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }, attrs), mithril_1.default("title", {}, "pie-chart-outline-badged"), mithril_1.default("path", { "class": "clr-i-outline--badged clr-i-outline-path-1--badged", "d": "M 32 13.22 L 32 29 L 4 29 L 4 7 L 22.57 7 C 22.524 6.668 22.501 6.334 22.5 6 C 22.501 5.665 22.524 5.331 22.57 5 L 4 5 C 2.895 5 2 5.895 2 7 L 2 29 C 2 30.104 2.895 31 4 31 L 32 31 C 33.104 31 34 30.104 34 29 L 34 12.34 C 33.38 12.73 32.706 13.026 32 13.22 Z" }), mithril_1.default("path", { "d": "M 17 27 C 12.582 27 9 23.418 9 19 C 9 14.582 12.582 11 17 11 L 17 19 L 25 19 C 25 23.418 21.418 27 17 27 Z M 23.247 20.4 L 15.4 20.4 L 15.4 12.802 C 12.64 13.513 10.601 16.018 10.6 19 C 10.6 22.535 13.465 25.4 17 25.4 C 20.054 25.401 22.608 23.261 23.247 20.4 Z", "class": "clr-i-outline--badged clr-i-outline-path-2--badged" }), mithril_1.default("path", { "d": "M 19 9 C 23.418 9 27 12.582 27 17 L 19 17 Z M 25.198 15.4 C 24.62 13.15 22.849 11.38 20.6 10.801 L 20.6 15.4 Z", "class": "clr-i-outline--badged clr-i-outline-path-3--badged" }), mithril_1.default("circle", { "class": "clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge", "cx": 30, "cy": 6, "r": 5 }), mithril_1.default("rect", { "x": 0, "y": 0, "width": 36, "height": 36, "fill-opacity": 0 }));
    } };
exports.default = PieChartOutlineBadged;
