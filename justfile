alias i := install
alias b := build
alias p := preview

default:
  just --list

install:
  brew install zola

build:
  zola build

preview:
  zola serve --open

optimize_media:
  pngquant --skip-if-larger --strip --quality=93-93 --speed 1 *.png
  oxipng -o max --strip all -a -Z *.png
  leanify -i 7777 *.png
  leanify -i 7777 *.ico
  ffmpeg -i thesis_notebooklm.wav -ar 16000 -b:a 32000 -ac 1 thesis_notebooklm.opus
  gs -sDEVICE=pdfwrite -dNOPAUSE -dQUIET -dBATCH -dPDFSETTINGS=/screen -dCompatibilityLevel=1.4 -sOutputFile=output.pdf input.pdf

minify:
  ...

PANDOC_INPUT := "publications/pandoc-input.md"
OUTPUT_HTML := "out/list.html"
BIBLIOGRAPHY := "publications/publications.bib"

bib2html:
  mkdir -p out
  pandoc --citeproc {{PANDOC_INPUT}} -o {{OUTPUT_HTML}} --bibliography={{BIBLIOGRAPHY}}

notebook2markdown path:
  jupyter-nbconvert --to markdown {{path}}

deploy:

