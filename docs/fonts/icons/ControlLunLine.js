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
var ControlLunLine = { view: function (_a) {
        var attrs = _a.attrs;
        return mithril_1.default("svg", __assign({ "xmlns": "http://www.w3.org/2000/svg", "width": 36, "height": 36, "viewBox": "0 0 36 36" }, attrs), mithril_1.default("title", {}, "control-lun-outline"), mithril_1.default("g", { "id": "e4d07e72-0223-442a-99fb-5d2e3f0c0a5b", "data-name": "Layer 4" }, mithril_1.default("path", { "d": "M8,24.59a25.5,25.5,0,0,0,2.75.59l1.21-1.41a24.13,24.13,0,0,1-4-.83Z" }), mithril_1.default("path", { "d": "M6,27.53V10.3c2.9,1.43,8.34,1.88,12,1.88s9.1-.45,12-1.88v5.11c-.91.82-5,2.13-12,2.13A34.81,34.81,0,0,1,8,16.33V18a40.86,40.86,0,0,0,10,1.16c3.46,0,9.13-.45,12-1.91v3.23h2V8h0s0,0,0-.07c0-3.35-8.8-4.25-14-4.25S4,4.58,4,7.93v19.6c0,2,3.17,3.14,6.83,3.72L8.38,28.68C7,28.28,6.13,27.84,6,27.53ZM18,5.68c7.15,0,11.53,1.44,12,2.25-.46.81-4.84,2.25-12,2.25S6.31,8.69,6,8C6.31,7.18,10.71,5.68,18,5.68Z" }), mithril_1.default("path", { "d": "M32.09,22H15.46l-5.41,6.31L15.49,34h16.6a2,2,0,0,0,2-2V23.93A2,2,0,0,0,32.09,22Zm0,10H16.34l-3.59-3.77L16.38,24H32.09v8Z" }), mithril_1.default("path", { "d": "M16.11,27a1,1,0,1,0,1,1A1,1,0,0,0,16.11,27Z" })));
    } };
exports.default = ControlLunLine;
