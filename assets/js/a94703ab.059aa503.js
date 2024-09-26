exports.id = 48;
exports.ids = [48];
exports.modules = {

/***/ 8319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DocRoot)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(4164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 2 modules
var metadataUtils = __webpack_require__(1003);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(7559);
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/docsUtils.js + 1 modules
var docsUtils = __webpack_require__(4718);
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/docsSidebar.js
var docsSidebar = __webpack_require__(609);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(1312);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/scrollUtils.js
var scrollUtils = __webpack_require__(3104);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useLocationChange.js
var useLocationChange = __webpack_require__(5062);
;// ./node_modules/@docusaurus/theme-common/lib/hooks/useBackToTopButton.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/** Wires the logic for the back to top button. */
function useBackToTopButton(_ref) {
  let {
    threshold
  } = _ref;
  const [shown, setShown] = (0,react.useState)(false);
  const isFocusedAnchor = (0,react.useRef)(false);
  const {
    startScroll,
    cancelScroll
  } = (0,scrollUtils/* useSmoothScrollTo */.gk)();
  (0,scrollUtils/* useScrollPosition */.Mq)((_ref2, lastPosition) => {
    let {
      scrollY: scrollTop
    } = _ref2;
    const lastScrollTop = lastPosition?.scrollY;
    // Component is just being mounted. Not really a scroll event from the user.
    // Ignore it.
    if (!lastScrollTop) {
      return;
    }
    if (isFocusedAnchor.current) {
      // This scroll position change is triggered by navigating to an anchor.
      // Ignore it.
      isFocusedAnchor.current = false;
    } else if (scrollTop >= lastScrollTop) {
      // The user has scrolled down to "fight against" the animation. Cancel any
      // animation under progress.
      cancelScroll();
      setShown(false);
    } else if (scrollTop < threshold) {
      // Scrolled to the minimum position; hide the button.
      setShown(false);
    } else if (scrollTop + window.innerHeight < document.documentElement.scrollHeight) {
      setShown(true);
    }
  });
  (0,useLocationChange/* useLocationChange */.$)(locationChangeEvent => {
    if (locationChangeEvent.location.hash) {
      isFocusedAnchor.current = true;
      setShown(false);
    }
  });
  return {
    shown,
    scrollToTop: () => startScroll(0)
  };
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BackToTopButton/styles.module.css
var styles_module = __webpack_require__(1871);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BackToTopButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */






function BackToTopButton() {
  const {
    shown,
    scrollToTop
  } = useBackToTopButton({
    threshold: 300
  });
  return /*#__PURE__*/react.createElement("button", {
    "aria-label": (0,Translate/* translate */.T)({
      id: 'theme.BackToTopButton.buttonAriaLabel',
      message: 'Scroll back to top',
      description: 'The ARIA label for the back to top button'
    }),
    className: (0,clsx/* default */.A)('clean-btn', ThemeClassNames/* ThemeClassNames */.G.common.backToTopButton, (styles_module_default()).backToTopButton, shown && (styles_module_default()).backToTopButtonShow),
    type: "button",
    onClick: scrollToTop
  });
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/accessibilityUtils.js
var accessibilityUtils = __webpack_require__(3109);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(6347);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(4581);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(6342);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Logo/index.js + 2 modules
var Logo = __webpack_require__(1857);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Arrow/index.js
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function IconArrow(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "20",
    height: "20",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "#7a7a7a"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"
  })));
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/CollapseButton/styles.module.css
var CollapseButton_styles_module = __webpack_require__(5599);
var CollapseButton_styles_module_default = /*#__PURE__*/__webpack_require__.n(CollapseButton_styles_module);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/CollapseButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





