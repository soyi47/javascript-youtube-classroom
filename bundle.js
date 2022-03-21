/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Manager/SaveVideoManager.js":
/*!********************************************!*\
  !*** ./src/js/Manager/SaveVideoManager.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SaveVideoManager)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/js/constants.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./src/js/util/index.js");
/* harmony import */ var _util_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/event */ "./src/js/util/event.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }





var SaveVideoManager = /*#__PURE__*/function () {
  function SaveVideoManager(_ref) {
    var storage = _ref.storage;

    _classCallCheck(this, SaveVideoManager);

    this.storage = storage;
  }

  _createClass(SaveVideoManager, [{
    key: "updateSavedVideos",
    value: function updateSavedVideos() {
      var _this$storage = this.storage,
          videos = _this$storage.videos,
          status = _this$storage.status;
      var unwatchedVideos = videos.filter(function (video) {
        return video.watched === false;
      });
      var watchedVideos = videos.filter(function (video) {
        return video.watched === true;
      });
      (0,_util_event__WEBPACK_IMPORTED_MODULE_2__.dispatch)(_constants__WEBPACK_IMPORTED_MODULE_0__.EVENT.UPDATE_SAVED_VIDEO_LIST, {
        response: status,
        unwatchedVideos: unwatchedVideos,
        watchedVideos: watchedVideos
      }, (0,_util__WEBPACK_IMPORTED_MODULE_1__.$)('#app'));
    }
  }, {
    key: "saveVideo",
    value: function saveVideo(video) {
      if (!video) return _constants__WEBPACK_IMPORTED_MODULE_0__.RESULT.FAIL;

      try {
        this.storage.saveVideo(_objectSpread(_objectSpread({}, video), {}, {
          watched: false
        }));
      } catch (err) {
        alert(err.message);
        return _constants__WEBPACK_IMPORTED_MODULE_0__.RESULT.FAIL;
      }

      this.updateSavedVideos();
      return _constants__WEBPACK_IMPORTED_MODULE_0__.RESULT.SUCCESS;
    }
  }, {
    key: "changeWatched",
    value: function changeWatched(videoId) {
      var video = this.storage.findVideoById(videoId);

      try {
        this.storage.updateVideo(_objectSpread(_objectSpread({}, video), {}, {
          watched: !video.watched
        }));
      } catch (err) {
        alert(err.message);
        return _constants__WEBPACK_IMPORTED_MODULE_0__.RESULT.FAIL;
      }

      this.updateSavedVideos();
      return _constants__WEBPACK_IMPORTED_MODULE_0__.RESULT.SUCCESS;
    }
  }, {
    key: "deleteVideo",
    value: function deleteVideo(videoId) {
      try {
        this.storage.deleteVideoById(videoId);
      } catch (err) {
        alert(err.message);
        return _constants__WEBPACK_IMPORTED_MODULE_0__.RESULT.FAIL;
      }

      this.updateSavedVideos();
      return _constants__WEBPACK_IMPORTED_MODULE_0__.RESULT.SUCCESS;
    }
  }]);

  return SaveVideoManager;
}();



/***/ }),

/***/ "./src/js/Manager/SearchVideoManager.js":
/*!**********************************************!*\
  !*** ./src/js/Manager/SearchVideoManager.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchVideoManager)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/js/constants.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./src/js/util/index.js");
/* harmony import */ var _util_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/event */ "./src/js/util/event.js");
/* harmony import */ var _util_youtubeAPI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/youtubeAPI */ "./src/js/util/youtubeAPI.js");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validation */ "./src/js/Manager/validation.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }







var _keyword = /*#__PURE__*/new WeakMap();

var _nextPageToken = /*#__PURE__*/new WeakMap();

var _searchState = /*#__PURE__*/new WeakMap();

var SearchVideoManager = /*#__PURE__*/function () {
  function SearchVideoManager(_ref) {
    var storage = _ref.storage;

    _classCallCheck(this, SearchVideoManager);

    _classPrivateFieldInitSpec(this, _keyword, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _nextPageToken, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _searchState, {
      writable: true,
      value: void 0
    });

    this.storage = storage;

    _classPrivateFieldSet(this, _keyword, '');

    _classPrivateFieldSet(this, _nextPageToken, '');

    _classPrivateFieldSet(this, _searchState, 'READY');
  }

  _createClass(SearchVideoManager, [{
    key: "updateSearchState",
    value: function updateSearchState(newState) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classPrivateFieldSet(this, _searchState, newState);

      var detail = _objectSpread({
        searchState: newState
      }, data);

      (0,_util_event__WEBPACK_IMPORTED_MODULE_2__.dispatch)(_constants__WEBPACK_IMPORTED_MODULE_0__.EVENT.UPDATE_SEARCH_STATE, detail, (0,_util__WEBPACK_IMPORTED_MODULE_1__.$)('#modal-container'));
    }
  }, {
    key: "searchWithKeyword",
    value: function searchWithKeyword(keyword) {
      try {
        (0,_validation__WEBPACK_IMPORTED_MODULE_4__.validateSearchKeyword)(keyword);
      } catch (err) {
        alert(err.message);
        return;
      }

      _classPrivateFieldSet(this, _keyword, keyword);

      this.updateSearchState('READY');
      this.search();
    }
  }, {
    key: "searchOnScroll",
    value: function searchOnScroll() {
      if (!_classPrivateFieldGet(this, _nextPageToken)) {
        alert(_constants__WEBPACK_IMPORTED_MODULE_0__.GUIDE_MESSAGE.NO_MORE_SEARCH_RESULT);
        return;
      }

      this.search();
    }
  }, {
    key: "search",
    value: function search() {
      var _this = this;

      if (_classPrivateFieldGet(this, _searchState) === 'LOADING') return;
      this.updateSearchState('LOADING');
      (0,_util_youtubeAPI__WEBPACK_IMPORTED_MODULE_3__["default"])(_classPrivateFieldGet(this, _keyword), _classPrivateFieldGet(this, _nextPageToken)).then(function (data) {
        return _this.processFetchedResult(data);
      }).then(function (fetchedData) {
        _this.updateSearchState('SUCCESS', {
          videos: fetchedData
        });
      })["catch"](function () {
        _this.updateSearchState('ERROR');
      });
    }
  }, {
    key: "processFetchedResult",
    value: function processFetchedResult(result) {
      var _this2 = this;

      _classPrivateFieldSet(this, _nextPageToken, result.nextPageToken);

      return result.items.map(function (item) {
        return {
          id: item.id.videoId,
          thumbnail: item.snippet.thumbnails.medium.url,
          title: item.snippet.title,
          channelName: item.snippet.channelTitle,
          publishedDate: item.snippet.publishedAt,
          saved: !!_this2.storage.findVideoById(item.id.videoId)
        };
      }).filter(function (item) {
        return (0,_validation__WEBPACK_IMPORTED_MODULE_4__.checkNoUndefinedProperty)(item);
      });
    }
  }]);

  return SearchVideoManager;
}();



