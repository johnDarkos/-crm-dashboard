// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"i4syP":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "496e5bc13052eed7";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"9f5IL":[function(require,module,exports,__globalThis) {
var _routerJs = require("./router/router.js");
var _header = require("./components/header/header");
const app = ()=>{
    window.addEventListener('load', ()=>{
        (0, _header.initHeader)();
        (0, _routerJs.initRouter)();
    });
};
app();

},{"./router/router.js":"cPyZQ","./components/header/header":"5Z1j3"}],"cPyZQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter);
var _homepageJs = require("./pages/home/homepage.js");
var _aboutJs = require("./pages/about/about.js");
var _signupJs = require("./pages/auth/signUp/signup.js");
var _signinJs = require("./pages/auth/signIn/signin.js");
var _userPageJs = require("./pages/userpage/userPage.js");
var _headerJs = require("../components/header/header.js");
var _authServiceJs = require("../services/localStorage/authService.js");
const router = {
    home: ()=>(0, _homepageJs.homePage)(),
    about: ()=>(0, _aboutJs.aboutPage)(),
    docs: ()=>{
        return {
            html: `<h1>Docs</h1>`,
            init: null
        };
    },
    userPage: ()=>(0, _userPageJs.userPage)(),
    register: ()=>(0, _signupJs.signup)(),
    login: ()=>(0, _signinJs.signin)(),
    404: ()=>{
        return {
            html: `<h1 style="color: red; text-align: center; margin-top: 100px">PAGE NOT FOUND!</h1>`,
            init: null
        };
    }
};
const renderRoute = ()=>{
    const path = window.location.hash.slice(2);
    console.log(path);
    if (!path) return 'home';
    return router[path] ? path : '404';
};
const handlechangeRoute = (path)=>{
    const isPrivate = path === 'userPage';
    if (isPrivate && !(0, _authServiceJs.isAuthenticated)()) {
        window.location.hash = '#/login';
        return router['login']();
    }
    return router[path] ? router[path]() : router['404']();
};
const initRouter = ()=>{
    const updateContent = ()=>{
        const routeName = renderRoute();
        console.log(routeName);
        const app = document.getElementById('app');
        if (app) {
            const routeResult = handlechangeRoute(routeName);
            // Поддержка вариантов результата маршрута:
            // 1) { html, init }
            // 2) { node, init }
            // 3) DOM Node
            // 4) строка (html)
            if (routeResult && typeof routeResult === 'object' && 'html' in routeResult) {
                app.innerHTML = routeResult.html;
                if (typeof routeResult.init === 'function') routeResult.init();
            } else if (routeResult && typeof routeResult === 'object' && 'node' in routeResult) {
                app.replaceChildren();
                if (routeResult.node instanceof Node) app.append(routeResult.node);
                if (typeof routeResult.init === 'function') routeResult.init();
            } else if (routeResult instanceof Node) {
                app.replaceChildren();
                app.append(routeResult);
            } else app.innerHTML = routeResult;
            // Управление видимостью основного header
            if (routeName === 'userPage') {
                const existingHeader = document.querySelector('header.header');
                if (existingHeader) existingHeader.remove();
            } else // Идемпотентно создаем header, если его удалили ранее
            (0, _headerJs.initHeader)();
        } else console.error("\u042D\u043B\u0435\u043C\u0435\u043D\u0442 #app \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D");
    };
    window.addEventListener('load', updateContent);
    window.addEventListener('hashchange', updateContent);
    updateContent();
};

},{"./pages/home/homepage.js":"85sRH","./pages/about/about.js":"50P20","./pages/auth/signUp/signup.js":"k2S0f","./pages/auth/signIn/signin.js":"gbJqQ","./pages/userpage/userPage.js":"3vBNX","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","../services/localStorage/authService.js":"clYsr","../components/header/header.js":"5Z1j3"}],"85sRH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "homePage", ()=>homePage);
var _homepageCss = require("./homepage.css");
var _homepageCssDefault = parcelHelpers.interopDefault(_homepageCss);
const homePage = ()=>{
    const container = document.createElement('div');
    container.classList.add('home_container');
    const logo = document.createElement('div');
    logo.classList.add('logo');
    logo.textContent = "\uD83D\uDE80";
    const h1 = document.createElement('h1');
    h1.textContent = "\u041C\u044B \u0433\u043E\u0442\u043E\u0432\u0438\u043C \u0447\u0442\u043E-\u0442\u043E \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0435";
    const p = document.createElement('p');
    p.textContent = "\u041D\u0430\u0448 \u0441\u0430\u0439\u0442 \u0441\u043A\u043E\u0440\u043E \u043E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F. \u041F\u043E\u0434\u043F\u0438\u0448\u0438\u0442\u0435\u0441\u044C, \u0447\u0442\u043E\u0431\u044B \u043F\u0435\u0440\u0432\u044B\u043C\u0438 \u0443\u0437\u043D\u0430\u0442\u044C \u043E \u0437\u0430\u043F\u0443\u0441\u043A\u0435 \u0438 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u044D\u043A\u0441\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u044B\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F.";
    const countdown = document.createElement('div');
    countdown.classList.add('countdown');
    const units = [
        {
            num: '15',
            label: "\u0434\u043D\u0435\u0439"
        },
        {
            num: '08',
            label: "\u0447\u0430\u0441\u043E\u0432"
        },
        {
            num: '42',
            label: "\u043C\u0438\u043D\u0443\u0442"
        },
        {
            num: '18',
            label: "\u0441\u0435\u043A\u0443\u043D\u0434"
        }
    ];
    const frag = document.createDocumentFragment();
    units.forEach(({ num, label })=>{
        const unit = document.createElement('div');
        unit.classList.add('time-unit');
        const spanNum = document.createElement('span');
        spanNum.classList.add('time-number');
        spanNum.textContent = num;
        const spanLabel = document.createElement('span');
        spanLabel.classList.add('time-label');
        spanLabel.textContent = label;
        unit.append(spanNum, spanLabel);
        frag.append(unit);
    });
    countdown.append(frag);
    const subscribe = document.createElement('div');
    subscribe.classList.add('subscribe');
    const input = document.createElement('input');
    input.type = 'email';
    input.classList.add('email-input');
    input.placeholder = "\u0412\u0430\u0448 email";
    const btn = document.createElement('button');
    btn.classList.add('subscribe-btn');
    btn.textContent = "\u0423\u0432\u0435\u0434\u043E\u043C\u0438\u0442\u044C \u043C\u0435\u043D\u044F";
    subscribe.append(input, btn);
    container.append(logo, h1, p, countdown, subscribe);
    return container;
};

},{"./homepage.css":"141dh","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"141dh":[function() {},{}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"50P20":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "aboutPage", ()=>aboutPage);
var _aboutCss = require("./about.css");
var _aboutCssDefault = parcelHelpers.interopDefault(_aboutCss);
const aboutPage = ()=>{
    const container = document.createElement('div');
    container.classList.add('container');
    const main = document.createElement('main');
    main.classList.add('main-content');
    const hero = document.createElement('div');
    hero.classList.add('hero-section');
    const h1 = document.createElement('h1');
    h1.classList.add('main-title');
    h1.textContent = "\u041E \u043D\u0430\u0448\u0435\u0439 CRM \u0441\u0438\u0441\u0442\u0435\u043C\u0435";
    const subtitle = document.createElement('p');
    subtitle.classList.add('subtitle');
    subtitle.textContent = "\u0420\u0435\u0432\u043E\u043B\u044E\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043F\u043E\u0434\u0445\u043E\u0434 \u043A \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044E \u0432\u0437\u0430\u0438\u043C\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F\u043C\u0438 \u0441 \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C\u0438";
    hero.append(h1, subtitle);
    const content = document.createElement('div');
    content.classList.add('content-section');
    const mission = document.createElement('div');
    mission.classList.add('mission-card');
    const icon = document.createElement('div');
    icon.classList.add('icon');
    icon.textContent = "\uD83C\uDFAF";
    const h2 = document.createElement('h2');
    h2.textContent = "\u041D\u0430\u0448\u0430 \u043C\u0438\u0441\u0441\u0438\u044F";
    const p = document.createElement('p');
    p.textContent = "\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u0438\u043C\u0438 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F\u043C\u0438 \u043F\u0440\u043E\u0441\u0442\u044B\u043C, \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u044B\u043C \u0438 \u0438\u043D\u0442\u0443\u0438\u0442\u0438\u0432\u043D\u043E \u043F\u043E\u043D\u044F\u0442\u043D\u044B\u043C \u0434\u043B\u044F \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u043B\u044E\u0431\u043E\u0433\u043E \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0430.";
    mission.append(icon, h2, p);
    const grid = document.createElement('div');
    grid.classList.add('features-grid');
    const features = [
        {
            emoji: "\uD83D\uDE80",
            title: "\u0418\u043D\u043D\u043E\u0432\u0430\u0446\u0438\u0438",
            text: "\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0438 \u043F\u0435\u0440\u0435\u0434\u043E\u0432\u044B\u0435 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438 \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 CRM"
        },
        {
            emoji: "\uD83D\uDD12",
            title: "\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C",
            text: "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0437\u0430\u0449\u0438\u0442\u0430 \u0432\u0430\u0448\u0438\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438"
        },
        {
            emoji: "\uD83D\uDD04",
            title: "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044F",
            text: "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u0443\u0439\u0442\u0435 \u0440\u0443\u0442\u0438\u043D\u043D\u044B\u0435 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u044B \u0438 \u0441\u043E\u0441\u0440\u0435\u0434\u043E\u0442\u043E\u0447\u044C\u0442\u0435\u0441\u044C \u043D\u0430 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0438 \u0431\u0438\u0437\u043D\u0435\u0441\u0430"
        },
        {
            emoji: "\uD83D\uDCC8",
            title: "\u0410\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430",
            text: "\u0413\u043B\u0443\u0431\u043E\u043A\u0430\u044F \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430 \u0434\u043B\u044F \u043F\u0440\u0438\u043D\u044F\u0442\u0438\u044F \u043E\u0431\u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0431\u0438\u0437\u043D\u0435\u0441-\u0440\u0435\u0448\u0435\u043D\u0438\u0439"
        }
    ];
    const gridFrag = document.createDocumentFragment();
    features.forEach(({ emoji, title, text })=>{
        const card = document.createElement('div');
        card.classList.add('feature-card');
        const ic = document.createElement('div');
        ic.classList.add('feature-icon');
        ic.textContent = emoji;
        const h3 = document.createElement('h3');
        h3.textContent = title;
        const tp = document.createElement('p');
        tp.textContent = text;
        card.append(ic, h3, tp);
        gridFrag.append(card);
    });
    grid.append(gridFrag);
    const team = document.createElement('div');
    team.classList.add('team-preview');
    const th = document.createElement('h2');
    th.textContent = "\u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430";
    const tp2 = document.createElement('p');
    tp2.textContent = "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044B \u0441 \u043C\u043D\u043E\u0433\u043E\u043B\u0435\u0442\u043D\u0438\u043C \u043E\u043F\u044B\u0442\u043E\u043C \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435 CRM \u0440\u0435\u0448\u0435\u043D\u0438\u0439, \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u0435 \u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u043C\u0438.";
    const members = document.createElement('div');
    members.classList.add('team-members');
    const memberData = [
        {
            avatar: "\uD83D\uDC68\u200D\uD83D\uDCBC",
            name: "\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440 \u0413\u0435\u0440\u0430\u0441\u0438\u043C\u043E\u0432",
            role: "CEO & \u041E\u0441\u043D\u043E\u0432\u0430\u0442\u0435\u043B\u044C"
        },
        {
            avatar: "\uD83D\uDC69\u200D\uD83D\uDCBB",
            name: "\u0414\u0438\u0430\u043D\u0430 \u0413\u0435\u0440\u0430\u0441\u0438\u043C\u043E\u0432\u0430",
            role: "\u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440"
        }
    ];
    const memFrag = document.createDocumentFragment();
    memberData.forEach(({ avatar, name, role })=>{
        const m = document.createElement('div');
        m.classList.add('team-member');
        const a = document.createElement('div');
        a.classList.add('member-avatar');
        a.textContent = avatar;
        const info = document.createElement('div');
        info.classList.add('member-info');
        const h4 = document.createElement('h4');
        h4.textContent = name;
        const rp = document.createElement('p');
        rp.textContent = role;
        info.append(h4, rp);
        m.append(a, info);
        memFrag.append(m);
    });
    members.append(memFrag);
    team.append(th, tp2, members);
    content.append(mission, grid, team);
    const cta = document.createElement('div');
    cta.classList.add('cta-section');
    const ctaH2 = document.createElement('h2');
    ctaH2.textContent = "\u0413\u043E\u0442\u043E\u0432\u044B \u043D\u0430\u0447\u0430\u0442\u044C?";
    const ctaP = document.createElement('p');
    ctaP.textContent = "\u041F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u044F\u0439\u0442\u0435\u0441\u044C \u043A \u0442\u044B\u0441\u044F\u0447\u0430\u043C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0443\u0436\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 \u043D\u0430\u0448\u0443 CRM \u0441\u0438\u0441\u0442\u0435\u043C\u0443";
    const ctaBtn = document.createElement('button');
    ctaBtn.classList.add('cta-button');
    ctaBtn.textContent = "\u041F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E";
    cta.append(ctaH2, ctaP, ctaBtn);
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    const fp = document.createElement('p');
    fp.innerHTML = "&copy; 2024 CRM \u0421\u0438\u0441\u0442\u0435\u043C\u0430. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B.";
    footer.append(fp);
    main.append(hero, content, cta);
    container.append(main, footer);
    return container;
};

},{"./about.css":"8k2su","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8k2su":[function() {},{}],"k2S0f":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "signup", ()=>signup);
var _signUpTemplateJs = require("./signUpTemplate.js");
var _initSignUpFormJs = require("./initSignUpForm.js");
var _localStorageApiJs = require("../../../../services/localStorage/localStorageApi.js");
var _authServiceJs = require("../../../../services/localStorage/authService.js");
var _stateAppJs = require("../../../../storage/stateApp.js");
var _userJs = require("../../../../models/user.js");
const onSubmit = (event)=>{
    event.preventDefault();
    const { email } = (0, _localStorageApiJs.getLocalStorage)();
    if (email === event.target.email.value) {
        alert("\u0412\u044B \u0443\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u044B");
        return;
    }
    const user = new (0, _userJs.User)({
        email: event.target.email.value,
        name: event.target.fullName.value,
        avatar: null,
        lastLogin: new Date(),
        role: 'user',
        permissions: []
    });
    (0, _stateAppJs.actions).setUser(user);
    (0, _authServiceJs.setSession)({
        email: event.target.email.value
    });
    event.target.reset();
    window.location.hash = '#/userPage';
};
const signup = ()=>{
    const node = (0, _signUpTemplateJs.createSignUpView)();
    return {
        node,
        init: ()=>{
            const form = document.querySelector('.register-form');
            (0, _initSignUpFormJs.initSignUpForm)(form, onSubmit);
        }
    };
};

},{"./signUpTemplate.js":"bJCnm","./initSignUpForm.js":"5UjKN","../../../../services/localStorage/localStorageApi.js":"iptia","../../../../services/localStorage/authService.js":"clYsr","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","../../../../storage/stateApp.js":"gxrwt","../../../../models/user.js":"hpmYO"}],"bJCnm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createSignUpView", ()=>createSignUpView);
var _signupCss = require("./signup.css");
var _form = require("../../../../components/forms/form");
const createSignUpView = ()=>{
    const signUpForm = (0, _form.form)([
        `<div class="form-group">
            <input type="text" id="fullName" name="fullName" required placeholder="\u{41F}\u{43E}\u{43B}\u{43D}\u{43E}\u{435} \u{438}\u{43C}\u{44F}">
        </div>`,
        `<div class="form-group">
            <input type="email" id="email" name="email" required placeholder="Email">
        </div>`,
        `<div class="form-row">
            <div class="form-group">
                <input type="password" id="password" name="password" required placeholder="\u{41F}\u{430}\u{440}\u{43E}\u{43B}\u{44C}">
            </div>
            <div class="form-group">
                <input type="password" id="confirmPassword" name="confirmPassword" required placeholder="\u{41F}\u{43E}\u{434}\u{442}\u{432}\u{435}\u{440}\u{434}\u{438}\u{442}\u{435} \u{43F}\u{430}\u{440}\u{43E}\u{43B}\u{44C}">
            </div>
        </div>`,
        `<div class="form-group">
            <input type="text" id="company" name="company" placeholder="\u{41A}\u{43E}\u{43C}\u{43F}\u{430}\u{43D}\u{438}\u{44F} (\u{43E}\u{43F}\u{446}\u{438}\u{43E}\u{43D}\u{430}\u{43B}\u{44C}\u{43D}\u{43E})">
        </div>`,
        `<div class="form-group checkbox-group">
            <label class="checkbox-label"></label>
                <input type="checkbox" id="terms" name="terms" required>
                <span class="terms-text">\u{421}\u{43E}\u{433}\u{43B}\u{430}\u{441}\u{435}\u{43D} \u{441} <a href="#">\u{443}\u{441}\u{43B}\u{43E}\u{432}\u{438}\u{44F}\u{43C}\u{438}</a></span>
        </div>`,
        `<button type="submit" class="submit-btn">\u{421}\u{43E}\u{437}\u{434}\u{430}\u{442}\u{44C} \u{430}\u{43A}\u{43A}\u{430}\u{443}\u{43D}\u{442}</button>`
    ], 'register-form');
    const container = document.createElement('div');
    container.classList.add('form-container');
    const wrapper = document.createElement('div');
    wrapper.classList.add('form-wrapper');
    const header = document.createElement('div');
    header.classList.add('form-header');
    const h1 = document.createElement('h1');
    h1.textContent = "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F";
    header.append(h1);
    const footer = document.createElement('div');
    footer.classList.add('form-footer');
    const p = document.createElement('p');
    p.innerHTML = '\u0423\u0436\u0435 \u0435\u0441\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442? <a href="#/login" class="link">\u0412\u043E\u0439\u0442\u0438</a>';
    footer.append(p);
    wrapper.append(header, signUpForm, footer);
    container.append(wrapper);
    return container;
} // export const signUpTemplate = `
 //             <div class="form-container">
 //                 <div class="form-wrapper">
 //                     <div class="form-header">
 //                         <h1>Регистрация</h1>
 //                     </div>
 //                     <form class="register-form" id="registerForm">
 //                         <div class="form-group">
 //                             <input type="text" id="fullName" name="fullName" required placeholder="Полное имя">
 //                         </div>
 //                         <div class="form-group">
 //                             <input type="email" id="email" name="email" required placeholder="Email">
 //                         </div>
 //                         <div class="form-row">
 //                             <div class="form-group">
 //                                 <input type="password" id="password" name="password" required placeholder="Пароль">
 //                             </div>
 //                             <div class="form-group">
 //                                 <input type="password" id="confirmPassword" name="confirmPassword" required placeholder="Подтвердите пароль">
 //                             </div>
 //                         </div>
 //                         <div class="form-group">
 //                             <input type="text" id="company" name="company" placeholder="Компания (опционально)">
 //                         </div>
 //                         <div class="form-group checkbox-group">
 //                             <label class="checkbox-label">
 //                                 <input type="checkbox" id="terms" name="terms" required>
 //                                 <span class="checkmark"></span>
 //                                 <span class="terms-text">Согласен с <a href="#">условиями</a></span>
 //                             </label>
 //                         </div>
 //                         <button type="submit" class="submit-btn">Создать аккаунт</button>
 //                     </form>
 //                     <div class="form-footer">
 //                         <p>Уже есть аккаунт? <a href="#" class="link">Войти</a></p>
 //                     </div>
 //                 </div>
 //             </div>
 //   `
