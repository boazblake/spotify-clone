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
var FileShare2Solid = { view: function (_a) {
        var attrs = _a.attrs;
        return mithril_1.default("svg", __assign({ "xmlns": "http://www.w3.org/2000/svg", "width": 36, "height": 36, "viewBox": "0 0 36 36" }, attrs), mithril_1.default("title", {}, "file_share2_solid"), mithril_1.default("g", { "id": "f7df7f8c-2b7b-4057-8bab-8ea586fe1590", "data-name": "Layer 3" }, mithril_1.default("path", { "d": "M25,4.06H7.83A1.89,1.89,0,0,0,6,6V30.15a1.89,1.89,0,0,0,1.83,1.91H28.17A1.87,1.87,0,0,0,30,30.15V9ZM22,26a2.09,2.09,0,0,1-2.1-2.08v-.3L14.27,21l-.08.08a2.08,2.08,0,1,1,.08-2.95l5.64-2.66v-.23a2.14,2.14,0,0,1,.64-1.48h0a2.08,2.08,0,1,1-.06,2.94l-5.66,2.65v.44l5.72,2.66A2.11,2.11,0,0,1,22,21.81l0,0A2.09,2.09,0,0,1,22,26Zm2-16V5.84l4.2,4.22Z" })));
    } };
exports.default = FileShare2Solid;
