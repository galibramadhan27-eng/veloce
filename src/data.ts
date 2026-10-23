const img = (name: string) => `/images/${name}.jpg`;

export const services = [
  { name: "Hypercar V12", img: img("hypercar-v12"), desc: "Mesin V12 aspirasi alami 820 HP dengan sasis serat karbon monokok.", detail: "Produksi terbatas 250 unit per tahun, setiap unit dirakit manual selama 600 jam kerja. Termasuk personalisasi warna, interior kulit, dan sesi uji lintasan." },
  { name: "Electric GT", img: img("electric-gt"), desc: "Grand tourer listrik 1.000 HP dengan jangkauan 650 km.", detail: "Baterai solid-state 120 kWh, pengisian 10–80% dalam 14 menit, torque vectoring empat motor, dan mode Track yang bisa dikalibrasi lewat aplikasi." },
  { name: "Custom Atelier", img: img("custom-atelier"), desc: "Layanan personalisasi eksklusif sesuai karakter pemilik.", detail: "Pilih lebih dari 400 warna cat, 60 jenis material interior, bordir inisial, hingga desain pelek unik. Dikerjakan tim desainer bersama Anda." },
  { name: "Heritage Service", img: img("heritage-service"), desc: "Perawatan, restorasi, dan sertifikasi mobil klasik maupun modern.", detail: "Teknisi bersertifikat pabrik, suku cadang orisinal, garansi 5 tahun, serta layanan jemput antar dengan transporter tertutup." },
];

export const gallery = ["g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8"].map((_s, i) => ({
  src: img("gallery-" + (i + 1)),
  alt: `Galeri VELOCE ${i + 1}`,
}));

export const LAMBO_NEWSROOM = "https://www.lamborghini.com/en-en/newsroom";
export const LAMBO_HOME = "https://www.lamborghini.com/en-en";

export type Article = {
  title: string; date: string; tag: string;
  img: string; fallback: string;
  excerpt: string; body: string[];
  facts: [string, string][];
  source: string;
};