;

},{"./signup.css":"dPiiE","../../../../components/forms/form":"h2oHH","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dPiiE":[function() {},{}],"h2oHH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "form", ()=>form);
const form = (children, className)=>{
    const formEl = document.createElement('form');
    if (className) formEl.className = className;
    const fragment = document.createDocumentFragment();
    children.forEach((child)=>{
        if (child instanceof HTMLElement) fragment.append(child);
        else if (typeof child === 'string') {
            const temp = document.createElement('div');
            temp.innerHTML = child.trim();
            // Добавим все элементы верхнего уровня
            Array.from(temp.childNodes).forEach((node)=>{
                if (node.nodeType === Node.ELEMENT_NODE) fragment.append(node);
            });
        }
    });
    formEl.append(fragment);
    return formEl;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5UjKN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initSignUpForm", ()=>initSignUpForm);
const initSignUpForm = (form, onSubmit)=>{
    if (!form) {
        console.error("\u0424\u043E\u0440\u043C\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430");
        return;
    }
    form.addEventListener('submit', onSubmit);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iptia":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setLocalStorage", ()=>setLocalStorage);
parcelHelpers.export(exports, "getLocalStorage", ()=>getLocalStorage);
parcelHelpers.export(exports, "removeLocalStorage", ()=>removeLocalStorage);
const setLocalStorage = (email, password)=>{
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
};
const getLocalStorage = ()=>{
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    return {
        email,
        password
    };
};
const removeLocalStorage = ()=>{
    localStorage.removeItem('email');
    localStorage.removeItem('password');
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"clYsr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setSession", ()=>setSession);
parcelHelpers.export(exports, "getSession", ()=>getSession);
parcelHelpers.export(exports, "clearSession", ()=>clearSession);
parcelHelpers.export(exports, "isAuthenticated", ()=>isAuthenticated);
const STORAGE_KEY = 'auth_session';
const TOKEN_TTL_MS = 86400000; // 24h
const genToken = ()=>{
    if (crypto.randomUUID) return crypto.randomUUID();
    const arr = new Uint8Array(16);
    crypto.getRandomValues(arr);
    return Array.from(arr).map((b)=>b.toString(16).padStart(2, '0')).join('');
};
const setSession = ({ email })=>{
    const session = {
        email,
        token: genToken(),
        expiresAt: Date.now() + TOKEN_TTL_MS
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    return session;
};
const getSession = ()=>{
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    try {
        const s = JSON.parse(raw);
        if (!s.expiresAt || Date.now() > s.expiresAt) {
            clearSession();
            return null;
        }
        return s;
    } catch  {
        clearSession();
        return null;
    }
};
const clearSession = ()=>localStorage.removeItem(STORAGE_KEY);
const isAuthenticated = ()=>!!getSession();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gxrwt":[function(require,module,exports,__globalThis) {
// Объект состояния приложения
// stateApp.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "appState", ()=>appState);
parcelHelpers.export(exports, "actions", ()=>actions);
// --- Подписка ---
parcelHelpers.export(exports, "subscribe", ()=>subscribe);
// --- LocalStorage ---
parcelHelpers.export(exports, "initState", ()=>initState);
const appState = {
    // --- Данные ---
    user: {
        id: null,
        name: '',
        email: '',
        role: '',
        avatar: '',
        lastLogin: null,
        permissions: []
    },
    auth: {
        isAuthenticated: false,
        token: null,
        refreshToken: null,
        expiresAt: null
    },
    dashboard: {
        stats: {
            totalClients: 0,
            revenue: 0,
            conversionRate: 0,
            rating: 0
        },
        chartData: {
            period: '7days',
            data: []
        },
        recentActivities: [],
        topClients: []
    },
    clients: {
        list: [],
        currentPage: 1,
        totalPages: 1,
        pageSize: 20,
        filters: {
            search: '',
            status: 'all',
            sortBy: 'name',
            sortOrder: 'asc'
        },
        selectedClient: null
    },
    analytics: {
        dateRange: {
            start: null,
            end: null
        },
        metrics: {
            revenueByPeriod: [],
            clientGrowth: [],
            activityStats: {}
        }
    },
    settings: {
        theme: 'light',
        language: 'ru',
        notifications: {
            email: true,
            push: true,
            sms: false
        },
        preferences: {
            defaultView: 'dashboard',
            autoRefresh: true,
            refreshInterval: 30000
        }
    },
    ui: {
        loading: false,
        sidebarCollapsed: false,
        modal: {
            isOpen: false,
            type: null,
            data: null
        },
        notifications: [],
        errors: []
    },
    subscribers: []
};
const actions = {
    setUser (userData) {
        appState.user = {
            ...appState.user,
            ...userData
        };
        appState.auth.isAuthenticated = true;
        notifySubscribers();
    },
    clearUser () {
        appState.user = {
            id: null,
            name: '',
            email: '',
            role: '',
            avatar: '',
            lastLogin: null,
            permissions: []
        };
        appState.auth = {
            isAuthenticated: false,
            token: null,
            refreshToken: null,
            expiresAt: null
        };
        notifySubscribers();
    },
    updateDashboardStats (stats) {
        appState.dashboard.stats = {
            ...appState.dashboard.stats,
            ...stats
        };
        notifySubscribers();
    },
    updateChartData (period, data) {
        appState.dashboard.chartData = {
            period,
            data: [
                ...data
            ]
        };
        notifySubscribers();
    },
    addNotification (notification) {
        const newNotification = {
            id: Date.now(),
            timestamp: new Date().toISOString(),
            ...notification
        };
        appState.ui.notifications.push(newNotification);
        notifySubscribers();
        setTimeout(()=>{
            actions.removeNotification(newNotification.id);
        }, 5000);
    },
    removeNotification (id) {
        appState.ui.notifications = appState.ui.notifications.filter((n)=>n.id !== id);
        notifySubscribers();
    },
    setLoading (loading) {
        appState.ui.loading = loading;
        notifySubscribers();
    },
    toggleSidebar () {
        appState.ui.sidebarCollapsed = !appState.ui.sidebarCollapsed;
        notifySubscribers();
    },
    openModal (type, data = null) {
        appState.ui.modal = {
            isOpen: true,
            type,
            data
        };
        notifySubscribers();
    },
    closeModal () {
        appState.ui.modal = {
            isOpen: false,
            type: null,
            data: null
        };
        notifySubscribers();
    },
    updateClients (clients, pagination = {}) {
        appState.clients.list = [
            ...clients
        ];
        if (pagination.currentPage) appState.clients.currentPage = pagination.currentPage;
        if (pagination.totalPages) appState.clients.totalPages = pagination.totalPages;
        notifySubscribers();
    },
    addError (error) {
        const newError = {
            id: Date.now(),
            timestamp: new Date().toISOString(),
            message: error.message || "\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430",
            code: error.code || 'UNKNOWN_ERROR'
        };
        appState.ui.errors.push(newError);
        notifySubscribers();
    },
    clearErrors () {
        appState.ui.errors = [];
        notifySubscribers();
    },
    updateSettings (newSettings) {
        appState.settings = {
            ...appState.settings,
            ...newSettings
        };
        notifySubscribers();
    }
};
function subscribe(callback) {
    appState.subscribers.push(callback);
    return ()=>{
        appState.subscribers = appState.subscribers.filter((sub)=>sub !== callback);
    };
}
function notifySubscribers() {
    appState.subscribers.forEach((cb)=>cb(appState));
    saveState();
}
function initState() {
    try {
        const savedState = localStorage.getItem('crmAppState');
        if (savedState) {
            const parsed = JSON.parse(savedState);
            appState.settings = {
                ...appState.settings,
                ...parsed.settings
            };
            appState.user = {
                ...appState.user,
                ...parsed.user
            };
            appState.auth = {
                ...appState.auth,
                ...parsed.auth
            };
        }
    } catch (err) {
        console.warn("\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F:", err);
    }
}
function saveState() {
    try {
        const stateToSave = {
            settings: appState.settings,
            user: appState.user,
            auth: appState.auth
        };
        localStorage.setItem('crmAppState', JSON.stringify(stateToSave));
    } catch (err) {
        console.warn("\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F:", err);
    }
}
// Инициализация при старте
initState();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hpmYO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "User", ()=>User);
var _generateTimeBasedUserId = require("../utils/generateTimeBasedUserId");
class User {
    constructor({ id = null, name = '', email = '', role = '', avatar = '', lastLogin = null, permissions = [] } = {}){
        this.id = id ?? (0, _generateTimeBasedUserId.generateTimeBasedUserId)();
        this.name = name;
        this.email = email;
        this.role = role;
        this.avatar = avatar;
        this.lastLogin = lastLogin ? new Date(lastLogin) : null;
        this.permissions = Array.isArray(permissions) ? [
            ...permissions
        ] : [];
    }
    updateProfile({ name, email, avatar } = {}) {
        if (typeof name === 'string') this.name = name;
        if (typeof email === 'string') this.email = email;
        if (typeof avatar === 'string') this.avatar = avatar;
        return this;
    }
    setRole(role) {
        if (typeof role === 'string') this.role = role;
        return this;
    }
    addPermission(permission) {
        if (!permission) return this;
        if (!this.permissions.includes(permission)) this.permissions.push(permission);
        return this;
    }
    removePermission(permission) {
        this.permissions = this.permissions.filter((p)=>p !== permission);
        return this;
    }
    hasPermission(permission) {
        return this.permissions.includes(permission);
    }
    markLogin(date = new Date()) {
        this.lastLogin = new Date(date);
        return this;
    }
    get displayName() {
        return this.name || this.email || 'User';
    }
    toJSON() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            role: this.role,
            avatar: this.avatar,
            lastLogin: this.lastLogin ? this.lastLogin.toISOString() : null,
            permissions: [
                ...this.permissions
            ]
        };
    }
    static fromJSON(json) {
        if (!json || typeof json !== 'object') return new User();
        return new User(json);
    }
}

},{"../utils/generateTimeBasedUserId":"f2vaX","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"f2vaX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "generateTimeBasedUserId", ()=>generateTimeBasedUserId);
const generateTimeBasedUserId = ()=>{
    const ts = Date.now().toString(36);
    const rand = Math.random().toString(36).substring(2, 8);
    return `${ts}-${rand}`;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gbJqQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "signin", ()=>signin);
