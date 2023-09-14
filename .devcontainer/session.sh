#!/bin/zsh

SESSIONNAME="script"

tmux new-session -s $SESSIONNAME -n portfolio -d
tmux split-window -h
tmux split-window -h
# exit pane
tmux select-pane -t 2
# terminal pane
tmux source-file /root/.tmux.conf
tmux send-keys -t $SESSIONNAME "zsh" C-m
tmux select-pane -t 1
tmux send-keys -t $SESSIONNAME "exit" C-m
tmux send-keys -t $SESSIONNAME "exit" C-m
# dev pane
tmux select-pane -t 3
tmux send-keys -t $SESSIONNAME "npm run dev" C-m 
tmux select-pane -t 2


tmux attach -t $SESSIONNAME