/***/ }),

/***/ "./src/js/Manager/validation.js":
/*!**************************************!*\
  !*** ./src/js/Manager/validation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkNoUndefinedProperty": () => (/* binding */ checkNoUndefinedProperty),
/* harmony export */   "validateSearchKeyword": () => (/* binding */ validateSearchKeyword)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/js/constants.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var validateSearchKeyword = function validateSearchKeyword(searchKeyword) {
  if (searchKeyword.length < _constants__WEBPACK_IMPORTED_MODULE_0__.SEARCH_KEYWORD_MIN_LENGTH) throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.SEARCH_KEYWORD_MIN_LENGTH);
};
var checkNoUndefinedProperty = function checkNoUndefinedProperty(object) {
  return !_toConsumableArray(Object.keys(object)).some(function (key) {
    return object[key] === undefined;
  });
};

/***/ }),

/***/ "./src/js/Storage.js":
/*!***************************!*\
  !*** ./src/js/Storage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Storage)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/js/constants.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }



var setData = function setData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
};

var getData = function getData(key) {
  return JSON.parse(localStorage.getItem(key));
};

var _videos = /*#__PURE__*/new WeakMap();

var _status = /*#__PURE__*/new WeakMap();

var _getLocalStorageVideos = /*#__PURE__*/new WeakSet();

var _setLocalStorageVideos = /*#__PURE__*/new WeakSet();

var Storage = /*#__PURE__*/function () {
  function Storage() {
    _classCallCheck(this, Storage);

    _classPrivateMethodInitSpec(this, _setLocalStorageVideos);

    _classPrivateMethodInitSpec(this, _getLocalStorageVideos);

    _classPrivateFieldInitSpec(this, _videos, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _status, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _status, null);

    _classPrivateFieldSet(this, _videos, _classPrivateMethodGet(this, _getLocalStorageVideos, _getLocalStorageVideos2).call(this));
  }

  _createClass(Storage, [{
    key: "videos",
    get: function get() {
      return _classPrivateFieldGet(this, _videos);
    }
  }, {
    key: "status",
    get: function get() {
      return _classPrivateFieldGet(this, _status);
    }
  }, {
    key: "saveVideo",
    value: function saveVideo(video) {
      if (this.findVideoById(video.id)) {
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.ALREADY_SAVED_VIDEO);
      }

      if (_classPrivateFieldGet(this, _videos).length >= _constants__WEBPACK_IMPORTED_MODULE_0__.MAX_VIDEO_SAVE) {
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.MAX_VIDEO_SAVE);
      }

      _classPrivateFieldGet(this, _videos).push(video);

      _classPrivateMethodGet(this, _setLocalStorageVideos, _setLocalStorageVideos2).call(this, _classPrivateFieldGet(this, _videos));
    }
  }, {
    key: "findVideoById",
    value: function findVideoById(id) {
      return _classPrivateFieldGet(this, _videos).find(function (video) {
        return video.id === id;
      });
    }
  }, {
    key: "updateVideo",
    value: function updateVideo(newVideo) {
      var index = _classPrivateFieldGet(this, _videos).findIndex(function (video) {
        return video.id === newVideo.id;
      });

      if (index === -1) {
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.CAN_NOT_UPDATE_ON_NOT_SAVED_VIDEO);
      }

      _classPrivateFieldGet(this, _videos).splice(index, 1, newVideo);

      _classPrivateMethodGet(this, _setLocalStorageVideos, _setLocalStorageVideos2).call(this, _classPrivateFieldGet(this, _videos));
    }
  }, {
    key: "deleteVideoById",
    value: function deleteVideoById(id) {
      var index = _classPrivateFieldGet(this, _videos).findIndex(function (video) {
        return video.id === id;
      });

      if (index === -1) {
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.CAN_NOT_DELETE_ON_NOT_SAVED_VIDEO);
      }

      _classPrivateFieldGet(this, _videos).splice(index, 1);

      _classPrivateMethodGet(this, _setLocalStorageVideos, _setLocalStorageVideos2).call(this, _classPrivateFieldGet(this, _videos));
    }
  }]);

  return Storage;
}();

function _getLocalStorageVideos2() {
  var videos;

  try {
    videos = getData('videos') || [];
  } catch (err) {
    _classPrivateFieldSet(this, _status, _constants__WEBPACK_IMPORTED_MODULE_0__.RESULT.FAIL);

    console.error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.FAIL_TO_READ_SAVED_VIDEO_INFO);
    return [];
  }

  _classPrivateFieldSet(this, _status, _constants__WEBPACK_IMPORTED_MODULE_0__.RESULT.SUCCESS);

  return videos;
}

function _setLocalStorageVideos2(videos) {
  setData('videos', videos);
}



/***/ }),

/***/ "./src/js/View/HomeView.js":
/*!*********************************!*\
  !*** ./src/js/View/HomeView.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomeView)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/js/util/index.js");
/* harmony import */ var _SavedVideoListView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SavedVideoListView */ "./src/js/View/SavedVideoListView.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var HomeView = /*#__PURE__*/function () {
  function HomeView(_ref) {
    var _this = this;

    var saveVideoManager = _ref.saveVideoManager;

    _classCallCheck(this, HomeView);

    _defineProperty(this, "onClickUnwatchedVideoListButton", function () {
      if (_this.$unwatchedVideoList.classList.contains('hide')) {
        _this.toggleVideoList();
      }
    });

    _defineProperty(this, "onClickWatchedVideoListButton", function () {
      if (_this.$watchedVideoList.classList.contains('hide')) {
        _this.toggleVideoList();
      }
    });

    _defineProperty(this, "toggleVideoList", function () {
      _this.$unwatchedVideoList.classList.toggle('hide');

      _this.$watchedVideoList.classList.toggle('hide');

      _this.$unwatchedVideoListButton.classList.toggle('selected');

      _this.$watchedVideoListButton.classList.toggle('selected');
    });

    _defineProperty(this, "openModal", function () {
      _this.$modalContainer.classList.remove('hide');
    });

    this.savedVideoListView = new _SavedVideoListView__WEBPACK_IMPORTED_MODULE_1__["default"]({
      saveVideoManager: saveVideoManager
    });
    this.initDOMs();
    this.bindEvents();
  }

  _createClass(HomeView, [{
    key: "initDOMs",
    value: function initDOMs() {
      this.$app = (0,_util__WEBPACK_IMPORTED_MODULE_0__.$)('#app');
      this.$modalContainer = (0,_util__WEBPACK_IMPORTED_MODULE_0__.$)('#modal-container');
      this.$searchModalButton = (0,_util__WEBPACK_IMPORTED_MODULE_0__.$)('#search-modal-button', this.$app);
      this.$unwatchedVideoListButton = (0,_util__WEBPACK_IMPORTED_MODULE_0__.$)('#unwatched-video-list-button', this.$app);
      this.$watchedVideoListButton = (0,_util__WEBPACK_IMPORTED_MODULE_0__.$)('#watched-video-list-button', this.$app);
      this.$unwatchedVideoList = (0,_util__WEBPACK_IMPORTED_MODULE_0__.$)('#unwatched-video-list', this.$app);
      this.$watchedVideoList = (0,_util__WEBPACK_IMPORTED_MODULE_0__.$)('#watched-video-list', this.$app);
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      this.$unwatchedVideoListButton.addEventListener('click', this.onClickUnwatchedVideoListButton);
      this.$watchedVideoListButton.addEventListener('click', this.onClickWatchedVideoListButton);
      this.$searchModalButton.addEventListener('click', this.openModal);
    }
  }]);

  return HomeView;
}();