var _signInTemplateJs = require("./signInTemplate.js");
var _initSignFormJs = require("./initSignForm.js");
var _localStorageApiJs = require("../../../../services/localStorage/localStorageApi.js");
var _authServiceJs = require("../../../../services/localStorage/authService.js");
const onSubmit = (e)=>{
    e.preventDefault();
    const { email } = (0, _localStorageApiJs.getLocalStorage)();
    console.log(email);
    if (email !== e.target.email.value) {
        alert("\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0438\u0306 \u043B\u043E\u0433\u0438\u043D \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C");
        window.location.hash = '#/login';
        return;
    }
    e.target.reset();
    (0, _authServiceJs.setSession)({
        email: e.target.email.value
    });
    window.location.hash = '#/userPage';
};
const signin = ()=>{
    const node = (0, _signInTemplateJs.createSignInView)();
    return {
        node,
        init: ()=>{
            const form = document.querySelector('.login-form');
            (0, _initSignFormJs.initSignIn)(form, onSubmit);
        }
    };
};

},{"./signInTemplate.js":"kIeaw","./initSignForm.js":"01y5s","../../../../services/localStorage/localStorageApi.js":"iptia","../../../../services/localStorage/authService.js":"clYsr","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kIeaw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createSignInView", ()=>createSignInView);
var _signinCss = require("./signin.css");
var _form = require("../../../../components/forms/form");
const createSignInView = ()=>{
    const signInForm = (0, _form.form)([
        `<div class="form-group">
            <input type="email" name="email" placeholder="Email" autocomplete="username" required>
        </div>`,
        `<div class="form-group">
            <input type="password" name="password" placeholder="\u{41F}\u{430}\u{440}\u{43E}\u{43B}\u{44C}" autocomplete="current-password" required>
        </div>`,
        `<div class="form-group">
            <button type="submit" class="submit-btn">\u{412}\u{43E}\u{438}\u{306}\u{442}\u{438}</button>
        </div>`
    ], 'login-form');
    const container = document.createElement('div');
    container.classList.add('form-container');
    const wrapper = document.createElement('div');
    wrapper.classList.add('form-wrapper');
    const header = document.createElement('div');
    header.classList.add('form-header');
    const h1 = document.createElement('h1');
    h1.textContent = "\u0412\u0445\u043E\u0434";
    header.append(h1);
    const footer = document.createElement('div');
    footer.classList.add('form-footer');
    const p = document.createElement('p');
    p.innerHTML = '\u041D\u0435\u0442 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430? <a href="#/register" class="link">\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F</a>';
    footer.append(p);
    wrapper.append(header, signInForm, footer);
    container.append(wrapper);
    return container;
}; // export const signTemplate = `
 //     <div class="form-container">
 //         <div class="form-wrapper">
 //             <div class="form-header">
 //                 <h1>Вход</h1>
 //             </div>
 //             <form class="login-form" id="loginForm">
 //                 <div class="form-group">
 //                     <input type="email" name="email" placeholder="Email" autocomplete="username" required>
 //                 </div>
 //                 <div class="form-group">
 //                     <input type="password" name="password" placeholder="Пароль" autocomplete="current-password" required>
 //                 </div>
 //                 <div class="form-options">
 //                     <label class="checkbox-label">
 //                         <input type="checkbox" id="remember" name="remember">
 //                         <span class="checkmark"></span>
 //                         <span class="remember-text">Запомнить меня</span>
 //                     </label>
 //                     <a href="#" class="forgot-link">Забыли пароль?</a>
 //                 </div>
 //                 <div class="form-group">
 //                     <button type="submit" class="submit-btn">Войти</button>
 //                 </div>
 //             </form>
 //             <div class="form-footer">
 //                 <p>Нет аккаунта? <a href="#" class="link">Создать аккаунт</a></p>
 //             </div>
 //         </div>
 //     </div>
 // `;

},{"./signin.css":"6Hn5s","../../../../components/forms/form":"h2oHH","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6Hn5s":[function() {},{}],"01y5s":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initSignIn", ()=>initSignIn);
const initSignIn = (form, onSubmit)=>{
    if (!form) {
        console.error("\u0424\u043E\u0440\u043C\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430");
        return;
    }
    form.addEventListener('submit', onSubmit);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3vBNX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "userPage", ()=>userPage);
var _initUserPage = require("./initUserPage");
const userPage = ()=>{
    return (0, _initUserPage.initUserPage)();
};

},{"./initUserPage":"8VRjv","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8VRjv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initUserPage", ()=>initUserPage);
var _userPageTemplateJs = require("./userPageTemplate.js");
const initUserPage = ()=>{
    const node = (0, _userPageTemplateJs.userPageTemplate)();
    return {
        node,
        init: null
    };
};

},{"./userPageTemplate.js":"6IGfh","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6IGfh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "userPageTemplate", ()=>userPageTemplate);
var _sidebarJs = require("../../../components/dashboard/sidebar/sidebar.js");
var _headerDashboardJs = require("../../../components/dashboard/header/header-dashboard.js");
const userPageTemplate = ()=>{
    const sidebarNode = (0, _sidebarJs.sidebar)();
    const headerNode = (0, _headerDashboardJs.dashboardHeader)();
    const existingHeader = document.querySelector('.header');
    if (existingHeader) existingHeader.remove();
    const container = document.createElement('div');
    container.classList.add('dashboard-container');
    container.append(sidebarNode);
    const main = document.createElement('main');
    main.classList.add('dashboard-content');
    main.append(headerNode);
    const fragment = document.createDocumentFragment();
    fragment.append(container, main);
    return fragment;
};

},{"../../../components/dashboard/sidebar/sidebar.js":"bARyq","../../../components/dashboard/header/header-dashboard.js":"iRroW","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bARyq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sidebar", ()=>sidebar);
var _sidebarCss = require("./sidebar.css");
var _stateApp = require("../../../storage/stateApp");
const sidebar = ()=>{
    const container = document.createElement('div');
    container.classList.add('dashboard-container');
    const aside = document.createElement('aside');
    aside.classList.add('sidebar');
    const logo = document.createElement('div');
    logo.classList.add('logo');
    logo.textContent = "\uD83D\uDCCA CRM";
    const nav = document.createElement('nav');
    nav.classList.add('nav-menu');
    const links = [
        {
            text: "\uD83D\uDCCA \u0414\u0430\u0448\u0431\u043E\u0440\u0434",
            href: '#',
            active: true
        },
        {
            text: "\uD83D\uDC65 \u041A\u043B\u0438\u0435\u043D\u0442\u044B",
            href: '#'
        },
        {
            text: "\uD83D\uDCC8 \u0410\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430",
            href: '#'
        },
        {
            text: "\u2699\uFE0F \u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
            href: '#'
        },
        {
            text: "\u2753 \u041F\u043E\u043C\u043E\u0449\u044C",
            href: '#'
        }
    ];
    const navFrag = document.createDocumentFragment();
    links.forEach(({ text, href, active })=>{
        const a = document.createElement('a');
        a.href = href;
        a.classList.add('nav-item');
        if (active) a.classList.add('active');
        a.textContent = text;
        navFrag.append(a);
    });
    nav.append(navFrag);
    const profile = document.createElement('div');
    profile.classList.add('user-profile');
    const avatar = document.createElement('div');
    avatar.classList.add('user-avatar');
    avatar.textContent = "\uD83D\uDC64";
    const info = document.createElement('div');
    info.classList.add('user-info');
    const name = document.createElement('div');
    name.classList.add('user-name');
    name.textContent = `${(0, _stateApp.appState).user?.name || "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C"}`;
    const role = document.createElement('div');
    role.classList.add('user-role');
    role.textContent = "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440";
    info.append(name, role);
    const logout = document.createElement('a');
    logout.href = '#';
    logout.classList.add('logout-btn');
    logout.textContent = "\uD83D\uDEAA";
    profile.append(avatar, info, logout);
    aside.append(logo, nav, profile);
    container.append(aside);
    return container;
};

},{"./sidebar.css":"hRA7z","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","../../../storage/stateApp":"gxrwt"}],"hRA7z":[function() {},{}],"iRroW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dashboardHeader", ()=>dashboardHeader);
var _headerDashboardCss = require("./header-dashboard.css");
var _userMenu = require("./userMenu/userMenu");
var _stateApp = require("../../../storage/stateApp");
const dashboardHeader = ()=>{
    const header = document.createElement('header');
    header.classList.add('dasboard-header');
    const left = document.createElement('div');
    left.classList.add('dasboard-header-left');
    const welcome = document.createElement('p');
    welcome.textContent = `\u{414}\u{43E}\u{431}\u{440}\u{43E} \u{43F}\u{43E}\u{436}\u{430}\u{43B}\u{43E}\u{432}\u{430}\u{442}\u{44C}, ${(0, _stateApp.appState).user?.name || "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C"}!`;
    left.append(welcome);
    const right = document.createElement('div');
    right.classList.add('dasboard-header-right');
    const search = document.createElement('div');
    search.classList.add('search-box');
    const icon = document.createElement('span');
    icon.classList.add('search-icon');
    icon.textContent = "\uD83D\uDD0D";
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = "\u041F\u043E\u0438\u0441\u043A...";
    search.append(icon, input);
    const notifications = document.createElement('div');
    notifications.classList.add('notifications');
    notifications.textContent = "\uD83D\uDD14";
    const menuItems = [
        "\u043F\u0440\u043E\u0444\u0438\u043B\u044C",
        "\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
        "\u0432\u044B\u0445\u043E\u0434"
    ];
    const userMenu = (0, _userMenu.createUserMenu)(menuItems);
    right.append(search, notifications, userMenu);
    header.append(left, right);
    return header;
};

},{"./header-dashboard.css":"ejGDd","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./userMenu/userMenu":"5rO8L","../../../storage/stateApp":"gxrwt"}],"ejGDd":[function() {},{}],"5rO8L":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createUserMenu", ()=>createUserMenu);
var _authService = require("../../../../services/localStorage/authService");
var _stateAppJs = require("../../../../storage/stateApp.js");
const createUserMenu = (items)=>{
    const { clearUser } = (0, _stateAppJs.actions);
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('user__menu');
    // Иконка-триггер
    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.classList.add('user__menu_trigger');
    trigger.setAttribute('aria-haspopup', 'true');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.textContent = "\uD83D\uDC64";
    const ul = document.createElement('ul');
    ul.classList.add('user__menu__wrapper');
    ul.hidden = true;
    // Карта действий по ключу
    const actions = {
        \u043F\u0440\u043E\u0444\u0438\u043B\u044C: ()=>console.log("\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043F\u0440\u043E\u0444\u0438\u043B\u044C"),
        \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438: ()=>console.log("\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"),
        \u0432\u044B\u0445\u043E\u0434: ()=>{
            (0, _authService.clearSession)();
            clearUser();
            window.location.hash = '#/home';
        }
    };
    const fragment = document.createDocumentFragment();
    items.forEach((text)=>{
        const li = document.createElement('li');
        li.classList.add('user__menu_item');
        li.textContent = text;
        li.dataset.menu = text;
        li.addEventListener('click', ()=>{
            const action = actions[text];
            if (action) action();
            else console.warn(`\u{41D}\u{435}\u{442} \u{434}\u{435}\u{439}\u{441}\u{442}\u{432}\u{438}\u{44F} \u{434}\u{43B}\u{44F} \u{43F}\u{443}\u{43D}\u{43A}\u{442}\u{430}: ${text}`);
        });
        fragment.append(li);
    });
    ul.append(fragment);
    // Тогглинг
    const toggle = ()=>{
        const isHidden = ul.hidden;
        ul.hidden = !isHidden;
        trigger.setAttribute('aria-expanded', String(!isHidden));
    };
    trigger.addEventListener('click', (e)=>{
        e.stopPropagation();
        toggle();
    });
    // Закрытие по клику вне
    document.addEventListener('click', (e)=>{
        if (!menuContainer.contains(e.target)) {
            ul.hidden = true;
            trigger.setAttribute('aria-expanded', 'false');
        }
    });
    menuContainer.append(trigger, ul);
    return menuContainer;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","../../../../services/localStorage/authService":"clYsr","../../../../storage/stateApp.js":"gxrwt"}],"5Z1j3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "header", ()=>header);
