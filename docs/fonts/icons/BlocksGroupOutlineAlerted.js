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
var BlocksGroupOutlineAlerted = { view: function (_a) {
        var attrs = _a.attrs;
        return mithril_1.default("svg", __assign({ "version": 1.1, "width": 36, "height": 36, "viewBox": "0 0 36 36", "preserveAspectRatio": "xMidYMid meet", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }, attrs), mithril_1.default("title", {}, "blocks-group-outline-alerted"), mithril_1.default("path", { "d": "M33.53,18.76,26.6,15.57h-2v0l-6.5,3-6.5-3V8l6.08,2.8a1,1,0,0,0,.84,0l.24-.11a4.17,4.17,0,0,1,.29-.65l1.33-2.31-2.28,1L13,6.43l5.1-2.35,3.47,1.6,1-1.73L18.5,2.08a1,1,0,0,0-.84,0l-7.5,3.45a1,1,0,0,0-.58.91v9.14l-6.9,3.18a1,1,0,0,0-.58.91v9.78a1,1,0,0,0,.58.91l7.5,3.45a1,1,0,0,0,.84,0l7.08-3.26,7.08,3.26a1,1,0,0,0,.84,0l7.5-3.45a1,1,0,0,0,.58-.91V19.67A1,1,0,0,0,33.53,18.76ZM10.6,17.31l5.11,2.35L10.6,22,5.49,19.67Zm0,14.49-6.5-3V21.23L10.18,24A1,1,0,0,0,11,24l6.08-2.8,0,7.6Zm15-14.48,5.11,2.35L25.61,22,20.5,19.67Zm0,14.49-6.51-3V21.22L25.19,24A1,1,0,0,0,26,24l6.08-2.8,0,7.61Z", "class": "clr-i-outline--alerted clr-i-outline-path-1--alerted" }), mithril_1.default("path", { "d": "M26.85,1.14l-5.72,9.91A1.27,1.27,0,0,0,22.23,13H33.68a1.27,1.27,0,0,0,1.1-1.91L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z", "class": "clr-i-outline--alerted clr-i-outline-path-2--alerted clr-i-alert" }), mithril_1.default("rect", { "x": 0, "y": 0, "width": 36, "height": 36, "fill-opacity": 0 }));
    } };
exports.default = BlocksGroupOutlineAlerted;
