exports.id = 401;
exports.ids = [401];
exports.modules = {

/***/ 9940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DocItem_DocItem)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 2 modules
var metadataUtils = __webpack_require__(1003);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/reactUtils.js
var reactUtils = __webpack_require__(9532);
;// ./node_modules/@docusaurus/plugin-content-docs/lib/client/doc.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


const Context = /*#__PURE__*/react.createContext(null);
/**
 * Note: we don't use `PropDoc` as context value on purpose. Metadata is
 * currently stored inside the MDX component, but we may want to change that in
 * the future. This layer is a good opportunity to decouple storage from
 * consuming API, potentially allowing us to provide metadata as both props and
 * route context without duplicating the chunks in the future.
 */
function useContextValue(content) {
  return (0,react.useMemo)(() => ({
    metadata: content.metadata,
    frontMatter: content.frontMatter,
    assets: content.assets,
    contentTitle: content.contentTitle,
    toc: content.toc
  }), [content]);
}
/**
 * This is a very thin layer around the `content` received from the MDX loader.
 * It provides metadata about the doc to the children tree.
 */
function DocProvider(_ref) {
  let {
    children,
    content
  } = _ref;
  const contextValue = useContextValue(content);
  return /*#__PURE__*/react.createElement(Context.Provider, {
    value: contextValue
  }, children);
}
/**
 * Returns the data of the currently browsed doc. Gives access to the doc's MDX
 * Component, front matter, metadata, TOC, etc. When swizzling a low-level
 * component (e.g. the "Edit this page" link) and you need some extra metadata,
 * you don't have to drill the props all the way through the component tree:
 * simply use this hook instead.
 */
function useDoc() {
  const doc = (0,react.useContext)(Context);
  if (doc === null) {
    throw new reactUtils/* ReactContextError */.dV('DocProvider');
  }
  return doc;
}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/Metadata/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



function DocItemMetadata() {
  const {
    metadata,
    frontMatter,
    assets
  } = useDoc();
  return /*#__PURE__*/react.createElement(metadataUtils/* PageMetadata */.be, {
    title: metadata.title,
    description: metadata.description,
    keywords: frontMatter.keywords,
    image: assets.image ?? frontMatter.image
  });
}
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(4164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(4581);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(1312);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(725);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/PaginatorNavLink/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



function PaginatorNavLink(props) {
  const {
    permalink,
    title,
    subLabel,
    isNext
  } = props;
  return /*#__PURE__*/react.createElement(Link/* default */.A, {
    className: (0,clsx/* default */.A)('pagination-nav__link', isNext ? 'pagination-nav__link--next' : 'pagination-nav__link--prev'),
    to: permalink
  }, subLabel && /*#__PURE__*/react.createElement("div", {
    className: "pagination-nav__sublabel"
  }, subLabel), /*#__PURE__*/react.createElement("div", {
    className: "pagination-nav__label"
  }, title));
}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/DocPaginator/index.js
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



function DocPaginator(props) {
  const {
    previous,
    next
  } = props;
  return /*#__PURE__*/react.createElement("nav", {
    className: "pagination-nav docusaurus-mt-lg",
    "aria-label": (0,Translate/* translate */.T)({
      id: 'theme.docs.paginator.navAriaLabel',
      message: 'Docs pages',
      description: 'The ARIA label for the docs pagination'
    })
  }, previous && /*#__PURE__*/react.createElement(PaginatorNavLink, _extends({}, previous, {
    subLabel: /*#__PURE__*/react.createElement(Translate/* default */.A, {
      id: "theme.docs.paginator.previous",
      description: "The label used to navigate to the previous doc"
    }, "Previous")
  })), next && /*#__PURE__*/react.createElement(PaginatorNavLink, _extends({}, next, {
    subLabel: /*#__PURE__*/react.createElement(Translate/* default */.A, {
      id: "theme.docs.paginator.next",
      description: "The label used to navigate to the next doc"
    }, "Next"),
    isNext: true
  })));
}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/Paginator/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * This extra component is needed, because <DocPaginator> should remain generic.
 * DocPaginator is used in non-docs contexts too: generated-index pages...
 */
function DocItemPaginator() {
  const {
    metadata
  } = useDoc();
  return /*#__PURE__*/react.createElement(DocPaginator, {
    previous: metadata.previous,
    next: metadata.next
  });
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(4586);
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/index.js + 2 modules
var client = __webpack_require__(4070);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(7559);
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/docsPreferredVersion.js
var docsPreferredVersion = __webpack_require__(3886);
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/docsVersion.js
var docsVersion = __webpack_require__(3025);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/DocVersionBanner/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */








function UnreleasedVersionLabel(_ref) {
  let {
    siteTitle,
    versionMetadata
  } = _ref;
  return /*#__PURE__*/react.createElement(Translate/* default */.A, {
    id: "theme.docs.versions.unreleasedVersionLabel",
    description: "The label used to tell the user that he's browsing an unreleased doc version",
    values: {
      siteTitle,
      versionLabel: /*#__PURE__*/react.createElement("b", null, versionMetadata.label)
    }
  }, 'This is unreleased documentation for {siteTitle} {versionLabel} version.');
}
function UnmaintainedVersionLabel(_ref2) {
  let {
    siteTitle,
    versionMetadata
  } = _ref2;
  return /*#__PURE__*/react.createElement(Translate/* default */.A, {
    id: "theme.docs.versions.unmaintainedVersionLabel",
    description: "The label used to tell the user that he's browsing an unmaintained doc version",
    values: {
      siteTitle,
      versionLabel: /*#__PURE__*/react.createElement("b", null, versionMetadata.label)
    }
  }, 'This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.');
}
const BannerLabelComponents = {
  unreleased: UnreleasedVersionLabel,
  unmaintained: UnmaintainedVersionLabel
};
function BannerLabel(props) {
  const BannerLabelComponent = BannerLabelComponents[props.versionMetadata.banner];
  return /*#__PURE__*/react.createElement(BannerLabelComponent, props);
}
function LatestVersionSuggestionLabel(_ref3) {
  let {
    versionLabel,
    to,
    onClick
  } = _ref3;
  return /*#__PURE__*/react.createElement(Translate/* default */.A, {
    id: "theme.docs.versions.latestVersionSuggestionLabel",
    description: "The label used to tell the user to check the latest version",
    values: {
      versionLabel,
      latestVersionLink: /*#__PURE__*/react.createElement("b", null, /*#__PURE__*/react.createElement(Link/* default */.A, {
        to: to,
        onClick: onClick
      }, /*#__PURE__*/react.createElement(Translate/* default */.A, {
        id: "theme.docs.versions.latestVersionLinkLabel",
        description: "The label used for the latest version suggestion link label"
      }, "latest version")))
    }
  }, 'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).');
}
function DocVersionBannerEnabled(_ref4) {
  let {
    className,
    versionMetadata
  } = _ref4;
  const {
    siteConfig: {
      title: siteTitle
    }
  } = (0,useDocusaurusContext/* default */.A)();
  const {
    pluginId
  } = (0,client/* useActivePlugin */.vT)({
    failfast: true
  });
  const getVersionMainDoc = version => version.docs.find(doc => doc.id === version.mainDocId);
  const {
    savePreferredVersionName
  } = (0,docsPreferredVersion/* useDocsPreferredVersion */.g1)(pluginId);
  const {
    latestDocSuggestion,
    latestVersionSuggestion
  } = (0,client/* useDocVersionSuggestions */.HW)(pluginId);
  // Try to link to same doc in latest version (not always possible), falling
  // back to main doc of latest version
  const latestVersionSuggestedDoc = latestDocSuggestion ?? getVersionMainDoc(latestVersionSuggestion);
  return /*#__PURE__*/react.createElement("div", {
    className: (0,clsx/* default */.A)(className, ThemeClassNames/* ThemeClassNames */.G.docs.docVersionBanner, 'alert alert--warning margin-bottom--md'),
    role: "alert"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(BannerLabel, {
    siteTitle: siteTitle,
    versionMetadata: versionMetadata
  })), /*#__PURE__*/react.createElement("div", {
    className: "margin-top--md"
  }, /*#__PURE__*/react.createElement(LatestVersionSuggestionLabel, {
    versionLabel: latestVersionSuggestion.label,
    to: latestVersionSuggestedDoc.path,
    onClick: () => savePreferredVersionName(latestVersionSuggestion.name)
  })));
}
function DocVersionBanner(_ref5) {
  let {
    className
  } = _ref5;
  const versionMetadata = (0,docsVersion/* useDocsVersion */.r)();
  if (versionMetadata.banner) {
    return /*#__PURE__*/react.createElement(DocVersionBannerEnabled, {
      className: className,
      versionMetadata: versionMetadata
    });
  }
  return null;
}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/DocVersionBadge/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





function DocVersionBadge(_ref) {
  let {
    className
  } = _ref;
  const versionMetadata = (0,docsVersion/* useDocsVersion */.r)();
  if (versionMetadata.badge) {
    return /*#__PURE__*/react.createElement("span", {
      className: (0,clsx/* default */.A)(className, ThemeClassNames/* ThemeClassNames */.G.docs.docVersionBadge, 'badge badge--secondary')
    }, /*#__PURE__*/react.createElement(Translate/* default */.A, {
      id: "theme.docs.versionBadge.label",
      values: {
        versionLabel: versionMetadata.label
      }
    }, 'Version: {versionLabel}'));
  }
  return null;
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/styles.module.css
var styles_module = __webpack_require__(448);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */




function Tag(_ref) {
  let {
    permalink,
    label,
    count,
    description
  } = _ref;
  return /*#__PURE__*/react.createElement(Link/* default */.A, {
    href: permalink,
    title: description,
    className: (0,clsx/* default */.A)((styles_module_default()).tag, count ? (styles_module_default()).tagWithCount : (styles_module_default()).tagRegular)
  }, label, count && /*#__PURE__*/react.createElement("span", null, count));
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListInline/styles.module.css
var TagsListInline_styles_module = __webpack_require__(4088);
var TagsListInline_styles_module_default = /*#__PURE__*/__webpack_require__.n(TagsListInline_styles_module);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListInline/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





function TagsListInline(_ref) {
  let {
    tags
  } = _ref;
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("b", null, /*#__PURE__*/react.createElement(Translate/* default */.A, {
    id: "theme.tags.tagsListLabel",
    description: "The label alongside a tag list"
  }, "Tags:")), /*#__PURE__*/react.createElement("ul", {
    className: (0,clsx/* default */.A)((TagsListInline_styles_module_default()).tags, 'padding--none', 'margin-left--sm')
  }, tags.map(tag => /*#__PURE__*/react.createElement("li", {
    key: tag.permalink,
    className: (TagsListInline_styles_module_default()).tag
  }, /*#__PURE__*/react.createElement(Tag, tag)))));
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Edit/styles.module.css
var Edit_styles_module = __webpack_require__(1930);
var Edit_styles_module_default = /*#__PURE__*/__webpack_require__.n(Edit_styles_module);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Edit/index.js
function Edit_extends() { return Edit_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, Edit_extends.apply(null, arguments); }
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



function IconEdit(_ref) {
  let {
    className,
    ...restProps
  } = _ref;
  return /*#__PURE__*/react.createElement("svg", Edit_extends({
    fill: "currentColor",
    height: "20",
    width: "20",
    viewBox: "0 0 40 40",
    className: (0,clsx/* default */.A)((Edit_styles_module_default()).iconEdit, className),
    "aria-hidden": "true"
  }, restProps), /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    d: "m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"
  })));
}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/EditThisPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





function EditThisPage(_ref) {
  let {
    editUrl
  } = _ref;
  return /*#__PURE__*/react.createElement(Link/* default */.A, {
    to: editUrl,
    className: ThemeClassNames/* ThemeClassNames */.G.common.editThisPage
  }, /*#__PURE__*/react.createElement(IconEdit, null), /*#__PURE__*/react.createElement(Translate/* default */.A, {
    id: "theme.common.editThisPage",
    description: "The link label to edit the current page"
  }, "Edit this page"));
}
;// ./node_modules/@docusaurus/theme-common/lib/utils/IntlUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function useCalendar() {
  const {
    i18n: {
      currentLocale,
      localeConfigs
    }
  } = (0,useDocusaurusContext/* default */.A)();
  return localeConfigs[currentLocale].calendar;
}
function useDateTimeFormat() {
  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const {
    i18n: {
      currentLocale
    }
  } = (0,useDocusaurusContext/* default */.A)();
  const calendar = useCalendar();
  return new Intl.DateTimeFormat(currentLocale, {
    calendar,
    ...options
  });
}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/LastUpdated/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */




function LastUpdatedAtDate(_ref) {
  let {
    lastUpdatedAt
  } = _ref;
  const atDate = new Date(lastUpdatedAt);
  const dateTimeFormat = useDateTimeFormat({
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC'
  });
  const formattedLastUpdatedAt = dateTimeFormat.format(atDate);
  return /*#__PURE__*/react.createElement(Translate/* default */.A, {
    id: "theme.lastUpdated.atDate",
    description: "The words used to describe on which date a page has been last updated",
    values: {
      date: /*#__PURE__*/react.createElement("b", null, /*#__PURE__*/react.createElement("time", {
        dateTime: atDate.toISOString(),
        itemProp: "dateModified"
      }, formattedLastUpdatedAt))
    }
  }, ' on {date}');
}
function LastUpdatedByUser(_ref2) {
  let {
    lastUpdatedBy
  } = _ref2;
  return /*#__PURE__*/react.createElement(Translate/* default */.A, {
    id: "theme.lastUpdated.byUser",
    description: "The words used to describe by who the page has been last updated",
    values: {
      user: /*#__PURE__*/react.createElement("b", null, lastUpdatedBy)
    }
  }, ' by {user}');
}
function LastUpdated(_ref3) {
  let {
    lastUpdatedAt,
    lastUpdatedBy
  } = _ref3;
  return /*#__PURE__*/react.createElement("span", {
    className: ThemeClassNames/* ThemeClassNames */.G.common.lastUpdated
  }, /*#__PURE__*/react.createElement(Translate/* default */.A, {
    id: "theme.lastUpdated.lastUpdatedAtBy",
    description: "The sentence used to display when a page has been last updated, and by who",
    values: {
      atDate: lastUpdatedAt ? /*#__PURE__*/react.createElement(LastUpdatedAtDate, {
        lastUpdatedAt: lastUpdatedAt
      }) : '',
      byUser: lastUpdatedBy ? /*#__PURE__*/react.createElement(LastUpdatedByUser, {
        lastUpdatedBy: lastUpdatedBy
      }) : ''
    }
  }, 'Last updated{atDate}{byUser}'),  false && /*#__PURE__*/0);
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/EditMetaRow/styles.module.css
var EditMetaRow_styles_module = __webpack_require__(901);
var EditMetaRow_styles_module_default = /*#__PURE__*/__webpack_require__.n(EditMetaRow_styles_module);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/EditMetaRow/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





function EditMetaRow(_ref) {
  let {
    className,
    editUrl,
    lastUpdatedAt,
    lastUpdatedBy
  } = _ref;
  return /*#__PURE__*/react.createElement("div", {
    className: (0,clsx/* default */.A)('row', className)
  }, /*#__PURE__*/react.createElement("div", {
    className: "col"
  }, editUrl && /*#__PURE__*/react.createElement(EditThisPage, {
    editUrl: editUrl
  })), /*#__PURE__*/react.createElement("div", {
    className: (0,clsx/* default */.A)('col', (EditMetaRow_styles_module_default()).lastUpdated)
  }, (lastUpdatedAt || lastUpdatedBy) && /*#__PURE__*/react.createElement(LastUpdated, {
    lastUpdatedAt: lastUpdatedAt,
    lastUpdatedBy: lastUpdatedBy
  })));
}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/Footer/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */






function DocItemFooter() {
  const {
    metadata
  } = useDoc();
  const {
    editUrl,
    lastUpdatedAt,
    lastUpdatedBy,
    tags
  } = metadata;
  const canDisplayTagsRow = tags.length > 0;
  const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);
  const canDisplayFooter = canDisplayTagsRow || canDisplayEditMetaRow;
  if (!canDisplayFooter) {
    return null;
  }
  return /*#__PURE__*/react.createElement("footer", {
    className: (0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docFooter, 'docusaurus-mt-lg')
  }, canDisplayTagsRow && /*#__PURE__*/react.createElement("div", {
    className: (0,clsx/* default */.A)('row margin-top--sm', ThemeClassNames/* ThemeClassNames */.G.docs.docFooterTagsRow)
  }, /*#__PURE__*/react.createElement("div", {
    className: "col"
  }, /*#__PURE__*/react.createElement(TagsListInline, {
    tags: tags
  }))), canDisplayEditMetaRow && /*#__PURE__*/react.createElement(EditMetaRow, {
    className: (0,clsx/* default */.A)('margin-top--sm', ThemeClassNames/* ThemeClassNames */.G.docs.docFooterEditMetaRow),
    editUrl: editUrl,
    lastUpdatedAt: lastUpdatedAt,
    lastUpdatedBy: lastUpdatedBy
  }));
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Collapsible/index.js
var Collapsible = __webpack_require__(1422);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(6342);
;// ./node_modules/@docusaurus/theme-common/lib/utils/tocUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function treeifyTOC(flatTOC) {
  const headings = flatTOC.map(heading => ({
    ...heading,
    parentIndex: -1,
    children: []
  }));
  // Keep track of which previous index would be the current heading's direct
  // parent. Each entry <i> is the last index of the `headings` array at heading
  // level <i>. We will modify these indices as we iterate through all headings.
  // e.g. if an ### H3 was last seen at index 2, then prevIndexForLevel[3] === 2
  // indices 0 and 1 will remain unused.
  const prevIndexForLevel = Array(7).fill(-1);
  headings.forEach((curr, currIndex) => {
    // Take the last seen index for each ancestor level. the highest index will
    // be the direct ancestor of the current heading.
    const ancestorLevelIndexes = prevIndexForLevel.slice(2, curr.level);
    curr.parentIndex = Math.max(...ancestorLevelIndexes);
    // Mark that curr.level was last seen at the current index.
    prevIndexForLevel[curr.level] = currIndex;
  });
  const rootNodes = [];
  // For a given parentIndex, add each Node into that parent's `children` array
  headings.forEach(heading => {
    const {
      parentIndex,
      ...rest
    } = heading;
    if (parentIndex >= 0) {
      headings[parentIndex].children.push(rest);
    } else {
      rootNodes.push(rest);
    }
  });
  return rootNodes;
}
/**
 * Takes a flat TOC list (from the MDX loader) and treeifies it into what the
 * TOC components expect. Memoized for performance.
 */
function useTreeifiedTOC(toc) {
  return useMemo(() => treeifyTOC(toc), [toc]);
}
function filterTOC(_ref) {
  let {
    toc,
    minHeadingLevel,
    maxHeadingLevel
  } = _ref;
  function isValid(item) {
    return item.level >= minHeadingLevel && item.level <= maxHeadingLevel;
  }
  return toc.flatMap(item => {
    const filteredChildren = filterTOC({
      toc: item.children,
      minHeadingLevel,
      maxHeadingLevel
    });
    if (isValid(item)) {
      return [{
        ...item,
        children: filteredChildren
      }];
    }
    return filteredChildren;
  });
}
/**
 * Takes a flat TOC list (from the MDX loader) and treeifies it into what the
 * TOC components expect, applying the `minHeadingLevel` and `maxHeadingLevel`.
 * Memoized for performance.
 *
 * **Important**: this is not the same as `useTreeifiedTOC(toc.filter(...))`,
 * because we have to filter the TOC after it has been treeified. This is mostly
 * to ensure that weird TOC structures preserve their semantics. For example, an
 * h3-h2-h4 sequence should not be treeified as an "h3 > h4" hierarchy with
 * min=3, max=4, but should rather be "[h3, h4]" (since the h2 heading has split
 * the two headings and they are not parent-children)
 */
function useFilteredAndTreeifiedTOC(_ref2) {
  let {
    toc,
    minHeadingLevel,
    maxHeadingLevel
  } = _ref2;
  return (0,react.useMemo)(() => filterTOC({
    toc: treeifyTOC(toc),
    minHeadingLevel,
    maxHeadingLevel
  }), [toc, minHeadingLevel, maxHeadingLevel]);
}
;// ./node_modules/@docusaurus/theme-common/lib/hooks/useTOCHighlight.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


// TODO make the hardcoded theme-classic classnames configurable (or add them
// to ThemeClassNames?)
/**
 * If the anchor has no height and is just a "marker" in the DOM; we'll use the
 * parent (normally the link text) rect boundaries instead
 */
function getVisibleBoundingClientRect(element) {
  const rect = element.getBoundingClientRect();
  const hasNoHeight = rect.top === rect.bottom;
  if (hasNoHeight) {
    return getVisibleBoundingClientRect(element.parentNode);
  }
  return rect;
}
/**
 * Considering we divide viewport into 2 zones of each 50vh, this returns true
 * if an element is in the first zone (i.e., appear in viewport, near the top)
 */
function isInViewportTopHalf(boundingRect) {
  return boundingRect.top > 0 && boundingRect.bottom < window.innerHeight / 2;
}
function getAnchors(_ref) {
  let {
    minHeadingLevel,
    maxHeadingLevel
  } = _ref;
  const selectors = [];
  for (let i = minHeadingLevel; i <= maxHeadingLevel; i += 1) {
    selectors.push(`h${i}.anchor`);
  }
  return Array.from(document.querySelectorAll(selectors.join()));
}
function getActiveAnchor(anchors, _ref2) {
  let {
    anchorTopOffset
  } = _ref2;
  // Naming is hard: The "nextVisibleAnchor" is the first anchor that appear
  // under the viewport top boundary. It does not mean this anchor is visible
  // yet, but if user continues scrolling down, it will be the first to become
  // visible
  const nextVisibleAnchor = anchors.find(anchor => {
    const boundingRect = getVisibleBoundingClientRect(anchor);
    return boundingRect.top >= anchorTopOffset;
  });
  if (nextVisibleAnchor) {
    const boundingRect = getVisibleBoundingClientRect(nextVisibleAnchor);
    // If anchor is in the top half of the viewport: it is the one we consider
    // "active" (unless it's too close to the top and and soon to be scrolled
    // outside viewport)
    if (isInViewportTopHalf(boundingRect)) {
      return nextVisibleAnchor;
    }
    // If anchor is in the bottom half of the viewport, or under the viewport,
    // we consider the active anchor is the previous one. This is because the
    // main text appearing in the user screen mostly belong to the previous
    // anchor. Returns null for the first anchor, see
    // https://github.com/facebook/docusaurus/issues/5318
    return anchors[anchors.indexOf(nextVisibleAnchor) - 1] ?? null;
  }
  // No anchor under viewport top (i.e. we are at the bottom of the page),
  // highlight the last anchor found
  return anchors[anchors.length - 1] ?? null;
}
function getLinkAnchorValue(link) {
  return decodeURIComponent(link.href.substring(link.href.indexOf('#') + 1));
}
function getLinks(linkClassName) {
  return Array.from(document.getElementsByClassName(linkClassName));
}
function getNavbarHeight() {
  // Not ideal to obtain actual height this way
  // Using TS ! (not ?) because otherwise a bad selector would be un-noticed
  return document.querySelector('.navbar').clientHeight;
}
function useAnchorTopOffsetRef() {
  const anchorTopOffsetRef = (0,react.useRef)(0);
  const {
    navbar: {
      hideOnScroll
    }
  } = (0,useThemeConfig/* useThemeConfig */.p)();
  (0,react.useEffect)(() => {
    anchorTopOffsetRef.current = hideOnScroll ? 0 : getNavbarHeight();
  }, [hideOnScroll]);
  return anchorTopOffsetRef;
}
/**
 * Side-effect that applies the active class name to the TOC heading that the
 * user is currently viewing. Disabled when `config` is undefined.
 */