/***/ }),

/***/ "./src/js/View/SavedVideoListView.js":
/*!*******************************************!*\
  !*** ./src/js/View/SavedVideoListView.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SavedVideoListView)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/js/constants.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./src/js/util/index.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template */ "./src/js/View/template.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var SavedVideoListView = /*#__PURE__*/function () {
  function SavedVideoListView(_ref) {
    var _this = this;

    var saveVideoManager = _ref.saveVideoManager;

    _classCallCheck(this, SavedVideoListView);

    _defineProperty(this, "onClickIconButton", function (e) {
      if (e.target.classList.contains('check-watched-button')) {
        _this.onClickCheckWatchedButton(e);
      }

      if (e.target.classList.contains('delete-button')) {
        _this.onClickDeleteButton(e);
      }
    });

    _defineProperty(this, "onClickCheckWatchedButton", function (e) {
      var id = e.target.parentNode.dataset.id;

      _this.saveVideoManager.changeWatched(id);
    });

    _defineProperty(this, "onClickDeleteButton", function (e) {
      if (window.confirm(_constants__WEBPACK_IMPORTED_MODULE_0__.GUIDE_MESSAGE.CONFIRM_DELETE)) {
        var id = e.target.parentNode.dataset.id;

        _this.saveVideoManager.deleteVideo(id);
      }
    });

    _defineProperty(this, "updateOnSavedVideoList", function (e) {
      _this.updateOnUnwatchedVideoList(e);

      _this.updateOnWatchedVideoList(e);
    });

    _defineProperty(this, "updateOnUnwatchedVideoList", function (e) {
      var _e$detail = e.detail,
          response = _e$detail.response,
          unwatchedVideos = _e$detail.unwatchedVideos;

      if (response !== _constants__WEBPACK_IMPORTED_MODULE_0__.RESULT.SUCCESS) {
        _this.$unwatchedVideoList.classList.add('description');

        _this.$unwatchedVideoList.innerHTML = _template__WEBPACK_IMPORTED_MODULE_2__.template.failToReadSavedVideo;
        return;
      }

      if (unwatchedVideos.length === 0) {
        _this.$unwatchedVideoList.classList.add('description');

        _this.$unwatchedVideoList.innerHTML = _template__WEBPACK_IMPORTED_MODULE_2__.template.noUnwatchedVideo;
        return;
      }

      _this.updateUnwatchedVideoItems(unwatchedVideos);
    });

    _defineProperty(this, "updateOnWatchedVideoList", function (e) {
      var _e$detail2 = e.detail,
          response = _e$detail2.response,
          watchedVideos = _e$detail2.watchedVideos;

      if (response !== _constants__WEBPACK_IMPORTED_MODULE_0__.RESULT.SUCCESS) {
        _this.$watchedVideoList.classList.add('description');

        _this.$watchedVideoList.innerHTML = _template__WEBPACK_IMPORTED_MODULE_2__.template.failToReadSavedVideo;
        return;
      }

      if (watchedVideos.length === 0) {
        _this.$watchedVideoList.classList.add('description');

        _this.$watchedVideoList.innerHTML = _template__WEBPACK_IMPORTED_MODULE_2__.template.noWatchedVideo;
        return;
      }

      _this.updateWatchedVideoItems(watchedVideos);
    });

    _defineProperty(this, "updateUnwatchedVideoItems", function (unwatchedVideos) {
      if (_this.$unwatchedVideoList.classList.contains('description')) {
        _this.$unwatchedVideoList.classList.remove('description');
      }

      var unwatchedVideoListItems = unwatchedVideos.map(function (video) {
        return _template__WEBPACK_IMPORTED_MODULE_2__.template.savedVideoListItem(video);
      }).join('');
      _this.$unwatchedVideoList.innerHTML = unwatchedVideoListItems;
    });

    _defineProperty(this, "updateWatchedVideoItems", function (watchedVideos) {
      if (_this.$watchedVideoList.classList.contains('description')) {
        _this.$watchedVideoList.classList.remove('description');
      }

      var watchedVideoListItems = watchedVideos.map(function (video) {
        return _template__WEBPACK_IMPORTED_MODULE_2__.template.savedVideoListItem(video);
      }).join('');
      _this.$watchedVideoList.innerHTML = watchedVideoListItems;
    });

    this.saveVideoManager = saveVideoManager;
    this.initDOMs();
    this.bindEvents();
  }

  _createClass(SavedVideoListView, [{
    key: "initDOMs",
    value: function initDOMs() {
      this.$app = (0,_util__WEBPACK_IMPORTED_MODULE_1__.$)('#app');
      this.$unwatchedVideoList = (0,_util__WEBPACK_IMPORTED_MODULE_1__.$)('#unwatched-video-list', this.$app);
      this.$watchedVideoList = (0,_util__WEBPACK_IMPORTED_MODULE_1__.$)('#watched-video-list', this.$app);
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      this.$unwatchedVideoList.addEventListener('click', this.onClickIconButton);
      this.$watchedVideoList.addEventListener('click', this.onClickIconButton);
      this.$app.addEventListener(_constants__WEBPACK_IMPORTED_MODULE_0__.EVENT.UPDATE_SAVED_VIDEO_LIST, this.updateOnSavedVideoList);
    }
  }]);

  return SavedVideoListView;
}();



/***/ }),

