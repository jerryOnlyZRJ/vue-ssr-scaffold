"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @description node层配置文档
 * @author Ranjay
 */

/**
 * node配置对象
 * @type {Object}
 */
let CONFIG = {
  'env': process.env.NODE_ENV,
  //"development", "production"
  '404Path': _path.default.join(__dirname, '../views/common/404.html'),
  'viewsPath': _path.default.join(__dirname, '../views'),
  'assetsPath': _path.default.join(__dirname, '../assets'),
  'port': 8081
};
var _default = CONFIG;
exports.default = _default;