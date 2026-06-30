var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a, _b;
import { r as reactExports, j as jsxRuntimeExports, g as getDefaultExportFromCjs, R as React, u as useLocation, a as useNavigate, L as Link, m as motion, A as AnimatePresence, C as Canvas, b as useFrame, c as Line, V as Vector3, B as BrowserRouter, d as Routes, e as Route, f as createRoot } from "./vendor-DYbm_NoK.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const LanguageContext = reactExports.createContext(void 0);
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = reactExports.useState(() => {
    const savedLang = localStorage.getItem("language");
    return savedLang || "en";
  });
  reactExports.useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageContext.Provider, { value: { language, setLanguage }, children });
};
const useLanguage = () => {
  const context = reactExports.useContext(LanguageContext);
  if (context === void 0) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
var hasElementType = typeof Element !== "undefined";
var hasMap = typeof Map === "function";
var hasSet = typeof Set === "function";
var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
function equal(a, b) {
  if (a === b) return true;
  if (a && b && typeof a == "object" && typeof b == "object") {
    if (a.constructor !== b.constructor) return false;
    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0; )
        if (!equal(a[i], b[i])) return false;
      return true;
    }
    var it;
    if (hasMap && a instanceof Map && b instanceof Map) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!equal(i.value[1], b.get(i.value[0]))) return false;
      return true;
    }
    if (hasSet && a instanceof Set && b instanceof Set) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      return true;
    }
    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0; )
        if (a[i] !== b[i]) return false;
      return true;
    }
    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === "function" && typeof b.valueOf === "function") return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString && typeof a.toString === "function" && typeof b.toString === "function") return a.toString() === b.toString();
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;
    for (i = length; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    if (hasElementType && a instanceof Element) return false;
    for (i = length; i-- !== 0; ) {
      if ((keys[i] === "_owner" || keys[i] === "__v" || keys[i] === "__o") && a.$$typeof) {
        continue;
      }
      if (!equal(a[keys[i]], b[keys[i]])) return false;
    }
    return true;
  }
  return a !== a && b !== b;
}
var reactFastCompare = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if ((error.message || "").match(/stack|recursion/i)) {
      console.warn("react-fast-compare cannot handle circular refs");
      return false;
    }
    throw error;
  }
};
const fastCompare = /* @__PURE__ */ getDefaultExportFromCjs(reactFastCompare);
var invariant = function(condition, format, a, b, c, d, e, f) {
  if (!condition) {
    var error;
    if (format === void 0) {
      error = new Error(
        "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() {
          return args[argIndex++];
        })
      );
      error.name = "Invariant Violation";
    }
    error.framesToPop = 1;
    throw error;
  }
};
var browser = invariant;
const invariant$1 = /* @__PURE__ */ getDefaultExportFromCjs(browser);
var shallowequal = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
  if (ret !== void 0) {
    return !!ret;
  }
  if (objA === objB) {
    return true;
  }
  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }
  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];
    if (!bHasOwnProperty(key)) {
      return false;
    }
    var valueA = objA[key];
    var valueB = objB[key];
    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
    if (ret === false || ret === void 0 && valueA !== valueB) {
      return false;
    }
  }
  return true;
};
const shallowEqual2 = /* @__PURE__ */ getDefaultExportFromCjs(shallowequal);
var TAG_NAMES = /* @__PURE__ */ ((TAG_NAMES2) => {
  TAG_NAMES2["BASE"] = "base";
  TAG_NAMES2["BODY"] = "body";
  TAG_NAMES2["HEAD"] = "head";
  TAG_NAMES2["HTML"] = "html";
  TAG_NAMES2["LINK"] = "link";
  TAG_NAMES2["META"] = "meta";
  TAG_NAMES2["NOSCRIPT"] = "noscript";
  TAG_NAMES2["SCRIPT"] = "script";
  TAG_NAMES2["STYLE"] = "style";
  TAG_NAMES2["TITLE"] = "title";
  TAG_NAMES2["FRAGMENT"] = "Symbol(react.fragment)";
  return TAG_NAMES2;
})(TAG_NAMES || {});
var SEO_PRIORITY_TAGS = {
  link: { rel: ["amphtml", "canonical", "alternate"] },
  script: { type: ["application/ld+json"] },
  meta: {
    charset: "",
    name: ["generator", "robots", "description"],
    property: [
      "og:type",
      "og:title",
      "og:url",
      "og:image",
      "og:image:alt",
      "og:description",
      "twitter:url",
      "twitter:title",
      "twitter:description",
      "twitter:image",
      "twitter:image:alt",
      "twitter:card",
      "twitter:site"
    ]
  }
};
var VALID_TAG_NAMES = Object.values(TAG_NAMES);
var REACT_TAG_MAP = {
  accesskey: "accessKey",
  charset: "charSet",
  class: "className",
  contenteditable: "contentEditable",
  contextmenu: "contextMenu",
  "http-equiv": "httpEquiv",
  itemprop: "itemProp",
  tabindex: "tabIndex"
};
var HTML_TAG_MAP = Object.entries(REACT_TAG_MAP).reduce(
  (carry, [key, value]) => {
    carry[value] = key;
    return carry;
  },
  {}
);
var HELMET_ATTRIBUTE = "data-rh";
var HELMET_PROPS = {
  DEFAULT_TITLE: "defaultTitle",
  DEFER: "defer",
  ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
  ON_CHANGE_CLIENT_STATE: "onChangeClientState",
  TITLE_TEMPLATE: "titleTemplate",
  PRIORITIZE_SEO_TAGS: "prioritizeSeoTags"
};
var getInnermostProperty = (propsList, property) => {
  for (let i = propsList.length - 1; i >= 0; i -= 1) {
    const props = propsList[i];
    if (Object.prototype.hasOwnProperty.call(props, property)) {
      return props[property];
    }
  }
  return null;
};
var getTitleFromPropsList = (propsList) => {
  let innermostTitle = getInnermostProperty(
    propsList,
    "title"
    /* TITLE */
  );
  const innermostTemplate = getInnermostProperty(propsList, HELMET_PROPS.TITLE_TEMPLATE);
  if (Array.isArray(innermostTitle)) {
    innermostTitle = innermostTitle.join("");
  }
  if (innermostTemplate && innermostTitle) {
    return innermostTemplate.replace(/%s/g, () => innermostTitle);
  }
  const innermostDefaultTitle = getInnermostProperty(propsList, HELMET_PROPS.DEFAULT_TITLE);
  return innermostTitle || innermostDefaultTitle || void 0;
};
var getOnChangeClientState = (propsList) => getInnermostProperty(propsList, HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || (() => {
});
var getAttributesFromPropsList = (tagType, propsList) => propsList.filter((props) => typeof props[tagType] !== "undefined").map((props) => props[tagType]).reduce((tagAttrs, current) => ({ ...tagAttrs, ...current }), {});
var getBaseTagFromPropsList = (primaryAttributes, propsList) => propsList.filter((props) => typeof props[
  "base"
  /* BASE */
] !== "undefined").map((props) => props[
  "base"
  /* BASE */
]).reverse().reduce((innermostBaseTag, tag) => {
  if (!innermostBaseTag.length) {
    const keys = Object.keys(tag);
    for (let i = 0; i < keys.length; i += 1) {
      const attributeKey = keys[i];
      const lowerCaseAttributeKey = attributeKey.toLowerCase();
      if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
        return innermostBaseTag.concat(tag);
      }
    }
  }
  return innermostBaseTag;
}, []);
var warn = (msg) => console && typeof console.warn === "function" && console.warn(msg);
var getTagsFromPropsList = (tagName, primaryAttributes, propsList) => {
  const approvedSeenTags = {};
  return propsList.filter((props) => {
    if (Array.isArray(props[tagName])) {
      return true;
    }
    if (typeof props[tagName] !== "undefined") {
      warn(
        `Helmet: ${tagName} should be of type "Array". Instead found type "${typeof props[tagName]}"`
      );
    }
    return false;
  }).map((props) => props[tagName]).reverse().reduce((approvedTags, instanceTags) => {
    const instanceSeenTags = {};
    instanceTags.filter((tag) => {
      let primaryAttributeKey;
      const keys2 = Object.keys(tag);
      for (let i = 0; i < keys2.length; i += 1) {
        const attributeKey = keys2[i];
        const lowerCaseAttributeKey = attributeKey.toLowerCase();
        if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === "rel" && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === "rel" && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
          primaryAttributeKey = lowerCaseAttributeKey;
        }
        if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === "innerHTML" || attributeKey === "cssText" || attributeKey === "itemprop")) {
          primaryAttributeKey = attributeKey;
        }
      }
      if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
        return false;
      }
      const value = tag[primaryAttributeKey].toLowerCase();
      if (!approvedSeenTags[primaryAttributeKey]) {
        approvedSeenTags[primaryAttributeKey] = {};
      }
      if (!instanceSeenTags[primaryAttributeKey]) {
        instanceSeenTags[primaryAttributeKey] = {};
      }
      if (!approvedSeenTags[primaryAttributeKey][value]) {
        instanceSeenTags[primaryAttributeKey][value] = true;
        return true;
      }
      return false;
    }).reverse().forEach((tag) => approvedTags.push(tag));
    const keys = Object.keys(instanceSeenTags);
    for (let i = 0; i < keys.length; i += 1) {
      const attributeKey = keys[i];
      const tagUnion = {
        ...approvedSeenTags[attributeKey],
        ...instanceSeenTags[attributeKey]
      };
      approvedSeenTags[attributeKey] = tagUnion;
    }
    return approvedTags;
  }, []).reverse();
};
var getAnyTrueFromPropsList = (propsList, checkedTag) => {
  if (Array.isArray(propsList) && propsList.length) {
    for (let index = 0; index < propsList.length; index += 1) {
      const prop = propsList[index];
      if (prop[checkedTag]) {
        return true;
      }
    }
  }
  return false;
};
var reducePropsToState = (propsList) => ({
  baseTag: getBaseTagFromPropsList([
    "href"
    /* HREF */
  ], propsList),
  bodyAttributes: getAttributesFromPropsList("bodyAttributes", propsList),
  defer: getInnermostProperty(propsList, HELMET_PROPS.DEFER),
  encode: getInnermostProperty(propsList, HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
  htmlAttributes: getAttributesFromPropsList("htmlAttributes", propsList),
  linkTags: getTagsFromPropsList(
    "link",
    [
      "rel",
      "href"
      /* HREF */
    ],
    propsList
  ),
  metaTags: getTagsFromPropsList(
    "meta",
    [
      "name",
      "charset",
      "http-equiv",
      "property",
      "itemprop"
      /* ITEM_PROP */
    ],
    propsList
  ),
  noscriptTags: getTagsFromPropsList("noscript", [
    "innerHTML"
    /* INNER_HTML */
  ], propsList),
  onChangeClientState: getOnChangeClientState(propsList),
  scriptTags: getTagsFromPropsList(
    "script",
    [
      "src",
      "innerHTML"
      /* INNER_HTML */
    ],
    propsList
  ),
  styleTags: getTagsFromPropsList("style", [
    "cssText"
    /* CSS_TEXT */
  ], propsList),
  title: getTitleFromPropsList(propsList),
  titleAttributes: getAttributesFromPropsList("titleAttributes", propsList),
  prioritizeSeoTags: getAnyTrueFromPropsList(propsList, HELMET_PROPS.PRIORITIZE_SEO_TAGS)
});
var flattenArray = (possibleArray) => Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
var checkIfPropsMatch = (props, toMatch) => {
  const keys = Object.keys(props);
  for (let i = 0; i < keys.length; i += 1) {
    if (toMatch[keys[i]] && toMatch[keys[i]].includes(props[keys[i]])) {
      return true;
    }
  }
  return false;
};
var prioritizer = (elementsList, propsToMatch) => {
  if (Array.isArray(elementsList)) {
    return elementsList.reduce(
      (acc, elementAttrs) => {
        if (checkIfPropsMatch(elementAttrs, propsToMatch)) {
          acc.priority.push(elementAttrs);
        } else {
          acc.default.push(elementAttrs);
        }
        return acc;
      },
      { priority: [], default: [] }
    );
  }
  return { default: elementsList, priority: [] };
};
var without = (obj, key) => {
  return {
    ...obj,
    [key]: void 0
  };
};
var SELF_CLOSING_TAGS = [
  "noscript",
  "script",
  "style"
  /* STYLE */
];
var encodeSpecialCharacters = (str, encode = true) => {
  if (encode === false) {
    return String(str);
  }
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};
var generateElementAttributesAsString = (attributes) => Object.keys(attributes).reduce((str, key) => {
  const attr = typeof attributes[key] !== "undefined" ? `${key}="${attributes[key]}"` : `${key}`;
  return str ? `${str} ${attr}` : attr;
}, "");
var generateTitleAsString = (type, title, attributes, encode) => {
  const attributeString = generateElementAttributesAsString(attributes);
  const flattenedTitle = flattenArray(title);
  return attributeString ? `<${type} ${HELMET_ATTRIBUTE}="true" ${attributeString}>${encodeSpecialCharacters(
    flattenedTitle,
    encode
  )}</${type}>` : `<${type} ${HELMET_ATTRIBUTE}="true">${encodeSpecialCharacters(
    flattenedTitle,
    encode
  )}</${type}>`;
};
var generateTagsAsString = (type, tags, encode = true) => tags.reduce((str, t) => {
  const tag = t;
  const attributeHtml = Object.keys(tag).filter(
    (attribute) => !(attribute === "innerHTML" || attribute === "cssText")
  ).reduce((string, attribute) => {
    const attr = typeof tag[attribute] === "undefined" ? attribute : `${attribute}="${encodeSpecialCharacters(tag[attribute], encode)}"`;
    return string ? `${string} ${attr}` : attr;
  }, "");
  const tagContent = tag.innerHTML || tag.cssText || "";
  const isSelfClosing = SELF_CLOSING_TAGS.indexOf(type) === -1;
  return `${str}<${type} ${HELMET_ATTRIBUTE}="true" ${attributeHtml}${isSelfClosing ? `/>` : `>${tagContent}</${type}>`}`;
}, "");
var convertElementAttributesToReactProps = (attributes, initProps = {}) => Object.keys(attributes).reduce((obj, key) => {
  const mapped = REACT_TAG_MAP[key];
  obj[mapped || key] = attributes[key];
  return obj;
}, initProps);
var generateTitleAsReactComponent = (_type, title, attributes) => {
  const initProps = {
    key: title,
    [HELMET_ATTRIBUTE]: true
  };
  const props = convertElementAttributesToReactProps(attributes, initProps);
  return [React.createElement("title", props, title)];
};
var generateTagsAsReactComponent = (type, tags) => tags.map((tag, i) => {
  const mappedTag = {
    key: i,
    [HELMET_ATTRIBUTE]: true
  };
  Object.keys(tag).forEach((attribute) => {
    const mapped = REACT_TAG_MAP[attribute];
    const mappedAttribute = mapped || attribute;
    if (mappedAttribute === "innerHTML" || mappedAttribute === "cssText") {
      const content = tag.innerHTML || tag.cssText;
      mappedTag.dangerouslySetInnerHTML = { __html: content };
    } else {
      mappedTag[mappedAttribute] = tag[attribute];
    }
  });
  return React.createElement(type, mappedTag);
});
var getMethodsForTag = (type, tags, encode = true) => {
  switch (type) {
    case "title":
      return {
        toComponent: () => generateTitleAsReactComponent(type, tags.title, tags.titleAttributes),
        toString: () => generateTitleAsString(type, tags.title, tags.titleAttributes, encode)
      };
    case "bodyAttributes":
    case "htmlAttributes":
      return {
        toComponent: () => convertElementAttributesToReactProps(tags),
        toString: () => generateElementAttributesAsString(tags)
      };
    default:
      return {
        toComponent: () => generateTagsAsReactComponent(type, tags),
        toString: () => generateTagsAsString(type, tags, encode)
      };
  }
};
var getPriorityMethods = ({ metaTags, linkTags, scriptTags, encode }) => {
  const meta = prioritizer(metaTags, SEO_PRIORITY_TAGS.meta);
  const link = prioritizer(linkTags, SEO_PRIORITY_TAGS.link);
  const script = prioritizer(scriptTags, SEO_PRIORITY_TAGS.script);
  const priorityMethods = {
    toComponent: () => [
      ...generateTagsAsReactComponent("meta", meta.priority),
      ...generateTagsAsReactComponent("link", link.priority),
      ...generateTagsAsReactComponent("script", script.priority)
    ],
    toString: () => (
      // generate all the tags as strings and concatenate them
      `${getMethodsForTag("meta", meta.priority, encode)} ${getMethodsForTag(
        "link",
        link.priority,
        encode
      )} ${getMethodsForTag("script", script.priority, encode)}`
    )
  };
  return {
    priorityMethods,
    metaTags: meta.default,
    linkTags: link.default,
    scriptTags: script.default
  };
};
var mapStateOnServer = (props) => {
  const {
    baseTag,
    bodyAttributes,
    encode = true,
    htmlAttributes,
    noscriptTags,
    styleTags,
    title = "",
    titleAttributes,
    prioritizeSeoTags
  } = props;
  let { linkTags, metaTags, scriptTags } = props;
  let priorityMethods = {
    toComponent: () => {
    },
    toString: () => ""
  };
  if (prioritizeSeoTags) {
    ({ priorityMethods, linkTags, metaTags, scriptTags } = getPriorityMethods(props));
  }
  return {
    priority: priorityMethods,
    base: getMethodsForTag("base", baseTag, encode),
    bodyAttributes: getMethodsForTag("bodyAttributes", bodyAttributes, encode),
    htmlAttributes: getMethodsForTag("htmlAttributes", htmlAttributes, encode),
    link: getMethodsForTag("link", linkTags, encode),
    meta: getMethodsForTag("meta", metaTags, encode),
    noscript: getMethodsForTag("noscript", noscriptTags, encode),
    script: getMethodsForTag("script", scriptTags, encode),
    style: getMethodsForTag("style", styleTags, encode),
    title: getMethodsForTag("title", { title, titleAttributes }, encode)
  };
};
var server_default = mapStateOnServer;
var instances = [];
var isDocument = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var HelmetData = class {
  constructor(context, canUseDOM) {
    __publicField(this, "instances", []);
    __publicField(this, "canUseDOM", isDocument);
    __publicField(this, "context");
    __publicField(this, "value", {
      setHelmet: (serverState) => {
        this.context.helmet = serverState;
      },
      helmetInstances: {
        get: () => this.canUseDOM ? instances : this.instances,
        add: (instance) => {
          (this.canUseDOM ? instances : this.instances).push(instance);
        },
        remove: (instance) => {
          const index = (this.canUseDOM ? instances : this.instances).indexOf(instance);
          (this.canUseDOM ? instances : this.instances).splice(index, 1);
        }
      }
    });
    this.context = context;
    this.canUseDOM = canUseDOM || false;
    if (!canUseDOM) {
      context.helmet = server_default({
        baseTag: [],
        bodyAttributes: {},
        htmlAttributes: {},
        linkTags: [],
        metaTags: [],
        noscriptTags: [],
        scriptTags: [],
        styleTags: [],
        title: "",
        titleAttributes: {}
      });
    }
  }
};
var defaultValue = {};
var Context = React.createContext(defaultValue);
var HelmetProvider = (_a = class extends reactExports.Component {
  constructor(props) {
    super(props);
    __publicField(this, "helmetData");
    this.helmetData = new HelmetData(this.props.context || {}, _a.canUseDOM);
  }
  render() {
    return /* @__PURE__ */ React.createElement(Context.Provider, { value: this.helmetData.value }, this.props.children);
  }
}, __publicField(_a, "canUseDOM", isDocument), _a);
var updateTags = (type, tags) => {
  const headElement = document.head || document.querySelector(
    "head"
    /* HEAD */
  );
  const tagNodes = headElement.querySelectorAll(`${type}[${HELMET_ATTRIBUTE}]`);
  const oldTags = [].slice.call(tagNodes);
  const newTags = [];
  let indexToDelete;
  if (tags && tags.length) {
    tags.forEach((tag) => {
      const newElement = document.createElement(type);
      for (const attribute in tag) {
        if (Object.prototype.hasOwnProperty.call(tag, attribute)) {
          if (attribute === "innerHTML") {
            newElement.innerHTML = tag.innerHTML;
          } else if (attribute === "cssText") {
            if (newElement.styleSheet) {
              newElement.styleSheet.cssText = tag.cssText;
            } else {
              newElement.appendChild(document.createTextNode(tag.cssText));
            }
          } else {
            const attr = attribute;
            const value = typeof tag[attr] === "undefined" ? "" : tag[attr];
            newElement.setAttribute(attribute, value);
          }
        }
      }
      newElement.setAttribute(HELMET_ATTRIBUTE, "true");
      if (oldTags.some((existingTag, index) => {
        indexToDelete = index;
        return newElement.isEqualNode(existingTag);
      })) {
        oldTags.splice(indexToDelete, 1);
      } else {
        newTags.push(newElement);
      }
    });
  }
  oldTags.forEach((tag) => {
    var _a2;
    return (_a2 = tag.parentNode) == null ? void 0 : _a2.removeChild(tag);
  });
  newTags.forEach((tag) => headElement.appendChild(tag));
  return {
    oldTags,
    newTags
  };
};
var updateAttributes = (tagName, attributes) => {
  const elementTag = document.getElementsByTagName(tagName)[0];
  if (!elementTag) {
    return;
  }
  const helmetAttributeString = elementTag.getAttribute(HELMET_ATTRIBUTE);
  const helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
  const attributesToRemove = [...helmetAttributes];
  const attributeKeys = Object.keys(attributes);
  for (const attribute of attributeKeys) {
    const value = attributes[attribute] || "";
    if (elementTag.getAttribute(attribute) !== value) {
      elementTag.setAttribute(attribute, value);
    }
    if (helmetAttributes.indexOf(attribute) === -1) {
      helmetAttributes.push(attribute);
    }
    const indexToSave = attributesToRemove.indexOf(attribute);
    if (indexToSave !== -1) {
      attributesToRemove.splice(indexToSave, 1);
    }
  }
  for (let i = attributesToRemove.length - 1; i >= 0; i -= 1) {
    elementTag.removeAttribute(attributesToRemove[i]);
  }
  if (helmetAttributes.length === attributesToRemove.length) {
    elementTag.removeAttribute(HELMET_ATTRIBUTE);
  } else if (elementTag.getAttribute(HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
    elementTag.setAttribute(HELMET_ATTRIBUTE, attributeKeys.join(","));
  }
};
var updateTitle = (title, attributes) => {
  if (typeof title !== "undefined" && document.title !== title) {
    document.title = flattenArray(title);
  }
  updateAttributes("title", attributes);
};
var commitTagChanges = (newState, cb) => {
  const {
    baseTag,
    bodyAttributes,
    htmlAttributes,
    linkTags,
    metaTags,
    noscriptTags,
    onChangeClientState,
    scriptTags,
    styleTags,
    title,
    titleAttributes
  } = newState;
  updateAttributes("body", bodyAttributes);
  updateAttributes("html", htmlAttributes);
  updateTitle(title, titleAttributes);
  const tagUpdates = {
    baseTag: updateTags("base", baseTag),
    linkTags: updateTags("link", linkTags),
    metaTags: updateTags("meta", metaTags),
    noscriptTags: updateTags("noscript", noscriptTags),
    scriptTags: updateTags("script", scriptTags),
    styleTags: updateTags("style", styleTags)
  };
  const addedTags = {};
  const removedTags = {};
  Object.keys(tagUpdates).forEach((tagType) => {
    const { newTags, oldTags } = tagUpdates[tagType];
    if (newTags.length) {
      addedTags[tagType] = newTags;
    }
    if (oldTags.length) {
      removedTags[tagType] = tagUpdates[tagType].oldTags;
    }
  });
  if (cb) {
    cb();
  }
  onChangeClientState(newState, addedTags, removedTags);
};
var _helmetCallback = null;
var handleStateChangeOnClient = (newState) => {
  if (_helmetCallback) {
    cancelAnimationFrame(_helmetCallback);
  }
  if (newState.defer) {
    _helmetCallback = requestAnimationFrame(() => {
      commitTagChanges(newState, () => {
        _helmetCallback = null;
      });
    });
  } else {
    commitTagChanges(newState);
    _helmetCallback = null;
  }
};
var client_default = handleStateChangeOnClient;
var HelmetDispatcher = class extends reactExports.Component {
  constructor() {
    super(...arguments);
    __publicField(this, "rendered", false);
  }
  shouldComponentUpdate(nextProps) {
    return !shallowEqual2(nextProps, this.props);
  }
  componentDidUpdate() {
    this.emitChange();
  }
  componentWillUnmount() {
    const { helmetInstances } = this.props.context;
    helmetInstances.remove(this);
    this.emitChange();
  }
  emitChange() {
    const { helmetInstances, setHelmet } = this.props.context;
    let serverState = null;
    const state = reducePropsToState(
      helmetInstances.get().map((instance) => {
        const props = { ...instance.props };
        delete props.context;
        return props;
      })
    );
    if (HelmetProvider.canUseDOM) {
      client_default(state);
    } else if (server_default) {
      serverState = server_default(state);
    }
    setHelmet(serverState);
  }
  // componentWillMount will be deprecated
  // for SSR, initialize on first render
  // constructor is also unsafe in StrictMode
  init() {
    if (this.rendered) {
      return;
    }
    this.rendered = true;
    const { helmetInstances } = this.props.context;
    helmetInstances.add(this);
    this.emitChange();
  }
  render() {
    this.init();
    return null;
  }
};
var Helmet = (_b = class extends reactExports.Component {
  shouldComponentUpdate(nextProps) {
    return !fastCompare(without(this.props, "helmetData"), without(nextProps, "helmetData"));
  }
  mapNestedChildrenToProps(child, nestedChildren) {
    if (!nestedChildren) {
      return null;
    }
    switch (child.type) {
      case "script":
      case "noscript":
        return {
          innerHTML: nestedChildren
        };
      case "style":
        return {
          cssText: nestedChildren
        };
      default:
        throw new Error(
          `<${child.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`
        );
    }
  }
  flattenArrayTypeChildren(child, arrayTypeChildren, newChildProps, nestedChildren) {
    return {
      ...arrayTypeChildren,
      [child.type]: [
        ...arrayTypeChildren[child.type] || [],
        {
          ...newChildProps,
          ...this.mapNestedChildrenToProps(child, nestedChildren)
        }
      ]
    };
  }
  mapObjectTypeChildren(child, newProps, newChildProps, nestedChildren) {
    switch (child.type) {
      case "title":
        return {
          ...newProps,
          [child.type]: nestedChildren,
          titleAttributes: { ...newChildProps }
        };
      case "body":
        return {
          ...newProps,
          bodyAttributes: { ...newChildProps }
        };
      case "html":
        return {
          ...newProps,
          htmlAttributes: { ...newChildProps }
        };
      default:
        return {
          ...newProps,
          [child.type]: { ...newChildProps }
        };
    }
  }
  mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
    let newFlattenedProps = { ...newProps };
    Object.keys(arrayTypeChildren).forEach((arrayChildName) => {
      newFlattenedProps = {
        ...newFlattenedProps,
        [arrayChildName]: arrayTypeChildren[arrayChildName]
      };
    });
    return newFlattenedProps;
  }
  warnOnInvalidChildren(child, nestedChildren) {
    invariant$1(
      VALID_TAG_NAMES.some((name) => child.type === name),
      typeof child.type === "function" ? `You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.` : `Only elements types ${VALID_TAG_NAMES.join(
        ", "
      )} are allowed. Helmet does not support rendering <${child.type}> elements. Refer to our API for more information.`
    );
    invariant$1(
      !nestedChildren || typeof nestedChildren === "string" || Array.isArray(nestedChildren) && !nestedChildren.some((nestedChild) => typeof nestedChild !== "string"),
      `Helmet expects a string as a child of <${child.type}>. Did you forget to wrap your children in braces? ( <${child.type}>{\`\`}</${child.type}> ) Refer to our API for more information.`
    );
    return true;
  }
  mapChildrenToProps(children, newProps) {
    let arrayTypeChildren = {};
    React.Children.forEach(children, (child) => {
      if (!child || !child.props) {
        return;
      }
      const { children: nestedChildren, ...childProps } = child.props;
      const newChildProps = Object.keys(childProps).reduce((obj, key) => {
        obj[HTML_TAG_MAP[key] || key] = childProps[key];
        return obj;
      }, {});
      let { type } = child;
      if (typeof type === "symbol") {
        type = type.toString();
      } else {
        this.warnOnInvalidChildren(child, nestedChildren);
      }
      switch (type) {
        case "Symbol(react.fragment)":
          newProps = this.mapChildrenToProps(nestedChildren, newProps);
          break;
        case "link":
        case "meta":
        case "noscript":
        case "script":
        case "style":
          arrayTypeChildren = this.flattenArrayTypeChildren(
            child,
            arrayTypeChildren,
            newChildProps,
            nestedChildren
          );
          break;
        default:
          newProps = this.mapObjectTypeChildren(child, newProps, newChildProps, nestedChildren);
          break;
      }
    });
    return this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
  }
  render() {
    const { children, ...props } = this.props;
    let newProps = { ...props };
    let { helmetData } = props;
    if (children) {
      newProps = this.mapChildrenToProps(children, newProps);
    }
    if (helmetData && !(helmetData instanceof HelmetData)) {
      const data = helmetData;
      helmetData = new HelmetData(data.context, true);
      delete newProps.helmetData;
    }
    return helmetData ? /* @__PURE__ */ React.createElement(HelmetDispatcher, { ...newProps, context: helmetData.value }) : /* @__PURE__ */ React.createElement(Context.Consumer, null, (context) => /* @__PURE__ */ React.createElement(HelmetDispatcher, { ...newProps, context }));
  }
}, __publicField(_b, "defaultProps", {
  defer: true,
  encodeSpecialCharacters: true,
  prioritizeSeoTags: false
}), _b);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim();
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({
      color = "currentColor",
      size = 24,
      strokeWidth = 2,
      absoluteStrokeWidth,
      className = "",
      children,
      ...rest
    }, ref) => {
      return reactExports.createElement(
        "svg",
        {
          ref,
          ...defaultAttributes,
          width: size,
          height: size,
          stroke: color,
          strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
          className: ["lucide", `lucide-${toKebabCase(iconName)}`, className].join(" "),
          ...rest
        },
        [
          ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
          ...Array.isArray(children) ? children : [children]
        ]
      );
    }
  );
  Component.displayName = `${iconName}`;
  return Component;
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const AlertCircle = createLucideIcon("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const BarChart3 = createLucideIcon("BarChart3", [
  ["path", { d: "M3 3v18h18", key: "1s2lah" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bot = createLucideIcon("Bot", [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Boxes = createLucideIcon("Boxes", [
  [
    "path",
    {
      d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",
      key: "lc1i9w"
    }
  ],
  ["path", { d: "m7 16.5-4.74-2.85", key: "1o9zyk" }],
  ["path", { d: "m7 16.5 5-3", key: "va8pkn" }],
  ["path", { d: "M7 16.5v5.17", key: "jnp8gn" }],
  [
    "path",
    {
      d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",
      key: "8zsnat"
    }
  ],
  ["path", { d: "m17 16.5-5-3", key: "8arw3v" }],
  ["path", { d: "m17 16.5 4.74-2.85", key: "8rfmw" }],
  ["path", { d: "M17 16.5v5.17", key: "k6z78m" }],
  [
    "path",
    {
      d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",
      key: "1xygjf"
    }
  ],
  ["path", { d: "M12 8 7.26 5.15", key: "1vbdud" }],
  ["path", { d: "m12 8 4.74-2.85", key: "3rx089" }],
  ["path", { d: "M12 13.5V8", key: "1io7kd" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CheckCircle2 = createLucideIcon("CheckCircle2", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Home = createLucideIcon("Home", [
  ["path", { d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", key: "y5dka4" }],
  ["polyline", { points: "9 22 9 12 15 12 15 22", key: "e2us08" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Inbox = createLucideIcon("Inbox", [
  ["polyline", { points: "22 12 16 12 14 15 10 15 8 12 2 12", key: "o97t9d" }],
  [
    "path",
    {
      d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
      key: "oot6mr"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Instagram = createLucideIcon("Instagram", [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Languages = createLucideIcon("Languages", [
  ["path", { d: "m5 8 6 6", key: "1wu5hv" }],
  ["path", { d: "m4 14 6-6 2-3", key: "1k1g8d" }],
  ["path", { d: "M2 5h12", key: "or177f" }],
  ["path", { d: "M7 2h1", key: "1t2jsx" }],
  ["path", { d: "m22 22-5-10-5 10", key: "don7ne" }],
  ["path", { d: "M14 18h6", key: "1m8k6r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Linkedin = createLucideIcon("Linkedin", [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Loader2 = createLucideIcon("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mail = createLucideIcon("Mail", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Menu = createLucideIcon("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MessagesSquare = createLucideIcon("MessagesSquare", [
  ["path", { d: "M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z", key: "16vlm8" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1", key: "1cx29u" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PackageSearch = createLucideIcon("PackageSearch", [
  [
    "path",
    {
      d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
      key: "e7tb2h"
    }
  ],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }],
  ["circle", { cx: "18.5", cy: "15.5", r: "2.5", key: "b5zd12" }],
  ["path", { d: "M20.27 17.27 22 19", key: "1l4muz" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PlayCircle = createLucideIcon("PlayCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polygon", { points: "10 8 16 12 10 16 10 8", key: "1cimsy" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Send = createLucideIcon("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ShieldCheck = createLucideIcon("ShieldCheck", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ShoppingBag = createLucideIcon("ShoppingBag", [
  ["path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z", key: "hou9p0" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ShoppingCart = createLucideIcon("ShoppingCart", [
  ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
  ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
  [
    "path",
    {
      d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
      key: "9zh506"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sparkles = createLucideIcon("Sparkles", [
  [
    "path",
    {
      d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
      key: "17u4zn"
    }
  ],
  ["path", { d: "M5 3v4", key: "bklmnn" }],
  ["path", { d: "M19 17v4", key: "iiml17" }],
  ["path", { d: "M3 5h4", key: "nem4j1" }],
  ["path", { d: "M17 19h4", key: "lbex7p" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Store = createLucideIcon("Store", [
  ["path", { d: "m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7", key: "ztvudi" }],
  ["path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8", key: "1b2hhj" }],
  ["path", { d: "M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4", key: "2ebpfo" }],
  ["path", { d: "M2 7h20", key: "1fcdvo" }],
  [
    "path",
    {
      d: "M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",
      key: "jon5kx"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const UserCheck = createLucideIcon("UserCheck", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["polyline", { points: "16 11 18 13 22 9", key: "1pwet4" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const User = createLucideIcon("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const UtensilsCrossed = createLucideIcon("UtensilsCrossed", [
  ["path", { d: "m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8", key: "n7qcjb" }],
  [
    "path",
    { d: "M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7", key: "d0u48b" }
  ],
  ["path", { d: "m2.1 21.8 6.4-6.3", key: "yn04lh" }],
  ["path", { d: "m19 5-7 7", key: "194lzd" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X = createLucideIcon("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Youtube = createLucideIcon("Youtube", [
  [
    "path",
    {
      d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
      key: "1q2vi4"
    }
  ],
  ["path", { d: "m10 15 5-3-5-3z", key: "1jp15x" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zap = createLucideIcon("Zap", [
  ["polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", key: "45s27k" }]
]);
const brandIcon = "/assets/tab-icon-Bmdyi5UN.webp";
function cn(...args) {
  return args.filter(Boolean).join(" ");
}
function NavBar({ items, className }) {
  const location2 = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = reactExports.useState(null);
  const [isMobile, setIsMobile] = reactExports.useState(false);
  const navBarClass = cn(
    "fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-6",
    className
  );
  reactExports.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  reactExports.useEffect(() => {
    const handleScroll = () => {
      const currentPath = location2.pathname;
      const isArabic = currentPath.startsWith("/ar");
      const basePath = isArabic ? "/ar" : "/";
      const sectionItems = items.filter((item) => item.url.startsWith(basePath + "#")).map((item) => ({ name: item.name, id: item.url.replace(basePath + "#", "") }));
      let found = null;
      for (const item of sectionItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            found = item.name;
            break;
          }
        }
      }
      if (found === null) {
        const homeItem = items.find((item) => item.url === basePath);
        const exactMatchItem = items.find((item) => !item.url.includes("#") && location2.pathname === item.url);
        if (location2.pathname === basePath && homeItem) {
          found = homeItem.name;
        } else if (exactMatchItem) {
          found = exactMatchItem.name;
        }
      }
      setActiveTab(found);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [items, location2.pathname]);
  reactExports.useEffect(() => {
    const currentPath = location2.pathname;
    const isArabic = currentPath.startsWith("/ar");
    const basePath = isArabic ? "/ar" : "/";
    if (currentPath === "/" || currentPath === "/ar") {
      const homeItem = items.find((item) => item.url === basePath);
      if (homeItem) {
        setActiveTab(homeItem.name);
      } else {
        setActiveTab(null);
      }
      return;
    }
    const found = items.find((item) => currentPath === item.url);
    if (found) {
      setActiveTab(found.name);
    } else {
      setActiveTab(null);
    }
  }, [location2.pathname, items]);
  const handleNavClick = (item) => (e) => {
    const currentPath = location2.pathname;
    const isArabic = currentPath.startsWith("/ar");
    const basePath = isArabic ? "/ar" : "/";
    if (item.url === basePath) {
      e.preventDefault();
      if (currentPath !== basePath) {
        navigate(basePath);
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }
    if (item.url.includes("#")) {
      e.preventDefault();
      const [path, hash] = item.url.split("#");
      const targetPath = path || basePath;
      const targetHash = hash ? "#" + hash : "";
      const targetUrl = targetPath + targetHash;
      if (currentPath !== targetPath) {
        navigate(targetUrl);
      } else {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
        history.pushState(null, "", targetUrl);
      }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: navBarClass, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 bg-dark-800/80 backdrop-blur-lg py-1 px-1 rounded-full", children: items.map((item) => {
    const Icon = item.icon;
    const isActive = activeTab === item.name;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: item.url,
        onClick: handleNavClick(item),
        className: cn(
          "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
          "text-gray-300 hover:text-accent-primary",
          isActive && "bg-dark-700 text-accent-primary"
          // Simplified active class application
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden md:inline", children: item.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18, strokeWidth: 2.5 }) }),
          isActive && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              layoutId: "lamp",
              className: "absolute inset-0 w-full bg-accent-primary/10 rounded-full -z-10",
              initial: false,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-accent-primary rounded-t-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute w-12 h-6 bg-accent-primary/20 rounded-full blur-md -top-2 -left-2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute w-8 h-6 bg-accent-primary/20 rounded-full blur-md -top-1" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute w-4 h-4 bg-accent-primary/20 rounded-full blur-sm top-0 left-2" })
              ] })
            }
          )
        ]
      },
      item.name
    );
  }) }) });
}
const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const toggleLanguage = () => {
    const newLang = language === "en" ? "ar" : "en";
    setLanguage(newLang);
    const currentPath = window.location.pathname;
    const newPath = newLang === "ar" ? currentPath.startsWith("/ar") ? currentPath : `/ar${currentPath}` : currentPath.startsWith("/ar") ? currentPath.replace("/ar", "") : currentPath;
    navigate(newPath);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      onClick: toggleLanguage,
      className: "flex items-center gap-2 px-4 py-2 rounded-full bg-dark-800 hover:bg-dark-700 transition-colors duration-200",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: language === "en" ? "العربية" : "English" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs opacity-70", children: language === "en" ? "AR" : "EN" })
      ]
    }
  );
};
const navItems$1 = [
  { name: "Home", url: "/", icon: Home },
  { name: "Features", url: "/features", icon: Bot },
  { name: "Use Cases", url: "/use-cases", icon: ShoppingBag },
  { name: "About", url: "/about", icon: User },
  { name: "Contact", url: "/contact", icon: Mail }
];
const Header$1 = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = reactExports.useState(false);
  useLocation();
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavBar, { items: navItems$1 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.header,
      {
        initial: { y: -100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.8, ease: "easeOut" },
        className: "fixed w-full top-0 z-40",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-4 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: brandIcon,
                alt: "AIX Brand Icon",
                className: "w-10 h-10 shadow-lg",
                loading: "lazy"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageSwitcher, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  className: "px-6 py-2 bg-gradient-to-r from-accent-primary to-accent-secondary text-dark-900 font-mono font-bold rounded-full hover:shadow-lg hover:shadow-accent-primary/20 transition-all",
                  onClick: () => {
                    setMobileMenuOpen(false);
                    navigate("/get-started");
                  },
                  children: "Get Started"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "md:hidden text-white z-50", onClick: () => setMobileMenuOpen(true), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 28 }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: mobileMenuOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              className: "fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex justify-end",
              onClick: () => setMobileMenuOpen(false),
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { x: "100%" },
                  animate: { x: 0 },
                  exit: { x: "100%" },
                  transition: { type: "spring", stiffness: 400, damping: 40 },
                  className: "w-3/4 max-w-xs h-full bg-dark-900 shadow-xl p-8 flex flex-col space-y-8 relative",
                  onClick: (e) => e.stopPropagation(),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "absolute top-4 right-4 text-gray-400 hover:text-accent-primary", onClick: () => setMobileMenuOpen(false), children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 28 }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex flex-col gap-6 mt-12", children: navItems$1.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        className: "flex items-center gap-3 text-lg text-gray-200 hover:text-accent-primary font-semibold px-3 py-2 rounded-lg transition-colors bg-dark-800/80",
                        onClick: () => {
                          setMobileMenuOpen(false);
                          if (item.url === "/") {
                            navigate("/");
                            setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
                          } else if (item.url.startsWith("/#")) {
                            navigate("/");
                            setTimeout(() => {
                              const id = item.url.replace("/#", "");
                              const el = document.getElementById(id);
                              if (el) el.scrollIntoView({ behavior: "smooth" });
                            }, 400);
                          } else {
                            navigate(item.url);
                          }
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { size: 22, className: "text-accent-primary" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.name })
                        ]
                      },
                      item.name
                    )) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 mt-8", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageSwitcher, {}),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          className: "w-full px-6 py-3 bg-gradient-to-r from-accent-primary to-accent-secondary text-dark-900 font-mono font-bold rounded-full hover:shadow-lg hover:shadow-accent-primary/20 transition-all text-lg",
                          onClick: () => {
                            setMobileMenuOpen(false);
                            navigate("/get-started");
                          },
                          children: "Get Started"
                        }
                      )
                    ] })
                  ]
                }
              )
            }
          ) })
        ]
      }
    )
  ] });
};
class EmailJSResponseStatus {
  constructor(_status = 0, _text = "Network Error") {
    this.status = _status;
    this.text = _text;
  }
}
const createWebStorage = () => {
  if (typeof localStorage === "undefined")
    return;
  return {
    get: (key) => Promise.resolve(localStorage.getItem(key)),
    set: (key, value) => Promise.resolve(localStorage.setItem(key, value)),
    remove: (key) => Promise.resolve(localStorage.removeItem(key))
  };
};
const store = {
  origin: "https://api.emailjs.com",
  blockHeadless: false,
  storageProvider: createWebStorage()
};
const buildOptions = (options2) => {
  if (!options2)
    return {};
  if (typeof options2 === "string") {
    return {
      publicKey: options2
    };
  }
  if (options2.toString() === "[object Object]") {
    return options2;
  }
  return {};
};
const init = (options2, origin = "https://api.emailjs.com") => {
  if (!options2)
    return;
  const opts = buildOptions(options2);
  store.publicKey = opts.publicKey;
  store.blockHeadless = opts.blockHeadless;
  store.storageProvider = opts.storageProvider;
  store.blockList = opts.blockList;
  store.limitRate = opts.limitRate;
  store.origin = opts.origin || origin;
};
const sendPost = async (url, data, headers = {}) => {
  const response = await fetch(store.origin + url, {
    method: "POST",
    headers,
    body: data
  });
  const message = await response.text();
  const responseStatus = new EmailJSResponseStatus(response.status, message);
  if (response.ok) {
    return responseStatus;
  }
  throw responseStatus;
};
const validateParams = (publicKey, serviceID, templateID) => {
  if (!publicKey || typeof publicKey !== "string") {
    throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
  }
  if (!serviceID || typeof serviceID !== "string") {
    throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
  }
  if (!templateID || typeof templateID !== "string") {
    throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
  }
};
const validateTemplateParams = (templateParams) => {
  if (templateParams && templateParams.toString() !== "[object Object]") {
    throw "The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/";
  }
};
const isHeadless = (navigator2) => {
  return navigator2.webdriver || !navigator2.languages || navigator2.languages.length === 0;
};
const headlessError = () => {
  return new EmailJSResponseStatus(451, "Unavailable For Headless Browser");
};
const validateBlockListParams = (list, watchVariable) => {
  if (!Array.isArray(list)) {
    throw "The BlockList list has to be an array";
  }
  if (typeof watchVariable !== "string") {
    throw "The BlockList watchVariable has to be a string";
  }
};
const isBlockListDisabled = (options2) => {
  var _a2;
  return !((_a2 = options2.list) == null ? void 0 : _a2.length) || !options2.watchVariable;
};
const getValue = (data, name) => {
  return data instanceof FormData ? data.get(name) : data[name];
};
const isBlockedValueInParams = (options2, params) => {
  if (isBlockListDisabled(options2))
    return false;
  validateBlockListParams(options2.list, options2.watchVariable);
  const value = getValue(params, options2.watchVariable);
  if (typeof value !== "string")
    return false;
  return options2.list.includes(value);
};
const blockedEmailError = () => {
  return new EmailJSResponseStatus(403, "Forbidden");
};
const validateLimitRateParams = (throttle, id) => {
  if (typeof throttle !== "number" || throttle < 0) {
    throw "The LimitRate throttle has to be a positive number";
  }
  if (id && typeof id !== "string") {
    throw "The LimitRate ID has to be a non-empty string";
  }
};
const getLeftTime = async (id, throttle, storage) => {
  const lastTime = Number(await storage.get(id) || 0);
  return throttle - Date.now() + lastTime;
};
const isLimitRateHit = async (defaultID, options2, storage) => {
  if (!options2.throttle || !storage) {
    return false;
  }
  validateLimitRateParams(options2.throttle, options2.id);
  const id = options2.id || defaultID;
  const leftTime = await getLeftTime(id, options2.throttle, storage);
  if (leftTime > 0) {
    return true;
  }
  await storage.set(id, Date.now().toString());
  return false;
};
const limitRateError = () => {
  return new EmailJSResponseStatus(429, "Too Many Requests");
};
const send = async (serviceID, templateID, templateParams, options2) => {
  const opts = buildOptions(options2);
  const publicKey = opts.publicKey || store.publicKey;
  const blockHeadless = opts.blockHeadless || store.blockHeadless;
  const storageProvider = opts.storageProvider || store.storageProvider;
  const blockList = { ...store.blockList, ...opts.blockList };
  const limitRate = { ...store.limitRate, ...opts.limitRate };
  if (blockHeadless && isHeadless(navigator)) {
    return Promise.reject(headlessError());
  }
  validateParams(publicKey, serviceID, templateID);
  validateTemplateParams(templateParams);
  if (templateParams && isBlockedValueInParams(blockList, templateParams)) {
    return Promise.reject(blockedEmailError());
  }
  if (await isLimitRateHit(location.pathname, limitRate, storageProvider)) {
    return Promise.reject(limitRateError());
  }
  const params = {
    lib_version: "4.4.1",
    user_id: publicKey,
    service_id: serviceID,
    template_id: templateID,
    template_params: templateParams
  };
  return sendPost("/api/v1.0/email/send", JSON.stringify(params), {
    "Content-type": "application/json"
  });
};
const validateForm = (form) => {
  if (!form || form.nodeName !== "FORM") {
    throw "The 3rd parameter is expected to be the HTML form element or the style selector of the form";
  }
};
const findHTMLForm = (form) => {
  return typeof form === "string" ? document.querySelector(form) : form;
};
const sendForm = async (serviceID, templateID, form, options2) => {
  const opts = buildOptions(options2);
  const publicKey = opts.publicKey || store.publicKey;
  const blockHeadless = opts.blockHeadless || store.blockHeadless;
  const storageProvider = store.storageProvider || opts.storageProvider;
  const blockList = { ...store.blockList, ...opts.blockList };
  const limitRate = { ...store.limitRate, ...opts.limitRate };
  if (blockHeadless && isHeadless(navigator)) {
    return Promise.reject(headlessError());
  }
  const currentForm = findHTMLForm(form);
  validateParams(publicKey, serviceID, templateID);
  validateForm(currentForm);
  const formData = new FormData(currentForm);
  if (isBlockedValueInParams(blockList, formData)) {
    return Promise.reject(blockedEmailError());
  }
  if (await isLimitRateHit(location.pathname, limitRate, storageProvider)) {
    return Promise.reject(limitRateError());
  }
  formData.append("lib_version", "4.4.1");
  formData.append("service_id", serviceID);
  formData.append("template_id", templateID);
  formData.append("user_id", publicKey);
  return sendPost("/api/v1.0/email/send-form", formData);
};
const emailjs = {
  init,
  send,
  sendForm,
  EmailJSResponseStatus
};
const EMAILJS_SERVICE = "service_9zlyun5";
const EMAILJS_TEMPLATE = "template_joo56rq";
const EMAILJS_PUBLIC_KEY = "SFg6ihBocyWAfrj6O";
const EN = {
  heading: "Join the AIX waitlist",
  subheading: "AIX is invite-only during private beta. Leave your email and we’ll reach out with access.",
  placeholder: "you@yourstore.com",
  cta: "Join the waitlist",
  sending: "Submitting…",
  success: "You’re on the list. We’ll be in touch soon.",
  error: "Something went wrong. Please try again or email support@aixegy.com."
};
const AR = {
  heading: "انضمّ إلى قائمة انتظار AIX",
  subheading: "AIX بالدعوة فقط خلال الإصدار التجريبي الخاص. اترك بريدك وسنتواصل معك لإتاحة الوصول.",
  placeholder: "you@yourstore.com",
  cta: "انضمّ لقائمة الانتظار",
  sending: "جارٍ الإرسال…",
  success: "تم تسجيلك في القائمة، وسنتواصل معك قريبًا.",
  error: "حدث خطأ. حاول مجددًا أو راسِل support@aixegy.com."
};
const WaitlistForm = ({
  lang = "en",
  variant = "section"
}) => {
  const t = lang === "ar" ? AR : EN;
  const [email, setEmail] = reactExports.useState("");
  const [status, setStatus] = reactExports.useState("idle");
  const submit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        {
          to_email: "support@aixegy.com",
          from_name: "AIX Waitlist",
          reply_to: email,
          user_email: email,
          user_name: "Waitlist signup",
          message: `New waitlist signup: ${email}`
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };
  if (variant === "inline") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-lg mx-auto", dir: lang === "ar" ? "rtl" : "ltr", children: [
      status === "success" ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-accent-primary font-medium text-base py-3", children: t.success }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "flex flex-col sm:flex-row gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "email",
            required: true,
            value: email,
            onChange: (e) => setEmail(e.target.value),
            placeholder: t.placeholder,
            className: "flex-1 rounded-full bg-dark-800/80 border border-gray-700 px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent-primary"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "submit",
            disabled: status === "sending",
            className: "rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary px-7 py-3 font-mono font-bold text-white disabled:opacity-60 whitespace-nowrap hover:shadow-lg hover:shadow-accent-primary/20 transition-all",
            children: status === "sending" ? t.sending : t.cta
          }
        )
      ] }),
      status === "error" ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-400 mt-2 text-sm", children: t.error }) : null
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative z-10 px-4 py-20", dir: lang === "ar" ? "rtl" : "ltr", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.5 },
      className: "max-w-2xl mx-auto text-center bg-dark-800/50 border border-accent-primary/20 rounded-2xl p-8 md:p-10",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent", children: t.heading }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 mb-6", children: t.subheading }),
        status === "success" ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-accent-primary font-medium text-lg py-3", children: t.success }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "flex flex-col sm:flex-row gap-3 max-w-lg mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "email",
              required: true,
              value: email,
              onChange: (e) => setEmail(e.target.value),
              placeholder: t.placeholder,
              className: "flex-1 rounded-xl bg-dark-900 border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent-primary"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "submit",
              disabled: status === "sending",
              className: "rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary px-6 py-3 font-semibold text-white disabled:opacity-60 whitespace-nowrap",
              children: status === "sending" ? t.sending : t.cta
            }
          )
        ] }),
        status === "error" ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-400 mt-3 text-sm", children: t.error }) : null
      ]
    }
  ) });
};
const Hero$1 = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden bg-dark-900 pt-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 1.5 },
        className: "absolute inset-0",
        style: {
          backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
          backgroundSize: "4rem 4rem",
          animation: "gridMove 20s linear infinite"
        }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center text-center pt-12 pb-20 md:pt-16 md:pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        className: "space-y-8 max-w-4xl",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { scale: 0 },
              animate: { scale: 1 },
              transition: { delay: 0.2, type: "spring" },
              className: "inline-flex items-center space-x-2 bg-dark-700/50 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-accent-primary/20",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "text-accent-primary animate-pulse", size: 20 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-300 font-mono text-sm", children: "The AI Sales Agent for E-commerce" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.h1,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.4 },
              className: "text-4xl md:text-6xl lg:text-7xl font-display font-bold bg-gradient-to-r from-accent-primary via-white to-accent-secondary bg-clip-text text-transparent animate-gradient",
              children: "Your 24/7 AI Sales Team"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.6 },
              className: "text-gray-400 text-lg md:text-xl max-w-xl mx-auto leading-relaxed",
              children: "Answers every customer and closes the sale, on WhatsApp, Instagram & Messenger."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.8 },
              className: "mt-10",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(WaitlistForm, { lang: "en", variant: "inline" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 1 },
              className: "flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mt-12 text-sm text-gray-400",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "text-accent-primary", size: 16 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Replies in seconds, 24/7" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "text-accent-primary", size: 16 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Knows your full catalog" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "text-accent-primary", size: 16 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Arabic & English" })
                ] })
              ]
            }
          )
        ]
      }
    ) }) })
  ] });
};
function SplineField() {
  const linesRef = reactExports.useRef(null);
  const createSpline = () => {
    const points = [];
    const segments = 50;
    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      points.push(
        new Vector3(
          Math.sin(t * Math.PI * 2) * (1 + Math.cos(t * Math.PI * 3) * 0.5),
          Math.cos(t * Math.PI * 2) * (1 + Math.sin(t * Math.PI * 3) * 0.5),
          Math.sin(t * Math.PI * 3) * 0.5
        )
      );
    }
    return points;
  };
  const splines = Array.from({ length: 8 }, (_, i) => ({
    points: createSpline(),
    color: `hsl(${220 + i * 7}, 85%, 65%)`,
    width: 0.5 - i * 0.05
  }));
  useFrame((state, delta) => {
    if (linesRef.current) {
      linesRef.current.rotation.x += delta * 0.1;
      linesRef.current.rotation.y += delta * 0.15;
      linesRef.current.rotation.z += delta * 0.05;
      linesRef.current.children.forEach((line, lineIndex) => {
        const points = line.geometry.attributes.position;
        for (let i = 0; i < points.count; i++) {
          const x = points.getX(i);
          const y = points.getY(i);
          const z = points.getZ(i);
          points.setXYZ(
            i,
            x + Math.sin(state.clock.elapsedTime + i * 0.1 + lineIndex) * 2e-3,
            y + Math.cos(state.clock.elapsedTime + i * 0.1 + lineIndex) * 2e-3,
            z + Math.sin(state.clock.elapsedTime * 0.5 + i * 0.1) * 2e-3
          );
        }
        points.needsUpdate = true;
      });
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("group", { ref: linesRef, scale: [0.8, 0.8, 0.8], children: splines.map((spline, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    Line,
    {
      points: spline.points,
      color: spline.color,
      lineWidth: spline.width,
      transparent: true,
      opacity: 0.7
    },
    index
  )) });
}
function Background3D() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Canvas,
    {
      camera: { position: [0, 0, 3], fov: 75 },
      gl: { antialias: true },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SplineField, {})
    }
  ) });
}
const footerLinksEN = [
  {
    label: "Product",
    links: [
      { title: "Features", href: "/features", isInternal: true },
      { title: "Use Cases", href: "/use-cases", isInternal: true },
      { title: "Contact", href: "/contact", isInternal: true },
      { title: "Get Started", href: "/get-started", isInternal: true }
    ]
  },
  {
    label: "Company",
    links: [
      { title: "About", href: "/about", isInternal: true },
      { title: "Privacy Policy", href: "/privacy", isPolicy: true },
      { title: "Terms of Service", href: "/terms", isTerms: true },
      { title: "Data Processing (DPA)", href: "/dpa", isInternal: true }
    ]
  },
  {
    label: "Social",
    links: [
      { title: "Instagram", href: "https://www.instagram.com/aixegy/", icon: Instagram },
      { title: "TikTok", href: "https://www.tiktok.com/@aixegy", icon: PlayCircle },
      { title: "YouTube", href: "https://www.youtube.com/@AIXEgy", icon: Youtube },
      { title: "LinkedIn", href: "https://www.linkedin.com/company/aixagent", icon: Linkedin }
    ]
  }
];
const footerLinksAR = [
  {
    label: "المنتج",
    links: [
      { title: "المميزات", href: "/ar/features", isInternal: true },
      { title: "حالات الاستخدام", href: "/ar/use-cases", isInternal: true },
      { title: "اتصل بنا", href: "/ar/contact", isInternal: true },
      { title: "ابدأ الآن", href: "/ar/get-started", isInternal: true }
    ]
  },
  {
    label: "الشركة",
    links: [
      { title: "من نحن", href: "/ar/about", isInternal: true },
      { title: "سياسة الخصوصية", href: "/ar/privacy", isPolicy: true },
      { title: "شروط الخدمة", href: "/ar/terms", isTerms: true },
      { title: "اتفاقية معالجة البيانات", href: "/ar/dpa", isInternal: true }
    ]
  },
  {
    label: "وسائل التواصل",
    links: [
      { title: "إنستغرام", href: "https://www.instagram.com/aixegy/", icon: Instagram },
      { title: "تيك توك", href: "https://www.tiktok.com/@aixegy", icon: PlayCircle },
      { title: "يوتيوب", href: "https://www.youtube.com/@AIXEgy", icon: Youtube },
      { title: "لينكد إن", href: "https://www.linkedin.com/company/aixagent", icon: Linkedin }
    ]
  }
];
function Footer() {
  const location2 = useLocation();
  const isArabic = location2.pathname.startsWith("/ar");
  const footerLinks = isArabic ? footerLinksAR : footerLinksEN;
  const copyrightText = isArabic ? `© ${(/* @__PURE__ */ new Date()).getFullYear()} AIX. جميع الحقوق محفوظة.` : `© ${(/* @__PURE__ */ new Date()).getFullYear()} AIX. All rights reserved.`;
  const contactText = isArabic ? "اتصل بنا:" : "Contact:";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: `w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t border-dark-700 bg-dark-900 px-4 py-6 md:px-6 md:py-10 lg:py-14 ${isArabic ? 'font-["Rubik"]' : ""}`, dir: isArabic ? "rtl" : "ltr", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-dark-700 absolute top-0 left-0 w-full h-px" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid w-full gap-6 md:gap-8 xl:grid-cols-3 xl:gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "size-8 text-accent-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-dark-300 mt-4 text-xs md:text-sm md:mt-0", children: copyrightText })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 xl:col-span-2 xl:mt-0", children: footerLinks.map((section, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 md:mb-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-semibold text-white mb-2", children: section.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "text-dark-200 space-y-1 text-xs md:text-sm", children: section.links.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: link.isInternal ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: link.href,
            className: "hover:text-accent-primary inline-flex items-center transition-all duration-200",
            children: [
              link.icon && /* @__PURE__ */ jsxRuntimeExports.jsx(link.icon, { className: isArabic ? "ms-1 size-4" : "me-1 size-4" }),
              link.title
            ]
          }
        ) : link.isPolicy ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: link.href,
            className: "hover:text-accent-primary inline-flex items-center transition-all duration-200",
            children: [
              link.icon && /* @__PURE__ */ jsxRuntimeExports.jsx(link.icon, { className: isArabic ? "ms-1 size-4" : "me-1 size-4" }),
              link.title
            ]
          }
        ) : link.isTerms ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: link.href,
            className: "hover:text-accent-primary inline-flex items-center transition-all duration-200",
            children: [
              link.icon && /* @__PURE__ */ jsxRuntimeExports.jsx(link.icon, { className: isArabic ? "ms-1 size-4" : "me-1 size-4" }),
              link.title
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: link.href,
            className: "hover:text-accent-primary inline-flex items-center transition-all duration-200",
            target: link.href.startsWith("http") ? "_blank" : void 0,
            rel: link.href.startsWith("http") ? "noopener noreferrer" : void 0,
            children: [
              link.icon && /* @__PURE__ */ jsxRuntimeExports.jsx(link.icon, { className: isArabic ? "ms-1 size-4" : "me-1 size-4" }),
              link.title
            ]
          }
        ) }, link.title)) })
      ] }) }, section.label)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full text-center mt-8 text-xs text-dark-300", children: [
      contactText,
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:support@aixegy.com", className: "text-accent-primary hover:underline", children: "support@aixegy.com" })
    ] })
  ] });
}
const LOGO_SIZE = {
  sm: "h-8 md:h-10",
  lg: "h-12 md:h-16"
};
const TEXT_SIZE = {
  sm: "text-lg md:text-xl",
  lg: "text-xl md:text-2xl"
};
const ICON_SIZE = {
  sm: "h-5 w-5",
  lg: "h-7 w-7 md:h-8 md:w-8"
};
const LogoItem = ({ item, size }) => {
  let inner;
  if (item.logo) {
    inner = /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: item.logo,
        alt: item.name,
        className: `${LOGO_SIZE[size]} w-auto object-contain opacity-80 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0`,
        loading: "lazy"
      }
    );
  } else if (item.Icon) {
    const Icon = item.Icon;
    inner = /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2.5 text-gray-400 transition duration-300 hover:text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `${ICON_SIZE[size]} shrink-0`, "aria-hidden": "true" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `whitespace-nowrap font-display ${TEXT_SIZE[size]} font-semibold`, children: item.name })
    ] });
  } else {
    inner = /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: `whitespace-nowrap font-display ${TEXT_SIZE[size]} font-semibold text-gray-300 transition duration-300 hover:text-white`,
        children: item.name
      }
    );
  }
  return item.href ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: item.href, target: "_blank", rel: "noopener noreferrer", className: "shrink-0", children: inner }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0", children: inner });
};
const TrustStrip = ({
  heading,
  logos,
  marqueeThreshold = 4,
  lang = "en",
  size = "sm"
}) => {
  if (!logos.length) return null;
  const scroll = logos.length > marqueeThreshold;
  const items = scroll ? [...logos, ...logos] : logos;
  const headingClass = size === "lg" ? "mb-7 text-center text-sm uppercase tracking-[0.2em] text-gray-400" : "mb-6 text-center text-xs uppercase tracking-[0.2em] text-gray-500";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: `relative z-10 px-4 ${size === "lg" ? "pt-16 pb-10" : "py-12"}`,
      dir: lang === "ar" ? "rtl" : "ltr",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: headingClass, children: heading }),
        scroll ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "trust-marquee-viewport relative mx-auto max-w-5xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "trust-marquee-track flex w-max items-center gap-12", children: items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(LogoItem, { item, size }, `${item.name}-${i}`)) }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center justify-center gap-10 md:gap-14", children: logos.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(LogoItem, { item, size }, item.name)) })
      ]
    }
  );
};
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = React.createContext && /* @__PURE__ */ React.createContext(DefaultContext);
var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o, r, i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /* @__PURE__ */ React.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return (props) => /* @__PURE__ */ React.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = (conf) => {
    var {
      attr,
      size,
      title
    } = props, svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return /* @__PURE__ */ React.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /* @__PURE__ */ React.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? /* @__PURE__ */ React.createElement(IconContext.Consumer, null, (conf) => elem(conf)) : elem(DefaultContext);
}
function SiWhatsapp(props) {
  return GenIcon({ "attr": { "role": "img", "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" }, "child": [] }] })(props);
}
function SiTelegram(props) {
  return GenIcon({ "attr": { "role": "img", "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" }, "child": [] }] })(props);
}
function SiShopify(props) {
  return GenIcon({ "attr": { "role": "img", "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z" }, "child": [] }] })(props);
}
function SiMeta(props) {
  return GenIcon({ "attr": { "role": "img", "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z" }, "child": [] }] })(props);
}
function SiMessenger(props) {
  return GenIcon({ "attr": { "role": "img", "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M12 0C5.24 0 0 4.952 0 11.64c0 3.499 1.434 6.521 3.769 8.61a.96.96 0 0 1 .323.683l.065 2.135a.96.96 0 0 0 1.347.85l2.381-1.053a.96.96 0 0 1 .641-.046A13 13 0 0 0 12 23.28c6.76 0 12-4.952 12-11.64S18.76 0 12 0m6.806 7.44c.522-.03.971.567.63 1.094l-4.178 6.457a.707.707 0 0 1-.977.208l-3.87-2.504a.44.44 0 0 0-.49.007l-4.363 3.01c-.637.438-1.415-.317-.995-.966l4.179-6.457a.706.706 0 0 1 .977-.21l3.87 2.505c.15.097.344.094.491-.007l4.362-3.008a.7.7 0 0 1 .364-.13" }, "child": [] }] })(props);
}
function SiInstagram(props) {
  return GenIcon({ "attr": { "role": "img", "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" }, "child": [] }] })(props);
}
function SiGooglesheets(props) {
  return GenIcon({ "attr": { "role": "img", "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M11.318 12.545H7.91v-1.909h3.41v1.91zM14.728 0v6h6l-6-6zm1.363 10.636h-3.41v1.91h3.41v-1.91zm0 3.273h-3.41v1.91h3.41v-1.91zM20.727 6.5v15.864c0 .904-.732 1.636-1.636 1.636H4.909a1.636 1.636 0 0 1-1.636-1.636V1.636C3.273.732 4.005 0 4.909 0h9.318v6.5h6.5zm-3.273 2.773H6.545v7.909h10.91v-7.91zm-6.136 4.636H7.91v1.91h3.41v-1.91z" }, "child": [] }] })(props);
}
const INTEGRATIONS = [
  { name: "WhatsApp", Icon: SiWhatsapp },
  { name: "Instagram", Icon: SiInstagram },
  { name: "Messenger", Icon: SiMessenger },
  { name: "Telegram", Icon: SiTelegram },
  { name: "Shopify", Icon: SiShopify },
  { name: "Google Sheets", Icon: SiGooglesheets }
];
const IntegrationsStrip = ({
  heading,
  lang = "en"
}) => /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative z-10 px-4 py-12", dir: lang === "ar" ? "rtl" : "ltr", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 text-center text-xs uppercase tracking-[0.2em] text-gray-500", children: heading }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-3", children: INTEGRATIONS.map(({ name, Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: "inline-flex items-center gap-2 rounded-full border border-dark-600/60 bg-dark-800/50 px-4 py-2 text-sm text-gray-400 transition duration-300 hover:border-accent-primary/40 hover:text-white",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 shrink-0", "aria-hidden": "true" }),
        name
      ]
    },
    name
  )) })
] });
const BACKERS = [
  { name: "MINT Incubator", logo: "/logos/mint.png" },
  { name: "Meta Tech Provider", Icon: SiMeta }
];
const CUSTOMERS = [];
const HomePage = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5 },
      className: "min-h-screen bg-dark-900 text-white relative",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Background3D, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Header$1, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Hero$1, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrustStrip, { heading: "Backed & verified by", logos: BACKERS, lang: "en", size: "lg" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(IntegrationsStrip, { heading: "Connects with", lang: "en" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrustStrip, { heading: "Trusted by", logos: CUSTOMERS, lang: "en" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
        ] })
      ]
    }
  );
};
const features$1 = [
  {
    icon: ShieldCheck,
    title: "Never invents a price",
    description: "Every price, spec, and stock count comes from your real catalog. No hallucinated answers, no made-up promises."
  },
  {
    icon: MessagesSquare,
    title: "One agent, every channel",
    description: "WhatsApp, Instagram, and Messenger in a single inbox. Your customers message where they already are."
  },
  {
    icon: PackageSearch,
    title: "Knows your catalog",
    description: "Looks up products, checks live stock, and recommends the right item, like your best salesperson on every chat."
  },
  {
    icon: ShoppingCart,
    title: "Closes the sale",
    description: "Confirms cash-on-delivery or sends a checkout link to the store you already use. AIX never touches the money."
  },
  {
    icon: UserCheck,
    title: "Hands off hot leads",
    description: "Spots a ready-to-buy customer and pings your team, so a human steps in at the moment that matters."
  },
  {
    icon: Languages,
    title: "Speaks your customers’ language",
    description: "Fluent Egyptian Arabic, English, and Franco-Arabic. Replies in whatever the customer wrote in."
  }
];
function Features$1() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "features", className: "py-20 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 opacity-50" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { scale: 0 },
                whileInView: { scale: 1 },
                transition: { delay: 0.2, type: "spring" },
                className: "inline-flex items-center space-x-2 bg-dark-700/50 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-accent-primary/20",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "text-accent-primary animate-pulse", size: 20 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-300 font-mono text-sm", children: "Why merchants trust AIX" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl font-bold font-display mb-4 bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent", children: "A sales agent, not a chatbot" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 max-w-2xl mx-auto text-lg", children: "Built for one job: turn customer messages into orders. Accurately, in every language, around the clock." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: features$1.map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: index * 0.1 },
          className: "group bg-dark-800/50 backdrop-blur-sm p-6 rounded-lg border border-accent-primary/20 space-y-4 transition-all duration-500 cursor-default",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "w-12 h-12 bg-accent-secondary/20 rounded-lg flex items-center justify-center mb-4 border border-accent-secondary/30",
                animate: {
                  boxShadow: [
                    "0 0 10px rgba(59, 130, 246, 0.12)",
                    "0 0 15px rgba(59, 130, 246, 0.2)",
                    "0 0 10px rgba(59, 130, 246, 0.12)"
                  ]
                },
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(feature.icon, { className: "text-accent-secondary", size: 24 })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-white mb-2", children: feature.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm leading-relaxed", children: feature.description })
          ]
        },
        index
      )) })
    ] })
  ] });
}
const FeaturesPage = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5 },
      className: "min-h-screen bg-dark-900 text-white relative",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Background3D, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Header$1, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Features$1, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
        ] })
      ]
    }
  );
};
const useCases$1 = [
  {
    icon: ShoppingBag,
    title: "D2C Brands",
    description: "Recommends the right product and closes the sale in DM."
  },
  {
    icon: Store,
    title: "Catalog Retailers",
    description: "Answers stock, size & price questions from your live catalog."
  },
  {
    icon: UtensilsCrossed,
    title: "Food & Grocery",
    description: "Takes orders and confirms cash-on-delivery, 24/7."
  },
  {
    icon: Boxes,
    title: "Marketplace Sellers",
    description: "Handles every buyer message so none goes cold."
  }
];
function UseCases$1() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "usecases", className: "py-20 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 opacity-50 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h2,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: "text-center text-4xl md:text-5xl font-bold font-display mb-16 bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent",
          children: "Built for how you sell"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: useCases$1.map((useCase, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          animate: {
            borderColor: [
              "rgba(58, 58, 64, 0.5)",
              "rgba(124, 58, 237, 0.4)",
              "rgba(58, 58, 64, 0.5)"
            ]
          },
          transition: {
            opacity: { duration: 0.5, delay: idx * 0.1 },
            y: { duration: 0.5, delay: idx * 0.1 },
            borderColor: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: idx * 0.2
            }
          },
          className: "bg-dark-800/60 backdrop-blur-sm p-8 rounded-2xl border border-dark-600 transition-all duration-500 flex flex-col items-start shadow-lg cursor-default",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "w-12 h-12 mb-6 flex items-center justify-center rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary shadow-md",
                animate: {
                  boxShadow: [
                    "0 4px 12px rgba(124, 58, 237, 0.3)",
                    "0 4px 20px rgba(124, 58, 237, 0.5)",
                    "0 4px 12px rgba(124, 58, 237, 0.3)"
                  ]
                },
                transition: {
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.3
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(useCase.icon, { className: "text-white", size: 28 })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold font-display mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent", children: useCase.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 leading-relaxed font-sans", children: useCase.description })
          ]
        },
        useCase.title
      )) })
    ] })
  ] });
}
const UseCasesPage = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5 },
      className: "min-h-screen bg-dark-900 text-white relative",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Background3D, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Header$1, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(UseCases$1, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
        ] })
      ]
    }
  );
};
function ContactForm$1() {
  const [formData, setFormData] = reactExports.useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = reactExports.useState({});
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [submitStatus, setSubmitStatus] = reactExports.useState("idle");
  const validateForm2 = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm2()) {
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      const templateParams = {
        to_email: "support@aixegy.com",
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message,
        user_email: formData.email,
        user_name: formData.name
      };
      await emailjs.send(
        "service_9zlyun5",
        "template_joo56rq",
        templateParams,
        "SFg6ihBocyWAfrj6O"
      );
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3e3);
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: void 0 }));
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "py-20 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 opacity-50" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        className: "max-w-2xl mx-auto",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { scale: 0 },
              whileInView: { scale: 1 },
              transition: { delay: 0.2, type: "spring" },
              className: "inline-flex items-center space-x-2 bg-dark-700/50 backdrop-blur-sm rounded-full px-4 py-2 mb-8 mx-auto",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "text-accent-primary", size: 20 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-300 font-mono text-sm", children: "Contact Us" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold font-display text-center mb-8 bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent", children: "Get in Touch" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "name", className: "block font-mono text-sm text-gray-300 mb-2", children: "Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  id: "name",
                  name: "name",
                  value: formData.name,
                  onChange: handleInputChange,
                  className: `w-full bg-dark-700/50 backdrop-blur-sm border ${errors.name ? "border-red-500" : "border-dark-600"} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors`,
                  required: true
                }
              ),
              errors.name && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.p,
                {
                  initial: { opacity: 0, y: -10 },
                  animate: { opacity: 1, y: 0 },
                  className: "text-red-500 text-sm mt-1 flex items-center space-x-1",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertCircle, { size: 14 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: errors.name })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "email", className: "block font-mono text-sm text-gray-300 mb-2", children: "Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "email",
                  id: "email",
                  name: "email",
                  value: formData.email,
                  onChange: handleInputChange,
                  className: `w-full bg-dark-700/50 backdrop-blur-sm border ${errors.email ? "border-red-500" : "border-dark-600"} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors`,
                  required: true
                }
              ),
              errors.email && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.p,
                {
                  initial: { opacity: 0, y: -10 },
                  animate: { opacity: 1, y: 0 },
                  className: "text-red-500 text-sm mt-1 flex items-center space-x-1",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertCircle, { size: 14 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: errors.email })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "message", className: "block font-mono text-sm text-gray-300 mb-2", children: "Message" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  id: "message",
                  name: "message",
                  value: formData.message,
                  onChange: handleInputChange,
                  rows: 4,
                  className: `w-full bg-dark-700/50 backdrop-blur-sm border ${errors.message ? "border-red-500" : "border-dark-600"} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors`,
                  required: true
                }
              ),
              errors.message && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.p,
                {
                  initial: { opacity: 0, y: -10 },
                  animate: { opacity: 1, y: 0 },
                  className: "text-red-500 text-sm mt-1 flex items-center space-x-1",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertCircle, { size: 14 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: errors.message })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: submitStatus === "success" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -10 },
                className: "flex items-center justify-center space-x-2 text-green-500 bg-green-500/10 p-4 rounded-lg",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle2, { size: 20 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Message sent successfully!" })
                ]
              }
            ) : submitStatus === "error" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -10 },
                className: "flex items-center justify-center space-x-2 text-red-500 bg-red-500/10 p-4 rounded-lg",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AlertCircle, { size: 20 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Failed to send message. Please try again." })
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.button,
              {
                whileHover: { scale: 1.02 },
                whileTap: { scale: 0.98 },
                type: "submit",
                disabled: isSubmitting,
                className: "w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-accent-primary to-accent-secondary text-dark-900 font-mono font-bold py-4 rounded-lg hover:shadow-lg hover:shadow-accent-primary/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                children: isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Loader2, { size: 20, className: "animate-spin" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Sending..." })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Send Message" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 20 })
                ] })
              }
            ) })
          ] })
        ]
      }
    ) })
  ] });
}
const ContactPage = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5 },
      className: "min-h-screen bg-dark-900 text-white relative",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Background3D, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Header$1, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ContactForm$1, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
        ] })
      ]
    }
  );
};
const AboutPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5 },
      className: "min-h-screen bg-dark-900 text-white relative",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Background3D, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Header$1, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 0.5 },
                className: "text-center mb-16",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent mb-4", children: "About AIX" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-300 max-w-3xl mx-auto", children: "The AI sales agent that turns customer chats into orders." })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: "initial",
                animate: "animate",
                variants: fadeInUp,
                className: "mb-16",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-display font-bold text-white mb-6 text-center", children: "Our Mission" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-300 max-w-4xl mx-auto text-center", children: "Every online store loses sales to slow replies and missed messages. AIX gives e-commerce merchants in MENA a 24/7 AI sales agent that answers every customer on WhatsApp, Instagram, and Messenger, accurately and in their own language, then closes the sale." })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: "initial",
                animate: "animate",
                variants: fadeInUp,
                className: "mb-16",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-display font-bold text-white mb-6 text-center", children: "What we believe" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-dark-800/50 p-6 rounded-lg text-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-white mb-3", children: "Accuracy first" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300", children: "AIX never invents a price or a product. Every answer is grounded in your real catalog." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-dark-800/50 p-6 rounded-lg text-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-white mb-3", children: "Meet customers where they are" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300", children: "WhatsApp, Instagram, Messenger: one agent across every channel your buyers use." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-dark-800/50 p-6 rounded-lg text-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-white mb-3", children: "Built for MENA" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300", children: "Fluent Egyptian Arabic, English, and Franco-Arabic, plus the way the region actually buys." })
                    ] })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: "initial",
                animate: "animate",
                variants: fadeInUp,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-display font-bold text-white mb-6 text-center", children: "Our Team" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-300 max-w-4xl mx-auto text-center", children: "A small, focused team of AI and commerce builders obsessed with one thing: helping merchants sell more without hiring a night shift." })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
        ] })
      ]
    }
  );
};
const GradientCard = ({ icon, title, description, cta, className }) => {
  const cardRef = reactExports.useRef(null);
  const [isHovered, setIsHovered] = reactExports.useState(false);
  const [mousePosition, setMousePosition] = reactExports.useState({ x: 0, y: 0 });
  const [rotation, setRotation] = reactExports.useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      setMousePosition({ x, y });
      const rotateX = -(y / rect.height) * 5;
      const rotateY = x / rect.width * 5;
      setRotation({ x: rotateX, y: rotateY });
    }
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      ref: cardRef,
      className: "relative rounded-[32px] overflow-hidden shadow-xl flex flex-col justify-center items-center " + (className || ""),
      style: {
        width: "100%",
        maxWidth: "360px",
        transformStyle: "preserve-3d",
        backgroundColor: "#0e131f",
        boxShadow: "0 -10px 100px 10px rgba(78, 99, 255, 0.25), 0 0 10px 0 rgba(0, 0, 0, 0.5)"
      },
      initial: { y: 0 },
      animate: {
        y: isHovered ? -5 : 0,
        rotateX: rotation.x,
        rotateY: rotation.y,
        perspective: 1e3
      },
      transition: { type: "spring", stiffness: 300, damping: 20 },
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: handleMouseLeave,
      onMouseMove: handleMouseMove,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "absolute inset-0 z-35 pointer-events-none",
            style: {
              background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 80%, rgba(255,255,255,0.05) 100%)",
              backdropFilter: "blur(2px)"
            },
            animate: {
              opacity: isHovered ? 0.7 : 0.5,
              rotateX: -rotation.x * 0.2,
              rotateY: -rotation.y * 0.2,
              z: 1
            },
            transition: { duration: 0.4, ease: "easeOut" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "absolute inset-0 z-0",
            style: { background: "linear-gradient(180deg, #000000 0%, #000000 70%)" },
            animate: { z: -1 }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "absolute inset-0 opacity-30 mix-blend-overlay z-10",
            style: {
              backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E')"
            },
            animate: { z: -0.5 }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "absolute bottom-0 left-0 right-0 h-2/3 z-20",
            style: {
              background: "radial-gradient(ellipse at bottom right, rgba(172, 92, 255, 0.7) -10%, rgba(79, 70, 229, 0) 70%),radial-gradient(ellipse at bottom left, rgba(56, 189, 248, 0.7) -10%, rgba(79, 70, 229, 0) 70%)",
              filter: "blur(40px)"
            },
            animate: {
              opacity: isHovered ? 0.9 : 0.8,
              y: isHovered ? rotation.x * 0.5 : 0,
              z: 0
            },
            transition: { duration: 0.4, ease: "easeOut" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "relative flex flex-col h-full p-8 z-40 items-center justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-white mb-3 text-center", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 text-center mb-6", children: description }),
          cta && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto", children: cta })
        ] })
      ]
    }
  );
};
const options$1 = [
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { size: 40, className: "text-accent-primary mb-4" }),
    title: "AI Sales Agent",
    description: `Your 24/7 salesperson.
AIX answers every customer on WhatsApp, Instagram & Messenger in Egyptian Arabic and English. It recommends the right product from your catalog and closes the sale.`
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Inbox, { size: 40, className: "text-accent-primary mb-4" }),
    title: "Omni-channel Inbox",
    description: `Every conversation, one place.
WhatsApp, Instagram, and Messenger in a single inbox. Your team takes over hot leads in one click. No message left cold.`
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BarChart3, { size: 40, className: "text-accent-primary mb-4" }),
    title: "Leads & Insights",
    description: `See what's selling.
AIX spots ready-to-buy customers, hands them to your team, and shows you orders, top products, and conversion at a glance.`
  }
];
const GetStarted = () => {
  const [expanded, setExpanded] = reactExports.useState(null);
  const [form, setForm] = reactExports.useState({ name: "", email: "", message: "" });
  const [status, setStatus] = reactExports.useState("idle");
  const handleExpand = (idx, title) => {
    setExpanded(idx);
    setForm({ name: "", email: "", message: `I'm interested in ${title}` });
    setStatus("idle");
  };
  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const templateParams = {
        to_email: "support@aixegy.com",
        from_name: form.name,
        reply_to: form.email,
        message: form.message,
        user_email: form.email,
        user_name: form.name
      };
      await emailjs.send(
        "service_9zlyun5",
        "template_joo56rq",
        templateParams,
        "SFg6ihBocyWAfrj6O"
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5 },
      className: "min-h-screen bg-dark-900 text-white relative",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Background3D, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Header$1, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-24 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto flex flex-col items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.h1,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6 },
                className: "text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent mb-10 text-center",
                children: "Get Started with AIX"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.7 },
                className: "text-lg text-gray-300 max-w-2xl mb-16 text-center",
                children: "Tell us about your store and we'll get your AI sales agent live on WhatsApp, Instagram, and Messenger. Pick where you'd like to start."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center gap-10 w-full md:grid md:grid-cols-3 md:gap-10", children: options$1.map((opt, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              GradientCard,
              {
                icon: opt.icon,
                title: opt.title,
                description: opt.description,
                className: expanded === idx ? "z-20 h-auto md:h-auto" : "",
                cta: expanded === idx ? /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "w-full flex flex-col gap-4 mt-4", onSubmit: handleSubmit, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      name: "name",
                      required: true,
                      placeholder: "Your Name",
                      className: "px-4 py-2 rounded-lg bg-dark-700 text-white border border-dark-600 focus:border-accent-primary outline-none",
                      value: form.name,
                      onChange: handleFormChange,
                      disabled: status === "sending"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "email",
                      name: "email",
                      required: true,
                      placeholder: "Your Email",
                      className: "px-4 py-2 rounded-lg bg-dark-700 text-white border border-dark-600 focus:border-accent-primary outline-none",
                      value: form.email,
                      onChange: handleFormChange,
                      disabled: status === "sending"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "textarea",
                    {
                      name: "message",
                      required: true,
                      rows: 3,
                      className: "px-4 py-2 rounded-lg bg-dark-700 text-white border border-dark-600 focus:border-accent-primary outline-none",
                      value: form.message,
                      onChange: handleFormChange,
                      disabled: status === "sending"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "submit",
                      className: "mt-2 px-6 py-2 bg-gradient-to-r from-accent-primary to-accent-secondary text-dark-900 font-mono font-bold rounded-full hover:shadow-lg transition-all disabled:opacity-60",
                      disabled: status === "sending",
                      children: status === "sending" ? "Sending..." : "Send"
                    }
                  ),
                  status === "success" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-green-400 text-center mt-2", children: "Message sent!" }),
                  status === "error" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-red-400 text-center mt-2", children: "Something went wrong. Try again." })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    className: "mt-4 px-6 py-2 bg-gradient-to-r from-accent-primary to-accent-secondary text-dark-900 font-mono font-bold rounded-full hover:shadow-lg transition-all",
                    onClick: () => handleExpand(idx, opt.title),
                    children: opt.title === "AI Sales Agent" ? "Get My Agent" : opt.title === "Omni-channel Inbox" ? "See the Inbox" : opt.title === "Leads & Insights" ? "Book a Demo" : "Contact Us"
                  }
                )
              },
              opt.title
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
        ] })
      ]
    }
  );
};
const PrivacyPolicy = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 py-12 text-white", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold mb-2", children: "Privacy Policy" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1 text-sm text-dark-200", children: "Effective Date: 29 May 2026" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-8 text-sm text-dark-200", children: "Last Updated: 29 May 2026" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "AIX (the “Service”) is operated by AIX, a sole proprietorship based in Egypt (“we”, “us”). This policy explains how we collect, use, and share data when you use our marketing site (aixegy.com), our product dashboard (app.aixegy.com), our embeddable chat widget, and the AI sales agents we operate on behalf of our customers across third-party channels (WhatsApp, Instagram, Messenger, Telegram)." }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mt-8 mb-3", children: "Two distinct roles" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "AIX plays two different data-protection roles. This policy treats each separately." }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc ml-6 mb-4 space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Direct visitor data: we are the controller." }),
      " When you sign up for an AIX account, browse the marketing site, or invite a teammate, AIX collects and decides how to use that data."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "End-customer message data: we are a processor." }),
      " When an AIX customer (“Merchant”) connects a channel, their end customers' messages flow through AIX so the AI agent can reply. We process that data on behalf of the Merchant, who remains the data controller. Merchants must obtain their own legally adequate consent from their end customers; AIX provides the technical mechanism, not the legal basis."
    ] })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mt-8 mb-3", children: "1. Data we collect" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 font-medium", children: "From you, the Merchant" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc ml-6 mb-4 space-y-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Account: email, name, company name, hashed password, role within your workspace" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Usage: IP address, browser, device, session timestamps, dashboard activity logs" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Settings & content: pipeline configuration, knowledge-base documents, product catalog, integration credentials (encrypted at rest)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Billing: not currently collected during private beta" })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 font-medium", children: "From your end customers, on your behalf" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc ml-6 mb-4 space-y-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Identity: name and profile picture when made available by the channel, phone number (WhatsApp), Instagram user ID, Messenger Page-Scoped ID, Telegram chat ID" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Messages: full text, attachments, timestamps, delivery status" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Derived data: AI-generated conversation summaries, purchase-intent scores, structured order data the AI captured during the conversation" })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-4 text-sm text-dark-200", children: [
    "We do ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "not" }),
    " collect government IDs, health records, financial account numbers, or precise location data."
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mt-8 mb-3", children: "2. How we use data" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 font-medium", children: "Merchant data" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc ml-6 mb-4 space-y-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Provide, operate, and improve the Service" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Authenticate accounts and protect against abuse" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Send transactional emails (account verification, hot-lead alerts, billing notices when applicable)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Send service announcements about material changes or incidents" })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 font-medium", children: "End-customer data" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc ml-6 mb-4 space-y-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Reply to end customers with the AI agent the Merchant configured" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Display the conversation to the Merchant in their inbox" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Generate AI conversation summaries the Merchant reads to triage faster" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Score purchase intent so the Merchant gets alerted on hot leads" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Persist conversation history so future turns have context" })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-4 text-sm text-dark-200", children: [
    "We do ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "not" }),
    " sell either category of data, train third-party AI models on it, or use it for cross-customer profiling."
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mt-8 mb-3", children: "3. Subprocessors" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "We use these vetted third parties to deliver the Service:" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "text-sm w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-left border-b border-dark-700", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 pr-4", children: "Subprocessor" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 pr-4", children: "Role" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2", children: "Region" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: "text-dark-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-dark-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4", children: "Amazon Web Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4", children: "Hosting, database, object storage, backups" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2", children: "EU (Frankfurt, eu-central-1)" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-dark-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4", children: "OpenAI" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4", children: "LLM inference for AI agent replies and summaries" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2", children: "United States" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-dark-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4", children: "Resend" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4", children: "Transactional email delivery" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2", children: "United States" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-dark-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4", children: "Meta Platforms" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4", children: "WhatsApp / Instagram / Messenger message transport" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2", children: "Global" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-dark-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4", children: "Telegram FZ-LLC" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4", children: "Telegram Bot API message transport" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2", children: "United Arab Emirates" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4", children: "Netlify" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4", children: "Marketing site hosting" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2", children: "United States / EU" })
      ] })
    ] })
  ] }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-4 text-sm text-dark-200", children: [
    "A current list can be requested at any time by emailing",
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:support@aixegy.com", className: "text-accent-primary hover:underline", children: "support@aixegy.com" }),
    "."
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mt-8 mb-3", children: "4. Data retention" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc ml-6 mb-4 space-y-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Active workspaces:" }),
      " data is retained for as long as the workspace exists."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Workspace deletion:" }),
      " Merchant data is deleted within 30 days of workspace termination. End-customer data tied only to that workspace is deleted along with it."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Backups:" }),
      " encrypted Postgres dumps are stored for 30 days in our EU-region S3 bucket and then permanently deleted."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Application logs:" }),
      " retained for 14 days and then purged. Logs do not include message bodies in production."
    ] })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mt-8 mb-3", children: "5. Your rights" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2", children: "Under GDPR (and similar laws), you can:" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc ml-6 mb-4 space-y-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Request a copy of your data" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Correct inaccurate data" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Delete your data (subject to legal-retention exceptions)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Restrict or object to processing" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Port your data to another service" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Lodge a complaint with a supervisory authority" })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-4", children: [
    "To exercise these rights, email",
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:support@aixegy.com", className: "text-accent-primary hover:underline", children: "support@aixegy.com" }),
    ". We respond within 30 days."
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mt-8 mb-3", children: "6. End customers: how to request deletion" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2", children: "If you're an end customer who interacted with a Merchant's AIX-powered agent:" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc ml-6 mb-4 space-y-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Easiest path:" }),
      " contact the Merchant directly. They are the data controller and own the relationship with you."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Meta-platform users:" }),
      " you can also request deletion via the in-app data deletion flow Meta exposes. Meta will call our deletion endpoint at",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-xs", children: "app.aixegy.com/v1/webhooks/meta/data-deletion" }),
      " and we will remove your data from our systems."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Direct request:" }),
      " email",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:support@aixegy.com", className: "text-accent-primary hover:underline", children: "support@aixegy.com" }),
      " ",
      "with the channel you used and the phone number or handle the conversation was on."
    ] })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-sm text-dark-200", children: "We resolve direct deletion requests within 30 days." }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mt-8 mb-3", children: "7. International data transfers" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "The primary database and message storage live in the EU (Frankfurt). LLM inference is performed by OpenAI on infrastructure that may be located outside the EU; we rely on OpenAI's Standard Contractual Clauses for those transfers. Meta and Telegram process channel messages on their own global infrastructure under their respective terms." }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mt-8 mb-3", children: "8. Security" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc ml-6 mb-4 space-y-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "All connections to AIX are encrypted with TLS 1.2 or higher" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Channel tokens (Telegram bot tokens, Meta access tokens) are encrypted at rest with Fernet (AES-128 + HMAC) using a key that lives only in our deployment environment" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Database access is restricted to our application via private networking" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Backups are encrypted at rest in S3" })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-4 text-sm text-dark-200", children: [
    "No system is perfectly secure. If you believe your account has been compromised, email",
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:support@aixegy.com", className: "text-accent-primary hover:underline", children: "support@aixegy.com" }),
    " ",
    "immediately."
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mt-8 mb-3", children: "9. Cookies & tracking" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc ml-6 mb-4 space-y-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "app.aixegy.com" }),
      " uses a single authenticated session cookie. We do not run third-party analytics, marketing pixels, or advertising trackers inside the product."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "aixegy.com" }),
      " (the marketing site) may use basic privacy-respecting analytics."
    ] })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mt-8 mb-3", children: "10. Children" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "AIX is a B2B service intended for businesses operated by adults. It is not directed at, and we do not knowingly collect data from, children under 16." }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mt-8 mb-3", children: "11. Changes to this policy" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "We may update this policy. Material changes will be announced by email to active workspace owners at least 14 days before they take effect. Continued use of the Service after the effective date constitutes acceptance of the updated policy." }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mt-8 mb-3", children: "12. Contact" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-2", children: [
    "Privacy questions or requests:",
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:support@aixegy.com", className: "text-accent-primary hover:underline", children: "support@aixegy.com" })
  ] })
] });
const TermsOfService = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 py-12 text-white", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold mb-2", children: "Terms of Service" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-8 text-sm text-dark-200", children: "Effective Date: 29 May 2026" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "These Terms govern your access to and use of the AIX platform (the “Service”), operated by AIX (“we”, “us”). By creating an account, connecting a channel, or otherwise using the Service, you agree to these Terms." }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mt-8 mb-3", children: "1. Definitions" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc ml-6 mb-4 space-y-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Customer / Merchant / you:" }),
      " the business or individual that signs up for an AIX account and configures AI agents to message their customers."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "End Customer:" }),
      " a person the Merchant's AI agent talks to over WhatsApp, Instagram, Messenger, Telegram, or the embeddable web widget."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Service:" }),
      " the AIX dashboard, AI engine, channel integrations, knowledge base, catalog import, analytics, and any related software we operate."
    ] })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mt-8 mb-3", children: "2. Eligibility" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc ml-6 mb-4 space-y-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "You must be at least 18 years old." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "You must have authority to bind the business you sign up on behalf of." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "During our private beta, accounts are invite-only. AIX may decline or revoke beta access at its discretion." })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mt-8 mb-3", children: "3. Acceptable use" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2", children: "You agree not to use the Service to:" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc ml-6 mb-4 space-y-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Send unsolicited bulk messages (“spam”)." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Send messages that violate WhatsApp Commerce Policy, Meta Platform Terms, Telegram's Terms of Service, or any applicable law." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Process data of minors under 16 without legally adequate parental consent." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Impersonate another person or business." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Distribute malware, phishing content, content promoting violence, or material that infringes the rights of others." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Reverse-engineer, scrape, or attempt to extract our models, source code, or infrastructure." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Bypass our rate limits, circumvent invite gating, or use the Service for purposes other than legitimate sales conversations." })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-sm text-dark-200", children: "You are solely responsible for the content of your AI agent's prompts, knowledge base, and the conversations the AI agent holds on your behalf." }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mt-8 mb-3", children: "4. Platform compliance is your responsibility" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2", children: "You must comply with the terms of every channel you connect:" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc ml-6 mb-4 space-y-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "WhatsApp:" }),
      " the WhatsApp Business Terms, the WhatsApp Business Messaging Policy, and the 24-hour Customer Service Window rules."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Instagram & Messenger:" }),
      " the Meta Platform Terms and Messenger Platform Policies, including the relevant messaging-window restrictions."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Telegram:" }),
      " Telegram's Terms of Service and Bot API Terms."
    ] })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-sm text-dark-200", children: "If a platform suspends or terminates your account on its side for policy violation, AIX is not responsible and cannot restore access on the platform's behalf." }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mt-8 mb-3", children: "5. Data" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc ml-6 mb-4 space-y-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "AIX is a data processor for End Customer data. You remain the data controller and must obtain legally adequate consent from your end customers before connecting their channel to AIX." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      "Our processing terms are detailed in our",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/privacy", className: "text-accent-primary hover:underline", children: "Privacy Policy" }),
      "."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      "Our",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/dpa", className: "text-accent-primary hover:underline", children: "Data Processing Agreement" }),
      " ",
      "is available, and a counter-signed copy can be requested at",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:support@aixegy.com", className: "text-accent-primary hover:underline", children: "support@aixegy.com" }),
      "."
    ] })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mt-8 mb-3", children: "6. Service availability" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc ml-6 mb-4 space-y-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "During private beta, the Service is provided “as is” with no SLA." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "We perform maintenance with best-effort advance notice when downtime is planned." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Public-beta and General Availability tiers will publish formal SLAs." })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mt-8 mb-3", children: "7. Fees & billing" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc ml-6 mb-4 space-y-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "The Service is currently free during private beta." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "We may introduce paid plans with at least 30 days' notice to active workspace owners." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Any fees you incur from third parties (WhatsApp conversation pricing, OpenAI usage if you bring your own key, Telegram quota limits, etc.) are between you and that third party." })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mt-8 mb-3", children: "8. Limitation of liability" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2", children: "To the maximum extent permitted by law:" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc ml-6 mb-4 space-y-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "AIX is not liable for indirect, incidental, special, consequential, or exemplary damages." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "AIX is not liable for loss of profit, revenue, business, goodwill, or anticipated savings." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "AIX's total liability for any claim is capped at the greater of (a) the fees you paid AIX in the trailing 12 months, or (b) USD 100." })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mt-8 mb-3", children: "9. Indemnification" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2", children: "You agree to indemnify AIX, its operators, and its subprocessors for claims arising from:" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc ml-6 mb-4 space-y-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Your violation of these Terms or any third-party platform's terms." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Your AI agent's prompts, content, or behavior that you configured, including statements the AI made on your behalf." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Claims from your end customers for which you are the data controller." })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mt-8 mb-3", children: "10. Termination" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc ml-6 mb-4 space-y-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      "You may cancel your account at any time by emailing",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:support@aixegy.com", className: "text-accent-primary hover:underline", children: "support@aixegy.com" }),
      " ",
      "(self-serve cancellation lands in a future release)."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "AIX may terminate accounts that violate these Terms with reasonable notice, or immediately for severe violations." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "On termination, your data is deleted within 30 days." })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mt-8 mb-3", children: "11. Changes to these Terms" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "We may update these Terms. Material changes are announced by email at least 14 days before they take effect. Continued use of the Service after the effective date constitutes acceptance." }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mt-8 mb-3", children: "12. Governing law" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "These Terms are governed by the laws of the Arab Republic of Egypt. Disputes arising out of or relating to these Terms will be resolved by the courts of Cairo, Egypt. This is our private-beta default; we may amend to an international-arbitration clause as the customer base expands." }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mt-8 mb-3", children: "13. Contact" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-2", children: [
    "General, legal, and privacy questions:",
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:support@aixegy.com", className: "text-accent-primary hover:underline", children: "support@aixegy.com" })
  ] })
] });
const DataProcessingAgreement = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 py-12 text-white", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold mb-2", children: "Data Processing Agreement" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1 text-sm text-dark-200", children: "Effective Date: 8 June 2026" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-8 text-sm text-dark-200", children: "Last Updated: 8 June 2026" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-4", children: [
    "This Data Processing Agreement (“DPA”) forms part of the agreement between AIX, a sole proprietorship based in Egypt (“we”, “us”, the “Processor”) and the customer that uses the AIX service (the “Merchant”, “you”, the “Controller”). It governs AIX's processing of personal data of the Merchant's end customers when the Merchant uses AIX to operate AI sales agents across channels (WhatsApp, Instagram, Messenger, Telegram, and the web widget). It complements, and is incorporated into, the AIX",
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/terms", className: "underline", children: "Terms of Service" }),
    " and",
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/privacy", className: "underline", children: "Privacy Policy" }),
    ". Where this DPA conflicts with the Terms on the subject of personal-data processing, this DPA prevails."
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mt-8 mb-3", children: "1. Roles of the parties" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-4", children: [
    "For end-customer message data, the ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Merchant is the data controller" }),
    " and",
    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " AIX is the data processor" }),
    ". The Merchant determines the purposes and means of processing; AIX processes the data only to provide the service and only on the Merchant's documented instructions. For the Merchant's own account data (sign-up, dashboard usage), AIX acts as an independent controller as described in the Privacy Policy, and that processing is outside the scope of this DPA."
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mt-8 mb-3", children: "2. Subject matter, duration, nature and purpose" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc ml-6 mb-4 space-y-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Subject matter:" }),
      " processing of end-customer personal data necessary to receive messages, generate AI replies, manage conversations and orders, and surface analytics to the Merchant."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Duration:" }),
      " for the term of the Merchant's use of AIX, plus the deletion period in Section 9."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Nature and purpose:" }),
      " collection, storage, retrieval, use, transmission to subprocessors for AI generation, and deletion, all for the purpose of operating the Merchant's AI sales agent."
    ] })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mt-8 mb-3", children: "3. Categories of data and data subjects" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc ml-6 mb-4 space-y-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Data subjects:" }),
      " the Merchant's end customers and prospects who message the Merchant's connected channels."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Personal data:" }),
      " name and profile name where provided by the channel, phone number (WhatsApp), platform user IDs (Instagram user ID, Messenger Page-Scoped ID, Telegram chat ID), message content (text and images the end customer sends), order and contact details the end customer provides, and AI-derived signals (intent score, conversation summaries)."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "No special categories" }),
      " of data are intended to be processed. The Merchant must not configure the agent to solicit special-category data (health, biometric, religious, etc.)."
    ] })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mt-8 mb-3", children: "4. Merchant obligations" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "The Merchant warrants that it has a valid legal basis and all necessary consents to collect and have AIX process its end customers' personal data, including any consent required by the messaging platforms. AIX provides the technical mechanism, not the legal basis. The Merchant's instructions are given through its configuration and use of the service and through this DPA." }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mt-8 mb-3", children: "5. AIX (Processor) obligations" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc ml-6 mb-4 space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      "Process personal data ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "only on the Merchant's documented instructions" }),
      ", including for international transfers, unless required by law (in which case AIX will inform the Merchant unless legally prohibited)."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      "Ensure persons authorised to process the data are bound by",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "confidentiality" }),
      "."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      "Implement appropriate ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "technical and organisational security measures" }),
      "(Section 7)."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Assist the Merchant" }),
      ", taking into account the nature of processing, in responding to data-subject requests and in meeting its security, breach-notification, and impact-assessment obligations."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      "At the Merchant's choice, ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "delete or return" }),
      " the personal data at the end of the service (Section 9)."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      "Make available the information necessary to demonstrate compliance and",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "allow for and contribute to audits" }),
      ", subject to reasonable notice and confidentiality."
    ] })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mt-8 mb-3", children: "6. Subprocessors" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "The Merchant provides general authorisation for AIX to engage the subprocessors below. AIX imposes data-protection terms on each subprocessor no less protective than this DPA and remains responsible for their performance. AIX will give notice (via the dashboard or email) before adding or replacing a subprocessor, and the Merchant may object on reasonable data-protection grounds." }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm text-left", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "text-dark-200 border-b border-dark-700", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 pr-4", children: "Subprocessor" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 pr-4", children: "Purpose" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 pr-4", children: "Location" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: "divide-y divide-dark-800", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4", children: "Amazon Web Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4", children: "Hosting, database, object storage, backups" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4", children: "EU (Frankfurt)" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4", children: "OpenAI" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4", children: "LLM generation of AI replies" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4", children: "United States" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4", children: "Meta Platforms" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4", children: "WhatsApp / Instagram / Messenger message delivery" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4", children: "Global" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4", children: "Telegram" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4", children: "Telegram message delivery" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4", children: "Global" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4", children: "Resend" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4", children: "Transactional / notification email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4", children: "United States" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4", children: "Sentry" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4", children: "Error monitoring (PII-minimised)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4", children: "EU" })
      ] })
    ] })
  ] }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mt-8 mb-3", children: "7. Security measures" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc ml-6 mb-4 space-y-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Encryption in transit (TLS) and of sensitive credentials at rest (channel tokens)." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Strict tenant isolation: every record is scoped to the Merchant's workspace." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Role-based access control and least-privilege access for AIX personnel." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Signed-webhook verification (fail-closed) on all inbound channel traffic." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Encrypted, access-controlled nightly database backups." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Audit logging of sensitive operator actions." })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mt-8 mb-3", children: "8. Personal data breach" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "AIX will notify the Merchant without undue delay, and in any case within 72 hours, after becoming aware of a personal-data breach affecting the Merchant's data, with the information reasonably available to help the Merchant meet its own notification obligations." }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mt-8 mb-3", children: "9. Return and deletion" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "On termination, or on the Merchant's written request, AIX will delete or return the end-customer personal data and delete existing copies within 30 days, except where retention is required by law. End customers may also exercise deletion directly via the deletion request flow referenced in the Privacy Policy." }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mt-8 mb-3", children: "10. International transfers" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Where processing involves transferring personal data outside the EEA (for example, LLM generation by OpenAI in the United States), AIX relies on an appropriate transfer mechanism, such as the EU Standard Contractual Clauses entered into with the relevant subprocessor." }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mt-8 mb-3", children: "11. Liability and term" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Each party's liability under this DPA is subject to the limitations and exclusions of liability in the Terms of Service. This DPA takes effect when the Merchant accepts the Terms or begins using AIX, and continues for as long as AIX processes personal data on the Merchant's behalf." }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mt-8 mb-3", children: "12. Contact and signed copies" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-4", children: [
    "For data-protection questions, or to request a counter-signed copy of this DPA for your records or procurement process, contact",
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:support@aixegy.com", className: "underline", children: "support@aixegy.com" }),
    "."
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-sm text-dark-200", children: "This document is provided in good faith as a clear, founder-authored DPA. It is not legal advice. For high-volume or regulated processing, have it reviewed by your own counsel." })
] });
const navItems = [
  { name: "الرئيسية", url: "/ar", icon: Home },
  { name: "المميزات", url: "/ar/features", icon: Bot },
  { name: "حالات الاستخدام", url: "/ar/use-cases", icon: ShoppingBag },
  { name: "من نحن", url: "/ar/about", icon: User },
  { name: "اتصل بنا", url: "/ar/contact", icon: Mail }
];
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = reactExports.useState(false);
  useLocation();
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavBar, { items: navItems }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.header,
      {
        initial: { y: -100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.8, ease: "easeOut" },
        className: "fixed w-full top-0 z-40",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-4 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/ar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: brandIcon,
                alt: "شعار AIX",
                className: "w-10 h-10 shadow-lg",
                loading: "lazy"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageSwitcher, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  className: "px-6 py-2 bg-gradient-to-r from-accent-primary to-accent-secondary text-dark-900 font-mono font-bold rounded-full hover:shadow-lg hover:shadow-accent-primary/20 transition-all",
                  onClick: () => {
                    setMobileMenuOpen(false);
                    navigate("/ar/get-started");
                  },
                  children: "ابدأ الآن"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "md:hidden text-white z-50", onClick: () => setMobileMenuOpen(true), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 28 }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: mobileMenuOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              className: "fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex justify-start",
              onClick: () => setMobileMenuOpen(false),
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { x: "-100%" },
                  animate: { x: 0 },
                  exit: { x: "-100%" },
                  transition: { type: "spring", stiffness: 400, damping: 40 },
                  className: "w-3/4 max-w-xs h-full bg-dark-900 shadow-xl p-8 flex flex-col space-y-8 relative",
                  onClick: (e) => e.stopPropagation(),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "absolute top-4 left-4 text-gray-400 hover:text-accent-primary", onClick: () => setMobileMenuOpen(false), children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 28 }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex flex-col gap-6 mt-12", children: navItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        className: "flex items-center gap-3 text-lg text-gray-200 hover:text-accent-primary font-semibold px-3 py-2 rounded-lg transition-colors bg-dark-800/80",
                        onClick: () => {
                          setMobileMenuOpen(false);
                          if (item.url === "/ar") {
                            navigate("/ar");
                            setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
                          } else if (item.url.startsWith("/ar#")) {
                            navigate("/ar");
                            setTimeout(() => {
                              const id = item.url.replace("/ar#", "");
                              const el = document.getElementById(id);
                              if (el) el.scrollIntoView({ behavior: "smooth" });
                            }, 400);
                          } else {
                            navigate(item.url);
                          }
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { size: 22, className: "text-accent-primary" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.name })
                        ]
                      },
                      item.name
                    )) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageSwitcher, {}),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          className: "w-full px-6 py-3 bg-gradient-to-r from-accent-primary to-accent-secondary text-dark-900 font-mono font-bold rounded-full hover:shadow-lg hover:shadow-accent-primary/20 transition-all text-lg",
                          onClick: () => {
                            setMobileMenuOpen(false);
                            navigate("/ar/get-started");
                          },
                          children: "ابدأ الآن"
                        }
                      )
                    ] })
                  ]
                }
              )
            }
          ) })
        ]
      }
    )
  ] });
};
const Hero = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden bg-dark-900 pt-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 1.5 },
        className: "absolute inset-0",
        style: {
          backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
          backgroundSize: "4rem 4rem",
          animation: "gridMove 20s linear infinite"
        }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center text-center pt-12 pb-20 md:pt-16 md:pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        className: "space-y-8 max-w-4xl flex-shrink-0 h-auto",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { scale: 0 },
              animate: { scale: 1 },
              transition: { delay: 0.2, type: "spring" },
              className: "inline-flex items-center space-x-2 bg-dark-700/50 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-accent-primary/20",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "text-accent-primary animate-pulse", size: 20 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-300 font-mono text-sm", children: "مساعد المبيعات الذكي للتجارة الإلكترونية" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.h1,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.4 },
              className: "text-4xl md:text-6xl lg:text-7xl font-display font-bold bg-gradient-to-r from-accent-primary via-white to-accent-secondary bg-clip-text text-transparent animate-gradient pb-2 leading-tight",
              children: "فريق المبيعات الذكي بتاعك ٢٤/٧"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.6 },
              className: "text-gray-400 text-lg md:text-xl max-w-xl mx-auto leading-relaxed",
              children: "بيرد على كل عميل ويقفل البيعة، على واتساب وإنستجرام وماسنجر."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.8 },
              className: "mt-10",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(WaitlistForm, { lang: "ar", variant: "inline" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 1 },
              className: "flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mt-12 text-sm text-gray-400",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "text-accent-primary", size: 16 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "رد في ثوانٍ، على مدار الساعة" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "text-accent-primary", size: 16 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "عارف الكتالوج كله" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "text-accent-primary", size: 16 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "عربي وإنجليزي" })
                ] })
              ]
            }
          )
        ]
      }
    ) }) })
  ] });
};
const HomePageAR = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5 },
      className: "min-h-screen bg-dark-900 text-white relative",
      dir: "rtl",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Background3D, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrustStrip, { heading: "بدعم واعتماد من", logos: BACKERS, lang: "ar", size: "lg" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(IntegrationsStrip, { heading: "يتكامل مع", lang: "ar" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrustStrip, { heading: "موثوق به من", logos: CUSTOMERS, lang: "ar" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
        ] })
      ]
    }
  );
};
const features = [
  {
    icon: ShieldCheck,
    title: "عمره ما يخترع سعر",
    description: "كل سعر ومواصفة وكمية بييجوا من الكتالوج الحقيقي بتاعك. مفيش إجابات متخيلة ولا وعود مش موجودة.",
    ariaLabel: "دقة كاملة - كل البيانات من الكتالوج الحقيقي"
  },
  {
    icon: MessagesSquare,
    title: "مساعد واحد، كل القنوات",
    description: "واتساب وإنستجرام وماسنجر في صندوق وارد واحد. عملاؤك بيكلموك في المكان اللي هم فيه أصلاً.",
    ariaLabel: "قناة موحدة - واتساب وإنستجرام وماسنجر في مكان واحد"
  },
  {
    icon: PackageSearch,
    title: "عارف الكتالوج بتاعك",
    description: "بيدوّر على المنتجات، يتأكد من المخزون الحي، ويرشّح المنتج المناسب زي أحسن بياع عندك، في كل محادثة.",
    ariaLabel: "معرفة الكتالوج - بحث المنتجات والمخزون الحي"
  },
  {
    icon: ShoppingCart,
    title: "بيقفل البيعة",
    description: "بيأكد الدفع عند الاستلام أو يبعت رابط دفع للمتجر اللي بتستخدمه. AIX عمره ما بيلمس الفلوس.",
    ariaLabel: "إتمام البيع - تأكيد الدفع عند الاستلام أو رابط الدفع"
  },
  {
    icon: UserCheck,
    title: "بيسلّم العملاء الجاهزين",
    description: "بيلاحظ العميل اللي جاهز يشتري وينبّه فريقك، عشان حد من البشر يتدخل في اللحظة المهمة.",
    ariaLabel: "تسليم العملاء المهمين - تنبيه الفريق عند العميل الجاهز للشراء"
  },
  {
    icon: Languages,
    title: "بيتكلم لغة عملائك",
    description: "عامية مصرية، إنجليزي، وفرانكو. بيرد بنفس اللي العميل كتب بيه.",
    ariaLabel: "لغات متعددة - عربي مصري وإنجليزي وفرانكو"
  }
];
function Features() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "مميزات AIX - مساعد المبيعات الذكي للتجارة الإلكترونية" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "description", content: "ليه التجار بيثقوا في AIX: عمره ما بيخترع سعر، مساعد واحد لكل القنوات، عارف الكتالوج، بيقفل البيعة، بيسلّم العملاء الجاهزين، وبيتكلم عربي وإنجليزي." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "keywords", content: "مساعد مبيعات ذكي, تجارة إلكترونية, واتساب, إنستجرام, ماسنجر, كتالوج, دفع عند الاستلام" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": features.map((feature, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": feature.title,
          "description": feature.description
        }))
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        id: "features",
        className: "py-20 relative",
        dir: "rtl",
        "aria-label": "مميزات المنصة",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 opacity-50" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.8 },
                className: "text-center mb-16 flex-shrink-0 h-auto",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { scale: 0 },
                      whileInView: { scale: 1 },
                      transition: { delay: 0.2, type: "spring" },
                      className: "inline-flex items-center space-x-2 bg-dark-700/50 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-accent-primary/20",
                      role: "status",
                      "aria-label": "تقنية متطورة",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "text-accent-primary animate-pulse", size: 20, "aria-hidden": "true" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-300 font-mono text-sm", children: "ليه التجار بيثقوا في AIX" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl font-bold font-display mb-4 bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent pb-2 leading-tight", children: "مساعد مبيعات، مش روبوت محادثة" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 max-w-2xl mx-auto text-lg", children: "مصمّم لشغلانة واحدة: يحوّل رسائل العملاء لطلبات بدقة، بكل اللغات، على مدار الساعة." })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", role: "list", children: features.map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: index * 0.1 },
                className: "group bg-dark-800/50 backdrop-blur-sm p-6 rounded-lg border border-accent-primary/20 space-y-4 transition-all duration-500 cursor-default",
                role: "listitem",
                "aria-label": feature.ariaLabel,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      className: "w-12 h-12 bg-accent-secondary/20 rounded-lg flex items-center justify-center mb-4 border border-accent-secondary/30",
                      "aria-hidden": "true",
                      animate: {
                        boxShadow: [
                          "0 0 10px rgba(59, 130, 246, 0.12)",
                          "0 0 15px rgba(59, 130, 246, 0.2)",
                          "0 0 10px rgba(59, 130, 246, 0.12)"
                        ]
                      },
                      transition: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(feature.icon, { className: "text-accent-secondary", size: 24 })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-white mb-2", children: feature.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm leading-relaxed", children: feature.description })
                ]
              },
              index
            )) })
          ] })
        ]
      }
    )
  ] });
}
const FeaturesPageAR = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5 },
      className: "min-h-screen bg-dark-900 text-white relative",
      dir: "rtl",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Background3D, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Features, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
        ] })
      ]
    }
  );
};
const useCases = [
  {
    icon: ShoppingBag,
    title: "العلامات التجارية D2C",
    description: "يرشّح المنتج المناسب ويقفل البيعة في الرسائل الخاصة.",
    ariaLabel: "العلامات التجارية المباشرة للمستهلك - يرشّح المنتج المناسب ويقفل البيعة"
  },
  {
    icon: Store,
    title: "متاجر الكتالوج",
    description: "يرد على أسئلة التوفر والمقاسات والأسعار من الكتالوج مباشرة.",
    ariaLabel: "متاجر الكتالوج - الرد على أسئلة التوفر والأسعار"
  },
  {
    icon: UtensilsCrossed,
    title: "الأكل والبقالة",
    description: "يستقبل الطلبات ويأكد الدفع عند الاستلام، على مدار الساعة.",
    ariaLabel: "الأكل والبقالة - استقبال الطلبات وتأكيد الدفع عند الاستلام"
  },
  {
    icon: Boxes,
    title: "بائعو المنصات",
    description: "يرد على كل رسالة من المشترين فما يضيعش ولا عميل.",
    ariaLabel: "بائعو المنصات - الرد على كل رسائل المشترين"
  }
];
function UseCases() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "حالات الاستخدام - AIX" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "description", content: "اكتشف كيف يساعد AIX متجرك الإلكتروني (علامات D2C، متاجر الكتالوج، الأكل والبقالة، وبائعي المنصات) في الرد على العملاء وإقفال البيع على واتساب وإنستجرام وماسنجر." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "keywords", content: "مساعد مبيعات ذكي, تجارة إلكترونية, واتساب, إنستجرام, متجر إلكتروني, ذكاء اصطناعي" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": useCases.map((useCase, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": useCase.title,
          "description": useCase.description
        }))
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        id: "usecases",
        className: "py-20 relative",
        dir: "rtl",
        "aria-label": "حالات الاستخدام",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 opacity-50 pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.h2,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.8 },
                className: "text-center text-4xl md:text-5xl font-bold font-display mb-16 bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent pb-2 flex-shrink-0 h-auto leading-tight",
                children: "مصمّم على طريقة بيعك"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", role: "list", children: useCases.map((useCase, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                animate: {
                  borderColor: [
                    "rgba(58, 58, 64, 0.5)",
                    "rgba(124, 58, 237, 0.4)",
                    "rgba(58, 58, 64, 0.5)"
                  ]
                },
                transition: {
                  opacity: { duration: 0.5, delay: idx * 0.1 },
                  y: { duration: 0.5, delay: idx * 0.1 },
                  borderColor: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: idx * 0.2
                  }
                },
                className: "bg-dark-800/60 backdrop-blur-sm p-8 rounded-2xl border border-dark-600 transition-all duration-500 flex flex-col items-start shadow-lg cursor-default",
                role: "listitem",
                "aria-label": useCase.ariaLabel,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      className: "w-12 h-12 mb-6 flex items-center justify-center rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary shadow-md",
                      "aria-hidden": "true",
                      animate: {
                        boxShadow: [
                          "0 4px 12px rgba(124, 58, 237, 0.3)",
                          "0 4px 20px rgba(124, 58, 237, 0.5)",
                          "0 4px 12px rgba(124, 58, 237, 0.3)"
                        ]
                      },
                      transition: {
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: idx * 0.3
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(useCase.icon, { className: "text-white", size: 28 })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold font-display mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent", children: useCase.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 leading-relaxed font-sans", children: useCase.description })
                ]
              },
              useCase.title
            )) })
          ] })
        ]
      }
    )
  ] });
}
const UseCasesPageAR = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5 },
      className: "min-h-screen bg-dark-900 text-white relative",
      dir: "rtl",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Background3D, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(UseCases, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
        ] })
      ]
    }
  );
};
function ContactForm() {
  const [formData, setFormData] = reactExports.useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = reactExports.useState({});
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [submitStatus, setSubmitStatus] = reactExports.useState("idle");
  const validateForm2 = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "الاسم مطلوب";
    }
    if (!formData.email.trim()) {
      newErrors.email = "البريد الإلكتروني مطلوب";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "عنوان البريد الإلكتروني غير صالح";
    }
    if (!formData.message.trim()) {
      newErrors.message = "الرسالة مطلوبة";
    } else if (formData.message.length < 10) {
      newErrors.message = "يجب أن تكون الرسالة 10 أحرف على الأقل";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm2()) {
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      const templateParams = {
        to_email: "support@aixegy.com",
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message,
        user_email: formData.email,
        user_name: formData.name
      };
      await emailjs.send(
        "service_9zlyun5",
        "template_joo56rq",
        templateParams,
        "SFg6ihBocyWAfrj6O"
      );
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3e3);
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: void 0 }));
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "اتصل بنا - AIX" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "description", content: "تواصل مع فريق AIX للحصول على الدعم أو الاستفسارات حول حلول الذكاء الاصطناعي المتطورة." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "keywords", content: "اتصل بنا, دعم, استفسارات, ذكاء اصطناعي, AIX" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        id: "contact",
        className: "py-20 relative overflow-hidden",
        dir: "rtl",
        "aria-label": "اتصل بنا",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 opacity-50" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.8 },
              className: "max-w-2xl mx-auto",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { scale: 0 },
                    whileInView: { scale: 1 },
                    transition: { delay: 0.2, type: "spring" },
                    className: "inline-flex items-center space-x-2 bg-dark-700/50 backdrop-blur-sm rounded-full px-4 py-2 mb-8 mx-auto",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "text-accent-primary", size: 20 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-300 font-mono text-sm", children: "اتصل بنا" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold font-display text-center mb-8 bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent", children: "تواصل معنا" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "name", className: "block font-mono text-sm text-gray-300 mb-2", children: "الاسم" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "text",
                        id: "name",
                        name: "name",
                        value: formData.name,
                        onChange: handleInputChange,
                        className: `w-full bg-dark-700/50 backdrop-blur-sm border ${errors.name ? "border-red-500" : "border-dark-600"} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors`,
                        required: true
                      }
                    ),
                    errors.name && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.p,
                      {
                        initial: { opacity: 0, y: -10 },
                        animate: { opacity: 1, y: 0 },
                        className: "text-red-500 text-sm mt-1 flex items-center space-x-1",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(AlertCircle, { size: 14 }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: errors.name })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "email", className: "block font-mono text-sm text-gray-300 mb-2", children: "البريد الإلكتروني" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "email",
                        id: "email",
                        name: "email",
                        value: formData.email,
                        onChange: handleInputChange,
                        className: `w-full bg-dark-700/50 backdrop-blur-sm border ${errors.email ? "border-red-500" : "border-dark-600"} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors`,
                        required: true
                      }
                    ),
                    errors.email && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.p,
                      {
                        initial: { opacity: 0, y: -10 },
                        animate: { opacity: 1, y: 0 },
                        className: "text-red-500 text-sm mt-1 flex items-center space-x-1",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(AlertCircle, { size: 14 }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: errors.email })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "message", className: "block font-mono text-sm text-gray-300 mb-2", children: "الرسالة" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "textarea",
                      {
                        id: "message",
                        name: "message",
                        value: formData.message,
                        onChange: handleInputChange,
                        rows: 4,
                        className: `w-full bg-dark-700/50 backdrop-blur-sm border ${errors.message ? "border-red-500" : "border-dark-600"} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors`,
                        required: true
                      }
                    ),
                    errors.message && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.p,
                      {
                        initial: { opacity: 0, y: -10 },
                        animate: { opacity: 1, y: 0 },
                        className: "text-red-500 text-sm mt-1 flex items-center space-x-1",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(AlertCircle, { size: 14 }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: errors.message })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: submitStatus === "success" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -10 },
                      className: "flex items-center justify-center space-x-2 text-green-500 bg-green-500/10 p-4 rounded-lg",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle2, { size: 20 }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "تم إرسال الرسالة بنجاح!" })
                      ]
                    }
                  ) : submitStatus === "error" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -10 },
                      className: "flex items-center justify-center space-x-2 text-red-500 bg-red-500/10 p-4 rounded-lg",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertCircle, { size: 20 }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى." })
                      ]
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.button,
                    {
                      whileHover: { scale: 1.02 },
                      whileTap: { scale: 0.98 },
                      type: "submit",
                      disabled: isSubmitting,
                      className: "w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-accent-primary to-accent-secondary text-dark-900 font-mono font-bold py-4 rounded-lg hover:shadow-lg hover:shadow-accent-primary/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                      children: isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Loader2, { size: 20, className: "animate-spin" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "جاري الإرسال..." })
                      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "إرسال الرسالة" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 20 })
                      ] })
                    }
                  ) })
                ] })
              ]
            }
          ) })
        ]
      }
    )
  ] });
}
const ContactPageAR = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5 },
      className: "min-h-screen bg-dark-900 text-white relative",
      dir: "rtl",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Background3D, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ContactForm, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
        ] })
      ]
    }
  );
};
const AboutPageAR = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5 },
      className: "min-h-screen bg-dark-900 text-white relative",
      dir: "rtl",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Background3D, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Header$1, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 0.5 },
                className: "text-center mb-16",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent mb-4", children: "حول AIX" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-300 max-w-3xl mx-auto", children: "مساعد المبيعات الذكي اللي بيحوّل محادثات العملاء لطلبات." })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: "initial",
                animate: "animate",
                variants: fadeInUp,
                className: "mb-16",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-display font-bold text-white mb-6 text-center", children: "مهمتنا" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-300 max-w-4xl mx-auto text-center", children: "كل متجر إلكتروني بيخسر مبيعات بسبب الرد المتأخر والرسائل اللي بتفوت. AIX بيدّي تجار التجارة الإلكترونية في الشرق الأوسط مساعد مبيعات ذكي ٢٤/٧ بيرد على كل عميل على واتساب وإنستجرام وماسنجر، بدقة وبلغته، ويقفل البيعة." })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: "initial",
                animate: "animate",
                variants: fadeInUp,
                className: "mb-16",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-display font-bold text-white mb-6 text-center", children: "إحنا بنؤمن بإيه" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-dark-800/50 p-6 rounded-lg text-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-white mb-3", children: "الدقة أولاً" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300", children: "AIX عمره ما بيخترع سعر أو منتج. كل إجابة مبنية على الكتالوج الحقيقي بتاعك." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-dark-800/50 p-6 rounded-lg text-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-white mb-3", children: "قابل عملاءك في مكانهم" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300", children: "واتساب وإنستجرام وماسنجر: مساعد واحد في كل قناة بيستخدمها عملاؤك." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-dark-800/50 p-6 rounded-lg text-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-white mb-3", children: "مصمّم للشرق الأوسط" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300", children: "عامية مصرية، إنجليزي، وفرانكو، وبالطريقة اللي المنطقة بتشتري بيها فعلاً." })
                    ] })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: "initial",
                animate: "animate",
                variants: fadeInUp,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-display font-bold text-white mb-6 text-center", children: "فريقنا" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-300 max-w-4xl mx-auto text-center", children: "فريق صغير ومركّز من بنّائي الذكاء الاصطناعي والتجارة، مهووسين بحاجة واحدة: نساعد التجار يبيعوا أكتر من غير ما يوظّفوا وردية بالليل." })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
        ] })
      ]
    }
  );
};
const options = [
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { size: 40, className: "text-accent-primary mb-4" }),
    title: "مساعد المبيعات الذكي",
    description: `البياع بتاعك ٢٤/٧.
AIX بيرد على كل عميل على واتساب وإنستجرام وماسنجر بالعامية المصرية والإنجليزي. يرشّح المنتج المناسب من الكتالوج ويقفل البيعة.`
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Inbox, { size: 40, className: "text-accent-primary mb-4" }),
    title: "صندوق وارد موحّد",
    description: `كل المحادثات في مكان واحد.
واتساب وإنستجرام وماسنجر في صندوق وارد واحد. فريقك بيستلم العملاء الجاهزين بضغطة واحدة. مفيش رسالة بتبرد.`
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BarChart3, { size: 40, className: "text-accent-primary mb-4" }),
    title: "العملاء والتحليلات",
    description: `اعرف بيتباع إيه.
AIX بيلاحظ العملاء الجاهزين للشراء، يسلّمهم لفريقك، ويوريك الطلبات وأكتر المنتجات مبيعاً ومعدل التحويل في لمحة.`
  }
];
const GetStartedAR = () => {
  const [expanded, setExpanded] = reactExports.useState(null);
  const [form, setForm] = reactExports.useState({ name: "", email: "", message: "" });
  const [status, setStatus] = reactExports.useState("idle");
  const handleExpand = (idx, title) => {
    setExpanded(idx);
    setForm({ name: "", email: "", message: `I'm interested in ${title}` });
    setStatus("idle");
  };
  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const templateParams = {
        to_email: "support@aixegy.com",
        from_name: form.name,
        reply_to: form.email,
        message: form.message,
        user_email: form.email,
        user_name: form.name
      };
      await emailjs.send(
        "service_9zlyun5",
        "template_joo56rq",
        templateParams,
        "SFg6ihBocyWAfrj6O"
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5 },
      className: "min-h-screen bg-dark-900 text-white relative",
      dir: "rtl",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Background3D, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Header$1, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-24 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto flex flex-col items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.h1,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6 },
                className: "text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent mb-10 text-center",
                children: "ابدأ مع AIX"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.7 },
                className: "text-lg text-gray-300 max-w-2xl mb-16 text-center",
                children: "كلّمنا عن متجرك وإحنا نشغّلك مساعد المبيعات الذكي على واتساب وإنستجرام وماسنجر. اختار تبدأ منين."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center gap-10 w-full md:grid md:grid-cols-3 md:gap-10", children: options.map((opt, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              GradientCard,
              {
                icon: opt.icon,
                title: opt.title,
                description: opt.description,
                className: expanded === idx ? "z-20 h-auto md:h-auto" : "",
                cta: expanded === idx ? /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "w-full flex flex-col gap-4 mt-4", onSubmit: handleSubmit, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      name: "name",
                      required: true,
                      placeholder: "Your Name",
                      className: "px-4 py-2 rounded-lg bg-dark-700 text-white border border-dark-600 focus:border-accent-primary outline-none",
                      value: form.name,
                      onChange: handleFormChange,
                      disabled: status === "sending"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "email",
                      name: "email",
                      required: true,
                      placeholder: "Your Email",
                      className: "px-4 py-2 rounded-lg bg-dark-700 text-white border border-dark-600 focus:border-accent-primary outline-none",
                      value: form.email,
                      onChange: handleFormChange,
                      disabled: status === "sending"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "textarea",
                    {
                      name: "message",
                      required: true,
                      rows: 3,
                      className: "px-4 py-2 rounded-lg bg-dark-700 text-white border border-dark-600 focus:border-accent-primary outline-none",
                      value: form.message,
                      onChange: handleFormChange,
                      disabled: status === "sending"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "submit",
                      className: "mt-2 px-6 py-2 bg-gradient-to-r from-accent-primary to-accent-secondary text-dark-900 font-mono font-bold rounded-full hover:shadow-lg transition-all disabled:opacity-60",
                      disabled: status === "sending",
                      children: status === "sending" ? "Sending..." : "إرسال"
                    }
                  ),
                  status === "success" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-green-400 text-center mt-2", children: "Message sent!" }),
                  status === "error" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-red-400 text-center mt-2", children: "Something went wrong. Try again." })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    className: "mt-4 px-6 py-2 bg-gradient-to-r from-accent-primary to-accent-secondary text-dark-900 font-mono font-bold rounded-full hover:shadow-lg transition-all",
                    onClick: () => handleExpand(idx, opt.title),
                    children: opt.title === "مساعد المبيعات الذكي" ? "فعّل مساعدي" : opt.title === "صندوق وارد موحّد" ? "شوف الصندوق" : opt.title === "العملاء والتحليلات" ? "احجز عرض" : "تواصل معنا"
                  }
                )
              },
              opt.title
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
        ] })
      ]
    }
  );
};
const Section$2 = ({ title, children }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-dark-800/50 p-6 rounded-xl border border-accent-primary/20", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-4 text-accent-primary", children: title }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg leading-relaxed space-y-3", children })
] });
const PrivacyPolicyAR = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5 },
      className: "min-h-screen bg-dark-900 text-white relative",
      dir: "rtl",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "container mx-auto px-4 py-20 mt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.2 },
            className: "max-w-4xl mx-auto",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent", children: "سياسة الخصوصية" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1 text-sm text-gray-400", children: "تاريخ السريان: 8 يونيو 2026" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-8 text-sm text-gray-400", children: "آخر تحديث: 8 يونيو 2026" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8 text-gray-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed", children: "تُشغَّل خدمة AIX («الخدمة») بواسطة AIX، وهي منشأة فردية مقرّها مصر («نحن»). توضّح هذه السياسة كيف نجمع البيانات ونستخدمها ونشاركها عند استخدامك لموقعنا التعريفي (aixegy.com)، ولوحة تحكّم المنتج (app.aixegy.com)، وأداة الدردشة القابلة للتضمين، ووكلاء المبيعات بالذكاء الاصطناعي الذين نشغّلهم نيابةً عن عملائنا عبر قنوات الطرف الثالث (واتساب، إنستجرام، ماسنجر، تيليجرام)." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Section$2, { title: "دوران مختلفان", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "تؤدّي AIX دورين مختلفين في حماية البيانات، وتعالج هذه السياسة كلًّا منهما على حدة:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc mr-6 space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "بيانات الزائر المباشر: نحن المتحكّم." }),
                      " عند إنشائك لحساب AIX أو تصفّحك للموقع التعريفي أو دعوتك لزميل، تجمع AIX تلك البيانات وتقرّر كيفية استخدامها."
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "بيانات رسائل العملاء النهائيين: نحن المُعالِج." }),
                      " عندما يربط عميل AIX («التاجر») قناةً، تتدفّق رسائل عملائه النهائيين عبر AIX ليتمكّن الوكيل من الرد. نعالج تلك البيانات نيابةً عن التاجر الذي يظل المتحكّم فيها. وعلى التجّار الحصول على الموافقات اللازمة قانونًا من عملائهم؛ توفّر AIX الآلية التقنية لا الأساس القانوني."
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Section$2, { title: "١. البيانات التي نجمعها", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "منك، التاجر" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc mr-6 space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "الحساب: البريد الإلكتروني، الاسم، اسم الشركة، كلمة مرور مُجزّأة، دورك في مساحة العمل" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "الاستخدام: عنوان IP، المتصفّح، الجهاز، أوقات الجلسات، سجلّات نشاط لوحة التحكّم" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "الإعدادات والمحتوى: تهيئة خطوط الأنابيب، مستندات قاعدة المعرفة، كتالوج المنتجات، بيانات اعتماد التكامل (مشفّرة عند التخزين)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "الفوترة: لا تُجمَع حاليًا خلال الإصدار التجريبي الخاص" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium mt-3", children: "من عملائك النهائيين، نيابةً عنك" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc mr-6 space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "الهوية: الاسم وصورة الملف الشخصي حيثما أتاحتها القناة، رقم الهاتف (واتساب)، معرّف مستخدم إنستجرام، معرّف ماسنجر المرتبط بالصفحة، معرّف محادثة تيليجرام" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "الرسائل: النص الكامل والمرفقات والأوقات وحالة التسليم" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "البيانات المستنتجة: ملخصات المحادثات المولّدة بالذكاء الاصطناعي، درجات نية الشراء، بيانات الطلب المنظَّمة التي التقطها الوكيل أثناء المحادثة" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-400 mt-2", children: [
                    "نحن ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "لا" }),
                    " نجمع الهويات الحكومية ولا السجلّات الصحية ولا أرقام الحسابات المالية ولا بيانات الموقع الدقيق."
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Section$2, { title: "٢. كيف نستخدم البيانات", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "بيانات التاجر" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc mr-6 space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "تقديم الخدمة وتشغيلها وتحسينها" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "مصادقة الحسابات والحماية من إساءة الاستخدام" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "إرسال رسائل البريد الخدمية (تأكيد الحساب، تنبيهات العملاء المهتمّين، إشعارات الفوترة عند الاقتضاء)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "إرسال إعلانات الخدمة بشأن التغييرات الجوهرية أو الأعطال" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium mt-3", children: "بيانات العملاء النهائيين" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc mr-6 space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "الرد على العملاء النهائيين بالوكيل الذي هيّأه التاجر" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "عرض المحادثة للتاجر في صندوق الوارد لديه" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "توليد ملخصات للمحادثات يقرؤها التاجر ليفرز أسرع" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "تقييم نية الشراء لتنبيه التاجر إلى العملاء المهتمّين" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "حفظ سجلّ المحادثة ليكون لدى الردود اللاحقة سياق" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-400 mt-2", children: [
                    "نحن ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "لا" }),
                    " نبيع أيًّا من فئتَي البيانات، ولا ندرّب نماذج ذكاء اصطناعي تابعة لطرف ثالث عليها، ولا نستخدمها للتنميط عبر العملاء."
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Section$2, { title: "٣. المعالِجون الفرعيون", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "نستعين بهذه الأطراف الموثوقة لتقديم الخدمة:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm text-right", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "text-gray-400 border-b border-gray-700", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 pl-4", children: "المعالِج الفرعي" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 pl-4", children: "الدور" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2", children: "المنطقة" })
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: "divide-y divide-gray-800", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pl-4", children: "Amazon Web Services" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pl-4", children: "الاستضافة وقاعدة البيانات والتخزين والنسخ الاحتياطي" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2", children: "الاتحاد الأوروبي (فرانكفورت)" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pl-4", children: "OpenAI" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pl-4", children: "استدلال النماذج اللغوية لردود الوكيل والملخصات" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2", children: "الولايات المتحدة" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pl-4", children: "Resend" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pl-4", children: "توصيل البريد الخدمي" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2", children: "الولايات المتحدة" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pl-4", children: "Meta" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pl-4", children: "نقل رسائل واتساب/إنستجرام/ماسنجر" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2", children: "عالمي" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pl-4", children: "Telegram" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pl-4", children: "نقل رسائل واجهة بوت تيليجرام" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2", children: "الإمارات العربية المتحدة" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pl-4", children: "Netlify" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pl-4", children: "استضافة الموقع التعريفي" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2", children: "الولايات المتحدة / الاتحاد الأوروبي" })
                      ] })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-400 mt-2", children: [
                    "يمكن طلب قائمة محدّثة في أي وقت عبر مراسلة",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:support@aixegy.com", className: "text-accent-primary hover:underline", children: "support@aixegy.com" }),
                    "."
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Section$2, { title: "٤. الاحتفاظ بالبيانات", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc mr-6 space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "مساحات العمل النشطة:" }),
                    " يُحتفظ بالبيانات طوال وجود مساحة العمل."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "حذف مساحة العمل:" }),
                    " تُحذف بيانات التاجر خلال 30 يومًا من إنهاء مساحة العمل، وتُحذف معها بيانات العملاء النهائيين المرتبطة بها فقط."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "النسخ الاحتياطي:" }),
                    " تُخزَّن نسخ قاعدة البيانات المشفّرة لمدة 30 يومًا في مخزّن S3 بمنطقة الاتحاد الأوروبي ثم تُحذف نهائيًا."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "سجلّات التطبيق:" }),
                    " يُحتفظ بها 14 يومًا ثم تُمسح، ولا تتضمّن نصوص الرسائل في بيئة الإنتاج."
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Section$2, { title: "٥. حقوقك", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "بموجب اللائحة العامة لحماية البيانات (والقوانين المماثلة) يمكنك:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc mr-6 space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "طلب نسخة من بياناتك" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "تصحيح البيانات غير الدقيقة" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "حذف بياناتك (مع مراعاة استثناءات الاحتفاظ القانوني)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "تقييد المعالجة أو الاعتراض عليها" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "نقل بياناتك إلى خدمة أخرى" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "تقديم شكوى إلى جهة رقابية" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    "لممارسة هذه الحقوق راسِل",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:support@aixegy.com", className: "text-accent-primary hover:underline", children: "support@aixegy.com" }),
                    "، ونردّ خلال 30 يومًا."
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Section$2, { title: "٦. العملاء النهائيون: كيف تطلب الحذف", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "إن كنت عميلًا نهائيًا تفاعلت مع وكيل يعمل بـ AIX لدى أحد التجّار:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc mr-6 space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "أسهل طريق:" }),
                      " تواصل مع التاجر مباشرةً، فهو المتحكّم في البيانات وصاحب العلاقة معك."
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "مستخدمو منصّات Meta:" }),
                      " يمكنك أيضًا طلب الحذف عبر آلية حذف البيانات التي تتيحها Meta داخل التطبيق، وستستدعي Meta نقطة الحذف لدينا على ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-xs", children: "app.aixegy.com/v1/webhooks/meta/data-deletion" }),
                      " فنزيل بياناتك من أنظمتنا."
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "طلب مباشر:" }),
                      " راسِل ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:support@aixegy.com", className: "text-accent-primary hover:underline", children: "support@aixegy.com" }),
                      " موضّحًا القناة التي استخدمتها ورقم الهاتف أو المعرّف الذي جرت عليه المحادثة."
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "نحلّ طلبات الحذف المباشرة خلال 30 يومًا." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Section$2, { title: "٧. عمليات نقل البيانات الدولية", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "تقع قاعدة البيانات الأساسية وتخزين الرسائل في الاتحاد الأوروبي (فرانكفورت). ويجري استدلال النماذج اللغوية لدى OpenAI على بنية قد تكون خارج الاتحاد الأوروبي، ونعتمد في ذلك على البنود التعاقدية القياسية الخاصة بـ OpenAI. وتعالج Meta وTelegram رسائل القنوات على بنيتهما العالمية وفق شروطهما." }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Section$2, { title: "٨. الأمان", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc mr-6 space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "كل الاتصالات بـ AIX مشفّرة بـ TLS 1.2 أو أحدث" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "رموز القنوات (رموز بوت تيليجرام، رموز وصول Meta) مشفّرة عند التخزين بـ Fernet (AES-128 + HMAC) بمفتاح موجود فقط في بيئة النشر لدينا" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "الوصول إلى قاعدة البيانات مقصور على تطبيقنا عبر شبكة خاصة" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "النسخ الاحتياطي مشفّر عند التخزين في S3" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-400", children: [
                    "لا يوجد نظام آمن تمامًا. إن كنت تعتقد أن حسابك قد اختُرق، راسِل",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:support@aixegy.com", className: "text-accent-primary hover:underline", children: "support@aixegy.com" }),
                    " ",
                    "فورًا."
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Section$2, { title: "٩. ملفات تعريف الارتباط والتتبّع", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc mr-6 space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "app.aixegy.com" }),
                    " يستخدم ملف ارتباط جلسة واحدًا للمصادقة. ولا نشغّل تحليلات طرف ثالث ولا بكسلات تسويق ولا أدوات تتبّع إعلانية داخل المنتج."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "aixegy.com" }),
                    " (الموقع التعريفي) قد يستخدم تحليلات أساسية محترِمة للخصوصية."
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Section$2, { title: "١٠. الأطفال", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "AIX خدمة موجَّهة للشركات (B2B) يديرها بالغون، وليست موجَّهة للأطفال دون 16 عامًا، ولا نجمع بياناتهم عن علم." }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Section$2, { title: "١١. التغييرات على هذه السياسة", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "قد نحدّث هذه السياسة. وسيُعلَن عن التغييرات الجوهرية عبر البريد لمالكي مساحات العمل النشطة قبل 14 يومًا على الأقل من سريانها. ويُعدّ استمرار استخدام الخدمة بعد تاريخ السريان قبولًا للسياسة المحدّثة." }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Section$2, { title: "١٢. التواصل", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                  "لأسئلة أو طلبات الخصوصية:",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:support@aixegy.com", className: "text-accent-primary hover:underline", children: "support@aixegy.com" })
                ] }) })
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
      ]
    }
  );
};
const Section$1 = ({ title, children }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-dark-800/50 p-6 rounded-xl border border-accent-primary/20", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-4 text-accent-primary", children: title }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg leading-relaxed space-y-3", children })
] });
const TermsOfServiceAR = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5 },
      className: "min-h-screen bg-dark-900 text-white relative",
      dir: "rtl",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "container mx-auto px-4 py-20 mt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.2 },
            className: "max-w-4xl mx-auto",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent", children: "شروط الخدمة" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-8 text-sm text-gray-400", children: "تاريخ السريان: 8 يونيو 2026" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8 text-gray-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed", children: "تحكم هذه الشروط وصولك إلى منصة AIX («الخدمة») واستخدامك لها، وهي مُشغَّلة بواسطة AIX («نحن»). بإنشائك حسابًا أو ربطك قناةً أو استخدامك للخدمة بأي شكل، فإنك توافق على هذه الشروط." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Section$1, { title: "١. التعريفات", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc mr-6 space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "العميل / التاجر / أنت:" }),
                    " الشركة أو الفرد الذي ينشئ حساب AIX ويهيّئ وكلاء الذكاء الاصطناعي لمراسلة عملائه."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "العميل النهائي:" }),
                    " شخص يحادثه وكيل التاجر عبر واتساب أو إنستجرام أو ماسنجر أو تيليجرام أو أداة الدردشة على الموقع."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "الخدمة:" }),
                    " لوحة تحكّم AIX ومحرّك الذكاء الاصطناعي وتكاملات القنوات وقاعدة المعرفة واستيراد الكتالوج والتحليلات وأي برمجيات متصلة نشغّلها."
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Section$1, { title: "٢. الأهلية", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc mr-6 space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "أن يكون عمرك 18 عامًا على الأقل." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "أن تكون مخوّلًا بإلزام الشركة التي تسجّل نيابةً عنها." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "خلال الإصدار التجريبي الخاص، تكون الحسابات بالدعوة فقط، ويجوز لـ AIX رفض الوصول التجريبي أو إلغاؤه وفق تقديرها." })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Section$1, { title: "٣. الاستخدام المقبول", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "توافق على ألّا تستخدم الخدمة من أجل:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc mr-6 space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "إرسال رسائل جماعية غير مرغوب فيها («سبام»)." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "إرسال رسائل تخالف سياسة واتساب التجارية أو شروط منصّات Meta أو شروط خدمة تيليجرام أو أي قانون مُطبَّق." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "معالجة بيانات القاصرين دون 16 عامًا دون موافقة أبوية كافية قانونًا." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "انتحال شخصية فرد أو شركة أخرى." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "نشر برمجيات خبيثة أو محتوى تصيّد أو محتوى يحرّض على العنف أو ينتهك حقوق الآخرين." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "الهندسة العكسية أو الكشط أو محاولة استخراج نماذجنا أو شفرتنا المصدرية أو بنيتنا التحتية." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "تجاوز حدود المعدّل لدينا أو الالتفاف على بوابة الدعوات أو استخدام الخدمة لأغراض غير محادثات المبيعات المشروعة." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "أنت وحدك المسؤول عن محتوى تعليمات وكيلك وقاعدة معرفته والمحادثات التي يجريها نيابةً عنك." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Section$1, { title: "٤. الالتزام بسياسات المنصّات مسؤوليتك", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "عليك الالتزام بشروط كل قناة تربطها:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc mr-6 space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "واتساب:" }),
                      " شروط واتساب للأعمال وسياسة مراسلة واتساب للأعمال وقواعد نافذة خدمة العملاء البالغة 24 ساعة."
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "إنستجرام وماسنجر:" }),
                      " شروط منصّات Meta وسياسات منصة ماسنجر، بما في ذلك قيود نوافذ المراسلة ذات الصلة."
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "تيليجرام:" }),
                      " شروط خدمة تيليجرام وشروط واجهة البوت."
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "إذا علّقت منصّةٌ حسابك أو أنهته من جانبها بسبب مخالفة سياسة، فإن AIX غير مسؤولة ولا تستطيع استعادة الوصول نيابةً عن المنصّة." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Section$1, { title: "٥. البيانات", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc mr-6 space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "AIX مُعالِج لبيانات العملاء النهائيين، وأنت تظل المتحكّم وعليك الحصول على موافقة كافية قانونًا من عملائك قبل ربط قناتهم بـ AIX." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "تفاصيل شروط المعالجة في ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/ar/privacy", className: "text-accent-primary hover:underline", children: "سياسة الخصوصية" }),
                    "."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "تتوفّر ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/ar/dpa", className: "text-accent-primary hover:underline", children: "اتفاقية معالجة البيانات" }),
                    "، وللحصول على نسخة موقّعة راسِل ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:support@aixegy.com", className: "text-accent-primary hover:underline", children: "support@aixegy.com" }),
                    "."
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Section$1, { title: "٦. توافر الخدمة", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc mr-6 space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "خلال الإصدار التجريبي الخاص، تُقدَّم الخدمة «كما هي» دون اتفاقية مستوى خدمة." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "نجري الصيانة مع إشعار مسبق قدر الإمكان عند التخطيط لتوقّف." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "ستنشر مستويات الإصدار التجريبي العام والتوافر العام اتفاقيات مستوى خدمة رسمية." })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Section$1, { title: "٧. الرسوم والفوترة", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc mr-6 space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "الخدمة مجانية حاليًا خلال الإصدار التجريبي الخاص." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "قد نطرح خططًا مدفوعة بإشعار لا يقل عن 30 يومًا لمالكي مساحات العمل النشطة." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "أي رسوم تتكبّدها من أطراف ثالثة (تسعير محادثات واتساب، استخدام OpenAI إن استخدمت مفتاحك الخاص، حدود حصص تيليجرام، وغيرها) تكون بينك وبين ذلك الطرف." })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Section$1, { title: "٨. تحديد المسؤولية", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "إلى أقصى حد يسمح به القانون:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc mr-6 space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "AIX غير مسؤولة عن الأضرار غير المباشرة أو العرضية أو الخاصة أو التبعية أو التأديبية." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "AIX غير مسؤولة عن خسارة الأرباح أو الإيرادات أو الأعمال أو السمعة أو الوفورات المتوقّعة." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "تقتصر مسؤولية AIX الإجمالية عن أي مطالبة على الأكبر من: (أ) الرسوم التي دفعتها لـ AIX خلال الـ12 شهرًا السابقة، أو (ب) 100 دولار أمريكي." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Section$1, { title: "٩. التعويض", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "توافق على تعويض AIX ومشغّليها ومعالِجيها الفرعيين عن المطالبات الناشئة عن:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc mr-6 space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "مخالفتك لهذه الشروط أو لشروط أي منصّة طرف ثالث." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "تعليمات وكيلك أو محتواه أو سلوكه الذي هيّأته، بما في ذلك ما يصرّح به الوكيل نيابةً عنك." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "مطالبات عملائك النهائيين الذين تكون أنت المتحكّم في بياناتهم." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Section$1, { title: "١٠. الإنهاء", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc mr-6 space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "يمكنك إلغاء حسابك في أي وقت بمراسلة ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:support@aixegy.com", className: "text-accent-primary hover:underline", children: "support@aixegy.com" }),
                    " (الإلغاء الذاتي سيتوفّر في إصدار لاحق)."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "يجوز لـ AIX إنهاء الحسابات المخالفة لهذه الشروط بإشعار معقول، أو فورًا في المخالفات الجسيمة." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "عند الإنهاء، تُحذف بياناتك خلال 30 يومًا." })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Section$1, { title: "١١. التغييرات على هذه الشروط", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "قد نحدّث هذه الشروط. ويُعلَن عن التغييرات الجوهرية عبر البريد قبل 14 يومًا على الأقل من سريانها. ويُعدّ استمرار استخدام الخدمة بعد تاريخ السريان قبولًا لها." }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Section$1, { title: "١٢. القانون الحاكم", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "تخضع هذه الشروط لقوانين جمهورية مصر العربية، وتُحَل النزاعات الناشئة عنها أمام محاكم القاهرة بمصر. هذا هو الإعداد الافتراضي للإصدار التجريبي الخاص، وقد نعدّله إلى بند تحكيم دولي مع توسّع قاعدة العملاء." }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Section$1, { title: "١٣. التواصل", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                  "للأسئلة العامة والقانونية وأسئلة الخصوصية:",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:support@aixegy.com", className: "text-accent-primary hover:underline", children: "support@aixegy.com" })
                ] }) })
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
      ]
    }
  );
};
const Section = ({ title, children }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-dark-800/50 p-6 rounded-xl border border-accent-primary/20", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-4 text-accent-primary", children: title }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg leading-relaxed space-y-3", children })
] });
const DataProcessingAgreementAR = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5 },
      className: "min-h-screen bg-dark-900 text-white relative",
      dir: "rtl",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "container mx-auto px-4 py-20 mt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.2 },
            className: "max-w-4xl mx-auto",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent", children: "اتفاقية معالجة البيانات" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1 text-sm text-gray-400", children: "تاريخ السريان: 8 يونيو 2026" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-8 text-sm text-gray-400", children: "آخر تحديث: 8 يونيو 2026" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8 text-gray-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg leading-relaxed", children: [
                  "تُشكّل اتفاقية معالجة البيانات هذه («الاتفاقية») جزءًا من الاتفاق بين AIX، وهي منشأة فردية مقرّها مصر («نحن»، «المُعالِج»)، والعميل الذي يستخدم خدمة AIX («التاجر»، «أنت»، «المتحكّم»). وتحكم هذه الاتفاقية معالجة AIX للبيانات الشخصية الخاصة بعملاء التاجر عند استخدام التاجر لـ AIX لتشغيل وكلاء مبيعات بالذكاء الاصطناعي عبر القنوات (واتساب، إنستجرام، ماسنجر، تيليجرام، وأداة الدردشة على الموقع). وهي مكمّلة لـ ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/ar/terms", className: "underline", children: "شروط الخدمة" }),
                  " و",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/ar/privacy", className: "underline", children: " سياسة الخصوصية" }),
                  " ومُدمَجة فيهما، وفي حال التعارض بشأن معالجة البيانات الشخصية تسري هذه الاتفاقية."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "١. أدوار الأطراف", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                  "بالنسبة لبيانات رسائل العملاء النهائيين، يكون ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "التاجر هو المتحكّم في البيانات" }),
                  " وتكون ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "AIX هي المُعالِج" }),
                  ". يحدّد التاجر أغراض ووسائل المعالجة، وتعالج AIX البيانات فقط لتقديم الخدمة وبناءً على تعليمات التاجر الموثّقة. أما بيانات حساب التاجر نفسه فتعمل فيها AIX كمتحكّم مستقل كما هو موضّح في سياسة الخصوصية، وهي خارج نطاق هذه الاتفاقية."
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "٢. موضوع المعالجة ومدتها وطبيعتها وغرضها", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc mr-6 space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "الموضوع:" }),
                    " معالجة البيانات الشخصية للعملاء النهائيين اللازمة لاستقبال الرسائل وتوليد ردود الذكاء الاصطناعي وإدارة المحادثات والطلبات وعرض التحليلات للتاجر."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "المدة:" }),
                    " طوال مدة استخدام التاجر لـ AIX، بالإضافة إلى فترة الحذف في البند ٩."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "الطبيعة والغرض:" }),
                    " الجمع والتخزين والاسترجاع والاستخدام والنقل إلى المعالِجين الفرعيين لتوليد الذكاء الاصطناعي والحذف، بغرض تشغيل وكيل المبيعات الخاص بالتاجر."
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "٣. فئات البيانات وأصحاب البيانات", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc mr-6 space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "أصحاب البيانات:" }),
                    " عملاء التاجر النهائيون والمهتمّون الذين يراسلون قنوات التاجر المربوطة."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "البيانات الشخصية:" }),
                    " الاسم واسم الملف الشخصي حيثما أتاحته القناة، رقم الهاتف (واتساب)، معرّفات المنصات (معرّف إنستجرام، معرّف ماسنجر المرتبط بالصفحة، معرّف محادثة تيليجرام)، محتوى الرسائل (نصوص وصور يرسلها العميل)، بيانات الطلب والتواصل التي يقدّمها العميل، والمؤشرات المستنتجة بالذكاء الاصطناعي (درجة النية، ملخصات المحادثات)."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "لا يُقصد" }),
                    " معالجة أي فئات خاصة من البيانات. ويجب على التاجر ألّا يهيّئ الوكيل لطلب بيانات حسّاسة (صحية أو حيوية أو دينية وغيرها)."
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "٤. التزامات التاجر", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "يُقرّ التاجر بأن لديه أساسًا قانونيًا صحيحًا وكل الموافقات اللازمة لجمع البيانات الشخصية لعملائه النهائيين والسماح لـ AIX بمعالجتها، بما في ذلك أي موافقة تتطلّبها منصات المراسلة. توفّر AIX الآلية التقنية لا الأساس القانوني. وتُعطى تعليمات التاجر من خلال تهيئته للخدمة واستخدامه لها ومن خلال هذه الاتفاقية." }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "٥. التزامات AIX (المُعالِج)", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc mr-6 space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "معالجة البيانات الشخصية ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "فقط بناءً على تعليمات التاجر الموثّقة" }),
                    "، بما في ذلك عمليات النقل الدولي، ما لم يقتضِ القانون غير ذلك (وعندها تُعلِم AIX التاجر ما لم يُحظَر ذلك قانونًا)."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "ضمان التزام الأشخاص المخوّلين بمعالجة البيانات بـ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "السرّية" }),
                    "."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "تطبيق ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "تدابير أمنية تقنية وتنظيمية" }),
                    " مناسبة (البند ٧)."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "مساعدة التاجر" }),
                    " بقدر طبيعة المعالجة في الاستجابة لطلبات أصحاب البيانات والوفاء بالتزاماته في الأمن والإخطار بالخروقات وتقييمات الأثر."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "بحسب اختيار التاجر، ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "حذف أو إعادة" }),
                    " البيانات الشخصية عند انتهاء الخدمة (البند ٩)."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "إتاحة المعلومات اللازمة لإثبات الامتثال و",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "السماح بالتدقيق" }),
                    " والإسهام فيه، مع إشعار معقول والحفاظ على السرّية."
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "٦. المعالِجون الفرعيون", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3", children: "يمنح التاجر تفويضًا عامًا لـ AIX بالاستعانة بالمعالِجين الفرعيين أدناه. تفرض AIX على كل معالِج فرعي شروط حماية بيانات لا تقل عن هذه الاتفاقية وتظل مسؤولة عن أدائهم. وستُخطر AIX (عبر لوحة التحكم أو البريد) قبل إضافة أو استبدال معالِج فرعي، ويجوز للتاجر الاعتراض لأسباب معقولة تتعلق بحماية البيانات." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc mr-6 space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Amazon Web Services: الاستضافة وقاعدة البيانات والتخزين والنسخ الاحتياطي (الاتحاد الأوروبي/فرانكفورت)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "OpenAI: توليد ردود الذكاء الاصطناعي (الولايات المتحدة)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Meta: توصيل رسائل واتساب/إنستجرام/ماسنجر (عالمي)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Telegram: توصيل رسائل تيليجرام (عالمي)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Resend: البريد الإلكتروني للإشعارات (الولايات المتحدة)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Sentry: مراقبة الأخطاء بأقل قدر من البيانات الشخصية (الاتحاد الأوروبي)" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "٧. التدابير الأمنية", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc mr-6 space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "التشفير أثناء النقل (TLS) وتشفير بيانات الاعتماد الحسّاسة عند التخزين." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "عزل صارم بين المستأجرين: كل سجل مرتبط بمساحة عمل التاجر." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "التحكّم في الوصول حسب الدور ومبدأ أقل صلاحية لموظفي AIX." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "التحقّق من توقيع الـ Webhook (الرفض عند الفشل) لكل حركة قنوات واردة." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "نسخ احتياطي ليلي مشفّر ومقيّد الوصول لقاعدة البيانات." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "تسجيل تدقيقي لإجراءات المشغّلين الحسّاسة." })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "٨. خرق البيانات الشخصية", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "ستُخطر AIX التاجر دون تأخير لا مبرّر له، وخلال 72 ساعة على الأكثر، بعد علمها بأي خرق للبيانات الشخصية يؤثّر على بيانات التاجر، مع المعلومات المتاحة بشكل معقول لمساعدته على الوفاء بالتزاماته في الإخطار." }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "٩. الإعادة والحذف", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "عند الإنهاء أو بناءً على طلب كتابي من التاجر، ستحذف AIX أو تعيد البيانات الشخصية للعملاء النهائيين وتحذف النسخ القائمة خلال 30 يومًا، إلا حيث يقتضي القانون الاحتفاظ بها. ويمكن للعملاء النهائيين أيضًا ممارسة الحذف مباشرةً عبر آلية طلب الحذف المشار إليها في سياسة الخصوصية." }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "١٠. عمليات النقل الدولية", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "عندما تتضمّن المعالجة نقل بيانات شخصية خارج المنطقة الاقتصادية الأوروبية (مثل توليد الذكاء الاصطناعي عبر OpenAI في الولايات المتحدة)، تعتمد AIX على آلية نقل مناسبة مثل البنود التعاقدية القياسية للاتحاد الأوروبي المبرمة مع المعالِج الفرعي المعني." }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "١١. المسؤولية والمدة", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "تخضع مسؤولية كل طرف بموجب هذه الاتفاقية لحدود واستثناءات المسؤولية الواردة في شروط الخدمة. وتسري هذه الاتفاقية عند قبول التاجر للشروط أو بدء استخدامه لـ AIX، وتستمر طوال مدة معالجة AIX للبيانات الشخصية نيابةً عن التاجر." }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "١٢. التواصل والنسخ الموقّعة", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    "للاستفسارات المتعلقة بحماية البيانات، أو لطلب نسخة موقّعة من هذه الاتفاقية لسجلّاتك أو إجراءات الشراء لديك، تواصل عبر",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:support@aixegy.com", className: "underline", children: "support@aixegy.com" }),
                    "."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "هذا المستند مقدَّم بحسن نيّة كاتفاقية واضحة. وهو ليس استشارة قانونية؛ وللمعالجة كبيرة الحجم أو المنظَّمة يُنصح بمراجعته مع مستشارك القانوني." })
                ] })
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
      ]
    }
  );
};
const Layout = ({ children }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative min-h-screen", children });
};
function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(HelmetProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserRouter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Routes, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/", element: /* @__PURE__ */ jsxRuntimeExports.jsx(HomePage, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/features", element: /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturesPage, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/use-cases", element: /* @__PURE__ */ jsxRuntimeExports.jsx(UseCasesPage, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/contact", element: /* @__PURE__ */ jsxRuntimeExports.jsx(ContactPage, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/about", element: /* @__PURE__ */ jsxRuntimeExports.jsx(AboutPage, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/get-started", element: /* @__PURE__ */ jsxRuntimeExports.jsx(GetStarted, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/privacy", element: /* @__PURE__ */ jsxRuntimeExports.jsx(PrivacyPolicy, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/terms", element: /* @__PURE__ */ jsxRuntimeExports.jsx(TermsOfService, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/dpa", element: /* @__PURE__ */ jsxRuntimeExports.jsx(DataProcessingAgreement, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/ar", element: /* @__PURE__ */ jsxRuntimeExports.jsx(HomePageAR, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/ar/features", element: /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturesPageAR, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/ar/use-cases", element: /* @__PURE__ */ jsxRuntimeExports.jsx(UseCasesPageAR, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/ar/contact", element: /* @__PURE__ */ jsxRuntimeExports.jsx(ContactPageAR, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/ar/about", element: /* @__PURE__ */ jsxRuntimeExports.jsx(AboutPageAR, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/ar/get-started", element: /* @__PURE__ */ jsxRuntimeExports.jsx(GetStartedAR, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/ar/privacy", element: /* @__PURE__ */ jsxRuntimeExports.jsx(PrivacyPolicyAR, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/ar/terms", element: /* @__PURE__ */ jsxRuntimeExports.jsx(TermsOfServiceAR, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/ar/dpa", element: /* @__PURE__ */ jsxRuntimeExports.jsx(DataProcessingAgreementAR, {}) })
  ] }) }) }) }) });
}
createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
//# sourceMappingURL=index-B79L4pf5.js.map
