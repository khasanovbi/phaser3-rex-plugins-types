#!/usr/bin/env bash
set -x

find ./node_modules/phaser3-rex-plugins -name "GridTable.js" -print0 |
while IFS= read -r -d '' line; do
    dist_path="./@types/phaser3-rex-plugins${line#./node_modules}"
    dist_path="${dist_path%.[^.]*}"
    mkdir -p "$(dirname $dist_path)"
    dtsmake  -e -S es6 -n ololo --src "$line" --dist "$dist_path" #--debug
done