parcelHelpers.export(exports, "initHeader", ()=>initHeader);
var _topNavigationJs = require("../top-navigation/top-navigation.js");
var _headerCss = require("./header.css");
const listItem = [
    'home',
    'about',
    'docs'
].map((item)=>{
    const li = document.createElement('li');
    li.classList.add('nav-item');
    li.dataset.route = item;
    li.textContent = item;
    return li;
});
const header = ()=>{
    const headerElement = document.createElement('header');
    headerElement.className = 'header';
    const nav = (0, _topNavigationJs.navigation)(...listItem);
    headerElement.append(nav);
    return headerElement;
};
const initHeader = ()=>{
    // Проверяем, существует ли уже header
    if (document.querySelector('header.header')) {
        console.log('Header already exists');
        return;
    }
    const headerElement = header();
    const ul = headerElement.querySelector('.nav-list');
    const auth = headerElement.querySelector('.auth-buttons');
    if (!ul || !auth) {
        console.error('Header elements not found');
        return;
    }
    ul.addEventListener('click', (e)=>{
        const target = e.target.closest('.nav-item');
        if (target) {
            const route = target.dataset.route;
            console.log('Navigating to:', route);
            window.location.hash = `#/${route}`;
        }
    });
    auth.addEventListener('click', (e)=>{
        const target = e.target.closest('button');
        if (target) {
            const route = target.dataset.route;
            console.log('Navigating to:', route);
            window.location.hash = `#/${route}`;
        }
    });
    document.body.prepend(headerElement);
};

},{"../top-navigation/top-navigation.js":"biVd0","./header.css":"39x7f","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"biVd0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "navigation", ()=>navigation);
var _topNavigationCss = require("./top-navigation.css");
var _btnAuthCss = require("../buttons/btn-auth.css");
var _btnAuthJs = require("../buttons/btn-auth.js");
const auth = ()=>{
    return (0, _btnAuthJs.authButtons)();
};
const navigation = (...list)=>{
    if (list.length === 0) return document.createDocumentFragment();
    const container = document.createElement('div');
    container.classList.add('header-container');
    const ul = document.createElement('ul');
    ul.classList.add('nav-list');
    const fragment = document.createDocumentFragment();
    list.forEach((htmlItem)=>{
        // Поддержка текущего интерфейса: элементы приходят как HTML-строки <li>
        if (typeof htmlItem === 'string') {
            const temp = document.createElement('div');
            temp.innerHTML = htmlItem;
            const li = temp.firstElementChild;
            if (li) fragment.append(li);
        } else if (htmlItem instanceof HTMLElement) fragment.append(htmlItem);
    });
    ul.append(fragment);
    container.append(ul, auth());
    return container;
};

},{"./top-navigation.css":"3URDg","../buttons/btn-auth.css":"ajw0q","../buttons/btn-auth.js":"8uJHt","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3URDg":[function() {},{}],"ajw0q":[function() {},{}],"8uJHt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "authButtons", ()=>authButtons);
const authButtons = ()=>{
    const container = document.createElement('div');
    container.classList.add('auth-buttons');
    const loginBtn = document.createElement('button');
    loginBtn.classList.add('login_in_btn');
    loginBtn.dataset.route = 'login';
    loginBtn.textContent = 'Log in';
    const signupBtn = document.createElement('button');
    signupBtn.classList.add('signup_btn');
    signupBtn.dataset.route = 'register';
    signupBtn.textContent = 'Sign up';
    container.append(loginBtn, signupBtn);
    return container;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"39x7f":[function() {},{}]},["i4syP","9f5IL"], "9f5IL", "parcelRequire981f", {})

//# sourceMappingURL=crm-dashboard.3052eed7.js.map
