(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("handsontable"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["handsontable", "react"], factory);
	else if(typeof exports === 'object')
		exports["HotTable"] = factory(require("handsontable"), require("react"));
	else
		root["HotTable"] = factory(root["Handsontable"], root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************************************************************************************************!*\
  !*** external {"root":"Handsontable","commonjs2":"handsontable","commonjs":"handsontable","amd":"handsontable","umd":"handsontable"} ***!
  \***************************************************************************************************************************************/
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_0__;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJIYW5kc29udGFibGVcIixcImNvbW1vbmpzMlwiOlwiaGFuZHNvbnRhYmxlXCIsXCJjb21tb25qc1wiOlwiaGFuZHNvbnRhYmxlXCIsXCJhbWRcIjpcImhhbmRzb250YWJsZVwiLFwidW1kXCI6XCJoYW5kc29udGFibGVcIn0/MmZlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIkhhbmRzb250YWJsZVwiLFwiY29tbW9uanMyXCI6XCJoYW5kc29udGFibGVcIixcImNvbW1vbmpzXCI6XCJoYW5kc29udGFibGVcIixcImFtZFwiOlwiaGFuZHNvbnRhYmxlXCIsXCJ1bWRcIjpcImhhbmRzb250YWJsZVwifVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!************************************!*\
  !*** ./src/react-handsontable.jsx ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 3);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _handsontable = __webpack_require__(/*! handsontable */ 0);\n\nvar _handsontable2 = _interopRequireDefault(_handsontable);\n\nvar _settingsMapper = __webpack_require__(/*! ./settingsMapper */ 2);\n\nvar _settingsMapper2 = _interopRequireDefault(_settingsMapper);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/**\r\n * A Handsontable-ReactJS wrapper.\r\n *\r\n * To implement, use the `HotTable` tag with properties corresponding to Handsontable options.\r\n * For example:\r\n *\r\n * ```js\r\n * <HotTable root=\"hot\" data={dataObject} contextMenu={true} colHeaders={true} width={600} height={300} stretchH=\"all\" />\r\n *\r\n * // is analogous to\r\n * let hot = new Handsontable(document.getElementById('hot'), {\r\n *    data: dataObject,\r\n *    contextMenu: true,\r\n *    colHeaders: true,\r\n *    width: 600\r\n *    height: 300\r\n * });\r\n *\r\n * ```\r\n *\r\n * @class HotTable\r\n */\nvar HotTable = function (_React$Component) {\n  _inherits(HotTable, _React$Component);\n\n  function HotTable() {\n    _classCallCheck(this, HotTable);\n\n    var _this = _possibleConstructorReturn(this, (HotTable.__proto__ || Object.getPrototypeOf(HotTable)).call(this));\n\n    _this.hotInstance = null;\n    _this.settingsMapper = new _settingsMapper2.default();\n    _this.root = null;\n    return _this;\n  }\n\n  /**\r\n   * Initialize Handsontable after the component has mounted.\r\n   */\n\n\n  _createClass(HotTable, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var newSettings = this.settingsMapper.getSettings(this.props);\n      this.hotInstance = new _handsontable2.default(document.getElementById(this.root), newSettings);\n    }\n\n    /**\r\n     * Call the `updateHot` method and prevent the component from re-rendering the instance.\r\n     *\r\n     * @param {Object} nextProps\r\n     * @param {Object} nextState\r\n     * @returns {Boolean}\r\n     */\n\n  }, {\n    key: 'shouldComponentUpdate',\n    value: function shouldComponentUpdate(nextProps, nextState) {\n      this.updateHot(this.settingsMapper.getSettings(nextProps));\n\n      return false;\n    }\n\n    /**\r\n     * Destroy the Handsontable instance when the parent component unmounts.\r\n     */\n\n  }, {\n    key: 'componentWillUnmount',\n    value: function componentWillUnmount() {\n      this.hotInstance.destroy();\n    }\n\n    /**\r\n     * Render the table.\r\n     *\r\n     * @returns {XML}\r\n     */\n\n  }, {\n    key: 'render',\n    value: function render() {\n      this.root = this.props.root || 'hot' + new Date().getTime();\n      return _react2.default.createElement('div', { id: this.root });\n    }\n\n    /**\r\n     * Call the `updateSettings` method for the Handsontable instance.\r\n     * @param newSettings\r\n     */\n\n  }, {\n    key: 'updateHot',\n    value: function updateHot(newSettings) {\n      this.hotInstance.updateSettings(newSettings);\n    }\n  }]);\n\n  return HotTable;\n}(_react2.default.Component);\n\nexports.default = HotTable;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvcmVhY3QtaGFuZHNvbnRhYmxlLmpzeD85MWFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIYW5kc29udGFibGUgZnJvbSAnaGFuZHNvbnRhYmxlJztcclxuaW1wb3J0IFNldHRpbmdzTWFwcGVyIGZyb20gJy4vc2V0dGluZ3NNYXBwZXInO1xyXG5cclxuLyoqXHJcbiAqIEEgSGFuZHNvbnRhYmxlLVJlYWN0SlMgd3JhcHBlci5cclxuICpcclxuICogVG8gaW1wbGVtZW50LCB1c2UgdGhlIGBIb3RUYWJsZWAgdGFnIHdpdGggcHJvcGVydGllcyBjb3JyZXNwb25kaW5nIHRvIEhhbmRzb250YWJsZSBvcHRpb25zLlxyXG4gKiBGb3IgZXhhbXBsZTpcclxuICpcclxuICogYGBganNcclxuICogPEhvdFRhYmxlIHJvb3Q9XCJob3RcIiBkYXRhPXtkYXRhT2JqZWN0fSBjb250ZXh0TWVudT17dHJ1ZX0gY29sSGVhZGVycz17dHJ1ZX0gd2lkdGg9ezYwMH0gaGVpZ2h0PXszMDB9IHN0cmV0Y2hIPVwiYWxsXCIgLz5cclxuICpcclxuICogLy8gaXMgYW5hbG9nb3VzIHRvXHJcbiAqIGxldCBob3QgPSBuZXcgSGFuZHNvbnRhYmxlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob3QnKSwge1xyXG4gKiAgICBkYXRhOiBkYXRhT2JqZWN0LFxyXG4gKiAgICBjb250ZXh0TWVudTogdHJ1ZSxcclxuICogICAgY29sSGVhZGVyczogdHJ1ZSxcclxuICogICAgd2lkdGg6IDYwMFxyXG4gKiAgICBoZWlnaHQ6IDMwMFxyXG4gKiB9KTtcclxuICpcclxuICogYGBgXHJcbiAqXHJcbiAqIEBjbGFzcyBIb3RUYWJsZVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG90VGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLmhvdEluc3RhbmNlID0gbnVsbDtcclxuICAgIHRoaXMuc2V0dGluZ3NNYXBwZXIgPSBuZXcgU2V0dGluZ3NNYXBwZXIoKTtcclxuICAgIHRoaXMucm9vdCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbml0aWFsaXplIEhhbmRzb250YWJsZSBhZnRlciB0aGUgY29tcG9uZW50IGhhcyBtb3VudGVkLlxyXG4gICAqL1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc3QgbmV3U2V0dGluZ3MgPSB0aGlzLnNldHRpbmdzTWFwcGVyLmdldFNldHRpbmdzKHRoaXMucHJvcHMpO1xyXG4gICAgdGhpcy5ob3RJbnN0YW5jZSA9IG5ldyBIYW5kc29udGFibGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5yb290KSwgbmV3U2V0dGluZ3MpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbCB0aGUgYHVwZGF0ZUhvdGAgbWV0aG9kIGFuZCBwcmV2ZW50IHRoZSBjb21wb25lbnQgZnJvbSByZS1yZW5kZXJpbmcgdGhlIGluc3RhbmNlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IG5leHRQcm9wc1xyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBuZXh0U3RhdGVcclxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cclxuICAgKi9cclxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcclxuICAgIHRoaXMudXBkYXRlSG90KHRoaXMuc2V0dGluZ3NNYXBwZXIuZ2V0U2V0dGluZ3MobmV4dFByb3BzKSk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVzdHJveSB0aGUgSGFuZHNvbnRhYmxlIGluc3RhbmNlIHdoZW4gdGhlIHBhcmVudCBjb21wb25lbnQgdW5tb3VudHMuXHJcbiAgICovXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLmhvdEluc3RhbmNlLmRlc3Ryb3koKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbmRlciB0aGUgdGFibGUuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7WE1MfVxyXG4gICAqL1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHRoaXMucm9vdCA9IHRoaXMucHJvcHMucm9vdCB8fCAnaG90JyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgcmV0dXJuIDxkaXYgaWQ9e3RoaXMucm9vdH0+PC9kaXY+XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxsIHRoZSBgdXBkYXRlU2V0dGluZ3NgIG1ldGhvZCBmb3IgdGhlIEhhbmRzb250YWJsZSBpbnN0YW5jZS5cclxuICAgKiBAcGFyYW0gbmV3U2V0dGluZ3NcclxuICAgKi9cclxuICB1cGRhdGVIb3QobmV3U2V0dGluZ3MpIHtcclxuICAgIHRoaXMuaG90SW5zdGFuY2UudXBkYXRlU2V0dGluZ3MobmV3U2V0dGluZ3MpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JlYWN0LWhhbmRzb250YWJsZS5qc3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUxBO0FBTUE7QUFDQTtBQUNBOzs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBSUE7QUFDQTtBQUNBOzs7O0FBckRBO0FBQ0E7QUFEQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 2 */