/***/ "./src/js/View/SearchKeywordFormView.js":
/*!**********************************************!*\
  !*** ./src/js/View/SearchKeywordFormView.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchKeywordFormView)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/js/util/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var SearchKeywordFormView = /*#__PURE__*/function () {
  function SearchKeywordFormView(_ref) {
    var _this = this;

    var searchVideoManager = _ref.searchVideoManager;

    _classCallCheck(this, SearchKeywordFormView);

    _defineProperty(this, "onSubmitSearchForm", function (e) {
      e.preventDefault();
      var keyword = _this.$searchKeywordInput.value;

      _this.searchVideoManager.searchWithKeyword(keyword);
    });

    this.searchVideoManager = searchVideoManager;
    this.initDOMs();
    this.bindEvents();
  }

  _createClass(SearchKeywordFormView, [{
    key: "initDOMs",
    value: function initDOMs() {
      this.$modalContainer = (0,_util__WEBPACK_IMPORTED_MODULE_0__.$)('#modal-container');
      this.$searchForm = (0,_util__WEBPACK_IMPORTED_MODULE_0__.$)('#search-form', this.$modalContainer);
      this.$searchKeywordInput = (0,_util__WEBPACK_IMPORTED_MODULE_0__.$)('#search-input-keyword', this.$searchForm);
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      this.$searchForm.addEventListener('submit', this.onSubmitSearchForm);
    }
  }]);

  return SearchKeywordFormView;
}();



/***/ }),

/***/ "./src/js/View/SearchModalView.js":
/*!****************************************!*\
  !*** ./src/js/View/SearchModalView.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchModalView)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/js/util/index.js");
/* harmony import */ var _SearchKeywordFormView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchKeywordFormView */ "./src/js/View/SearchKeywordFormView.js");
/* harmony import */ var _SearchResultView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchResultView */ "./src/js/View/SearchResultView.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var SearchModalView = /*#__PURE__*/function () {
  function SearchModalView(_ref) {
    var _this = this;

    var searchVideoManager = _ref.searchVideoManager,
        saveVideoManager = _ref.saveVideoManager;

    _classCallCheck(this, SearchModalView);

    _defineProperty(this, "onKeyDown", function (e) {
      if (e.key === 'Escape' && !_this.$modalContainer.classList.contains('hide')) {
        _this.closeModal();
      }
    });

    _defineProperty(this, "closeModal", function () {
      _this.$modalContainer.classList.add('hide');
    });

    this.searchKeywordFormView = new _SearchKeywordFormView__WEBPACK_IMPORTED_MODULE_1__["default"]({
      searchVideoManager: searchVideoManager
    });
    this.searchResultView = new _SearchResultView__WEBPACK_IMPORTED_MODULE_2__["default"]({
      searchVideoManager: searchVideoManager,
      saveVideoManager: saveVideoManager
    });
    this.initDOMs();
    this.bindEvents();
  }

  _createClass(SearchModalView, [{
    key: "initDOMs",
    value: function initDOMs() {
      this.$modalContainer = (0,_util__WEBPACK_IMPORTED_MODULE_0__.$)('#modal-container');
      this.$dimmer = (0,_util__WEBPACK_IMPORTED_MODULE_0__.$)('.dimmer', this.$modalContainer);
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      this.$dimmer.addEventListener('click', this.closeModal);
      window.addEventListener('keydown', this.onKeyDown);
    }
  }]);

  return SearchModalView;
}();



/***/ }),

/***/ "./src/js/View/SearchResultView.js":
/*!*****************************************!*\
  !*** ./src/js/View/SearchResultView.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchResultView)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/js/constants.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./src/js/util/index.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template */ "./src/js/View/template.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var SearchResultView = /*#__PURE__*/function () {
  function SearchResultView(_ref) {
    var _this = this;

    var searchVideoManager = _ref.searchVideoManager,
        saveVideoManager = _ref.saveVideoManager;

    _classCallCheck(this, SearchResultView);

    _defineProperty(this, "onScrollVideoList", function () {
      var _this$$searchResultVi = _this.$searchResultVideoList,
          scrollTop = _this$$searchResultVi.scrollTop,
          clientHeight = _this$$searchResultVi.clientHeight,
          scrollHeight = _this$$searchResultVi.scrollHeight;
      if (scrollTop + clientHeight + 50 < scrollHeight) return;

      _this.searchVideoManager.searchOnScroll();
    });

    _defineProperty(this, "onClickVideoSaveButton", function (e) {
      var target = e.target;

      if (target.classList.contains('video-save-button')) {
        var video = target.parentNode.dataset;

        if (_this.saveVideoManager.saveVideo(video) === _constants__WEBPACK_IMPORTED_MODULE_0__.RESULT.SUCCESS) {
          target.remove();
        }
      }
    });

    _defineProperty(this, "updateOnSearchState", function (e) {
      var searchState = e.detail.searchState;

      if (searchState === 'READY') {
        _this.resetSearchResult();
      }

      ;

      if (searchState === 'LOADING') {
        _this.updateOnLoading();
      }

      ;

      if (searchState === 'SUCCESS') {
        _this.updateOnNewDataReceived(e.detail.videos);
      }

      if (searchState === 'ERROR') {
        _this.showErrorResult();
      }
    });

    _defineProperty(this, "resetSearchResult", function () {
      _this.$searchResultVideoList.scrollTo(0, 0);

      _this.$searchResultVideoList.innerHTML = _template__WEBPACK_IMPORTED_MODULE_2__.template.skeletonListItem();
      _this.$$skeletonItems = (0,_util__WEBPACK_IMPORTED_MODULE_1__.$$)('.skeleton', _this.$searchResultVideoList);
      _this.$firstSkeletonListItem = (0,_util__WEBPACK_IMPORTED_MODULE_1__.$)('.skeleton', _this.$searchResultVideoList);
    });

    _defineProperty(this, "updateOnLoading", function () {
      _this.toggleSkeletonListItemVisibility();

      if (_this.$searchResultVideoList.classList.contains('hide')) {
        _this.showSearchResultVideoList();
      }
    });

    _defineProperty(this, "updateOnNewDataReceived", function (videos) {
      if (videos.length === 0) {
        _this.showNoResult();

        _this.toggleSkeletonListItemVisibility();

        return;
      }

      var listItems = videos.map(function (video) {
        return _template__WEBPACK_IMPORTED_MODULE_2__.template.searchResultListItem(video);
      }).join('');

      _this.$firstSkeletonListItem.insertAdjacentHTML('beforebegin', listItems);

      _this.toggleSkeletonListItemVisibility();
    });

    _defineProperty(this, "toggleSkeletonListItemVisibility", function () {
      _this.$$skeletonItems.forEach(function (item) {
        item.classList.toggle('hide');
      });
    });

    _defineProperty(this, "showSearchResultVideoList", function () {
      _this.$noResultContainer.classList.add('hide');

      _this.$searchResultVideoList.classList.remove('hide');

      _this.$searchResultSection.classList.remove('search-result--no-result');
    });

    _defineProperty(this, "showNoResult", function () {
      _this.$noResultDescription.innerHTML = _template__WEBPACK_IMPORTED_MODULE_2__.MESSAGE.NO_RESULT;

      _this.$noResultContainer.classList.remove('hide');

      _this.$searchResultVideoList.classList.add('hide');

      _this.$searchResultSection.classList.add('search-result--no-result');
    });

    _defineProperty(this, "showErrorResult", function () {
      _this.$noResultDescription.innerHTML = _template__WEBPACK_IMPORTED_MODULE_2__.MESSAGE.ERROR_RESULT;

      _this.$noResultContainer.classList.remove('hide');

      _this.$searchResultVideoList.classList.add('hide');

      _this.$searchResultSection.classList.add('search-result--no-result');
    });

    this.searchVideoManager = searchVideoManager;
    this.saveVideoManager = saveVideoManager;
    this.initDOMs();
    this.bindEvents();
  }

  _createClass(SearchResultView, [{
    key: "initDOMs",
    value: function initDOMs() {
      this.$modalContainer = (0,_util__WEBPACK_IMPORTED_MODULE_1__.$)('#modal-container');
      this.$searchResultSection = (0,_util__WEBPACK_IMPORTED_MODULE_1__.$)('#search-result-section');
      this.$searchResultVideoList = (0,_util__WEBPACK_IMPORTED_MODULE_1__.$)('#search-result-video-list', this.$searchResultSection);
      this.$noResultContainer = (0,_util__WEBPACK_IMPORTED_MODULE_1__.$)('#no-result-container', this.$searchResultSection);
      this.$noResultDescription = (0,_util__WEBPACK_IMPORTED_MODULE_1__.$)('#no-result-description', this.$noResultContainer);
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      this.$searchResultVideoList.addEventListener('scroll', (0,_util__WEBPACK_IMPORTED_MODULE_1__.debounce)(this.onScrollVideoList, 500));
      this.$searchResultVideoList.addEventListener('click', this.onClickVideoSaveButton);
      this.$modalContainer.addEventListener(_constants__WEBPACK_IMPORTED_MODULE_0__.EVENT.UPDATE_SEARCH_STATE, this.updateOnSearchState);
    }
  }]);

  return SearchResultView;
}();



