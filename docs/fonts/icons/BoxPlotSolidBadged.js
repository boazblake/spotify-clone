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
var BoxPlotSolidBadged = { view: function (_a) {
        var attrs = _a.attrs;
        return mithril_1.default("svg", __assign({ "version": 1.1, "width": 36, "height": 36, "viewBox": "0 0 36 36", "preserveAspectRatio": "xMidYMid meet", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }, attrs), mithril_1.default("title", {}, "box-plot-solid-badged"), mithril_1.default("path", { "class": "clr-i-solid--badged clr-i-solid-path-1--badged", "d": "M 34 12.34 L 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.895 31 2 30.105 2 29 L 2 7 C 2 5.895 2.895 5 4 5 L 22.57 5 C 22.312 6.817 22.732 8.566 23.633 10 L 19 10 L 19 24 L 29 24 L 29 13.427 C 29.103 13.44 29.206 13.451 29.31 13.46 L 30.32 13.48 C 31.625 13.429 32.895 13.036 34 12.34 Z M 7 26 L 17 26 L 17 12 L 7 12 Z M 9 19 L 15 19 L 15 24 L 9 24 Z M 15 17 L 9 17 L 9 14 L 15 14 Z M 21 12 L 25.472 12 C 25.94 12.352 26.452 12.65 27 12.885 L 27 17 L 21 17 Z M 27 22 L 21 22 L 21 19 L 27 19 Z" }), mithril_1.default("circle", { "class": "clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge", "cx": 30, "cy": 6, "r": 5 }), mithril_1.default("rect", { "x": 0, "y": 0, "width": 36, "height": 36, "fill-opacity": 0 }));
    } };
exports.default = BoxPlotSolidBadged;
