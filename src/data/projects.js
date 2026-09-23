import mochiOakImage from "../assets/images/projects/mochi-oak.png";
import beautyShopImage from "../assets/images/projects/beauty-shop.png";
import christmasMarketImage from "../assets/images/projects/christmas-market.png";
import movieListImage from "../assets/images/projects/movie-list.png";
import visionDashboardImage from "../assets/images/projects/vision-ui-dashboard.png";
import jobTrackImage from "../assets/images/projects/jobtrack.png";
import roomCraftImage from "../assets/images/projects/roomcraft.png";

const projects = [
  {
    id: 1,
    title: "Mochi & Oak",
    category: "Frontend",
    image: mochiOakImage,
    description:
      "Modern bir oyuncak e-ticaret deneyimi sunan çok sayfalı frontend projesi. Dinamik koleksiyon yapısı, ürün detay sayfaları, LocalStorage tabanlı sepet yönetimi, Bootstrap Offcanvas ve checkout akışı içerir.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap 5",
      "LocalStorage",
    ],
    github: "https://github.com/ozgekeskinn/mochi-oak",
    demo: "https://mochi-oak.vercel.app/",
  },

  {
    id: 2,
    title: "Noelle Beauty Shop",
    category: "Frontend",
    image: beautyShopImage,
    description:
      "Kozmetik ürünleri için geliştirilen çok sayfalı e-ticaret frontend projesi. JSON tabanlı dinamik ürün yönetimi, canlı ürün arama, kategori ve fiyat filtreleme, ürün detay sayfaları, LocalStorage tabanlı sepet sistemi ve checkout akışı içerir.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap 5",
      "JSON",
      "LocalStorage",
    ],
    github: "https://github.com/ozgekeskinn/beauty-shop",
    demo: "https://beauty-shop-taupe-ten.vercel.app/",
  },

  {
    id: 3,
    title: "Galata Yılbaşı Pazarı",
    category: "Frontend",
    image: christmasMarketImage,
    description:
      "Yılbaşı temalı ürünler için geliştirilen çok sayfalı e-ticaret frontend projesi. Dinamik ürün listeleme, kategori bazlı filtreleme, URL parametreli ürün detayları, benzer ürün önerileri, LocalStorage tabanlı sepet yönetimi ve checkout akışı içerir.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "LocalStorage",
      "Font Awesome",
    ],
    github: "https://github.com/ozgekeskinn/christmas-market",
    demo: "https://christmas-market-coral.vercel.app/",
  },

  {
    id: 4,
    title: "Film / Dizi Listem",
    category: "Frontend",
    image: movieListImage,

    imageFit: "contain",
    imagePosition: "center",

    description:
      "React ve TMDB API kullanılarak geliştirilen film ve dizi keşif uygulaması. Popüler film ve dizileri listeleme, dinamik detay sayfaları, arama, pagination, kişisel liste oluşturma, favoriler ve LocalStorage ile kalıcı veri yönetimi özelliklerini içerir.",
    technologies: [
      "React",
      "JavaScript",
      "React Router",
      "TMDB API",
      "Vite",
      "Bootstrap 5",
      "LocalStorage",
    ],
    github: "https://github.com/ozgekeskinn/movie-list",
    demo: "https://movie-list-teal-omega.vercel.app/",
  },

  {
    id: 5,
    title: "Vision UI Dashboard",
    category: "Frontend",
    image: visionDashboardImage,
    description:
      "React ve Chakra UI kullanılarak geliştirilen modern ve responsive yönetim paneli projesi. Dashboard istatistikleri, veri görselleştirme grafikleri, tablolar, billing, profil, giriş ve kayıt sayfaları ile çok sayfalı bir yönetim arayüzü sunar.",
    technologies: [
      "React",
      "JavaScript",
      "Chakra UI",
      "React Router",
      "ApexCharts",
      "React Icons",
      "Vite",
    ],
    github: "https://github.com/ozgekeskinn/vision-board",
    demo: "https://vision-board-rouge.vercel.app/",
  },

  {
    id: 6,
    title: "JobTrack",
    category: "Frontend",
    image: jobTrackImage,
    description:
      "İş ve staj başvurularını tek noktadan yönetmek için geliştirilen React tabanlı başvuru takip uygulaması. CRUD işlemleri, arama, filtreleme ve sıralama, durum bazlı Dashboard, sürükle-bırak Kanban board, istatistikler ve LocalStorage ile kalıcı veri yönetimi özelliklerini içerir.",
    technologies: [
      "React",
      "JavaScript",
      "React Router",
      "Bootstrap 5",
      "LocalStorage",
      "HTML5 Drag & Drop",
      "Lucide React",
      "Vite",
    ],
    github: "https://github.com/ozgekeskinn/jobtrack",
    demo: "https://jobtrack-theta.vercel.app/",
  },

  {
    id: 7,
    title: "RoomCraft",
    category: "Full Stack",
    image: roomCraftImage,
    description:
      "Gerçek oda ölçülerine göre interaktif yerleşim planları oluşturmayı sağlayan full-stack oda tasarım uygulaması. Mobilya sürükleme, yeniden boyutlandırma, döndürme, grid snap, çakışma kontrolü, undo/redo, bütçe ve maliyet takibi ile SQL Server tabanlı kalıcı tasarım yönetimi özelliklerini içerir.",
    technologies: [
      "React",
      "JavaScript",
      "ASP.NET Core",
      "C#",
      ".NET 10",
      "SQL Server",
      "ADO.NET",
      "Bootstrap 5",
      "Vite",
    ],
    github: "https://github.com/ozgekeskinn/RoomCraft",
    demo: "https://room-craft-two.vercel.app/",
  },
];

export default projects;
