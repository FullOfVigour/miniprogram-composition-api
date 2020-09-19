"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var miniprogram_reactivity_1 = require("miniprogram-reactivity");
exports.useRef = miniprogram_reactivity_1.useRef;
exports.isRef = miniprogram_reactivity_1.isRef;
var component_1 = require("./component");
exports.defineComponent = component_1.defineComponent;
var page_1 = require("./page");
exports.definePage = page_1.definePage;
var router_1 = require("./router");
exports.router = router_1.router;
var constate_1 = require("./constate");
exports.createConstate = constate_1.createConstate;
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
var inject_1 = require("./inject");
exports.useInject = inject_1.useInject;
exports.useProvide = inject_1.useProvide;
var app_1 = require("./app");
exports.defineApp = app_1.defineApp;