export const articles: Article[] = [
  {
    title: "Monterey Car Week: Panggung bagi Legenda Lamborghini",
    date: "10 Agustus 2026", tag: "Event",
    img: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2026/08_10_monterey_week/cover_0.jpg",
    fallback: img("news-1"),
    excerpt: "Dari Diablo SV Monterey Edition 1998 hingga Fenomeno 2025, Monterey selalu jadi tempat Lamborghini memamerkan karya terbaiknya.",
    body: [
      "Hubungan Lamborghini dengan Monterey Car Week di California dimulai pada 1998 lewat Diablo SV Monterey Edition, seri khusus yang hanya dibuat 20 unit untuk ajang tersebut. Sejak saat itu, Monterey menjadi salah satu panggung terpenting bagi merek asal Sant'Agata Bolognese ini.",
      "Dalam satu dekade terakhir, hampir setiap tahun Lamborghini membawa setidaknya satu world premiere ke Monterey. Daftarnya panjang: Concept S, Aventador LP 750-4 SV Roadster, Centenario Roadster, Aventador SVJ Coupé dan Roadster, Countach LPI 800-4, Urus Performante, konsep Lanzador, Temerario, hingga Fenomeno.",
      "Beberapa di antaranya punya cerita yang menarik. Concept S (2005) adalah model tunggal berbasis Gallardo dengan V10 aspirasi alami sekitar 500 hp dan tanpa kaca depan konvensional. Aventador LP 750-4 SV Roadster (2015) membawa V12 750 hp dan dibatasi 500 unit. Centenario Roadster (2016) dengan V12 6,5 liter 770 hp terjual habis seluruh 20 unitnya bahkan sebelum diperkenalkan secara resmi.",
      "Aventador SVJ (2018) mencatat rekor mobil produksi di Nürburgring Nordschleife dengan waktu 6:44,97, sementara edisi SVJ 63 Roadster (2019) dibuat untuk merayakan tahun berdirinya Lamborghini, 1963. Countach LPI 800-4 (2021) memadukan V12 6,5 liter dengan motor listrik 48 volt untuk total 814 hp dan hanya dibuat 112 unit.",
      "Era elektrifikasi terlihat jelas pada tiga model terakhir: Urus Performante (2022) dengan V8 twin-turbo 666 hp, konsep Lanzador (2023) sebagai GT 2+2 bertenaga listrik penuh dengan target output di atas satu megawatt, dan Temerario (2024) yang memakai V8 twin-turbo plug-in hybrid dengan tiga motor listrik sebagai pengganti Huracán. Pada 2025, Fenomeno tampil dengan V12 aspirasi alami hybrid, dibatasi hanya 29 unit.",
      "Untuk edisi 2026, Lamborghini memperkenalkan turunan pertama dari Revuelto, evolusi terbaru supercar hybrid V12-nya. Hadir pula Revuelto Miura 60° Homage, seri 99 unit hasil kerja Ad Personam dan Lamborghini Centro Stile untuk memperingati 60 tahun Miura.",
      "Chairman dan CEO Stephan Winkelmann menyebut Monterey Car Week memiliki tempat khusus dalam sejarah Lamborghini. Ia juga mencatat bahwa California saja akan masuk lima pasar teratas Lamborghini di dunia, yang menjelaskan mengapa ajang ini begitu penting bagi perusahaan."
    ],
    facts: [["Debut Monterey", "Diablo SV Monterey Edition, 1998 (20 unit)"], ["Rekor Nordschleife", "Aventador SVJ, 6:44,97"], ["Seri 2026", "Revuelto Miura 60° Homage, 99 unit"], ["Pasar AS", "California masuk 5 besar dunia"]],
    source: "https://www.lamborghini.com/en-en/news/monterey-car-week-a-stage-for-lamborghini-legends",
  },
  {
    title: "Urus SE Tettonero Capsule Debut di Milan Design Week",
    date: "24 April 2026", tag: "Peluncuran",
    img: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2026/04_24_dw/cover.jpg",
    fallback: img("news-2"),
    excerpt: "Edisi terbatas 630 unit dengan palet warna terluas di kelas super SUV, hadir dalam versi Viola Pasifae dan Verde Mercurius.",
    body: [
      "Pada Milano Design Week 2026, Lamborghini memperkenalkan Urus SE Tettonero Capsule dalam dua versi warna, Viola Pasifae dan Verde Mercurius. Capsule ini diproduksi terbatas 630 unit dan diposisikan sebagai super SUV dengan rentang warna terluas di segmennya.",
      "Atap, pilar, serta detail atas dan bawah dibungkus Nero Shiny, dipadukan dengan enam warna bodi, termasuk Giallo Tenerife dan Verde Mercurius yang baru. Ditambah enam warna livery, pemilik bisa memilih lebih dari 70 kombinasi eksterior dan interior. Pelek tersedia hingga 23 inci, lengkap dengan kaliper rem berwarna dan logo \"63\".",
      "Kabinnya berbasis Nero Ade dengan warna kontras, elemen serat karbon, serta material Corsa-Tex dan Dinamica. Hasilnya tampilan sporty yang tetap bisa diubah sesuai karakter pemiliknya.",
      "Di balik tampilannya, Urus SE adalah plug-in hybrid dengan V8 4.0 liter twin-turbo, motor listrik, dan baterai lithium-ion 25,9 kWh. Tenaganya 800 CV dengan torsi 950 Nm, mampu 0–100 km/jam dalam 3,4 detik, 0–200 km/jam dalam 11,2 detik, dan kecepatan maksimum 312 km/jam. Jarak tempuh mode listrik lebih dari 60 km, dengan torque splitter terpusat dan diferensial belakang yang dikontrol elektronik.",
      "Peluncuran digelar di MAGMA, ruang industri di Milan, dengan tema Fuorisalone \"Be the Project\" dan konsep \"Dream\". Pengalaman tamu bergerak dari suasana lembut dan atmosferik menuju ruang yang lebih tajam, berakhir pada momen pengungkapan mobil. Chef berbintang Michelin Enrico Croatti menyiapkan menu tasting yang warnanya mengikuti palet Capsule. Di area luar, Revuelto Blu Eliadi dan Temerario Verde Citrea ikut dipajang.",
      "Federico Foschini, Chief Marketing and Sales Officer, menegaskan bahwa Ad Personam bukan sekadar konfigurasi, melainkan cara bagi klien untuk mengekspresikan diri. Hampir 96% mobil Lamborghini memang dipesan dengan setidaknya satu fitur Ad Personam.",
      "Sebagai latar, Lamborghini mengirim 10.747 mobil secara global pada 2025, dengan sekitar 3.000 karyawan dan kehadiran di 57 negara lewat 186 dealer. Perusahaan berdiri pada 1963 di Sant'Agata Bolognese, dan Centro Stile-nya dibentuk pada 2004."
    ],
    facts: [["Produksi", "630 unit"], ["Tenaga", "800 CV / 950 Nm"], ["0–100 km/jam", "3,4 detik"], ["Kecepatan maks.", "312 km/jam"], ["Jarak mode listrik", "> 60 km"]],
    source: "https://www.lamborghini.com/en-en/news/urus-se-tettonero-capsule-debuts-milan-design-week",
  },
  {
    title: "Temerario Spesial Tampil di Art Basel Miami 2025",
    date: "4 Desember 2025", tag: "Ad Personam",
    img: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2025/12_04_art_basel/cover.jpg",
    fallback: img("news-3"),
    excerpt: "Temerario Ad Personam dengan cat kristal 320 jam kerja menjadi Temerario pertama yang dikirim ke benua Amerika.",
    body: [
      "Lamborghini memperkenalkan Temerario Ad Personam khusus di acara eksklusif Miami Beach, bertempat di 1111 Lincoln Road, bersamaan dengan Art Basel Miami 2025. Lebih dari 500 pelanggan dan tamu VIP hadir, dan mobil ini adalah Temerario pertama yang dikirim ke Amerika.",
      "Temerario ditenagai V8 twin-turbo hybrid baru yang mampu berputar hingga 10.000 rpm, kemampuan yang menurut Lamborghini tidak dimiliki supercar produksi lain. Mobil ini dibuat di Sant'Agata Bolognese dan pengiriman ke pelanggan dimulai pada kuartal pertama 2026.",
      "Sorotan utamanya adalah efek cat kristal yang memerlukan 320 jam pengerjaan tangan. Warna Verde Shock, Grigio Maat, dan Nero Nemesis disatukan dalam pola artistik yang mempertegas garis aerodinamika bodi. Paket Alleggerita memakai serat karbon secara ekstensif bagi pelanggan yang berfokus pada performa lintasan.",
      "Di dalam, kursi sport berwarna Grigio Octans dipadu aksen Verde Scandal. Penutup tombol start-stop mengulang perlakuan cat kristal yang sama. Logo Temerario di kursi dan emblem banteng di dinding belakang disulam dengan teknik Selleria, sama rumitnya dengan pola di bodi. Sebuah plakat Ad Personam di kabin menjadi sertifikat bahwa mobil ini dibuat khusus.",
      "Acara dihadiri Stephan Winkelmann (Chairman dan CEO), Federico Foschini (Chief Marketing and Sales Officer), dan Andrea Baldi (CEO Automobili Lamborghini America). Winkelmann menyebut mobil ini bukti filosofi bahwa kemewahan sejati ada pada personalisasi.",
      "Lamborghini juga menampilkan inisiatif digital. Konfigurasi khusus ini hadir di Fast ForWorld dengan kembaran digital 1:1 di konfigurator platform tersebut. Ada pula Ledger Stax x Lamborghini Edition untuk mengamankan aset digital, Lamborghini ID yang dibuat bersama Moca Network untuk verifikasi kepemilikan dan akses ke pengalaman eksklusif, serta simulator Vesaro untuk berkendara virtual.",
      "Model lain yang dipamerkan adalah Urus SE, Urus pertama berteknologi plug-in hybrid dengan 800 hp, dan Revuelto, mobil produksi paling bertenaga Lamborghini: mid-engine HPEV dengan V12 6,5 liter aspirasi alami dan tiga motor listrik, total 1.015 hp."
    ],
    facts: [["Putaran mesin", "hingga 10.000 rpm"], ["Cat kristal", "320 jam kerja tangan"], ["Pengiriman", "Mulai Q1 2026"], ["Revuelto", "1.015 hp"]],
    source: "https://www.lamborghini.com/en-en/news/a-special-temerario-takes-art-basel-miami-2025",
  },
];

export const org = [
  { role: "CEO", name: "Alessandro Rinaldi" },
  { role: "Direktur Teknik", name: "Marco Bellini" },
  { role: "Direktur Desain", name: "Giulia Moretti" },
  { role: "Direktur Operasional", name: "Rudi Hartanto" },
];

export const stats = [
  { n: 62, s: "+", l: "Tahun Berkarya" },
  { n: 820, s: " HP", l: "Tenaga Puncak" },
  { n: 48, s: "", l: "Negara Dealer" },
  { n: 15, s: "K", l: "Pemilik Setia" },
];

export const strengths = [
  { t: "Performa Tanpa Kompromi", d: "Rekayasa lintasan balap yang diterjemahkan untuk jalan raya." },
  { t: "Kerajinan Tangan", d: "Setiap unit dirakit manual oleh teknisi master berpengalaman." },
  { t: "Desain Ikonik", d: "Garis tajam dan aerodinamika aktif yang langsung dikenali." },
  { t: "Layanan Seumur Hidup", d: "Jaringan servis global dan garansi hingga 5 tahun." },
];