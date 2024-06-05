<p align="center">
  <a href="https://nextjs.org">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://i.pinimg.com/236x/0b/ad/9a/0bad9ac6069bb024d04023fe0370a812.jpg">
    </picture>
    <h1 align="center">bayardulu encryption</h1>
    <h3 align="center">Sebuah script node.js untuk meng-encrypt source code project client kamu yang bandel.</h3>
  </a>
</p>

<p align=center>
  <a href="https://www.npmjs.com/package/bayardulu"><img src="https://badge.fury.io/js/bayardulu.png" alt="NPM Version"/><a>
</p>

## Requirements

- Node.js
- NPM / Yarn

## Warning

Gunakan script ini dengan hati-hati.
Secara default, script ini akan meng-encrypt semua file dan folder di mana anda menjalankan command `bayardulu` (Current Working Directory).
Jangan sampai kalian tanpa sengaja meng-encrypt seluruh storage kalian.
Saya tidak bertanggung jawab atas segala kesalahan yang terjadi karena kecerobohan user.

## Installation

1. Install package

- Local
  - NPM
    ```bash
    npm install bayardulu --save-dev
    ```
  - Yarn
    ```bash
    yarn add bayardulu --dev
    ```
- Global (bisa dijalankan di mana saja, tapi tidak direkomendasikan karena sangat berisiko)
  - NPM
    ```bash
    npm install -g bayardulu
    ```
  - Yarn
    ```bash
    yarn global add bayardulu
    ```

## Usage

1. Masuk ke folder project yang ingin di-encrypt

```bash
cd path/project
```

2. Run command

- Local

  - NPM

    ```bash
    # encrypt
    npx bayardulu encrypt

    # decrypt
    npx bayardulu decrypt
    ```

  - Yarn

    ```bash
    # encrypt
    yarn run bayardulu encrypt

    # decrypt
    yarn run bayardulu decrypt
    ```

- Global

  ```bash
  # encrypt
  bayardulu encrypt

  # decrypt
  bayardulu decrypt
  ```

## Advanced Usage

### Meng-encrypt satu file (atau lebih)

```bash
npx bayardulu encrypt [nama_file_1] [nama_file_2] [dst]
```

### Mengubah extension

```bash
npx bayardulu encrypt [nama_file] -x plongaplongo
# npx bayardulu encrypt [nama_file] --extension plongaplongo
```

### Mengubah secret key

```bash
npx bayardulu encrypt [nama_file] -k awokawokawok
# npx bayardulu encrypt [nama_file] --secret-key awokawokawok
```

### Men-decrypt satu file (atau lebih)

```bash
npx bayardulu decrypt [nama_file_1] [nama_file_2] [dst]
```

### Men-decrypt satu file dan timpa (file yang encrypted secara otomatis terhapus setelah di-decrypt)

```bash
npx bayardulu decrypt [nama_file_1] -o
# npx bayardulu decrypt [nama_file_1] --overwrite
```

### Menampilkan menu bantuan

```bash
npx bayardulu -h
# npx bayardulu --help
```

### Menampilkan nomor versi

```bash
npx bayardulu -v
# npx bayardulu --version
```

## Environment Variable

- `BAYARDULU_KEY` = Secret key untuk enkripsi
- `BAYARDULU_EXT` = Extension file hasil enkripsi

## Support

Klik tombol di bawah untuk mendukung saya lewat donasi

<p align="center">
  <a href="#">
    <img src="https://i.postimg.cc/jjRDbZQx/1621036430601.png" width="125px">
  </a>
</p>

## Informasi lebih lanjut

Apabila ada yang mau ditanyakan soal skrip ini, bisa langsung pm saya:

<p align=center>
<a href="#" target="_blank"><img src="https://img.shields.io/badge/Contact-me-green?style=for-the-badge"/></a>
</p>