function useTOCHighlight(config) {
  const lastActiveLinkRef = (0,react.useRef)(undefined);
  const anchorTopOffsetRef = useAnchorTopOffsetRef();
  (0,react.useEffect)(() => {
    if (!config) {
      // No-op, highlighting is disabled
      return () => {};
    }
    const {
      linkClassName,
      linkActiveClassName,
      minHeadingLevel,
      maxHeadingLevel
    } = config;
    function updateLinkActiveClass(link, active) {
      if (active) {
        if (lastActiveLinkRef.current && lastActiveLinkRef.current !== link) {
          lastActiveLinkRef.current.classList.remove(linkActiveClassName);
        }
        link.classList.add(linkActiveClassName);
        lastActiveLinkRef.current = link;
        // link.scrollIntoView({block: 'nearest'});
      } else {
        link.classList.remove(linkActiveClassName);
      }
    }
    function updateActiveLink() {
      const links = getLinks(linkClassName);
      const anchors = getAnchors({
        minHeadingLevel,
        maxHeadingLevel
      });
      const activeAnchor = getActiveAnchor(anchors, {
        anchorTopOffset: anchorTopOffsetRef.current
      });
      const activeLink = links.find(link => activeAnchor && activeAnchor.id === getLinkAnchorValue(link));
      links.forEach(link => {
        updateLinkActiveClass(link, link === activeLink);
      });
    }
    document.addEventListener('scroll', updateActiveLink);
    document.addEventListener('resize', updateActiveLink);
    updateActiveLink();
    return () => {
      document.removeEventListener('scroll', updateActiveLink);
      document.removeEventListener('resize', updateActiveLink);
    };
  }, [config, anchorTopOffsetRef]);
}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/TOCItems/Tree.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


// Recursive component rendering the toc tree
function TOCItemTree(_ref) {
  let {
    toc,
    className,
    linkClassName,
    isChild
  } = _ref;
  if (!toc.length) {
    return null;
  }
  return /*#__PURE__*/react.createElement("ul", {
    className: isChild ? undefined : className
  }, toc.map(heading => /*#__PURE__*/react.createElement("li", {
    key: heading.id
  }, /*#__PURE__*/react.createElement(Link/* default */.A, {
    to: `#${heading.id}`,
    className: linkClassName ?? undefined
    // Developer provided the HTML, so assume it's safe.
    ,
    dangerouslySetInnerHTML: {
      __html: heading.value
    }
  }), /*#__PURE__*/react.createElement(TOCItemTree, {
    isChild: true,
    toc: heading.children,
    className: className,
    linkClassName: linkClassName
  }))));
}
// Memo only the tree root is enough
/* harmony default export */ const Tree = (/*#__PURE__*/react.memo(TOCItemTree));
;// ./node_modules/@docusaurus/theme-classic/lib/theme/TOCItems/index.js
function TOCItems_extends() { return TOCItems_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, TOCItems_extends.apply(null, arguments); }
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */




