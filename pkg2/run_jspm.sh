#!/bin/bash

rm importmap.js
npx --yes jspm@4.1.4 install -C module,production -p jsdelivr --root / --resolution pkg1=/Users/abourget/sf/jspmstub/pkg1
cp importmap.js importmap-4.1.4.js

rm importmap.js
npx --yes jspm@4.0.3 install -C module,production -p jsdelivr --root / --resolution pkg1=/Users/abourget/sf/jspmstub/pkg1
cp importmap.js importmap-4.0.3.js
