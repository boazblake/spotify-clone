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
var PluginOutlineAlerted = { view: function (_a) {
        var attrs = _a.attrs;
        return mithril_1.default("svg", __assign({ "version": 1.1, "width": 36, "height": 36, "viewBox": "0 0 36 36", "preserveAspectRatio": "xMidYMid meet", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }, attrs), mithril_1.default("title", {}, "plugin-outline-alerted"), mithril_1.default("path", { "d": "M29.81,16H29v-.6H27V18h2.81A3.13,3.13,0,0,1,33,20.69,3,3,0,0,1,32.22,23,3,3,0,0,1,30,24H27v7.83H4V25H5a5,5,0,0,0,5-5.51A5.15,5.15,0,0,0,4.81,15H4V8.83h9V7a3,3,0,0,1,1-2.22A3,3,0,0,1,16.31,4,3.13,3.13,0,0,1,19,7.19V8.83h.66L21,6.59A5.12,5.12,0,0,0,16.51,2,5,5,0,0,0,11,6.83H4a2,2,0,0,0-2,2V17H4.81A3.13,3.13,0,0,1,8,19.69,3,3,0,0,1,7.22,22,3,3,0,0,1,5,23H2v8.83a2,2,0,0,0,2,2H27a2,2,0,0,0,2-2V26h1a5,5,0,0,0,5-5.51A5.15,5.15,0,0,0,29.81,16Z", "class": "clr-i-outline--alerted clr-i-outline-path-1--alerted" }), mithril_1.default("path", { "d": "M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z", "class": "clr-i-outline--alerted clr-i-outline-path-2--alerted clr-i-alert" }), mithril_1.default("rect", { "x": 0, "y": 0, "width": 36, "height": 36, "fill-opacity": 0 }));
    } };
exports.default = PluginOutlineAlerted;
