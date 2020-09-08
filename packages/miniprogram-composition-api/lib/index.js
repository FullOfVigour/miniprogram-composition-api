"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var miniprogram_reactivity_1 = require("miniprogram-reactivity");
exports.useRef = miniprogram_reactivity_1.useRef;
exports.isRef = miniprogram_reactivity_1.isRef;
exports.useProvide = miniprogram_reactivity_1.useProvide;
exports.useInject = miniprogram_reactivity_1.useInject;
var component_1 = require("./component");
exports.defineComponent = component_1.defineComponent;
var page_1 = require("./page");
exports.definePage = page_1.definePage;
var router_1 = require("./router");
exports.router = router_1.router;
var lifecycle_1 = require("./lifecycle");
exports.onLoad = lifecycle_1.onLoad;
exports.onReady = lifecycle_1.onReady;
exports.onUnLoad = lifecycle_1.onUnLoad;
exports.onShow = lifecycle_1.onShow;
exports.onHide = lifecycle_1.onHide;
exports.onPullDownRefresh = lifecycle_1.onPullDownRefresh;
exports.onShareAppMessage = lifecycle_1.onShareAppMessage;
exports.onReachBottom = lifecycle_1.onReachBottom;
exports.onPageScroll = lifecycle_1.onPageScroll;
var watch_1 = require("./watch");
exports.useEffect = watch_1.useEffect;
var computed_1 = require("./computed");
exports.useComputed = computed_1.useComputed;
var context_1 = require("./context");
exports.createContext = context_1.createContext;