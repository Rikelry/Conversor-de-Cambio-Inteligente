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
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
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
})({"jfjTo":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "6f3ace5c9648339b";
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

},{}],"kMF9r":[function(require,module,exports,__globalThis) {
var _awesomeApiRepositoryJs = require("./services/AwesomeApiRepository.js");
var _quoteStoreJs = require("./repositories/QuoteStore.js");
var _currencyConverterJs = require("./services/CurrencyConverter.js");
var _currencyFormatterJs = require("./services/CurrencyFormatter.js");
var _appControllerJs = require("./controllers/AppController.js");
/**
 * Composition Root — the only place that knows about concrete implementations.
 * All other layers depend on abstractions (interfaces), not concretions.
 */ const CURRENCIES = [
    {
        code: "USD",
        label: "D\xf3lar Americano",
        flag: "\uD83C\uDDFA\uD83C\uDDF8",
        accentVar: "--usd"
    },
    {
        code: "EUR",
        label: "Euro",
        flag: "\uD83C\uDDEA\uD83C\uDDFA",
        accentVar: "--eur"
    },
    {
        code: "BTC",
        label: "Bitcoin",
        flag: "\u20BF",
        accentVar: "--btc"
    }
];
const repository = new (0, _awesomeApiRepositoryJs.AwesomeApiRepository)();
const store = new (0, _quoteStoreJs.QuoteStore)();
const formatter = new (0, _currencyFormatterJs.CurrencyFormatter)();
const converter = new (0, _currencyConverterJs.CurrencyConverter)(store);
const app = new (0, _appControllerJs.AppController)(repository, store, converter, formatter, CURRENCIES);
document.addEventListener("DOMContentLoaded", ()=>app.init());

},{"./services/AwesomeApiRepository.js":"jh35o","./repositories/QuoteStore.js":"cnUg9","./services/CurrencyConverter.js":"kFkRk","./services/CurrencyFormatter.js":"eTgst","./controllers/AppController.js":"iE2MI"}],"jh35o":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Concrete repository that fetches currency quotes from AwesomeAPI.
 * Implements IQuoteRepository — can be swapped for any other provider.
 */ parcelHelpers.export(exports, "AwesomeApiRepository", ()=>AwesomeApiRepository);
