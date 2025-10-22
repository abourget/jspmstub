(map => {
  const mapUrl = document.currentScript.src;
  const resolve = imports => Object.fromEntries(Object.entries(imports ).map(([k, v]) => [k, new URL(v, mapUrl).href]));
  document.head.appendChild(Object.assign(document.createElement("script"), {
    type: "importmap",
    innerHTML: JSON.stringify({
      imports: resolve(map.imports),
      scopes: Object.fromEntries(Object.entries(map.scopes).map(([k, v]) => [new URL(k, mapUrl).href, resolve(v)]))
    })
  }));
})
({
  "imports": {
    "pkg2": "/Users/abourget/sf/jspmstub/pkg2/index.mjs"
  },
  "scopes": {
    "/Users/abourget/sf/jspmstub/pkg1/": {
      "@spectrum-web-components/icons-workflow/icons/sp-icon-email.js": "https://cdn.jsdelivr.net/npm/@spectrum-web-components/icons-workflow@1.9.0/icons/sp-icon-email.js",
      "lit": "https://cdn.jsdelivr.net/npm/lit@3.3.1/index.js"
    },
    "/Users/abourget/sf/jspmstub/pkg2/": {
      "pkg1": "/Users/abourget/sf/jspmstub/pkg1/index.mjs",
      "pkg1/other": "/Users/abourget/sf/jspmstub/pkg1/other.mjs"
    },
    "https://cdn.jsdelivr.net/npm/@spectrum-web-components/base@1.9.0/": {
      "@spectrum-web-components/base/src/version.js": "https://cdn.jsdelivr.net/npm/@spectrum-web-components/base@1.9.0/src/version.js",
      "lit": "https://cdn.jsdelivr.net/npm/lit@3.3.1/index.js",
      "lit/decorators.js": "https://cdn.jsdelivr.net/npm/lit@3.3.1/decorators.js",
      "lit/directives/class-map.js": "https://cdn.jsdelivr.net/npm/lit@3.3.1/directives/class-map.js",
      "lit/directives/if-defined.js": "https://cdn.jsdelivr.net/npm/lit@3.3.1/directives/if-defined.js",
      "lit/directives/join.js": "https://cdn.jsdelivr.net/npm/lit@3.3.1/directives/join.js",
      "lit/directives/live.js": "https://cdn.jsdelivr.net/npm/lit@3.3.1/directives/live.js",
      "lit/directives/ref.js": "https://cdn.jsdelivr.net/npm/lit@3.3.1/directives/ref.js",
      "lit/directives/repeat.js": "https://cdn.jsdelivr.net/npm/lit@3.3.1/directives/repeat.js",
      "lit/directives/style-map.js": "https://cdn.jsdelivr.net/npm/lit@3.3.1/directives/style-map.js",
      "lit/directives/unsafe-html.js": "https://cdn.jsdelivr.net/npm/lit@3.3.1/directives/unsafe-html.js",
      "lit/directives/until.js": "https://cdn.jsdelivr.net/npm/lit@3.3.1/directives/until.js",
      "lit/directives/when.js": "https://cdn.jsdelivr.net/npm/lit@3.3.1/directives/when.js"
    },
    "https://cdn.jsdelivr.net/npm/@spectrum-web-components/icon@1.9.0/": {
      "@spectrum-web-components/base": "https://cdn.jsdelivr.net/npm/@spectrum-web-components/base@1.9.0/src/index.js",
      "@spectrum-web-components/base/src/decorators.js": "https://cdn.jsdelivr.net/npm/@spectrum-web-components/base@1.9.0/src/decorators.js",
      "@spectrum-web-components/base/src/directives.js": "https://cdn.jsdelivr.net/npm/@spectrum-web-components/base@1.9.0/src/directives.js",
      "@spectrum-web-components/iconset/src/iconset-registry.js": "https://cdn.jsdelivr.net/npm/@spectrum-web-components/iconset@1.9.0/src/iconset-registry.js",
      "@spectrum-web-components/reactive-controllers/src/SystemContextResolution.js": "https://cdn.jsdelivr.net/npm/@spectrum-web-components/reactive-controllers@1.9.0/src/SystemContextResolution.js"
    },
    "https://cdn.jsdelivr.net/npm/@spectrum-web-components/icons-workflow@1.9.0/": {
      "@spectrum-web-components/base": "https://cdn.jsdelivr.net/npm/@spectrum-web-components/base@1.9.0/src/index.js",
      "@spectrum-web-components/base/src/define-element.js": "https://cdn.jsdelivr.net/npm/@spectrum-web-components/base@1.9.0/src/define-element.js",
      "@spectrum-web-components/icon": "https://cdn.jsdelivr.net/npm/@spectrum-web-components/icon@1.9.0/src/index.js"
    },
    "https://cdn.jsdelivr.net/npm/lit-element@4.2.1/": {
      "@lit/reactive-element": "https://cdn.jsdelivr.net/npm/@lit/reactive-element@2.1.1/reactive-element.js",
      "lit-html": "https://cdn.jsdelivr.net/npm/lit-html@3.3.1/lit-html.js"
    },
    "https://cdn.jsdelivr.net/npm/lit@3.3.1/": {
      "@lit/reactive-element": "https://cdn.jsdelivr.net/npm/@lit/reactive-element@2.1.1/reactive-element.js",
      "@lit/reactive-element/decorators/custom-element.js": "https://cdn.jsdelivr.net/npm/@lit/reactive-element@2.1.1/decorators/custom-element.js",
      "@lit/reactive-element/decorators/event-options.js": "https://cdn.jsdelivr.net/npm/@lit/reactive-element@2.1.1/decorators/event-options.js",
      "@lit/reactive-element/decorators/property.js": "https://cdn.jsdelivr.net/npm/@lit/reactive-element@2.1.1/decorators/property.js",
      "@lit/reactive-element/decorators/query-all.js": "https://cdn.jsdelivr.net/npm/@lit/reactive-element@2.1.1/decorators/query-all.js",
      "@lit/reactive-element/decorators/query-assigned-elements.js": "https://cdn.jsdelivr.net/npm/@lit/reactive-element@2.1.1/decorators/query-assigned-elements.js",
      "@lit/reactive-element/decorators/query-assigned-nodes.js": "https://cdn.jsdelivr.net/npm/@lit/reactive-element@2.1.1/decorators/query-assigned-nodes.js",
      "@lit/reactive-element/decorators/query-async.js": "https://cdn.jsdelivr.net/npm/@lit/reactive-element@2.1.1/decorators/query-async.js",
      "@lit/reactive-element/decorators/query.js": "https://cdn.jsdelivr.net/npm/@lit/reactive-element@2.1.1/decorators/query.js",
      "@lit/reactive-element/decorators/state.js": "https://cdn.jsdelivr.net/npm/@lit/reactive-element@2.1.1/decorators/state.js",
      "lit-element/lit-element.js": "https://cdn.jsdelivr.net/npm/lit-element@4.2.1/lit-element.js",
      "lit-html": "https://cdn.jsdelivr.net/npm/lit-html@3.3.1/lit-html.js",
      "lit-html/directives/class-map.js": "https://cdn.jsdelivr.net/npm/lit-html@3.3.1/directives/class-map.js",
      "lit-html/directives/if-defined.js": "https://cdn.jsdelivr.net/npm/lit-html@3.3.1/directives/if-defined.js",
      "lit-html/directives/join.js": "https://cdn.jsdelivr.net/npm/lit-html@3.3.1/directives/join.js",
      "lit-html/directives/live.js": "https://cdn.jsdelivr.net/npm/lit-html@3.3.1/directives/live.js",
      "lit-html/directives/ref.js": "https://cdn.jsdelivr.net/npm/lit-html@3.3.1/directives/ref.js",
      "lit-html/directives/repeat.js": "https://cdn.jsdelivr.net/npm/lit-html@3.3.1/directives/repeat.js",
      "lit-html/directives/style-map.js": "https://cdn.jsdelivr.net/npm/lit-html@3.3.1/directives/style-map.js",
      "lit-html/directives/unsafe-html.js": "https://cdn.jsdelivr.net/npm/lit-html@3.3.1/directives/unsafe-html.js",
      "lit-html/directives/until.js": "https://cdn.jsdelivr.net/npm/lit-html@3.3.1/directives/until.js",
      "lit-html/directives/when.js": "https://cdn.jsdelivr.net/npm/lit-html@3.3.1/directives/when.js",
      "lit-html/is-server.js": "https://cdn.jsdelivr.net/npm/lit-html@3.3.1/is-server.js"
    }
  }
});
