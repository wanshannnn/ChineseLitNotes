exports.id = 634;
exports.ids = [634];
exports.modules = {

/***/ 2259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(4164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(4586);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 46 modules
var Layout = __webpack_require__(7110);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js
var Heading = __webpack_require__(4608);
// EXTERNAL MODULE: ./src/components/HomepageFeatures/styles.module.css
var styles_module = __webpack_require__(3552);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
;// ./src/components/HomepageFeatures/index.js
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }




const FeatureList = [{
  title: '复习笔记',
  Svg: null,
  description: /*#__PURE__*/react.createElement(react.Fragment, null, "\u4F60\u53EF\u4EE5\u5728\u53E3\u888B\u4E66\u7684\u5404\u4E2A\u8BFE\u7A0B\u7684\u6587\u6863\u4E2D\u9605\u8BFB\u7B14\u8BB0\uFF0C\u5229\u7528\u788E\u7247\u65F6\u95F4\u9AD8\u6548\u590D\u4E60\u8BFE\u7A0B\u77E5\u8BC6\u3002")
}, {
  title: '发表评论',
  Svg: null,
  description: /*#__PURE__*/react.createElement(react.Fragment, null, "\u4F60\u53EF\u4EE5\u5728\u6BCF\u4E2A\u6587\u6863\u4E0B\u65B9\u7684\u8BC4\u8BBA\u533A\u8865\u5145\u77E5\u8BC6\u70B9\u3001\u53D1\u8868\u89C2\u70B9\uFF0C\u4E3A\u53E3\u888B\u4E66\u589E\u52A0\u65B0\u7684\u5185\u5BB9\uFF0C\u542F\u53D1\u540E\u6765\u7684\u5B66\u4E60\u8005\u3002")
}, {
  title: '交流经验',
  Svg: null,
  description: /*#__PURE__*/react.createElement(react.Fragment, null, "\u4F60\u53EF\u4EE5\u5728\u4EA4\u6D41\u533A\u4E2D\u5206\u4EAB\u5B66\u4E60\u7ECF\u9A8C\u3001\u4EA4\u6D41\u5B66\u6821\u751F\u6D3B\uFF0C\u5E76\u4E14\u4F60\u53EF\u4EE5\u5C1D\u8BD5\u5728\u8FD9\u91CC\u7ED3\u4EA4\u540C\u4E13\u4E1A\u7684\u65B0\u670B\u53CB\u3002")
}];
function Feature(_ref) {
  let {
    Svg,
    title,
    description
  } = _ref;
  return /*#__PURE__*/react.createElement("div", {
    className: (0,clsx/* default */.A)('col col--4')
  }, /*#__PURE__*/react.createElement("div", {
    className: "text--center"
  }, Svg && /*#__PURE__*/react.createElement(Svg, {
    className: (styles_module_default()).featureSvg,
    role: "img"
  })), /*#__PURE__*/react.createElement("div", {
    className: "text--center padding-horiz--md"
  }, /*#__PURE__*/react.createElement(Heading/* default */.A, {
    as: "h3"
  }, title), /*#__PURE__*/react.createElement("p", null, description)));
}
function HomepageFeatures() {
  return /*#__PURE__*/react.createElement("section", {
    className: (styles_module_default()).features
  }, /*#__PURE__*/react.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "row"
  }, FeatureList.map((props, idx) => /*#__PURE__*/react.createElement(Feature, _extends({
    key: idx
  }, props))))));
}
// EXTERNAL MODULE: ./src/pages/index.module.css
var index_module = __webpack_require__(6830);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
;// ./src/pages/index.js







function HomepageHeader() {
  const {
    siteConfig
  } = (0,useDocusaurusContext/* default */.A)();
  return /*#__PURE__*/react.createElement("header", {
    className: (0,clsx/* default */.A)('hero hero--primary', (index_module_default()).heroBanner)
  }, /*#__PURE__*/react.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react.createElement(Heading/* default */.A, {
    as: "h1",
    className: "hero__title"
  }, siteConfig.title), /*#__PURE__*/react.createElement("p", {
    className: "hero__subtitle"
  }, siteConfig.tagline)));
}
function Home() {
  const {
    siteConfig
  } = (0,useDocusaurusContext/* default */.A)();
  return /*#__PURE__*/react.createElement(Layout/* default */.A, {
    title: `Hello from ${siteConfig.title}`,
    description: "Description will go into a meta tag in <head />"
  }, /*#__PURE__*/react.createElement(HomepageHeader, null), /*#__PURE__*/react.createElement("main", null, /*#__PURE__*/react.createElement(HomepageFeatures, null)));
}

/***/ }),

/***/ 3552:
/***/ ((module) => {

// Exports
module.exports = {
	"features": `features_t9lD`,
	"featureSvg": `featureSvg_GfXr`
};


/***/ }),

/***/ 6830:
/***/ ((module) => {

// Exports
module.exports = {
	"heroBanner": `heroBanner_qdFl`,
	"buttons": `buttons_AeoN`
};


/***/ })

};
;