"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _koa = _interopRequireDefault(require("koa"));

var _koaStatic = _interopRequireDefault(require("koa-static"));

var _config = _interopRequireDefault(require("./config"));

var _errorhandler = _interopRequireDefault(require("./middlewares/errorhandler"));

var _koaSwig = _interopRequireDefault(require("koa-swig"));

var _co = _interopRequireDefault(require("co"));

var _awilix = require("awilix");

var _awilixKoa = require("awilix-koa");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @description node层启动文件
 * @author Ranjay
 */
const app = new _koa.default(); // 创建IoC容器

const container = (0, _awilix.createContainer)(); //IoC实现，保证每一次的请求都是一个新实例

app.use((0, _awilixKoa.scopePerRequest)(container)); // 装载所有的models并将其注入到routers

container.loadModules([__dirname + '/services/*.js'], {
  formatName: 'camelCase',
  resolverOptions: {
    lifetime: _awilix.Lifetime.SCOPED
  }
}); // 容错处理必须放在路由分配之前

_errorhandler.default.error(app); //注册所有路由


app.use((0, _awilixKoa.loadControllers)(__dirname + '/routers/*.js', {
  cwd: __dirname
})); // 配置静态资源

app.use((0, _koaStatic.default)(_config.default.assetsPath)); // 配置模版引擎

app.context.render = _co.default.wrap((0, _koaSwig.default)({
  root: _config.default.viewsPath,
  autoescape: true,
  varControls: ['[[', ']]'],
  //自定义模板匹配
  cache: 'memory',
  // disable, set to false (配置缓存)
  ext: 'html',
  // 匹配模版类型
  writeBody: false
})); // 端口监听

app.listen(_config.default.port, () => {
  console.log(`website is starting at port ${_config.default.port}`);
}); //导出koa2实例用于api测试

var _default = app;
exports.default = _default;