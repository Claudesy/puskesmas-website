# Site Server Guide

Panduan menjalankan dan menjaga service `site` (Vite).

## Start Dev Server

```bash
npm install
npm run dev -- --host 0.0.0.0 --port 5173
```

Jika tanpa argumen tambahan:

```bash
npm run dev
```

## Build & Preview

```bash
npm run build
npm run preview
```

## Runtime Files

Folder `runtime/` dipakai untuk menyimpan log lokal saat development.

Contoh file:

- `runtime/site-dev.out.log`
- `runtime/site-dev.err.log`
- `runtime/site-dev.pid`

## Health Check

- Akses `http://localhost:5173`
- Pastikan section utama tampil normal
- Cek menu `Crew Portal` membuka URL dashboard yang benar

## Common Issues

## Port 5173 dipakai proses lain

- Jalankan server di port lain:

```bash
npm run dev -- --port 5174
```

## Data review tidak update

1. Pastikan `GOOGLE_MAPS_API_KEY` valid.
2. Jalankan:

```bash
npm run sync:reviews
```

3. Verifikasi output di `public/data/google-reviews.json`.

