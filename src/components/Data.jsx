import { useState, useEffect } from "react";
import Card from "./Card";
import Modal from "./Modal";

const Data = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredDinos, setFilteredDinos] = useState([]);
  const [selectedDino, setSelectedDino] = useState(null);

  const data = [
    {
      id: 1,
      name: "T-rex",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/tyrannosaurusrex.png",
      button: "baca",
      description:
        "Tyrannosaurus adalah genus dinosaurus theropoda besar. Spesies Tyrannosaurus rex ( rex berarti raja dalam bahasa Latin ), sering disebut T-rex atau bahasa sehari-hari Tirex, adalah salah satu theropoda yang paling terwakili. Ia hidup di wilayah yang sekarang disebut Amerika Utara bagian barat, di wilayah yang dulunya merupakan benua kepulauan yang dikenal sebagai Laramidia. Fosil ditemukan dalam berbagai formasi batuan yang berasal dari zaman Maastricht pada periode Kapur Atas, 68 hingga 66 juta tahun yang lalu. Ia merupakan anggota tyrannosaurid terakhir yang diketahui dan salah satu dinosaurus non- unggas terakhir yang ada sebelum peristiwa kepunahan Kapur Paleogen.",
    },
    {
      id: 47,
      name: "Acrocanthosaurus",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/acrocanthosaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 48,
      name: "Albertosaurus",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/albertosaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 49,
      name: "Carcharodonto",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/carcharodontosaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 50,
      name: "Carnotaurus",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/carnotaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 51,
      name: "Ceratosaurus",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/ceratosaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 13,
      name: "Allosaurus",
      category: "Dinosaurus karnivora",
      image: "/images/allosaurus.png",
      button: "baca",
      description:
        "Allosaurus  merupakan dinosaurus karnivora terbesar dalam Periode Jurasik. Allosaurus merupakan salah satu jenis dinosaurus yang paling baik dikenal sejauh ini selain karnivora terdahulu lainnya seperti Megalosaurus dan Tyrannosaurus rex.",
      secdescription:
        "Allosaurus adalah Theropoda terbesar di Periode Jurasik. Panjang tubuh maksimal Allosaurus dewasa bisa mencapai sekitar 10 m dengan tinggi sekitar 3,5 m dan berat mencapai 6 ton. Terdapat beberapa jenis Allosaurus yang berbeda, seperti Allosaurus fragilis, Allosaurus amplexus (terbesar), Allosaurus maximus, Allosaurus ferox, dan Allosaurus atrox. Panjang tengkorak mereka bervariasi, tetapi yang terbesar sekitar 1, 45 m panjangnya, dengan puluhan gigi tajam bergerigi sepanjang 12 cm untuk mencabik-cabik mangsa."
    },
    {
      id: 5,
      name: "Velociraptor",
      category: "Dinosaurus karnivora",
      image: "/images/velociraptor.png",
      button: "baca",
      description:
        "Velociraptor adalah genus dari dinosaurus Dromaeosaurid yang hidup di Asia pada kala Kapur Akhir, sekitar 75 hingga 71 juta tahun lalu. mongoliensis, yang dinamai dan dideskripsikan pada 1924. Fosil dari spesies tersebut ditemukan di Formasi Djadokhta, Mongolia. Spesies lainnya, V. osmolskae, dinamai pada 2008 bedasarkan material tengkorak yang ditemukan di Cina.",
      secdescription:
        "Lebih kecil dari dromaeosaurida lainnya seperti Deinonychus dan Achillobator, genus ini memiliki panjang 1.5 - 2.07 m, dengan berat 14.1 - 19.7 kg. Velociraptor memiliki tubuh berbulu dan berkaki dua dengan ekor yang panjang serta cakar berbentuk sabit pada kedua kaki, yang dianggap digunakan untuk menjatuhkan dan menahan mangsa"
    },
    {
      id: 12,
      name: "Tarbosaurus",
      category: "Dinosaurus karnivora",
      image: "/images/tarbosaurus.png",
      button: "baca",
      description:
        "Tarbosaurus adalah sebuah genus dinosaurus teropoda yang tergolong ke dalam famili Tyrannosauridae. Mereka hidup di Asia sekitar 70 juta tahun yang lalu pada akhir zaman Kapur. Fosil-fosil dinosaurus ini telah ditemukan di Mongolia, dan beberapa fosil yang tidak lengkap juga telah ditemukan di Tiongkok.",
      secdescription:
        "Tarbosaurus hidup di dataran banjir yang lembap yang dilintasi oleh sungai-sungai. Di habitat ini, hewan tersebut adalah predator puncak yang mungkin memburu dinosaurus-dinosaurus besar seperti hadrosaurus Saurolophus atau sauropoda Nemegtosaurus."
    },
    {
      id: 52,
      name: "Cryolopho",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/cryolophosaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 53,
      name: "Giganotosaurus",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/giganotosaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 54,
      name: "Indomi-Rex",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/indominusrex.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 55,
      name: "Majungasaurus",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/majungasaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 56,
      name: "Qianzhousaurus",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/qianzhousaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 58,
      name: "Metriacantho",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/metriacanthosaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 58,
      name: "Yutyrannus",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/yutyrannus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 59,
      name: "Deinonychus",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/deinonychus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 60,
      name: "Indoraptor",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/indoraptor.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 61,
      name: "Atrociraptor",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/atrociraptor.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 62,
      name: "Herrerasaurus",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/herrerasaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 63,
      name: "Australovenator",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/australovenator.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 64,
      name: "Troodon",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/troodon.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 65,
      name: "Coelophysis",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/coelophysis.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 66,
      name: "Compsognathus",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/compsognathus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 67,
      name: "Proceratosaurus",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/proceratosaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 68,
      name: "Scorpios-Rex",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/scorpiosrex.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 69,
      name: "Concavenator",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/concavenator.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 70,
      name: "Monolopho",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/monolophosaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 2,
      name: "Spinosaurus",
      category: "Dinosaurus piscivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/spinosaurus.png",
      button: "baca",
      description:
        "Spinosaurus (Dari Bahasa Yunani, Spino = Tulang belakang atau duri, dan Sauros = kadal) merupakan dinosaurus terbesar dari anggota Spinosaurida. Spinosaurus juga merupakan satu dari tiga Theropoda terbesar sepanjang masa melebihi Tyrannosaurus (T-Rex), yang hidup di daerah yang kini bisa dikenali sebagai Afrika bagian utara. Spinosaurus merupakan Theropoda raksasa yang dapat tumbuh hingga 18 m dengan tinggi sekitar 5 m (sampai layarnya) dan berat mencapai 7, 6 ton. Panjang tengkorak Spinosaurus 165 cm dengan seratus gigi-gigi runcing yang lurus sepanjang kira-kira 19 cm. Ciri khas Spinosaurus adalah tulang belakangnya yang menjulang keatas sekitar 2 m dan merupakan layar yang dilapisi kulit.",
    },
    {
      id: 73,
      name: "Suchomimus",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/suchomimus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 74,
      name: "Baryonyx",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/baryonyx.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 75,
      name: "Ouranosaurus",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/ouranosaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 8,
      name: "Stygimoloch",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/stygimoloch.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 8,
      name: "Pachycephalo",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/pachycephalosaurus.png",
      button: "baca",
      description:
        "Pachycephalosaurus (nama ilmiahnya berarti kadal bertengkorak tebal) adalah herbivora Ornithischia dari famili Pachycephalosauridae yang hidup pada zaman Kapur Akhir di Amerika Utara. Genus ini diwakili oleh spesies P. wyomingensis.",
      secdescription:
        "Kerangka Pachycephalosaurus secara keseluruhan belum pernah ditemukan. Segala yang diketahui tentang Pachycephalosaurus hanya berasal dari tengkorak spesies ini dan juga kerangka dari spesies keluarga yang sama. Selain tengkorak dengan kubah tebal, beberapa karakteristik hewan ini memberikan kesan yang aneh."
    },
    {
      id: 8,
      name: "Dracorex",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/dracorex.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 8,
      name: "Homalocephale",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/homalocephale.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 8,
      name: "Iguanodon",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/iguanodon.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 8,
      name: "Maiasaura",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/maiasaura.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 8,
      name: "Muttaburrasaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/muttaburrasaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 8,
      name: "Therizinosaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/therizinosaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 8,
      name: "Struthiomimus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/struthiomimus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 8,
      name: "Archaeornithomimus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/archaeornithomimus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 8,
      name: "Gallimimus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/gallimimus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 8,
      name: "Dryosaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/dryosaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 8,
      name: "Corythosaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/corythosaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 8,
      name: "Olorotitan",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/olorotitan.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 8,
      name: "Tsintaosaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/tsintaosaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 10,
      name: "Parasaurolophus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/parasaurolophus.png",
      button: "baca",
      description:
        "Parasaurolophus adalah dinosaurus dari famili Hadrosauridae yang hidup pada masa periode kapur akhir sekitar 76,5-73 juta tahun yang lalu. Ia memiliki jambul berbentuk tabung di belakang kepala nya, mungkin untuk berkomunikasi dengan sesamanya, dan mungkin untuk memamerkan pada betina ketika musim kawin. Parasaurolophus berarti kadal yang hampir berjambul fosilnya ditemukan di Amerika utara, New meksiko, dan Kanada.",
      secdescription:
        "Parasaurolophus tumbuh hingga 10 meter, tinggi 4.9 meter, dan berat 2-3 ton. yang betina memiliki tubuh lebih kecil dibanding pejantan, dan jambul Parasaurolophus betina lebih melengkung dibanding jantan. Parasaurolophus hidup kawanan besar, umunnya ia berjalan dengan 4 kakinya namun jika dalam bahaya ia mengangkat kaki depan nya dan lari dengan kedua kakinya."
    },
    {
      id: 8,
      name: "Edmontosaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/edmontosaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 15,
      name: "Tapejara",
      category: "Dinosaurus piscivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/tapejara.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 16,
      name: "Tropeognathus",
      category: "Dinosaurus piscivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/tropeognathus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 17,
      name: "Dimorphodon",
      category: "Dinosaurus piscivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/dimorphodon.png",
      button: "baca",
      description:
        "Dimorphodon adalah genus pterosaurus berukuran sedangdari Eropa pada awal Periode Jurassic (sekitar 201-191 juta tahun yang lalu).",
      secdescription:
        "Struktur tubuh Dimorphodon menampilkan banyak karakteristik primitif, seperti, menurut Owen, otak yang sangat kecil dan sayap yang pendek secara proporsional. Phalanx pertama pada jari terbangnya hanya sedikit lebih panjang dari lengan bawahnya. Lehernya pendek namun kuat dan fleksibel dan mungkin memiliki kantong membran di bagian bawah. Vertebranya mempunyai foramina pneumatik, bukaan yang melaluinya kantung udara dapat mencapai bagian dalam yang berongga. Dimorphodon memiliki panjang tubuh dewasa 1 meter, dengan lebar sayap 1,45 meter. Ekor Dimorphodon panjang dan terdiri dari tiga puluh ruas tulang belakang."
    },
    {
      id: 18,
      name: "Pyroraptor",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/pyroraptor.png",
      button: "baca",
      description:
        "Pyroraptor berarti pencuri api, adalah genus dinosaurus paravian yang telah punah, mungkin dromaeosaurid atau unenlagiid , dari pulau Ibero-Armorican Kapur Akhir, yang sekarang menjadi Prancis selatan dan Spanyol utara. Ia hidup pada tahap akhir Campanian dan awal Maastrichtian, sekitar 83,5 hingga 70,6 juta tahun yang lalu. Hal ini diketahui dari satu spesimen parsial yang ditemukan di Provence pada tahun 1992, setelah kebakaran hutan. Hewan itu diberi nama Pyroraptor olympius oleh Allain dan Taquet pada tahun 2000.",
      secdescription:
        "Pyroraptor olympius adalah dromaeosaurid, theropoda predator kecil mirip burung yang memiliki cakar melengkung yang membesar di ujung kedua setiap kaki untuk dimangsa; cakar ini memiliki panjang 6,6 cm (2,6 inci) untuk Pyroraptor."
    },
    {
      id: 19,
      name: "Microraptor",
      category: "Dinosaurus karnivora",
      image: "/images/microraptor.png",
      button: "baca",
      description:
        "Microraptor adalah sebuah genus dari dinosaurus dromaeosaurid bersayap empat. Fosil yang terawetkan dengan baik dari genus ini ditemukan dari batuan Kapur Awal (kala Aptium) sekitar 125 hingga 120 juta tahun lalu pada Formasi Jiufotang, Liaoning, Tiongkok. ",
      secdescription:
        "Xu Xing pada 2003 untuk mendeskripsikan spesimen pertama yang mengawetkan fitur tubuh ini sebagai dinosaurus bersayap empat dan berspekulasi bahwa mereka mungkin meluncur (seperti pada bajing terbang) dengan keempat lengannya."
    },
    {
      id: 20,
      name: "Pteranodon",
      category: "Dinosaurus piscivora",
      image: "/images/pterosaurus.png",
      button: "baca",
      description:
        "Pterosaurus, yang artinya kadal bersayap, adalah suatu jenis reptil terbang dari cabang atau ordo Pterosauria yang telah punah. Mereka hidup dari akhir Trias sampai akhir masa Kapur (228 sampai 66 juta tahun yang lalu). Sayap mereka dibentuk oleh selaput kulit, otot, dan jaringan lain yang membentang dari pergelangan kaki yang secara cepat ataupun lambat akan tetap memanjang keempat jarinya.",
      secdescription:
        "Spesies awal memiliki panjang, rahang bergigi dan ekor panjang, sementara bentuk selanjutnya memiliki ekor yang sangat kecil, dan beberapa gigi yang berkurang. Badannya ditutupi oleh mantel berbulu yang terbuat dari filamen seperti rambut yang dikenal sebagai pycnofibers, yang menutupi tubuh dan bagian sayapnya."
    },
    {
      id: 21,
      name: "Barbaridactylus",
      category: "Dinosaurus piscivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/barbaridactylus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 22,
      name: "Cearadactylus",
      category: "Dinosaurus piscivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/cearadactylus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 23,
      name: "Dsungaripterus",
      category: "Dinosaurus piscivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/dsungaripterus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 24,
      name: "Geosternbergia",
      category: "Dinosaurus piscivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/geosternbergia.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 25,
      name: "Jeholopterus",
      category: "Dinosaurus insectivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/jeholopterus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 26,
      name: "Maaradactylus",
      category: "Dinosaurus piscivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/maaradactylus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 27,
      name: "Quetzalcoatlus",
      category: "Dinosaurus piscivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/quetzalcoatlus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 76,
      name: "Oviraptor",
      category: "Dinosaurus omnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/oviraptor.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 77,
      name: "Gigantoraptor",
      category: "Dinosaurus omnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/gigantoraptor.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 71,
      name: "Utahraptor",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/utahraptor.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 78,
      name: "Deinocheirus",
      category: "Dinosaurus omnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/deinocheirus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 28,
      name: "Archelon",
      category: "Dinosaurus piscivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/archelon.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 29,
      name: "Tylosaurus",
      category: "Dinosaurus piscivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/tylosaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 40,
      name: "Mosasaurus",
      category: "Dinosaurus karnivora",
      image: "/images/mosasaurus.png",
      button: "baca",
      description:
        "Mosasaurus artinya kadal Sungai Meuse, adalah genus tipe (yang mendefinisikan contoh) dari Mosasauroidea. Hewan ini hidup pada 82 - 65 juta tahun yang lalu selama sub-kalaKampanium dan Maastrichtium dari Kapur Akhir. Fosil Mosasaurus paling awal yang pernah ditemukan adalah tengkorak-tengkorak di sebuah galian kapur dekat kota Maastricht di Belanda pada abad ke-18 akhir, yang awalnya dikira sebagai tulang-tulang buaya atau paus.",
      secdescription:
        "Sekarang, ukuran Mosasaurus hoffmannii setidaknya mencapai 18 m dengan berat sekitar 8 ton.Panjang tengkorak maksimalnya 1,5 m dengan gigi-gigi besar seperti pahat,yang digunakan untuk menangkap dan mengoyak mangsanya seperti Amonit,Plesiosaurus, Protostega,dan Elasmosaurus."
    },
    {
      id: 30,
      name: "Elasmosaurus",
      category: "Dinosaurus piscivora",
      image: "/images/elasmosaurus.png",
      button: "baca",
      description:
        "Elasmosaurus Yang berarti Kadal Pelat Tipis, adalah genus dari Plesiosauria dengan leher yang sangat panjang yang hidup di periode Kapur, sekitar 80.5 juta tahun yang lalu. Pernah muncul di film animasi jepang yaitu Doraemon dengan nama pii..",
      secdescription:
        "Elasmosaurus panjangnya sekitar 14 m dan beratnya lebih dari 2.000 kg (2,2 ton ), menjadikannya salah satu plesiosaurus terbesar. Tengkoraknya relatif datar, dengan jumlah gigi yang panjang dan menonjol keluar. Leher tulang setelah tengkorak, panjang dan rendah, dan memiliki puncak lateral yang membujur. Seperti kebanyakan elasmosaurids. korset dada berbentuk panjang, dan tidak dimiliki dalam spesimen remaja."
    },
    {
      id: 31,
      name: "Attenborosaurus",
      category: "Dinosaurus piscivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/attenborosaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 32,
      name: "Dunkleosteus",
      category: "Dinosaurus piscivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/dunkleosteus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 33,
      name: "Ichthyosaurus",
      category: "Dinosaurus piscivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/ichthyosaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 34,
      name: "Kronosaurus",
      category: "Dinosaurus piscivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/kronosaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 35,
      name: "Liopleurodon",
      category: "Dinosaurus piscivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/liopleurodon.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 36,
      name: "Shonisaurus",
      category: "Dinosaurus piscivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/shonisaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 37,
      name: "Nothosaurus",
      category: "Dinosaurus piscivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/nothosaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 38,
      name: "Plesiosaurus",
      category: "Dinosaurus piscivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/plesiosaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 39,
      name: "Styxosaurus",
      category: "Dinosaurus piscivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/styxosaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 41,
      name: "Alamosaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/alamosaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 42,
      name: "Apatosaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/apatosaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 7,
      name: "Diplodocus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/diplodocus.png",
      button: "baca",
      description:
        "Diplodocus adalah genus dinosaurus sauropod diplodocid yang fosilnya pertama kali ditemukan pada tahun 1877 oleh S. W. Williston. Dinosaurus ini hidup di Amerika Utara barat pada akhir periode Jurassic.Diplodocus dinamai berdasarkan bahasa Yunani dan Latin yang berarti Bertiang dua karena ruas serta tulang kakinya yang kokoh.",
      secdescription:
        "Diplodocus mungkin termasuk dalam sepuluh dinosaurus terbesar, dengan panjang 31 m. Tingginya sekitar 5 m, terhitung pendek bagi Sauropoda kebanyakan. Berat sekitar 20 ton yang terhitung ringan karena tulang-tulangnya berrongga."
    },
    {
      id: 43,
      name: "Camarasaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/camarasaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 6,
      name: "Brachiosaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/brachiosaurus.png",
      button: "baca",
      description:
        "Branchiosaurus adalah genus dinosaurus sauropoda yang hidup di Amerika Utara selama Jura Akhir, sekitar 154 - 150 juta tahun yang lalu.[2] Dinosaurus ini pertama kali dijelaskan oleh paleontolog Amerika bernama Elmer S. Riggs pada tahun 1903 dari fosil-fosil yang ditemukan di lembah Sungai Colorado di Colorado barat, Amerika Serikat.",
      secdescription:
        "Perkiraan panjang tubuh Brachiosaurus diantaranya adalah 18 meter atau 20 - 26 meter, dan tingginya 16 meter atau 12 - 13 meter. Menurut berbagai penelitian yang melibatkan Giraffatitan dan Brachiosaurus, Giraffatitan diperkirakan memiliki berat 23,3 ton[3] hingga 34,0 ton."
    },
    {
      id: 44,
      name: "Dreadnoughtus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/dreadnoughtus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 45,
      name: "Mamenchisaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/mamenchisaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 11,
      name: "Brontosaurus",
      category: "Dinosaurus herbivora",
      image: "/images/brontosaurus.png",
      button: "baca",
      description:
        "Brontosaurus artinya Kadal Petir, adalah genus dari dinosaurus sauropoda herbivora yang hidup di Amerika Serikat saat iniselama periode Jurassic Akhir . Ia dijelaskan oleh ahli paleontologi Amerika Otniel Charles Marsh pada tahun 1879.",
      secdescription:
        "Beberapa perkiraan ukuran telah dibuat, dengan spesies terbesar B. excelsus mencapai panjang 21 hingga 22 meter dari kepala hingga ekor dan berbobot 15 hingga 17 ton), sedangkan spesies yang lebih kecil B. parvus hanya mencapai panjang 19 m (62 kaki). Spesimen remaja Brontosaurus telah diketahui, dengan individu yang lebih muda tumbuh dengan cepat hingga mencapai ukuran dewasa hanya dalam waktu 15 tahun."
    },
    {
      id: 46,
      name: "Nigersaurus",  
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/nigersaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 47,
      name: "Amargasaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/amargasaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 14,
      name: "Sinoceratops",
      category: "Dinosaurus herbivora",
      image: "/images/sinoceratops.png",
      button: "baca",
      description:
        "Sinoceratops adalah genus dinosaurus ceratopsian yang telah punah dan hidup sekitar 73 juta tahun yang lalu pada bagian akhir Zaman Kapur di tempat yang sekarang menjadi provinsi Shandong di Tiongkok . Ia dinamakan pada tahun 2010 oleh Xu Xing dkk. untuk tiga tengkorak dari Zhucheng , Cina. Nama spesies jenisnya Sinoceratops zhuchengensis berarti wajah bertanduk Cina dari Zhucheng, sesuai dengan lokasi penemuannya.",
      secdescription:
        "Sinoceratops adalah herbivora berkaki empat yang berukuran sedang, dan satu-satunya ceratopsida yang diketahui dari Asia. Semua centrosaurine lain , dan semua chasmosaurine , diketahui dari fosil yang ditemukan di Amerika Utara, kecuali kemungkinan Turanoceratops. Panjangnya diperkirakan mencapai 5 meter dan beratnya mencapai 2 ton."
    },
    {
      id: 79,
      name: "Pentaceratops",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/pentaceratops.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 80,
      name: "Torosaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/torosaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 4,
      name: "Triceratops",
      category: "Dinosaurus herbivora",
      image: "/images/triceratops.png",
      button: "baca",
      description:
        "Triceratops artinya wajah bertanduk tiga, adalah genus dari dinosaurus ceratopsia chasmosaurinae yang hidup pada sub-kala Maastrichtium akhir pada kala Kapur Akhir, sekitar 68 hingga 66 juta tahun lalu pada wilayah yang sekarang merupakan Amerika Utara. Genus ini merupakan salahsatu yang terakhir diketahui dari dinosaurus non-burung, punah pada Peristiwa kepunahan Kapur Paleogen.",
      secdescription:
        "Triceratops memiliki tiga tanduk, dua di alisnya dan satu di hidungnya. Panjang tengkoraknya mencapai 2 m. Triceratops memiliki empat kaki kokoh untuk menopang tubuhnya. Beberapa ahli mengatakan Triceratops tidak bisa berlari cepat, tetapi mereka dapat mencapai kecepatan setidaknya 30 km/jam.",
    },
    {
      id: 82,
      name: "Chasmosaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/chasmosaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 83,
      name: "Styracosaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/styracosaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 81,
      name: "Pachyrhinosaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/pachyrhinosaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 84,
      name: "Sauropelta",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/sauropelta.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 85,
      name: "Polacanthus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/polacanthus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 86,
      name: "Nodosaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/nodosaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 87,
      name: "Euoplocephalus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/euoplocephalus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 88,
      name: "Crichtonsaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/crichtonsaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 9,
      name: "Ankylosaurus",
      category: "Dinosaurus herbivora",
      image: "/images/ankylosaurus.png",
      button: "baca",
      description:
        "Ankylosaurus adalah salah satu jenis dinosaurus yang hidup pada periode kapur akhir sekitar 68 juta hingga 65 juta tahun yang lalu di Amerika Utara.",
      secdescription:
        "Memiliki tubuh sepanjang 8 meter, tingginya sekitar 2 meter, dan beratnya mencapai setidaknya 4 ton. Ankylosaurus memiliki tubuh yang dilindungi oleh semacam cangkang keras yang membuat tubuhnya tidak bisa diserang dengan mudah, bahkan oleh Tyrannosaurus rex. Perisai tulang setebal 5 cm melindungi tubuhnya yang pendek, yang disangga oleh empat kakinya yang kuat, pendek dan gemuk. Di ekornya terdapat bola dari batu seberat 5 kg. Jika Ankylosaurus diadang oleh lawannya, ia akan menyerang lawan tersebut dengan ekor kerasnya dan dalam sekejap lawannya akan terjatuh."
    },
    {
      id: 82,
      name: "Huayangosaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/huayangosaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 81,
      name: "Kentrosaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/kentrosaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 82,
      name: "Gigantspinosaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/gigantspinosaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 80,
      name: "Chungkingosaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/chungkingosaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 83,
      name: "Wuerhosaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/wuerhosaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 3,
      name: "Stegosaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/stegosaurus.png",
      button: "baca",
      description:
        "Stegosaurus artinya kadal beratap, karena sisik besar di punggungnya (bahasa Yunani stego = piring/atap + sauros = kadal) adalah sebuah genus dinosaurus herbivora besar dari Awal Jurassic di Amerika Utara. Spesies ini adalah salah satu jenis dinosaurus yang paling mudah diidentifikasi, karena kedua baris sisik yang saling silang di punggungnya dan 2 pasang duri panjang di ekornya (disebut thagomizer).",
      secdescription:
        "Stegosaurus adalah salah satu dinosaurus paling tenang, namun penyerangnya seperti Allosaurus atau Saurophaganax akan menghadapi pertahanan kuat-lempeng dengan semburat merah(karena darah yang dipompakan ke dalam ruang lempengannya saat merasa terancam), serta ayunan ekor yang sangat berbahaya. Duri ekor Stegosaurus panjangnya dapat mencapai 1 m , dan dapat melubangi pemangsa sampai sedalam 90 cm.",
    },
    {
      id: 72,
      name: "Dimetrodon",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/dimetrodon.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 4,
      name: "Minmi",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/minmi.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
    {
      id: 5,
      name: "Lystrosaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/lystrosaurus.png",
      button: "baca",
      description:
        "Soon..",
      secdescription:
        "Soon..",
    },
  ];
  // {
  //   id: 21,
  //   name: "Hylotomus",
  //   category: "Dinosaurus karnivora",
  //   image: "/images/hylotomus.png",
  //   button: "baca",
  //   description:
  //     "Hylotomus, atau dinosaurus hylotomus, adalah genus dari dinosaurus dromaeosaurid yang terdiri dari dua spesies, yaitu Hylotomus australis dan Hylotomus melanotis. ",
  // },

  const handleSearch = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setSearchInput(inputValue);

    const filteredDinos = data.filter((dino) => {
      return dino.name.toLowerCase().includes(inputValue);
    });

    setFilteredDinos(filteredDinos);
  };

  // Set filteredDinos to the full array initially
  if (filteredDinos.length === 0) {
    setFilteredDinos(data);
  }


  const handleOpenModal = (dino) => {
    setSelectedDino(dino);
  };

  const handleCloseModal = () => {
    setSelectedDino(null);
  };

    // Efek untuk mengatur overflow pada body
    useEffect(() => {
      const body = document.body;
      if (selectedDino) {
        // Disable scrolling when the modal is open
        body.style.overflow = "hidden";
      } else {
        // Enable scrolling when the modal is closed
        body.style.overflow = "auto";
      }
  
      // Cleanup function untuk mengembalikan overflow ke nilai semula saat komponen unmount
      return () => {
        body.style.overflow = "auto";
      };
    }, [selectedDino]);

  return (
    <>
      <div className="flex flex-col p-4">
        <div className="flex justify-center gap-2">
          <input
            type="search"
            id="search-input"
            className="w-1/2 px-5 py-2 border rounded-lg bg-white shadow-lg shadow-secondary placeholder-gray-400 text-gray-700 focus:outline-none focus:shadow-outline"
            placeholder="Cari Dinosaurus.."
            minLength="3"
            maxLength="50"
            value={searchInput}
            onChange={handleSearch}
          />
          <button id="search" onClick={handleSearch} className="btnSecondary shadow-lg shadow-white">
            Search
          </button>
        </div>
      </div>

      <div className="mt-10 md:px-10 px-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filteredDinos.map((dino) => (
          <Card
            key={dino.id}
            image={dino.image}
            name={dino.name}
            button={dino.button}
            onBacaClick={() => handleOpenModal(dino)}
          />
        ))}
      </div>

      <div className="my-6 md:px-10 md:my-8 px-4 flex justify-center items-center">
        <p className="text-xs text-slate-300">Mayoritas sumber gambar dari Jurassic World Evolution 2</p>
      </div>
      
      {selectedDino && (
        <Modal dino={selectedDino} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Data;
