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
var WorldLine = { view: function (_a) {
        var attrs = _a.attrs;
        return mithril_1.default("svg", __assign({ "version": 1.1, "width": 36, "height": 36, "viewBox": "0 0 36 36", "preserveAspectRatio": "xMidYMid meet", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }, attrs), mithril_1.default("title", {}, "world-line"), mithril_1.default("path", { "d": "M26.54,18a19.38,19.38,0,0,0-.43-4h3.6a12.3,12.3,0,0,0-.67-1.6H25.69A19.72,19.72,0,0,0,22.8,6.53a12.3,12.3,0,0,0-2.55-.76,17.83,17.83,0,0,1,3.89,6.59H18.75V5.6c-.25,0-.51,0-.77,0s-.49,0-.73,0v6.77H11.86a17.83,17.83,0,0,1,3.9-6.6,12.28,12.28,0,0,0-2.54.75,19.72,19.72,0,0,0-2.91,5.85H6.94A12.3,12.3,0,0,0,6.26,14H9.89a19.38,19.38,0,0,0-.43,4,19.67,19.67,0,0,0,.5,4.37H6.42A12.34,12.34,0,0,0,7.16,24h3.23a19.32,19.32,0,0,0,2.69,5.36,12.28,12.28,0,0,0,2.61.79A17.91,17.91,0,0,1,12,24h5.26v6.34c.24,0,.49,0,.73,0s.51,0,.77,0V24H24a17.9,17.9,0,0,1-3.7,6.15,12.28,12.28,0,0,0,2.62-.81A19.32,19.32,0,0,0,25.61,24h3.2a12.34,12.34,0,0,0,.74-1.6H26A19.67,19.67,0,0,0,26.54,18Zm-9.29,4.37H11.51a17.69,17.69,0,0,1-.09-8.4h5.83Zm7.24,0H18.75V14h5.83A18.21,18.21,0,0,1,25,18,18.12,18.12,0,0,1,24.49,22.37Z", "class": "clr-i-outline clr-i-outline-path-1" }), mithril_1.default("path", { "d": "M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm0,30A14,14,0,1,1,32,18,14,14,0,0,1,18,32Z", "class": "clr-i-outline clr-i-outline-path-2" }), mithril_1.default("rect", { "x": 0, "y": 0, "width": 36, "height": 36, "fill-opacity": 0 }));
    } };
exports.default = WorldLine;