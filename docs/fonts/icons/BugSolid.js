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
var BugSolid = { view: function (_a) {
        var attrs = _a.attrs;
        return mithril_1.default("svg", __assign({ "version": 1.1, "width": 36, "height": 36, "viewBox": "0 0 36 36", "preserveAspectRatio": "xMidYMid meet", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }, attrs), mithril_1.default("title", {}, "bug-solid"), mithril_1.default("path", { "class": "clr-i-solid clr-i-solid-path-1", "d": "M30.83,20H29a19.29,19.29,0,0,0-1.18-5.73l1.46-.79a1,1,0,0,0-.95-1.76l-3,1.28H10.78L7.7,11.72a1,1,0,0,0-.95,1.76l1.5.8A19.38,19.38,0,0,0,7.07,20H5.17a1,1,0,0,0,0,2H7.1a14.62,14.62,0,0,0,1.66,6.17L6.87,29.49A1,1,0,1,0,8,31.12l1.84-1.29A10.29,10.29,0,0,0,17,33.6V15h2V33.6a10.29,10.29,0,0,0,7.16-3.75L28,31.12a1,1,0,1,0,1.15-1.64l-1.86-1.3A14.61,14.61,0,0,0,28.94,22h1.89a1,1,0,0,0,0-2ZM10.91,17.74a1.95,1.95,0,1,1,1.95,1.95A1.95,1.95,0,0,1,10.91,17.74ZM14,27.46a1.58,1.58,0,1,1,1.58-1.58A1.58,1.58,0,0,1,14,27.46Zm8.43,0A1.58,1.58,0,1,1,24,25.88,1.58,1.58,0,0,1,22.42,27.46Zm1.13-7.77a1.95,1.95,0,1,1,1.95-1.95A1.95,1.95,0,0,1,23.56,19.69Z" }), mithril_1.default("path", { "class": "clr-i-solid clr-i-solid-path-2", "d": "M11.23,5.26a1.67,1.67,0,0,0,.54-.32,5.9,5.9,0,0,1,.89.58,7.44,7.44,0,0,1,.95.94A18.48,18.48,0,0,0,10.79,9.7c-.4.57.09,1.28.86,1.28H24.44c.77,0,1.26-.71.86-1.28a18.38,18.38,0,0,0-2.88-3.28,7.28,7.28,0,0,1,.91-.9,5.9,5.9,0,0,1,.89-.58,1.69,1.69,0,1,0-.56-1.51,7.49,7.49,0,0,0-1.32.83,9.06,9.06,0,0,0-1.19,1.18A5.85,5.85,0,0,0,18,4.3a5.91,5.91,0,0,0-3.17,1.19,9.2,9.2,0,0,0-1.22-1.21,7.49,7.49,0,0,0-1.32-.83,1.68,1.68,0,1,0-1.11,1.83Z" }), mithril_1.default("rect", { "x": 0, "y": 0, "width": 36, "height": 36, "fill-opacity": 0 }));
    } };
exports.default = BugSolid;