function TOCItems(_ref) {
  let {
    toc,
    className = 'table-of-contents table-of-contents__left-border',
    linkClassName = 'table-of-contents__link',
    linkActiveClassName = undefined,
    minHeadingLevel: minHeadingLevelOption,
    maxHeadingLevel: maxHeadingLevelOption,
    ...props
  } = _ref;
  const themeConfig = (0,useThemeConfig/* useThemeConfig */.p)();
  const minHeadingLevel = minHeadingLevelOption ?? themeConfig.tableOfContents.minHeadingLevel;
  const maxHeadingLevel = maxHeadingLevelOption ?? themeConfig.tableOfContents.maxHeadingLevel;
  const tocTree = useFilteredAndTreeifiedTOC({
    toc,
    minHeadingLevel,
    maxHeadingLevel
  });
  const tocHighlightConfig = (0,react.useMemo)(() => {
    if (linkClassName && linkActiveClassName) {
      return {
        linkClassName,
        linkActiveClassName,
        minHeadingLevel,
        maxHeadingLevel
      };
    }
    return undefined;
  }, [linkClassName, linkActiveClassName, minHeadingLevel, maxHeadingLevel]);
  useTOCHighlight(tocHighlightConfig);
  return /*#__PURE__*/react.createElement(Tree, TOCItems_extends({
    toc: tocTree,
    className: className,
    linkClassName: linkClassName
  }, props));
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCCollapsible/CollapseButton/styles.module.css
var CollapseButton_styles_module = __webpack_require__(9136);
var CollapseButton_styles_module_default = /*#__PURE__*/__webpack_require__.n(CollapseButton_styles_module);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/TOCCollapsible/CollapseButton/index.js
function CollapseButton_extends() { return CollapseButton_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, CollapseButton_extends.apply(null, arguments); }
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */




function TOCCollapsibleCollapseButton(_ref) {
  let {
    collapsed,
    ...props
  } = _ref;
  return /*#__PURE__*/react.createElement("button", CollapseButton_extends({
    type: "button"
  }, props, {
    className: (0,clsx/* default */.A)('clean-btn', (CollapseButton_styles_module_default()).tocCollapsibleButton, !collapsed && (CollapseButton_styles_module_default()).tocCollapsibleButtonExpanded, props.className)
  }), /*#__PURE__*/react.createElement(Translate/* default */.A, {
    id: "theme.TOCCollapsible.toggleButtonLabel",
    description: "The label used by the button on the collapsible TOC component"
  }, "On this page"));
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCCollapsible/styles.module.css
var TOCCollapsible_styles_module = __webpack_require__(2586);
var TOCCollapsible_styles_module_default = /*#__PURE__*/__webpack_require__.n(TOCCollapsible_styles_module);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/TOCCollapsible/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */






function TOCCollapsible(_ref) {
  let {
    toc,
    className,
    minHeadingLevel,
    maxHeadingLevel
  } = _ref;
  const {
    collapsed,
    toggleCollapsed
  } = (0,Collapsible/* useCollapsible */.u)({
    initialState: true
  });
  return /*#__PURE__*/react.createElement("div", {
    className: (0,clsx/* default */.A)((TOCCollapsible_styles_module_default()).tocCollapsible, !collapsed && (TOCCollapsible_styles_module_default()).tocCollapsibleExpanded, className)
  }, /*#__PURE__*/react.createElement(TOCCollapsibleCollapseButton, {
    collapsed: collapsed,
    onClick: toggleCollapsed
  }), /*#__PURE__*/react.createElement(Collapsible/* Collapsible */.N, {
    lazy: true,
    className: (TOCCollapsible_styles_module_default()).tocCollapsibleContent,
    collapsed: collapsed
  }, /*#__PURE__*/react.createElement(TOCItems, {
    toc: toc,
    minHeadingLevel: minHeadingLevel,
    maxHeadingLevel: maxHeadingLevel
  })));
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/TOC/Mobile/styles.module.css
var Mobile_styles_module = __webpack_require__(4061);
var Mobile_styles_module_default = /*#__PURE__*/__webpack_require__.n(Mobile_styles_module);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/TOC/Mobile/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */






function DocItemTOCMobile() {
  const {
    toc,
    frontMatter
  } = useDoc();
  return /*#__PURE__*/react.createElement(TOCCollapsible, {
    toc: toc,
    minHeadingLevel: frontMatter.toc_min_heading_level,
    maxHeadingLevel: frontMatter.toc_max_heading_level,
    className: (0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docTocMobile, (Mobile_styles_module_default()).tocMobile)
  });
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOC/styles.module.css
var TOC_styles_module = __webpack_require__(5490);
var TOC_styles_module_default = /*#__PURE__*/__webpack_require__.n(TOC_styles_module);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/TOC/index.js
function TOC_extends() { return TOC_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, TOC_extends.apply(null, arguments); }
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */




// Using a custom className
// This prevents TOCInline/TOCCollapsible getting highlighted by mistake
const LINK_CLASS_NAME = 'table-of-contents__link toc-highlight';
const LINK_ACTIVE_CLASS_NAME = 'table-of-contents__link--active';
function TOC(_ref) {
  let {
    className,
    ...props
  } = _ref;
  return /*#__PURE__*/react.createElement("div", {
    className: (0,clsx/* default */.A)((TOC_styles_module_default()).tableOfContents, 'thin-scrollbar', className)
  }, /*#__PURE__*/react.createElement(TOCItems, TOC_extends({}, props, {
    linkClassName: LINK_CLASS_NAME,
    linkActiveClassName: LINK_ACTIVE_CLASS_NAME
  })));
}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/TOC/Desktop/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */




function DocItemTOCDesktop() {
  const {
    toc,
    frontMatter
  } = useDoc();
  return /*#__PURE__*/react.createElement(TOC, {
    toc: toc,
    minHeadingLevel: frontMatter.toc_min_heading_level,
    maxHeadingLevel: frontMatter.toc_max_heading_level,
    className: ThemeClassNames/* ThemeClassNames */.G.docs.docTocDesktop
  });
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js
var Heading = __webpack_require__(4608);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(5260);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(2303);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/colorMode.js
var contexts_colorMode = __webpack_require__(5293);
;// ./node_modules/@docusaurus/theme-common/lib/hooks/usePrismTheme.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


/**
 * Returns a color-mode-dependent Prism theme: whatever the user specified in
 * the config. Falls back to `palenight`.
 */
function usePrismTheme() {
  const {
    prism
  } = (0,useThemeConfig/* useThemeConfig */.p)();
  const {
    colorMode
  } = (0,contexts_colorMode/* useColorMode */.G)();
  const lightModeTheme = prism.theme;
  const darkModeTheme = prism.darkTheme || lightModeTheme;
  const prismTheme = colorMode === 'dark' ? darkModeTheme : lightModeTheme;
  return prismTheme;
}
// EXTERNAL MODULE: ./node_modules/parse-numeric-range/index.js
var parse_numeric_range = __webpack_require__(8426);
var parse_numeric_range_default = /*#__PURE__*/__webpack_require__.n(parse_numeric_range);
;// ./node_modules/@docusaurus/theme-common/lib/utils/codeBlockUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const codeBlockTitleRegex = /title=(?<quote>["'])(?<title>.*?)\1/;
const metastringLinesRangeRegex = /\{(?<range>[\d,-]+)\}/;
// Supported types of highlight comments
const popularCommentPatterns = {
  js: {
    start: '\\/\\/',
    end: ''
  },
  jsBlock: {
    start: '\\/\\*',
    end: '\\*\\/'
  },
  jsx: {
    start: '\\{\\s*\\/\\*',
    end: '\\*\\/\\s*\\}'
  },
  bash: {
    start: '#',
    end: ''
  },
  html: {
    start: '<!--',
    end: '-->'
  }
};
const commentPatterns = {
  ...popularCommentPatterns,
  // shallow copy is sufficient
  // minor comment styles
  lua: {
    start: '--',
    end: ''
  },
  wasm: {
    start: '\\;\\;',
    end: ''
  },
  tex: {
    start: '%',
    end: ''
  },
  vb: {
    start: "['‘’]",
    end: ''
  },
  vbnet: {
    start: "(?:_\\s*)?['‘’]",
    end: ''
  },
  // Visual Studio 2019 or later
  rem: {
    start: '[Rr][Ee][Mm]\\b',
    end: ''
  },
  f90: {
    start: '!',
    end: ''
  },
  // Free format only
  ml: {
    start: '\\(\\*',
    end: '\\*\\)'
  },
  cobol: {
    start: '\\*>',
    end: ''
  } // Free format only
};
const popularCommentTypes = Object.keys(popularCommentPatterns);
function getCommentPattern(languages, magicCommentDirectives) {
  // To be more reliable, the opening and closing comment must match
  const commentPattern = languages.map(lang => {
    const {
      start,
      end
    } = commentPatterns[lang];
    return `(?:${start}\\s*(${magicCommentDirectives.flatMap(d => [d.line, d.block?.start, d.block?.end].filter(Boolean)).join('|')})\\s*${end})`;
  }).join('|');
  // White space is allowed, but otherwise it should be on it's own line
  return new RegExp(`^\\s*(?:${commentPattern})\\s*$`);
}
/**
 * Select comment styles based on language
 */
function getAllMagicCommentDirectiveStyles(lang, magicCommentDirectives) {
  switch (lang) {
    case 'js':
    case 'javascript':
    case 'ts':
    case 'typescript':
      return getCommentPattern(['js', 'jsBlock'], magicCommentDirectives);
    case 'jsx':
    case 'tsx':
      return getCommentPattern(['js', 'jsBlock', 'jsx'], magicCommentDirectives);
    case 'html':
      return getCommentPattern(['js', 'jsBlock', 'html'], magicCommentDirectives);
    case 'python':
    case 'py':
    case 'bash':
      return getCommentPattern(['bash'], magicCommentDirectives);
    case 'markdown':
    case 'md':
      // Text uses HTML, front matter uses bash
      return getCommentPattern(['html', 'jsx', 'bash'], magicCommentDirectives);
    case 'tex':
    case 'latex':
    case 'matlab':
      return getCommentPattern(['tex'], magicCommentDirectives);
    case 'lua':
    case 'haskell':
    case 'sql':
      return getCommentPattern(['lua'], magicCommentDirectives);
    case 'wasm':
      return getCommentPattern(['wasm'], magicCommentDirectives);
    case 'vb':
    case 'vba':
    case 'visual-basic':
      return getCommentPattern(['vb', 'rem'], magicCommentDirectives);
    case 'vbnet':
      return getCommentPattern(['vbnet', 'rem'], magicCommentDirectives);
    case 'batch':
      return getCommentPattern(['rem'], magicCommentDirectives);
    case 'basic':
      // https://github.com/PrismJS/prism/blob/master/components/prism-basic.js#L3
      return getCommentPattern(['rem', 'f90'], magicCommentDirectives);
    case 'fsharp':
      return getCommentPattern(['js', 'ml'], magicCommentDirectives);
    case 'ocaml':
    case 'sml':
      return getCommentPattern(['ml'], magicCommentDirectives);
    case 'fortran':
      return getCommentPattern(['f90'], magicCommentDirectives);
    case 'cobol':
      return getCommentPattern(['cobol'], magicCommentDirectives);
    default:
      // All popular comment types
      return getCommentPattern(popularCommentTypes, magicCommentDirectives);
  }
}
function parseCodeBlockTitle(metastring) {
  return metastring?.match(codeBlockTitleRegex)?.groups.title ?? '';
}
function containsLineNumbers(metastring) {
  return Boolean(metastring?.includes('showLineNumbers'));
}
/**
 * Gets the language name from the class name (set by MDX).
 * e.g. `"language-javascript"` => `"javascript"`.
 * Returns undefined if there is no language class name.
 */
function parseLanguage(className) {
  const languageClassName = className.split(' ').find(str => str.startsWith('language-'));
  return languageClassName?.replace(/language-/, '');
}
/**
 * Parses the code content, strips away any magic comments, and returns the
 * clean content and the highlighted lines marked by the comments or metastring.
 *
 * If the metastring contains a range, the `content` will be returned as-is
 * without any parsing. The returned `lineClassNames` will be a map from that
 * number range to the first magic comment config entry (which _should_ be for
 * line highlight directives.)
 *
 * @param content The raw code with magic comments. Trailing newline will be
 * trimmed upfront.
 * @param options Options for parsing behavior.
 */
function parseLines(content, options) {
  let code = content.replace(/\n$/, '');
  const {
    language,
    magicComments,
    metastring
  } = options;
  // Highlighted lines specified in props: don't parse the content
  if (metastring && metastringLinesRangeRegex.test(metastring)) {
    const linesRange = metastring.match(metastringLinesRangeRegex).groups.range;
    if (magicComments.length === 0) {
      throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${metastring}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);
    }
    const metastringRangeClassName = magicComments[0].className;
    const lines = parse_numeric_range_default()(linesRange).filter(n => n > 0).map(n => [n - 1, [metastringRangeClassName]]);
    return {
      lineClassNames: Object.fromEntries(lines),
      code
    };
  }
  if (language === undefined) {
    return {
      lineClassNames: {},
      code
    };
  }
  const directiveRegex = getAllMagicCommentDirectiveStyles(language, magicComments);
  // Go through line by line
  const lines = code.split('\n');
  const blocks = Object.fromEntries(magicComments.map(d => [d.className, {
    start: 0,
    range: ''
  }]));
  const lineToClassName = Object.fromEntries(magicComments.filter(d => d.line).map(_ref => {
    let {
      className,
      line
    } = _ref;
    return [line, className];
  }));
  const blockStartToClassName = Object.fromEntries(magicComments.filter(d => d.block).map(_ref2 => {
    let {
      className,
      block
    } = _ref2;
    return [block.start, className];
  }));
  const blockEndToClassName = Object.fromEntries(magicComments.filter(d => d.block).map(_ref3 => {
    let {
      className,
      block
    } = _ref3;
    return [block.end, className];
  }));
  for (let lineNumber = 0; lineNumber < lines.length;) {
    const line = lines[lineNumber];
    const match = line.match(directiveRegex);
    if (!match) {
      // Lines without directives are unchanged
      lineNumber += 1;
      continue;
    }
    const directive = match.slice(1).find(item => item !== undefined);
    if (lineToClassName[directive]) {
      blocks[lineToClassName[directive]].range += `${lineNumber},`;
    } else if (blockStartToClassName[directive]) {
      blocks[blockStartToClassName[directive]].start = lineNumber;
    } else if (blockEndToClassName[directive]) {
      blocks[blockEndToClassName[directive]].range += `${blocks[blockEndToClassName[directive]].start}-${lineNumber - 1},`;
    }
    lines.splice(lineNumber, 1);
  }
  code = lines.join('\n');
  const lineClassNames = {};
  Object.entries(blocks).forEach(_ref4 => {
    let [className, {
      range
    }] = _ref4;
    parse_numeric_range_default()(range).forEach(l => {
      lineClassNames[l] ??= [];
      lineClassNames[l].push(className);
    });
  });
  return {
    lineClassNames,
    code
  };
}
function getPrismCssVariables(prismTheme) {
  const mapping = {
    color: '--prism-color',
    backgroundColor: '--prism-background-color'
  };
  const properties = {};
  Object.entries(prismTheme.plain).forEach(_ref5 => {
    let [key, value] = _ref5;
    const varName = mapping[key];
    if (varName && typeof value === 'string') {
      properties[varName] = value;
    }
  });
  return properties;
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Container/styles.module.css
var Container_styles_module = __webpack_require__(1702);
var Container_styles_module_default = /*#__PURE__*/__webpack_require__.n(Container_styles_module);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Container/index.js
function Container_extends() { return Container_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, Container_extends.apply(null, arguments); }
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





function CodeBlockContainer(_ref) {
  let {
    as: As,
    ...props
  } = _ref;
  const prismTheme = usePrismTheme();
  const prismCssVariables = getPrismCssVariables(prismTheme);
  return /*#__PURE__*/react.createElement(As
  // Polymorphic components are hard to type, without `oneOf` generics
  , Container_extends({}, props, {
    style: prismCssVariables,
    className: (0,clsx/* default */.A)(props.className, (Container_styles_module_default()).codeBlockContainer, ThemeClassNames/* ThemeClassNames */.G.common.codeBlock)
  }));
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Content/styles.module.css
var Content_styles_module = __webpack_require__(6128);
var Content_styles_module_default = /*#__PURE__*/__webpack_require__.n(Content_styles_module);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Content/Element.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */




// <pre> tags in markdown map to CodeBlocks. They may contain JSX children. When
// the children is not a simple string, we just return a styled block without
// actually highlighting.
function CodeBlockJSX(_ref) {
  let {
    children,
    className
  } = _ref;
  return /*#__PURE__*/react.createElement(CodeBlockContainer, {
    as: "pre",
    tabIndex: 0,
    className: (0,clsx/* default */.A)((Content_styles_module_default()).codeBlockStandalone, 'thin-scrollbar', className)
  }, /*#__PURE__*/react.createElement("code", {
    className: (Content_styles_module_default()).codeBlockLines
  }, children));
}
;// ./node_modules/@docusaurus/theme-common/lib/hooks/useMutationObserver.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


const DefaultOptions = {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true
};
function useMutationObserver(target, callback) {
  let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DefaultOptions;
  const stableCallback = (0,reactUtils/* useEvent */._q)(callback);
  // MutationObserver options are not nested much
  // so this should be to memo options in 99%
  // TODO handle options.attributeFilter array
  const stableOptions = (0,reactUtils/* useShallowMemoObject */.Be)(options);
  (0,react.useEffect)(() => {
    const observer = new MutationObserver(stableCallback);
    if (target) {
      observer.observe(target, stableOptions);
    }
    return () => observer.disconnect();
  }, [target, stableCallback, stableOptions]);
}
;// ./node_modules/@docusaurus/theme-common/lib/hooks/useCodeWordWrap.js


// Callback fires when the "hidden" attribute of a tabpanel changes
// See https://github.com/facebook/docusaurus/pull/7485
function useTabBecameVisibleCallback(codeBlockRef, callback) {
  const [hiddenTabElement, setHiddenTabElement] = (0,react.useState)();
  const updateHiddenTabElement = (0,react.useCallback)(() => {
    // No need to observe non-hidden tabs
    // + we want to force a re-render when a tab becomes visible
    setHiddenTabElement(codeBlockRef.current?.closest('[role=tabpanel][hidden]'));
  }, [codeBlockRef, setHiddenTabElement]);
  (0,react.useEffect)(() => {
    updateHiddenTabElement();
  }, [updateHiddenTabElement]);
  useMutationObserver(hiddenTabElement, mutations => {
    mutations.forEach(mutation => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'hidden') {
        callback();
        updateHiddenTabElement();
      }
    });
  }, {
    attributes: true,
    characterData: false,
    childList: false,
    subtree: false
  });
}
function useCodeWordWrap() {
  const [isEnabled, setIsEnabled] = (0,react.useState)(false);
  const [isCodeScrollable, setIsCodeScrollable] = (0,react.useState)(false);
  const codeBlockRef = (0,react.useRef)(null);
  const toggle = (0,react.useCallback)(() => {
    const codeElement = codeBlockRef.current.querySelector('code');
    if (isEnabled) {
      codeElement.removeAttribute('style');
    } else {
      codeElement.style.whiteSpace = 'pre-wrap';
      // When code wrap is enabled, we want to avoid a scrollbar in any case
      // Ensure that very very long words/strings/tokens still wrap
      codeElement.style.overflowWrap = 'anywhere';
    }
    setIsEnabled(value => !value);
  }, [codeBlockRef, isEnabled]);
  const updateCodeIsScrollable = (0,react.useCallback)(() => {
    const {
      scrollWidth,
      clientWidth
    } = codeBlockRef.current;
    const isScrollable = scrollWidth > clientWidth || codeBlockRef.current.querySelector('code').hasAttribute('style');
    setIsCodeScrollable(isScrollable);
  }, [codeBlockRef]);
  useTabBecameVisibleCallback(codeBlockRef, updateCodeIsScrollable);
  (0,react.useEffect)(() => {
    updateCodeIsScrollable();
  }, [isEnabled, updateCodeIsScrollable]);
  (0,react.useEffect)(() => {
    window.addEventListener('resize', updateCodeIsScrollable, {
      passive: true
    });
    return () => {
      window.removeEventListener('resize', updateCodeIsScrollable);
    };
  }, [updateCodeIsScrollable]);
  return {
    codeBlockRef,
    isEnabled,
    isCodeScrollable,
    toggle
  };
}
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/dist/index.mjs
var dist = __webpack_require__(1765);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Line/styles.module.css
var Line_styles_module = __webpack_require__(3083);
var Line_styles_module_default = /*#__PURE__*/__webpack_require__.n(Line_styles_module);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Line/index.js
function Line_extends() { return Line_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, Line_extends.apply(null, arguments); }
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



function CodeBlockLine(_ref) {
  let {
    line,
    classNames,
    showLineNumbers,
    getLineProps,
    getTokenProps
  } = _ref;
  if (line.length === 1 && line[0].content === '\n') {
    line[0].content = '';
  }
  const lineProps = getLineProps({
    line,
    className: (0,clsx/* default */.A)(classNames, showLineNumbers && (Line_styles_module_default()).codeLine)
  });
  const lineTokens = line.map((token, key) => /*#__PURE__*/react.createElement("span", Line_extends({
    key: key
  }, getTokenProps({
    token
  }))));
  return /*#__PURE__*/react.createElement("span", lineProps, showLineNumbers ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("span", {
    className: (Line_styles_module_default()).codeLineNumber
  }), /*#__PURE__*/react.createElement("span", {
    className: (Line_styles_module_default()).codeLineContent
  }, lineTokens)) : lineTokens, /*#__PURE__*/react.createElement("br", null));
}
;// ./node_modules/copy-text-to-clipboard/index.js
function copyTextToClipboard(text) {
  let {
    target = document.body
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (typeof text !== 'string') {
    throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof text}\`.`);
  }
  const element = document.createElement('textarea');
  const previouslyFocusedElement = document.activeElement;
  element.value = text;

  // Prevent keyboard from showing on mobile
  element.setAttribute('readonly', '');
  element.style.contain = 'strict';
  element.style.position = 'absolute';
  element.style.left = '-9999px';
  element.style.fontSize = '12pt'; // Prevent zooming on iOS

  const selection = document.getSelection();
  const originalRange = selection.rangeCount > 0 && selection.getRangeAt(0);
  target.append(element);
  element.select();

  // Explicit selection workaround for iOS
  element.selectionStart = 0;
  element.selectionEnd = text.length;
  let isSuccess = false;
  try {
    isSuccess = document.execCommand('copy');
  } catch {}
  element.remove();
  if (originalRange) {
    selection.removeAllRanges();
    selection.addRange(originalRange);
  }

  // Get the focus back on the previously focused element, if any
  if (previouslyFocusedElement) {
    previouslyFocusedElement.focus();
  }
  return isSuccess;
}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Copy/index.js
function Copy_extends() { return Copy_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, Copy_extends.apply(null, arguments); }
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function IconCopy(props) {
  return /*#__PURE__*/react.createElement("svg", Copy_extends({
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "currentColor",
    d: "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
  }));
}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Success/index.js
function Success_extends() { return Success_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, Success_extends.apply(null, arguments); }
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function IconSuccess(props) {
  return /*#__PURE__*/react.createElement("svg", Success_extends({
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "currentColor",
    d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
  }));
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/CopyButton/styles.module.css
var CopyButton_styles_module = __webpack_require__(4142);
var CopyButton_styles_module_default = /*#__PURE__*/__webpack_require__.n(CopyButton_styles_module);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/CopyButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */







function CopyButton(_ref) {
  let {
    code,
    className
  } = _ref;
  const [isCopied, setIsCopied] = (0,react.useState)(false);
  const copyTimeout = (0,react.useRef)(undefined);
  const handleCopyCode = (0,react.useCallback)(() => {
    copyTextToClipboard(code);
    setIsCopied(true);
    copyTimeout.current = window.setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  }, [code]);
  (0,react.useEffect)(() => () => window.clearTimeout(copyTimeout.current), []);
  return /*#__PURE__*/react.createElement("button", {
    type: "button",
    "aria-label": isCopied ? (0,Translate/* translate */.T)({
      id: 'theme.CodeBlock.copied',
      message: 'Copied',
      description: 'The copied button label on code blocks'
    }) : (0,Translate/* translate */.T)({
      id: 'theme.CodeBlock.copyButtonAriaLabel',
      message: 'Copy code to clipboard',
      description: 'The ARIA label for copy code blocks button'
    }),
    title: (0,Translate/* translate */.T)({
      id: 'theme.CodeBlock.copy',
      message: 'Copy',
      description: 'The copy button label on code blocks'
    }),
    className: (0,clsx/* default */.A)('clean-btn', className, (CopyButton_styles_module_default()).copyButton, isCopied && (CopyButton_styles_module_default()).copyButtonCopied),
    onClick: handleCopyCode
  }, /*#__PURE__*/react.createElement("span", {
    className: (CopyButton_styles_module_default()).copyButtonIcons,
    "aria-hidden": "true"
  }, /*#__PURE__*/react.createElement(IconCopy, {
    className: (CopyButton_styles_module_default()).copyButtonIcon
  }), /*#__PURE__*/react.createElement(IconSuccess, {
    className: (CopyButton_styles_module_default()).copyButtonSuccessIcon
  })));
}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/WordWrap/index.js
function WordWrap_extends() { return WordWrap_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, WordWrap_extends.apply(null, arguments); }
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function IconWordWrap(props) {
  return /*#__PURE__*/react.createElement("svg", WordWrap_extends({
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "currentColor",
    d: "M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"
  }));
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/WordWrapButton/styles.module.css
var WordWrapButton_styles_module = __webpack_require__(9501);
var WordWrapButton_styles_module_default = /*#__PURE__*/__webpack_require__.n(WordWrapButton_styles_module);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/WordWrapButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





function WordWrapButton(_ref) {
  let {
    className,
    onClick,
    isEnabled
  } = _ref;
  const title = (0,Translate/* translate */.T)({
    id: 'theme.CodeBlock.wordWrapToggle',
    message: 'Toggle word wrap',
    description: 'The title attribute for toggle word wrapping button of code block lines'
  });
  return /*#__PURE__*/react.createElement("button", {
    type: "button",
    onClick: onClick,
    className: (0,clsx/* default */.A)('clean-btn', className, isEnabled && (WordWrapButton_styles_module_default()).wordWrapButtonEnabled),
    "aria-label": title,
    title: title
  }, /*#__PURE__*/react.createElement(IconWordWrap, {
    className: (WordWrapButton_styles_module_default()).wordWrapButtonIcon,
    "aria-hidden": "true"
  }));
}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Content/String.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */










// Prism languages are always lowercase
// We want to fail-safe and allow both "php" and "PHP"
// See https://github.com/facebook/docusaurus/issues/9012
function normalizeLanguage(language) {
  return language?.toLowerCase();
}
function CodeBlockString(_ref) {
  let {
    children,
    className: blockClassName = '',
    metastring,
    title: titleProp,
    showLineNumbers: showLineNumbersProp,
    language: languageProp
  } = _ref;
  const {
    prism: {
      defaultLanguage,
      magicComments
    }
  } = (0,useThemeConfig/* useThemeConfig */.p)();
  const language = normalizeLanguage(languageProp ?? parseLanguage(blockClassName) ?? defaultLanguage);
  const prismTheme = usePrismTheme();
  const wordWrap = useCodeWordWrap();
  // We still parse the metastring in case we want to support more syntax in the
  // future. Note that MDX doesn't strip quotes when parsing metastring:
  // "title=\"xyz\"" => title: "\"xyz\""
  const title = parseCodeBlockTitle(metastring) || titleProp;
  const {
    lineClassNames,
    code
  } = parseLines(children, {
    metastring,
    language,
    magicComments
  });
  const showLineNumbers = showLineNumbersProp ?? containsLineNumbers(metastring);
  return /*#__PURE__*/react.createElement(CodeBlockContainer, {
    as: "div",
    className: (0,clsx/* default */.A)(blockClassName, language && !blockClassName.includes(`language-${language}`) && `language-${language}`)
  }, title && /*#__PURE__*/react.createElement("div", {
    className: (Content_styles_module_default()).codeBlockTitle
  }, title), /*#__PURE__*/react.createElement("div", {
    className: (Content_styles_module_default()).codeBlockContent
  }, /*#__PURE__*/react.createElement(dist/* Highlight */.f4, {
    theme: prismTheme,
    code: code,
    language: language ?? 'text'
  }, _ref2 => {
    let {
      className,
      style,
      tokens,
      getLineProps,
      getTokenProps
    } = _ref2;
    return /*#__PURE__*/react.createElement("pre", {
      /* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */
      tabIndex: 0,
      ref: wordWrap.codeBlockRef,
      className: (0,clsx/* default */.A)(className, (Content_styles_module_default()).codeBlock, 'thin-scrollbar'),
      style: style
    }, /*#__PURE__*/react.createElement("code", {
      className: (0,clsx/* default */.A)((Content_styles_module_default()).codeBlockLines, showLineNumbers && (Content_styles_module_default()).codeBlockLinesWithNumbering)
    }, tokens.map((line, i) => /*#__PURE__*/react.createElement(CodeBlockLine, {
      key: i,
      line: line,
      getLineProps: getLineProps,
      getTokenProps: getTokenProps,
      classNames: lineClassNames[i],
      showLineNumbers: showLineNumbers
    }))));
  }), /*#__PURE__*/react.createElement("div", {
    className: (Content_styles_module_default()).buttonGroup
  }, (wordWrap.isEnabled || wordWrap.isCodeScrollable) && /*#__PURE__*/react.createElement(WordWrapButton, {
    className: (Content_styles_module_default()).codeButton,
    onClick: () => wordWrap.toggle(),
    isEnabled: wordWrap.isEnabled
  }), /*#__PURE__*/react.createElement(CopyButton, {
    className: (Content_styles_module_default()).codeButton,
    code: code
  }))));
}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/index.js
function CodeBlock_extends() { return CodeBlock_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, CodeBlock_extends.apply(null, arguments); }
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */




/**
 * Best attempt to make the children a plain string so it is copyable. If there
 * are react elements, we will not be able to copy the content, and it will
 * return `children` as-is; otherwise, it concatenates the string children
 * together.
 */
function maybeStringifyChildren(children) {
  if (react.Children.toArray(children).some(el => /*#__PURE__*/(0,react.isValidElement)(el))) {
    return children;
  }
  // The children is now guaranteed to be one/more plain strings
  return Array.isArray(children) ? children.join('') : children;
}
function CodeBlock(_ref) {
  let {
    children: rawChildren,
    ...props
  } = _ref;
  // The Prism theme on SSR is always the default theme but the site theme can
  // be in a different mode. React hydration doesn't update DOM styles that come
  // from SSR. Hence force a re-render after mounting to apply the current
  // relevant styles.
  const isBrowser = (0,useIsBrowser/* default */.A)();
  const children = maybeStringifyChildren(rawChildren);
  const CodeBlockComp = typeof children === 'string' ? CodeBlockString : CodeBlockJSX;
  return /*#__PURE__*/react.createElement(CodeBlockComp, CodeBlock_extends({
    key: String(isBrowser)
  }, props), children);
}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeInline/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Simple component used to render inline code blocks
// its purpose is to be swizzled and customized
// MDX 1 used to have a inlineCode comp, see https://mdxjs.com/migrating/v2/
function CodeInline(props) {
  return /*#__PURE__*/react.createElement("code", props);
}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Code.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



function shouldBeInline(props) {
  return (
    // empty code blocks have no props.children,
    // see https://github.com/facebook/docusaurus/pull/9704
    typeof props.children !== 'undefined' && react.Children.toArray(props.children).every(el => typeof el === 'string' && !el.includes('\n'))
  );
}
function MDXCode(props) {
  return shouldBeInline(props) ? /*#__PURE__*/react.createElement(CodeInline, props) : /*#__PURE__*/react.createElement(CodeBlock, props);
}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/A.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function MDXA(props) {
  return /*#__PURE__*/react.createElement(Link/* default */.A, props);
}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Pre.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function MDXPre(props) {
  // With MDX 2, this element is only used for fenced code blocks
  // It always receives a MDXComponents/Code as children
  return /*#__PURE__*/react.createElement(react.Fragment, null, props.children);
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBrokenLinks.js
var useBrokenLinks = __webpack_require__(2521);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Details/styles.module.css
var Details_styles_module = __webpack_require__(6062);
var Details_styles_module_default = /*#__PURE__*/__webpack_require__.n(Details_styles_module);
;// ./node_modules/@docusaurus/theme-common/lib/components/Details/index.js
function Details_extends() { return Details_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, Details_extends.apply(null, arguments); }
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */






function isInSummary(node) {
  if (!node) {
    return false;
  }
  return node.tagName === 'SUMMARY' || isInSummary(node.parentElement);
}
function hasParent(node, parent) {
  if (!node) {
    return false;
  }
  return node === parent || hasParent(node.parentElement, parent);
}
/**
 * A mostly un-styled `<details>` element with smooth collapsing. Provides some
 * very lightweight styles, but you should bring your UI.
 */
function Details(_ref) {
  let {
    summary,
    children,
    ...props
  } = _ref;
  (0,useBrokenLinks/* default */.A)().collectAnchor(props.id);
  const isBrowser = (0,useIsBrowser/* default */.A)();
  const detailsRef = (0,react.useRef)(null);
  const {
    collapsed,
    setCollapsed
  } = (0,Collapsible/* useCollapsible */.u)({
    initialState: !props.open
  });
  // Use a separate state for the actual details prop, because it must be set
  // only after animation completes, otherwise close animations won't work
  const [open, setOpen] = (0,react.useState)(props.open);
  const summaryElement = /*#__PURE__*/react.isValidElement(summary) ? summary : /*#__PURE__*/react.createElement("summary", null, summary ?? 'Details');
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    react.createElement("details", Details_extends({}, props, {
      ref: detailsRef,
      open: open,
      "data-collapsed": collapsed,
      className: (0,clsx/* default */.A)((Details_styles_module_default()).details, isBrowser && (Details_styles_module_default()).isBrowser, props.className),
      onMouseDown: e => {
        const target = e.target;
        // Prevent a double-click to highlight summary text
        if (isInSummary(target) && e.detail > 1) {
          e.preventDefault();
        }
      },
      onClick: e => {
        e.stopPropagation(); // For isolation of multiple nested details/summary
        const target = e.target;
        const shouldToggle = isInSummary(target) && hasParent(target, detailsRef.current);
        if (!shouldToggle) {
          return;
        }
        e.preventDefault();
        if (collapsed) {
          setCollapsed(false);
          setOpen(true);
        } else {
          setCollapsed(true);
          // Don't do this, it breaks close animation!
          // setOpen(false);
        }
      }
    }), summaryElement, /*#__PURE__*/react.createElement(Collapsible/* Collapsible */.N, {
      lazy: false // Content might matter for SEO in this case
      ,
      collapsed: collapsed,
      disableSSRStyle: true // Allows component to work fine even with JS disabled!
      ,
      onCollapseTransitionEnd: newCollapsed => {
        setCollapsed(newCollapsed);
        setOpen(!newCollapsed);
      }
    }, /*#__PURE__*/react.createElement("div", {
      className: (Details_styles_module_default()).collapsibleContent
    }, children)))
  );
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Details/styles.module.css
var theme_Details_styles_module = __webpack_require__(3406);
var theme_Details_styles_module_default = /*#__PURE__*/__webpack_require__.n(theme_Details_styles_module);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Details/index.js
function theme_Details_extends() { return theme_Details_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, theme_Details_extends.apply(null, arguments); }
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */




// Should we have a custom details/summary comp in Infima instead of reusing
// alert classes?
const InfimaClasses = 'alert alert--info';
function Details_Details(_ref) {
  let {
    ...props
  } = _ref;
  return /*#__PURE__*/react.createElement(Details, theme_Details_extends({}, props, {
    className: (0,clsx/* default */.A)(InfimaClasses, (theme_Details_styles_module_default()).details, props.className)
  }));
}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Details.js
function MDXComponents_Details_extends() { return MDXComponents_Details_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, MDXComponents_Details_extends.apply(null, arguments); }
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function MDXDetails(props) {
  const items = react.Children.toArray(props.children);
  // Split summary item from the rest to pass it as a separate prop to the
  // Details theme component
  const summary = items.find(item => /*#__PURE__*/react.isValidElement(item) && item.type === 'summary');
  const children = /*#__PURE__*/react.createElement(react.Fragment, null, items.filter(item => item !== summary));
  return /*#__PURE__*/react.createElement(Details_Details, MDXComponents_Details_extends({}, props, {
    summary: summary
  }), children);
}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Heading.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function MDXHeading(props) {
  return /*#__PURE__*/react.createElement(Heading/* default */.A, props);
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Ul/styles.module.css
var Ul_styles_module = __webpack_require__(7691);
var Ul_styles_module_default = /*#__PURE__*/__webpack_require__.n(Ul_styles_module);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Ul/index.js
function Ul_extends() { return Ul_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, Ul_extends.apply(null, arguments); }
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



function transformUlClassName(className) {
  // Fix https://github.com/facebook/docusaurus/issues/9098
  if (typeof className === 'undefined') {
    return undefined;
  }
  return (0,clsx/* default */.A)(className,
  // This class is set globally by GitHub/MDX. We keep the global class, and
  // add another class to get a task list without the default ul styling
  // See https://github.com/syntax-tree/mdast-util-to-hast/issues/28
  className?.includes('contains-task-list') && (Ul_styles_module_default()).containsTaskList);
}
function MDXUl(props) {
  return /*#__PURE__*/react.createElement("ul", Ul_extends({}, props, {
    className: transformUlClassName(props.className)
  }));
}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Li.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function MDXLi(props) {
  // MDX Footnotes have ids such as <li id="user-content-fn-1-953011">
  (0,useBrokenLinks/* default */.A)().collectAnchor(props.id);
  return /*#__PURE__*/react.createElement("li", props);
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Img/styles.module.css
var Img_styles_module = __webpack_require__(8081);
var Img_styles_module_default = /*#__PURE__*/__webpack_require__.n(Img_styles_module);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Img/index.js
function Img_extends() { return Img_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, Img_extends.apply(null, arguments); }
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



function transformImgClassName(className) {
  return (0,clsx/* default */.A)(className, (Img_styles_module_default()).img);
}
function MDXImg(props) {
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/alt-text
    react.createElement("img", Img_extends({
      decoding: "async",
      loading: "lazy"
    }, props, {
      className: transformImgClassName(props.className)
    }))
  );
}
;// ./node_modules/@docusaurus/theme-common/lib/utils/admonitionUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Workaround because it's difficult in MDX v1 to provide a MDX title as props
// See https://github.com/facebook/docusaurus/pull/7152#issuecomment-1145779682
function extractMDXAdmonitionTitle(children) {
  const items = react.Children.toArray(children);
  const mdxAdmonitionTitleWrapper = items.find(item => /*#__PURE__*/react.isValidElement(item) && item.type === 'mdxAdmonitionTitle');
  const rest = items.filter(item => item !== mdxAdmonitionTitleWrapper);
  const mdxAdmonitionTitle = mdxAdmonitionTitleWrapper?.props.children;
  return {
    mdxAdmonitionTitle,
    rest: rest.length > 0 ? /*#__PURE__*/react.createElement(react.Fragment, null, rest) : null
  };
}
function processAdmonitionProps(props) {
  const {
    mdxAdmonitionTitle,
    rest
  } = extractMDXAdmonitionTitle(props.children);
  const title = props.title ?? mdxAdmonitionTitle;
  return {
    ...props,
    // Do not return "title: undefined" prop
    // this might create unwanted props overrides when merging props
    // For example: {...default,...props}
    ...(title && {
      title
    }),
    children: rest
  };
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Layout/styles.module.css
var Layout_styles_module = __webpack_require__(6175);
var Layout_styles_module_default = /*#__PURE__*/__webpack_require__.n(Layout_styles_module);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Layout/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */




function AdmonitionContainer(_ref) {
  let {
    type,
    className,
    children
  } = _ref;
  return /*#__PURE__*/react.createElement("div", {
    className: (0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.common.admonition, ThemeClassNames/* ThemeClassNames */.G.common.admonitionType(type), (Layout_styles_module_default()).admonition, className)
  }, children);
}
function AdmonitionHeading(_ref2) {
  let {
    icon,
    title
  } = _ref2;
  return /*#__PURE__*/react.createElement("div", {
    className: (Layout_styles_module_default()).admonitionHeading
  }, /*#__PURE__*/react.createElement("span", {
    className: (Layout_styles_module_default()).admonitionIcon
  }, icon), title);
}
function AdmonitionContent(_ref3) {
  let {
    children
  } = _ref3;
  return children ? /*#__PURE__*/react.createElement("div", {
    className: (Layout_styles_module_default()).admonitionContent
  }, children) : null;
}
function AdmonitionLayout(props) {
  const {
    type,
    icon,
    title,
    children,
    className
  } = props;
  return /*#__PURE__*/react.createElement(AdmonitionContainer, {
    type: type,
    className: className
  }, title || icon ? /*#__PURE__*/react.createElement(AdmonitionHeading, {
    title: title,
    icon: icon
  }) : null, /*#__PURE__*/react.createElement(AdmonitionContent, null, children));
}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Icon/Note.js
function Note_extends() { return Note_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, Note_extends.apply(null, arguments); }
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function AdmonitionIconNote(props) {
  return /*#__PURE__*/react.createElement("svg", Note_extends({
    viewBox: "0 0 14 16"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    d: "M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"
  }));
}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Type/Note.js
function Type_Note_extends() { return Type_Note_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, Type_Note_extends.apply(null, arguments); }
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





const infimaClassName = 'alert alert--secondary';
const defaultProps = {
  icon: /*#__PURE__*/react.createElement(AdmonitionIconNote, null),
  title: /*#__PURE__*/react.createElement(Translate/* default */.A, {
    id: "theme.admonition.note",
    description: "The default label used for the Note admonition (:::note)"
  }, "note")
};
function AdmonitionTypeNote(props) {
  return /*#__PURE__*/react.createElement(AdmonitionLayout, Type_Note_extends({}, defaultProps, props, {
    className: (0,clsx/* default */.A)(infimaClassName, props.className)
  }), props.children);
}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Icon/Tip.js
function Tip_extends() { return Tip_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, Tip_extends.apply(null, arguments); }
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function AdmonitionIconTip(props) {
  return /*#__PURE__*/react.createElement("svg", Tip_extends({
    viewBox: "0 0 12 16"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    d: "M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"
  }));
}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Type/Tip.js
function Type_Tip_extends() { return Type_Tip_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, Type_Tip_extends.apply(null, arguments); }
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





const Tip_infimaClassName = 'alert alert--success';
const Tip_defaultProps = {
  icon: /*#__PURE__*/react.createElement(AdmonitionIconTip, null),
  title: /*#__PURE__*/react.createElement(Translate/* default */.A, {
    id: "theme.admonition.tip",
    description: "The default label used for the Tip admonition (:::tip)"
  }, "tip")
};
function AdmonitionTypeTip(props) {
  return /*#__PURE__*/react.createElement(AdmonitionLayout, Type_Tip_extends({}, Tip_defaultProps, props, {
    className: (0,clsx/* default */.A)(Tip_infimaClassName, props.className)
  }), props.children);
}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Icon/Info.js
function Info_extends() { return Info_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, Info_extends.apply(null, arguments); }
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function AdmonitionIconInfo(props) {
  return /*#__PURE__*/react.createElement("svg", Info_extends({
    viewBox: "0 0 14 16"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    d: "M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
  }));
}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Type/Info.js
function Type_Info_extends() { return Type_Info_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, Type_Info_extends.apply(null, arguments); }
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





const Info_infimaClassName = 'alert alert--info';
const Info_defaultProps = {
  icon: /*#__PURE__*/react.createElement(AdmonitionIconInfo, null),
  title: /*#__PURE__*/react.createElement(Translate/* default */.A, {
    id: "theme.admonition.info",
    description: "The default label used for the Info admonition (:::info)"
  }, "info")
};
function AdmonitionTypeInfo(props) {
  return /*#__PURE__*/react.createElement(AdmonitionLayout, Type_Info_extends({}, Info_defaultProps, props, {
    className: (0,clsx/* default */.A)(Info_infimaClassName, props.className)
  }), props.children);
}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Icon/Warning.js
function Warning_extends() { return Warning_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, Warning_extends.apply(null, arguments); }
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function AdmonitionIconCaution(props) {
  return /*#__PURE__*/react.createElement("svg", Warning_extends({
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    d: "M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"
  }));
}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Type/Warning.js
function Type_Warning_extends() { return Type_Warning_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, Type_Warning_extends.apply(null, arguments); }
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





const Warning_infimaClassName = 'alert alert--warning';
const Warning_defaultProps = {
  icon: /*#__PURE__*/react.createElement(AdmonitionIconCaution, null),
  title: /*#__PURE__*/react.createElement(Translate/* default */.A, {
    id: "theme.admonition.warning",
    description: "The default label used for the Warning admonition (:::warning)"
  }, "warning")
};
function AdmonitionTypeWarning(props) {
  return /*#__PURE__*/react.createElement(AdmonitionLayout, Type_Warning_extends({}, Warning_defaultProps, props, {
    className: (0,clsx/* default */.A)(Warning_infimaClassName, props.className)
  }), props.children);
}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Icon/Danger.js
function Danger_extends() { return Danger_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, Danger_extends.apply(null, arguments); }
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function AdmonitionIconDanger(props) {
  return /*#__PURE__*/react.createElement("svg", Danger_extends({
    viewBox: "0 0 12 16"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    d: "M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"
  }));
}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Type/Danger.js
function Type_Danger_extends() { return Type_Danger_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, Type_Danger_extends.apply(null, arguments); }
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





const Danger_infimaClassName = 'alert alert--danger';
const Danger_defaultProps = {
  icon: /*#__PURE__*/react.createElement(AdmonitionIconDanger, null),
  title: /*#__PURE__*/react.createElement(Translate/* default */.A, {
    id: "theme.admonition.danger",
    description: "The default label used for the Danger admonition (:::danger)"
  }, "danger")
};
function AdmonitionTypeDanger(props) {
  return /*#__PURE__*/react.createElement(AdmonitionLayout, Type_Danger_extends({}, Danger_defaultProps, props, {
    className: (0,clsx/* default */.A)(Danger_infimaClassName, props.className)
  }), props.children);
}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Type/Caution.js
function Caution_extends() { return Caution_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, Caution_extends.apply(null, arguments); }
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





const Caution_infimaClassName = 'alert alert--warning';
const Caution_defaultProps = {
  icon: /*#__PURE__*/react.createElement(AdmonitionIconCaution, null),
  title: /*#__PURE__*/react.createElement(Translate/* default */.A, {
    id: "theme.admonition.caution",
    description: "The default label used for the Caution admonition (:::caution)"
  }, "caution")
};
// TODO remove before v4: Caution replaced by Warning
// see https://github.com/facebook/docusaurus/issues/7558
function AdmonitionTypeCaution(props) {
  return /*#__PURE__*/react.createElement(AdmonitionLayout, Caution_extends({}, Caution_defaultProps, props, {
    className: (0,clsx/* default */.A)(Caution_infimaClassName, props.className)
  }), props.children);
}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Types.js
function Types_extends() { return Types_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, Types_extends.apply(null, arguments); }
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */







const admonitionTypes = {
  note: AdmonitionTypeNote,
  tip: AdmonitionTypeTip,
  info: AdmonitionTypeInfo,
  warning: AdmonitionTypeWarning,
  danger: AdmonitionTypeDanger
};
// Undocumented legacy admonition type aliases
// Provide hardcoded/untranslated retrocompatible label
// See also https://github.com/facebook/docusaurus/issues/7767
const admonitionAliases = {
  secondary: props => /*#__PURE__*/react.createElement(AdmonitionTypeNote, Types_extends({
    title: "secondary"
  }, props)),
  important: props => /*#__PURE__*/react.createElement(AdmonitionTypeInfo, Types_extends({
    title: "important"
  }, props)),
  success: props => /*#__PURE__*/react.createElement(AdmonitionTypeTip, Types_extends({
    title: "success"
  }, props)),
  caution: AdmonitionTypeCaution
};
/* harmony default export */ const Types = ({
  ...admonitionTypes,
  ...admonitionAliases
});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



function getAdmonitionTypeComponent(type) {
  const component = Types[type];
  if (component) {
    return component;
  }
  console.warn(`No admonition component found for admonition type "${type}". Using Info as fallback.`);
  return Types.info;
}
function Admonition(unprocessedProps) {
  const props = processAdmonitionProps(unprocessedProps);
  const AdmonitionTypeComponent = getAdmonitionTypeComponent(props.type);
  return /*#__PURE__*/react.createElement(AdmonitionTypeComponent, props);
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Noop.js
var Noop = __webpack_require__(418);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/index.js
function MDXComponents_extends() { return MDXComponents_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, MDXComponents_extends.apply(null, arguments); }
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */












const MDXComponents = {
  Head: Head/* default */.A,
  details: MDXDetails,
  // For MD mode support, see https://github.com/facebook/docusaurus/issues/9092#issuecomment-1602902274
  Details: MDXDetails,
  code: MDXCode,
  a: MDXA,
  pre: MDXPre,
  ul: MDXUl,
  li: MDXLi,
  img: MDXImg,
  h1: props => /*#__PURE__*/react.createElement(MDXHeading, MDXComponents_extends({
    as: "h1"
  }, props)),
  h2: props => /*#__PURE__*/react.createElement(MDXHeading, MDXComponents_extends({
    as: "h2"
  }, props)),
  h3: props => /*#__PURE__*/react.createElement(MDXHeading, MDXComponents_extends({
    as: "h3"
  }, props)),
  h4: props => /*#__PURE__*/react.createElement(MDXHeading, MDXComponents_extends({
    as: "h4"
  }, props)),
  h5: props => /*#__PURE__*/react.createElement(MDXHeading, MDXComponents_extends({
    as: "h5"
  }, props)),
  h6: props => /*#__PURE__*/react.createElement(MDXHeading, MDXComponents_extends({
    as: "h6"
  }, props)),
  admonition: Admonition,
  mermaid: Noop/* default */.A
};
/* harmony default export */ const theme_MDXComponents = (MDXComponents);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/MDXContent/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



function MDXContent(_ref) {
  let {
    children
  } = _ref;
  return /*#__PURE__*/react.createElement(lib/* MDXProvider */.x, {
    components: theme_MDXComponents
  }, children);
}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/Content/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */






/**
 Title can be declared inside md content or declared through
 front matter and added manually. To make both cases consistent,
 the added title is added under the same div.markdown block
 See https://github.com/facebook/docusaurus/pull/4882#issuecomment-853021120

 We render a "synthetic title" if:
 - user doesn't ask to hide it with front matter
 - the markdown content does not already contain a top-level h1 heading
*/
function useSyntheticTitle() {
  const {
    metadata,
    frontMatter,
    contentTitle
  } = useDoc();
  const shouldRender = !frontMatter.hide_title && typeof contentTitle === 'undefined';
  if (!shouldRender) {
    return null;
  }
  return metadata.title;
}
function DocItemContent(_ref) {
  let {
    children
  } = _ref;
  const syntheticTitle = useSyntheticTitle();
  return /*#__PURE__*/react.createElement("div", {
    className: (0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docMarkdown, 'markdown')
  }, syntheticTitle && /*#__PURE__*/react.createElement("header", null, /*#__PURE__*/react.createElement(Heading/* default */.A, {
    as: "h1"
  }, syntheticTitle)), /*#__PURE__*/react.createElement(MDXContent, null, children));
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/docsUtils.js + 1 modules
var docsUtils = __webpack_require__(4718);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/routesUtils.js
var routesUtils = __webpack_require__(9169);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(6025);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Home/index.js
function Home_extends() { return Home_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, Home_extends.apply(null, arguments); }
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function IconHome(props) {
  return /*#__PURE__*/react.createElement("svg", Home_extends({
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/react.createElement("path", {
    d: "M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",
    fill: "currentColor"
  }));
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/Items/Home/styles.module.css
var Home_styles_module = __webpack_require__(3801);
var Home_styles_module_default = /*#__PURE__*/__webpack_require__.n(Home_styles_module);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/Items/Home/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */






function HomeBreadcrumbItem() {
  const homeHref = (0,useBaseUrl/* default */.Ay)('/');
  return /*#__PURE__*/react.createElement("li", {
    className: "breadcrumbs__item"
  }, /*#__PURE__*/react.createElement(Link/* default */.A, {
    "aria-label": (0,Translate/* translate */.T)({
      id: 'theme.docs.breadcrumbs.home',
      message: 'Home page',
      description: 'The ARIA label for the home page in the breadcrumbs'
    }),
    className: "breadcrumbs__link",
    href: homeHref
  }, /*#__PURE__*/react.createElement(IconHome, {
    className: (Home_styles_module_default()).breadcrumbHomeIcon
  })));
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/styles.module.css
var DocBreadcrumbs_styles_module = __webpack_require__(3928);
var DocBreadcrumbs_styles_module_default = /*#__PURE__*/__webpack_require__.n(DocBreadcrumbs_styles_module);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/index.js
function DocBreadcrumbs_extends() { return DocBreadcrumbs_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, DocBreadcrumbs_extends.apply(null, arguments); }
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */









// TODO move to design system folder
function BreadcrumbsItemLink(_ref) {
  let {
    children,
    href,
    isLast
  } = _ref;
  const className = 'breadcrumbs__link';
  if (isLast) {
    return /*#__PURE__*/react.createElement("span", {
      className: className,
      itemProp: "name"
    }, children);
  }
  return href ? /*#__PURE__*/react.createElement(Link/* default */.A, {
    className: className,
    href: href,
    itemProp: "item"
  }, /*#__PURE__*/react.createElement("span", {
    itemProp: "name"
  }, children)) :
  /*#__PURE__*/
  // TODO Google search console doesn't like breadcrumb items without href.
  // The schema doesn't seem to require `id` for each `item`, although Google
  // insist to infer one, even if it's invalid. Removing `itemProp="item
  // name"` for now, since I don't know how to properly fix it.
  // See https://github.com/facebook/docusaurus/issues/7241
  react.createElement("span", {
    className: className
  }, children);
}
// TODO move to design system folder
function BreadcrumbsItem(_ref2) {
  let {
    children,
    active,
    index,
    addMicrodata
  } = _ref2;
  return /*#__PURE__*/react.createElement("li", DocBreadcrumbs_extends({}, addMicrodata && {
    itemScope: true,
    itemProp: 'itemListElement',
    itemType: 'https://schema.org/ListItem'
  }, {
    className: (0,clsx/* default */.A)('breadcrumbs__item', {
      'breadcrumbs__item--active': active
    })
  }), children, /*#__PURE__*/react.createElement("meta", {
    itemProp: "position",
    content: String(index + 1)
  }));
}
function DocBreadcrumbs() {
  const breadcrumbs = (0,docsUtils/* useSidebarBreadcrumbs */.OF)();
  const homePageRoute = (0,routesUtils/* useHomePageRoute */.Dt)();
  if (!breadcrumbs) {
    return null;
  }
  return /*#__PURE__*/react.createElement("nav", {
    className: (0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docBreadcrumbs, (DocBreadcrumbs_styles_module_default()).breadcrumbsContainer),
    "aria-label": (0,Translate/* translate */.T)({
      id: 'theme.docs.breadcrumbs.navAriaLabel',
      message: 'Breadcrumbs',
      description: 'The ARIA label for the breadcrumbs'
    })
  }, /*#__PURE__*/react.createElement("ul", {
    className: "breadcrumbs",
    itemScope: true,
    itemType: "https://schema.org/BreadcrumbList"
  }, homePageRoute && /*#__PURE__*/react.createElement(HomeBreadcrumbItem, null), breadcrumbs.map((item, idx) => {
    const isLast = idx === breadcrumbs.length - 1;
    const href = item.type === 'category' && item.linkUnlisted ? undefined : item.href;
    return /*#__PURE__*/react.createElement(BreadcrumbsItem, {
      key: idx,
      active: isLast,
      index: idx,
      addMicrodata: !!href
    }, /*#__PURE__*/react.createElement(BreadcrumbsItemLink, {
      href: href,
      isLast: isLast
    }, item.label));
  })));
}
;// ./node_modules/@docusaurus/theme-common/lib/translations/contentVisibilityTranslations.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



function UnlistedBannerTitle() {
  return /*#__PURE__*/react.createElement(Translate/* default */.A, {
    id: "theme.contentVisibility.unlistedBanner.title",
    description: "The unlisted content banner title"
  }, "Unlisted page");
}
function UnlistedBannerMessage() {
  return /*#__PURE__*/react.createElement(Translate/* default */.A, {
    id: "theme.contentVisibility.unlistedBanner.message",
    description: "The unlisted content banner message"
  }, "This page is unlisted. Search engines will not index it, and only users having a direct link can access it.");
}
// TODO Docusaurus v4 breaking change (since it's v3 public theme-common API :/)
//  Move this to theme/ContentVisibility/Unlisted
function UnlistedMetadata() {
  return /*#__PURE__*/react.createElement(Head/* default */.A, null, /*#__PURE__*/react.createElement("meta", {
    name: "robots",
    content: "noindex, nofollow"
  }));
}
function DraftBannerTitle() {
  return /*#__PURE__*/react.createElement(Translate/* default */.A, {
    id: "theme.contentVisibility.draftBanner.title",
    description: "The draft content banner title"
  }, "Draft page");
}
function DraftBannerMessage() {
  return /*#__PURE__*/react.createElement(Translate/* default */.A, {
    id: "theme.contentVisibility.draftBanner.message",
    description: "The draft content banner message"
  }, "This page is a draft. It will only be visible in dev and be excluded from the production build.");
}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/ContentVisibility/Draft/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */




function Draft(_ref) {
  let {
    className
  } = _ref;
  return /*#__PURE__*/react.createElement(Admonition, {
    type: "caution",
    title: /*#__PURE__*/react.createElement(DraftBannerTitle, null),
    className: (0,clsx/* default */.A)(className, ThemeClassNames/* ThemeClassNames */.G.common.draftBanner)
  }, /*#__PURE__*/react.createElement(DraftBannerMessage, null));
}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/ContentVisibility/Unlisted/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */




function UnlistedBanner(_ref) {
  let {
    className
  } = _ref;
  return /*#__PURE__*/react.createElement(Admonition, {
    type: "caution",
    title: /*#__PURE__*/react.createElement(UnlistedBannerTitle, null),
    className: (0,clsx/* default */.A)(className, ThemeClassNames/* ThemeClassNames */.G.common.unlistedBanner)
  }, /*#__PURE__*/react.createElement(UnlistedBannerMessage, null));
}
function Unlisted(props) {
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(UnlistedMetadata, null), /*#__PURE__*/react.createElement(UnlistedBanner, props));
}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/ContentVisibility/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



function ContentVisibility(_ref) {
  let {
    metadata
  } = _ref;
  const {
    unlisted,
    frontMatter
  } = metadata;
  // Reading draft/unlisted status from frontMatter is useful to display
  // the banners in dev mode (in dev, metadata.unlisted is always false)
  // See https://github.com/facebook/docusaurus/issues/8285
  return /*#__PURE__*/react.createElement(react.Fragment, null, (unlisted || frontMatter.unlisted) && /*#__PURE__*/react.createElement(Unlisted, null), frontMatter.draft && /*#__PURE__*/react.createElement(Draft, null));
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/Layout/styles.module.css
var DocItem_Layout_styles_module = __webpack_require__(6024);
var DocItem_Layout_styles_module_default = /*#__PURE__*/__webpack_require__.n(DocItem_Layout_styles_module);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/Layout/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */














/**
 * Decide if the toc should be rendered, on mobile or desktop viewports
 */
function useDocTOC() {
  const {
    frontMatter,
    toc
  } = useDoc();
  const windowSize = (0,useWindowSize/* useWindowSize */.l)();
  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;
  const mobile = canRender ? /*#__PURE__*/react.createElement(DocItemTOCMobile, null) : undefined;
  const desktop = canRender && (windowSize === 'desktop' || windowSize === 'ssr') ? /*#__PURE__*/react.createElement(DocItemTOCDesktop, null) : undefined;
  return {
    hidden,
    mobile,
    desktop
  };
}
function DocItemLayout(_ref) {
  let {
    children
  } = _ref;
  const docTOC = useDocTOC();
  const {
    metadata
  } = useDoc();
  return /*#__PURE__*/react.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react.createElement("div", {
    className: (0,clsx/* default */.A)('col', !docTOC.hidden && (DocItem_Layout_styles_module_default()).docItemCol)
  }, /*#__PURE__*/react.createElement(ContentVisibility, {
    metadata: metadata
  }), /*#__PURE__*/react.createElement(DocVersionBanner, null), /*#__PURE__*/react.createElement("div", {
    className: (DocItem_Layout_styles_module_default()).docItemContainer
  }, /*#__PURE__*/react.createElement("article", null, /*#__PURE__*/react.createElement(DocBreadcrumbs, null), /*#__PURE__*/react.createElement(DocVersionBadge, null), docTOC.mobile, /*#__PURE__*/react.createElement(DocItemContent, null, children), /*#__PURE__*/react.createElement(DocItemFooter, null)), /*#__PURE__*/react.createElement(DocItemPaginator, null))), docTOC.desktop && /*#__PURE__*/react.createElement("div", {
    className: "col col--3"
  }, docTOC.desktop));
}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





function DocItem(props) {
  const docHtmlClassName = `docs-doc-id-${props.content.metadata.id}`;
  const MDXComponent = props.content;
  return /*#__PURE__*/react.createElement(DocProvider, {
    content: props.content
  }, /*#__PURE__*/react.createElement(metadataUtils/* HtmlClassNameProvider */.e3, {
    className: docHtmlClassName
  }, /*#__PURE__*/react.createElement(DocItemMetadata, null), /*#__PURE__*/react.createElement(DocItemLayout, null, /*#__PURE__*/react.createElement(MDXComponent, null))));
}
;// ./src/theme/DocItem/index.js



// 评论区服务
function DocItem_DocItem(props) {
  (0,react.useEffect)(() => {
    const initValine = () => {
      const commentsContainer = document.getElementById('vcomments');
      if (!commentsContainer) {
        return;
      }
      new window.Valine({
        el: '#vcomments',
        appId: 'd13HR3a64pIVe8WFPOInFj0q-gzGzoHsz',
        appKey: '5GmVxEuMonJNckhjA7JsF5iC',
        path: window.location.pathname,
        placeholder: '在这里输入评论...'
      });
    };
    if (!window.Valine) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/valine/dist/Valine.min.js';
      script.async = true;
      document.body.appendChild(script);
      script.onload = () => {
        initValine();
      };
    } else {
      initValine();
    }
    return () => {
      const existingScript = document.querySelector('script[src="https://unpkg.com/valine/dist/Valine.min.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(DocItem, props), /*#__PURE__*/react.createElement("div", {
    id: "vcomments",
    style: {
      marginTop: '2rem'
    }
  }));
}

/***/ }),

/***/ 6175:
/***/ ((module) => {

// Exports
module.exports = {
	"admonition": `admonition_xJq3`,
	"admonitionHeading": `admonitionHeading_Gvgb`,
	"admonitionIcon": `admonitionIcon_Rf37`,
	"admonitionContent": `admonitionContent_BuS1`
};


/***/ }),

/***/ 1702:
/***/ ((module) => {

// Exports
module.exports = {
	"codeBlockContainer": `codeBlockContainer_Ckt0`
};


/***/ }),

/***/ 6128:
/***/ ((module) => {

// Exports
module.exports = {
	"codeBlockContent": `codeBlockContent_biex`,
	"codeBlockTitle": `codeBlockTitle_Ktv7`,
	"codeBlock": `codeBlock_bY9V`,
	"codeBlockStandalone": `codeBlockStandalone_MEMb`,
	"codeBlockLines": `codeBlockLines_e6Vv`,
	"codeBlockLinesWithNumbering": `codeBlockLinesWithNumbering_o6Pm`,
	"buttonGroup": `buttonGroup__atx`
};


/***/ }),

/***/ 4142:
/***/ ((module) => {

// Exports
module.exports = {
	"copyButtonCopied": `copyButtonCopied_obH4`,
	"copyButtonIcons": `copyButtonIcons_eSgA`,
	"copyButtonIcon": `copyButtonIcon_y97N`,
	"copyButtonSuccessIcon": `copyButtonSuccessIcon_LjdS`
};


/***/ }),

/***/ 3083:
/***/ ((module) => {

// Exports
module.exports = {
	"codeLine": `codeLine_lJS_`,
	"codeLineNumber": `codeLineNumber_Tfdd`,
	"codeLineContent": `codeLineContent_feaV`
};


/***/ }),

/***/ 9501:
/***/ ((module) => {

// Exports
module.exports = {
	"wordWrapButtonIcon": `wordWrapButtonIcon_Bwma`,
	"wordWrapButtonEnabled": `wordWrapButtonEnabled_EoeP`
};


/***/ }),

/***/ 3406:
/***/ ((module) => {

// Exports
module.exports = {
	"details": `details_b_Ee`
};


/***/ }),

/***/ 3801:
/***/ ((module) => {

// Exports
module.exports = {
	"breadcrumbHomeIcon": `breadcrumbHomeIcon_YNFT`
};


/***/ }),

/***/ 3928:
/***/ ((module) => {

// Exports
module.exports = {
	"breadcrumbsContainer": `breadcrumbsContainer_Z_bl`
};


/***/ }),

/***/ 6024:
/***/ ((module) => {

// Exports
module.exports = {
	"docItemContainer": `docItemContainer_Djhp`,
	"docItemCol": `docItemCol_VOVn`
};


/***/ }),

/***/ 4061:
/***/ ((module) => {

// Exports
module.exports = {
	"tocMobile": `tocMobile_ITEo`
};


/***/ }),

/***/ 901:
/***/ ((module) => {

// Exports
module.exports = {
	"lastUpdated": `lastUpdated_JAkA`
};


/***/ }),

/***/ 1930:
/***/ ((module) => {

// Exports
module.exports = {
	"iconEdit": `iconEdit_Z9Sw`
};


/***/ }),

/***/ 8081:
/***/ ((module) => {

// Exports
module.exports = {
	"img": `img_ev3q`
};


/***/ }),

/***/ 7691:
/***/ ((module) => {

// Exports
module.exports = {
	"containsTaskList": `containsTaskList_mC6p`
};


/***/ }),

/***/ 5490:
/***/ ((module) => {

// Exports
module.exports = {
	"tableOfContents": `tableOfContents_bqdL`,
	"docItemContainer": `docItemContainer_F8PC`
};


/***/ }),

/***/ 9136:
/***/ ((module) => {

// Exports
module.exports = {
	"tocCollapsibleButton": `tocCollapsibleButton_TO0P`,
	"tocCollapsibleButtonExpanded": `tocCollapsibleButtonExpanded_MG3E`
};


/***/ }),

/***/ 2586:
/***/ ((module) => {

// Exports
module.exports = {
	"tocCollapsible": `tocCollapsible_ETCw`,
	"tocCollapsibleContent": `tocCollapsibleContent_vkbj`,
	"tocCollapsibleExpanded": `tocCollapsibleExpanded_sAul`
};


/***/ }),

/***/ 448:
/***/ ((module) => {

// Exports
module.exports = {
	"tag": `tag_zVej`,
	"tagRegular": `tagRegular_sFm0`,
	"tagWithCount": `tagWithCount_h2kH`
};


/***/ }),

/***/ 4088:
/***/ ((module) => {

// Exports
module.exports = {
	"tags": `tags_jXut`,
	"tag": `tag_QGVx`
};


/***/ }),

/***/ 6062:
/***/ ((module) => {

// Exports
module.exports = {
	"details": `details_lb9f`,
	"isBrowser": `isBrowser_bmU9`,
	"collapsibleContent": `collapsibleContent_i85q`
};


/***/ }),

/***/ 8426:
/***/ ((module, exports) => {

/**
 * @param {string} string    The string to parse
 * @returns {Array<number>}  Returns an energetic array.
 */
function parsePart(string) {
  let res = [];
  let m;

  for (let str of string.split(",").map((str) => str.trim())) {
    // just a number
    if (/^-?\d+$/.test(str)) {
      res.push(parseInt(str, 10));
    } else if (
      (m = str.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/))
    ) {
      // 1-5 or 1..5 (equivalent) or 1...5 (doesn't include 5)
      let [_, lhs, sep, rhs] = m;

      if (lhs && rhs) {
        lhs = parseInt(lhs);
        rhs = parseInt(rhs);
        const incr = lhs < rhs ? 1 : -1;

        // Make it inclusive by moving the right 'stop-point' away by one.
        if (sep === "-" || sep === ".." || sep === "\u2025") rhs += incr;

        for (let i = lhs; i !== rhs; i += incr) res.push(i);
      }
    }
  }

  return res;
}

exports["default"] = parsePart;
module.exports = parsePart;


/***/ }),

/***/ 8453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/**
 * @typedef {import('mdx/types.js').MDXComponents} MDXComponents
 * @typedef {import('react').Component<{}, {}, unknown>} Component
 * @typedef {import('react').ReactNode} ReactNode
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {JSX.Element}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ })

};
;