"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var jsxRuntime = require("react/jsx-runtime");
var ReactDOMServer = require("react-dom/server");
var inertiaReact = require("@inertiajs/inertia-react");
var createServer = require("@inertiajs/server");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var ReactDOMServer__default = /* @__PURE__ */ _interopDefaultLegacy(ReactDOMServer);
var createServer__default = /* @__PURE__ */ _interopDefaultLegacy(createServer);
function Dashboard({
  name
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/* @__PURE__ */ jsxRuntime.jsxs("h1", {
      className: "text-3xl font-bold leading-tight text-gray-900 mb-4",
      children: ["Hello ", name, "!"]
    }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
      className: "my-3",
      children: ["This is a minimal installation of ", /* @__PURE__ */ jsxRuntime.jsx("a", {
        className: "font-bold hover:underline",
        href: "https://github.com/rails/rails",
        target: "_blank",
        children: "Ruby on Rails"
      }), ",", /* @__PURE__ */ jsxRuntime.jsx("a", {
        className: "font-bold hover:underline",
        href: "https://github.com/vitejs/vite",
        target: "_blank",
        children: "Vite"
      }), ", and ", /* @__PURE__ */ jsxRuntime.jsx("a", {
        className: "font-bold hover:underline",
        href: "https://github.com/inertiajs/inertia-rails",
        target: "_blank",
        children: "InertiaJS"
      }), ". (It also uses the ", /* @__PURE__ */ jsxRuntime.jsx("a", {
        className: "font-bold hover:underline",
        href: "https://github.com/tailwindlabs/tailwindcss",
        target: "_blank",
        children: "Tailwind Play CDN"
      }), " for some simple styling)."]
    }), /* @__PURE__ */ jsxRuntime.jsx("div", {
      className: "my-3",
      children: "It's also running SSR powered by Vite."
    }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
      className: "my-3",
      children: ["Feel free to fork this and use it for your next spike, mvp, or entire application. If you'd like to take a look around to see how everything is working, I'd recommend checking out the following files:", /* @__PURE__ */ jsxRuntime.jsxs("ul", {
        className: "m-4 list-disc",
        children: [/* @__PURE__ */ jsxRuntime.jsxs("li", {
          children: [/* @__PURE__ */ jsxRuntime.jsx("pre", {
            className: "inline bg-slate-100",
            children: "app/frontend/pages/Dashboard.jsx"
          }), ": The React component containing what you're reading now!"]
        }), /* @__PURE__ */ jsxRuntime.jsxs("li", {
          children: [/* @__PURE__ */ jsxRuntime.jsx("pre", {
            className: "inline bg-slate-100",
            children: "app/controllers/dashboard_controller.rb"
          }), ": The controller that handled rendering this page"]
        }), /* @__PURE__ */ jsxRuntime.jsxs("li", {
          children: [/* @__PURE__ */ jsxRuntime.jsx("pre", {
            className: "inline bg-slate-100",
            children: "app/frontend/components/Layout.jsx"
          }), `: The React component providing the "magic" layout similar to Rails's application layout`]
        }), /* @__PURE__ */ jsxRuntime.jsxs("li", {
          children: [/* @__PURE__ */ jsxRuntime.jsx("pre", {
            className: "inline bg-slate-100",
            children: "app/frontend/entrypoints/application.jsx"
          }), ": The Vite entrypoint that handles initializing InertiaJS"]
        })]
      })]
    })]
  });
}
(function dedupeRequire(dedupe) {
  const Module = require("module");
  const resolveFilename = Module._resolveFilename;
  Module._resolveFilename = function(request, parent, isMain, options) {
    if (request[0] !== "." && request[0] !== "/") {
      const parts = request.split("/");
      const pkgName = parts[0][0] === "@" ? parts[0] + "/" + parts[1] : parts[0];
      if (dedupe.includes(pkgName)) {
        parent = module;
      }
    }
    return resolveFilename(request, parent, isMain, options);
  };
})(["react", "react-dom"]);
const pages = { "../pages/Dashboard.jsx": Dashboard };
createServer__default["default"]((page) => inertiaReact.createInertiaApp({
  page,
  render: ReactDOMServer__default["default"].renderToString,
  resolve: (name) => pages[`../pages/${name}.jsx`],
  setup: ({
    App,
    props
  }) => /* @__PURE__ */ jsxRuntime.jsx(App, __spreadValues({}, props))
}));
//# sourceMappingURL=ssr.js.map
