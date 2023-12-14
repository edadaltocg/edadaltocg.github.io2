#!/usr/bin/env bash

apt_packages="curl git iproute2 python3-pip tmux vim zsh fzf xclip neovim"
apt_packages_optional="gnupg htop jq rsync shellcheck unzip openssh-client"

apt-get update && apt-get install -y ${apt_packages} ${apt_packages_optional}

# Install Oh My Zsh
ZSH=
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended

# Install Oh My Zsh plugins
git clone https://github.com/zsh-users/zsh-autosuggestions ~/.zsh/zsh-autosuggestions

git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

# Change default shell to zsh
chsh -s $(which zsh)
