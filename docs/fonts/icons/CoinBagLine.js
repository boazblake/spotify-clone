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
var CoinBagLine = { view: function (_a) {
        var attrs = _a.attrs;
        return mithril_1.default("svg", __assign({ "version": 1.1, "width": 36, "height": 36, "viewBox": "0 0 36 36", "preserveAspectRatio": "xMidYMid meet", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }, attrs), mithril_1.default("title", {}, "coin-bag-line"), mithril_1.default("path", { "d": "M21.6,29a1,1,0,0,0-1-1h-6a1,1,0,0,0,0,2h6A1,1,0,0,0,21.6,29Z", "class": "clr-i-outline clr-i-outline-path-1" }), mithril_1.default("path", { "d": "M22.54,24h-6a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z", "class": "clr-i-outline clr-i-outline-path-2" }), mithril_1.default("path", { "d": "M22,32H16a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z", "class": "clr-i-outline clr-i-outline-path-3" }), mithril_1.default("path", { "d": "M32.7,32h-7a1,1,0,0,0,0,2h7a1,1,0,0,0,0-2Z", "class": "clr-i-outline clr-i-outline-path-4" }), mithril_1.default("path", { "d": "M33.7,28h-7a1,1,0,0,0,0,2h7a1,1,0,0,0,0-2Z", "class": "clr-i-outline clr-i-outline-path-5" }), mithril_1.default("path", { "d": "M33.74,26a28,28,0,0,0-2.82-10.12A20.24,20.24,0,0,0,24.6,8.71L27,3.42a1,1,0,0,0-.07-1A1,1,0,0,0,26.13,2H9.8a1,1,0,0,0-.91,1.42l2.45,5.31a20.33,20.33,0,0,0-6.28,7.15c-2.15,4-2.82,8.89-3,12.28a3.6,3.6,0,0,0,1,2.71A3.79,3.79,0,0,0,5.8,31.94H12V30H5.72a1.68,1.68,0,0,1-1.21-.52,1.62,1.62,0,0,1-.45-1.23c.14-2.61.69-7.58,2.76-11.45A18,18,0,0,1,13.08,10h1a30.81,30.81,0,0,0-1.87,2.92,22.78,22.78,0,0,0-1.47,3.34l1.37.92a24,24,0,0,1,1.49-3.47A29.1,29.1,0,0,1,16.05,10h1a21.45,21.45,0,0,1,1.41,5,22.54,22.54,0,0,1,.32,3.86l1.58-1.11a24.15,24.15,0,0,0-.32-3A24.82,24.82,0,0,0,18.76,10h.78l.91-2H13.21L11.36,4H24.57l-2.5,5.47a9.93,9.93,0,0,1,1.23.78,18.63,18.63,0,0,1,5.86,6.57A26.59,26.59,0,0,1,31.73,26Z", "class": "clr-i-outline clr-i-outline-path-6" }), mithril_1.default("rect", { "x": 0, "y": 0, "width": 36, "height": 36, "fill-opacity": 0 }));
    } };
exports.default = CoinBagLine;
