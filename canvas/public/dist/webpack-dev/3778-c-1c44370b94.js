(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([[3778],{

/***/ "IOhY":
/*!********************************************!*\
  !*** ./ui/shared/tinymce-equella/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jqueryui_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jqueryui/dialog */ \"ESjL\");\n/*\n * Copyright (C) 2015 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (ed) {\n  let $box = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#equella_dialog');\n  const url = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#equella_endpoint_url').attr('href');\n  const action = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.trim(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#equella_action').text() || '') || 'selectOrAdd';\n  const callback_url = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#equella_callback_url').attr('href');\n  const cancel_url = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#equella_cancel_url').attr('href');\n\n  if (!url || !callback_url || !cancel_url) {\n    alert('Equella is not properly configured for this account, please notify your system administrator.');\n    return;\n  }\n\n  const frameHeight = Math.max(Math.min(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height() - 100, 550), 100);\n\n  if (!$box.length) {\n    const boxHtml = '<div id=\"equella_dialog\" style=\"padding: 0; overflow-y: hidden;\"/>';\n    const teaserAndIframeHtml = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.raw(\"<div class='teaser' style='width: 800px; margin-bottom: 10px; display: none;'></div>\") + jquery__WEBPACK_IMPORTED_MODULE_0___default.a.raw(\"<iframe style='background: url(/images/ajax-loader-medium-444.gif) no-repeat left top; width: 800px; height: \") + jquery__WEBPACK_IMPORTED_MODULE_0___default.a.raw(frameHeight) + jquery__WEBPACK_IMPORTED_MODULE_0___default.a.raw(\"px; border: 0;' src='about:blank' borderstyle='0'/>\");\n    $box = jquery__WEBPACK_IMPORTED_MODULE_0___default()(boxHtml).hide().html(teaserAndIframeHtml).appendTo('body').dialog({\n      autoOpen: false,\n      width: 'auto',\n      resizable: true,\n\n      resizeStart() {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('iframe').each(function () {\n          jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class=\"fix_for_resizing_over_iframe\" style=\"background: #fff;\"></div>').css({\n            width: this.offsetWidth + 'px',\n            height: this.offsetHeight + 'px',\n            position: 'absolute',\n            opacity: '0.001',\n            zIndex: 10000000\n          }).css(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).offset()).appendTo('body');\n        });\n      },\n\n      resizeStop() {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fix_for_resizing_over_iframe').remove();\n      },\n\n      resize() {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('iframe').add('.fix_for_resizing_over_iframe').height(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).height()).width(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).width());\n      },\n\n      close() {\n        $box.find('iframe').attr('src', 'about:blank');\n      },\n\n      title: 'Embed content from Equella'\n    }).bind('equella_ready', (event, data) => {\n      const clickedEditor = $box.data('editor') || ed;\n      const selectedContent = ed.selection.getContent();\n\n      if (selectedContent) {\n        // selected content\n        ed.execCommand('mceInsertLink', false, {\n          title: data.name,\n          href: data.url,\n          class: 'equella_content_link'\n        });\n      } else {\n        // no selected content\n        const $link = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div><a/></div>');\n        $link.find('a').attr('title', data.name).attr('href', data.url).attr('class', 'equella_content_link').text(data.name);\n        ed.execCommand('mceInsertContent', false, $link.html());\n      }\n\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#equella_dialog').dialog('close');\n    });\n  }\n\n  const teaserHtml = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#equella_teaser').html();\n  $box.find('.teaser').hide();\n\n  if (teaserHtml) {\n    $box.find('.teaser').html(teaserHtml).show();\n  }\n\n  let full_url = url;\n  full_url = full_url + '?method=lms&returnprefix=eq_&action=' + action;\n  full_url = full_url + '&returnurl=' + encodeURIComponent(callback_url);\n  full_url = full_url + '&cancelurl=' + encodeURIComponent(cancel_url);\n  $box.data('editor', ed);\n  $box.dialog('close').dialog('open');\n  $box.find('iframe').attr('src', full_url);\n});\n\n//# sourceURL=webpack:///./ui/shared/tinymce-equella/index.js?");

/***/ })

}]);