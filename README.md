# Puskesmas Site (Public Website)

Landing website publik untuk UPTD Puskesmas Poned Balowerti.

## Stack

- Vite
- React + TypeScript
- Tailwind CSS

## Fitur Utama

- Halaman profil layanan, dokter, fasilitas, testimoni
- Story/visual section untuk reservasi
- Integrasi menu `Crew Portal` ke dashboard
- Sinkronisasi ulasan Google ke JSON lokal

## Menjalankan Lokal

```bash
npm install
npm run dev
```

Default URL: `http://localhost:5173`

## Scripts

- `npm run dev` - jalankan mode development
- `npm run build` - build production
- `npm run preview` - preview build
- `npm run lint` - lint code
- `npm run sync:reviews` - sinkronisasi Google reviews ke file lokal

## Environment Variables

Lihat `.env.example`.

Variabel penting:

- `VITE_CREW_PORTAL_URL` - URL dashboard untuk menu Crew Portal
- `GOOGLE_MAPS_API_KEY` - API key Google Places (untuk sync reviews)
- `GOOGLE_PLACE_QUERY` - query lokasi tempat
- `GOOGLE_REVIEW_PAGE_URL` - URL halaman review publik
- `GOOGLE_REVIEWS_OUTPUT` - path output JSON review

## Asset dan Data

- `public/images/` - aset visual
- `public/data/google-reviews.json` - data review yang dipakai komponen testimoni/review

## Dokumen Terkait

- [Server Guide](./SERVER_GUIDE.md)
- [Root Architecture](../ARCHITECTURE.md)
- [Operations Guide](../docs/OPERATIONS.md)

