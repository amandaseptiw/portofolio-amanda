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
import projACV from './assets/portfolio/piachiv.png';
import projoee from './assets/portfolio/oee.png';
import projmenumr from './assets/portfolio/menu-mr.jpg';
import projInven2 from './assets/portfolio/form inven.png';
import projInven3 from './assets/portfolio/laporan inven.png';
import projInven4 from './assets/portfolio/stok inven.png';

// Import File CV
import cvAmanda from './assets/cv/CV AMANDA SEPTI WULANDARI.pdf';

import imgSaatIni from './assets/hero.png';

// Komponen Kustom untuk Slider Gambar
const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  if (!images || images.length === 0) return null;

  return (
    <div className="exp-slider-container">
      {images.length > 1 && (
        <button className="slider-btn prev" onClick={prevSlide}>&#10094;</button>
      )}
      
      <img src={images[currentIndex]} alt="Cuplikan Proyek" className="slider-image" />
      
      {images.length > 1 && (
        <>
          <button className="slider-btn next" onClick={nextSlide}>&#10095;</button>
          <div className="slider-indicators">
            {images.map((_, idx) => (
              <span key={idx} className={`dot ${idx === currentIndex ? 'active' : ''}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default function App() {
  const [lang, setLang] = useState('id'); 
  const [tab, setTab] = useState('dashboard'); // Diset ke project agar kamu langsung lihat filter
  const [time, setTime] = useState('');
  
  const [visitorCount, setVisitorCount] = useState(0); 
  const hasCounted = useRef(false);

  // State untuk Fitur Pengurutan (Sorting) & Filter Kategori
  const [certSort, setCertSort] = useState('newest');
  const [projectSort, setProjectSort] = useState('newest');
  const [projectCategory, setProjectCategory] = useState('All'); // State filter kategori baru

  // State untuk Pop-up Gambar (Lightbox)
  const [selectedImage, setSelectedImage] = useState(null);

  // --- STATE BARU UNTUK HALAMAN DETAIL PROYEK ---
  const [activeProject, setActiveProject] = useState(null);

  // --- STATE MENU MOBILE ---
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Reset activeProject jika pengguna berpindah tab menu
  useEffect(() => {
    setActiveProject(null);
  }, [tab]);

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
      role: 'Full-Stack Engineer & Digitalization Specialist',
      heroTitle: "Amanda Septi Wulandari",
      heroHighlight: "Full-Stack Engineer & Digitalization Specialist",
      heroSub: "Menggabungkan pengembangan full-stack, rekayasa data, dan teknologi AR/VR/MR (XR) untuk menciptakan solusi digital yang inovatif, terintegrasi, dan berorientasi pada transformasi industri.",
      glance: [
        { stat: "10+", desc: "Projects Built" },
        { stat: "3+", desc: "Digitalization Fields" },
        { stat: "Full-Stack", desc: "Engineering Focus" },
        { stat: "XR", desc: "AR • VR • MR Development" }
      ],
      profile: {
        bio: [
          'Lulusan Teknik Informatika dari Universitas Gunadarma dengan minat dan keahlian di bidang Full-Stack Web Development, Manajemen Basis Data (DBMS), Analisis Data, Digitalisasi Sistem, serta pengembangan teknologi Augmented Reality (AR), Virtual Reality (VR), Mixed Reality (MR), dan Extended Reality (XR). Berpengalaman dalam mengembangkan aplikasi web end-to-end, sistem monitoring produksi real-time, dashboard analitik, serta otomatisasi alur kerja untuk mendukung transformasi digital di lingkungan industri. Memiliki kemampuan dalam merancang dan mengintegrasikan solusi berbasis web dan teknologi imersif guna meningkatkan efisiensi operasional, efektivitas training, dan pengalaman pengguna secara interaktif.',
          'Terampil menggunakan berbagai teknologi dan tools pengembangan perangkat lunak untuk membangun sistem yang scalable, terstruktur, dan berorientasi pada kebutuhan pengguna. Selain itu, memiliki kemampuan dalam pengolahan dan analisis data untuk mendukung pengambilan keputusan yang lebih akurat dan strategis. Berkomitmen untuk terus mengembangkan inovasi digital yang relevan, adaptif, dan berdampak dalam mendukung perkembangan Industri 4.0 dan transformasi teknologi di masa depan.'
        ],
        sidebarNav: [
          { id: 'intro', label: 'Perkenalan' },
          { id: 'wins', label: 'Pencapaian' },
          { id: 'experience', label: 'Pengalaman Kerja' },
          { id: 'education', label: 'Pendidikan' },
          { id: 'skills', label: 'Keahlian Teknis' }
        ],
        winsTitle: 'Pencapaian Utama',
        wins: [
          { icon: '🥇', title: '70% Efisiensi Administrasi', desc: 'Sistem Delivery Note logistik memproses 100+ truk per hari.' },
          { icon: '⚡', title: '80% Pengurangan Pelaporan', desc: 'Sistem Absensi Event otomatis berbasis Laravel & QR Code.' },
          { icon: '🥽', title: '70% Efektivitas Onboarding', desc: 'Aplikasi Pelatihan Mixed Reality interaktif menggunakan HoloLens.' },
          { icon: '📊', title: 'IPK 3.82/4.00', desc: 'Lulusan Sarjana Teknik Informatika, Universitas Gunadarma.' }
        ],
        exp: [
          { 
            company: 'PT Astra Komponen Indonesia', 
            date: 'Des 2025 - Sekarang', 
            role: 'Digitalization & Automation Intern', 
            descList: [
              'Mengembangkan dan meningkatkan 10+ fitur pada sistem produksi real-time untuk 100+ mesin dengan 1.000+ transaksi data harian.',
              'Membangun modul industri termasuk Andon, OEE, pelacakan rejection, dashboard pencapaian, part list, PO, order sheet, DN Truck, dan sistem pelaporan.',
              'Merancang dashboard real-time, visualisasi data, dan laporan analitik untuk mendukung pemantauan produksi dan pengambilan keputusan.',
              'Mengelola database SQL Server & PostgreSQL (100+ tabel) yang menangani 10.000+ data/hari dengan integritas data tinggi.',
              'Mengembangkan fitur backend menggunakan Django (Python) dan mengimplementasikan pipeline CI/CD melalui deployment berbasis Git.'
            ],
          images: [projHCU, projDNT, projACV, projoee] 
          },
          { 
            company: 'PT Astra Visteon Indonesia', 
            date: 'Sep-Des 2024, Jun-Nov 2025', 
            role: 'Gamification & Digitalization Intern', 
            descList: [
              'Membantu pengembangan aplikasi pelatihan AR/VR dan Mixed Reality menggunakan 50+ model 3D interaktif untuk pelatihan teknis dan simulasi produksi.',
              'Berpartisipasi dalam aktivitas migrasi database dari MySQL ke SQL Server, termasuk validasi data dan penyesuaian skema.',
              'Mendukung perancangan konsep digitalisasi INDI 4.0 dan platform web untuk meningkatkan aksesibilitas dan integrasi data produksi.',
              'Membantu memberikan sesi pelatihan berbasis VR kepada 20+ operator produksi dan membantu pemetaan tata letak produksi serta gudang menggunakan Microsoft Visio.'
            ],
            images: [projMR, projAravi, projAVI]
          }
        ],  
        eduTitle: 'Pendidikan',
        edu: [
          { 
            company: 'Universitas Gunadarma', 
            date: 'Sep 2021 - Sep 2025', 
            role: 'S1 Informatika | IPK: 3.82 ', 
            descList: [
              'Fokus pada rekayasa perangkat lunak, arsitektur basis data, dan analitik data.',
              'Mengikuti program MSIB Batch 6 & 7 di bidang gamification dan pengembangan teknologi interaktif',
              'Mengikuti kursus LEPKOM bidang Database Management System (DBMS)',
            ]
          },
          { 
            company: 'Infinite Learning', 
            date: 'Feb 2024 – Jun 2024 · Remote', 
            role: 'MSIB Batch 6 — Introduction to Game Design (2D)', 
            descList: [
              'Mempelajari Game Design, gameplay mechanics, level design, dan Game Design Document (GDD).',
              'Mengimplementasikan GDD ke dalam game coding dan pengembangan game 2D.',
              'Memahami Game UI, Sound Design, asset management, serta monetization strategy.',
              'Mengembangkan kemampuan komunikasi, kolaborasi, adaptasi, dan presentasi.',
              'Program diselenggarakan oleh Infinite Learning bekerja sama dengan RMIT University melalui program MSIB Batch 6.',
              <span>Proyek Akhir: <a href="https://itch.io/jam/infinite-learning-game-batch-6/rate/2707334" target="_blank" rel="noreferrer">Relic Shaman</a></span>
            ]
          }
        ],
        skillsTitle: 'Keahlian Teknis'
      }
    },
    en: {
      nav: { dashboard: 'Dashboard', profil: 'Profile', project: 'Projects', sertifikat: 'Certificates' },
      role: 'Full-Stack Engineer & Digitalization Specialist',
      heroTitle: "Amanda Septi Wulandari",
      heroHighlight: "Full-Stack Engineer & Digitalization Specialist",
      heroSub: "Combining full-stack development, data engineering, and AR/VR/MR (XR) technologies to create innovative, integrated digital solutions focused on industrial transformation.",
      glance: [
        { stat: "10+", desc: "Projects Built" },
        { stat: "3+", desc: "Digitalization Fields" },
        { stat: "Full-Stack", desc: "Engineering Focus" },
        { stat: "XR", desc: "AR • VR • MR Development" }
      ],
      profile: {
        bio: [
          'Informatics Engineering graduate from Universitas Gunadarma with interest and expertise in Full-Stack Web Development, Database Management Systems (DBMS), Data Analytics, System Digitalization, and the development of Augmented Reality (AR), Virtual Reality (VR), Mixed Reality (MR), and Extended Reality (XR) technologies. Experienced in developing end-to-end web applications, real-time production monitoring systems, analytical dashboards, and workflow automation to support digital transformation in industrial environments. Capable of designing and integrating web-based solutions and immersive technologies to enhance operational efficiency, training effectiveness, and interactive user experiences.',
          'Skilled in utilizing various software development technologies and tools to build scalable, structured, and user-oriented systems. Additionally, proficient in data processing and analysis to support more accurate and strategic decision-making. Committed to continuously developing digital innovations that are relevant, adaptive, and impactful in supporting the evolution of Industry 4.0 and future technological transformations.'
        ],
        sidebarNav: [
          { id: 'intro', label: 'Introduction' },
          { id: 'wins', label: 'Selected Wins' },
          { id: 'experience', label: 'Work Experience' },
          { id: 'education', label: 'Education' },
          { id: 'skills', label: 'Technical Skills' }
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
          { 
            company: 'PT Astra Komponen Indonesia', 
            date: 'Dec 2025 - Present', 
            role: 'Intern - Digitalization & Automation', 
            descList: [
              'Developed and enhanced 10+ features in a real-time production system for 100+ machines with 1,000+ daily data transactions.',
              'Built industrial modules including Andon, OEE, rejection tracking, achievement dashboard, part list, PO, order sheet, DN Truck, and reporting systems.',
              'Designed real-time dashboards, data visualization, and analytical reports to support production monitoring and decision-making.',
              'Managed SQL Server & PostgreSQL databases (100+ tables) handling 10,000+ records/day with high data integrity.',
              'Developed backend features using Django (Python) and implemented CI/CD pipelines via Git-based deployment for system updates and reliability.'
            ],
            images: [projHCU, projDNT, projACV, projoee]  
          },
          { 
            company: 'PT Astra Visteon Indonesia', 
            date: 'Sep-Dec 2024, Jun - Nov 2025', 
            role: 'Intern - Gamification & Digitalization', 
            descList: [
              'Assisted in developing AR/VR and Mixed Reality training applications using 50+ interactive 3D models for technical training and production simulations.',
              'Participated in database migration activities from MySQL to SQL Server, including data validation and schema adjustments.',
              'Supported the design of INDI 4.0 digitalization concepts and web platforms to improve accessibility and production data integration.',
              'Helped deliver VR-based training sessions to 20+ production operators and assisted with production and warehouse layout mapping using Microsoft Visio.'
            ],
            images: [projMR, projAravi, projAVI]
          }
        ],
        eduTitle: 'Education',
        edu: [
          { 
            company: 'Universitas Gunadarma', 
            date: 'Sep 2021 - Sep 2025', 
            role: 'Bachelor of Informatics | GPA of 3.82', 
            descList: [
              'Focused on software engineering, database architecture, and data analytics.',
              'Participated in MSIB Batch 6 & 7 programs in gamification and interactive technology development.',
              'Completed LEPKOM courses in Database Management System (DBMS).',
            ]
          },
          { 
            company: 'Infinite Learning', 
            date: 'Feb 2024 – Jun 2024 · Remote', 
            role: 'MSIB Batch 6 — Introduction to Game Design (2D)', 
            descList: [
              'Learned Game Design, gameplay mechanics, level design, and Game Design Document (GDD) development.',
              'Implemented GDD concepts into game coding and 2D game development.',
              'Gained understanding of Game UI, Sound Design, asset management, and monetization strategies.',
              'Developed communication, collaboration, adaptability, and presentation skills.',
              'Program organized by Infinite Learning in collaboration with RMIT University through the MSIB Batch 6 program.',
              <span>Final Project: <a href="https://itch.io/jam/infinite-learning-game-batch-6/rate/2707334" target="_blank" rel="noreferrer">Relic Shaman</a></span>
            ]
          }
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
      desc: "Dashboard Monitoring HCU merupakan sistem berbasis web yang dikembangkan di PT Astra Komponen Indonesia untuk mendukung monitoring operasional produksi secara real-time. Sistem ini digunakan untuk memantau berbagai aktivitas manufaktur mulai dari OEE Monitoring, Order Sheet, Andon System, Achievement Production, Delivery Management, Quality Control, Warehouse Management, hingga monitoring manpower dan material guna meningkatkan efisiensi, akurasi, dan pengambilan keputusan operasional.",
      detailImages: [projHCU, projACV, projoee],

      overview:
        "Sistem monitoring produksi terpusat berbasis web yang dikembangkan menggunakan Django untuk membantu proses digitalisasi dan visualisasi performa produksi secara real-time di PT Astra Komponen Indonesia. Dashboard ini mengintegrasikan data dari berbagai divisi seperti produksi, warehouse, delivery, quality system, dan manpower dalam satu platform terpusat sehingga mempermudah proses monitoring, evaluasi, dan pengambilan keputusan operasional.",

      features: [
        "Monitoring Produksi Real-Time: Menampilkan data produksi secara langsung dari berbagai line dan mesin produksi untuk memantau performa operasional secara akurat.",
        
        "OEE & Achievement Dashboard: Menyediakan visualisasi Overall Equipment Effectiveness (OEE), achievement production, dan performa harian dalam bentuk grafik interaktif dan summary report.",
        
        "Andon & Order Sheet System: Mendukung monitoring status produksi, kendala mesin, serta pengelolaan order sheet untuk meningkatkan respons operasional dan efisiensi kerja.",
        
        "Delivery & Warehouse Management: Mengelola data delivery, warehouse finish goods, incoming material, recycle material, dan material component secara terintegrasi.",
        
        "Quality Control Monitoring: Membantu proses monitoring kualitas produksi dan validasi data untuk menjaga standar mutu produk.",
        
        "Manpower & Material Tracking: Memantau penggunaan manpower dan material produksi untuk membantu pengendalian operasional dan efisiensi resource.",
        
        "Database Integration: Terintegrasi dengan SQL Server dan PostgreSQL untuk pengolahan data produksi dan logistik dengan volume data besar secara stabil dan efisien.",
        
        "Interactive Data Visualization: Mengimplementasikan dashboard interaktif menggunakan grafik, tabel monitoring, dan data summary untuk mempermudah analisis performa produksi."
      ],

      techs: [
        "Python", "Django", "SQL Server", "PostgreSQL", 
        "Bootstrap", "JavaScript", "AJAX Polling", "HTML5", 
        "CSS3", "jQuery", "REST API", "Chart.js", "Git"
      ]
    },
    {
  title: "Delivery Note System Truck",
  category: "Website",
  year: 2026,
  img: projDNT,
  
  desc: "Delivery Note System Truck merupakan sistem manajemen logistik berbasis web yang dikembangkan untuk mengelola proses distribusi dan pengiriman barang menggunakan armada truk secara real-time. Sistem ini mendukung pembuatan Delivery Note (DN), monitoring status pengiriman, tracking operasional truk, pengelolaan route destination, hingga reporting distribusi untuk meningkatkan efisiensi operasional dan akurasi proses delivery.",

  demoLink: "LINK_FIGMA",

  detailImages: [projDNT],

  overview:
    "Sistem Delivery Note Truck dikembangkan menggunakan Django sebagai platform monitoring dan manajemen distribusi logistik berbasis web. Aplikasi ini membantu proses digitalisasi delivery note, monitoring pengiriman truk, serta pengelolaan data distribusi secara terpusat dan real-time. Sistem dirancang untuk mendukung aktivitas operasional dengan volume pengiriman tinggi, mempermudah tracking status delivery, mempercepat proses administrasi, dan meningkatkan akurasi pencatatan logistik.",

  features: [
    "Delivery Note Management: Membantu proses pembuatan, validasi, edit, finish, dan pencetakan Delivery Note secara digital dan terintegrasi.",

    "Real-Time Truck Monitoring: Menampilkan status pengiriman truk secara langsung seperti Waiting, Sending, Finish, Revision, dan Cancel untuk mempermudah monitoring distribusi.",

    "Truck & Route Management: Mengelola data armada truck, route destination, driver, vendor, dan informasi pengiriman dalam satu dashboard terpusat.",

    "QR & Manual Input Support: Mendukung proses input delivery menggunakan scan QR maupun input manual untuk meningkatkan fleksibilitas operasional.",

    "Automated Print System: Mengintegrasikan proses cetak Delivery Note dengan validasi printer dan dokumen untuk mempercepat administrasi logistik.",

    "Dashboard & Reporting: Menyediakan dashboard monitoring distribusi dan laporan pengiriman harian secara visual dan real-time.",

    "Database Integration: Terintegrasi dengan SQL Server dan PostgreSQL untuk pengelolaan data distribusi dan logistik dengan volume data besar secara stabil.",

    "Operational Efficiency Improvement: Membantu mengurangi proses pencatatan manual dan meningkatkan efisiensi monitoring pengiriman pada aktivitas distribusi harian."
  ],

  techs: [
    "Python",
    "Django",
    "SQL Server",
    "PostgreSQL",
    "JavaScript",
    "AJAX Polling",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "jQuery",
    "REST API",
    "Git"
  ]
},
    {
  title: "Event Attendance System",
  category: "Website",
  year: 2025,
  img: projAVI,

  desc: "Event Attendance System merupakan aplikasi absensi acara berbasis web yang dikembangkan di PT Astra Visteon Indonesia untuk mempermudah proses check-in peserta secara cepat, efisien, dan terintegrasi secara digital. Sistem ini mendukung absensi menggunakan QR Code, check-in manual, guest attendance, hingga monitoring kehadiran peserta secara real-time untuk berbagai kegiatan perusahaan.",

  demoLink: "#",

  detailImages: [projAVI],

  overview:
    "Sistem manajemen absensi acara berbasis web yang dikembangkan menggunakan Laravel untuk mendukung proses registrasi dan check-in event perusahaan secara digital. Aplikasi ini dirancang untuk mempercepat proses absensi karyawan maupun tamu eksternal dengan metode QR Code scanning dan manual check-in dalam satu platform terpusat. Sistem juga menyediakan dashboard admin, monitoring attendance real-time, pengelolaan event aktif, serta reporting otomatis untuk meningkatkan efisiensi operasional acara perusahaan.",

  features: [
    "QR Code Attendance System: Mendukung proses check-in peserta menggunakan QR Code scanning secara real-time untuk mempercepat validasi kehadiran.",

    "Manual & Guest Check-In: Menyediakan fitur check-in manual dan guest attendance untuk tamu eksternal maupun peserta tanpa QR Code.",

    "Event Management: Memungkinkan admin mengelola event aktif, jadwal acara, daftar peserta, dan status kehadiran dalam satu dashboard terpusat.",

    "Real-Time Attendance Monitoring: Menampilkan data kehadiran peserta secara langsung sehingga mempermudah monitoring jumlah peserta hadir selama acara berlangsung.",

    "Bulk Import Participant Data: Mendukung import massal data peserta dan karyawan menggunakan file Excel untuk mempercepat administrasi event.",

    "Automatic ID Card & QR Generation: Menghasilkan QR Code dan ID Card peserta secara otomatis untuk kebutuhan registrasi acara.",

    "PDF Reporting System: Mengintegrasikan export laporan attendance dan rekap data peserta dalam format PDF secara otomatis.",

    "Responsive User Interface: Menggunakan tampilan modern dan responsif sehingga dapat diakses dengan mudah melalui desktop maupun tablet saat event berlangsung.",

    "Authentication & Admin Access: Dilengkapi sistem login admin untuk pengelolaan data event dan keamanan akses sistem.",

    "Operational Efficiency Improvement: Membantu mengurangi antrean check-in manual dan meningkatkan efisiensi proses registrasi peserta pada acara perusahaan."
  ],

  techs: [
    "PHP",
    "Laravel",
    "MySQL",
    "Bootstrap 5",
    "JavaScript",
    "AJAX",
    "jQuery",
    "SQL Server",
    "CSS3",
    "HTML5-QRCode",
    "DomPDF",
    "REST API",
    "Git"
  ]
},
    {
  title: "Production Trainer (MR)",
  category: "Mixed Reality",
  year: 2025,
  img: projMR,

  desc: "Production Trainer (MR) merupakan aplikasi pelatihan berbasis Mixed Reality dan Virtual Reality yang dikembangkan di PT Astra Visteon Indonesia untuk membantu proses onboarding dan training operator produksi secara interaktif. Aplikasi ini memanfaatkan perangkat HoloLens dan Meta Quest 3s untuk menghadirkan simulasi komponen, proses assembly, dan pengenalan alat produksi dalam bentuk visual 3D real-time guna meningkatkan efektivitas pembelajaran dan mengurangi risiko kesalahan operasional.",

  demoLink: "#",

  detailImages: [projMR, projmenumr],

  overview:
    "Aplikasi pelatihan imersif berbasis Unity yang dirancang untuk mendukung proses training dan onboarding karyawan baru di lingkungan manufaktur PT Astra Visteon Indonesia. Sistem ini menghadirkan simulasi interaktif menggunakan teknologi Mixed Reality (MR) dan Virtual Reality (VR) sehingga pengguna dapat mempelajari proses produksi, komponen assembly, serta penggunaan alat kerja melalui visualisasi 3D secara langsung. Dengan pendekatan immersive learning, aplikasi membantu meningkatkan pemahaman operator, mempercepat proses adaptasi kerja, dan mengurangi ketergantungan terhadap pelatihan konvensional.",

  features: [
    "Mixed Reality & Virtual Reality Training: Mengimplementasikan teknologi HoloLens dan Meta Quest 3s untuk menghadirkan pengalaman pelatihan interaktif berbasis MR dan VR.",

    "Interactive 3D Object Simulation: Mengembangkan dan mengintegrasikan berbagai objek 3D interaktif menggunakan Blender untuk simulasi komponen dan alat produksi.",

    "Real-Time Object Interaction: Mendukung interaksi objek virtual secara langsung seperti rotate, zoom, move, dan object manipulation menggunakan hand tracking dan controller.",

    "Production Assembly Visualization: Menampilkan simulasi proses assembly dan pengenalan part produksi secara visual untuk membantu pemahaman operator baru.",

    "Immersive Learning Experience: Menghadirkan pengalaman belajar berbasis simulasi realistis sehingga pelatihan menjadi lebih menarik, aman, dan mudah dipahami.",

    "Safety & Risk Reduction: Membantu mengurangi risiko kesalahan operasional dan kecelakaan kerja dengan memberikan simulasi training sebelum praktik langsung di area produksi.",

    "Training Efficiency Improvement: Membantu mempercepat proses onboarding dan meningkatkan efektivitas pemahaman materi dibandingkan metode training konvensional.",

    "Cross-Platform XR Deployment: Mendukung deployment aplikasi pada perangkat Mixed Reality dan Virtual Reality untuk kebutuhan pelatihan fleksibel di lingkungan industri.",

    "Optimized 3D Environment: Mengoptimalkan asset 3D dan performa aplikasi agar tetap stabil saat dijalankan pada perangkat XR.",

    "Interactive User Experience: Menggunakan antarmuka dan navigasi interaktif untuk meningkatkan kenyamanan pengguna selama proses pelatihan."
  ],

  techs: [
    "Unity",
    "C#",
    "Blender",
    "HoloLens",
    "Meta Quest 3s",
    "Mixed Reality Toolkit (MRTK)",
    "OpenXR",
    "XR Interaction Toolkit",
    "Git",
    "Visual Studio"
  ]
},
    {
  title: "Inventory App - Laravel 12",
  category: "Website",
  year: 2025,
  img: projInven,

  desc: "Inventory App merupakan aplikasi manajemen inventaris berbasis web yang dikembangkan menggunakan Laravel 12 untuk membantu pengelolaan stok barang, pencatatan pergerakan inventory, dan administrasi pergudangan secara digital. Sistem ini mendukung monitoring stok real-time, pengelolaan barang masuk dan keluar, form logistik dinamis, serta reporting inventory untuk meningkatkan akurasi data dan efisiensi operasional warehouse.",

  detailImages: [projInven, projInven2, projInven3, projInven4],

  overview:
    "Aplikasi manajemen inventaris berbasis Laravel 12 yang dirancang untuk membantu proses digitalisasi pengelolaan warehouse dan inventory barang. Sistem ini memungkinkan pengguna memantau ketersediaan stok secara real-time, mencatat riwayat transaksi barang masuk dan keluar, serta menghasilkan laporan inventory secara otomatis. Dengan antarmuka yang responsif dan sistem pengelolaan data terintegrasi, aplikasi membantu meningkatkan efisiensi administrasi pergudangan dan meminimalkan kesalahan pencatatan manual.",

  features: [
    "Real-Time Stock Monitoring: Menampilkan informasi stok barang secara aktual untuk mempermudah pengawasan inventory dan pengambilan keputusan operasional.",

    "Inventory In & Out Management: Mendukung pencatatan barang masuk dan barang keluar secara digital dengan riwayat transaksi yang terstruktur.",

    "Dynamic Logistics Form: Menyediakan form logistik dinamis untuk pengelolaan data inventory dan proses administrasi warehouse.",

    "Warehouse Data Management: Mengelola data barang, kategori inventory, supplier, dan informasi stok dalam satu sistem terpusat.",

    "Search & Filter System: Mempermudah pencarian data inventory menggunakan fitur filter dan pencarian cepat.",

    "Export Reporting Feature: Mendukung export laporan inventory dan riwayat pergudangan dalam format standar untuk kebutuhan audit dan dokumentasi.",

    "Responsive Dashboard Interface: Menggunakan tampilan dashboard modern dan responsif sehingga nyaman digunakan pada berbagai perangkat.",

    "Authentication & User Access: Dilengkapi sistem login dan manajemen hak akses pengguna untuk menjaga keamanan data inventory.",

    "Database Integration: Menggunakan MySQL untuk pengelolaan data inventory secara stabil, cepat, dan terstruktur.",

    "Operational Efficiency Improvement: Membantu mengurangi proses pencatatan manual dan meningkatkan akurasi pengelolaan stok barang."
  ],

  techs: [
    "PHP",
    "Laravel 12",
    "MySQL",
    "TailwindCSS",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Blade",
    "REST API",
    "jQuery",
    "Git"
  ]
},
    {
  title: "AR-AVI",
  category: "Augmented Reality",
  year: 2024,
  img: projAravi,

  desc: "AR-AVI merupakan aplikasi Augmented Reality interaktif yang dikembangkan untuk membantu proses training dan visualisasi komponen mesin di lingkungan manufaktur PT Astra Visteon Indonesia. Aplikasi ini menghadirkan simulasi digital berbasis AR untuk menampilkan objek 3D, panduan mekanis, serta informasi komponen mesin secara real-time guna meningkatkan efektivitas pembelajaran operator dan efisiensi proses training produksi.",

  demoLink: "https://drive.google.com/file/d/1y0g6mI5VBkV0pM1c-E9r90juM2lFfoBw/view?usp=sharing",

  detailImages: [projAravi],

  overview:
    "AR-AVI adalah aplikasi pelatihan berbasis Augmented Reality yang dikembangkan menggunakan Unity dan Vuforia untuk membantu visualisasi modul mesin serta proses assembly di area produksi manufaktur. Sistem ini memungkinkan pengguna melihat objek 3D secara langsung melalui perangkat mobile dengan pengalaman interaktif dan imersif. Aplikasi dirancang untuk mendukung proses pembelajaran operator, mempercepat pemahaman komponen mesin, dan meminimalkan risiko kesalahan operasional melalui simulasi digital berbasis AR.",

  features: [
    "Interactive Augmented Reality System: Mengimplementasikan teknologi Augmented Reality untuk menampilkan objek virtual 3D secara real-time di lingkungan nyata.",

    "3D Machine Visualization: Menampilkan visualisasi detail komponen mesin dan modul produksi dalam bentuk objek 3D interaktif.",

    "Marker-Based Tracking: Menggunakan Vuforia marker tracking untuk mendeteksi dan memunculkan model AR dengan akurasi stabil.",

    "Digital Mechanical Guidance: Menyediakan panduan mekanis digital dan simulasi langkah kerja untuk membantu operator memahami proses assembly dan penggunaan mesin.",

    "Interactive Object Manipulation: Mendukung interaksi objek seperti rotate, zoom, dan object inspection untuk meningkatkan pengalaman pembelajaran.",

    "Immersive Training Experience: Menghadirkan metode pelatihan interaktif yang lebih menarik dan mudah dipahami dibandingkan media konvensional.",

    "Safety & Risk Reduction: Membantu proses pembelajaran teknis tanpa harus berinteraksi langsung dengan mesin produksi berisiko tinggi.",

    "Mobile-Based AR Application: Dirancang agar dapat dijalankan melalui perangkat mobile sehingga fleksibel digunakan di area training maupun produksi.",

    "Optimized 3D Asset Integration: Mengintegrasikan asset 3D hasil modeling Blender dengan optimasi performa agar aplikasi tetap ringan dan responsif.",

    "Operational Training Support: Membantu meningkatkan efektivitas training operator baru dan mempercepat proses adaptasi kerja di lingkungan manufaktur."
  ],

  techs: [
    "Unity 3D",
    "Vuforia",
    "C#",
    "Blender",
    "Android Studio",
    "Visual Studio",
    "AR Foundation",
    "Git"
  ]
},
    {
  title: "Game Relic Shaman",
  category: "Game 2D",
  year: 2024,
  img: projRelic,

  desc: "Relic Shaman merupakan game petualangan platformer 2D bergenre Metroidvania yang dikembangkan menggunakan Unity. Game ini menceritakan perjalanan karakter Joko, seorang shaman yang dibimbing oleh Mbah Mijan untuk mengumpulkan benda-benda pusaka menggunakan keris sakti sambil menghadapi berbagai rintangan, musuh, dan area misterius dalam dunia eksplorasi yang saling terhubung.",

  demoLink: "https://itch.io/jam/infinite-learning-game-batch-6/rate/2707334",

  detailImages: [projRelic],

  overview:
    "Relic Shaman adalah proyek pengembangan game 2D bergenre Metroidvania yang berfokus pada eksplorasi dunia, combat system, dan progression gameplay. Dikembangkan menggunakan Unity 2D, game ini menghadirkan pengalaman platformer dengan visual pixel art, sistem pertarungan menggunakan keris sakti, serta eksplorasi area yang membuka jalur dan kemampuan baru seiring perkembangan permainan. Proyek ini juga mengimplementasikan desain level, animasi karakter, enemy AI, dan inventory system untuk menciptakan gameplay yang interaktif dan menantang.",

  features: [
    "Metroidvania Exploration System: Menghadirkan eksplorasi map yang saling terhubung dengan berbagai area tersembunyi, puzzle, dan jalur baru yang dapat dibuka.",

    "2D Platformer Gameplay: Mengimplementasikan mekanika platformer seperti jumping, obstacle navigation, dan movement system yang responsif.",

    "Combat System: Menggunakan keris sakti sebagai senjata utama untuk melawan musuh dan menghadapi berbagai tantangan dalam permainan.",

    "Inventory & Relic Collection: Mendukung sistem pengumpulan item pusaka dan inventory untuk membantu progression gameplay dan membuka kemampuan tertentu.",

    "Pixel Art Character & Environment: Menggunakan desain visual pixel art dan sprite animation untuk menciptakan suasana game yang unik dan menarik.",

    "Enemy AI & Battle Interaction: Mengembangkan perilaku musuh dan interaksi combat untuk meningkatkan tantangan permainan.",

    "Level Design & World Building: Merancang level dengan konsep eksplorasi non-linear khas Metroidvania yang mendorong pemain menjelajahi berbagai area.",

    "Animation System: Mengimplementasikan animasi karakter, attack effect, dan movement animation untuk meningkatkan pengalaman bermain.",

    "Interactive User Interface: Menyediakan tampilan UI gameplay seperti health system, inventory, dan item notification.",

    "Game Development Workflow: Menggunakan Unity untuk pengembangan gameplay, scripting, dan integrasi asset 2D secara terstruktur."
  ],

  techs: [
  "Unity 2D",
  "C#",
  "Visual Studio",
  "Tilemap System",
  "Animator",
  "Physics 2D",
  "Input System",
  "Scriptable Object",
  "Aseprite",
  "Git"
]
},
    {
  title: "AR-Flos",
  category: "Augmented Reality",
  year: 2024,
  img: projArflos,

  desc: "AR-Flos merupakan media pembelajaran interaktif berbasis Augmented Reality yang dikembangkan untuk membantu proses pembelajaran botani melalui visualisasi struktur bunga dalam bentuk 3D. Aplikasi ini memungkinkan pengguna melihat anatomi organ bunga secara real-time menggunakan teknologi AR sehingga materi pembelajaran menjadi lebih menarik, interaktif, dan mudah dipahami.",

  demoLink: "https://www.figma.com",

  detailImages: [projArflos],

  overview:
    "AR-Flos adalah aplikasi edukasi berbasis Augmented Reality yang dikembangkan menggunakan Unity dan Vuforia untuk mendukung pembelajaran botani secara interaktif. Sistem ini memvisualisasikan bagian-bagian bunga seperti putik, benang sari, mahkota, dan kelopak dalam bentuk model 3D yang dapat ditampilkan langsung melalui perangkat mobile. Dengan pendekatan visual dan interaktif, aplikasi membantu meningkatkan pemahaman siswa terhadap struktur anatomi bunga dibandingkan metode pembelajaran konvensional berbasis gambar 2D.",

  features: [
    "Augmented Reality Learning System: Mengimplementasikan teknologi AR untuk menghadirkan pengalaman pembelajaran interaktif berbasis visual 3D.",

    "3D Flower Anatomy Visualization: Menampilkan struktur detail organ bunga seperti putik, benang sari, mahkota, dan kelopak secara real-time.",

    "Marker-Based Tracking: Menggunakan Vuforia marker tracking untuk mendeteksi gambar marker dan menampilkan objek 3D dengan stabil.",

    "Interactive Object Manipulation: Mendukung interaksi objek seperti rotate, zoom, dan object inspection untuk mempermudah proses pembelajaran.",

    "Educational Visualization: Membantu siswa memahami anatomi bunga secara lebih jelas dibandingkan ilustrasi buku teks konvensional.",

    "Immersive Learning Experience: Menghadirkan metode pembelajaran yang lebih menarik, interaktif, dan mudah dipahami.",

    "Mobile-Based AR Application: Dirancang agar dapat dijalankan melalui perangkat mobile sehingga mudah digunakan di lingkungan sekolah.",

    "Optimized 3D Asset Integration: Mengintegrasikan model 3D dengan optimasi performa agar aplikasi tetap ringan dan responsif.",

    "Interactive User Interface: Menggunakan tampilan antarmuka sederhana dan mudah digunakan untuk mendukung proses belajar siswa.",

    "Digital Education Support: Mendukung transformasi media pembelajaran digital berbasis teknologi Augmented Reality."
  ],

  techs: [
    "Unity 3D",
    "C#",
    "Vuforia",
    "AR Foundation",
    "Marker-Based Tracking",
    "3D Modeling",
    "Blender",
    "Android Studio",
    "Visual Studio",
    "Git"
  ]
},
    
  {
  title: "SiKeris",
  category: "Mobile App",
  year: 2020,
  img: projSikeris,

  desc: "SiKeris merupakan aplikasi edukasi berbasis Augmented Reality yang dikembangkan untuk memperkenalkan peninggalan kerajaan Islam di Indonesia melalui visualisasi objek 3D interaktif. Aplikasi ini berhasil meraih penghargaan Top Contributor pada ajang Mobile Application for Education (MAME) 2020 yang diselenggarakan oleh Kemendikbud.",

  demoLink: "https://drive.google.com/file/d/1Zst-FgF_fmIGcTscqIoB0TUbT68U3L6h/view?usp=sharing",

  detailImages: [projSikeris],

  overview:
    "SiKeris adalah aplikasi mobile edukasi berbasis Augmented Reality yang dirancang untuk membantu proses pembelajaran sejarah kerajaan Islam di Indonesia secara lebih interaktif dan menarik. Aplikasi ini memvisualisasikan berbagai artefak bersejarah seperti keris dan benda pusaka dalam bentuk model 3D yang dapat ditampilkan langsung melalui perangkat mobile menggunakan teknologi AR. Dengan pendekatan immersive learning, aplikasi membantu meningkatkan minat belajar sejarah melalui pengalaman visual digital.",

  features: [
    "Augmented Reality Education System: Mengimplementasikan teknologi AR untuk menghadirkan media pembelajaran sejarah berbasis visual interaktif.",

    "3D Historical Artifact Visualization: Menampilkan artefak kerajaan Islam seperti keris dan benda pusaka dalam bentuk model 3D real-time.",

    "Marker-Based Tracking: Menggunakan Vuforia marker tracking untuk memunculkan objek AR dengan stabil dan responsif.",

    "Interactive Learning Experience: Menghadirkan pengalaman belajar sejarah yang lebih menarik dibandingkan media konvensional.",

    "Object Interaction Feature: Mendukung interaksi objek seperti rotate, zoom, dan object inspection untuk meningkatkan pemahaman pengguna.",

    "Mobile-Based Application: Dirancang untuk perangkat mobile Android agar mudah diakses oleh siswa dan pengguna umum.",

    "Educational Content Integration: Menyediakan informasi sejarah kerajaan Islam secara digital dan terstruktur.",

    "National Award Achievement: Berhasil meraih penghargaan Top Contributor pada kompetisi nasional MAME 2020 oleh Kemendikbud.",

    "Optimized 3D Asset Integration: Mengintegrasikan asset 3D dengan optimasi performa agar aplikasi tetap ringan dan stabil.",

    "Digital Cultural Preservation: Mendukung pelestarian budaya dan sejarah Indonesia melalui teknologi digital interaktif."
  ],

  techs: [
    "Unity",
    "C#",
    "Vuforia",
    "AR Foundation",
    "Marker-Based Tracking",
    "Android SDK",
    "Blender",
    "Visual Studio",
    "Git"
  ]
},
{
  title: "Stray Kids Fanbase App",
  category: "Website",
  year: 2023,
  img: projStray,

  desc: "Stray Kids Fanbase App merupakan website komunitas fanbase berbasis Laravel yang dikembangkan sebagai pusat informasi, interaksi, dan media komunikasi penggemar Stray Kids secara online dengan tampilan modern dan responsif.",

  demoLink: "https://kelompok11.himfahmi.com/",

  detailImages: [projStray],

  overview:
    "Website komunitas fanbase berbasis Laravel 10 yang dirancang untuk menyediakan platform interaksi penggemar secara digital. Sistem ini mendukung pengelolaan informasi grup, update jadwal, registrasi member, serta penyajian konten komunitas dalam satu portal terpusat. Dengan desain responsif dan arsitektur backend Laravel, aplikasi mampu memberikan pengalaman pengguna yang nyaman di berbagai perangkat.",

  features: [
    "Community Portal System: Menyediakan pusat informasi dan media interaksi bagi komunitas penggemar.",

    "Responsive Web Design: Menggunakan Bootstrap untuk menghasilkan tampilan modern dan responsif di desktop maupun mobile.",

    "User Authentication System: Mendukung registrasi dan login pengguna untuk pengelolaan akun member komunitas.",

    "Content Management: Mengelola postingan, informasi event, dan update komunitas secara terstruktur.",

    "Interactive User Interface: Menghadirkan tampilan antarmuka modern dengan navigasi yang mudah digunakan.",

    "Laravel MVC Architecture: Mengimplementasikan konsep MVC Laravel untuk pengelolaan backend yang lebih terstruktur dan scalable.",

    "Database Management: Menggunakan MySQL untuk penyimpanan data pengguna dan konten website secara stabil.",

    "Search & Navigation Feature: Mempermudah pengguna mencari informasi dan konten komunitas.",

    "Cross-Device Compatibility: Dioptimalkan untuk berbagai ukuran layar dan perangkat.",

    "Community Digital Engagement: Membantu meningkatkan interaksi dan aktivitas komunitas fanbase secara online."
  ],

  techs: [
    "PHP",
    "Laravel 10",
    "MySQL",
    "Bootstrap",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Blade",
    "jQuery",
    "Git"
  ]
},
{
  title: "Java Island Culture",
  category: "Augmented Reality",
  year: 2019,
  img: projJSC,

  desc: "Java Island Culture merupakan aplikasi edukasi budaya berbasis Augmented Reality yang dikembangkan untuk memperkenalkan budaya dan rumah adat Pulau Jawa melalui visualisasi objek 3D interaktif. Aplikasi ini berhasil meraih penghargaan Top Contributor pada ajang MAME 2019 oleh Kemendikbud.",

  demoLink: "https://drive.google.com/drive/folders/1Z_wF0PPAnDc_cGtcmssgTOclFD5s2DGu?usp=drive_link",

  detailImages: [projJSC],

  overview:
    "Java Island Culture adalah aplikasi mobile edukasi berbasis Augmented Reality yang dirancang untuk membantu pelestarian budaya Indonesia melalui teknologi digital interaktif. Aplikasi ini menampilkan berbagai rumah adat, pakaian tradisional, dan elemen budaya khas Pulau Jawa dalam bentuk model 3D yang dapat divisualisasikan secara langsung menggunakan perangkat mobile. Dengan pendekatan immersive learning, aplikasi membantu meningkatkan minat generasi muda terhadap budaya nusantara.",

  features: [
    "Augmented Reality Cultural Learning: Mengimplementasikan teknologi AR sebagai media edukasi budaya interaktif.",

    "3D Cultural Object Visualization: Menampilkan rumah adat, pakaian tradisional, dan elemen budaya Jawa dalam bentuk model 3D.",

    "Marker-Based Tracking: Menggunakan Vuforia marker tracking untuk memunculkan objek budaya secara real-time.",

    "Interactive Object Manipulation: Mendukung rotate, zoom, dan object inspection untuk meningkatkan pengalaman belajar.",

    "Immersive Educational Experience: Menghadirkan metode pembelajaran budaya yang lebih menarik dan mudah dipahami.",

    "Mobile-Based AR Application: Dapat dijalankan pada perangkat Android untuk mendukung aksesibilitas pembelajaran.",

    "Digital Cultural Preservation: Membantu pelestarian budaya Indonesia melalui media digital interaktif.",

    "National Award Achievement: Mendapat penghargaan Top Contributor pada kompetisi nasional MAME 2019.",

    "Optimized 3D Asset Integration: Mengintegrasikan asset 3D dengan optimasi performa aplikasi mobile.",

    "Interactive User Interface: Menggunakan tampilan sederhana dan mudah digunakan oleh pelajar."
  ],

  techs: [
    "Unity",
    "C#",
    "Vuforia",
    "AR Foundation",
    "Marker-Based Tracking",
    "Android SDK",
    "Blender",
    "Visual Studio",
    "Git"
  ]
},
{
  title: "Redesain Tomorrow's Affairs",
  category: "UI/UX Design",
  year: 2023,
  img: projTA,

  desc: "Proyek redesign UI/UX aplikasi Tomorrow's Affairs yang berfokus pada peningkatan user experience, perbaikan visual interface, dan optimalisasi alur interaksi pengguna menggunakan Figma.",

  demoLink: "https://www.figma.com/design/Xo3s0ajib2MwWEpVqg1a8t/IMK-AMANDA-SEPTI-WULANDARI---3IA12?node-id=37-7116&t=kdGmGOGO9Lp2OH5H-1",

  detailImages: [projTA],

  overview:
    "Case study UI/UX Design yang berfokus pada proses redesign antarmuka aplikasi Tomorrow's Affairs untuk meningkatkan usability, visual consistency, dan kenyamanan pengguna. Proyek ini mencakup user research, wireframing, redesign interface, hingga pembuatan high-fidelity prototype menggunakan Figma dengan pendekatan user-centered design.",

  features: [
    "User Interface Redesign: Mendesain ulang tampilan aplikasi agar lebih modern, bersih, dan user-friendly.",

    "User Experience Improvement: Mengoptimalkan user flow dan navigasi agar interaksi pengguna menjadi lebih efisien.",

    "Wireframing & Layouting: Membuat wireframe dan struktur layout untuk meningkatkan hierarki informasi.",

    "High-Fidelity Prototype: Mengembangkan prototype interaktif menggunakan Figma untuk simulasi pengalaman pengguna.",

    "Responsive Design Concept: Mendesain tampilan yang adaptif untuk berbagai ukuran perangkat.",

    "Visual Consistency Enhancement: Memperbaiki typography, spacing, color palette, dan komponen visual lainnya.",

    "Interactive Prototype Navigation: Menyediakan simulasi navigasi aplikasi secara interaktif.",

    "User-Centered Design Approach: Menggunakan pendekatan desain yang berfokus pada kebutuhan dan kenyamanan pengguna.",

    "Modern UI Design System: Mengimplementasikan konsep desain modern dan minimalis.",

    "Design Documentation: Menyusun dokumentasi desain dan komponen UI untuk pengembangan lanjutan."
  ],

  techs: [
    "Figma",
    "UI/UX Design",
    "Wireframing",
    "Prototyping",
    "User Flow",
    "Design System",
    "Responsive Design",
    "User Research"
  ]
},
{
  title: "Website TicketTuneIn",
  category: "UI/UX Design",
  year: 2023,
  img: projTTI,

  desc: "TicketTuneIn merupakan proyek desain UI/UX platform e-ticketing dan donasi online yang dirancang menggunakan Figma dengan fokus pada kemudahan navigasi, modern interface, dan pengalaman pengguna yang intuitif.",

  demoLink: "https://www.figma.com/proto/rtXUCVamiq3lfVkXN6KMLW/web-donasi?type=design&node-id=2-42&t=2zjadrZR49UMqlpU-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=2%3A42",

  detailImages: [projTTI],

  overview:
    "Proyek desain antarmuka dan prototype aplikasi e-ticketing berbasis web yang dirancang untuk mempermudah proses pemesanan tiket acara hiburan secara online. Sistem juga dilengkapi konsep halaman donasi komunitas untuk mendukung campaign sosial digital. Fokus utama proyek ini adalah menciptakan user flow yang sederhana, visual modern, dan pengalaman pengguna yang nyaman.",

  features: [
    "E-Ticketing User Flow: Mendesain alur pemesanan tiket dari pencarian event hingga proses checkout.",

    "Interactive UI Prototype: Mengembangkan prototype interaktif menggunakan Figma untuk simulasi penggunaan aplikasi.",

    "Donation Page Design: Mendesain halaman donasi digital dengan tampilan yang intuitif dan mudah digunakan.",

    "Modern User Interface: Menggunakan konsep clean UI dengan desain modern dan minimalis.",

    "Responsive Layout Design: Mendesain tampilan yang optimal untuk desktop dan mobile.",

    "User-Centered Experience: Mengutamakan kenyamanan dan kemudahan pengguna dalam proses navigasi.",

    "Visual Hierarchy Optimization: Menata struktur informasi dan komponen visual agar lebih mudah dipahami.",

    "Design Consistency: Menjaga konsistensi typography, spacing, dan komponen antarmuka.",

    "Interactive Navigation Simulation: Menyediakan simulasi perpindahan halaman dan interaksi pengguna.",

    "Digital Event Platform Concept: Mengembangkan konsep platform digital untuk kebutuhan event dan komunitas."
  ],

  techs: [
    "Figma",
    "UI/UX Design",
    "Wireframing",
    "Interactive Prototyping",
    "User Flow",
    "Design System",
    "Responsive Design",
    "User Research"
  ]
},

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

// --- DATA KATEGORI SKILLS (RAPI & TANPA DUPLIKASI) ---
const skillsData = [
  {
    title: lang === 'id' ? 'Programming Language' : 'Programming Language',
    desc: lang === 'id'
      ? 'Bahasa pemrograman utama untuk pengembangan software, backend, automation, dan interactive application.'
      : 'Core programming languages for software, backend, automation, and interactive application development.',
    items: [
      { name: 'Python', icon: '🐍' },
      { name: 'PHP', icon: '🐘' },
      { name: 'JavaScript', icon: '🟨' },
      { name: 'TypeScript', icon: '🔷' },
      { name: 'C#', icon: '🎮' },
      { name: 'Java', icon: '☕' },
      { name: 'SQL', icon: '🗃️' }
    ]
  },

  {
    title: lang === 'id'
      ? 'Frontend Development'
      : 'Frontend Development',
    desc: lang === 'id'
      ? 'Teknologi frontend dan pengembangan antarmuka web modern.'
      : 'Frontend technologies and modern web interface development.',
    items: [
      { name: 'React.js', icon: '⚛️' },
      { name: 'Next.js', icon: '⬛' },
      { name: 'Bootstrap', icon: '🟣' },
      { name: 'TailwindCSS', icon: '💨' },
      { name: 'HTML5', icon: '🌐' },
      { name: 'CSS3', icon: '🎨' },
      { name: 'AJAX', icon: '🔄' },
      { name: 'jQuery', icon: '🧩' },
      { name: 'Chart.js', icon: '📊' }
    ]
  },

  {
    title: lang === 'id'
      ? 'Backend & API Development'
      : 'Backend & API Development',
    desc: lang === 'id'
      ? 'Framework backend, API service, autentikasi, dan server-side development.'
      : 'Backend frameworks, API services, authentication, and server-side development.',
    items: [
      { name: 'Laravel', icon: '🏮' },
      { name: 'Django', icon: '🎸' },
      { name: 'FastAPI', icon: '⚡' },
      { name: 'Node.js', icon: '🟢' },
      { name: 'REST API', icon: '🔗' },
      { name: 'JWT Authentication', icon: '🔐' },
      { name: 'MVC Architecture', icon: '🏗️' },
      { name: 'CRUD System', icon: '📋' }
    ]
  },

  {
    title: lang === 'id'
      ? 'Database & Data Engineering'
      : 'Database & Data Engineering',
    desc: lang === 'id'
      ? 'Pengelolaan database, data warehouse, ETL process, dan engineering pipeline.'
      : 'Database management, ETL process, data warehouse, and engineering pipeline.',
    items: [
      { name: 'MySQL', icon: '🐬' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'SQL Server', icon: '💾' },
      { name: 'Oracle', icon: '🗄️' },
      { name: 'Redis', icon: '🔴' },
      { name: 'ETL Process', icon: '🔄' },
      { name: 'Data Pipeline', icon: '🚰' },
      { name: 'Data Cleaning', icon: '🧹' },
      { name: 'Query Optimization', icon: '⚡' },
      { name: 'Stored Procedure', icon: '📜' },
      { name: 'Database Design', icon: '🧩' },
      { name: 'Data Visualization', icon: '📈' }
    ]
  },

  {
    title: lang === 'id'
      ? 'AI & Data Science'
      : 'AI & Data Science',
    desc: lang === 'id'
      ? 'Machine learning, analisis data, dan statistical processing.'
      : 'Machine learning, analytics, and statistical processing.',
    items: [
      { name: 'TensorFlow', icon: '🧠' },
      { name: 'PyTorch', icon: '🔥' },
      { name: 'Scikit-learn', icon: '📊' },
      { name: 'Pandas', icon: '🐼' },
      { name: 'NumPy', icon: '🔢' },
      { name: 'Matplotlib', icon: '📉' },
      { name: 'Jupyter Notebook', icon: '📒' },
      { name: 'Google Colab', icon: '☁️' }
    ]
  },

  {
    title: lang === 'id'
      ? 'Game Development & Gamification'
      : 'Game Development & Gamification',
    desc: lang === 'id'
      ? 'Pengembangan game interaktif, gameplay programming, dan gamification system.'
      : 'Interactive game development, gameplay programming, and gamification systems.',
    items: [
      { name: 'Unity', icon: '🎮' },
      { name: 'Unity 2D', icon: '🕹️' },
      { name: 'Game Programming', icon: '💻' },
      { name: 'Gameplay Mechanics', icon: '⚙️' },
      { name: 'Level Design', icon: '🗺️' },
      { name: 'Enemy AI', icon: '👾' },
      { name: 'Animation System', icon: '🎞️' },
      { name: 'Tilemap System', icon: '🧩' },
      { name: 'Game Physics', icon: '🌌' },
      { name: 'Gamification', icon: '🏆' },
      { name: 'Blender', icon: '🧊' },
      { name: 'Aseprite', icon: '🎨' }
    ]
  },

  {
    title: lang === 'id'
      ? 'AR, VR & Mixed Reality'
      : 'AR, VR & Mixed Reality',
    desc: lang === 'id'
      ? 'Teknologi immersive development untuk Augmented Reality, Virtual Reality, dan Mixed Reality.'
      : 'Immersive technologies for AR, VR, and Mixed Reality development.',
    items: [
      { name: 'Vuforia', icon: '📱' },
      { name: 'AR Foundation', icon: '📲' },
      { name: 'OpenXR', icon: '🌐' },
      { name: 'XR Interaction Toolkit', icon: '🎯' },
      { name: 'MRTK', icon: '⚡' },
      { name: 'Marker-Based Tracking', icon: '📌' },
      { name: 'Hand Tracking', icon: '✋' },
      { name: 'Spatial Interaction', icon: '🧭' },
      { name: '3D Object Interaction', icon: '📦' },
      { name: 'HoloLens', icon: '👓' },
      { name: 'Meta Quest', icon: '🥽' }
    ]
  },

  {
    title: lang === 'id'
      ? 'DevOps & Development Tools'
      : 'DevOps & Development Tools',
    desc: lang === 'id'
      ? 'Deployment, monitoring server, containerization, dan software collaboration.'
      : 'Deployment, server monitoring, containerization, and software collaboration.',
    items: [
      { name: 'Docker', icon: '🐳' },
      { name: 'Git', icon: '🐙' },
      { name: 'GitHub', icon: '⚫' },
      { name: 'GitLab', icon: '🦊' },
      { name: 'Postman', icon: '📮' },
      { name: 'Grafana', icon: '📊' },
      { name: 'Prometheus', icon: '🔥' },
      { name: 'Linux', icon: '🐧' },
      { name: 'CI/CD', icon: '🔄' },
      { name: 'RDP', icon: '🖥️' }
    ]
  },

  {
    title: lang === 'id'
      ? 'UI/UX & Product Design'
      : 'UI/UX & Product Design',
    desc: lang === 'id'
      ? 'Perancangan antarmuka, prototype, dan user experience.'
      : 'Interface design, prototyping, and user experience.',
    items: [
      { name: 'Figma', icon: '🎨' },
      { name: 'Wireframing', icon: '📝' },
      { name: 'Prototyping', icon: '📱' },
      { name: 'Design System', icon: '🧩' },
      { name: 'User Flow', icon: '🔀' },
      { name: 'Responsive Design', icon: '📐' },
      { name: 'UI Design', icon: '🖌️' },
      { name: 'UX Design', icon: '✨' }
    ]
  }
];

  const c = globalData[lang];
  const profile = c.profile;

  return (
    <div className="app-container">
      
      {/* 1. GLOBAL HEADER NAVIGASI */}
      <header className="top-header">
        
        {/* Jam di Kiri */}
        <div className="time-display">{time || '11:45:58'} WIB</div>
        
        {/* Wrapper Menu untuk Layar Mobile */}
        <div className={`mobile-menu-wrapper ${isMobileMenuOpen ? 'open' : ''}`}>
          <nav className="glass-nav">
            {Object.keys(c.nav).map((key) => (
              <button 
                key={key} 
                className={tab === key ? 'active' : ''} 
                onClick={() => {
                  setTab(key);
                  setIsMobileMenuOpen(false); // Otomatis menutup menu setelah diklik
                }}
              >
                {c.nav[key]}
              </button>
            ))}
          </nav>
        </div>

        {/* Kontrol Kanan (Bahasa & Hamburger berada di LUAR menu mobile) */}
        <div className="right-controls">
          {/* Teks Asia/Jakarta (Disembunyikan di HP agar tidak sempit) */}
          <span className="timezone desktop-only">Asia/Jakarta</span>
          
          {/* Pengubah Bahasa */}
          <div className="lang-switch">
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
            <button className={lang === 'id' ? 'active' : ''} onClick={() => setLang('id')}>ID</button>
          </div>

          {/* Tombol Hamburger (Hanya tampil di HP) */}
          <button 
            className="hamburger-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? '✖' : '☰'}
          </button>
        </div>

      </header>

      {/* 2. TAB MENU: DASHBOARD (HERO + ID CARD) */}
      {tab === 'dashboard' && (
        <section className="hero-section">
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

          <div className="featured-showcase-container">

            <div className="showcase-header">
              <p>
                <strong>
                  {lang === 'id'
                    ? 'Sistem yang sedang dalam tahap pengembangan:'
                    : 'System I am currently developing:'}
                </strong>
              </p>
            </div>
            
            {/* Gambar Besar Dashboard HCU */}
            <div className="fp-image-wrapper">
              {/* Catatan: Gigi menggunakan gambar projInven sementara, kamu bisa ganti dengan gambar HCU aslimu nanti */}
              <img src={projHCU} alt="Dashboard HCU Preview" />
            </div>

            {/* Konten 2 Kolom di Bawah Gambar */}
            <div className="fp-content-grid">
              
              <div className="fp-left-col">
                <h3 style={{ fontSize: '38px' }}>
                  {lang === 'id' 
                    ? 'Dashboard Monitoring HCU Production' 
                    : 'HCU Production Monitoring Dashboard'}
                </h3>
              </div>

              <div className="fp-right-col">
                <div className="fp-author-info">
                  <img src={fotoId} alt="Amanda" className="fp-author-img" />
                  <span className="fp-author-name">Amanda Septi Wulandari</span>
                </div>
                
                <p className="fp-desc">
                  {lang === 'id' 
                    ? 'Sistem monitoring produksi berbasis web yang dikembangkan untuk memantau performa operasional manufaktur secara real-time di PT Astra Komponen Indonesia. Dashboard ini mengintegrasikan OEE Monitoring, Order Sheet, Andon System, Delivery, Warehouse Management, Quality Control, hingga monitoring manpower dan material dalam satu pusat kendali terintegrasi guna meningkatkan efisiensi produksi dan akurasi pengambilan keputusan.' 
                    : 'A web-based production monitoring system developed to track manufacturing operational performance in real-time at PT Astra Komponen Indonesia. This dashboard integrates OEE Monitoring, Order Sheet, Andon System, Delivery, Warehouse Management, Quality Control, to manpower and material monitoring into a single integrated control center to improve production efficiency and decision-making accuracy.'}
                </p>

                <div className="fp-tech-tags">
                  <span className="fp-tag"><i>🐍</i> Python</span>
                  <span className="fp-tag"><i>🎸</i> Django</span>
                  <span className="fp-tag"><i>💾</i> SQL Server</span>
                  <span className="fp-tag"><i>🐘</i> PostgreSQL</span>
                  <span className="fp-tag"><i>🔄</i> AJAX Polling</span>
                  <span className="fp-tag"><i>📊</i> Chart.js</span>
                  <span className="fp-tag"><i>🎨</i> Bootstrap</span>
                </div>

                {/* Tombol Pintasan Langsung ke Detail HCU */}
                <button 
                  className="fp-read-btn" 
                  onClick={() => {
                    // 1. Ubah menu ke tab Project
                    setTab('project'); 
                    
                    // 2. Cari data proyek yang judulnya "Dashboard Monitoring HCU"
                    const hcuProject = projectsData.find(proj => proj.title === "Dashboard Monitoring HCU"); 
                    
                    // 3. Buka langsung halaman detailnya
                    if (hcuProject) {
                      setActiveProject(hcuProject); 
                    }
                    
                    // 4. Gulir layar ke paling atas agar rapi
                    window.scrollTo({ top: 0, behavior: 'smooth' }); 
                  }}
                >
                  {lang === 'id' ? 'Lihat studi kasus ↗' : 'View case study ↗'}
                </button>

              </div>
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
            <a 
  href={cvAmanda} 
  download="CV_Amanda_Septi_Wulandari.pdf" 
  className="btn-download" 
  style={{ display: 'inline-block', textAlign: 'center', textDecoration: 'none', boxSizing: 'border-box' }}
>
  {lang === 'id' ? 'Unduh CV Saya' : 'Download My CV'}
</a>
          </aside>

          <section className="right-content">
            {/* 1. INTRO */}
            <div id="intro" className="content-section">
              <h1 className="profile-hero-title">Amanda Septi Wulandari</h1>
              <div className="profile-hero-role">{c.role}</div>
              <div className="social-links">
                <a href="https://github.com/amandaseptiw" target="_blank" rel="noreferrer">🐙 GitHub</a>
                <a href="https://www.linkedin.com/in/amandasepti" target="_blank" rel="noreferrer">🔗 LinkedIn</a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=amandasepti64@gmail.com" target="_blank" rel="noopener noreferrer">✉️ Email</a>
              </div>
              <div className="bio-text">
                {profile.bio.map((paragraph, index) => (
                  <p key={index} style={{ marginBottom: '15px' }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* 2. SELECTED WINS */}
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

            {/* 3. WORK EXPERIENCE (DENGAN SLIDER GAMBAR) */}
            <div id="experience" className="content-section">
              <h2 className="section-title">{profile.expTitle}</h2>
              {profile.exp.map((job, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-header">
                    <h3>{job.company}</h3><span>{job.date}</span>
                  </div>
                  <div className="timeline-role">{job.role}</div>
                  
                  {/* Cetak Daftar (Bullet Points) dari CV */}
                  <ul className="timeline-desc-list">
                    {job.descList.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  {/* Cetak Slider Gambar */}
                  {job.images && <ImageSlider images={job.images} />}
                  
                </div>
              ))}
            </div>

            {/* 4. EDUCATION (Pendidikan) */}
            <div id="education" className="content-section">
              <h2 className="section-title">{profile.eduTitle}</h2>
              {profile.edu.map((school, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-header">
                    <h3>{school.company}</h3><span>{school.date}</span>
                  </div>
                  <div className="timeline-role">{school.role}</div>
                  
                  {/* Cetak Daftar (Bullet Points) Pendidikan */}
                  <ul className="timeline-desc-list">
                    {school.descList.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  
                </div>
              ))}
            </div>

            {/* 5. TECHNICAL SKILLS */}
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
          </section>
        </main>
      )}

      {/* 4. TAB MENU: PORTOFOLIO / PROJECT */}
      {tab === 'project' && (
        <main className="project-container">
          
          {/* TAMPILAN 1: DAFTAR PROYEK (GRID) */}
          {!activeProject && (
            <>
              <div className="project-header">
                <h1>{lang === 'id' ? 'Portofolio Karya' : 'My Portfolio Works'}</h1>
                <p>{lang === 'id' ? 'Proyek Kreatif dan Pengembangan Sistem' : 'Creative Projects & System Engineering'}</p>
              </div>

              <div className="project-filters" style={{ marginBottom: '20px' }}>
                {projectCategories.map(cat => (
                  <button key={cat} className={projectCategory === cat ? 'active' : ''} onClick={() => setProjectCategory(cat)}>
                    {cat === 'All' && lang === 'id' ? 'Semua Kategori' : cat}
                  </button>
                ))}
              </div>

              <div className="cert-controls">
                <select className="cert-sort-select" value={projectSort} onChange={(e) => setProjectSort(e.target.value)}>
                  <option value="newest">{lang === 'id' ? 'Urutkan: Terbaru' : 'Sort by: Newest - Oldest'}</option>
                  <option value="oldest">{lang === 'id' ? 'Urutkan: Terlama' : 'Sort by: Oldest - Newest'}</option>
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
                      <div className="project-year"><i>📅</i> {lang === 'id' ? '' : ''} {proj.year}</div>
                      <p className="project-desc">{proj.desc}</p>
                      <div className="project-links">
                        
                        {/* --- TOMBOL INI SEKARANG MEMBUKA HALAMAN DETAIL --- */}
                        <button className="project-btn" onClick={() => setActiveProject(proj)}>
                          {lang === 'id' ? 'Lihat Studi Kasus ↗' : 'View Case Study ↗'}
                        </button>
                        
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* TAMPILAN 2: HALAMAN DETAIL PROYEK (CASE STUDY) */}
          {activeProject && (
            <div className="project-detail-container">
              
              <button className="btn-back" onClick={() => setActiveProject(null)}>
                ← {lang === 'id' ? 'Kembali ke Daftar Proyek' : 'Back to Projects'}
              </button>

              <div className="pd-header">
                <h1 className="pd-title">{activeProject.title}</h1>
                <div className="pd-meta">
                  <span><i>📅</i> {activeProject.year}</span>
                  <div className="pd-author">
                    <img src={fotoId} alt="Amanda" />
                    <span>Amanda Septi Wulandari</span>
                  </div>
                </div>
                
                {/* Tech Tags */}
                {activeProject.techs && (
                  <div className="pd-tags">
                    {activeProject.techs.map((tech, idx) => (
                      <span key={idx} className="fp-tag">{tech}</span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pd-section">
                <h3>{lang === 'id' ? 'Ringkasan Proyek (Overview)' : 'Project Overview'}</h3>
                <p>{activeProject.overview || activeProject.desc}</p>
              </div>

              {activeProject.features && (
                <div className="pd-section">
                  <h3>{lang === 'id' ? 'Fitur Utama (Key Features)' : 'Key Features'}</h3>
                  <ul className="pd-features">
                    {activeProject.features.map((feat, idx) => (
                      <li key={idx}>
                        <strong>{feat.split(':')[0]}:</strong> {feat.split(':')[1] || feat}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Slider Gambar jika ada */}
              {activeProject.detailImages && activeProject.detailImages.length > 0 && (
                <div className="pd-section" style={{ marginTop: '50px' }}>
                  <ImageSlider images={activeProject.detailImages} />
                </div>
              )}

              {/* Tombol HANYA muncul jika demoLink ada dan BUKAN tanda pagar (#) */}
              {activeProject.demoLink && activeProject.demoLink !== '#' && activeProject.demoLink !== 'LINK_FIGMA' && (
                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                  <a href={activeProject.demoLink} target="_blank" rel="noreferrer" className="pd-external-link">
                    {lang === 'id' ? 'Buka Demo↗' : 'Open External Link ↗'}
                  </a>
                </div>
              )}

            </div>
          )}

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
              <option value="newest">{lang === 'id' ? 'Urutkan: Terbaru' : 'Sort by: Newest'}</option>
              <option value="oldest">{lang === 'id' ? 'Urutkan: Terlama' : 'Sort by: Oldest'}</option>
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