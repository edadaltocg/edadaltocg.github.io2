#!/bin/zsh

# Clone dotfiles
cd /root
rm -r dotfiles
git clone https://github.com/edadaltocg/dotfiles.git

# Copy all dotfiles to $HOME
cp -rT dotfiles .

# Source config files
source /root/.zshrc
