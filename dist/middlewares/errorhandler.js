"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _log4js = _interopRequireDefault(require("log4js"));

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @description 容错机制中间件
 * @author Ranjay
 */
_log4js.default.configure({
  // log输出文件配置
  appenders: {
    cheese: {
      type: 'file',
      filename: './logs/jwslog.log'
    }
  },
  // 错误类别配置
  categories: {
    default: {
      appenders: ['cheese'],
      level: 'error'
    }
  }
});

const logger = _log4js.default.getLogger('cheese');
/**
 * 容错处理对象
 * @type {Object}
 */


const errorHandler = {
  /**
   * 错误处理句柄
   * @param  {Object} app koa2上下文
   */
  error(app) {
    // 配合中间件迭代器进行容错处理
    app.use(async (ctx, next) => {
      try {
        await next();
      } catch (err) {
        // node错误日志
        logger.error(err);
        console.log(err);
        ctx.status = err.status || 500;
        ctx.body = 500;
      }
    });
    app.use(async (ctx, next) => {
      await next();
      if (ctx.status !== 404) return;
      ctx.status = 404;
      ctx.body = await ctx.render('404');
    });
  }

};
var _default = errorHandler;
exports.default = _default;