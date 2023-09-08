```bash
pandoc -t plain --citeproc src/routes/api/publications/*/citation.bib -o src/routes/api/publications/publications.txt --csl src/routes/api/publications/ieee.csl --from bibtex --wrap=none
pandoc -t markdown_strict --citeproc src/routes/api/publications/*/citation.bib -o src/routes/api/publications/publications.md --csl src/routes/api/publications/ieee.csl --from bibtex --wrap=none
```