var _quoteJs = require("../models/Quote.js");
/**
 * Abstract base class that handles common HTTP concerns.
 * Concrete subclasses implement the endpoint logic (Open/Closed Principle).
 */ class BaseHttpService {
    async get(path) {
        const response = await fetch(`${this.baseUrl}${path}`);
        if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        return response.json();
    }
}
class AwesomeApiRepository extends BaseHttpService {
    async fetchAll(codes) {
        const pairs = codes.map((c)=>`${c}-BRL`).join(",");
        const data = await this.get(`/last/${pairs}`);
        return codes.map((code)=>{
            const key = `${code}BRL`;
            const raw = data[key];
            if (!raw) throw new Error(`[AwesomeApiRepository] Par n\xe3o encontrado: ${key}`);
            return (0, _quoteJs.Quote).fromRaw(raw);
        });
    }
    constructor(...args){
        super(...args), this.baseUrl = "https://economia.awesomeapi.com.br/json";
    }
}

},{"../models/Quote.js":"gQgdd","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gQgdd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Immutable domain model representing a single currency quote.
 * Encapsulates parsing and validation of raw API data.
 */ parcelHelpers.export(exports, "Quote", ()=>Quote);
class Quote {
    constructor(raw){
        this.code = raw.code;
        this.name = raw.name;
        this.bid = parseFloat(raw.bid);
        this.ask = parseFloat(raw.ask);
        this.high = parseFloat(raw.high);
        this.low = parseFloat(raw.low);
        this.pctChange = parseFloat(raw.pctChange);
        this.varBid = parseFloat(raw.varBid);
        this.timestamp = new Date(parseInt(raw.timestamp) * 1000);
    }
    /** Factory — validates raw data before constructing */ static fromRaw(raw) {
        if (!raw.bid || !raw.ask || !raw.code) throw new Error(`[Quote] Dados inv\xe1lidos para ${raw.code ?? "?"}`);
        return new Quote(raw);
    }
    get isPositive() {
        return this.pctChange >= 0;
    }
    get formattedPctChange() {
        const sign = this.pctChange >= 0 ? "+" : "";
        return `${sign}${this.pctChange.toFixed(2)}%`;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
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

},{}],"cnUg9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * In-memory store for the latest quotes.
 * Single source of truth; decoupled from fetch and render concerns.
 */ parcelHelpers.export(exports, "QuoteStore", ()=>QuoteStore);
class QuoteStore {
    update(quotes) {
        for (const q of quotes)this.store.set(q.code, q);
    }
    get(code) {
        return this.store.get(code);
    }
    getAll() {
        return new Map(this.store);
    }
    has(code) {
        return this.store.has(code);
    }
    constructor(){
        this.store = new Map();
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kFkRk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Converts amounts between any two currencies using the BRL pivot strategy.
 * Depends on IQuoteStore via constructor injection (Dependency Inversion).
 */ parcelHelpers.export(exports, "CurrencyConverter", ()=>CurrencyConverter);
class CurrencyConverter {
    constructor(store){
        this.store = store;
    }
    /**
   * Returns the converted amount or null if a required quote is missing.
   *
   * Strategy:
   *   - same → identity
   *   - BRL → X : amount / X.bid
   *   - X → BRL : amount * X.bid
   *   - X → Y   : (amount * X.bid) / Y.bid  (via BRL pivot)
   */ convert(amount, from, to) {
        if (!Number.isFinite(amount) || amount <= 0) return null;
        if (from === to) return amount;
        if (from === "BRL") return this.fromBrl(amount, to);
        if (to === "BRL") return this.toBrl(amount, from);
        return this.crossRate(amount, from, to);
    }
    fromBrl(amount, to) {
        const quote = this.store.get(to);
        if (!quote) return null;
        return amount / quote.bid;
    }
    toBrl(amount, from) {
        const quote = this.store.get(from);
        if (!quote) return null;
        return amount * quote.bid;
    }
    crossRate(amount, from, to) {
        const fromQ = this.store.get(from);
        const toQ = this.store.get(to);
        if (!fromQ || !toQ) return null;
        return amount * fromQ.bid / toQ.bid;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eTgst":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Formats monetary values using Intl.NumberFormat.
 * Crypto currencies are handled separately (no ISO support).
 */ parcelHelpers.export(exports, "CurrencyFormatter", ()=>CurrencyFormatter);
const FORMAT_CONFIG = {
    BRL: {
        locale: "pt-BR",
        isCrypto: false,
        decimals: 2
    },
    USD: {
        locale: "en-US",
        isCrypto: false,
        decimals: 2
    },
    EUR: {
        locale: "de-DE",
        isCrypto: false,
        decimals: 2
    },
    BTC: {
        locale: "pt-BR",
        isCrypto: true,
        decimals: 8
    }
};
class CurrencyFormatter {
    format(value, currencyCode) {
        const config = FORMAT_CONFIG[currencyCode];
        if (!config) return `${currencyCode} ${value.toFixed(2)}`;
        if (config.isCrypto) return `\u{20BF} ${value.toFixed(config.decimals)}`;
        return new Intl.NumberFormat(config.locale, {
            style: "currency",
            currency: currencyCode,
            minimumFractionDigits: config.decimals,
            maximumFractionDigits: config.decimals
        }).format(value);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iE2MI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Top-level application controller.
 * All dependencies are injected — fully testable, decoupled (DIP).
 */ parcelHelpers.export(exports, "AppController", ()=>AppController);
var _quoteCardRendererJs = require("../renderers/QuoteCardRenderer.js");
var _statusRendererJs = require("../renderers/StatusRenderer.js");
var _converterRendererJs = require("../renderers/ConverterRenderer.js");
const REFRESH_MS = 60000;
const DEBOUNCE_MS = 400;
/**
 * Debounces a function call.
 */ function debounce(fn, delay) {
    let timer;
    return (...args)=>{
        clearTimeout(timer);
        timer = setTimeout(()=>fn(...args), delay);
    };
}
class AppController {
    constructor(repository, store, converter, formatter, currencies){
        this.repository = repository;
        this.store = store;
        this.converter = converter;
        this.formatter = formatter;
        this.currencies = currencies;
        this.statusRenderer = new (0, _statusRendererJs.StatusRenderer)();
        this.converterRenderer = new (0, _converterRendererJs.ConverterRenderer)();
        this.cardRenderers = new Map(currencies.map((c)=>[
                c.code,
                new (0, _quoteCardRendererJs.QuoteCardRenderer)(c.code, formatter)
            ]));
    }
    async init() {
        this.statusRenderer.setLoading();
        this.bindConverterEvents();
        await this.refresh();
        setInterval(()=>this.refresh(), REFRESH_MS);
    }
    // ─── Private ────────────────────────────────────────────────────────────────
    async refresh() {
        try {
            const codes = this.currencies.map((c)=>c.code);
            const previous = this.store.getAll();
            const quotes = await this.repository.fetchAll(codes);
            this.store.update(quotes);
            for (const quote of quotes){
                const renderer = this.cardRenderers.get(quote.code);
                renderer?.render(quote, previous.get(quote.code));
            }
            this.statusRenderer.setOnline(new Date());
        } catch (err) {
            console.error("[AppController] refresh failed:", err);
            this.statusRenderer.setError();
        }
    }
    bindConverterEvents() {
        const amountInput = document.getElementById("conv-amount");
        const fromSelect = document.getElementById("conv-from-currency");
        const toSelect = document.getElementById("conv-to-currency");
        const debouncedConvert = debounce(()=>this.handleConvert(), DEBOUNCE_MS);
        amountInput?.addEventListener("input", debouncedConvert);
        fromSelect?.addEventListener("change", debouncedConvert);
        toSelect?.addEventListener("change", debouncedConvert);
    }
    handleConvert() {
        const amountInput = document.getElementById("conv-amount");
        const fromSelect = document.getElementById("conv-from-currency");
        const toSelect = document.getElementById("conv-to-currency");
        if (!amountInput || !fromSelect || !toSelect) return;
        const raw = amountInput.value.trim();
        const from = fromSelect.value;
        const to = toSelect.value;
        if (!raw) {
            this.converterRenderer.renderEmpty();
            return;
        }
        const amount = parseFloat(raw);
        const result = this.converter.convert(amount, from, to);
        const inputFormatted = this.formatter.format(amount, from);
        const outputFormatted = result !== null ? this.formatter.format(result, to) : null;
        this.converterRenderer.renderResult(inputFormatted, outputFormatted);
    }
}

},{"../renderers/QuoteCardRenderer.js":"iMBw3","../renderers/StatusRenderer.js":"c7Z3J","../renderers/ConverterRenderer.js":"3i2C2","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iMBw3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Abstract base for all DOM renderers.
 * Provides safe element lookup helpers — subclasses focus on render logic only.
 */ parcelHelpers.export(exports, "BaseRenderer", ()=>BaseRenderer);
// ─── QuoteCardRenderer ────────────────────────────────────────────────────────
/**
 * Renders a single currency card.
 * Handles price flash animations when value changes.
 */ parcelHelpers.export(exports, "QuoteCardRenderer", ()=>QuoteCardRenderer);
class BaseRenderer {
    el(id) {
        return document.getElementById(id);
    }
    require(id) {
        const elem = document.getElementById(id);
        if (!elem) throw new Error(`[Renderer] Element #${id} not found in DOM`);
        return elem;
    }
}
class QuoteCardRenderer extends BaseRenderer {
    constructor(code, formatter){
        super(), this.code = code, this.formatter = formatter;
    }
    render(quote, previous) {
        this.renderPrice(quote, previous);
        this.renderBidAsk(quote);
        this.renderBadge(quote);
    }
    renderPrice(quote, previous) {
        const elem = this.el(`price-${this.code}`);
        if (!elem) return;
        const formatted = this.formatter.format(quote.bid, "BRL");
        elem.textContent = formatted;
        if (previous && previous.bid !== quote.bid) this.flashPrice(elem, quote.bid > previous.bid);
    }
    renderBidAsk(quote) {
        const bidEl = this.el(`bid-${this.code}`);
        const askEl = this.el(`ask-${this.code}`);
        if (bidEl) bidEl.textContent = this.formatter.format(quote.bid, "BRL");
        if (askEl) askEl.textContent = this.formatter.format(quote.ask, "BRL");
    }
    renderBadge(quote) {
        const elem = this.el(`badge-${this.code}`);
        if (!elem) return;
        const arrow = quote.isPositive ? "\u25B2" : "\u25BC";
        elem.textContent = `${arrow} ${quote.formattedPctChange}`;
        elem.className = `badge ${quote.isPositive ? "up" : "down"}`;
    }
    flashPrice(elem, isUp) {
        const cls = isUp ? "flash-up" : "flash-down";
        elem.classList.add(cls);
        setTimeout(()=>elem.classList.remove(cls), 700);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"c7Z3J":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Manages the header status indicator: loading / online / error states.
 */ parcelHelpers.export(exports, "StatusRenderer", ()=>StatusRenderer);
var _quoteCardRendererJs = require("./QuoteCardRenderer.js");
class StatusRenderer extends (0, _quoteCardRendererJs.BaseRenderer) {
    setLoading() {
        this.setText("Carregando cota\xe7\xf5es\u2026");
        this.setDotColor("var(--sub)");
    }
    setOnline(updatedAt) {
        const time = updatedAt.toLocaleTimeString("pt-BR");
        this.setText(`Atualizado \xe0s ${time}`);
        this.setDotColor("var(--usd)");
        this.hideError();
    }
    setError() {
        this.setText("Falha ao atualizar");
        this.setDotColor("var(--down)");
        this.showError();
    }
    setText(text) {
        const elem = this.el("last-update");
        if (elem) elem.textContent = text;
    }
    setDotColor(color) {
        const dot = this.el("live-dot");
        if (dot) dot.style.background = color;
    }
    showError() {
        const banner = this.el("error-banner");
        if (banner) banner.classList.add("visible");
    }
    hideError() {
        const banner = this.el("error-banner");
        if (banner) banner.classList.remove("visible");
    }
}

},{"./QuoteCardRenderer.js":"iMBw3","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3i2C2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Renders the converter output area.
 * Separated from converter logic (Single Responsibility).
 */ parcelHelpers.export(exports, "ConverterRenderer", ()=>ConverterRenderer);
var _quoteCardRendererJs = require("./QuoteCardRenderer.js");
class ConverterRenderer extends (0, _quoteCardRendererJs.BaseRenderer) {
    renderResult(input, output) {
        const elem = this.el(this.outputId);
        if (!elem) return;
        if (output === null) {
            elem.innerHTML = `<span class="placeholder">Cota\xe7\xe3o indispon\xedvel \u{2014} aguarde o carregamento\u{2026}</span>`;
            return;
        }
        elem.innerHTML = `<span class="from-val">${input}</span>` + `<span class="eq">&nbsp;=&nbsp;</span>` + `<span class="to-val">${output}</span>`;
    }
    renderEmpty() {
        const elem = this.el(this.outputId);
        if (elem) elem.innerHTML = `<span class="placeholder">Digite um valor para converter\u{2026}</span>`;
    }
    constructor(...args){
        super(...args), this.outputId = "conv-output";
    }
}

},{"./QuoteCardRenderer.js":"iMBw3","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["jfjTo","kMF9r"], "kMF9r", "parcelRequireba4c", {})

//# sourceMappingURL=source.9648339b.js.map
