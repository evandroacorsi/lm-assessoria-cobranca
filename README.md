### Site para LM Assessoria em Cobranças

## Build local

```bash
npm ci
npm run build
```

O build estático é gerado em `dist/client`.

## Deploy no GitHub Pages

O workflow `.github/workflows/deploy-pages.yml` publica automaticamente o conteúdo de `dist/client` no GitHub Pages quando houver push na branch `main`.

No GitHub, confira em **Settings > Pages** se a origem está configurada como **GitHub Actions**.
