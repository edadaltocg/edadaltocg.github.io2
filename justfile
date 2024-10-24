alias i := install
alias b := build
alias p := preview

default:
  just --list

build:
  zola build

install:
  ...

preview:
  zola serve --open

optimize_png:
  pngquant --skip-if-larger --strip --quality=93-93 --speed 1 *.png
  oxipng -o max --strip all -a -Z *.png
  leanify -i 7777 *.png
  leanify -i 7777 *.ico

PANDOC_INPUT := "publications/pandoc-input.md"
OUTPUT_HTML := "out/list.html"
BIBLIOGRAPHY := "publications/publications.bib"

bib2html:
  mkdir -p out
  pandoc --citeproc {{PANDOC_INPUT}} -o {{OUTPUT_HTML}} --bibliography={{BIBLIOGRAPHY}}

# jupyter-nbconvert --to markdown  content/blog/2dgs/2dgs.ipynb
