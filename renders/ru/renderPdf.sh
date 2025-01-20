# !/bin/bash
# Have to be in one folder with renders
# Can create styloish pdf with svae to pdf browsers feature
# or use pandoc xelatex engine, but i had an issue with styles
rm AD.html
pandoc ArsKarp.md -f markdown -t html5 -o AD.html
firefox $PWD/AD.html