/***/ }),

/***/ "./src/js/View/template.js":
/*!*********************************!*\
  !*** ./src/js/View/template.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MESSAGE": () => (/* binding */ MESSAGE),
/* harmony export */   "template": () => (/* binding */ template)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/js/constants.js");


var dateTemplate = function dateTemplate(stringDate) {
  var date = new Date(stringDate);
  return "".concat(date.getFullYear(), "\uB144 ").concat(date.getMonth() + 1, "\uC6D4 ").concat(date.getDate(), "\uC77C");
};

var template = {
  skeletonListItem: function skeletonListItem() {
    return "<li class=\"skeleton hide\">\n    <div class=\"image\"></div>\n    <p class=\"line\"></p>\n    <p class=\"line\"></p>\n  </li>".repeat(10);
  },
  searchResultListItem: function searchResultListItem(_ref) {
    var id = _ref.id,
        thumbnail = _ref.thumbnail,
        title = _ref.title,
        channelName = _ref.channelName,
        publishedDate = _ref.publishedDate,
        saved = _ref.saved;
    return "<li class=\"video-item\" \n      data-id=\"".concat(id, "\"\n      data-thumbnail=\"").concat(thumbnail, "\"\n      data-title=\"").concat(title, "\"\n      data-channel-name=\"").concat(channelName, "\"\n      data-published-date=\"").concat(publishedDate, "\"\n    >\n      <img src=").concat(thumbnail, " alt=\"video-item-thumbnail\" class=\"video-item__thumbnail\">\n      <h4 class=\"video-item__title\">").concat(title, "</h4>\n      <p class=\"video-item__channel-name\">").concat(channelName, "</p>\n      <p class=\"video-item__published-date\">").concat(dateTemplate(publishedDate), "</p>\n      ").concat(saved ? '' : '<button class="button video-save-button">⬇ 저장</button>', "\n      </li>\n    ");
  },
  savedVideoListItem: function savedVideoListItem(_ref2) {
    var id = _ref2.id,
        thumbnail = _ref2.thumbnail,
        title = _ref2.title,
        channelName = _ref2.channelName,
        publishedDate = _ref2.publishedDate,
        watched = _ref2.watched;
    return "<li class=\"video-item\" \n      data-id=\"".concat(id, "\"\n    >\n      <img src=").concat(thumbnail, " alt=\"video-item-thumbnail\" class=\"video-item__thumbnail\">\n      <h4 class=\"video-item__title\">").concat(title, "</h4>\n      <p class=\"video-item__channel-name\">").concat(channelName, "</p>\n      <p class=\"video-item__published-date\">").concat(dateTemplate(publishedDate), "</p>\n      <button class=\"button icon-button check-watched-button ").concat(watched ? 'selected' : '', "\">\u2705</button>\n      <button class=\"button icon-button delete-button\">\uD83D\uDDD1\uFE0F</button>\n      </li>\n    ");
  },
  failToReadSavedVideo: "<li class=\"align-center\">".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.FAIL_TO_READ_SAVED_VIDEO_INFO, "</li>"),
  noUnwatchedVideo: '<li class="align-center">볼 영상이 없습니다.</li>',
  noWatchedVideo: '<li class="align-center">본 영상이 없습니다.</li>'
};
var MESSAGE = {
  NO_RESULT: '검색 결과가 없습니다.<br />다른 키워드로 검색해보세요.',
  ERROR_RESULT: '검색 결과를 가져오는데 실패했습니다.<br />관리자에게 문의하세요.'
};

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage */ "./src/js/Storage.js");
/* harmony import */ var _Manager_SearchVideoManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Manager/SearchVideoManager */ "./src/js/Manager/SearchVideoManager.js");
/* harmony import */ var _Manager_SaveVideoManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Manager/SaveVideoManager */ "./src/js/Manager/SaveVideoManager.js");
/* harmony import */ var _View_HomeView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./View/HomeView */ "./src/js/View/HomeView.js");
/* harmony import */ var _View_SearchModalView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./View/SearchModalView */ "./src/js/View/SearchModalView.js");





var storage = new _Storage__WEBPACK_IMPORTED_MODULE_0__["default"]();
var searchVideoManager = new _Manager_SearchVideoManager__WEBPACK_IMPORTED_MODULE_1__["default"]({
  storage: storage
});
var saveVideoManager = new _Manager_SaveVideoManager__WEBPACK_IMPORTED_MODULE_2__["default"]({
  storage: storage
});
var homeView = new _View_HomeView__WEBPACK_IMPORTED_MODULE_3__["default"]({
  saveVideoManager: saveVideoManager
});
var searchModalView = new _View_SearchModalView__WEBPACK_IMPORTED_MODULE_4__["default"]({
  searchVideoManager: searchVideoManager,
  saveVideoManager: saveVideoManager
});

function initialize() {
  saveVideoManager.updateSavedVideos();
}

initialize();

