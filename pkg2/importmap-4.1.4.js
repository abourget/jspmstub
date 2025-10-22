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
    "/Users/abourget/sf/jspmstub/": {
      "@spectrum-web-components/icons-workflow/icons/sp-icon-email.js": "https://cdn.jsdelivr.net/npm/@spectrum-web-components/icons-workflow@1.9.0/icons/sp-icon-email.js",
      "lit": "https://cdn.jsdelivr.net/npm/lit@3.3.1/index.js",
      "pkg1": "/Users/abourget/sf/jspmstub/pkg1/index.mjs",
      "pkg1/other": "/Users/abourget/sf/jspmstub/pkg1/other.mjs"
    },
    "https://cdn.jsdelivr.net/": {
      "@lit/reactive-element": "https://cdn.jsdelivr.net/npm/@lit/reactive-element@2.1.1/reactive-element.js",
      "@lit/reactive-element/decorators/": "https://cdn.jsdelivr.net/npm/@lit/reactive-element@2.1.1/decorators/",
      "@spectrum-web-components/base": "https://cdn.jsdelivr.net/npm/@spectrum-web-components/base@1.9.0/src/index.js",
      "@spectrum-web-components/base/src/": "https://cdn.jsdelivr.net/npm/@spectrum-web-components/base@1.9.0/src/",
      "@spectrum-web-components/icon": "https://cdn.jsdelivr.net/npm/@spectrum-web-components/icon@1.9.0/src/index.js",
      "@spectrum-web-components/iconset/src/iconset-registry.js": "https://cdn.jsdelivr.net/npm/@spectrum-web-components/iconset@1.9.0/src/iconset-registry.js",
      "@spectrum-web-components/reactive-controllers/src/SystemContextResolution.js": "https://cdn.jsdelivr.net/npm/@spectrum-web-components/reactive-controllers@1.9.0/src/SystemContextResolution.js",
      "lit": "https://cdn.jsdelivr.net/npm/lit@3.3.1/index.js",
      "lit-element/lit-element.js": "https://cdn.jsdelivr.net/npm/lit-element@4.2.1/lit-element.js",
      "lit-html": "https://cdn.jsdelivr.net/npm/lit-html@3.3.1/lit-html.js",
      "lit-html/": "https://cdn.jsdelivr.net/npm/lit-html@3.3.1/",
      "lit/": "https://cdn.jsdelivr.net/npm/lit@3.3.1/"
    }
  }
});
