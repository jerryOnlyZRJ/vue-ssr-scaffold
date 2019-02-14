"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vueServerRenderer = require("vue-server-renderer");

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _lruCache = _interopRequireDefault(require("lru-cache"));

var _jsdom = require("jsdom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const dom = new _jsdom.JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost'
});
global.window = dom.window;
global.document = window.document;
global.navigator = window.navigator;

class IndexService {
  constructor() {}

  async init(ctx) {
    const serverBundle = require(_path.default.join(__dirname, '../assets/vue-ssr-server-bundle.json'));

    const clientManifest = require(_path.default.join(__dirname, '../assets/vue-ssr-client-manifest.json'));

    const template = _fs.default.readFileSync(_path.default.join(__dirname, '../assets/index.html'), 'utf-8');

    const context = {
      url: ctx.url
    };
    const ssrrender = this.createRenderer(serverBundle, template, clientManifest);

    function createSSRStreamPromise(context) {
      return new Promise((resolve, reject) => {
        if (!ssrrender) {
          return ctx.body = 'waiting for compilation.. refresh in a moment.';
        }

        const ssrStream = ssrrender.renderToStream(context);
        ctx.status = 200;
        ctx.type = 'html';
        ssrStream.on('error', err => {
          reject(err);
        }).pipe(ctx.res);
      });
    }

    await createSSRStreamPromise(context);
  }

  createRenderer(serverbundle, template, clientManifest) {
    return (0, _vueServerRenderer.createBundleRenderer)(serverbundle, {
      cache: (0, _lruCache.default)({
        max: 10000
      }),
      runInNewContext: false,
      template,
      clientManifest
    });
  }

}

exports.default = IndexService;