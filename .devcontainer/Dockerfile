FROM ubuntu:latest
RUN useradd -u 1001 dev
USER root

ENV DEBIAN_FRONTEND=noninteractive

# Install additional OS packages.
RUN apt-get update \
  && apt-get -y install --no-install-recommends \
  vim git unzip curl wget git-lfs \
  ca-certificates gnupg \
  tmux build-essential procps file zsh fzf

# Install NodeJS
RUN mkdir -p /etc/apt/keyrings
RUN curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg

ENV NODE_MAJOR=20
RUN echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list
RUN apt-get update \
  && apt-get -y install \
  nodejs

# Install Environment
COPY install.sh .
RUN chmod +x install.sh
RUN ./install.sh

# Persist bash history
RUN SNIPPET="export PROMPT_COMMAND='history -a' && export HISTFILE=/commandhistory/.bash_history" \
  && echo "$SNIPPET" >> "/root/.bashrc"

# Set the Node environment to development to ensure all packages are installed
ENV NODE_ENV development

# Clean up
RUN apt-get autoremove -y \
  && apt-get clean -y \
  && rm -rf /var/lib/apt/lists/*
ENV DEBIAN_FRONTEND=dialog \
  LANG=C.UTF-8 \
  LC_ALL=C.UTF-8