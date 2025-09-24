# Penjualan Website - Website Portfolio

Website penjualan jasa pembuatan website dengan desain modern dan responsif.

## Fitur Website

### Halaman Utama
- **Home** (`index.html`) - Landing page dengan showcase produk
- **About Us** (`about.html`) - Informasi tentang perusahaan dan tim
- **Services** (`services.html`) - Detail layanan yang ditawarkan
- **Portfolio** (`portfolio.html`) - Showcase project yang sudah dikerjakan
- **Pricing** (`pricing.html`) - Daftar harga paket website
- **Contact** (`contact.html`) - Form kontak dan informasi kontak
- **FAQ** (`faq.html`) - Pertanyaan yang sering diajukan
- **Testimonials** (`testimonials.html`) - Review dan testimonial klien
- **Terms of Service** (`terms.html`) - Syarat dan ketentuan
- **Privacy Policy** (`privacy.html`) - Kebijakan privasi

### Fitur Teknis
- ✅ Design responsif (mobile-friendly)
- ✅ Navigation menu dengan hamburger untuk mobile
- ✅ Form kontak dengan validasi
- ✅ Smooth scrolling
- ✅ Loading animations
- ✅ CSS Grid dan Flexbox layout
- ✅ Modern CSS dengan gradients dan shadows
- ✅ JavaScript untuk interaktivitas

## Struktur File

```
website_Jualan/
├── index.html          # Halaman utama
├── about.html          # Tentang kami
├── services.html       # Layanan
├── portfolio.html      # Portfolio
├── pricing.html        # Harga
├── contact.html        # Kontak
├── faq.html           # FAQ
├── testimonials.html   # Testimonial
├── terms.html         # Syarat & ketentuan
├── privacy.html       # Kebijakan privasi
├── style.css          # Styling utama
├── script.js          # JavaScript functionality
└── README.md          # Dokumentasi ini
```

## Cara Menggunakan

1. **Buka Website**
   - Buka file `index.html` di browser
   - Atau jalankan server lokal: `python -m http.server 8000`
   - Akses di `http://localhost:8000`

2. **Navigasi**
   - Gunakan menu navigasi di bagian atas
   - Di mobile, klik hamburger menu (☰) untuk membuka menu

3. **Form Kontak**
   - Isi form di halaman Contact
   - Form akan menampilkan alert konfirmasi
   - Di production, form ini perlu diintegrasikan dengan backend

4. **Tombol Beli**
   - Klik tombol "Beli Sekarang" untuk order
   - Akan redirect ke halaman purchase (perlu dibuat terpisah)

## Teknologi yang Digunakan

- **HTML5** - Struktur halaman
- **CSS3** - Styling dan layout
  - Flexbox dan CSS Grid
  - CSS Custom Properties
  - Media queries untuk responsive
  - Animations dan transitions
- **JavaScript (ES6+)**
  - DOM manipulation
  - Event handling
  - Form validation
  - Mobile menu functionality

## Styling

### Color Palette
- **Primary**: #4a90e2 (Blue)
- **Secondary**: #357ABD (Dark Blue)
- **Accent**: #e94e77 (Pink)
- **Background**: #f9f9f9 (Light Gray)
- **Text**: #333 (Dark Gray)

### Typography
- **Font Family**: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- **Headings**: Blue color dengan border bawah
- **Body Text**: 1.6 line height untuk readability

### Layout
- **Max Width**: 1200px untuk content
- **Responsive Breakpoints**: 768px untuk mobile
- **Grid System**: CSS Grid untuk portfolio dan features

## Customization

### Mengubah Warna
Edit file `style.css` dan ubah nilai custom properties:
```css
:root {
  --primary-color: #4a90e2;
  --secondary-color: #357ABD;
  --accent-color: #e94e77;
}
```

### Menambah Halaman Baru
1. Buat file HTML baru
2. Copy struktur dari halaman lain
3. Update navigation menu di semua file
4. Tambahkan link di footer

### Mengubah Konten
- Edit file HTML yang bersangkutan
- Update informasi kontak di footer
- Sesuaikan harga di halaman pricing

## Deployment

### Hosting Gratis
- **GitHub Pages**: Upload ke repository GitHub
- **Netlify**: Drag & drop folder ke netlify.com
- **Vercel**: Connect dengan GitHub repository

### Hosting Berbayar
- **Hostinger**: Mulai Rp 15.000/bulan
- **Niagahoster**: Mulai Rp 20.000/bulan
- **Domainesia**: Mulai Rp 25.000/bulan

## Support

Untuk pertanyaan atau support:
- Email: support@penjualanwebsite.com
- WhatsApp: 0812-3456-7890
- Telepon: (021) 1234-5678

## Lisensi

Website ini dibuat untuk keperluan portfolio dan edukasi. Silakan digunakan sebagai referensi untuk project serupa.

---

**Dibuat dengan ❤️ untuk membantu bisnis online Anda**
