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
var OnHolidayLine = { view: function (_a) {
        var attrs = _a.attrs;
        return mithril_1.default("svg", __assign({ "xmlns": "http://www.w3.org/2000/svg", "width": 36, "height": 36, "viewBox": "0 0 36 36" }, attrs), mithril_1.default("title", {}, "on_holiday_line"), mithril_1.default("g", { "id": "f480c694-f677-4903-80aa-d0d09a602dd7", "data-name": "Layer 3" }, mithril_1.default("path", { "d": "M18.08,2.34c-8.82,0-16,6.28-16,14s7.18,14,16,14A17.91,17.91,0,0,0,23,29.66l5.53,3.52a1,1,0,0,0,1.38-.3,1,1,0,0,0,.16-.54V25.61a13,13,0,0,0,4-9.27C34.08,8.62,26.9,2.34,18.08,2.34ZM28.37,24.45a1,1,0,0,0-.32.73v5.34l-4.38-2.79a1,1,0,0,0-.83-.11,16,16,0,0,1-4.76.72c-7.72,0-14-5.38-14-12s6.28-12,14-12,14,5.38,14,12A11.1,11.1,0,0,1,28.37,24.45Z" }), mithril_1.default("path", { "d": "M31.1,15.82,31,15.67,28.5,13.44a3.25,3.25,0,0,0-2.39-.84l-5.38.34-3.59-3a.81.81,0,0,0-.52-.19H13.56a.78.78,0,0,0-.69.4.77.77,0,0,0,0,.79l1.36,2.44-4.71.29,1.31,1.52,15.39-1a1.65,1.65,0,0,1,1.22.43l2.36,2.13a.11.11,0,0,1,0,.07c0,.06-.09.05-.1.06H21.82l-.35.37-5.19,5.53H14.64l2.73-5.9H8.54L7.13,14.16,6.51,13a.8.8,0,0,0-1-.2A.81.81,0,0,0,5.2,13.9l2,3.94a1.21,1.21,0,0,0,1.08.65h6.57l-1.94,4.18A1.2,1.2,0,0,0,13,23.83a1.22,1.22,0,0,0,1,.56h2.43a1.17,1.17,0,0,0,.88-.39l5.18-5.51h7.16a1.65,1.65,0,0,0,1.52-.91A1.74,1.74,0,0,0,31.1,15.82ZM14.92,11.31h1.41l2.09,1.77L16,13.23Z" })));
    } };
exports.default = OnHolidayLine;