/***/ }),

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ERROR_MESSAGE": () => (/* binding */ ERROR_MESSAGE),
/* harmony export */   "EVENT": () => (/* binding */ EVENT),
/* harmony export */   "GUIDE_MESSAGE": () => (/* binding */ GUIDE_MESSAGE),
/* harmony export */   "MAX_DATA_FETCH_AT_ONCE": () => (/* binding */ MAX_DATA_FETCH_AT_ONCE),
/* harmony export */   "MAX_VIDEO_SAVE": () => (/* binding */ MAX_VIDEO_SAVE),
/* harmony export */   "RESULT": () => (/* binding */ RESULT),
/* harmony export */   "SEARCH_KEYWORD_MIN_LENGTH": () => (/* binding */ SEARCH_KEYWORD_MIN_LENGTH)
/* harmony export */ });
var SEARCH_KEYWORD_MIN_LENGTH = 2;
var MAX_VIDEO_SAVE = 100;
var MAX_DATA_FETCH_AT_ONCE = 10;
var ERROR_MESSAGE = {
  SEARCH_KEYWORD_MIN_LENGTH: "\uAC80\uC0C9 \uD0A4\uC6CC\uB4DC\uB294 ".concat(SEARCH_KEYWORD_MIN_LENGTH, "\uC790 \uC774\uC0C1\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4."),
  MAX_VIDEO_SAVE: "\uC800\uC7A5 \uC5D0\uB7EC! \uC601\uC0C1\uC740 \uCD5C\uB300 ".concat(MAX_VIDEO_SAVE, "\uAC1C\uB9CC \uC800\uC7A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."),
  ALREADY_SAVED_VIDEO: '이미 저장된 비디오 입니다.',
  CAN_NOT_UPDATE_ON_NOT_SAVED_VIDEO: '저장된 비디오가 아닙니다. 정보를 업데이트 할 수 없습니다.',
  CAN_NOT_DELETE_ON_NOT_SAVED_VIDEO: '저장된 비디오가 아닙니다. 삭제할 수 없습니다.',
  FAIL_TO_READ_SAVED_VIDEO_INFO: '저장된 영상 정보를 가져오는데 실패했습니다.'
};
var GUIDE_MESSAGE = {
  NO_MORE_SEARCH_RESULT: '마지막 검색결과까지 모두 출력되었습니다.',
  CONFIRM_DELETE: '정말 삭제하시겠습니까?'
};
var RESULT = {
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL'
};
var EVENT = {
  UPDATE_SEARCH_STATE: 'updateSearchState',
  UPDATE_SAVED_VIDEO_LIST: 'updateSavedVideoList'
};

/***/ }),

/***/ "./src/js/util/event.js":
/*!******************************!*\
  !*** ./src/js/util/event.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dispatch": () => (/* binding */ dispatch)
/* harmony export */ });
var dispatch = function dispatch(eventName) {
  var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
  var customEvent = new CustomEvent(eventName, {
    detail: detail
  });
  target.dispatchEvent(customEvent);
};

/***/ }),

/***/ "./src/js/util/index.js":
/*!******************************!*\
  !*** ./src/js/util/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ $),
/* harmony export */   "$$": () => (/* binding */ $$),
/* harmony export */   "debounce": () => (/* binding */ debounce)
/* harmony export */ });
var $ = function $(selector) {
  var node = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return node.querySelector(selector);
};
var $$ = function $$(selector) {
  var node = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return node.querySelectorAll(selector);
};
var debounce = function debounce(callback, delay) {
  var timerId;
  return function (event) {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(callback, delay, event);
  };
};

/***/ }),

