# !/bin/bash
# Have to be in one folder with renders
pandoc ArsKarp.md -f markdown -t pdf -o ArsentiiKarpov.pdf --pdf-engine=xelatex
