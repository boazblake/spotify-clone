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
var ControlLunOutlineBadged = { view: function (_a) {
        var attrs = _a.attrs;
        return mithril_1.default("svg", __assign({ "xmlns": "http://www.w3.org/2000/svg", "width": 36, "height": 36, "viewBox": "0 0 36 36" }, attrs), mithril_1.default("title", {}, "control-lun-outline-badged"), mithril_1.default("g", { "id": "a996ba2c-2392-4db4-af5f-dbd1dd4c2262", "data-name": "Layer 3" }, mithril_1.default("path", { "d": "M8,24.59a25.5,25.5,0,0,0,2.75.59l1.21-1.41a24.13,24.13,0,0,1-4-.83Z" }), mithril_1.default("path", { "d": "M32.09,22H15.46l-5.41,6.31L15.49,34h16.6a2,2,0,0,0,2-2V23.93A2,2,0,0,0,32.09,22Zm0,10H16.34l-3.59-3.77L16.38,24H32.09v8Z" }), mithril_1.default("path", { "d": "M16.11,27a1,1,0,1,0,1,1A1,1,0,0,0,16.11,27Z" }), mithril_1.default("path", { "d": "M18,17.54A34.81,34.81,0,0,1,8,16.33V18a40.86,40.86,0,0,0,10,1.16c3.46,0,9.13-.45,12-1.91v3.23h2V13.22a7.32,7.32,0,0,1-2,.28v1.91C29.09,16.23,25,17.54,18,17.54Z" }), mithril_1.default("path", { "d": "M6,27.53V10.3c2.9,1.43,8.34,1.88,12,1.88a47.66,47.66,0,0,0,7.09-.52,7.45,7.45,0,0,1-1.51-1.8,47.4,47.4,0,0,1-5.58.32C10.71,10.18,6.31,8.69,6,8c.32-.8,4.72-2.3,12-2.3,1.66,0,3.16.08,4.51.21a7.56,7.56,0,0,1,.29-2c-1.7-.17-3.38-.24-4.8-.24-5.2,0-14,.9-14,4.25v19.6c0,2,3.17,3.14,6.83,3.72L8.38,28.68C7,28.28,6.13,27.84,6,27.53Z" }), mithril_1.default("circle", { "cx": 30, "cy": 6, "r": 5, "fill": "#e62700" })));
    } };
exports.default = ControlLunOutlineBadged;
