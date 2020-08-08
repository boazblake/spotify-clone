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
var HardDriveSolid = { view: function (_a) {
        var attrs = _a.attrs;
        return mithril_1.default("svg", __assign({ "version": 1.1, "width": 36, "height": 36, "viewBox": "0 0 36 36", "preserveAspectRatio": "xMidYMid meet", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }, attrs), mithril_1.default("title", {}, "hard-drive-solid"), mithril_1.default("path", { "d": "M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6ZM12,17.16l1.54.42a1.64,1.64,0,0,0-.08.5,2,2,0,1,0,2-2,2.08,2.08,0,0,0-.5.07l-.41-1.54a3.84,3.84,0,0,1,.91-.13,3.59,3.59,0,1,1-3.59,3.59A3.53,3.53,0,0,1,12,17.16ZM5.31,8A1.25,1.25,0,1,1,4.06,9.25,1.25,1.25,0,0,1,5.31,8Zm0,20.06a1.25,1.25,0,1,1,1.25-1.25A1.25,1.25,0,0,1,5.31,28.06Zm10.16-.73A9.22,9.22,0,0,1,6.54,15.7l1.55.41a7.55,7.55,0,0,0-.27,2,7.64,7.64,0,0,0,14.84,2.57h1.68A9.25,9.25,0,0,1,15.47,27.33Zm12-8.7h-6.5a.8.8,0,0,1,0-1.6H23a7.66,7.66,0,0,0-7.57-6.6,7.86,7.86,0,0,0-2,.26l-.42-1.54a9.36,9.36,0,0,1,2.38-.32A9.26,9.26,0,0,1,24.66,17h2.76a.8.8,0,0,1,0,1.6Zm3.39,9.43a1.25,1.25,0,1,1,1.25-1.25A1.25,1.25,0,0,1,30.81,28.06Zm0-17.56a1.25,1.25,0,1,1,1.25-1.25A1.25,1.25,0,0,1,30.81,10.5Z", "class": "clr-i-solid clr-i-solid-path-1" }), mithril_1.default("rect", { "x": 0, "y": 0, "width": 36, "height": 36, "fill-opacity": 0 }));
    } };
exports.default = HardDriveSolid;
