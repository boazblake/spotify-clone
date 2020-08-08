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
var OnHolidaySolid = { view: function (_a) {
        var attrs = _a.attrs;
        return mithril_1.default("svg", __assign({ "xmlns": "http://www.w3.org/2000/svg", "width": 36, "height": 36, "viewBox": "0 0 36 36" }, attrs), mithril_1.default("title", {}, "on_holiday_solid"), mithril_1.default("g", { "id": "f33df626-4236-44cb-9ea7-70e95ec9c915", "data-name": "Layer 3" }, mithril_1.default("path", { "d": "M18,2.5c-8.82,0-16,6.28-16,14s7.18,14,16,14a17.91,17.91,0,0,0,4.88-.68l5.53,3.52a1,1,0,0,0,1.38-.3A1,1,0,0,0,30,32.5V25.77a13,13,0,0,0,4-9.27C34,8.78,26.82,2.5,18,2.5ZM29.84,18H21.51a.42.42,0,0,0-.3.13l-5.3,5.64a.39.39,0,0,1-.29.13H13.19a.41.41,0,0,1-.37-.58l2.47-5.32H7.46a.42.42,0,0,1-.36-.22l-2.7-5H6.24a.53.53,0,0,1,.39.18l1.56,1.69a.38.38,0,0,0,.33.14l6.18-.38-2-3.55h2.89a.47.47,0,0,1,.31.11L19.63,14l6.69-.35a2.44,2.44,0,0,1,1.81.63l2.47,2.23A.92.92,0,0,1,29.84,18Z" })));
    } };
exports.default = OnHolidaySolid;
