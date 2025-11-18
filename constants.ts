
import { Level } from './types';

export const GAME_LEVELS: Level[] = [
  {
    id: 1,
    title: "Level 1: Mesin Inti",
    concept: "Dekomposisi",
    story: "Mesin inti mengalami malfungsi! Kita perlu memahami komponennya untuk memperbaikinya. Ini adalah kasus klasik untuk dekomposisi.",
    npc: "LUNO",
    dialogue: "Aero, untuk memperbaiki mesin ini, kita harus memecah masalahnya. Seret setiap komponen ke slot yang benar untuk memahami bagaimana semuanya terhubung. Inilah dekomposisi dalam aksi!",
    puzzle: {
      type: 'decomposition',
      description: 'Rakit kembali mesin inti dengan menyeret komponen ke slot yang benar.',
      data: {
        parts: [
          { id: 'p1', name: 'Konverter Daya' },
          { id: 'p2', name: 'Pompa Pendingin' },
          { id: 'p3', name: 'Papan Logika' },
          { id: 'p4', name: 'Sel Energi' },
        ],
        slots: [
          { id: 's1', accepts: 'p1', label: 'Slot Konverter' },
          { id: 's2', accepts: 'p2', label: 'Input Pendingin' },
          { id: 's3', accepts: 'p3', label: 'CPU Mainframe' },
          { id: 's4', accepts: 'p4', label: 'Baterai Utama' },
        ]
      }
    },
    quiz: [
      { question: "Apa itu dekomposisi?", options: ["Menggabungkan masalah", "Memecah masalah menjadi bagian-bagian yang lebih kecil", "Mengabaikan masalah", "Menemukan pola"], correctAnswer: "Memecah masalah menjadi bagian-bagian yang lebih kecil" },
      { question: "Mengapa dekomposisi berguna?", options: ["Membuat masalah lebih sulit", "Membuat masalah kompleks lebih mudah dikelola", "Tidak berguna", "Hanya berfungsi untuk komputer"], correctAnswer: "Membuat masalah kompleks lebih mudah dikelola" },
    ]
  },
  {
    id: 2,
    title: "Level 2: Gerbang Kuno",
    concept: "Pengenalan Pola",
    story: "Gerbang kuno ini disegel oleh kunci holografik. Urutannya tampaknya mengikuti pola tertentu. Mengenalinya adalah satu-satunya cara untuk melewatinya.",
    npc: "Penjaga Gerbang",
    dialogue: "Untuk lewat, kamu harus melihat yang tak terlihat. Amati urutan cahayanya, temukan polanya, dan tiru. Hanya dengan begitu jalan akan terbuka.",
    puzzle: {
      type: 'pattern',
      description: 'Amati urutan holografik dan ulangi dengan benar.',
      data: {
        sequence: [0, 2, 1, 3],
        gridSize: 4,
      }
    },
    quiz: [
      { question: "Apa itu pengenalan pola?", options: ["Membuat data acak", "Mengabaikan kesamaan", "Mengidentifikasi tren dan keteraturan dalam data", "Jenis virus komputer"], correctAnswer: "Mengidentifikasi tren dan keteraturan dalam data" },
      { question: "Manakah contoh pengenalan pola?", options: ["Melupakan nomor telepon", "Memprediksi angka berikutnya dalam 2, 4, 6, 8...", "Menulis cerita", "Menebak jawaban secara acak"], correctAnswer: "Memprediksi angka berikutnya dalam 2, 4, 6, 8..." },
    ]
  },
  {
    id: 3,
    title: "Level 3: Hutan Data",
    concept: "Abstraksi",
    story: "Hutan Data dipenuhi dengan informasi yang berlebihan. Kita perlu menemukan simpul data inti untuk melewatinya. Yang lainnya hanyalah gangguan.",
    npc: "Master Data",
    dialogue: "Fokus hanya pada hal yang penting. Hutan ini penuh dengan gangguan. Identifikasi dan pilih hanya simpul data kunci untuk membuka jalan. Inilah seni abstraksi.",
    puzzle: {
      type: 'abstraction',
      description: 'Klik pada simpul data penting sambil mengabaikan yang rusak atau tidak relevan.',
      data: {
        nodes: [
          { id: 'n1', type: 'key', label: 'Data Inti' },
          { id: 'n2', type: 'junk', label: 'Adware.dll' },
          { id: 'n3', type: 'key', label: 'Otentikasi Pengguna' },
          { id: 'n4', type: 'junk', label: 'temp_log.tmp' },
          { id: 'n5', type: 'key', label: 'Kernel Sistem' },
          { id: 'n6', type: 'junk', label: 'Spam Email' },
        ]
      }
    },
    quiz: [
      { question: "Apa yang dimaksud dengan abstraksi?", options: ["Menambahkan lebih banyak detail", "Fokus pada informasi penting dan mengabaikan detail yang tidak relevan", "Membuat sesuatu menjadi lebih kompleks", "Menyalin semuanya"], correctAnswer: "Fokus pada informasi penting dan mengabaikan detail yang tidak relevan" },
      { question: "Peta adalah contoh abstraksi karena:", options: ["Sulit dibaca", "Menunjukkan setiap pohon dan batu", "Menyederhanakan dunia nyata untuk menunjukkan fitur utama seperti jalan dan kota", "Selalu akurat"], correctAnswer: "Menyederhanakan dunia nyata untuk menunjukkan fitur utama seperti jalan dan kota" },
    ]
  },
  {
    id: 4,
    title: "Level 4: Gerbang Algoritma",
    concept: "Algoritma",
    story: "Gerbang terakhir. Untuk menonaktifkan BUGTRON, kita harus memasukkan urutan perintah yang tepat. Satu langkah salah bisa merusak seluruh sistem!",
    npc: "LUNO",
    dialogue: "Ini dia, Aero! Kita butuh rencana langkah-demi-langkah yang jelas. Susun perintah dalam urutan yang benar untuk membuat algoritma yang akan membuka gerbang dan menjebak BUGTRON.",
    puzzle: {
      type: 'algorithm',
      description: 'Susun langkah-langkah perintah dalam urutan yang benar untuk membuat algoritma pembuka kunci.',
      data: {
        steps: [
          { id: 'a4', text: 'Aktifkan Protokol Anti-Virus' },
          { id: 'a1', text: 'Mulai Urutan Daya' },
          { id: 'a3', text: 'Bersihkan Virus BUGTRON' },
          { id: 'a2', text: 'Verifikasi Jabat Tangan Keamanan' },
        ],
        correctOrder: ['a1', 'a2', 'a3', 'a4']
      }
    },
    quiz: [
      { question: "Apa itu algoritma?", options: ["Tebakan acak", "Jenis perangkat keras komputer", "Serangkaian instruksi langkah-demi-langkah untuk menyelesaikan masalah", "Kesalahan komputer"], correctAnswer: "Serangkaian instruksi langkah-demi-langkah untuk menyelesaikan masalah" },
      { question: "Resep untuk membuat kue adalah contoh dari:", options: ["Dekomposisi", "Sebuah algoritma", "Abstraksi", "Sebuah pola"], correctAnswer: "Sebuah algoritma" },
    ]
  }
];
