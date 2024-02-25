# Proyek Akhir: Membangun Aplikasi Catatan Menggunakan React
![Nilai](./screenshots/penilaian.png)

```bash
# Perintah untuk menginstal semua paket yang diperlukan

npm run install
```

```bash
# Perintah untuk menjalankan project

npm run dev
```

```bash
# Perintah untuk build project

npm run build
```

```bash
# Perintah untuk preview project

npm run serve
```
## Buatlah aplikasi web menggunakan React yang dapat menambahkan dan menghapus catatan. Agar lebih jelasnya, berikut 3 kriteria utama pada “Aplikasi Catatan Pribadi” yang harus Anda buat.

### Kriteria Utama 1: Mampu Menampilkan Daftar Catatan
- Aplikasi harus mampu menampilkan daftar catatan dengan data awal (initial data) yang telah kami sediakan.
- Memanfaatkan state component untuk menyimpan data catatan.
- Menggunakan teknik array map untuk menampilkan daftar catatan.


### Kriteria Utama 2: Mampu Menambahkan Catatan
- Aplikasi harus mampu menambahkan data catatan baru.
- Memanfaatkan controlled component dalam membuat form input.
- Data catatan disimpan cukup pada memori saja (akan hilang jika browser di-refresh).
- Data catatan yang disimpan merupakan objek JavaScript dengan struktur berikut

```json
{
  id: number | string,
  title: string,
  body: string,
  archived: boolean, 
  createdAt: string,
}
```

Berikut contoh data riilnya:

```json
{
    id: 1,
    title: "Babel",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    archived: false,
    createdAt: '2022-04-14T04:27:34.572Z'
  },
  ```

**Catatan:**
Untuk id pada tiap catatan yang disimpan haruslah unik. Tips dalam menetapkan nilai untuk id adalah Anda bisa memanfaatkan nilai timestamp. Untuk mendapatkan nilai timestamp di JavaScript cukup mudah, cukup dengan menuliskan expressions +new Date().

### Kriteria Utama 3: Mampu Menghapus Catatan
- Aplikasi harus menyediakan tombol **hapus** untuk menghapus data catatan yang disimpan.
- Terdapat conditional rendering di mana bila tidak terdapat data catatan, maka UI menampilkan pesan **“Tidak ada catatan”** atau pesan apa pun yang mengindikasikan data catatan kosong.

## Selain kriteria utama, terdapat kriteria opsional yang yang dapat Anda penuhi agar mendapat nilai yang lebih tinggi.

### Kriteria Opsional 1: Terdapat Fitur Pencarian Catatan
- Aplikasi memiliki fitur pencarian catatan berdasarkan kata kunci yang dimasukkan, dengan ketentuan:
    - Jika kolom pencarian tidak kosong, maka aplikasi **hanya menampilkan daftar catatan yang judulnya mengandung kata kunci yang dimasukkan**.
    - Jika kolom pencariannya kosong, maka aplikasi menampilkan seluruh catatan.
- Memanfaatkan controlled component dalam membangun fitur catatan.

### Kriteria Opsional 2: Terdapat Limit Karakter pada Input Judul Catatan
- Aplikasi dapat mencegah pengguna untuk memberikan judul catatan lebih dari 50 karakter.
- Menggunakan state dalam melimitasi, bukan atribut maxlength.
- Menampilkan jumlah karakter tersisa yang dapat digunakan oleh pengguna.

### Kriteria Opsional 3: Terdapat Fitur Arsip Catatan
- Aplikasi memiliki fitur arsip catatan.
- Aplikasi harus menyediakan tombol **arsipkan/pindahkan** untuk mengarsipkan atau memindahkan catatan dari arsip.
- Daftar catatan yang diarsip harus ditampilkan pada tempat terpisah dari catatan yang tidak diarsip.

## Submission Anda akan dinilai oleh Reviewer dengan skala 1-5. Untuk mendapatkan nilai tinggi, Anda bisa menerapkan beberapa saran berikut:

- Menerapkan kriteria opsional 1: Terdapat Fitur Pencarian Catatan.
- Menerapkan kriteria opsional 2: Terdapat Limit Karakter pada Input Judul Catatan.
- Menerapkan kriteria opsional 3: Terdapat Fitur Arsip Catatan.
- Menuliskan kode dengan baik:
  - Tidak membuat class component yang tidak diperlukan.
  - Memecah UI menjadi komponen sekecil mungkin (sesuai tanggung jawabnya).
  - Gaya penulisan kode harus konsisten.