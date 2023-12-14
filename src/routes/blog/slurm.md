---
title: Post One
date: '2023-12-14'
published: false
---

# Helpful Slurm commands

1. Watch the queue (updates every 5 seconds):

```bash
watch -n 5 squeue -u $USER
```

2. Analyse running job array:

```bash
sacct -X -j <jobid> --format=jobid,state
```

Response example:

```
JobID             State
------------ ----------
818565_0        RUNNING
818565_1        RUNNING
...
818565_15       RUNNING
818565_16       RUNNING
```
