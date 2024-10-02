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
