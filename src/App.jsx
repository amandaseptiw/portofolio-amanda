import React, { useState, useEffect, useRef } from 'react';
import './App.css';

// --- IMPORT FOTO PROFIL ---
import fotoId from './assets/fotoid.png';

// --- IMPORT GAMBAR SERTIFIKAT ---
import certMsib7 from './assets/sertif/msib 7 ai.png';
import certInternIl from './assets/sertif/intern il.png';
import certMsib6 from './assets/sertif/msib 6.png';
import certDataScience from './assets/sertif/data science.png';
import certOracleInt from './assets/sertif/oracle intermediate.png';
import certSqlInt from './assets/sertif/sql intermediate.png';
import certOracleBeg from './assets/sertif/oracle beginner.png';
import certSqlBeg from './assets/sertif/sql begginer.png';
import certFundDbms from './assets/sertif/fundamental dbms.png';
import certFundDesktop from './assets/sertif/fundamental dekstop.png';
import certHtml5 from './assets/sertif/workshop html 5.png';
import certMame2020 from './assets/sertif/mame 2020.png';
import certMame2019 from './assets/sertif/mame 2019.png';
import certPM from './assets/sertif/dasar management proyek.png';
import certSW from './assets/sertif/dasar pengembang software.png';

// --- IMPORT GAMBAR PORTFOLIO / PROJECT ---
import projMR from './assets/portfolio/3d mr.png';
import projInven from './assets/portfolio/login inventory.png';
import projAravi from './assets/portfolio/aravi.png';
import projRelic from './assets/portfolio/Relic shaman.png';
import projArflos from './assets/portfolio/ar-flos.png';
import projSikeris from './assets/portfolio/sikeris.jpg';
import projStray from './assets/portfolio/stray.png';
import projJSC from './assets/portfolio/JSC.jpg';
import projTA from './assets/portfolio/TA.png';
import projTTI from './assets/portfolio/tti.png';
import projAVI from './assets/portfolio/absensi.png';
import projDNT from './assets/portfolio/DNTruck.png';
import projHCU from './assets/portfolio/hcu.png';