/***/ "./src/js/util/youtubeAPI.js":
/*!***********************************!*\
  !*** ./src/js/util/youtubeAPI.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ fetchYoutubeData)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/js/constants.js");

var DUMMY_YOUTUBE_API_URL = 'https://elastic-goldstine-10f16a.netlify.app/dummy/youtube/v3/search?';
var YOUTUBE_API_URL = 'https://elastic-goldstine-10f16a.netlify.app/youtube/v3/search?';
var WRONG_API_URL = 'https://elastic-goldstine-10f16a.netlify.appppp/search?';

function generateFetchURL(keyword, nextPageToken) {
  var searchParams = new URLSearchParams();
  searchParams.append('part', 'snippet');
  searchParams.append('q', keyword);
  searchParams.append('maxResults', _constants__WEBPACK_IMPORTED_MODULE_0__.MAX_DATA_FETCH_AT_ONCE);

  if (nextPageToken) {
    searchParams.append('pageToken', nextPageToken);
  }

  return YOUTUBE_API_URL + searchParams.toString();
}

function fetchYoutubeData(keyword, nextPageToken) {
  return fetch(generateFetchURL(keyword, nextPageToken)).then(function (response) {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/app.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  padding: 64px 0;\r\n  font-size: 16px;\r\n}\r\n\r\n#app {\r\n  max-width: 1020px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.classroom-container__title {\r\n  text-align: center;\r\n  font-weight: bold;\r\n  line-height: 36px;\r\n  font-size: 24px;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.button {\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n  border: none;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 14px;\r\n  letter-spacing: 1.25px;\r\n}\r\n\r\n.border-radius-left {\r\n  border-radius: 4px 0 0 4px;\r\n}\r\n\r\n.border-radius-right {\r\n  border-radius: 0 4px 4px 0;\r\n}\r\n\r\n.nav__button {\r\n  width: 80px;\r\n  height: 36px;\r\n  background: #f5f5f5;\r\n}\r\n\r\n.nav__button:hover {\r\n  background: #ebebeb;\r\n}\r\n\r\n.nav__button.selected {\r\n  background: rgba(0, 188, 212, 0.12);\r\n}\r\n\r\n.nav__button.selected:hover {\r\n  background: rgba(0, 188, 212, 0.2);\r\n}\r\n\r\n.video-list-button {\r\n  width: 117px;\r\n  border: 1px solid rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.search-button {\r\n  margin-left: auto;\r\n}\r\n\r\n.align-center {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.classroom-container {\r\n  width: 90vw;\r\n  height: 36px;\r\n}\r\n\r\n.video-list {\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template-columns: repeat(1, 1fr);\r\n  gap: 32px 20px;\r\n}\r\n\r\n.video-list.description {\r\n  grid-template-columns: auto;\r\n}\r\n\r\n.video-list.search {\r\n  height: calc(80vh - 250px);\r\n  overflow-y: scroll;\r\n}\r\n\r\n.video-item {\r\n  position: relative;\r\n  width: 240px;\r\n  height: 255px;\r\n  align-self: center;\r\n  justify-self: center;\r\n}\r\n\r\n.video-item__thumbnail {\r\n  width: 100%;\r\n  height: 135px;\r\n}\r\n\r\n.video-item__title {\r\n  font-weight: bold;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  letter-spacing: 0.5px;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  margin: 4px 0;\r\n}\r\n\r\n.video-item__channel-name {\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  letter-spacing: 0.5px;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.video-item__published-date {\r\n  font-size: 12px;\r\n  line-height: 24px;\r\n  letter-spacing: 0.5px;\r\n}\r\n\r\n.video-save-button {\r\n  position: absolute;\r\n  right: 0;\r\n  width: 80px;\r\n  height: 36px;\r\n  background: #f9f9f9;\r\n  margin-top: 4px;\r\n}\r\n\r\n.video-save-button:hover {\r\n  background: #efefef;\r\n}\r\n\r\n.icon-button {\r\n  width: 36px;\r\n  height: 36px;\r\n  background: #f5f5f5;\r\n}\r\n\r\n.icon-button:hover {\r\n  background: #ebebeb;\r\n}\r\n\r\n.icon-button.selected {\r\n  background: rgba(0, 188, 212, 0.12);\r\n}\r\n\r\n.icon-button.selected:hover {\r\n  background: rgba(0, 188, 212, 0.2);\r\n}\r\n\r\n.check-watched-button {\r\n  margin-left: 160px;\r\n}\r\n\r\n@media only screen and (min-width: 400px) {\r\n  .classroom-container {\r\n    width: 368px;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 600px) {\r\n  .classroom-container {\r\n    width: 500px;\r\n  }\r\n  .classroom-container__title {\r\n    font-size: 34px;\r\n    margin-bottom: 56px;\r\n  }\r\n  .video-list {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n  .video-list.search {\r\n    height: 493px;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 960px) {\r\n  .classroom-container {\r\n    width: 760px;\r\n  }\r\n  .video-list {\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 1280px) {\r\n  .classroom-container {\r\n    width: 1020px;\r\n  }\r\n  .video-list {\r\n    grid-template-columns: repeat(4, 1fr);\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/app.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,YAAY;EACZ,qCAAqC;AACvC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,aAAa;EACb,qCAAqC;EACrC,cAAc;AAChB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,0BAA0B;EAC1B,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE;IACE,YAAY;EACd;AACF;;AAEA;EACE;IACE,YAAY;EACd;EACA;IACE,eAAe;IACf,mBAAmB;EACrB;EACA;IACE,qCAAqC;EACvC;EACA;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,YAAY;EACd;EACA;IACE,qCAAqC;EACvC;AACF;;AAEA;EACE;IACE,aAAa;EACf;EACA;IACE,qCAAqC;EACvC;AACF","sourcesContent":["body {\r\n  padding: 64px 0;\r\n  font-size: 16px;\r\n}\r\n\r\n#app {\r\n  max-width: 1020px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.classroom-container__title {\r\n  text-align: center;\r\n  font-weight: bold;\r\n  line-height: 36px;\r\n  font-size: 24px;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.button {\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n  border: none;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 14px;\r\n  letter-spacing: 1.25px;\r\n}\r\n\r\n.border-radius-left {\r\n  border-radius: 4px 0 0 4px;\r\n}\r\n\r\n.border-radius-right {\r\n  border-radius: 0 4px 4px 0;\r\n}\r\n\r\n.nav__button {\r\n  width: 80px;\r\n  height: 36px;\r\n  background: #f5f5f5;\r\n}\r\n\r\n.nav__button:hover {\r\n  background: #ebebeb;\r\n}\r\n\r\n.nav__button.selected {\r\n  background: rgba(0, 188, 212, 0.12);\r\n}\r\n\r\n.nav__button.selected:hover {\r\n  background: rgba(0, 188, 212, 0.2);\r\n}\r\n\r\n.video-list-button {\r\n  width: 117px;\r\n  border: 1px solid rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.search-button {\r\n  margin-left: auto;\r\n}\r\n\r\n.align-center {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.classroom-container {\r\n  width: 90vw;\r\n  height: 36px;\r\n}\r\n\r\n.video-list {\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template-columns: repeat(1, 1fr);\r\n  gap: 32px 20px;\r\n}\r\n\r\n.video-list.description {\r\n  grid-template-columns: auto;\r\n}\r\n\r\n.video-list.search {\r\n  height: calc(80vh - 250px);\r\n  overflow-y: scroll;\r\n}\r\n\r\n.video-item {\r\n  position: relative;\r\n  width: 240px;\r\n  height: 255px;\r\n  align-self: center;\r\n  justify-self: center;\r\n}\r\n\r\n.video-item__thumbnail {\r\n  width: 100%;\r\n  height: 135px;\r\n}\r\n\r\n.video-item__title {\r\n  font-weight: bold;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  letter-spacing: 0.5px;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  margin: 4px 0;\r\n}\r\n\r\n.video-item__channel-name {\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  letter-spacing: 0.5px;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.video-item__published-date {\r\n  font-size: 12px;\r\n  line-height: 24px;\r\n  letter-spacing: 0.5px;\r\n}\r\n\r\n.video-save-button {\r\n  position: absolute;\r\n  right: 0;\r\n  width: 80px;\r\n  height: 36px;\r\n  background: #f9f9f9;\r\n  margin-top: 4px;\r\n}\r\n\r\n.video-save-button:hover {\r\n  background: #efefef;\r\n}\r\n\r\n.icon-button {\r\n  width: 36px;\r\n  height: 36px;\r\n  background: #f5f5f5;\r\n}\r\n\r\n.icon-button:hover {\r\n  background: #ebebeb;\r\n}\r\n\r\n.icon-button.selected {\r\n  background: rgba(0, 188, 212, 0.12);\r\n}\r\n\r\n.icon-button.selected:hover {\r\n  background: rgba(0, 188, 212, 0.2);\r\n}\r\n\r\n.check-watched-button {\r\n  margin-left: 160px;\r\n}\r\n\r\n@media only screen and (min-width: 400px) {\r\n  .classroom-container {\r\n    width: 368px;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 600px) {\r\n  .classroom-container {\r\n    width: 500px;\r\n  }\r\n  .classroom-container__title {\r\n    font-size: 34px;\r\n    margin-bottom: 56px;\r\n  }\r\n  .video-list {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n  .video-list.search {\r\n    height: 493px;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 960px) {\r\n  .classroom-container {\r\n    width: 760px;\r\n  }\r\n  .video-list {\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 1280px) {\r\n  .classroom-container {\r\n    width: 1020px;\r\n  }\r\n  .video-list {\r\n    grid-template-columns: repeat(4, 1fr);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./app.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./modal.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nol,\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAGA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;;EAEE,YAAY;EACZ,mCAAmC;AACrC;;AAEA;;;;EAIE,aAAa;AACf;;AAEA;EACE,aAAa;AACf","sourcesContent":["@import './app.css';\r\n@import './modal.css';\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nol,\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/modal.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".modal-container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.dimmer {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.search-modal {\r\n  position: relative;\r\n  width: 90vw;\r\n  height: 80vh;\r\n  background: #ffffff;\r\n  border: 1px solid rgba(0, 0, 0, 0.12);\r\n  border-radius: 4px;\r\n  padding: 50px 30px 32px 30px;\r\n}\r\n\r\n.search-modal__title {\r\n  text-align: center;\r\n  font-weight: bold;\r\n  font-size: 24px;\r\n  line-height: 36px;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.search-input {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.search-input__keyword {\r\n  width: 60%;\r\n  height: 36px;\r\n  margin-right: 20px;\r\n  padding: 4px 8px;\r\n  border: 1px solid #b4b4b4;\r\n  border-radius: 4px;\r\n}\r\n\r\n.search-input__keyword::placeholder {\r\n  color: #8b8b8b;\r\n  font-size: 16px;\r\n}\r\n\r\n.search-input__search-button {\r\n  width: 72px;\r\n  height: 36px;\r\n  background: #00bcd4;\r\n  color: #ffffff;\r\n}\r\n\r\n.search-result.search-result--no-result {\r\n  height: 493px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.no-result {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.no-result__image {\r\n  width: 190px;\r\n  height: 140px;\r\n  margin-bottom: 32px;\r\n}\r\n\r\n.no-result__description {\r\n  font-size: 16px;\r\n  line-height: 150%;\r\n  text-align: center;\r\n  letter-spacing: 0.5px;\r\n}\r\n\r\n.skeleton {\r\n  width: 240px;\r\n  align-self: center;\r\n  justify-self: center;\r\n}\r\n\r\n.skeleton .image,\r\n.skeleton .line {\r\n  background-image: linear-gradient(90deg, #e0e0e0 0px, #ededed 30px, #e0e0e0 60px);\r\n  animation: refresh 2s infinite ease-out;\r\n}\r\n\r\n.skeleton .image {\r\n  height: 135px;\r\n}\r\n\r\n.skeleton .line {\r\n  height: 24px;\r\n  margin: 6px 0;\r\n}\r\n\r\n.skeleton .line:first-child {\r\n  width: 50%;\r\n}\r\n\r\n.skeleton .line:last-child {\r\n  width: 80%;\r\n}\r\n\r\n@keyframes refresh {\r\n  0% {\r\n    background-position: calc(-100px);\r\n  }\r\n  40%,\r\n  100% {\r\n    background-position: 320px;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 500px) {\r\n  .search-modal {\r\n    width: 448px;\r\n    height: 727px;\r\n  }\r\n  .search-input__keyword {\r\n    width: 280px;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 600px) {\r\n  .search-modal {\r\n    width: 580px;\r\n  }\r\n  .search-modal__title {\r\n    font-size: 34px;\r\n  }\r\n  .search-input__keyword {\r\n    width: 400px;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 960px) {\r\n  .search-modal {\r\n    width: 840px;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 1280px) {\r\n  .search-modal {\r\n    width: 1100px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/modal.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,MAAM;EACN,OAAO;AACT;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,qCAAqC;EACrC,kBAAkB;EAClB,4BAA4B;AAC9B;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;;EAEE,iFAAiF;EACjF,uCAAuC;AACzC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE;IACE,iCAAiC;EACnC;EACA;;IAEE,0BAA0B;EAC5B;AACF;;AAEA;EACE;IACE,YAAY;IACZ,aAAa;EACf;EACA;IACE,YAAY;EACd;AACF;;AAEA;EACE;IACE,YAAY;EACd;EACA;IACE,eAAe;EACjB;EACA;IACE,YAAY;EACd;AACF;;AAEA;EACE;IACE,YAAY;EACd;AACF;;AAEA;EACE;IACE,aAAa;EACf;AACF","sourcesContent":[".modal-container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.dimmer {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.search-modal {\r\n  position: relative;\r\n  width: 90vw;\r\n  height: 80vh;\r\n  background: #ffffff;\r\n  border: 1px solid rgba(0, 0, 0, 0.12);\r\n  border-radius: 4px;\r\n  padding: 50px 30px 32px 30px;\r\n}\r\n\r\n.search-modal__title {\r\n  text-align: center;\r\n  font-weight: bold;\r\n  font-size: 24px;\r\n  line-height: 36px;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.search-input {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.search-input__keyword {\r\n  width: 60%;\r\n  height: 36px;\r\n  margin-right: 20px;\r\n  padding: 4px 8px;\r\n  border: 1px solid #b4b4b4;\r\n  border-radius: 4px;\r\n}\r\n\r\n.search-input__keyword::placeholder {\r\n  color: #8b8b8b;\r\n  font-size: 16px;\r\n}\r\n\r\n.search-input__search-button {\r\n  width: 72px;\r\n  height: 36px;\r\n  background: #00bcd4;\r\n  color: #ffffff;\r\n}\r\n\r\n.search-result.search-result--no-result {\r\n  height: 493px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.no-result {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.no-result__image {\r\n  width: 190px;\r\n  height: 140px;\r\n  margin-bottom: 32px;\r\n}\r\n\r\n.no-result__description {\r\n  font-size: 16px;\r\n  line-height: 150%;\r\n  text-align: center;\r\n  letter-spacing: 0.5px;\r\n}\r\n\r\n.skeleton {\r\n  width: 240px;\r\n  align-self: center;\r\n  justify-self: center;\r\n}\r\n\r\n.skeleton .image,\r\n.skeleton .line {\r\n  background-image: linear-gradient(90deg, #e0e0e0 0px, #ededed 30px, #e0e0e0 60px);\r\n  animation: refresh 2s infinite ease-out;\r\n}\r\n\r\n.skeleton .image {\r\n  height: 135px;\r\n}\r\n\r\n.skeleton .line {\r\n  height: 24px;\r\n  margin: 6px 0;\r\n}\r\n\r\n.skeleton .line:first-child {\r\n  width: 50%;\r\n}\r\n\r\n.skeleton .line:last-child {\r\n  width: 80%;\r\n}\r\n\r\n@keyframes refresh {\r\n  0% {\r\n    background-position: calc(-100px);\r\n  }\r\n  40%,\r\n  100% {\r\n    background-position: 320px;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 500px) {\r\n  .search-modal {\r\n    width: 448px;\r\n    height: 727px;\r\n  }\r\n  .search-input__keyword {\r\n    width: 280px;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 600px) {\r\n  .search-modal {\r\n    width: 580px;\r\n  }\r\n  .search-modal__title {\r\n    font-size: 34px;\r\n  }\r\n  .search-input__keyword {\r\n    width: 400px;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 960px) {\r\n  .search-modal {\r\n    width: 840px;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 1280px) {\r\n  .search-modal {\r\n    width: 1100px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/images/not_found.png":
/*!*****************************************!*\
  !*** ./src/assets/images/not_found.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "not_found.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index */ "./src/css/index.css");
/* harmony import */ var _assets_images_not_found_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/not_found.png */ "./src/assets/images/not_found.png");
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/app */ "./src/js/app.js");



})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map