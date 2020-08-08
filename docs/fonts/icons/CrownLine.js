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
var CrownLine = { view: function (_a) {
        var attrs = _a.attrs;
        return mithril_1.default("svg", __assign({ "xmlns": "http://www.w3.org/2000/svg", "width": 36, "height": 36, "viewBox": "0 0 36 36" }, attrs), mithril_1.default("title", {}, "crown-outline"), mithril_1.default("g", { "id": "b7bd2573-7bb3-4e5d-8844-7e8afd23ad9e", "data-name": "Layer 3" }, mithril_1.default("path", { "d": "M4,13.33A1.39,1.39,0,1,0,2.6,14.72,1.39,1.39,0,0,0,4,13.33Z" }), mithril_1.default("path", { "d": "M31.81,15.84a20.35,20.35,0,0,0-4.58,1.43,22.7,22.7,0,0,0-3.48,2.1A17.69,17.69,0,0,1,22,16.57a47.65,47.65,0,0,1-2.8-7.69,1,1,0,0,0-1-.74,1,1,0,0,0-1,.74,46.71,46.71,0,0,1-2.8,7.69,17,17,0,0,1-1.76,2.8,22.7,22.7,0,0,0-3.48-2.1,20.66,20.66,0,0,0-4.58-1.43,1,1,0,0,0-1,.39,1,1,0,0,0-.09,1.05A50.13,50.13,0,0,1,7.82,31.17a1,1,0,0,0,1,.83H27.62a1,1,0,0,0,1-.83,50.15,50.15,0,0,1,4.26-13.89,1,1,0,0,0-.09-1.05A1,1,0,0,0,31.81,15.84ZM26.79,30H9.64a55.66,55.66,0,0,0-3.4-11.71,15.75,15.75,0,0,1,2.09.78,20,20,0,0,1,3.85,2.45,1,1,0,0,0,1.39-.09,19.28,19.28,0,0,0,2.67-4,43.46,43.46,0,0,0,2-4.89,41.74,41.74,0,0,0,2,4.89,19.92,19.92,0,0,0,2.66,4,1,1,0,0,0,1.4.09,19.21,19.21,0,0,1,3.85-2.45,14.77,14.77,0,0,1,2.09-.78A55.07,55.07,0,0,0,26.79,30Z" }), mithril_1.default("ellipse", { "cx": 33.83, "cy": 13.33, "rx": 1.39, "ry": 1.39 }), mithril_1.default("path", { "d": "M18.22,6.39A1.39,1.39,0,1,0,16.84,5,1.39,1.39,0,0,0,18.22,6.39Z" }), mithril_1.default("path", { "d": "M18.23,26.34a1.11,1.11,0,1,0,1.1,1.1A1.1,1.1,0,0,0,18.23,26.34Z" }), mithril_1.default("path", { "d": "M12.58,26.34a1.11,1.11,0,1,0,1.1,1.1A1.1,1.1,0,0,0,12.58,26.34Z" }), mithril_1.default("path", { "d": "M23.89,26.34a1.11,1.11,0,1,0,1.1,1.1A1.1,1.1,0,0,0,23.89,26.34Z" })));
    } };
exports.default = CrownLine;