export default function App() {
  const [lang, setLang] = useState('id'); 
  const [tab, setTab] = useState('project'); // Diset ke project agar kamu langsung lihat filter
  const [time, setTime] = useState('');
  
  const [visitorCount, setVisitorCount] = useState(0); 
  const hasCounted = useRef(false);

  // State untuk Fitur Pengurutan (Sorting) & Filter Kategori
  const [certSort, setCertSort] = useState('newest');
  const [projectSort, setProjectSort] = useState('newest');
  const [projectCategory, setProjectCategory] = useState('All'); // State filter kategori baru

  // State untuk Pop-up Gambar (Lightbox)
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('id-ID', { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    }, 1000);

    if (!hasCounted.current) {
      const savedCount = localStorage.getItem('amandaVisitorCountData');
      let currentCount = savedCount ? parseInt(savedCount, 10) + 1 : 1; 
      localStorage.setItem('amandaVisitorCountData', currentCount);
      setVisitorCount(currentCount);
      hasCounted.current = true; 
    }
    return () => clearInterval(timer);
  }, []);

  // --- DATABASE DATA GLOBAL ---
  const globalData = {
    id: {
      nav: { dashboard: 'Dashboard', profil: 'Profil', project: 'Project', sertifikat: 'Sertifikat' },
      role: 'Full-Stack Engineer & Spesialis AR/VR',
      heroTitle: "Saya Amanda Septi W.,",
      heroHighlight: "Full-Stack Engineer & Spesialis AR/VR",
      heroSub: "Dari simulasi pelatihan AR/VR hingga integrasi dashboard industri real-time — Saya membangun sistem digitalisasi yang presisi.",
      featProj: "Sistem Delivery Note (Pemilihan Printer Manual)",
      glance: [
        { stat: "100+", desc: "Logistik Truk Dikelola/Hari" },
        { stat: "OEE", desc: "Dashboard Tren Harian" },
        { stat: "RPA", desc: "Otomatisasi Alur Kerja UiPath" },
        { stat: "XR", desc: "Integrasi HoloLens & VR" }
      ],
      profile: {
        bio: 'Lulusan Teknik Informatika Universitas Gunadarma dengan keahlian kuat di bidang Full-Stack Web Development, Manajemen Basis Data (DBMS), dan Analisis Data. Terampil dalam mengembangkan sistem produksi real-time, alur kerja otomatisasi, serta aplikasi web end-to-end. Berkomitmen untuk memanfaatkan teknologi dalam menciptakan solusi berdampak di era Industri 4.0.',
        sidebarNav: [
          { id: 'intro', label: 'Perkenalan' },
          { id: 'skills', label: 'Keahlian Teknis' },
          { id: 'wins', label: 'Pencapaian' },
          { id: 'experience', label: 'Pengalaman Kerja' },
          { id: 'education', label: 'Pendidikan' }
        ],
        winsTitle: 'Pencapaian Utama',
        wins: [
          { icon: '🥇', title: '70% Efisiensi Administrasi', desc: 'Sistem Delivery Note logistik memproses 100+ truk per hari.' },
          { icon: '⚡', title: '80% Pengurangan Pelaporan', desc: 'Sistem Absensi Event otomatis berbasis Laravel & QR Code.' },
          { icon: '🥽', title: '70% Efektivitas Onboarding', desc: 'Aplikasi Pelatihan Mixed Reality interaktif menggunakan HoloLens.' },
          { icon: '📊', title: 'IPK 3.82/4.00', desc: 'Lulusan Sarjana Teknik Informatika, Universitas Gunadarma.' }
        ],
        expTitle: 'Pengalaman Kerja',
        exp: [
          { company: 'PT Astra Komponen Indonesia', date: 'Des 2025 - Sekarang', role: 'Digitalization & Automation Intern', desc: 'Mengembangkan sistem produksi real-time untuk 100+ mesin (Andon, OEE). Mengelola database SQL Server & PostgreSQL.' },
          { company: 'PT Astra Visteon Indonesia', date: 'Sep 2024 - Nov 2025', role: 'Gamification & Digitalization Intern', desc: 'Membantu pengembangan aplikasi pelatihan AR/VR menggunakan 50+ objek 3D interaktif. Terlibat migrasi database MySQL ke SQL Server.' }
        ],
        eduTitle: 'Pendidikan',
        edu: [
          { company: 'Universitas Gunadarma', date: 'Sep 2021 - Sep 2025', role: 'S1 Teknik Informatika', desc: 'IPK: 3.82/4.00. Fokus pada rekayasa perangkat lunak dan arsitektur basis data.' },
          { company: 'Coding Camp powered by DBS Foundation', date: 'Feb 2026 - Mar 2026', role: 'Data Science Learning Path', desc: 'Pelatihan intensif Python, bahasa SQL, dan pemodelan dasar Machine Learning.' }
        ],
        skillsTitle: 'Technical Skills'
      }
    },
    en: {
      nav: { dashboard: 'Dashboard', profil: 'Profile', project: 'Projects', sertifikat: 'Certificates' },
      role: 'Full-Stack Engineer & AR/VR Specialist',
      heroTitle: "I'm Amanda Septi W.,",
      heroHighlight: "AI/ML Engineer and Full-Stack Developer",
      heroSub: "From immersive AR/VR training to real-time industrial dashboards — I build digital systems that work in production.",
      featProj: "Delivery Note System (Manual Printer Select)",
      glance: [
        { stat: "100+", desc: "Truck Records Managed/Day" },
        { stat: "OEE", desc: "Daily Trends Dashboard" },
        { stat: "RPA", desc: "UiPath Workflow Automation" },
        { stat: "XR", desc: "HoloLens & VR Integration" }
      ],
      profile: {
        bio: 'Informatics Engineering graduate from Universitas Gunadarma with strong expertise in Full-Stack Development, DBMS, and Data Analytics. Skilled in developing real-time production systems, data visualization dashboards, and XR (AR/VR/MR) training applications to support Industry 4.0 digitalization.',
        sidebarNav: [
          { id: 'intro', label: 'Introduction' },
          { id: 'skills', label: 'Technical Skills' },
          { id: 'wins', label: 'Selected Wins' },
          { id: 'experience', label: 'Work Experience' },
          { id: 'education', label: 'Education' }
        ],
        winsTitle: 'Selected Wins',
        wins: [
          { icon: '🥇', title: '70% Administrative Efficiency Boost', desc: 'Delivery Note System handling 100+ daily truck records.' },
          { icon: '⚡', title: '80% Less Manual Reporting', desc: 'Event Attendance System automated with QR code.' },
          { icon: '🥽', title: '70% Better Tool Understanding', desc: 'Mixed Reality Production Trainer using HoloLens.' },
          { icon: '📊', title: 'GPA 3.82/4.00', desc: "Bachelor's in Informatics Engineering, Universitas Gunadarma." }
        ],
        expTitle: 'Work Experience',
        exp: [
          { company: 'PT Astra Komponen Indonesia', date: 'Dec 2025 - Present', role: 'Intern - Digitalization & Automation', desc: 'Developed 10+ features in real-time systems. Managed large SQL Server databases.' },
          { company: 'PT Astra Visteon Indonesia', date: 'Sep-Dec 2024, Jun-Nov 2025', role: 'Intern - Gamification & Digitalization', desc: 'Created AR/VR training configurations using 50+ interactive 3D objects, migrated schemas from MySQL to SQL Server.' }
        ],
        eduTitle: 'Education',
        edu: [
          { company: 'Gunadarma University', date: 'Sep 2021 - Sep 2025', role: 'Bachelor of Informatics', desc: 'GPA: 3.82/4.00. Focus on software engineering and database architectures.' },
          { company: 'Coding Camp powered by DBS Foundation', date: 'Feb 2026 - Mar 2026', role: 'Data Science Learning Path', desc: 'Intensive training on Python, SQL, and foundational Machine Learning.' }
        ],
        skillsTitle: 'Technical Skills'
      }
    }
  };

  // --- DATABASE PROJECT PORTFOLIO ---
  const projectsData = [
    {
      title: "Dashboard Monitoring HCU",
      category: "Website",
      year: 2026,
      img: projHCU,
      desc: "“Dashboard Monitoring HCU berbasis web di PT Astra Komponen Indonesia yang digunakan untuk memantau proses produksi secara real-time, dilengkapi fitur OEE Monitoring, Order Sheet, Andon System, Achievement Production, Delivery, Quality Control, Warehouse Management, hingga monitoring manpower dan material untuk meningkatkan efisiensi operasional produksi.",
      demoLink: "#" 
    },
    {
      title: "Delivery Note Truck",
      category: "Website",
      year: 2026,
      img: projDNT,
      desc: "Website Delivery Note Management System berbasis web di PT Astra Komponen Indonesia yang membantu proses pembuatan, monitoring, dan pencetakan Delivery Note (DN) truck secara cepat dan terintegrasi, dilengkapi fitur tracking status pengiriman, report DN, data truck, serta manajemen destinasi pengiriman.",
      demoLink: "#" 
    },
    {
      title: "Event Attendance System",
      category: "Website",
      year: 2025,
      img: projAVI,
      desc: "Website Event Attendance System berbasis QR Code dan check-in manual di PT Astra Visteon Indonesia yang mempermudah proses absensi peserta acara secara cepat, efisien, dan terintegrasi secara digital.",
      demoLink: "#" 
    },
    {
      title: "Production Trainer (MR)",
      category: "Mixed Reality",
      year: 2025,
      img: projMR,
      desc: "Program pelatihan berbasis Mixed Reality (HoloLens) dan Virtual Reality (Meta Quest 3s) di PT Astra Visteon Indonesia yang membantu operator mempelajari komponen perakitan melalui interaksi 3D waktu-nyata.",
      demoLink: "#" 
    },
    {
      title: "Inventory App - Laravel 12",
      category: "Website",
      year: 2025,
      img: projInven,
      desc: "Aplikasi sistem inventaris gudang komprehensif yang mempermudah pelacakan stok barang, pengisian form logistik, dan ekspor pelaporan riwayat pergudangan.",
      demoLink: "https://www.figma.com" 
    },
    {
      title: "AR-AVI",
      category: "Augmented Reality",
      year: 2024,
      img: projAravi,
      desc: "Aplikasi Augmented Reality interaktif pintar untuk visualisasi modul mesin serta simulasi panduan mekanis digital di area produksi manufaktur.",
      demoLink: "https://drive.google.com/file/d/1y0g6mI5VBkV0pM1c-E9r90juM2lFfoBw/view?usp=sharing"
    },
    {
      title: "Game Relic Shaman",
      category: "Game 2D",
      year: 2024,
      img: projRelic,
      desc: "Game petualangan platformer 2D bergenre Metroidvania menceritakan perjalanan Joko mengumpulkan benda pusaka dengan keris sakti yang dibimbing oleh Mbah Mijan.",
      demoLink: "https://itch.io/jam/infinite-learning-game-batch-6/rate/2707334"
    },
    {
      title: "AR-Flos",
      category: "Augmented Reality",
      year: 2023,
      img: projArflos,
      desc: "Media pembelajaran botani interaktif berbasis Augmented Reality yang memproyeksikan anatomi organ dan susunan struktur bunga secara 3D.",
      demoLink: "https://www.figma.com"
    },
    {
      title: "SiKeris",
      category: "Mobile App",
      year: 2020,
      img: projSikeris,
      desc: "Aplikasi pemenang Top Contributor MAME 2020 dari Kemendikbud yang memanfaatkan visualisasi Augmented Reality guna memperkenalkan peninggalan kerajaan Islam.",
      demoLink: "https://drive.google.com/file/d/1Zst-FgF_fmIGcTscqIoB0TUbT68U3L6h/view?usp=sharing"
    },
    {
      title: "Stray Kids Fanbase App",
      category: "Website",
      year: 2023,
      img: projStray,
      desc: "Situs portal komunitas dinamis yang dikembangkan menggunakan fondasi framework Laravel 10 dan desain Bootstrap responsif.",
      demoLink: "https://kelompok11.himfahmi.com/"
    },
    {
      title: "Java Island Culture",
      category: "Augmented Reality",
      year: 2019,
      img: projJSC,
      desc: "Aplikasi mobile Augmented Reality interaktif edukasi kebudayaan Jawa yang memenangkan penghargaan nasional Top Contributor di ajang MAME 2019.",
      demoLink: "https://drive.google.com/drive/folders/1Z_wF0PPAnDc_cGtcmssgTOclFD5s2DGu?usp=drive_link"
    },
    {
      title: "Redesain Tomorrow's Affairs",
      category: "UI/UX Design",
      year: 2023,
      img: projTA,
      desc: "Studi kasus perancangan ulang tata letak antarmuka aplikasi Tomorrow's Affairs menggunakan Figma guna mengoptimalkan alur interaksi dan kenyamanan pengguna.",
      demoLink: "https://www.figma.com"
    },
    {
      title: "Website TicketTuneIn",
      category: "UI/UX Design",
      year: 2023,
      img: projTTI,
      desc: "Pembuatan konsep desain purwarupa aplikasi pemesanan tiket hiburan online serta halaman penggalangan donasi berbasis web di Figma.",
      demoLink: "https://www.figma.com"
    }
  ];

  // --- DATABASE SERTIFIKAT ---
  const certificationsData = [
    {
      title: "Data Science Course",
      issuer: "Universitas Gunadarma",
      dateStr: "Juni 2025",
      dateVal: new Date("2025-06-01"),
      img: certDataScience,
      desc: "Fokus pada alur kerja data science secara lengkap: pengumpulan, pembersihan, pelabelan, pembangunan model, evaluasi, hingga pelaksanaan deployment model secara sistematis.",
      link: "https://drive.google.com/file/d/15ufpdLONgo-p1ten45wXHmiMaiCt556F/view?usp=drive_link"
    },
    {
      title: "Oracle For Intermediate",
      issuer: "Universitas Gunadarma",
      dateStr: "Juni 2025",
      dateVal: new Date("2025-06-01"),
      img: certOracleInt,
      desc: "Pengelolaan database tingkat menengah di Oracle, mencakup pembuatan tabel, view, subquery, explicit cursors, serta penanganan constraint dan error.",
      link: "https://drive.google.com/file/d/1VL-Un1aTb_HmyMHY8UM0P_P_QWyiPewz/view?usp=drive_link"
    },
    {
      title: "SQL Server For Intermediate",
      issuer: "Universitas Gunadarma",
      dateStr: "Mei 2025",
      dateVal: new Date("2025-05-01"),
      img: certSqlInt,
      desc: "Pengelolaan database tingkat menengah: query kompleks, optimasi index, pembuatan view, stored procedure, backup & recovery, serta automasi administrasi sistem.",
      link: "https://drive.google.com/file/d/1--PmM3t-Cw3NXKFGwoNCqJuhRQin7x-o/view?usp=drive_link"
    },
    {
      title: "Astra Kampus Merdeka Batch 7",
      issuer: "PT Astra Visteon Indonesia (Astra Otopart Group)",
      dateStr: "Desember 2024",
      dateVal: new Date("2024-12-01"),
      img: certMsib7,
      desc: "Program magang bersertifikat yang diselenggarakan oleh Astra melalui inisiatif Kampus Merdeka. Fokus pada penerapan Augmented Reality (AR) untuk mendukung efisiensi pelatihan di industri manufaktur otomotif.",
      link: "https://drive.google.com/file/d/137SfYo50wMNwIfkd0VNXDglZB95-rRei/view?usp=drive_link"
    },
    {
      title: "Internship Introduction To Game Design (2D)",
      issuer: "Infinite Learning",
      dateStr: "Agustus 2024",
      dateVal: new Date("2024-08-01"),
      img: certInternIl,
      desc: "Program magang bersertifikat yang berfokus pada pengembangan keterampilan dasar game development, meliputi mekanika permainan, desain level, dan implementasi aset grafis 2D.",
      link: "https://drive.google.com/file/d/1V-gKiW-oruC4pqKU-Xl1lumRCzzkpNm9/view?usp=drive_link"
    },
    {
      title: "MSIB Batch 6",
      issuer: "Infinite Learning",
      dateStr: "Juli 2024",
      dateVal: new Date("2024-07-01"),
      img: certMsib6,
      desc: "Program Studi Independen Batch 6 – Introduction to Game Design (2D) di Infinite Learning, bekerja sama dengan RMIT University Australia.",
      link: "https://drive.google.com/file/d/1nI4NpT0yHYIbof2aELDTec6WeIG0c1VX/view?usp=drive_link"
    },
    {
      title: "Oracle for Beginner",
      issuer: "Universitas Gunadarma",
      dateStr: "November 2023",
      dateVal: new Date("2023-11-01"),
      img: certOracleBeg,
      desc: "Dasar penggunaan Oracle Database: instalasi 11g, pembuatan user, single-row functions, dan pengenalan PL/SQL beserta deklarasi variabel.",
      link: "https://drive.google.com/file/d/1an4W0hSPWUDKiJn_ynvug68splPzR-DE/view?usp=drive_link"
    },
    {
      title: "SQL Server For Beginner",
      issuer: "Universitas Gunadarma",
      dateStr: "Oktober 2023",
      dateVal: new Date("2023-10-01"),
      img: certSqlBeg,
      desc: "Dasar administrasi SQL Server, pengelolaan tabel, join table, fungsi SQL, keamanan, role, serta pemrograman SQL Server 2008.",
      link: "https://drive.google.com/file/d/14bPjoa8_Tfu8B2PqHf3JqV5N5yBV4qNz/view?usp=drive_link"
    },
    {
      title: "Fundamental DBMS",
      issuer: "Universitas Gunadarma",
      dateStr: "Mei 2023",
      dateVal: new Date("2023-05-01"),
      img: certFundDbms,
      desc: "Konsep dasar database relasional dan penerapan SQL (DDL & DML) pada berbagai platform termasuk MySQL, SQL Server, dan Oracle.",
      link: "https://drive.google.com/file/d/1VHnpXzr8aMiWRAR6inDtwMWJCdxzxIt5/view?usp=drive_link"
    },
    {
      title: "Fundamental Desktop Programming",
      issuer: "Universitas Gunadarma",
      dateStr: "April 2023",
      dateVal: new Date("2023-04-01"),
      img: certFundDesktop,
      desc: "Pemrograman desktop dengan Delphi, VB.NET, dan Java. Mencakup pembuatan aplikasi berbasis console maupun GUI (AWT & Swing).",
      link: "https://drive.google.com/file/d/1rMfurqlVlIjCqsF8igynrxkFz_28Dwr_/view?usp=drive_link"
    },
    {
      title: "Workshop - Building Website using HTML5",
      issuer: "Universitas Gunadarma",
      dateStr: "Desember 2022",
      dateVal: new Date("2022-12-01"),
      img: certHtml5,
      desc: "Dasar-dasar pembuatan website dengan HTML5, termasuk multimedia (audio, video) dan penggunaan elemen semantik seperti section dan article.",
      link: "https://drive.google.com/file/d/1aJ0bnNMiH35KstCk1TZP5folAEkJVVMv/view?usp=drive_link"
    },
    {
      title: "Fundamental Project Management",
      issuer: "Dicoding",
      dateStr: "Agustus 2022",
      dateVal: new Date("2022-08-01"),
      img: certPM,
      desc: "Dasar-dasar manajemen proyek: Waterfall, Agile, Lean, Six Sigma. Meliputi peran manajer proyek, siklus proyek, serta struktur budaya organisasi.",
      link: "https://drive.google.com/file/d/1uJGcx5UtwGDYLGpnPfBMieIGnZpk2mO6/view?usp=drive_link"
    },
    {
      title: "Fundamental Software Development",
      issuer: "Universitas Gunadarma",
      dateStr: "Juli 2022",
      dateVal: new Date("2022-07-01"),
      img: certSW,
      desc: "Dasar pengembangan perangkat lunak: pemahaman kebutuhan aplikasi, diagram alur, modifikasi dengan HTML5/CSS3, dan dokumentasi pengembangan.",
      link: "https://drive.google.com/file/d/1X5ndrsWv6eZxTnsyVSAq7qIMAWc5S63K/view?usp=drive_link"
    },
    {
      title: "Top Contributor – Aplikasi Mobile Kihajar 2020",
      issuer: "BPMPK Kemendikbud",
      dateStr: "November 2020",
      dateVal: new Date("2020-11-01"),
      img: certMame2020,
      desc: "Penghargaan Top Contributor dalam Kompetisi (MAME) 2020 melalui aplikasi Augmented Reality “SiKeris” (Sejarah Kerajaan Islam di Indonesia).",
      link: "https://drive.google.com/file/d/1APM3Iu8e4bJmm8IBFjWULtAby2ejEcEQ/view?usp=drive_link"
    },
    {
      title: "Top Contributor – Aplikasi Mobile Kihajar 2019",
      issuer: "BPMPK Kemendikbud",
      dateStr: "November 2019",
      dateVal: new Date("2019-11-01"),
      img: certMame2019,
      desc: "Penghargaan atas pengembangan aplikasi Augmented Reality “Java Island Culture” yang dirancang untuk memperkenalkan budaya Nusantara.",
      link: "https://drive.google.com/drive/folders/1Z_wF0PPAnDc_cGtcmssgTOclFD5s2DGu?usp=drive_link"
    }
  ];

  // --- LOGIKA MENGAMBIL KATEGORI OTOMATIS & PENGURUTAN ---
  const projectCategories = ['All', ...new Set(projectsData.map(p => p.category))];

  const sortedCertifications = [...certificationsData].sort((a, b) => {
    return certSort === 'newest' ? b.dateVal - a.dateVal : a.dateVal - b.dateVal;
  });

  const filteredAndSortedProjects = [...projectsData]
    .filter(proj => projectCategory === 'All' || proj.category === projectCategory)
    .sort((a, b) => {
      return projectSort === 'newest' ? b.year - a.year : a.year - b.year;
    });

  // --- DATA KATEGORI SKILLS (GAYA BADGE INDIVIDUAL DENGAN LOGO) ---
  const skillsData = [
    {
      title: lang === 'id' ? 'Bahasa Pemrograman' : 'Programming Language',
      desc: lang === 'id' ? 'Bahasa pemrograman dan pustaka utama.' : 'Core languages and libraries.',
      items: [{ name: 'Python', icon: '🐍' }, { name: 'Java', icon: '☕' }, { name: 'C#', icon: '🔷' }, { name: 'C++', icon: '⚙️' }]
    },
    {
      title: lang === 'id' ? 'Kerangka Kerja (Framework)' : 'Framework in Programming Language',
      desc: lang === 'id' ? 'Beberapa kerangka kerja yang rutin saya gunakan.' : 'Some programming frameworks that I have used.',
      items: [
        { name: 'React.js', icon: '⚛️' }, { name: 'Next.js', icon: '⬛' }, 
        { name: 'Django', icon: '🎸' }, { name: 'Laravel', icon: '🏮' }, 
        { name: 'PHP', icon: '🐘' }, { name: 'CodeIgniter', icon: '🔥' },
        { name: 'HTML', icon: '🌐' }, { name: 'CSS', icon: '🎨' }, { name: 'JavaScript', icon: '💛' }
      ]
    },
    {
      title: 'Database',
      desc: lang === 'id' ? 'Manajemen data dan sistem penyimpanan aplikasi.' : 'Data management for app.',
      items: [{ name: 'SQL Server', icon: '💾' }, { name: 'PostgreSQL', icon: '🐘' }, { name: 'MySQL', icon: '🐬' }, { name: 'Oracle', icon: '💽' }, { name: 'Redis', icon: '🔴' }]
    },
    {
      title: lang === 'id' ? 'Alat Visualisasi & Pengembangan' : 'Tools, Monitoring, and Development Software',
      desc: lang === 'id' ? 'Keahlian dalam menggunakan berbagai perangkat lunak pendukung.' : 'Proficiency in various software for development service and visualization.',
      items: [
        { name: 'Unity', icon: '🎮' }, { name: 'Blender', icon: '🧊' }, { name: 'Docker', icon: '🐳' }, 
        { name: 'Git/GitHub', icon: '🐙' }, { name: 'GitLab', icon: '🦊' }, { name: 'Jira', icon: '📋' }, 
        { name: 'Figma', icon: '🎨' }, { name: 'Power BI', icon: '📊' }, { name: 'Visio', icon: '📐' }
      ]
    }
  ];

  const c = globalData[lang];
  const profile = c.profile;

  return (
    <div className="app-container">
      
      {/* 1. GLOBAL HEADER NAVIGASI */}
      <header className="top-header">
        <div className="time-display">{time || '11:45:58'} WIB</div>
        
        <nav className="glass-nav">
          {Object.keys(c.nav).map((key) => (
            <button key={key} className={tab === key ? 'active' : ''} onClick={() => setTab(key)}>
              {c.nav[key]}
            </button>
          ))}
        </nav>

        <div className="right-controls">
          <span className="timezone">Asia/Jakarta</span>
          <div className="lang-switch">
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
            <button className={lang === 'id' ? 'active' : ''} onClick={() => setLang('id')}>ID</button>
          </div>
        </div>
      </header>

      {/* 2. TAB MENU: DASHBOARD (HERO + ID CARD) */}
      {tab === 'dashboard' && (
        <section className="hero-section">
          <div className="featured-pill">
            <span>Featured Project</span> {c.featProj}
          </div>
          <h1 className="hero-title">
            {c.heroTitle} <br/> <span>{c.heroHighlight}</span>
          </h1>
          <p className="hero-subtitle">{c.heroSub}</p>

          <div className="visitor-badge" onClick={() => setTab('profil')} title="Klik untuk melihat Profil saya">
            <img src={fotoId} alt="Amanda" style={{width: '24px', height: '24px', borderRadius: '50%', objectFit: 'cover'}} />
            <span>About Me</span>
            <span className="count">Visitors {visitorCount}</span>
          </div>

          <div className="at-a-glance-wrapper">
            <div className="glance-grid">
              {c.glance.map((item, idx) => (
                <div key={idx} className="glance-item">
                  <h3>{item.stat}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lanyard-area">
            <div className="strap"><span className="strap-text">AMANDA STUDIO</span></div>
            <div className="hook-metal"></div>
            <div className="id-card-big">
              <div className="card-top-hole"><div className="hole"></div></div>
              <div className="brand-title">
                <h2>AMANDA</h2><p>✦ STUDIO</p>
              </div>
              <div className="user-info">
                <h3>Amanda Septi W.</h3><p>{c.role}</p>
              </div>
              <img src={fotoId} alt="Amanda Portrait" className="id-portrait" />
            </div>
          </div>
        </section>
      )}

      {/* 3. TAB MENU: PROFIL */}
      {tab === 'profil' && (
        <main className="profile-layout">
          <aside className="left-sidebar">
            <img src={fotoId} alt="Amanda Avatar" className="sidebar-avatar" />
            <div className="sidebar-location"><span className="dot"></span> Asia/Jakarta</div>
            <nav className="sidebar-nav">
              {profile.sidebarNav.map((link) => (
                <a key={link.id} href={`#${link.id}`}>{link.label}</a>
              ))}
            </nav>
            <button className="btn-download" onClick={() => alert('Mengunduh berkas riwayat hidup Amanda.')}>
              {lang === 'id' ? 'Unduh CV Saya' : 'Download My CV'}
            </button>
          </aside>

          <section className="right-content">
            <div id="intro" className="content-section">
              <h1 className="profile-hero-title">Amanda Septi Wulandari</h1>
              <div className="profile-hero-role">{c.role}</div>
              <div className="social-links">
                <a href="https://github.com/amandasepti" target="_blank" rel="noreferrer">🐙 GitHub</a>
                <a href="https://www.linkedin.com/in/amandasepti" target="_blank" rel="noreferrer">🔗 LinkedIn</a>
                <a href="mailto:amandasepti64@gmail.com">✉️ Email</a>
              </div>
              <p className="bio-text">{profile.bio}</p>
            </div>

            <div id="skills" className="content-section">
              <h2 className="section-title">{profile.skillsTitle}</h2>
              {skillsData.map((category, idx) => (
                <div key={idx} className="tech-skill-group">
                  <h3>{category.title}</h3>
                  <p>{category.desc}</p>
                  <div className="badges-row">
                    {category.items.map((skill, sIdx) => (
                      <div key={sIdx} className="tech-badge">
                        <span className="tech-icon">{skill.icon}</span>{skill.name}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div id="wins" className="content-section">
              <h2 className="section-title">{profile.winsTitle}</h2>
              <div className="wins-grid">
                {profile.wins.map((win, idx) => (
                  <div key={idx} className="win-card">
                    <div className="icon">{win.icon}</div>
                    <div><h4>{win.title}</h4><p>{win.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>

            <div id="experience" className="content-section">
              <h2 className="section-title">{profile.expTitle}</h2>
              {profile.exp.map((job, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-header">
                    <h3>{job.company}</h3><span>{job.date}</span>
                  </div>
                  <div className="timeline-role">{job.role}</div>
                  <div className="timeline-desc">{job.desc}</div>
                </div>
              ))}
            </div>

            <div id="education" className="content-section">
              <h2 className="section-title">{profile.eduTitle}</h2>
              {profile.edu.map((school, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-header">
                    <h3>{school.company}</h3><span>{school.date}</span>
                  </div>
                  <div className="timeline-role">{school.role}</div>
                  <div className="timeline-desc">{school.desc}</div>
                </div>
              ))}
            </div>
          </section>
        </main>
      )}

      {/* 4. TAB MENU: PORTOFOLIO / PROJECT */}
      {tab === 'project' && (
        <main className="project-container">
          <div className="project-header">
            <h1>{lang === 'id' ? 'Portofolio Karya' : 'My Portfolio Works'}</h1>
            <p>{lang === 'id' ? 'Proyek Kreatif dan Pengembangan Sistem' : 'Creative Projects & System Engineering'}</p>
          </div>

          {/* FILTER KATEGORI (TOMBOL PILL) */}
          <div className="project-filters" style={{ marginBottom: '20px' }}>
            {projectCategories.map(cat => (
              <button
                key={cat}
                className={projectCategory === cat ? 'active' : ''}
                onClick={() => setProjectCategory(cat)}
              >
                {cat === 'All' && lang === 'id' ? 'Semua Kategori' : cat}
              </button>
            ))}
          </div>

          {/* FILTER PENGURUTAN (DROPDOWN) */}
          <div className="cert-controls">
            <select className="cert-sort-select" value={projectSort} onChange={(e) => setProjectSort(e.target.value)}>
              <option value="newest">{lang === 'id' ? 'Urutkan: Tahun Terbaru - Terlama' : 'Sort by: Newest - Oldest'}</option>
              <option value="oldest">{lang === 'id' ? 'Urutkan: Tahun Terlama - Terbaru' : 'Sort by: Oldest - Newest'}</option>
            </select>
          </div>

          <div className="project-grid">
            {filteredAndSortedProjects.map((proj, index) => (
              <div key={index} className="project-card">
                <div className="project-img-wrapper" onClick={() => setSelectedImage(proj.img)} title="Klik untuk memperbesar gambar">
                  <img src={proj.img} alt={proj.title} />
                </div>
                <div className="project-content">
                  <span className="project-category">{proj.category}</span>
                  <h3 className="project-title">{proj.title}</h3>
                  <div className="project-year"><i>📅</i> {lang === 'id' ? 'Tahun Pembuatan:' : 'Year Built:'} {proj.year}</div>
                  <p className="project-desc">{proj.desc}</p>
                  <div className="project-links">
                    <a href={proj.demoLink} target="_blank" rel="noreferrer" className="project-btn">
                      {lang === 'id' ? 'Lihat Demo / Program ↗' : 'View Demo / App ↗'}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* 5. TAB MENU: SERTIFIKAT */}
      {tab === 'sertifikat' && (
        <main className="cert-container">
          <div className="cert-header">
            <h1>{lang === 'id' ? 'Sertifikat Profesional' : 'Professional Certifications'}</h1>
            <p>{lang === 'id' ? 'Pencapaian Validasi Akademik & Industri' : 'Academic & Industrial Validations'}</p>
          </div>

          <div className="cert-controls">
            <select className="cert-sort-select" value={certSort} onChange={(e) => setCertSort(e.target.value)}>
              <option value="newest">{lang === 'id' ? 'Urutkan: Tanggal Terbaru' : 'Sort by: Newest'}</option>
              <option value="oldest">{lang === 'id' ? 'Urutkan: Tanggal Terlama' : 'Sort by: Oldest'}</option>
            </select>
          </div>

          <div className="cert-grid">
            {sortedCertifications.map((cert, index) => (
              <div key={index} className="cert-card">
                <div className="cert-img-wrapper" onClick={() => setSelectedImage(cert.img)} title="Klik untuk memperbesar sertifikat">
                  <img src={cert.img} alt={cert.title} />
                </div>
                <div className="cert-content">
                  <h3 className="cert-title">{cert.title}</h3>
                  <div className="cert-date"><i>📅</i> {cert.dateStr}</div>
                  <div className="cert-issuer">{cert.issuer}</div>
                  <p className="cert-desc">{cert.desc}</p>
                  <a href={cert.link} target="_blank" rel="noreferrer" className="cert-link-btn">
                    {lang === 'id' ? 'Lihat Berkas Drive ↗' : 'View Drive Document ↗'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* --- LAYER POP-UP LIGHTBOX GLOBAL --- */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close-btn" onClick={() => setSelectedImage(null)}>&times;</button>
            <img src={selectedImage} alt="Pop-up Konten" className="lightbox-img" />
          </div>
        </div>
      )}

    </div>
  );
}