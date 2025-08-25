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

},{"./components/header/header":"5Z1j3","./router/router.js":"cPyZQ"}],"5Z1j3":[function(require,module,exports,__globalThis) {
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
    return `<li class="nav-item" data-route="${item}">${item}</li>`;
});
const header = ()=>{
    const headerElement = document.createElement('header');
    headerElement.className = 'header';
    headerElement.innerHTML = (0, _topNavigationJs.navigation)(...listItem);
    return headerElement.outerHTML;
};
const initHeader = ()=>{
    // Проверяем, существует ли уже header
    if (document.querySelector('header.header')) {
        console.log('Header already exists');
        return;
    }
    const headerHTML = header();
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = headerHTML;
    const headerElement = tempDiv.firstElementChild;
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

},{"./header.css":"39x7f","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","../top-navigation/top-navigation.js":"biVd0"}],"39x7f":[function() {},{}],"jnFvT":[function(require,module,exports,__globalThis) {
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

},{}],"biVd0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "navigation", ()=>navigation);
var _topNavigationCss = require("./top-navigation.css");
var _btnAuthCss = require("../buttons/btn-auth.css");
var _btnAuthJs = require("../buttons/btn-auth.js");
const auth = ()=>{
    const btnsAuth = (0, _btnAuthJs.authButtons)();
    return btnsAuth;
};
const navigation = (...list)=>{
    if (list.length === 0) return '';
    return `
        <div class="header-container">
            <ul class="nav-list">
                ${list.join('')}
            </ul>
            ${auth()}
        </div>
    `;
};

},{"./top-navigation.css":"3URDg","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","../buttons/btn-auth.css":"ajw0q","../buttons/btn-auth.js":"8uJHt"}],"3URDg":[function() {},{}],"ajw0q":[function() {},{}],"8uJHt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "authButtons", ()=>authButtons);
const authButtons = ()=>{
    return `
        <div class="auth-buttons">
            <button class="login_in_btn" data-route="login">Log in</button>
            <button class="signup_btn" data-route="register">Sign up</button>
        </div>
    `;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cPyZQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter);
var _homepageJs = require("./pages/home/homepage.js");
var _aboutJs = require("./pages/about/about.js");
var _signupJs = require("./pages/auth/signUp/signup.js");
var _signinJs = require("./pages/auth/signIn/signin.js");
const router = {
    home: ()=>(0, _homepageJs.homePage)(),
    about: ()=>(0, _aboutJs.aboutPage)(),
    docs: ()=>{
        return {
            html: `<h1>Docs</h1>`,
            init: null
        };
    },
    userpage: ()=>{
        return {
            html: `<h1>Userpage</h1>`,
            init: null
        };
    },
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
    return router[path] ? router[path]() : router['404']();
};
const initRouter = ()=>{
    const updateContent = ()=>{
        const routeName = renderRoute();
        console.log(routeName);
        const app = document.getElementById('app');
        if (app) {
            const routeResult = handlechangeRoute(routeName);
            // Если результат - объект с html и init
            if (typeof routeResult === 'object' && routeResult.html) {
                app.innerHTML = routeResult.html;
                // Вызываем функцию инициализации если она есть
                if (routeResult.init) routeResult.init();
            } else // Обратная совместимость - если возвращается просто строка
            app.innerHTML = routeResult;
        } else console.error("\u042D\u043B\u0435\u043C\u0435\u043D\u0442 #app \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D");
    };
    window.addEventListener('load', updateContent);
    window.addEventListener('hashchange', updateContent);
    updateContent();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./pages/home/homepage.js":"85sRH","./pages/about/about.js":"50P20","./pages/auth/signUp/signup.js":"k2S0f","./pages/auth/signIn/signin.js":"gbJqQ"}],"85sRH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "homePage", ()=>homePage);
var _homepageCss = require("./homepage.css");
var _homepageCssDefault = parcelHelpers.interopDefault(_homepageCss);
const homePage = ()=>{
    return `
        <div class="home_container">
        <div class="logo">\u{1F680}</div>
        <h1>\u{41C}\u{44B} \u{433}\u{43E}\u{442}\u{43E}\u{432}\u{438}\u{43C} \u{447}\u{442}\u{43E}-\u{442}\u{43E} \u{43E}\u{441}\u{43E}\u{431}\u{435}\u{43D}\u{43D}\u{43E}\u{435}</h1>
        <p>\u{41D}\u{430}\u{448} \u{441}\u{430}\u{439}\u{442} \u{441}\u{43A}\u{43E}\u{440}\u{43E} \u{43E}\u{442}\u{43A}\u{440}\u{43E}\u{435}\u{442}\u{441}\u{44F}. \u{41F}\u{43E}\u{434}\u{43F}\u{438}\u{448}\u{438}\u{442}\u{435}\u{441}\u{44C}, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{43F}\u{435}\u{440}\u{432}\u{44B}\u{43C}\u{438} \u{443}\u{437}\u{43D}\u{430}\u{442}\u{44C} \u{43E} \u{437}\u{430}\u{43F}\u{443}\u{441}\u{43A}\u{435} \u{438} \u{43F}\u{43E}\u{43B}\u{443}\u{447}\u{438}\u{442}\u{44C} \u{44D}\u{43A}\u{441}\u{43A}\u{43B}\u{44E}\u{437}\u{438}\u{432}\u{43D}\u{44B}\u{435} \u{43F}\u{440}\u{435}\u{434}\u{43B}\u{43E}\u{436}\u{435}\u{43D}\u{438}\u{44F}.</p>
        
        <div class="countdown">
            <div class="time-unit">
                <span class="time-number">15</span>
                <span class="time-label">\u{434}\u{43D}\u{435}\u{439}</span>
            </div>
            <div class="time-unit">
                <span class="time-number">08</span>
                <span class="time-label">\u{447}\u{430}\u{441}\u{43E}\u{432}</span>
            </div>
            <div class="time-unit">
                <span class="time-number">42</span>
                <span class="time-label">\u{43C}\u{438}\u{43D}\u{443}\u{442}</span>
            </div>
            <div class="time-unit">
                <span class="time-number">18</span>
                <span class="time-label">\u{441}\u{435}\u{43A}\u{443}\u{43D}\u{434}</span>
            </div>
        </div>

        <div class="subscribe">
            <input type="email" class="email-input" placeholder="\u{412}\u{430}\u{448} email">
            <button class="subscribe-btn">\u{423}\u{432}\u{435}\u{434}\u{43E}\u{43C}\u{438}\u{442}\u{44C} \u{43C}\u{435}\u{43D}\u{44F}</button>
        </div>
    `;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./homepage.css":"141dh"}],"141dh":[function() {},{}],"50P20":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "aboutPage", ()=>aboutPage);
var _aboutCss = require("./about.css");
var _aboutCssDefault = parcelHelpers.interopDefault(_aboutCss);
const aboutPage = ()=>{
    return `
        <!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>\u{41E} \u{43D}\u{430}\u{441} - CRM \u{421}\u{438}\u{441}\u{442}\u{435}\u{43C}\u{430}</title>
    <link rel="stylesheet" href="about.css">
</head>
<body>
    <div class="container">
        <main class="main-content">
            <div class="hero-section">
                <h1 class="main-title">\u{41E} \u{43D}\u{430}\u{448}\u{435}\u{439} CRM \u{441}\u{438}\u{441}\u{442}\u{435}\u{43C}\u{435}</h1>
                <p class="subtitle">\u{420}\u{435}\u{432}\u{43E}\u{43B}\u{44E}\u{446}\u{438}\u{43E}\u{43D}\u{43D}\u{44B}\u{439} \u{43F}\u{43E}\u{434}\u{445}\u{43E}\u{434} \u{43A} \u{443}\u{43F}\u{440}\u{430}\u{432}\u{43B}\u{435}\u{43D}\u{438}\u{44E} \u{432}\u{437}\u{430}\u{438}\u{43C}\u{43E}\u{43E}\u{442}\u{43D}\u{43E}\u{448}\u{435}\u{43D}\u{438}\u{44F}\u{43C}\u{438} \u{441} \u{43A}\u{43B}\u{438}\u{435}\u{43D}\u{442}\u{430}\u{43C}\u{438}</p>
            </div>

            <div class="content-section">
                <div class="mission-card">
                    <div class="icon">\u{1F3AF}</div>
                    <h2>\u{41D}\u{430}\u{448}\u{430} \u{43C}\u{438}\u{441}\u{441}\u{438}\u{44F}</h2>
                    <p>\u{421}\u{434}\u{435}\u{43B}\u{430}\u{442}\u{44C} \u{443}\u{43F}\u{440}\u{430}\u{432}\u{43B}\u{435}\u{43D}\u{438}\u{435} \u{43A}\u{43B}\u{438}\u{435}\u{43D}\u{442}\u{441}\u{43A}\u{438}\u{43C}\u{438} \u{43E}\u{442}\u{43D}\u{43E}\u{448}\u{435}\u{43D}\u{438}\u{44F}\u{43C}\u{438} \u{43F}\u{440}\u{43E}\u{441}\u{442}\u{44B}\u{43C}, \u{44D}\u{444}\u{444}\u{435}\u{43A}\u{442}\u{438}\u{432}\u{43D}\u{44B}\u{43C} \u{438} \u{438}\u{43D}\u{442}\u{443}\u{438}\u{442}\u{438}\u{432}\u{43D}\u{43E} \u{43F}\u{43E}\u{43D}\u{44F}\u{442}\u{43D}\u{44B}\u{43C} \u{434}\u{43B}\u{44F} \u{431}\u{438}\u{437}\u{43D}\u{435}\u{441}\u{430} \u{43B}\u{44E}\u{431}\u{43E}\u{433}\u{43E} \u{43C}\u{430}\u{441}\u{448}\u{442}\u{430}\u{431}\u{430}.</p>
                </div>

                <div class="features-grid">
                    <div class="feature-card">
                        <div class="feature-icon">\u{1F680}</div>
                        <h3>\u{418}\u{43D}\u{43D}\u{43E}\u{432}\u{430}\u{446}\u{438}\u{438}</h3>
                        <p>\u{421}\u{43E}\u{432}\u{440}\u{435}\u{43C}\u{435}\u{43D}\u{43D}\u{44B}\u{435} \u{442}\u{435}\u{445}\u{43D}\u{43E}\u{43B}\u{43E}\u{433}\u{438}\u{438} \u{438} \u{43F}\u{435}\u{440}\u{435}\u{434}\u{43E}\u{432}\u{44B}\u{435} \u{43F}\u{440}\u{430}\u{43A}\u{442}\u{438}\u{43A}\u{438} \u{432} \u{43E}\u{431}\u{43B}\u{430}\u{441}\u{442}\u{438} CRM</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">\u{1F512}</div>
                        <h3>\u{411}\u{435}\u{437}\u{43E}\u{43F}\u{430}\u{441}\u{43D}\u{43E}\u{441}\u{442}\u{44C}</h3>
                        <p>\u{41C}\u{430}\u{43A}\u{441}\u{438}\u{43C}\u{430}\u{43B}\u{44C}\u{43D}\u{430}\u{44F} \u{437}\u{430}\u{449}\u{438}\u{442}\u{430} \u{432}\u{430}\u{448}\u{438}\u{445} \u{434}\u{430}\u{43D}\u{43D}\u{44B}\u{445} \u{438} \u{43A}\u{43E}\u{43D}\u{444}\u{438}\u{434}\u{435}\u{43D}\u{446}\u{438}\u{430}\u{43B}\u{44C}\u{43D}\u{43E}\u{439} \u{438}\u{43D}\u{444}\u{43E}\u{440}\u{43C}\u{430}\u{446}\u{438}\u{438}</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">\u{1F504}</div>
                        <h3>\u{410}\u{432}\u{442}\u{43E}\u{43C}\u{430}\u{442}\u{438}\u{437}\u{430}\u{446}\u{438}\u{44F}</h3>
                        <p>\u{410}\u{432}\u{442}\u{43E}\u{43C}\u{430}\u{442}\u{438}\u{437}\u{438}\u{440}\u{443}\u{439}\u{442}\u{435} \u{440}\u{443}\u{442}\u{438}\u{43D}\u{43D}\u{44B}\u{435} \u{43F}\u{440}\u{43E}\u{446}\u{435}\u{441}\u{441}\u{44B} \u{438} \u{441}\u{43E}\u{441}\u{440}\u{435}\u{434}\u{43E}\u{442}\u{43E}\u{447}\u{44C}\u{442}\u{435}\u{441}\u{44C} \u{43D}\u{430} \u{440}\u{430}\u{437}\u{432}\u{438}\u{442}\u{438}\u{438} \u{431}\u{438}\u{437}\u{43D}\u{435}\u{441}\u{430}</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">\u{1F4C8}</div>
                        <h3>\u{410}\u{43D}\u{430}\u{43B}\u{438}\u{442}\u{438}\u{43A}\u{430}</h3>
                        <p>\u{413}\u{43B}\u{443}\u{431}\u{43E}\u{43A}\u{430}\u{44F} \u{430}\u{43D}\u{430}\u{43B}\u{438}\u{442}\u{438}\u{43A}\u{430} \u{434}\u{43B}\u{44F} \u{43F}\u{440}\u{438}\u{43D}\u{44F}\u{442}\u{438}\u{44F} \u{43E}\u{431}\u{43E}\u{441}\u{43D}\u{43E}\u{432}\u{430}\u{43D}\u{43D}\u{44B}\u{445} \u{431}\u{438}\u{437}\u{43D}\u{435}\u{441}-\u{440}\u{435}\u{448}\u{435}\u{43D}\u{438}\u{439}</p>
                    </div>
                </div>

                <div class="team-preview">
                    <h2>\u{41D}\u{430}\u{448}\u{430} \u{43A}\u{43E}\u{43C}\u{430}\u{43D}\u{434}\u{430}</h2>
                    <p>\u{41F}\u{440}\u{43E}\u{444}\u{435}\u{441}\u{441}\u{438}\u{43E}\u{43D}\u{430}\u{43B}\u{44B} \u{441} \u{43C}\u{43D}\u{43E}\u{433}\u{43E}\u{43B}\u{435}\u{442}\u{43D}\u{438}\u{43C} \u{43E}\u{43F}\u{44B}\u{442}\u{43E}\u{43C} \u{432} \u{440}\u{430}\u{437}\u{440}\u{430}\u{431}\u{43E}\u{442}\u{43A}\u{435} CRM \u{440}\u{435}\u{448}\u{435}\u{43D}\u{438}\u{439}, \u{43C}\u{430}\u{440}\u{43A}\u{435}\u{442}\u{438}\u{43D}\u{433}\u{435} \u{438} \u{443}\u{43F}\u{440}\u{430}\u{432}\u{43B}\u{435}\u{43D}\u{438}\u{438} \u{43F}\u{440}\u{43E}\u{435}\u{43A}\u{442}\u{430}\u{43C}\u{438}.</p>
                    <div class="team-members">
                        <div class="team-member">
                            <div class="member-avatar">\u{1F468}\u{200D}\u{1F4BC}</div>
                            <div class="member-info">
                                <h4>\u{410}\u{43B}\u{435}\u{43A}\u{441}\u{430}\u{43D}\u{434}\u{440} \u{413}\u{435}\u{440}\u{430}\u{441}\u{438}\u{43C}\u{43E}\u{432}</h4>
                                <p>CEO & \u{41E}\u{441}\u{43D}\u{43E}\u{432}\u{430}\u{442}\u{435}\u{43B}\u{44C}</p>
                            </div>
                        </div>
                        <div class="team-member">
                            <div class="member-avatar">\u{1F469}\u{200D}\u{1F4BB}</div>
                            <div class="member-info">
                                <h4>\u{414}\u{438}\u{430}\u{43D}\u{430} \u{413}\u{435}\u{440}\u{430}\u{441}\u{438}\u{43C}\u{43E}\u{432}\u{430}</h4>
                                <p>\u{422}\u{435}\u{445}\u{43D}\u{438}\u{447}\u{435}\u{441}\u{43A}\u{438}\u{439} \u{434}\u{438}\u{440}\u{435}\u{43A}\u{442}\u{43E}\u{440}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="cta-section">
                <h2>\u{413}\u{43E}\u{442}\u{43E}\u{432}\u{44B} \u{43D}\u{430}\u{447}\u{430}\u{442}\u{44C}?</h2>
                <p>\u{41F}\u{440}\u{438}\u{441}\u{43E}\u{435}\u{434}\u{438}\u{43D}\u{44F}\u{439}\u{442}\u{435}\u{441}\u{44C} \u{43A} \u{442}\u{44B}\u{441}\u{44F}\u{447}\u{430}\u{43C} \u{43A}\u{43E}\u{43C}\u{43F}\u{430}\u{43D}\u{438}\u{439}, \u{43A}\u{43E}\u{442}\u{43E}\u{440}\u{44B}\u{435} \u{443}\u{436}\u{435} \u{438}\u{441}\u{43F}\u{43E}\u{43B}\u{44C}\u{437}\u{443}\u{44E}\u{442} \u{43D}\u{430}\u{448}\u{443} CRM \u{441}\u{438}\u{441}\u{442}\u{435}\u{43C}\u{443}</p>
                <button class="cta-button">\u{41F}\u{43E}\u{43F}\u{440}\u{43E}\u{431}\u{43E}\u{432}\u{430}\u{442}\u{44C} \u{431}\u{435}\u{441}\u{43F}\u{43B}\u{430}\u{442}\u{43D}\u{43E}</button>
            </div>
        </main>

        <footer class="footer">
            <p>&copy; 2024 CRM \u{421}\u{438}\u{441}\u{442}\u{435}\u{43C}\u{430}. \u{412}\u{441}\u{435} \u{43F}\u{440}\u{430}\u{432}\u{430} \u{437}\u{430}\u{449}\u{438}\u{449}\u{435}\u{43D}\u{44B}.</p>
        </footer>
    </div>
</body>
</html>
    `;
};

},{"./about.css":"8k2su","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8k2su":[function() {},{}],"k2S0f":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "signup", ()=>signup);
var _signUpTemplateJs = require("./signUpTemplate.js");
var _initSignUpFormJs = require("./initSignUpForm.js");
const onSubmit = (event)=>{
    event.preventDefault();
    console.log('submit');
    event.target.reset();
};
const signup = ()=>{
    return {
        html: (0, _signUpTemplateJs.signUpTemplate),
        init: ()=>{
            const form = document.querySelector('.register-form');
            (0, _initSignUpFormJs.initSignUpForm)(form, onSubmit);
        }
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./signUpTemplate.js":"bJCnm","./initSignUpForm.js":"5UjKN"}],"bJCnm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "signUpTemplate", ()=>signUpTemplate);
var _signupCss = require("./signup.css");
const signUpTemplate = `
            <div class="form-container">
                <div class="form-wrapper">
                    <div class="form-header">
                        <h1>\u{420}\u{435}\u{433}\u{438}\u{441}\u{442}\u{440}\u{430}\u{446}\u{438}\u{44F}</h1>
                    </div>

                    <form class="register-form" id="registerForm">
                        <div class="form-group">
                            <input type="text" id="fullName" name="fullName" required placeholder="\u{41F}\u{43E}\u{43B}\u{43D}\u{43E}\u{435} \u{438}\u{43C}\u{44F}">
                        </div>

                        <div class="form-group">
                            <input type="email" id="email" name="email" required placeholder="Email">
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <input type="password" id="password" name="password" required placeholder="\u{41F}\u{430}\u{440}\u{43E}\u{43B}\u{44C}">
                            </div>
                            <div class="form-group">
                                <input type="password" id="confirmPassword" name="confirmPassword" required placeholder="\u{41F}\u{43E}\u{434}\u{442}\u{432}\u{435}\u{440}\u{434}\u{438}\u{442}\u{435} \u{43F}\u{430}\u{440}\u{43E}\u{43B}\u{44C}">
                            </div>
                        </div>

                        <div class="form-group">
                            <input type="text" id="company" name="company" placeholder="\u{41A}\u{43E}\u{43C}\u{43F}\u{430}\u{43D}\u{438}\u{44F} (\u{43E}\u{43F}\u{446}\u{438}\u{43E}\u{43D}\u{430}\u{43B}\u{44C}\u{43D}\u{43E})">
                        </div>

                        <div class="form-group checkbox-group">
                            <label class="checkbox-label">
                                <input type="checkbox" id="terms" name="terms" required>
                                <span class="checkmark"></span>
                                <span class="terms-text">\u{421}\u{43E}\u{433}\u{43B}\u{430}\u{441}\u{435}\u{43D} \u{441} <a href="#">\u{443}\u{441}\u{43B}\u{43E}\u{432}\u{438}\u{44F}\u{43C}\u{438}</a></span>
                            </label>
                        </div>

                        <button type="submit" class="submit-btn">\u{421}\u{43E}\u{437}\u{434}\u{430}\u{442}\u{44C} \u{430}\u{43A}\u{43A}\u{430}\u{443}\u{43D}\u{442}</button>
                    </form>

                    <div class="form-footer">
                        <p>\u{423}\u{436}\u{435} \u{435}\u{441}\u{442}\u{44C} \u{430}\u{43A}\u{43A}\u{430}\u{443}\u{43D}\u{442}? <a href="#" class="link">\u{412}\u{43E}\u{439}\u{442}\u{438}</a></p>
                    </div>
                </div>
            </div>
  `;

},{"./signup.css":"dPiiE","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dPiiE":[function() {},{}],"5UjKN":[function(require,module,exports,__globalThis) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gbJqQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "signin", ()=>signin);
var _signinTemplateJs = require("./signinTemplate.js");
var _initSignFormJs = require("./initSignForm.js");
const onSubmit = (e)=>{
    e.preventDefault();
    console.log('submit');
    e.target.reset();
};
const signin = ()=>{
    return {
        html: (0, _signinTemplateJs.signTemplate),
        init: ()=>{
            const form = document.querySelector('.login-form');
            (0, _initSignFormJs.initSignIn)(form, onSubmit);
        }
    };
};

},{"./signinTemplate.js":"dW86f","./initSignForm.js":"01y5s","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dW86f":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "signTemplate", ()=>signTemplate);
var _signinCss = require("./signin.css");
const signTemplate = `
    <div class="form-container">
        <div class="form-wrapper">
            <div class="form-header">
                <h1>\u{412}\u{445}\u{43E}\u{434}</h1>
            </div>
            <form class="login-form" id="loginForm">
                <div class="form-group">
                    <input type="email" name="email" placeholder="Email" autocomplete="username" required>
                </div>
                <div class="form-group">
                    <input type="password" name="password" placeholder="\u{41F}\u{430}\u{440}\u{43E}\u{43B}\u{44C}" autocomplete="current-password" required>
                </div>
                <div class="form-options">
                    <label class="checkbox-label">
                        <input type="checkbox" id="remember" name="remember">
                        <span class="checkmark"></span>
                        <span class="remember-text">\u{417}\u{430}\u{43F}\u{43E}\u{43C}\u{43D}\u{438}\u{442}\u{44C} \u{43C}\u{435}\u{43D}\u{44F}</span>
                    </label>
                    <a href="#" class="forgot-link">\u{417}\u{430}\u{431}\u{44B}\u{43B}\u{438} \u{43F}\u{430}\u{440}\u{43E}\u{43B}\u{44C}?</a>
                </div>
                <div class="form-group">
                    <button type="submit" class="submit-btn">\u{412}\u{43E}\u{438}\u{306}\u{442}\u{438}</button>
                </div>
            </form>
            <div class="form-footer">
                <p>\u{41D}\u{435}\u{442} \u{430}\u{43A}\u{43A}\u{430}\u{443}\u{43D}\u{442}\u{430}? <a href="#" class="link">\u{421}\u{43E}\u{437}\u{434}\u{430}\u{442}\u{44C} \u{430}\u{43A}\u{43A}\u{430}\u{443}\u{43D}\u{442}</a></p>
            </div>
        </div>
    </div>
`;

},{"./signin.css":"6Hn5s","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6Hn5s":[function() {},{}],"01y5s":[function(require,module,exports,__globalThis) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["i4syP","9f5IL"], "9f5IL", "parcelRequire981f", {})

//# sourceMappingURL=crm-dashboard.3052eed7.js.map