/* unknown exports provided */
/* all exports used */
/*!*******************************!*\
  !*** ./src/settingsMapper.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _handsontable = __webpack_require__(/*! handsontable */ 0);\n\nvar _handsontable2 = _interopRequireDefault(_handsontable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar SettingsMapper = function () {\n  function SettingsMapper() {\n    _classCallCheck(this, SettingsMapper);\n\n    this.registeredHooks = _handsontable2.default.hooks.getRegistered();\n  }\n\n  /**\r\n   * Parse component settings into Handosntable-compatible settings.\r\n   *\r\n   * @param {Object} properties Object containing properties from the HotTable object.\r\n   * @returns {Object} Handsontable-compatible settings object.\r\n   */\n\n\n  _createClass(SettingsMapper, [{\n    key: 'getSettings',\n    value: function getSettings(properties) {\n      var newSettings = {};\n\n      if (properties.settings) {\n        var settings = properties.settings;\n        for (var key in settings) {\n          if (settings.hasOwnProperty(key)) {\n            newSettings[this.trimHookPrefix(key)] = settings[key];\n          }\n        }\n      }\n\n      for (var _key in properties) {\n        if (_key != 'settings' && properties.hasOwnProperty(_key)) {\n          newSettings[this.trimHookPrefix(_key)] = properties[_key];\n        }\n      }\n\n      return newSettings;\n    }\n\n    /**\r\n     * Trim the \"on\" hook prefix.\r\n     *\r\n     * @param {String} prop Settings property.\r\n     * @returns {String} Handsontable-compatible, prefix-less property name.\r\n     */\n\n  }, {\n    key: 'trimHookPrefix',\n    value: function trimHookPrefix(prop) {\n      if (prop.indexOf('on') === 0) {\n        var hookName = prop.charAt(2).toLowerCase() + prop.slice(3, prop.length);\n        if (this.registeredHooks.indexOf(hookName)) {\n          return hookName;\n        }\n      }\n\n      // returns the string anyway, when we're sure all the hooks are registered, might be changed\n      return prop;\n    }\n  }]);\n\n  return SettingsMapper;\n}();\n\nexports.default = SettingsMapper;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc2V0dGluZ3NNYXBwZXIuanM/ZTQ2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGFuZHNvbnRhYmxlIGZyb20gJ2hhbmRzb250YWJsZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nc01hcHBlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnJlZ2lzdGVyZWRIb29rcyA9IEhhbmRzb250YWJsZS5ob29rcy5nZXRSZWdpc3RlcmVkKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQYXJzZSBjb21wb25lbnQgc2V0dGluZ3MgaW50byBIYW5kb3NudGFibGUtY29tcGF0aWJsZSBzZXR0aW5ncy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wZXJ0aWVzIE9iamVjdCBjb250YWluaW5nIHByb3BlcnRpZXMgZnJvbSB0aGUgSG90VGFibGUgb2JqZWN0LlxyXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IEhhbmRzb250YWJsZS1jb21wYXRpYmxlIHNldHRpbmdzIG9iamVjdC5cclxuICAgKi9cclxuICBnZXRTZXR0aW5ncyhwcm9wZXJ0aWVzKSB7XHJcbiAgICBsZXQgbmV3U2V0dGluZ3MgPSB7fTtcclxuXHJcbiAgICBpZihwcm9wZXJ0aWVzLnNldHRpbmdzKSB7XHJcbiAgICAgIGxldCBzZXR0aW5ncyA9IHByb3BlcnRpZXMuc2V0dGluZ3M7XHJcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHNldHRpbmdzKSB7XHJcbiAgICAgICAgaWYgKHNldHRpbmdzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgIG5ld1NldHRpbmdzW3RoaXMudHJpbUhvb2tQcmVmaXgoa2V5KV0gPSBzZXR0aW5nc1trZXldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIHByb3BlcnRpZXMpIHtcclxuICAgICAgaWYgKGtleSAhPSAnc2V0dGluZ3MnICYmIHByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgIG5ld1NldHRpbmdzW3RoaXMudHJpbUhvb2tQcmVmaXgoa2V5KV0gPSBwcm9wZXJ0aWVzW2tleV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3U2V0dGluZ3M7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcmltIHRoZSBcIm9uXCIgaG9vayBwcmVmaXguXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcCBTZXR0aW5ncyBwcm9wZXJ0eS5cclxuICAgKiBAcmV0dXJucyB7U3RyaW5nfSBIYW5kc29udGFibGUtY29tcGF0aWJsZSwgcHJlZml4LWxlc3MgcHJvcGVydHkgbmFtZS5cclxuICAgKi9cclxuICB0cmltSG9va1ByZWZpeChwcm9wKSB7XHJcbiAgICBpZiAocHJvcC5pbmRleE9mKCdvbicpID09PSAwKSB7XHJcbiAgICAgIGxldCBob29rTmFtZSA9IHByb3AuY2hhckF0KDIpLnRvTG93ZXJDYXNlKCkgKyBwcm9wLnNsaWNlKDMsIHByb3AubGVuZ3RoKTtcclxuICAgICAgaWYgKHRoaXMucmVnaXN0ZXJlZEhvb2tzLmluZGV4T2YoaG9va05hbWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIGhvb2tOYW1lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmV0dXJucyB0aGUgc3RyaW5nIGFueXdheSwgd2hlbiB3ZSdyZSBzdXJlIGFsbCB0aGUgaG9va3MgYXJlIHJlZ2lzdGVyZWQsIG1pZ2h0IGJlIGNoYW5nZWRcclxuICAgIHJldHVybiBwcm9wO1xyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc2V0dGluZ3NNYXBwZXIuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBaERBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 3 */
/* unknown exports provided */
/* all exports used */
/*!****************************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react","umd":"react"} ***!
  \****************************************************************************************************/
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_3__;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCIsXCJ1bWRcIjpcInJlYWN0XCJ9P2Q0MGIiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCIsXCJ1bWRcIjpcInJlYWN0XCJ9XG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 4 */
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./react-handsontable.jsx */ 1).default;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vcmVhY3QtaGFuZHNvbnRhYmxlLmpzeCcpLmRlZmF1bHQ7XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);
});