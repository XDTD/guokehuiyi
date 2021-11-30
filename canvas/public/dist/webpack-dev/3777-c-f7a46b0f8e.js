(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([[3777],{

/***/ "eTZi":
/*!*************************************************************!*\
  !*** ./ui/shared/media-comments/jquery/kalturaAnalytics.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! underscore */ \"Y/W1\");\n/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jquery_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery.cookie */ \"32f0\");\n/* harmony import */ var jquery_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery_cookie__WEBPACK_IMPORTED_MODULE_2__);\n//\n// Copyright (C) 2013 - present Instructure, Inc.\n//\n// This file is part of Canvas.\n//\n// Canvas is free software: you can redistribute it and/or modify it under\n// the terms of the GNU Affero General Public License as published by the Free\n// Software Foundation, version 3 of the License.\n//\n// Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n// WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n// A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n// details.\n//\n// You should have received a copy of the GNU Affero General Public License along\n// with this program. If not, see <http://www.gnu.org/licenses/>.\n\n\n // A class to setup kaltura analytics listeners on a mediaElement player\n// for a specific video being played\n// As events are created they are sent to kaltura's analytics api\n\nclass KalturaAnalytics {\n  constructor(_mediaId, mediaElement, pluginSettings) {\n    this.queueAnalyticEvent = eventId => {\n      const data = underscore__WEBPACK_IMPORTED_MODULE_1___default.a.clone(this.defaultData);\n\n      data['event:eventType'] = eventId;\n      data['event:duration'] = this.mediaElement.duration;\n      data['event:currentPoint'] = parseInt(this.mediaElement.currentTime * 1000);\n      data['event:eventTimestamp'] = new Date().getTime();\n      return this.queueApiCall(this.apiUrl + jquery__WEBPACK_IMPORTED_MODULE_0___default.a.param(data));\n    };\n\n    this.ensureAnalyticSession = () => {\n      this.kaSession = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.cookie('kaltura_analytic_tracker', void 0, {\n        path: '/'\n      });\n\n      if (!this.kaSession) {\n        this.kaSession = (Math.random().toString(16) + Math.random().toString(16) + Math.random().toString(16)).replace(/\\./g, '');\n        return jquery__WEBPACK_IMPORTED_MODULE_0___default.a.cookie('kaltura_analytic_tracker', this.kaSession, {\n          path: '/'\n        });\n      }\n    };\n\n    this.generateApiUrl = () => {\n      let domain;\n\n      if (window.location.protocol === 'http:') {\n        domain = `http://${this.pluginSettings.domain}`;\n      } else {\n        domain = `https://${this.pluginSettings.domain}`;\n      }\n\n      return this.apiUrl = `${domain}/api_v3/index.php?`;\n    };\n\n    this.setupApiIframes = count => {\n      this.qIndex = 0;\n      this.iframes = [];\n\n      for (let i = 0, end = count - 1, asc = end >= 0; asc ? i <= end : i >= end; asc ? i++ : i--) {\n        const iframe = document.createElement('iframe');\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(iframe).addClass('hidden kaltura-analytics');\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).append(jquery__WEBPACK_IMPORTED_MODULE_0___default()(iframe)); // there is no reliable way to know when a remote url has loaded in an\n        // iframe, so just send them every 4 seconds\n\n        const queue = [];\n\n        const f = ((iframe, queue) => function () {\n          let url;\n\n          if (url = queue.shift()) {\n            return iframe.src = url;\n          }\n        })(iframe, queue);\n\n        this.iframes[i] = {\n          iframe,\n          queue,\n          pinger: underscore__WEBPACK_IMPORTED_MODULE_1___default.a.throttle(f, 4000)\n        };\n      }\n\n      return this.iframes;\n    };\n\n    this.queueApiCall = url => {\n      if (!this.iframes) {\n        this.setupApiIframes(this.pluginSettings.parallel_api_calls || 3);\n      }\n\n      this.iframes[this.qIndex].queue.push(url);\n      this.iframes[this.qIndex].pinger();\n      this.qIndex = (this.qIndex + 1) % this.iframes.length;\n      return this.qIndex;\n    };\n\n    this.addListeners = () => {\n      this.queueAnalyticEvent(1); // widget loaded\n\n      this.mediaElement.addEventListener('play', () => {\n        this.mediaElement.pauseObserved = false;\n        this.mediaElement.endedObserved = false;\n\n        if (this.mediaElement.endedOnce) {\n          this.queueAnalyticEvent(mediaId, 16); // Replay\n\n          this.mediaElement.endedOnce = false;\n        }\n\n        return this.queueAnalyticEvent(3);\n      }); // Play\n\n      this.mediaElement.addEventListener('canplay', () => this.queueAnalyticEvent(2)); // media loaded\n\n      this.mediaElement.addEventListener('seeked', () => {\n        if (this.mediaElement.endedObserved) return;\n        return this.queueAnalyticEvent(17);\n      }); // 'seek'\n\n      this.mediaElement.addEventListener('pause', () => {\n        if (this.mediaElement.pauseObserved) return;\n        return this.mediaElement.pauseObserved = true;\n      }); // first time loaded\n\n      this.mediaElement.addEventListener('progress', () => {\n        if (!this.mediaElement.endedOnce) {\n          return this.queueAnalyticEvent(12);\n        }\n      }); // 'progress / buffering'\n\n      let _lastTime = 0;\n      let _isFullScreen = false;\n      return this.mediaElement.addEventListener('playing', e => {\n        if (this.mediaElement.listeningToPlaying) return;\n        const interval = setInterval(() => {\n          if (this.mediaElement.paused || isNaN(this.mediaElement.duration) || !this.mediaElement.duration) return;\n\n          if (this.mediaElement.isFullScreen !== _isFullScreen) {\n            if (!_isFullScreen) {\n              this.queueAnalyticEvent(14); // open full screen\n            } else {\n              this.queueAnalyticEvent(15); // close full screen\n            }\n\n            _isFullScreen = this.mediaElement.isFullScreen;\n          }\n\n          const stopPoints = [0.25 * this.mediaElement.duration, 0.5 * this.mediaElement.duration, 0.75 * this.mediaElement.duration, 0.98 * this.mediaElement.duration // :)\n          ];\n          const currentTime = this.mediaElement.currentTime;\n\n          if (!isNaN(currentTime) && currentTime > 0) {\n            let j = stopPoints.length - 1;\n\n            while (j >= 0) {\n              const cueTime = stopPoints[j];\n\n              if (cueTime > _lastTime && cueTime <= currentTime) {\n                if (j === 0) {\n                  this.queueAnalyticEvent(4); // play reached 25\n                } else if (j === 1) {\n                  this.queueAnalyticEvent(5); // play reached 50\n                } else if (j === 2) {\n                  this.queueAnalyticEvent(6); // play reached 75\n                } else if (j === 3) {\n                  this.queueAnalyticEvent(7); // play reached \"100\"\n                }\n              }\n\n              --j;\n            }\n\n            return _lastTime = currentTime;\n          }\n        }, 50);\n        return this.mediaElement.listeningToPlaying = true;\n      }, false);\n    };\n\n    this.mediaId = _mediaId;\n    this.mediaElement = mediaElement;\n    this.pluginSettings = pluginSettings;\n    this.ensureAnalyticSession();\n    this.generateApiUrl();\n    this.defaultData = {\n      service: 'stats',\n      action: 'collect',\n      'event:entryId': this.mediaId,\n      'event:sessionId': this.kaSession,\n      'event:isFirstInSession': 'false',\n      'event:objectType': 'KalturaStatsEvent',\n      'event:partnerId': this.pluginSettings.partner_id,\n      'event:uiconfId': this.pluginSettings.kcw_ui_conf,\n      'event:queryStringReferrer': window.location.href\n    };\n  } // Builds the url to send the analytic event and adds it to the processing queue\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (mediaId, mediaElement, pluginSettings) {\n  if (pluginSettings && pluginSettings.do_analytics) {\n    const ka = new KalturaAnalytics(mediaId, mediaElement, pluginSettings);\n    ka.addListeners();\n    return ka;\n  }\n});\n\n//# sourceURL=webpack:///./ui/shared/media-comments/jquery/kalturaAnalytics.js?");

/***/ })

}]);