function CollapseButton(_ref) {
  let {
    onClick
  } = _ref;
  return /*#__PURE__*/react.createElement("button", {
    type: "button",
    title: (0,Translate/* translate */.T)({
      id: 'theme.docs.sidebar.collapseButtonTitle',
      message: 'Collapse sidebar',
      description: 'The title attribute for collapse button of doc sidebar'
    }),
    "aria-label": (0,Translate/* translate */.T)({
      id: 'theme.docs.sidebar.collapseButtonAriaLabel',
      message: 'Collapse sidebar',
      description: 'The title attribute for collapse button of doc sidebar'
    }),
    className: (0,clsx/* default */.A)('button button--secondary button--outline', (CollapseButton_styles_module_default()).collapseSidebarButton),
    onClick: onClick
  }, /*#__PURE__*/react.createElement(IconArrow, {
    className: (CollapseButton_styles_module_default()).collapseSidebarButtonIcon
  }));
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/announcementBar.js
var announcementBar = __webpack_require__(5041);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/reactUtils.js
var reactUtils = __webpack_require__(9532);
;// ./node_modules/@docusaurus/plugin-content-docs/lib/client/docSidebarItemsExpandedState.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


const EmptyContext = Symbol('EmptyContext');
const Context = /*#__PURE__*/react.createContext(EmptyContext);
/**
 * Should be used to wrap one sidebar category level. This provider syncs the
 * expanded states of all sibling categories, and categories can choose to
 * collapse itself if another one is expanded.
 */
function DocSidebarItemsExpandedStateProvider(_ref) {
  let {
    children
  } = _ref;
  const [expandedItem, setExpandedItem] = (0,react.useState)(null);
  const contextValue = (0,react.useMemo)(() => ({
    expandedItem,
    setExpandedItem
  }), [expandedItem]);
  return /*#__PURE__*/react.createElement(Context.Provider, {
    value: contextValue
  }, children);
}
function useDocSidebarItemsExpandedState() {
  const value = (0,react.useContext)(Context);
  if (value === EmptyContext) {
    throw new reactUtils/* ReactContextError */.dV('DocSidebarItemsExpandedStateProvider');
  }
  return value;
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Collapsible/index.js
var Collapsible = __webpack_require__(1422);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/routesUtils.js
var routesUtils = __webpack_require__(9169);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(725);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(2303);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Category/index.js
function Category_extends() { return Category_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, Category_extends.apply(null, arguments); }
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */









// If we navigate to a category and it becomes active, it should automatically
// expand itself
function useAutoExpandActiveCategory(_ref) {
  let {
    isActive,
    collapsed,
    updateCollapsed
  } = _ref;
  const wasActive = (0,reactUtils/* usePrevious */.ZC)(isActive);
  (0,react.useEffect)(() => {
    const justBecameActive = isActive && !wasActive;
    if (justBecameActive && collapsed) {
      updateCollapsed(false);
    }
  }, [isActive, wasActive, collapsed, updateCollapsed]);
}
/**
 * When a collapsible category has no link, we still link it to its first child
 * during SSR as a temporary fallback. This allows to be able to navigate inside
 * the category even when JS fails to load, is delayed or simply disabled
 * React hydration becomes an optional progressive enhancement
 * see https://github.com/facebookincubator/infima/issues/36#issuecomment-772543188
 * see https://github.com/facebook/docusaurus/issues/3030
 */
function useCategoryHrefWithSSRFallback(item) {
  const isBrowser = (0,useIsBrowser/* default */.A)();
  return (0,react.useMemo)(() => {
    if (item.href && !item.linkUnlisted) {
      return item.href;
    }
    // In these cases, it's not necessary to render a fallback
    // We skip the "findFirstCategoryLink" computation
    if (isBrowser || !item.collapsible) {
      return undefined;
    }
    return (0,docsUtils/* findFirstSidebarItemLink */.Nr)(item);
  }, [item, isBrowser]);
}
function Category_CollapseButton(_ref2) {
  let {
    collapsed,
    categoryLabel,
    onClick
  } = _ref2;
  return /*#__PURE__*/react.createElement("button", {
    "aria-label": collapsed ? (0,Translate/* translate */.T)({
      id: 'theme.DocSidebarItem.expandCategoryAriaLabel',
      message: "Expand sidebar category '{label}'",
      description: 'The ARIA label to expand the sidebar category'
    }, {
      label: categoryLabel
    }) : (0,Translate/* translate */.T)({
      id: 'theme.DocSidebarItem.collapseCategoryAriaLabel',
      message: "Collapse sidebar category '{label}'",
      description: 'The ARIA label to collapse the sidebar category'
    }, {
      label: categoryLabel
    }),
    "aria-expanded": !collapsed,
    type: "button",
    className: "clean-btn menu__caret",
    onClick: onClick
  });
}
function DocSidebarItemCategory(_ref3) {
  let {
    item,
    onItemClick,
    activePath,
    level,
    index,
    ...props
  } = _ref3;
  const {
    items,
    label,
    collapsible,
    className,
    href
  } = item;
  const {
    docs: {
      sidebar: {
        autoCollapseCategories
      }
    }
  } = (0,useThemeConfig/* useThemeConfig */.p)();
  const hrefWithSSRFallback = useCategoryHrefWithSSRFallback(item);
  const isActive = (0,docsUtils/* isActiveSidebarItem */.w8)(item, activePath);
  const isCurrentPage = (0,routesUtils/* isSamePath */.ys)(href, activePath);
  const {
    collapsed,
    setCollapsed
  } = (0,Collapsible/* useCollapsible */.u)({
    // Active categories are always initialized as expanded. The default
    // (`item.collapsed`) is only used for non-active categories.
    initialState: () => {
      if (!collapsible) {
        return false;
      }
      return isActive ? false : item.collapsed;
    }
  });
  const {
    expandedItem,
    setExpandedItem
  } = useDocSidebarItemsExpandedState();
  // Use this instead of `setCollapsed`, because it is also reactive
  const updateCollapsed = function () {
    let toCollapsed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !collapsed;
    setExpandedItem(toCollapsed ? null : index);
    setCollapsed(toCollapsed);
  };
  useAutoExpandActiveCategory({
    isActive,
    collapsed,
    updateCollapsed
  });
  (0,react.useEffect)(() => {
    if (collapsible && expandedItem != null && expandedItem !== index && autoCollapseCategories) {
      setCollapsed(true);
    }
  }, [collapsible, expandedItem, index, setCollapsed, autoCollapseCategories]);
  return /*#__PURE__*/react.createElement("li", {
    className: (0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarItemCategory, ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarItemCategoryLevel(level), 'menu__list-item', {
      'menu__list-item--collapsed': collapsed
    }, className)
  }, /*#__PURE__*/react.createElement("div", {
    className: (0,clsx/* default */.A)('menu__list-item-collapsible', {
      'menu__list-item-collapsible--active': isCurrentPage
    })
  }, /*#__PURE__*/react.createElement(Link/* default */.A, Category_extends({
    className: (0,clsx/* default */.A)('menu__link', {
      'menu__link--sublist': collapsible,
      'menu__link--sublist-caret': !href && collapsible,
      'menu__link--active': isActive
    }),
    onClick: collapsible ? e => {
      onItemClick?.(item);
      if (href) {
        updateCollapsed(false);
      } else {
        e.preventDefault();
        updateCollapsed();
      }
    } : () => {
      onItemClick?.(item);
    },
    "aria-current": isCurrentPage ? 'page' : undefined,
    role: collapsible && !href ? 'button' : undefined,
    "aria-expanded": collapsible && !href ? !collapsed : undefined,
    href: collapsible ? hrefWithSSRFallback ?? '#' : hrefWithSSRFallback
  }, props), label), href && collapsible && /*#__PURE__*/react.createElement(Category_CollapseButton, {
    collapsed: collapsed,
    categoryLabel: label,
    onClick: e => {
      e.preventDefault();
      updateCollapsed();
    }
  })), /*#__PURE__*/react.createElement(Collapsible/* Collapsible */.N, {
    lazy: true,
    as: "ul",
    className: "menu__list",
    collapsed: collapsed
  }, /*#__PURE__*/react.createElement(theme_DocSidebarItems, {
    items: items,
    tabIndex: collapsed ? -1 : 0,
    onItemClick: onItemClick,
    activePath: activePath,
    level: level + 1
  })));
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(6654);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/ExternalLink/index.js
var ExternalLink = __webpack_require__(5835);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Link/styles.module.css
var Link_styles_module = __webpack_require__(1398);
var Link_styles_module_default = /*#__PURE__*/__webpack_require__.n(Link_styles_module);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Link/index.js
function Link_extends() { return Link_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, Link_extends.apply(null, arguments); }
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */








function DocSidebarItemLink(_ref) {
  let {
    item,
    onItemClick,
    activePath,
    level,
    index,
    ...props
  } = _ref;
  const {
    href,
    label,
    className,
    autoAddBaseUrl
  } = item;
  const isActive = (0,docsUtils/* isActiveSidebarItem */.w8)(item, activePath);
  const isInternalLink = (0,isInternalUrl/* default */.A)(href);
  return /*#__PURE__*/react.createElement("li", {
    className: (0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarItemLink, ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarItemLinkLevel(level), 'menu__list-item', className),
    key: label
  }, /*#__PURE__*/react.createElement(Link/* default */.A, Link_extends({
    className: (0,clsx/* default */.A)('menu__link', !isInternalLink && (Link_styles_module_default()).menuExternalLink, {
      'menu__link--active': isActive
    }),
    autoAddBaseUrl: autoAddBaseUrl,
    "aria-current": isActive ? 'page' : undefined,
    to: href
  }, isInternalLink && {
    onClick: onItemClick ? () => onItemClick(item) : undefined
  }, props), label, !isInternalLink && /*#__PURE__*/react.createElement(ExternalLink/* default */.A, null)));
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Html/styles.module.css
var Html_styles_module = __webpack_require__(2105);
var Html_styles_module_default = /*#__PURE__*/__webpack_require__.n(Html_styles_module);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Html/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */




function DocSidebarItemHtml(_ref) {
  let {
    item,
    level,
    index
  } = _ref;
  const {
    value,
    defaultStyle,
    className
  } = item;
  return /*#__PURE__*/react.createElement("li", {
    className: (0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarItemLink, ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarItemLinkLevel(level), defaultStyle && [(Html_styles_module_default()).menuHtmlItem, 'menu__list-item'], className),
    key: index
    // eslint-disable-next-line react/no-danger
    ,
    dangerouslySetInnerHTML: {
      __html: value
    }
  });
}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/index.js
function DocSidebarItem_extends() { return DocSidebarItem_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, DocSidebarItem_extends.apply(null, arguments); }
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */




function DocSidebarItem(_ref) {
  let {
    item,
    ...props
  } = _ref;
  switch (item.type) {
    case 'category':
      return /*#__PURE__*/react.createElement(DocSidebarItemCategory, DocSidebarItem_extends({
        item: item
      }, props));
    case 'html':
      return /*#__PURE__*/react.createElement(DocSidebarItemHtml, DocSidebarItem_extends({
        item: item
      }, props));
    case 'link':
    default:
      return /*#__PURE__*/react.createElement(DocSidebarItemLink, DocSidebarItem_extends({
        item: item
      }, props));
  }
}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItems/index.js
function DocSidebarItems_extends() { return DocSidebarItems_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, DocSidebarItems_extends.apply(null, arguments); }
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



function DocSidebarItems(_ref) {
  let {
    items,
    ...props
  } = _ref;
  const visibleItems = (0,docsUtils/* useVisibleSidebarItems */.Y)(items, props.activePath);
  return /*#__PURE__*/react.createElement(DocSidebarItemsExpandedStateProvider, null, visibleItems.map((item, index) => /*#__PURE__*/react.createElement(DocSidebarItem, DocSidebarItems_extends({
    key: index,
    item: item,
    index: index
  }, props))));
}
// Optimize sidebar at each "level"
/* harmony default export */ const theme_DocSidebarItems = (/*#__PURE__*/(0,react.memo)(DocSidebarItems));
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/Content/styles.module.css
var Content_styles_module = __webpack_require__(1733);
var Content_styles_module_default = /*#__PURE__*/__webpack_require__.n(Content_styles_module);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/Content/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */







function useShowAnnouncementBar() {
  const {
    isActive
  } = (0,announcementBar/* useAnnouncementBar */.M)();
  const [showAnnouncementBar, setShowAnnouncementBar] = (0,react.useState)(isActive);
  (0,scrollUtils/* useScrollPosition */.Mq)(_ref => {
    let {
      scrollY
    } = _ref;
    if (isActive) {
      setShowAnnouncementBar(scrollY === 0);
    }
  }, [isActive]);
  return isActive && showAnnouncementBar;
}
function DocSidebarDesktopContent(_ref2) {
  let {
    path,
    sidebar,
    className
  } = _ref2;
  const showAnnouncementBar = useShowAnnouncementBar();
  return /*#__PURE__*/react.createElement("nav", {
    "aria-label": (0,Translate/* translate */.T)({
      id: 'theme.docs.sidebar.navAriaLabel',
      message: 'Docs sidebar',
      description: 'The ARIA label for the sidebar navigation'
    }),
    className: (0,clsx/* default */.A)('menu thin-scrollbar', (Content_styles_module_default()).menu, showAnnouncementBar && (Content_styles_module_default()).menuWithAnnouncementBar, className)
  }, /*#__PURE__*/react.createElement("ul", {
    className: (0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarMenu, 'menu__list')
  }, /*#__PURE__*/react.createElement(theme_DocSidebarItems, {
    items: sidebar,
    activePath: path,
    level: 1
  })));
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/styles.module.css
var Desktop_styles_module = __webpack_require__(6263);
var Desktop_styles_module_default = /*#__PURE__*/__webpack_require__.n(Desktop_styles_module);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */







function DocSidebarDesktop(_ref) {
  let {
    path,
    sidebar,
    onCollapse,
    isHidden
  } = _ref;
  const {
    navbar: {
      hideOnScroll
    },
    docs: {
      sidebar: {
        hideable
      }
    }
  } = (0,useThemeConfig/* useThemeConfig */.p)();
  return /*#__PURE__*/react.createElement("div", {
    className: (0,clsx/* default */.A)((Desktop_styles_module_default()).sidebar, hideOnScroll && (Desktop_styles_module_default()).sidebarWithHideableNavbar, isHidden && (Desktop_styles_module_default()).sidebarHidden)
  }, hideOnScroll && /*#__PURE__*/react.createElement(Logo/* default */.A, {
    tabIndex: -1,
    className: (Desktop_styles_module_default()).sidebarLogo
  }), /*#__PURE__*/react.createElement(DocSidebarDesktopContent, {
    path: path,
    sidebar: sidebar
  }), hideable && /*#__PURE__*/react.createElement(CollapseButton, {
    onClick: onCollapse
  }));
}
/* harmony default export */ const Desktop = (/*#__PURE__*/react.memo(DocSidebarDesktop));
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/navbarSecondaryMenu/content.js
var content = __webpack_require__(5600);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/navbarMobileSidebar.js + 1 modules
var navbarMobileSidebar = __webpack_require__(9876);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Mobile/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





// eslint-disable-next-line react/function-component-definition
const DocSidebarMobileSecondaryMenu = _ref => {
  let {
    sidebar,
    path
  } = _ref;
  const mobileSidebar = (0,navbarMobileSidebar/* useNavbarMobileSidebar */.M)();
  return /*#__PURE__*/react.createElement("ul", {
    className: (0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarMenu, 'menu__list')
  }, /*#__PURE__*/react.createElement(theme_DocSidebarItems, {
    items: sidebar,
    activePath: path,
    onItemClick: item => {
      // Mobile sidebar should only be closed if the category has a link
      if (item.type === 'category' && item.href) {
        mobileSidebar.toggle();
      }
      if (item.type === 'link') {
        mobileSidebar.toggle();
      }
    },
    level: 1
  }));
};
function DocSidebarMobile(props) {
  return /*#__PURE__*/react.createElement(content/* NavbarSecondaryMenuFiller */.GX, {
    component: DocSidebarMobileSecondaryMenu,
    props: props
  });
}
/* harmony default export */ const Mobile = (/*#__PURE__*/react.memo(DocSidebarMobile));
;// ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */




function DocSidebar(props) {
  const windowSize = (0,useWindowSize/* useWindowSize */.l)();
  // Desktop sidebar visible on hydration: need SSR rendering
  const shouldRenderSidebarDesktop = windowSize === 'desktop' || windowSize === 'ssr';
  // Mobile sidebar not visible on hydration: can avoid SSR rendering
  const shouldRenderSidebarMobile = windowSize === 'mobile';
  return /*#__PURE__*/react.createElement(react.Fragment, null, shouldRenderSidebarDesktop && /*#__PURE__*/react.createElement(Desktop, props), shouldRenderSidebarMobile && /*#__PURE__*/react.createElement(Mobile, props));
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocRoot/Layout/Sidebar/ExpandButton/styles.module.css
var ExpandButton_styles_module = __webpack_require__(8721);
var ExpandButton_styles_module_default = /*#__PURE__*/__webpack_require__.n(ExpandButton_styles_module);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/DocRoot/Layout/Sidebar/ExpandButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */




function DocRootLayoutSidebarExpandButton(_ref) {
  let {
    toggleSidebar
  } = _ref;
  return /*#__PURE__*/react.createElement("div", {
    className: (ExpandButton_styles_module_default()).expandButton,
    title: (0,Translate/* translate */.T)({
      id: 'theme.docs.sidebar.expandButtonTitle',
      message: 'Expand sidebar',
      description: 'The ARIA label and title attribute for expand button of doc sidebar'
    }),
    "aria-label": (0,Translate/* translate */.T)({
      id: 'theme.docs.sidebar.expandButtonAriaLabel',
      message: 'Expand sidebar',
      description: 'The ARIA label and title attribute for expand button of doc sidebar'
    }),
    tabIndex: 0,
    role: "button",
    onKeyDown: toggleSidebar,
    onClick: toggleSidebar
  }, /*#__PURE__*/react.createElement(IconArrow, {
    className: (ExpandButton_styles_module_default()).expandButtonIcon
  }));
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocRoot/Layout/Sidebar/styles.module.css
var Sidebar_styles_module = __webpack_require__(5710);
var Sidebar_styles_module_default = /*#__PURE__*/__webpack_require__.n(Sidebar_styles_module);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/DocRoot/Layout/Sidebar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */








// Reset sidebar state when sidebar changes
// Use React key to unmount/remount the children
// See https://github.com/facebook/docusaurus/issues/3414
function ResetOnSidebarChange(_ref) {
  let {
    children
  } = _ref;
  const sidebar = (0,docsSidebar/* useDocsSidebar */.t)();
  return /*#__PURE__*/react.createElement(react.Fragment, {
    key: sidebar?.name ?? 'noSidebar'
  }, children);
}
function DocRootLayoutSidebar(_ref2) {
  let {
    sidebar,
    hiddenSidebarContainer,
    setHiddenSidebarContainer
  } = _ref2;
  const {
    pathname
  } = (0,react_router/* useLocation */.zy)();
  const [hiddenSidebar, setHiddenSidebar] = (0,react.useState)(false);
  const toggleSidebar = (0,react.useCallback)(() => {
    if (hiddenSidebar) {
      setHiddenSidebar(false);
    }
    // onTransitionEnd won't fire when sidebar animation is disabled
    // fixes https://github.com/facebook/docusaurus/issues/8918
    if (!hiddenSidebar && (0,accessibilityUtils/* prefersReducedMotion */.O)()) {
      setHiddenSidebar(true);
    }
    setHiddenSidebarContainer(value => !value);
  }, [setHiddenSidebarContainer, hiddenSidebar]);
  return /*#__PURE__*/react.createElement("aside", {
    className: (0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarContainer, (Sidebar_styles_module_default()).docSidebarContainer, hiddenSidebarContainer && (Sidebar_styles_module_default()).docSidebarContainerHidden),
    onTransitionEnd: e => {
      if (!e.currentTarget.classList.contains((Sidebar_styles_module_default()).docSidebarContainer)) {
        return;
      }
      if (hiddenSidebarContainer) {
        setHiddenSidebar(true);
      }
    }
  }, /*#__PURE__*/react.createElement(ResetOnSidebarChange, null, /*#__PURE__*/react.createElement("div", {
    className: (0,clsx/* default */.A)((Sidebar_styles_module_default()).sidebarViewport, hiddenSidebar && (Sidebar_styles_module_default()).sidebarViewportHidden)
  }, /*#__PURE__*/react.createElement(DocSidebar, {
    sidebar: sidebar,
    path: pathname,
    onCollapse: toggleSidebar,
    isHidden: hiddenSidebar
  }), hiddenSidebar && /*#__PURE__*/react.createElement(DocRootLayoutSidebarExpandButton, {
    toggleSidebar: toggleSidebar
  }))));
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocRoot/Layout/Main/styles.module.css
var Main_styles_module = __webpack_require__(3685);
var Main_styles_module_default = /*#__PURE__*/__webpack_require__.n(Main_styles_module);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/DocRoot/Layout/Main/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */




function DocRootLayoutMain(_ref) {
  let {
    hiddenSidebarContainer,
    children
  } = _ref;
  const sidebar = (0,docsSidebar/* useDocsSidebar */.t)();
  return /*#__PURE__*/react.createElement("main", {
    className: (0,clsx/* default */.A)((Main_styles_module_default()).docMainContainer, (hiddenSidebarContainer || !sidebar) && (Main_styles_module_default()).docMainContainerEnhanced)
  }, /*#__PURE__*/react.createElement("div", {
    className: (0,clsx/* default */.A)('container padding-top--md padding-bottom--lg', (Main_styles_module_default()).docItemWrapper, hiddenSidebarContainer && (Main_styles_module_default()).docItemWrapperEnhanced)
  }, children));
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocRoot/Layout/styles.module.css
var Layout_styles_module = __webpack_require__(2607);
var Layout_styles_module_default = /*#__PURE__*/__webpack_require__.n(Layout_styles_module);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/DocRoot/Layout/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */






function DocRootLayout(_ref) {
  let {
    children
  } = _ref;
  const sidebar = (0,docsSidebar/* useDocsSidebar */.t)();
  const [hiddenSidebarContainer, setHiddenSidebarContainer] = (0,react.useState)(false);
  return /*#__PURE__*/react.createElement("div", {
    className: (Layout_styles_module_default()).docsWrapper
  }, /*#__PURE__*/react.createElement(BackToTopButton, null), /*#__PURE__*/react.createElement("div", {
    className: (Layout_styles_module_default()).docRoot
  }, sidebar && /*#__PURE__*/react.createElement(DocRootLayoutSidebar, {
    sidebar: sidebar.items,
    hiddenSidebarContainer: hiddenSidebarContainer,
    setHiddenSidebarContainer: setHiddenSidebarContainer
  }), /*#__PURE__*/react.createElement(DocRootLayoutMain, {
    hiddenSidebarContainer: hiddenSidebarContainer
  }, children)));
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/NotFound/Content/index.js
var Content = __webpack_require__(3363);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/DocRoot/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */






function DocRoot(props) {
  const currentDocRouteMetadata = (0,docsUtils/* useDocRootMetadata */.B5)(props);
  if (!currentDocRouteMetadata) {
    // We only render the not found content to avoid a double layout
    // see https://github.com/facebook/docusaurus/pull/7966#pullrequestreview-1077276692
    return /*#__PURE__*/react.createElement(Content/* default */.A, null);
  }
  const {
    docElement,
    sidebarName,
    sidebarItems
  } = currentDocRouteMetadata;
  return /*#__PURE__*/react.createElement(metadataUtils/* HtmlClassNameProvider */.e3, {
    className: (0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.page.docsDocPage)
  }, /*#__PURE__*/react.createElement(docsSidebar/* DocsSidebarProvider */.V, {
    name: sidebarName,
    items: sidebarItems
  }, /*#__PURE__*/react.createElement(DocRootLayout, null, docElement)));
}

/***/ }),

/***/ 3363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ NotFoundContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4164);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1312);
/* harmony import */ var _theme_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4608);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */




function NotFoundContent(_ref) {
  let {
    className
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)('container margin-vert--xl', className)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col col--6 col--offset-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Heading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    as: "h1",
    className: "hero__title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    id: "theme.NotFound.title",
    description: "The title of the 404 page"
  }, "Page Not Found")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    id: "theme.NotFound.p1",
    description: "The first paragraph of the 404 page"
  }, "We could not find what you were looking for.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    id: "theme.NotFound.p2",
    description: "The 2nd paragraph of the 404 page"
  }, "Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))));
}

/***/ }),

