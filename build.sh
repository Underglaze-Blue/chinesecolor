#!/usr/bin/env sh

set -e
npm run build-page

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:Underglaze-Blue/chinesecolor.git master:gh-pages

cd -
