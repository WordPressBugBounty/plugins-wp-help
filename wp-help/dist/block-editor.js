(()=>{"use strict";const t=window.wp.components,e=window.wp.compose,o=window.wp.data,n=window.wp.editPost,r=window.wp.plugins,i=window.wp.i18n;function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}var c="is_default_doc",l=(0,o.withSelect)((function(t){return{isDefault:t("core/editor").getEditedPostAttribute(c)||!1}})),a=(0,o.withDispatch)((function(t){return{setDefaultDocument:function(e){var o,n,r,i;t("core/editor").editPost((o={},r=e,i=function(t,e){if("object"!=u(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var n=o.call(t,"string");if("object"!=u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n=c),(n="symbol"==u(i)?i:i+"")in o?Object.defineProperty(o,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):o[n]=r,o))}}}));(0,r.registerPlugin)("wp-help",{render:(0,e.compose)([l,a])((function(e){var o=e.isDefault,r=e.setDefaultDocument;return React.createElement(n.PluginPostStatusInfo,null,React.createElement(t.CheckboxControl,{label:(0,i.__)("Default Help Document","wp-help"),checked:o,onChange:r}))}))})})();