/***/ 1871:
/***/ ((module) => {

// Exports
module.exports = {
	"backToTopButton": `backToTopButton_sjWU`,
	"backToTopButtonShow": `backToTopButtonShow_xfvO`
};


/***/ }),

/***/ 3685:
/***/ ((module) => {

// Exports
module.exports = {
	"docMainContainer": `docMainContainer_TBSr`,
	"docMainContainerEnhanced": `docMainContainerEnhanced_lQrH`,
	"docItemWrapperEnhanced": `docItemWrapperEnhanced_JWYK`
};


/***/ }),

/***/ 8721:
/***/ ((module) => {

// Exports
module.exports = {
	"expandButton": `expandButton_TmdG`,
	"expandButtonIcon": `expandButtonIcon_i1dp`
};


/***/ }),

/***/ 5710:
/***/ ((module) => {

// Exports
module.exports = {
	"docSidebarContainer": `docSidebarContainer_YfHR`,
	"docSidebarContainerHidden": `docSidebarContainerHidden_DPk8`,
	"sidebarViewport": `sidebarViewport_aRkj`
};


/***/ }),

/***/ 2607:
/***/ ((module) => {

// Exports
module.exports = {
	"docRoot": `docRoot_UBD9`,
	"docsWrapper": `docsWrapper_hBAB`
};


/***/ }),

/***/ 5599:
/***/ ((module) => {

// Exports
module.exports = {
	"collapseSidebarButton": `collapseSidebarButton_PEFL`,
	"collapseSidebarButtonIcon": `collapseSidebarButtonIcon_kv0_`
};


/***/ }),

/***/ 1733:
/***/ ((module) => {

// Exports
module.exports = {
	"menu": `menu_SIkG`,
	"menuWithAnnouncementBar": `menuWithAnnouncementBar_GW3s`
};


/***/ }),

/***/ 6263:
/***/ ((module) => {

// Exports
module.exports = {
	"sidebar": `sidebar_njMd`,
	"sidebarWithHideableNavbar": `sidebarWithHideableNavbar_wUlq`,
	"sidebarHidden": `sidebarHidden_VK0M`,
	"sidebarLogo": `sidebarLogo_isFc`
};


/***/ }),

/***/ 2105:
/***/ ((module) => {

// Exports
module.exports = {
	"menuHtmlItem": `menuHtmlItem_M9Kj`
};


/***/ }),

/***/ 1398:
/***/ ((module) => {

// Exports
module.exports = {
	"menuExternalLink": `menuExternalLink_NmtK`
};


/***/ })

};
;