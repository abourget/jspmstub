Run:

After running https://github.com/abourget/jspmstub/blob/master/pkg2/run_jspm.sh :
```bash
cd pkg2
./run_jspm.sh
```

4.1.0 produces:
```
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
    ...
```

4.0.3 produces:
```
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
...
      "lit/directives/when.js": "https://cdn.jsdelivr.net/npm/lit@3.3.1/directives/when.js"
    },
    "https://cdn.jsdelivr.net/npm/@spectrum-web-components/icon@1.9.0/": {
      "@spectrum-web-components/base": "https://cdn.jsdelivr.net/npm/@spectrum-web-components/base@1.9.0/src/index.js",
...
```

