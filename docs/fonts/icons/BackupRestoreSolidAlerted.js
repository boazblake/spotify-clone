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
var BackupRestoreSolidAlerted = { view: function (_a) {
        var attrs = _a.attrs;
        return mithril_1.default("svg", __assign({ "version": 1.1, "width": 36, "height": 36, "viewBox": "0 0 36 36", "preserveAspectRatio": "xMidYMid meet", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }, attrs), mithril_1.default("title", {}, "backup-restore-solid-alerted"), mithril_1.default("path", { "class": "clr-i-solid--alerted clr-i-solid-path-1--alerted", "d": "M2,24v6a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V24Zm28,5H26V27h4Z" }), mithril_1.default("path", { "class": "clr-i-solid--alerted clr-i-solid-path-2--alerted", "d": "M13,9.92,17,6V18a1,1,0,1,0,2,0V6l1.47,1.46,1-1.79L18,2.16,11.61,8.5A1,1,0,0,0,13,9.92Z" }), mithril_1.default("path", { "class": "clr-i-solid--alerted clr-i-solid-path-3--alerted", "d": "M31.58,15.4H22.23A3.62,3.62,0,0,1,21,15.16V18a3,3,0,1,1-6,0V12H7.07a1.92,1.92,0,0,0-1.9,1.32C2.86,19.68,2.24,21.43,2.07,22H33.93C33.79,21.49,33.28,20.07,31.58,15.4Z" }), mithril_1.default("path", { "class": "clr-i-solid--alerted clr-i-solid-path-4--alerted clr-i-alert", "d": "M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" }), mithril_1.default("rect", { "x": 0, "y": 0, "width": 36, "height": 36, "fill-opacity": 0 }));
    } };
exports.default = BackupRestoreSolidAlerted;
