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
var RecycleLine = { view: function (_a) {
        var attrs = _a.attrs;
        return mithril_1.default("svg", __assign({ "version": 1.1, "width": 36, "height": 36, "viewBox": "0 0 36 36", "preserveAspectRatio": "xMidYMid meet", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }, attrs), mithril_1.default("title", {}, "recycle-line"), mithril_1.default("path", { "d": "M6.4,17.4c0.2,0.1,0.3,0.1,0.5,0.1c0.2,0,0.4-0.1,0.5-0.1l7-4.1c0.3-0.2,0.5-0.5,0.5-0.9c0-0.4-0.2-0.7-0.5-0.9L11.9,10\n\t\tL14,6.2c0.4-0.7,1-1.3,1.7-1.7c2-1.1,4.5-0.3,5.6,1.7c0.3,0.5,0.9,0.6,1.4,0.3c0,0,0,0,0.1,0c0.4-0.3,0.5-0.9,0.3-1.3\n\t\tc-0.6-1-1.4-1.9-2.4-2.4c-3-1.6-6.7-0.6-8.3,2.4L9.6,9.9c-0.3,0.5-0.1,1.1,0.3,1.4l2,1.2l-4,2.4V8.2c0-0.6-0.4-1-1-1\n\t\tC6.4,7.3,6,7.7,6,8.3v8.3C6,16.9,6.2,17.2,6.4,17.4z", "class": "clr-i-outline clr-i-outline-path-1" }), mithril_1.default("path", { "d": "M32.1,21l-3.5-6.2c-0.1-0.2-0.4-0.4-0.6-0.5c-0.3-0.1-0.5,0-0.8,0.1l-2.2,1.3V11l5.5,3.3c0.1,0,0.1,0.1,0.2,0.1\n\t\tc0.5,0.2,1.1,0,1.3-0.5c0.2-0.5,0-1.1-0.5-1.3l-7-4.2c-0.3-0.2-0.7-0.2-1,0C23.1,8.5,23,8.8,23,9.2v8.3c0,0.4,0.1,0.8,0.4,1\n\t\tc0.3,0.2,0.7,0.2,1,0l2.9-1.7l3,5.3c0.7,1.3,0.7,2.8,0,4.1c-0.6,1.2-1.9,1.9-3.2,1.9h-0.9c-0.5,0-1.2,0.4-1.2,1\n\t\tc0.1,0.6,0.6,1,1.2,1h0.9c2.1,0,4-1.1,5-2.9C33.2,25.2,33.2,22.9,32.1,21z", "class": "clr-i-outline clr-i-outline-path-2" }), mithril_1.default("path", { "d": "M22.4,28.2l-7-4.2c-0.3-0.2-0.7-0.2-1,0c-0.3,0.2-0.4,0.5-0.4,0.9v3.3H9.1c-1.5-0.1-2.9-0.9-3.6-2.3\n\t\tc-0.8-1.4-0.8-3.2,0-4.6c0.3-0.5,0.1-1.1-0.4-1.4c-0.5-0.3-1.1-0.1-1.4,0.4c-1.2,2.1-1.1,4.6,0.1,6.6C4.9,28.8,7,30,9.2,30H15\n\t\tc0.6,0,1-0.4,1-1v-2.4l4,2.4l-5.6,3.3c-0.3,0.2-0.5,0.5-0.5,0.9c0,0.6,0.5,1,1,1c0.2,0,0.3-0.1,0.5-0.2l7-4.2\n\t\tc0.2-0.1,0.3-0.2,0.4-0.4C23.1,29,22.9,28.4,22.4,28.2z", "class": "clr-i-outline clr-i-outline-path-3" }), mithril_1.default("rect", { "x": 0, "y": 0, "width": 36, "height": 36, "fill-opacity": 0 }));
    } };
exports.default = RecycleLine;
