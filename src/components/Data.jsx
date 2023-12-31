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
      name: "Barats Hyper",
      category: "Dinosaurus Langka",
      image: "https://p3d.in/model_data/snapshot/VZjoS",
      // https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/2b7611ce-5d5b-424a-98eb-4a3f262152c5/dfknthg-00140907-2f94-4a30-97f1-a093ddee5ede.png BARATS BERSKIN
      button: "Lihat",
      description:
        "Barats bukanlah seekor dinosaurus, melainkan pemilik yg mengendarai Detona (Dinosaurus yang ditunggangi Barats). Detona merupakan dinosaurus yang langka, kemampuannya menagkap mangsa sangatlah unik, dengan cara menyerudug mangsanya lalu diemut-emut dan di lepeh lagi..",
      secdescription: 
        "Habitat barats yaitu di lane of down, yang pake barats biasanya BEBAN... mending Nana hyper...",
    },
    {
      id: 2,
      name: "T-rex",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/tyrannosaurusrex.png",
      button: "Lihat",
      description:
        "Tyrannosaurus Rex adalah genus dinosaurus theropoda besar. Spesies Tyrannosaurus rex ( rex berarti raja dalam bahasa Latin ), sering disebut T-rex atau bahasa sehari-hari Tirex, adalah salah satu theropoda yang paling terwakili. Ia hidup di wilayah yang sekarang disebut Amerika Utara bagian barat, di wilayah yang dulunya merupakan benua kepulauan yang dikenal sebagai Laramidia. Fosil ditemukan dalam berbagai formasi batuan yang berasal dari zaman Maastricht pada periode Kapur Atas, 68 hingga 66 juta tahun yang lalu. Ia merupakan anggota tyrannosaurid terakhir yang diketahui dan salah satu dinosaurus non- unggas terakhir yang ada sebelum peristiwa kepunahan Kapur Paleogen.",
      secdescription: 
        "T-Rex adalah salah satu karnivora darat terbesar sepanjang masa. Spesimen lengkap yang disimpan di Museum Sejarah Alam Field, Chicago, dengan kode FMNH PR2081 dan dijuluki Sue, memiliki panjang 14 m[3] dan tinggi 4 m di panggulnya.[4] Menurut kajian-kajian terkini, Tyrannosaurus juga diperkirakan memiliki massa antara 8,4 ton sampai 14 ton saat masih hidup.",
    },
    {
      id: 3,
      name: "Albertosaurus",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/albertosaurus.png",
      button: "Lihat",
      description:
        "Albertosaurus berarti kadal Alberta, adalah genus dinosaurus dari famili Carcharodontosauridae yang hidup di Amerika Utara pada awal hingga pertengahan zaman Maastrichtian pada periode Kapur Akhir , sekitar 71  juta tahun yang lalu. Fosilnya ditemukan di Amerika Selatan, Afrika, dan Asia.",
      secdescription:
        "Sebagai tyrannosaurid, Albertosaurus adalah predator bipedal dengan lengan pendek, tangan dua jari, dan kepala besar dengan lusinan gigi besar dan tajam, indera penciuman yang kuat, penglihatan binokular yang kuat, dan kekuatan gigitan yang menghancurkan tulang. Bahkan mungkin ia merupakan predator puncak dalam ekosistem lokalnya . Meskipun Albertosaurus tentu saja berukuran besar untuk ukuran theropoda, ia masih jauh lebih kecil dibandingkan kerabatnya yang lebih besar dan lebih terkenal, Tyrannosaurus rex , yang tumbuh hingga panjang 8-9 meter dan berat 1,7-2,5 ton.",
    },
    {
      id: 4,
      name: "Carcharodonto",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/carcharodontosaurus.png",
      button: "Lihat",
      description:
        "Carcharodontosaurus yang berarti kadal bergigi hiu, merupakan genus dinosaurus theropoda karnivora yang hidup di Afrika Utara dari sekitar 99 hingga 94 juta tahun lalu selama tahap Cenomanian pada Kapur Akhir, ia salah satu dinosaurus karnivora terbesar yang pernah berjalan di Bumi. Karnivora raksasa ini merupakan salah satu yang paling besar pula dari kelompok Carnosauria. Dinosaurus ini hanya berukuran lebih besar dari kerabat Giganotosaurus.",
      secdescription:
        "Carcharodontosaurus adalah salah satu dinosaurus theropoda terbesar yang diketahui, dengan C. saharicus panjangnya mencapai 12-12,5 meter dan massa tubuh sekitar 6-6,2  ton. Tengkoraknya besar dan ringan dengan mimbar berbentuk segitiga. Rahangnya dilapisi dengan gigi tajam, melengkung, dan bergerigi yang sangat mirip dengan gigi hiu putih besar, yang menjadi inspirasi nama tersebut.",
    },
    {
      id: 5,
      name: "Carnotaurus",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/carnotaurus.png",
      button: "Lihat",
      description:
        "Carnotaurus yang berarti daging banteng, adalah genus dinosaurus theropoda yang hidup di Amerika Selatan selama periode Kapur Akhir, mungkin antara 71 dan 69 juta tahun yang lalu. Satu-satunya spesies adalah Carnotaurus sastrei. Dikenal dari satu kerangka yang terpelihara dengan baik, ini adalah salah satu theropoda yang paling banyak dipahami dari Belahan Bumi Selatan. Kerangka tersebut, ditemukan pada tahun 1984, ditemukan di Provinsi Chubut Argentinadari bebatuan Formasi La Colonia.",
      secdescription:
        "Carnotaurus adalah predator bipedal bertubuh ringan, berukuran panjang 7,5 hingga 8 m (24,6 hingga 26,2 kaki) dan berat 1,3-2,1 metrik ton (1,4-2,3 ton pendek; 1,3-2,1 ton panjang). Sebagai theropoda, Carnotaurus sangat terspesialisasi dan khas. Ia memiliki tanduk tebal di atas matanya, ciri yang tidak terlihat pada semua dinosaurus karnivora lainnya, dan tengkorak yang sangat dalam di leher yang berotot.",
    },
    {
      id: 6,
      name: "Ceratosaurus",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/ceratosaurus.png",
      button: "Lihat",
      description:
        "Ceratosaurus yang berarti tanduk kadal,  adalah dinosaurus theropoda karnivora yang hidup pada periode Jurassic Akhir ( Kimmeridgian sampai zaman Tithonian ). Genus inipertama kali dideskripsikan pada tahun 1884 oleh ahli paleontologi Amerika Otniel Charles Marsh berdasarkan kerangka hampir lengkap yang ditemukan di Garden Park, Colorado, pada batuan milik Formasi Morrison. Jenis spesiesnya adalah Ceratosaurus nasicornis.",
      secdescription:
        "Ceratosaurus adalah theropoda berukuran sedang. Spesimen aslinya diperkirakan memiliki panjang 5,3 m (17 kaki) atau 5,69 m (18,7 kaki), sedangkan spesimen yang digambarkan sebagai C. dentisulcatus lebih besar, dengan panjang sekitar 7 m (23 kaki). Ceratosaurus dicirikan oleh rahang dalam yang menopang gigi seperti bilah yang sangat panjang secara proporsional, tanduk seperti punggung bukit yang menonjol di garis tengah moncong, dan sepasang tanduk di atas mata. Tungkai depannya sangat pendek, namun tetap berfungsi penuh.",
    },
    {
      id: 7,
      name: "Allosaurus",
      category: "Dinosaurus karnivora",
      image: "/images/allosaurus.png",
      button: "Lihat",
      description:
        "Allosaurus  merupakan dinosaurus karnivora terbesar dalam Periode Jurasik. Allosaurus merupakan salah satu jenis dinosaurus yang paling baik dikenal sejauh ini selain karnivora terdahulu lainnya seperti Megalosaurus dan Tyrannosaurus rex.",
      secdescription:
        "Allosaurus adalah Theropoda terbesar di Periode Jurasik. Panjang tubuh maksimal Allosaurus dewasa bisa mencapai sekitar 10 m dengan tinggi sekitar 3,5 m dan berat mencapai 6 ton. Terdapat beberapa jenis Allosaurus yang berbeda, seperti Allosaurus fragilis, Allosaurus amplexus (terbesar), Allosaurus maximus, Allosaurus ferox, dan Allosaurus atrox. Panjang tengkorak mereka bervariasi, tetapi yang terbesar sekitar 1, 45 m panjangnya, dengan puluhan gigi tajam bergerigi sepanjang 12 cm untuk mencabik-cabik mangsa."
    },
    {
      id: 8,
      name: "Velociraptor",
      category: "Dinosaurus karnivora",
      image: "/images/velociraptor.png",
      button: "Lihat",
      description:
        "Velociraptor adalah genus dari dinosaurus Dromaeosaurid yang hidup di Asia pada kala Kapur Akhir, sekitar 75 hingga 71 juta tahun lalu. mongoliensis, yang dinamai dan dideskripsikan pada 1924. Fosil dari spesies tersebut ditemukan di Formasi Djadokhta, Mongolia. Spesies lainnya, V. osmolskae, dinamai pada 2008 bedasarkan material tengkorak yang ditemukan di Cina.",
      secdescription:
        "Lebih kecil dari dromaeosaurida lainnya seperti Deinonychus dan Achillobator, genus ini memiliki panjang 1.5 - 2.07 m, dengan berat 14.1 - 19.7 kg. Velociraptor memiliki tubuh berbulu dan berkaki dua dengan ekor yang panjang serta cakar berbentuk sabit pada kedua kaki, yang dianggap digunakan untuk menjatuhkan dan menahan mangsa"
    },
    {
      id: 9,
      name: "Tarbosaurus",
      category: "Dinosaurus karnivora",
      image: "/images/tarbosaurus.png",
      button: "Lihat",
      description:
        "Tarbosaurus adalah sebuah genus dinosaurus teropoda yang tergolong ke dalam famili Tyrannosauridae. Mereka hidup di Asia sekitar 70 juta tahun yang lalu pada akhir zaman Kapur. Fosil-fosil dinosaurus ini telah ditemukan di Mongolia, dan beberapa fosil yang tidak lengkap juga telah ditemukan di Tiongkok.",
      secdescription:
        "Tarbosaurus hidup di dataran banjir yang lembap yang dilintasi oleh sungai-sungai. Di habitat ini, hewan tersebut adalah predator puncak yang mungkin memburu dinosaurus-dinosaurus besar seperti hadrosaurus Saurolophus atau sauropoda Nemegtosaurus."
    },
    {
      id: 10,
      name: "Cryolopho",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/cryolophosaurus.png",
      button: "Lihat",
      description:
        "Cryolopho Ceratosaurus adalah theropoda berukuran sedang. Spesimen aslinya diperkirakan memiliki panjang 5,3 m (17 kaki) atau 5,69 m (18,7 kaki), sedangkan spesimen yang digambarkan sebagai C. dentisulcatus lebih besar, dengan panjang sekitar 7 m (23 kaki). Ceratosaurus dicirikan oleh rahang dalam yang menopang gigi seperti bilah yang sangat panjang secara proporsional, tanduk seperti punggung bukit yang menonjol di garis tengah moncong, dan sepasang tanduk di atas mata. Tungkai depannya sangat pendek, namun tetap berfungsi penuh.",
      secdescription:
        "Ia adalah salah satu theropoda terbesar pada Jurassic Awal, dengan panjang subdewasa diperkirakan mencapai 6-7 meter (20-23 kaki) dan berat 350-465 kilogram (772-1.025 lb)",
    },
    {
      id: 11,
      name: "Giganotosaurus",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/giganotosaurus.png",
      button: "Lihat",
      description:
        "Giganotosaurus adalah genus dinosaurus theropoda yang hidup di tempat yang sekarang disebut Argentina, pada masa usia Cenomanian awalpada periode Kapur Akhir, sekitar 99,6 hingga 95 juta tahun yang lalu. Spesimen holotipe ditemukan di Formasi Candeleros Patagoniapada tahun 1993 dan hampir 70% selesai. Hewan itu diberi nama Giganotosaurus carolinii pada tahun 1995, nama genus diterjemahkan menjadi kadal selatan raksasa, dan nama spesifiknya menghormati penemunya, Ruben Carolini",
      secdescription:
        "Giganotosaurus adalah salah satu karnivora darat terbesar yang diketahui, tetapi ukuran pastinya sulit ditentukan karena sejauh ini sisa-sisa yang ditemukan tidak lengkap. Perkiraan spesimen terlengkap berkisar antara panjang 12 hingga 13 m, panjang tengkorak 1,53 hingga 1,80 m, dan berat 4,2 hingga 13,8 ton.",
    },
    {
      id: 12,
      name: "Indomi-Rex",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/indominusrex.png",
      button: "Lihat",
      description:
        "Indominus Rex adalah dinosaurus hibrida buatan manusia. Itu dibuat dengan DNA spesies dinosaurus theropoda lainnya (termasuk Carnotaurus, Giganotosaurus, Majungasurus, Rugops, Therizinosaurus, Velociraptor dan Tyrannosaurus Rex), serta hewan modern seperti sotong, katak panah pohon, dan pit viper. Diketahui bahwa Indominus Rex dirancang untuk menjadi dinosaurus paling dominan dalam hal ukuran dan kecerdasan, serta paling mematikan di antara semuanya.",
      secdescription:
        "Sekilas, ia menyerupai Tyrannosaurus Rex albino yang sangat besar dengan lengan yang lebih panjang menyerupai Velociraptor nublarensis, tetapi jika dilihat lebih dekat, sifat chimericnya terlihat. Berbeda dengan Velociraptor, kepalanya yang kasar dan bertanduk dengan bangga menjadi ciri khas warisan Carnotaurus miliknya. Indomininus Rex memiliki deretan gigi bergerigi, keriput, dan mulutnya mengeluarkan banyak darah, akibat giginya retak dan tumbuh sembarangan.",
    },
    {
      id: 13,
      name: "Majungasaurus",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/majungasaurus.png",
      button: "Lihat",
      description:
        "Majungasaurus yang berarti Kadal Mahajanga, adalah sebuah genus dari dinosaurus theropoda dari famili abelisauridae yang hidup di Madagaskar dari 70 sampai 66 juta tahun yang lalu, pada Periode Kapur, membuatnya menjadi dinosaurus tidak terbang terakhir yang diketahui punah pada masa Peristiwa kepunahan Kapur-Paleogen. Genus ini beranggotakan sebuah spesies tunggal, Majungasaurus crenatissimus.",
      secdescription:
        "Seperti abelisauridae lain, Majungasaurus adalah pemangsa bipedal dengan snout pendek. Walaupun kaki depan tidak diketahui secara utuh, tetapi mereka sangat pendek, sedangkan kaki belakang panjang dan kekar.",
    },
    {
      id: 14,
      name: "Qianzhousaurus",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/qianzhousaurus.png",
      button: "Lihat",
      description:
        "Qianzhousaurus yang berarti kadal Qianzhou, adalah genus dinosaurus tyrannosaurid yang hidup di Asia selama zaman Maastrichtian pada periode Kapur Akhir. Saat ini hanya ada satu spesies yang diberi nama, yaitu spesies tipe Qianzhousaurus sinensis, yang merupakan anggota suku Alioramini dan berkerabat paling dekat dengan Alioramus, satu-satunya alioramin lain yang diketahui.",
      secdescription:
        "Qianzhousaurus adalah tyrannosaurid berukuran sedang yang diperkirakan memiliki panjang 6,3 m (20,7 kaki), tinggi pinggul 2 m (6,6 kaki), dan massa tubuh 750-757 kg (1.653-1.669 lb). Perkiraan yang lebih tinggi menunjukkan bahwa panjang maksimumnya bisa mencapai antara 7,5 dan 9 meter (25 dan 30 kaki).",
    },
    {
      id: 15,
      name: "Metriacantho",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/metriacanthosaurus.png",
      button: "Lihat",
      description:
        "Metriacanthosaurus (artinya kadal berduri sedang) adalah genus dinosaurus metriacanthosaurid dari Tanah Liat Oxford bagian atas Inggris, berasal dari periode Jurassic Akhir, sekitar 160 juta tahun yang lalu ( Oxfordian bawah ).",
      secdescription:
        "Metriacanthosaurus adalah theropoda berukuran sedang dengan panjang tulang paha 80 cm (31 in). Gregory S. Paul pada tahun 1988 memperkirakan beratnya mencapai 1 ton (1,1 short ton). Thomas Holtz memberi panjang 8 meter (26,2 kaki). Metriacanthosaurus diberi nama berdasarkan tinggi duri sarafnya, yang sebenarnya tidak terlalu tinggi untuk theropoda. Mereka mirip dengan theropoda lain seperti Megalosaurus, Sinraptor, dan Ceratosaurus karena tingginya 1,5 kali centrum.",
    },
    {
      id: 16,
      name: "Acrocanthosaur",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/acrocanthosaurus.png",
      button: "Lihat",
      description:
        "Acrocanthosaurus yang berarti kadal bertulang tinggi, adalah genus dinosaurus dari famili Carcharodontosauridae yang hidup pada awal masa Periode Kapur di Amerika Utara. Fosilnya ditemukan di Texas, Oklahoma, dan kemungkinan di Maryland karena ditemukan fosil gigi yang diduga milik Acrocanthosaurus. Acrocanthosaurus merupakan pemangsa terbesar paling awal di amerika utara jauh sebelum Tyrannosaurus muncul.",
      secdescription:
        "Acrocanthosaurus adalah salah satu theropoda terbesar, panjangnya mencapai 11 m (36 ft), dan berbobot 62 t (137.000 pon). Acrocanthosaurus merupakan pemangsa terbesar panjang nya mencapai 11 meter, kerabat dari Acrocanthosaurus juga salah satu theropoda terbesar seperti Giganotosaurus di Amerika Selatan, dan Carcharodontosaurus di Afrika. Acrocanthosaurus mungkin berburu Tenontosaurus sebagai menu utamanya. Terkadang ia juga berburu dinosaurus yang lebih besar seperti Sauroposeidon, dimasa nya ia adalah pemangsa teratas.",
    },
    {
      id: 17,
      name: "Yutyrannus",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/yutyrannus.png",
      button: "Lihat",
      description:
        "Yutyrannus (berarti tiran berbulu) adalah genus dinosaurus tyrannosauroid proceratosaurid yang berisi satu spesies yang diketahui, Yutyrannus huali. Spesies ini hidup pada periode Kapur awal di tempat yang sekarang menjadi wilayah timur laut Tiongkok .",
      secdescription:
        "Yutyrannus adalah predator berkaki dua yang besar. Holotipe dan spesimen tertua yang diketahui diperkirakan memiliki panjang 9 meter (29,5 kaki) dan perkiraan berat sekitar 1.414 kilogram (3.117 lb). Pada tahun 2016, Gregory S. Paul memberikan perkiraan lebih rendah yaitu 7,5 meter (24,6 kaki) dan 1,1 ton.",
    },
    {
      id: 18,
      name: "Deinonychus",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/deinonychus.png",
      button: "Lihat",
      description:
        "Deinonychus adalah genus dinosaurus theropoda dromaeosaurid dengan satu spesies yang dideskripsikan, Deinonychus antirrhopus. Spesies ini, yang dapat tumbuh hingga sepanjang 3,4 meter (11 kaki), hidup pada awal Zaman Kapur, sekitar 115-108 juta tahun yang lalu (dari tahap pertengahan Aptian hingga awal Albian ). Fosil telah ditemukan dinegara bagian Montana, Utah, Wyoming, dan Oklahoma di AS",
      secdescription:
        "Berdasarkan beberapa spesimen dewasa, Paul memperkirakan bahwa Deinonychus bisa mencapai panjang 3,3-3,4 meter (10 kaki 10 inci - 11 kaki 2 inci), dengan panjang tengkorak 410 milimeter (16 inci), tinggi pinggul. 0,87 meter (2,9 kaki) dan massa tubuh 60-73 kg (132-161 lb). Campione dan rekan-rekannya mengusulkan perkiraan massa yang lebih tinggi yaitu 100 kg (220 lb) berdasarkan lingkar tulang paha dan humerus.",
    },
    // {
    //   id: 18,
    //   name: "Indoraptor",
    //   category: "Dinosaurus karnivora",
    //   image: "https://cdn.paleo.gg/games/jwe2/images/dino/indoraptor.png",
    //   button: "Lihat",
    //   description:
    //     "Indoraptor adalah dinosaurus hibrida yang diciptakan oleh Henry Wu di laboratorium bawah tanah Lockwood Manor. Dia berperan sebagai antagonis sekunder dari Jurassic World: Fallen Kingdom.",
    //   secdescription:
    //     "Penampilan Indoraptor sangat mirip dengan Indominus rex, tetapi panjang tubuhnya sekitar setengah dari pendahulunya. Dia memiliki cakar yang mirip dengan Velociraptor, dan warnanya terutama hitam dengan garis kuning keemasan mulai dari pangkal leher hingga ekornya, yang sangat mirip dengan garis biru metalik milik Blue. Seperti Indominus rex, Indoraptor memiliki tangan dengan empat jari, ibu jari yang berlawanan, dan tiga jari utama. Bentuk kepalanya mirip dengan Tyrannosaurus rex.",
    // },
    {
      id: 19,
      name: "Atrociraptor",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/atrociraptor.png",
      button: "Lihat",
      description:
        "Atrociraptor (berarti pencuri buas) adalah genus dinosaurus theropoda saurornitholestine dromaeosaurid dari Kapur Akhir ( tahap Maastrichtian ) di Alberta, Kanada. enis ( dan satu-satunya) spesimen Atrociraptor, ditemukan oleh Wayne Marshall pada tahun 1995, di lapisan Formasi Horseshoe Canyon yang juga mengandung tulang Albertosaurus.",
      secdescription:
        "Atrociraptor adalah dromaeosaurus yang relatif kecil, berukuran panjang 2 m (6,6 kaki) dan berat 15 kg (33 lb). [5] Ia berbeda dari Bambiraptor dan Dromaeosaurid lainnya dalam hal gigi-geliginya yang lebih isodont, giginya mempunyai ukuran yang berbeda tetapi bentuknya sama dan moncong pendek yang dalam.",
    },
    {
      id: 20,
      name: "Herrerasaurus",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/herrerasaurus.png",
      button: "Lihat",
      description:
        "Herrerasaurus kemungkinan merupakan genus dinosaurus saurischia dari periode Trias Akhir. Genus ini adalah salah satu dinosaurus paling awal dari catatan fosil. Namanya berarti Kadal Herrera, diambil dari nama peternak yang menemukan spesimen pertama pada tahun 1958 di Amerika Selatan. Semua fosil karnivora ini yang diketahui telah ditemukan di Formasi Ischigualasto pada zaman Carnian ( Trias akhir menurut ICS , bertanggal 231,4 juta tahun yang lalu) di barat laut Argentina.",
      secdescription:
        "Herrerasaurus adalah karnivora bipedal bertubuh ringan dengan ekor panjang dan kepala relatif kecil. Orang dewasa memiliki tengkorak dengan panjang hingga 56 cm (22 inci) dan panjang total hingga 6 m (20 kaki) dan berat 350 kg (770 lb). Spesimen yang lebih kecil memiliki panjang sekitar 4,5 meter (15 kaki) dan berat sekitar 200 kilogram (440 lb).",
    },
    {
      id: 21,
      name: "Australovena",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/australovenator.png",
      button: "Lihat",
      description:
        "Australovena yang berarti Pemburu Selatan,  adalah genus dinosaurus theropoda megaraptoran dari Formasi Winton zaman Cenomanian (Kapur Akhir) ( bertanggal 95 juta tahun yang lalu ) di Australia.",
      secdescription:
        "Menurut Gregory S. Paul, panjangnya diperkirakan 6 m (20 kaki), dengan massa tubuh 500 kilogram (1.100 lb). Karena merupakan predator yang relatif ringan, Hocknull menyebutnya sebagai cheetah pada masanya. Seperti megaraptoran lainnya, Australovenator adalah karnivora bipedal.",
    },
    {
      id: 22,
      name: "Troodon",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/troodon.png",
      button: "Lihat",
      description:
        "Troodon adalah dinosaurus kecil pemakan daging dari genus Troodon dengan kaki panjang dan tipis yang memungkinkannya mencapai kecepatan tinggi saat mengejar mangsa. Namanya dalam bahasa Yunani berarti gigi yang terluka, mengacu pada gigi serinya yang tajam, sedangkan mata theropoda yang besar memungkinkannya berburu dalam kegelapan. Otak Troodon yang besar - tingginya hanya sekitar tiga kaki - menjadikannya salah satu dinosaurus paling cerdas. Troodon pertama kali ada sekitar 65-75 juta tahun yang lalu, pada periode Kapur Akhir. Penemuan fosil di Alaska Utara menunjukkan bahwa dinosaurus ini mungkin lebih menyukai iklim dingin, meskipun gigi yang diyakini milik Troodon telah ditemukan di selatan Texas dan New Mexico.",
      secdescription:
        "troodon memiliki tinggi 1-1.5 meter, memiliki panjang badan 2.5 meter dan beratnya 35 kilogram.",
    },
    {
      id: 23,
      name: "Coelophysis",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/coelophysis.png",
      button: "Lihat",
      description:
        "Coelophysis adalah genus dinosaurus theropoda coelophysid yang hidup sekitar 215 hingga 208,5 juta tahun yang lalu selama periode Trias Akhir dari pertengahan hingga zaman Norian akhir di tempat yang sekarang menjadi Amerika Serikat bagian barat daya.",
      secdescription:
        "Coelophysis adalah karnivora bipedal kecil, bertubuh ramping, hidup di tanah, dan dapat tumbuh hingga panjang 3 m (9,8 kaki). Ini adalah salah satu genera dinosaurus paling awal yang diketahui. Materi tersebar yang mewakili hewan serupa telah ditemukan di seluruh dunia dalam beberapa formasi Trias Akhir dan Jurassic Awal.",
    },
    {
      id: 24,
      name: "Compsognathus",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/compsognathus.png",
      button: "Lihat",
      description:
        "Compsognathus adalah genus dinosaurus theropoda kecil, bipedal, dan karnivora. Anggota spesies tunggalnya Compsognathus longipes bisa tumbuh seukuran ayam. Mereka hidup sekitar 150  juta tahun yang lalu, pada zaman Tithonian di akhir periode Jurassic, di tempat yang sekarang disebut Eropa.",
      secdescription:
        "Selama beberapa dekade, Compsognathus dikenal sebagai dinosaurus non-unggas terkecil yang diketahui, meskipun beberapa dinosaurus yang ditemukan kemudian, seperti Mahakala dan Microraptor, bahkan lebih kecil lagi. Spesimen Jerman diperkirakan memiliki panjang 70-75 cm (28-30 inci) dan 89 cm (35 inci) oleh penulis terpisah, sedangkan spesimen Prancis yang lebih besar diperkirakan berukuran Panjangnya 1,25 m (4 kaki 1 inci) dan 1,4 m (4 kaki 7 inci). Tinggi pinggul diperkirakan 20 cm (7,9 inci) untuk spesimen Jerman dan 29 cm (11 inci) untuk spesimen Prancis.",
    },
    {
      id: 25,
      name: "Proceratosaur",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/proceratosaurus.png",
      button: "Lihat",
      description:
        "Proceratosaurus adalah genus dinosaurus theropoda karnivora dari Jurassic Tengah ( Bathonian ) Inggris . Ini berisi satu spesies. P. bradleyi, diketahui dari sebagian besar tengkorak lengkap dan rahang bawah. Proceratosaurus adalah dinosaurus kecil, diperkirakan berukuran panjang sekitar 3 m (9,8 kaki).",
      secdescription:
        "Proceratosaurus adalah dinosaurus kecil. Dalam studi ulang pada tahun 2010, diperkirakan panjang total 2,98-3,16 m (9,8-10,4 kaki) dan massa tubuh 28-36 kg (62-79 lb). Berbagai buku memperkirakan panjangnya 3-4 m (9,8-13,1 kaki) dan massa tubuh 50-100 kg (110-220 lb).",
    },
    {
      id: 26,
      name: "Scorpios-Rex",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/scorpiosrex.png",
      button: "Lihat",
      description:
        "Scorpios-Rex (dengan nama kode E750 ) adalah dinosaurus hibrida buatan Henry Wu dalam film Jurassic Park. Ini adalah dinosaurus yang dibekukan dan ditawan di terowongan rahasia InGen sampai ia melarikan diri. Ia juga merupakan antagonis utama Jurassic World: Camp Cretaceous , berperan sebagai antagonis tak terlihat di Musim 1, antagonis terakhir Musim 2 yang tak terlihat, antagonis utama Musim 3, dan antagonis anumerta Musim 4 dan 5.",
      secdescription:
        "Scorpios rex digambarkan sebagai theropoda berukuran sedang, lebih kecil dari Indominus rex dan sedikit lebih besar dari Indoraptor dan lebih besar dari Velociraptor . [2] Kedua individu itu dihiasi sisik hitam arang. Ciri-cirinya sangat cacat dan aneh, yang menurut Simon Masrani membuatnya tidak layak untuk dipajang. Ciri-ciri ini termasuk moncong brachycephalic, mata merah dengan celah pupil yang terletak tinggi di tengkoraknya, gigi yang menonjol dan bergerigi serta tidak rata. Ia memiliki duri berbisa di siku.",
    },
    {
      id: 27,
      name: "Concavenator",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/concavenator.png",
      button: "Lihat",
      description:
        "Concavenator adalah dinosaurus theropoda carcharodontosaurid punah yang hidup sekitar 130 juta tahun yang lalu selama periode Kapur Awal ( zaman Barremian ). Jenis spesiesnya adalah C. corcovatus. Concavenator corcovatus artinya Pemburu Cuenca dengan punuk. Fosil tersebut ditemukan disitus fosil Las Hoyas Spanyol.",
      secdescription:
        "Concavenator adalah carcharodontosaurid berukuran sedang, panjangnya mencapai 5-6 m (16-20 kaki) dan 320-400 kg (710-880 lb). Ia memiliki beberapa ciri unik, termasuk dua tulang belakang yang sangat tinggi di depan pinggul yang membentuk jambul tinggi, sempit, dan runcing (mungkin menopang punuk) di punggung dinosaurus.",
    },
    {
      id: 28,
      name: "Monolopho",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/monolophosaurus.png",
      button: "Lihat",
      description:
        "Monolophosaurus yang berarti Kadal Jambul Tunggal, adalah genus dinosaurus theropoda tetanuran yang telah punah dari Formasi Shishugou Jurassic Tengah di tempat yang sekarang disebut Xinjiang , Tiongkok.",
      secdescription:
        "Jenis dan satu-satunya individu yang diketahui diperkirakan berukuran lima meter (16,4 kaki). Pada tahun 2010, Paul memperkirakan panjangnya 5,5 meter (18 kaki) dan berat 475 kilogram (1.047 lb).",
    },
    {
      id: 29,
      name: "Spinosaurus",
      category: "Dinosaurus piscivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/spinosaurus.png",
      button: "Lihat",
      description:
        "Spinosaurus (Dari Bahasa Yunani, Spino = Tulang belakang atau duri, dan Sauros = kadal) merupakan dinosaurus terbesar dari anggota Spinosaurida. Spinosaurus juga merupakan satu dari tiga Theropoda terbesar sepanjang masa melebihi Tyrannosaurus (T-Rex), yang hidup di daerah yang kini bisa dikenali sebagai Afrika bagian utara.",
      secdescription:
        "Spinosaurus merupakan Theropoda raksasa yang dapat tumbuh hingga 18 m dengan tinggi sekitar 5 m (sampai layarnya) dan berat mencapai 7, 6 ton. Panjang tengkorak Spinosaurus 165 cm dengan seratus gigi-gigi runcing yang lurus sepanjang kira-kira 19 cm. Ciri khas Spinosaurus adalah tulang belakangnya yang menjulang keatas sekitar 2 m dan merupakan layar yang dilapisi kulit.",
    },
    {
      id: 30,
      name: "Suchomimus",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/suchomimus.png",
      button: "Lihat",
      description:
        "Suchomimus (berarti Peniru Buaya) adalah genus dinosaurus spinosaurid yang hidup antara 125 dan 112 juta tahun yang lalu di tempat yang sekarang disebut Niger, Afrika Barat, selama tahap Aptian hingga Albian awal pada periode Kapur Awal.",
      secdescription:
        "Suchomimus adalah theropoda yang relatif besar, panjangnya mencapai 9,5-11 meter (31-36 kaki) dan berat 2,5-3,8 metrik ton (pendek 2,8-4,2 ton). Namun, usia spesimen holotipe tidak dapat dipastikan, sehingga tidak jelas apakah perkiraan ukuran ini merupakan perkiraan maksimumnya.",
    },
    {
      id: 31,
      name: "Baryonyx",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/baryonyx.png",
      button: "Lihat",
      description:
        "Baryonyx adalah genus dinosaurus theropoda yang hidup pada tahap Barremian pada periode Kapur Awal , sekitar 130-125 juta tahun yang lalu. Kerangka pertama ditemukan pada tahun 1983 di Smokejack Clay Pit , Surrey , Inggris, dalam sedimen Formasi Weald Clay , dan menjadi spesimen holotipe Baryonyx walkeri , dinamai oleh ahli paleontologi Alan J. Charig dan Angela C. Milner pada tahun 1986.",
      secdescription:
        "Spesimen holotipe, yang mungkin belum tumbuh sempurna, diperkirakan memiliki panjang antara 7,5 dan 10 meter (25 dan 33 kaki) dan beratnya antara 1,2 dan 2 metrik ton (1,3 dan 2,2 ton pendek ; panjang 1,2 dan 2,0 ton ), Ia memiliki kaki depan yang kuat, dengan cakar jari pertama berukuran panjang sekitar 31 sentimeter (12 inci).",
    },
    {
      id: 32,
      name: "Ouranosaurus",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/ouranosaurus.png",
      button: "Lihat",
      description:
        "Ouranosaurus adalah genus dinosaurus hadrosauriform basal herbivorayang hidup pada tahap Aptian pada Kapur Awal di Niger dan Kamerun modern. Ouranosaurus berukuran panjang sekitar 7-8,3 meter (23-27 kaki) dan berat 2,2 metrik ton (2,4 ton pendek).",
      secdescription:
        "Ouranosaurus adalah iguanodontia yang relatif besar, berukuran panjang 7-8,3 meter (23-27 kaki) dan berat 2,2 ton (2,4 ton pendek).  MSNVE 3714 memiliki panjang 6,5 m (21 kaki) saat dipasang, meskipun beberapa ekor hilang, dan kira-kira 90% panjang holotipe, yang berarti panjang 7,22 m (23,7 kaki).",
    },
    {
      id: 33,
      name: "Stygimoloch",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/stygimoloch.png",
      button: "Lihat",
      description:
        "Stygimoloch yang berarti Iblis Styx, adalah sebuah genus dinosaurus pachycephalosaurid dari akhir Zaman Kapur, sekitar 66 juta tahun lalu. Genus ini ditemukan di Formasi Hell Creek, Formasi Ferris, dan Formasi Lance dari Western Interior (Amerika Serikat), hidup bersama Tyrannosaurus, Triceratops, dan Edmontosaurus.",
      secdescription:
        "Stygimoloch merupakan pachycephalosauria yang relatif besar, dengan panjang tengkorak 46 sentimeter (18 inci). Diantara semua pachycephalosauria dari Amerika Utara, hanya Pachycephalosaurus yang berukuran lebih besar.",
    },
    {
      id: 34,
      name: "Pachycephalo",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/pachycephalosaurus.png",
      button: "Lihat",
      description:
        "Pachycephalosaurus (nama ilmiahnya berarti kadal bertengkorak tebal) adalah herbivora Ornithischia dari famili Pachycephalosauridae yang hidup pada zaman Kapur Akhir di Amerika Utara. Genus ini diwakili oleh spesies P. wyomingensis.",
      secdescription:
        "Kerangka Pachycephalosaurus secara keseluruhan belum pernah ditemukan. Segala yang diketahui tentang Pachycephalosaurus hanya berasal dari tengkorak spesies ini dan juga kerangka dari spesies keluarga yang sama. Selain tengkorak dengan kubah tebal, beberapa karakteristik hewan ini memberikan kesan yang aneh."
    },
    {
      id: 35,
      name: "Dracorex",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/dracorex.png",
      button: "Lihat",
      description:
        "Dracorex adalah genus dinosaurus herbivora dalam keluarga Pachycephalosauridae. Dia tinggal di Zaman Kapur Akhir di wilayah Amerika Utara. Satu-satunya spesiesnya adalah Dracorex hogwartsia, yang berarti Raja Naga Hogwarts, dinamai berdasarkan buku Harry Potter karya JK Rowling.",
      secdescription:
        "Dracorex memiliki panjang sekitar 3,5 meter dan berat lebih dari 1.300 pon, dengan tengkorak lapis baja yang melindunginya dari predator. Ada beberapa diskusi mengenai apakah Dracorex dan Stygimoloch yang sangat mirip sebenarnya merupakan tahap pertumbuhan awal Pachycephalosaurus.",
    },
    {
      id: 36,
      name: "Homalocephale",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/homalocephale.png",
      button: "Lihat",
      description:
        "Homalocephale adalah genus dinosaurus pachycephalosaurid yang hidup pada periode Kapur Akhir di tempat yang sekarang disebut Formasi Nemegt, Mongolia, sekitar 70 juta tahun yang lalu.",
      secdescription:
        "Homalocephale memiliki panjang sekitar 1,8 m (5,9 kaki). Tidak seperti pachycephalosaurus dewasa lainnya (meskipun kemungkinan mirip dengan spesimen remaja yang disebut Dracorex dan Goyocephale ), Homalocephale memiliki atap tengkorak yang datar dan berbentuk baji.",
    },
    {
      id: 37,
      name: "Iguanodon",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/iguanodon.png",
      button: "Lihat",
      description:
        "Iguanodon yang berarti Gigi Iguana, adalah genus dari dinosaurus iguanodontid yang dinamai pada 1825. Meski banyak spesies yang ditemukan di dari seluruh dunia sudah diklasifikasikan kedalam genus ini, berasal dari Jura Akhir hingga Kapur Awal di Belgia, Jerman, Britania Raya dan Spanyol, sekitar 126 hingga 122 juta tahun lalu.",
      secdescription:
        "Iguanodon merupakan herbivor yang tangguh dan besar, dengan panjang 9-11 meter dan berat 45 ton metrik. Genus ini memiliki fitur tubuh distingtif seperti jempol yang besar dan runcing yang digunakan sebagai perlindungan idir dari perdator, beserta dengan jari kelima yang prehensil, digunakan untuk mencari makanan.",
    },
    {
      id: 38,
      name: "Maiasaura",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/maiasaura.png",
      button: "Lihat",
      description:
        "Maiasaura yang berarti Ibu Yang Baik, adalah genus dinosaurus saurolophine hadrosaurid (paruh bebek) yang hidup di wilayah yang saat ini dicakup oleh negara bagian Montana dan provinsi Alberta, Kanada, pada Periode Kapur Atas (pertengahan hingga akhir Campanian ), sekitar 76,7 juta tahun yang lalu.",
      secdescription:
        "Maiasaura peeblesorum berukuran besar, mencapai panjang maksimum yang diketahui sekitar 9 meter (30 kaki) dan massa tubuh diukur hingga 4 metrik ton (4,4 ton pendek). Mereka memiliki struktur mulut “paruh bebek” yang besar dan deretan ratusan gigi, khas hadrosaurid.",
    },
    {
      id: 39,
      name: "Muttaburrasaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/muttaburrasaurus.png",
      button: "Lihat",
      description:
        "Muttaburrasaurus adalah genus dinosaurus ornithopoda iguanodontian herbivora, yang hidup di tempat yang sekarang menjadi bagian timur laut Australia antara 112 dan 103 juta tahun yang lalu selama periode Kapur awal.",
      secdescription:
        "Muttaburrasaurus tingginya sekitar 8 meter (26 kaki) dan beratnya sekitar 2,8 metrik ton (3,1 ton pendek). Tulang paha holotipe memiliki panjang 1.015 milimeter (40,0 in).",
    },
    {
      id: 40,
      name: "Edmontosaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/edmontosaurus.png",
      button: "Lihat",
      description:
        "Edmontosaurus yang berarti Kadal Dari Edmonton, sering kali dalam bahasa sehari-hari dan sejarah dikenal sebagai Anatosaurus atau Anatotitan (berarti Kadal Bebek dan Bebek Raksasa). Ia mengandungi dua spesies yang diketahui : Edmontosaurus regalis dan Edmontosaurus annectens. Fosil E. regalis telah ditemukan di bebatuan di Amerika Utara bagian barat yang berasal dari zaman Campanian akhir pada periode Kapur 73 juta tahun yang lalu, sedangkan fosil E. annectens ditemukan di wilayah geografis yang sama dari bebatuan yang bertanggal akhir tahunMaastricht, 66 juta tahun yang lalu.",
      secdescription:
        "Edmontosaurus termasuk dua spesies hadrosaurid terbesar, dengan E. annectens berukuran panjang hingga 12 meter (39 kaki) dan berat rata-rata massa tubuh asimtotik sekitar 5,6 metrik ton (6,2 ton pendek).",
    },
    {
      id: 41,
      name: "Dryosaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/dryosaurus.png",
      button: "Lihat",
      description:
        "Dryosaurus yang berarti Kadal Pohon, adalah genus dinosaurus ornithopoda yang hidup pada periode Jurassic Akhir. Itu adalah iguanodont (sebelumnya diklasifikasikan sebagai hypsilophodont ). Fosil telah ditemukan di Amerika Serikat bagian barat dan pertama kali ditemukan pada akhir abad ke-19.",
      secdescription:
        "Berdasarkan spesimen yang diketahui, panjangnya diperkirakan mencapai 3 meter (9,8 kaki) dan beratnya mencapai 100 kilogram (220 lb). Namun, karena tidak ada spesimen dewasa dari genus tersebut yang ditemukan, ukuran dewasanya masih belum diketahui.",
    },
    {
      id: 42,
      name: "Therizinosaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/therizinosaurus.png",
      button: "Lihat",
      description:
        "Therizinosaurus yang berarti Kadal Sabit, adalah genus therizinosaurid sangat besaryang hidup di Asia selama periode Kapur Akhir di tempat yang sekarang disebutFormasi Nemegt. 70 juta tahun yang lalu",
      secdescription:
        "Therizinosaurus adalah therizinosaurid kolosal yang dapat tumbuh hingga panjang 9-10 m (30-33 kaki) dan tinggi 4-5 m (13-16 kaki), dan beratnya mungkin lebih dari 5 t (5,5 ton pendek). Seperti therizinosaurid lainnya, ia bergerak lambat, berleher panjang, dan memiliki peramban tinggi yang dilengkapi dengan rhamphotheca (paruh bertanduk) dan batang tubuh lebar untuk mengolah makanan.",
    },
    {
      id: 43,
      name: "Struthiomimus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/struthiomimus.png",
      button: "Lihat",
      description:
        "Struthiomimus yang berarti Meniru Burung Unta, adalah genus dinosaurus ornithomimid dari akhir Kapur Utara Amerika. Ornithomimid adalah dinosaurus berkaki panjang, berkaki dua, mirip burung unta dengan paruh tak bergigi.",
      secdescription:
        "Ukuran S. altus diperkirakan memiliki panjang sekitar 4,3 meter (14 kaki 1 inci) dan tinggi pinggul 1,4 m (4 kaki 7 inci), dengan berat sekitar 150 kilogram (330 lb). Spesimen S. altus yang lebih besar diperkirakan memiliki berat sekitar 233,8 kilogram (515 lb). Spesimen milik S. sedens berukuran panjang 4,8 meter (16 kaki) dan berat 350 kilogram (770 lb).",
    },
    {
      id: 44,
      name: "Archaeorni",
      category: "Dinosaurus omnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/archaeornithomimus.png",
      button: "Lihat",
      description:
        "Archaeornithomimus yang berarti Mimik Burung Kuno, adalah genus dinosaurus theropoda ornitomimosauria yang berasal dari Tiongkok pada masa Kapur Akhir sekitar 70 juta tahun yang lalu. Genus ini ditemukan pada tahun 1923 selama ekspedisi Museum Sejarah Alam Amerika di Mongolia Dalam yang dipimpin oleh Roy Chapman Andrews.",
      secdescription:
        "Archaeornithomimus asiaticus memiliki panjang sekitar 3,3 meter dan massa yang mencapai 50 kilogram. Kaki belakangnya memiliki postur yang kuat. Seperti ornitomimosauria lainnya, Archaeornithomimus mungkin merupakan spesies omnivora yang memakan tumbuhan, buah-buahan, mamalia kecil, telur atau bahkan dinosaurus Asia lain yang baru menetas dari telurnya.",
    },
    {
      id: 45,
      name: "Gallimimus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/gallimimus.png",
      button: "Lihat",
      description:
        "Gallimimus adalah genus dari dinosaurus theropoda maniraptoriformes yang hidup pada wilayah yang sekarang merupakan Mongolia pada periode Kapur Akhir, sekitar 70 juta tahun lalu. Beberapa fosil yang merepresentasikan berbagai tahapan hidup ditemukan oleh tim ekspedisi Polandia-Mongolia ke Gurun Gobi pada 1960-an.",
      secdescription:
        "Gallimimus merupakan ornithomimidae yang paling besar; individu dewasa memiliki panjang 6 meter, tinggi 1.9 meter, dan berat sekitar 400 - 490 kilogram. Sebagaimana yang dibuktikan dengan kerabatnya, Ornithomimus, kemungkinan genus ini juga memiliki bulu",
    },
    {
      id: 46,
      name: "Corythosaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/corythosaurus.png",
      button: "Lihat",
      description:
        "Corythosaurus yang berarti Kadal Berhelm, adalah genus dinosaurus hadrosaurid Paruh Bebek dari periode Kapur Akhir, sekitar 77-75,7  juta tahun lalu, di tempat yang sekarang menjadi Amerika Utara bagian barat. Namanya berasal dari kata Yunani κόρυς, yang berarti Helm, dinamai dan dijelaskan pada tahun 1914 oleh Barnum Brown",
      secdescription:
        "Setelah dilakukan pengujian, disimpulkan bahwa berat rata-rata Corythosaurus adalah 3,82 ton (panjang 3,76 ton; pendek 4,21 ton). Panjang total spesimen Corythosaurus AMNH 5240 ditemukan memiliki panjang 8,1 m (27 kaki), dengan berat mendekati 3,1 ton (3,0510 ton panjang; 3,4172 ton pendek).",
    },
    {
      id: 47,
      name: "Olorotitan",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/olorotitan.png",
      button: "Lihat",
      description:
        "Olorotitan adalah genus monotipe dinosaurus paruh bebek lambeosaurine, yang mengandungi satu spesies, Olorotitan arharensis. Dinosaurus ini merupakan salah satu dinosaurus non-unggas terakhir yang punah selama peristiwa kepunahan Kapur-Paleogen, karena hidup dari zaman Maastricht pertengahan hingga akhirpada era Kapur Akhir.",
      secdescription:
        "Olorotitan arharensis didasarkan pada kerangka lambeosaurine terlengkap yang ditemukan di luar Amerika Utara hingga saat ini. Itu adalah hadrosaurid besar, sebanding dengan lambeosaurine besar lainnya seperti Parasaurolophus cyrtocristatus , dan mungkin telah tumbuh hingga panjang 8 meter (26 kaki), tinggi hingga 3,5 meter (11 kaki) dan dalam kisaran 2,6 kaki. -3,4 metrik ton (2,9-3,7 short ton) massa tubuh.",
    },
    {
      id: 48,
      name: "Tsintaosaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/tsintaosaurus.png",
      button: "Lihat",
      description:
        "Tsintaosaurus yang berarti Kadal Qingdao, adalah genus dinosaurus hadrosaurid dari Tiongkok. Pada tahun 1950, di Hsikou, dekat Chingkangkou, di Laiyang, Shandong, di bagian timur Tiongkok, berbagai sisa hadrosaurid besar ditemukan. Pada tahun 1958 spesies ini dideskripsikan oleh ahli paleontologi Tiongkok Yang Zhongjian (CC Young) sebagai spesies tipe Tsintaosaurus spinorhinus",
      secdescription:
        "Tsintaosaurus memiliki panjang sekitar 8,3 meter (27 kaki) dan beratnya 2,5 ton (pendek 2,8 ton). Tsintaosaurus awalnya direkonstruksi dengan jambul mirip unicorn di tengkoraknya. Jambulnya, sebagaimana diawetkan, terdiri dari proses sepanjang sekitar empat puluh sentimeter, menonjol hampir vertikal dari bagian atas moncong belakang.",
    },
    {
      id: 49,
      name: "Parasaurolophus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/parasaurolophus.png",
      button: "Lihat",
      description:
        "Parasaurolophus adalah dinosaurus dari famili Hadrosauridae yang hidup pada masa periode kapur akhir sekitar 76,5-73 juta tahun yang lalu. Ia memiliki jambul berbentuk tabung di belakang kepala nya, mungkin untuk berkomunikasi dengan sesamanya, dan mungkin untuk memamerkan pada betina ketika musim kawin. Parasaurolophus berarti kadal yang hampir berjambul fosilnya ditemukan di Amerika utara, New meksiko, dan Kanada.",
      secdescription:
        "Parasaurolophus tumbuh hingga 10 meter, tinggi 4.9 meter, dan berat 2-3 ton. yang betina memiliki tubuh lebih kecil dibanding pejantan, dan jambul Parasaurolophus betina lebih melengkung dibanding jantan. Parasaurolophus hidup kawanan besar, umunnya ia berjalan dengan 4 kakinya namun jika dalam bahaya ia mengangkat kaki depan nya dan lari dengan kedua kakinya."
    },
    {
      id: 50,
      name: "Tapejara",
      category: "Dinosaurus piscivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/tapejara.png",
      button: "Lihat",
      description:
        "Tapejara (dari kata Tupi yang berarti Penguasa Jalan) adalah genus pterosaurus Brasil dari Zaman Kapur ( Formasi Santana, berumur sekitar 127 hingga 112 juta tahun yang lalu).",
      secdescription:
        "Jambul Tapejara terdiri dari jambul setengah lingkaran di atas moncong, dan cabang tulang yang menjulur ke belakang kepala. Ia adalah pterosaurus kecil, dengan lebar sayap kira-kira 1,23-1,3 meter (4,0-4,3 kaki).",
    },
    {
      id: 51,
      name: "Tropeognathus",
      category: "Dinosaurus piscivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/tropeognathus.png",
      button: "Lihat",
      description:
        "Tropeognathus (berarti Rahang Lunas) adalah genus pterosaurus besardari akhir Kapur Awal Amerika Selatan. Tropeognathus dianggap sebagai pterosaurus terbesar yang ditemukan di Belahan Bumi Selatan, hanya dapat disaingi oleh azhdarchids berukuran besar. Jenis dan satu-satunya spesies adalah Tropeognathus mesembrinus. Sisa-sisa fosil Tropeognathus telah ditemukan dari Formasi Romualdo, yang merupakan Lagerstätte yang terletak di Grup Santana di Cekungan Araripe di timur laut Brasil.",
      secdescription:
        "Tropeognathus diketahui telah mencapai lebar sayap sekitar 8,26 meter (27,1 kaki), seperti yang dapat disimpulkan dari ukuran spesimen MN 6594-1 yang mengesankan. Perkiraan lebar sayap maksimum Tropeognathus mencapai 8,70 meter (28,5 kaki), membuatnya sedikit lebih besar dari perkiraan rata-rata genusnya.",
    },
    {
      id: 52,
      name: "Dimorphodon",
      category: "Dinosaurus piscivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/dimorphodon.png",
      button: "Lihat",
      description:
        "Dimorphodon adalah genus pterosaurus berukuran sedangdari Eropa pada awal Periode Jurassic (sekitar 201-191 juta tahun yang lalu).",
      secdescription:
        "Struktur tubuh Dimorphodon menampilkan banyak karakteristik primitif, seperti, menurut Owen, otak yang sangat kecil dan sayap yang pendek secara proporsional. Phalanx pertama pada jari terbangnya hanya sedikit lebih panjang dari lengan bawahnya. Lehernya pendek namun kuat dan fleksibel dan mungkin memiliki kantong membran di bagian bawah. Vertebranya mempunyai foramina pneumatik, bukaan yang melaluinya kantung udara dapat mencapai bagian dalam yang berongga. Dimorphodon memiliki panjang tubuh dewasa 1 meter, dengan lebar sayap 1,45 meter. Ekor Dimorphodon panjang dan terdiri dari tiga puluh ruas tulang belakang."
    },
    {
      id: 53,
      name: "Barbaridactylus",
      category: "Dinosaurus piscivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/barbaridactylus.png",
      button: "Lihat",
      description:
        "Barbaridactylus adalah pterosaurus nyctosaurid dari Cekungan Ouled Abdoun di Maroko, sebuah cekungan yang berasal dari tahap Maastrichtian pada Kapur Akhir.",
      secdescription:
        "Barbaridactylus adalah nyctosaurid besar, dengan panjang humerus 22,5 cm (8,9 in), lebar sayap sekitar 4 m (13 kaki) dan massa tubuh 4 kg (8,8 lb), menjadikannya salah satu nyctosaurid terbesar.",
    },
    {
      id: 54,
      name: "Cearadactylus",
      category: "Dinosaurus piscivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/cearadactylus.png",
      button: "Lihat",
      description:
        "Cearadactylus adalah genus pterosaurus pterodactyloid anhanguerid besardari Formasi Romualdo Brazil, Amerika Selatan. Sisa-sisa fosil Cearadactylus berasal dari tahap Albian pada periode Kapur Awal, sekitar 112 juta tahun yang lalu.",
      secdescription:
        "Lebar sayap Cearadactylus diperkirakan sekitar 4 meter (13 kaki), dengan berat mungkin 15 kilogram (33 lb). Peter Wellnhofer pada tahun 1991 memperkirakan lebar sayap 5,5 meter (18 kaki).",
    },
    {
      id: 55,
      name: "Dsungaripterus",
      category: "Dinosaurus piscivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/dsungaripterus.png",
      button: "Lihat",
      description:
        "Dsungaripterus adalah genus pterosaurus dsungaripterid dengan lebar sayap rata-rata 3 meter (9,8 kaki). Dsungaripterus hidup pada masa Kapur Awal di tempat yang sekarang disebut Tiongkok, dan fosil pertamanya ditemukan di Kelompok Tugulu ( Formasi Lianmuqin dan Shengjinkou ) di Cekungan Junggar.",
      secdescription:
        "Dsungaripterus weii memiliki rentang sayap 3,5-5 m (11-16 kaki). Seperti kebanyakan dsungaripteroid, ia memiliki kerangka yang agak kuat dengan dinding tebal dan proporsi tubuh yang kokoh, Tengkorak Dsungaripterus, dengan panjang 40 hingga 50 sentimeter (16 hingga 20 inci), memiliki jambul tulang rendah yang membentang dari dasar tengkorak hingga separuh paruh. Kepala dan leher Dsungaripterus memiliki panjang hampir 1 meter (3,3 kaki). Ciri yang paling menonjol adalah rahangnya yang panjang, sempit, melengkung ke atas dengan ujung runcing.",
    },
    {
      id: 56,
      name: "Geosternbergia",
      category: "Dinosaurus piscivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/geosternbergia.png",
      button: "Lihat",
      description:
        "Geosternbergia atau Pteranodon Sternbergi adalah spesies pteranodontid pterodactyloid pterosaurus genus Pteranodon yang telah punah dari periode geologi Kapur Akhir di Amerika Utara. P. Sternbergi adalah salah satu pterosaurus terbesar, dengan lebar sayap jantan mencapai 6 meter (20 kaki).",
      secdescription:
        "Pteranodon sternbergi adalah salah satu pterosaurus terbesar, dengan lebar sayap kebanyakan pterosaurus dewasa berkisar antara 3 dan 6 meter (9,8 dan 19,7 kaki). Tidak ada tengkorak lengkap laki-laki dewasa yang ditemukan, namun rahang bawah yang hampir lengkap diperkirakan memiliki panjang 1,25 meter (4,1 kaki).",
    },
    {
      id: 57,
      name: "Jeholopterus",
      category: "Dinosaurus insectivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/jeholopterus.png",
      button: "Lihat",
      description:
        "Jeholopterus adalah pterosaurus anurognathid kecildari Jurassic Tengah hingga Akhir [1] Lapisan Daohugou dari Formasi Tiaojishan di Mongolia Dalam , Tiongkok , diawetkan dengan serat pycnofibre seperti rambutdan sisa-sisa kulit.",
      secdescription:
        "eholopterus menunjukkan bentuk tengkorak khas kelompok ini, lebih lebar dari panjangnya, yaitu 28 milimeter (1,1 in), dengan mulut yang sangat lebar. Kebanyakan gigi berukuran kecil dan berbentuk pasak, namun ada pula yang lebih panjang dan melengkung.",
    },
    {
      id: 58,
      name: "Maaradactylus",
      category: "Dinosaurus piscivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/maaradactylus.png",
      button: "Lihat",
      description:
        "Maaradactylus adalah genus pterosaurus pterodactyloid anhanguerid yang dikenal dari periode Kapur Bawah ( tahap Aptian hingga Albian ) dari Formasi Romualdo di timur laut Brasil.",
      secdescription:
        "Maaradactylus memiliki salah satu tengkorak anhanguerid terbesar dari Grup Santana, dan ini menunjukkan perkiraan lebar sayap sekitar 6 meter (20 kaki). Anhanguerid ini juga memiliki puncak yang relatif tinggi di sepanjang garis tengah tulang premaxillary, yang membentuk sebagian besar wilayah paruh atas, dan penempatan 35 pasang gigi di rahang atas.",
    },
    {
      id: 59,
      name: "Quetzalcoatlus",
      category: "Dinosaurus piscivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/quetzalcoatlus.png",
      button: "Lihat",
      description:
        "Quetzalcoatlus adalah genus Pterosaurus dari Periode Kapur Akhir dari Amerika Utara.Lebar sayap yang terbesar sepanjang 12 meter (sebesar pesawat bermesin propeler).",
      secdescription:
        "Saat pertama kali ditemukan, para ahli memperkirakan ukuran Quetzalcoatlus terbesar datang dari fosil seekor individu dengan rentang sayap sebesar 15.5 meter. Tahun 1981, penelitian lebih lanjut mengubah perkiraan ini menjadi 11-12 meter. Perkiraan terkini berdasarkan berdasarkan pengetahuan dalam proporsi azhdarchid menempatkan rentang sayapnya menjadi 10-11 meter (33-36 ft).",
    },
    {
      id: 60,
      name: "Pteranodon",
      category: "Dinosaurus piscivora",
      image: "/images/pterosaurus.png",
      button: "Lihat",
      description:
        "Pterosaurus, yang artinya kadal bersayap, adalah suatu jenis reptil terbang dari cabang atau ordo Pterosauria yang telah punah. Mereka hidup dari akhir Trias sampai akhir masa Kapur (228 sampai 66 juta tahun yang lalu). Sayap mereka dibentuk oleh selaput kulit, otot, dan jaringan lain yang membentang dari pergelangan kaki yang secara cepat ataupun lambat akan tetap memanjang keempat jarinya.",
      secdescription:
        "Spesies awal memiliki panjang, rahang bergigi dan ekor panjang, sementara bentuk selanjutnya memiliki ekor yang sangat kecil, dan beberapa gigi yang berkurang. Badannya ditutupi oleh mantel berbulu yang terbuat dari filamen seperti rambut yang dikenal sebagai pycnofibers, yang menutupi tubuh dan bagian sayapnya."
    },
    {
      id: 61,
      name: "Microraptor",
      category: "Dinosaurus karnivora",
      image: "/images/microraptor.png",
      button: "Lihat",
      description:
        "Microraptor adalah sebuah genus dari dinosaurus dromaeosaurid bersayap empat. Fosil yang terawetkan dengan baik dari genus ini ditemukan dari batuan Kapur Awal (kala Aptium) sekitar 125 hingga 120 juta tahun lalu pada Formasi Jiufotang, Liaoning, Tiongkok. ",
      secdescription:
        "Xu Xing pada 2003 untuk mendeskripsikan spesimen pertama yang mengawetkan fitur tubuh ini sebagai dinosaurus bersayap empat dan berspekulasi bahwa mereka mungkin meluncur (seperti pada bajing terbang) dengan keempat lengannya."
    },
    {
      id: 62,
      name: "Pyroraptor",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/pyroraptor.png",
      button: "Lihat",
      description:
        "Pyroraptor berarti pencuri api, adalah genus dinosaurus paravian yang telah punah, mungkin dromaeosaurid atau unenlagiid , dari pulau Ibero-Armorican Kapur Akhir, yang sekarang menjadi Prancis selatan dan Spanyol utara. Ia hidup pada tahap akhir Campanian dan awal Maastrichtian, sekitar 83,5 hingga 70,6 juta tahun yang lalu. Hal ini diketahui dari satu spesimen parsial yang ditemukan di Provence pada tahun 1992, setelah kebakaran hutan. Hewan itu diberi nama Pyroraptor olympius oleh Allain dan Taquet pada tahun 2000.",
      secdescription:
        "Pyroraptor olympius adalah dromaeosaurid, theropoda predator kecil mirip burung yang memiliki cakar melengkung yang membesar di ujung kedua setiap kaki untuk dimangsa; cakar ini memiliki panjang 6,6 cm (2,6 inci) untuk Pyroraptor."
    },
    {
      id: 63,
      name: "Oviraptor",
      category: "Dinosaurus omnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/oviraptor.png",
      button: "Lihat",
      description:
        "Oviraptor yang berarti Pencuri Telur, adalah genus dari dinosaurus oviraptorida yang hidup di Asia pada kala Kapur Akhir. Sisa-sisa pertama yang ditemukan dari genus ini ditemukan pada Formasi Djadokhta, Mongolia pada 1923 saat ekspedisi paleontologi yang dipimpin oleh Roy Chapman Andrews.",
      secdescription:
        "Oviraptor merupakan genus oviraptorid berbulu yang lumayan kecil, dengan panjang 1.6 m dan berat sekitar 33-40 kg. Mereka memiliki rahang bawah yang lebar, dengan tengkorak yang kemungkinan memiliki jambul. Kedua belah rahang tidak memiliki gigi, dan memiliki paruh bertanduk, yang digunakan untuk makan.",
    },
    {
      id: 64,
      name: "Gigantoraptor",
      category: "Dinosaurus omnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/gigantoraptor.png",
      button: "Lihat",
      description:
        "Gigantoraptor yang berarti Pencuri Raksasa, adalah genus dinosaurus oviraptorosaurus besaryang hidup di Asia selama periode Kapur Akhir. Hal ini diketahui dari Formasi Iren Dabasu di Mongolia Dalam, dimana sisa-sisa pertama ditemukan pada tahun 2005.",
      secdescription:
        "Gigantoraptor adalah oviraptorosaurus terbesar yang diketahui memiliki bahan kerangka. Kira-kira 3 kali lebih panjang dan 35 kali lebih berat daripada oviraptorosaurus terbesar yang ditemukan sebelumnya Citipati, holotipe Gigantoraptor diperkirakan memiliki panjang 8 m (26 kaki) dengan tinggi 3,5 m (11 kaki) di pinggul, dan berat yang sangat besar. sebesar 1,4 t (1,5 ton pendek). Penelitian lain memperkirakan massa tubuhnya kira-kira atau lebih dari 2 metrik ton (2,2 short ton).",
    },
    {
      id: 65,
      name: "Utahraptor",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/utahraptor.png",
      button: "Lihat",
      description:
        "Utahraptor yang berarti Pencuri Dari Utah, adalah genus dinosaurus dromaeosaurid besar yang hidup di Amerika Utara selama periode Kapur awal. Utahraptor adalah karnivora bertubuh tegap, hidup di darat, dan berkaki dua . Dalam genus ini terdapat satu spesies yaitu, Utahraptor ostrommaysi, yang merupakan anggota famili Dromaeosauridae terbesar yang diketahui.",
      secdescription:
        "Seperti dromaeosaurid lainnya, Utahraptor memiliki cakar besar yang melengkung di jari kaki kedua. Pedal ungual kedua yang diawetkan sepanjang 22 cm (8.7 inci) dan diperkirakan mencapai 24 cm (9.4 inci) diperbaiki.",
    },
    {
      id: 66,
      name: "Deinocheirus",
      category: "Dinosaurus omnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/deinocheirus.png",
      button: "Lihat",
      description:
        "Deinocheirus adalah genus ornithomimosaurus besaryang hidup pada Zaman Kapur Akhir sekitar 70 juta tahun yang lalu. Pada tahun 1965, sepasang lengan besar, ikat pinggang bahu, dan beberapa tulang dinosaurus baru lainnya pertama kali ditemukan di Formasi Nemegt di Mongolia",
      secdescription:
        "Deinocheirus adalah ornithomimosaurus yang tidak biasa, yang terbesar dari clade dengan panjang 11 m (36 kaki), dan berat 6,5 t (7,2 short ton). Meskipun hewannya besar, ia memiliki banyak tulang berlubang sehingga dapat menghemat berat. Lengannya termasuk yang terbesar dari semua dinosaurus berkaki dua dengan panjang 2,4 m (7,9 kaki), dengan cakar besar dan tumpul di tangan tiga jarinya. Kakinya relatif pendek, dan memiliki cakar yang tumpul.",
    },
    {
      id: 67,
      name: "Archelon",
      category: "Dinosaurus piscivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/archelon.png",
      button: "Lihat",
      description:
        "Archelon (Dari bahasa Yunani yang berarti pemimpin para penyu), adalah penyu laut prasejarah yang telah lama punah. Archelon merupakan penyu terbesar yang pernah didokumentasikan. Spesimen archelon pertama kali ditemukan di formasi geologis Pierre Shale, Dakota Selatan, Amerika Serikat oleh Dr. G.R. Wieland pada tahun 1895 dan berhasil dideskripsikan pada tahun berikutnya.",
      secdescription:
        "Holotipe berukuran 352 cm (11,5 kaki) dari kepala hingga ekor, dengan kepala berukuran 60 cm (2 kaki), leher 72 cm (2,4 kaki), tulang dada 135 cm (4,4 kaki), sakrum 15 cm (0,5 kaki) kaki), dan ekor 70 cm (2,3 kaki). Spesimen terbesar, Brigitta, berukuran sekitar 4,6 m (15 kaki) dari kepala hingga ekor dan 4,0 m (13 kaki) dari sirip ke sirip, dan, semasa hidup, beratnya sekitar 2,2-3,2 ton (2,4-3,5 ton pendek). Tengkorak Archelon berukuran hingga 100 cm (3,3 kaki).",
    },
    {
      id: 68,
      name: "Tylosaurus",
      category: "Dinosaurus piscivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/tylosaurus.png",
      button: "Lihat",
      description:
        "Tylosaurus adalah hewan dari superfamili Mosasauroidea, sebuah kelompok, reptil laut pemangsa yang berkerabat dekat dengan biawak dan ular, dari periode Kapur Akhir.",
      secdescription:
        "Tylosaurus adalah salah satu mosasaurus terbesar yang diketahui. Spesimen terbesar yang diketahui, kerangka T. proriger dari Museum Sejarah Alam Universitas Kansas yang dijuluki Bunker (KUVP 5033), diperkirakan berukuran panjang antara 12-15,8 meter (39-52 kaki).",
    },
    {
      id: 69,
      name: "Mosasaurus",
      category: "Dinosaurus karnivora",
      image: "/images/mosasaurus.png",
      button: "Lihat",
      description:
        "Mosasaurus artinya kadal Sungai Meuse, adalah genus tipe (yang mendefinisikan contoh) dari Mosasauroidea. Hewan ini hidup pada 82 - 65 juta tahun yang lalu selama sub-kalaKampanium dan Maastrichtium dari Kapur Akhir. Fosil Mosasaurus paling awal yang pernah ditemukan adalah tengkorak-tengkorak di sebuah galian kapur dekat kota Maastricht di Belanda pada abad ke-18 akhir, yang awalnya dikira sebagai tulang-tulang buaya atau paus.",
      secdescription:
        "Sekarang, ukuran Mosasaurus hoffmannii setidaknya mencapai 18 m dengan berat sekitar 8 ton.Panjang tengkorak maksimalnya 1,5 m dengan gigi-gigi besar seperti pahat,yang digunakan untuk menangkap dan mengoyak mangsanya seperti Amonit,Plesiosaurus, Protostega,dan Elasmosaurus."
    },
    {
      id: 70,
      name: "Dunkleosteus",
      category: "Dinosaurus piscivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/dunkleosteus.png",
      button: "Lihat",
      description:
        "Dunkleosteus yang berarti Tulang Satu Dunkle untuk menghormati penemunya, Dr. David Dunkle dari Amerika Serikat, merupakan salah satu placodermi terbesar sepanjang masa dan satu dari ikan karnivora terkuat di dunia. Dunkleosteus berasal dari Amerika Serikat pada zaman devonian dan tinggal di perairan sedang dan dalam yang kaya akan mangsa semacam amfibi, crustacea, moluska, dan bahkan ikan lain.",
      secdescription:
        "Dunkleonteus diketahui memiliki panjang antara 4,1 hingga 10 m (13 hingga 33 kaki) dan berat sekitar 1-4 t (1,1-4,4 ton pendek). Namun, panjang 5 meter (16 kaki) atau lebih tidak didukung dengan baik oleh bukti dan analisis paling ekstensif mengenai ukuran Dunkleosteus mendukung perkiraan panjang yang lebih kecil.",
    },
    {
      id: 71,
      name: "Ichthyosaurus",
      category: "Dinosaurus piscivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/ichthyosaurus.png",
      button: "Lihat",
      description:
        "Ichthyosaurus yang berarti Kadal Ikan, adalah ordo reptil laut berukuran raksasa yang menyerupai ikan dan lumba-lumba. Mereka hidup selama era Mesozoikum; berdasarkan rekaman fosil, kelompok ini pertama kali muncul sekitar 245 juta tahun yang lalu, kemudian punah sekitar 90 juta tahun yang lalu (25 juta tahun sebelum kepunahan dinosaurus).",
      secdescription:
        "Rata-rata ichthyosauri tumbuh sepanjang 2-4 m (6.6-13 kaki) (beberapa tumbuh lebih besar atau lebih kecil), dengan kepala berbentuk seperti ikan pesut dan moncong panjang yang dipenuhi gigi. bentuk tubuh ichthyosauria tercipta untuk kecepatan di air, dan beberapa ichthyosauria diketahui sebagai penyelam dalam, seperti paus modern (Motani, 2000).",
    },
    {
      id: 72,
      name: "Kronosaurus",
      category: "Dinosaurus piscivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/kronosaurus.png",
      button: "Lihat",
      description:
        "Kronosaurus adalah sejenis plesiosauria raksasa berleher pendek (Pliosauroidea) yang hidup pada awal Periode Kapur di lautan Australia dan Kolombia. Reptil laut ini dinamakan Kronosaurus (yang berarti Kadal Kronos, Kronos adalah nama pimpinan para Titan dalam mitologi Yunani) karena ukurannya yang tergolong besar, sekitar 9-11 meter panjangnya. Kronosaurus hidup pada periode Kapur Awal, Aptian hingga Albian Akhir.",
      secdescription:
        "Perkiraan saat ini menyebutkan Kronosaurus memiliki panjang sekitar 9 hingga 10,9 meter (30 hingga 36 kaki). Pada tahun 2009, K. queenslandicus diperkirakan memiliki berat sekitar 10,6 hingga 12,1 metrik ton (11,7 hingga 13,3 short ton). Panjang tengkorak Kronosaurus diperkirakan 2,21-2,85 meter (7,3-9,4 kaki).",
    },
    {
      id: 73,
      name: "Liopleurodon",
      category: "Dinosaurus piscivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/liopleurodon.png",
      button: "Lihat",
      description:
        "Liopleurodon yang berarti Gigi Bersisi Halus, adalah genus reptil laut karnivora yang masuk dalam kelompok Pliosauridae, sebuah klad plesiosauria berleher pendek. Liopleurodon hidup pada kala Callovian di Periode Jura Pertengahan (sekitar 160 - 155 juta tahun lalu). Ia merupakan predator puncak di lautan Eropa selama Periode Jura.",
      secdescription:
        "Liopleurodon ferox pertama kali menarik perhatian publik pada tahun 1999 ketika ditampilkan dalam sebuah episode serial televisi BBC Walking with Dinosaurs, yang menggambarkannya sebagai predator raksasa dengan panjang 25 m (82 kaki) dan berat 150 ton.",
    },
    {
      id: 74,
      name: "Shonisaurus",
      category: "Dinosaurus piscivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/shonisaurus.png",
      button: "Lihat",
      description:
        "Shonisaurus adalah genus ichthyosaurus yang sangat besar. Setidaknya 37 spesimen fosil reptil laut yang tidak lengkap telah ditemukan di Formasi Luning Nevada, AS. Formasi ini berasal dari zaman Carnian akhir pada periode Trias akhir, sekitar 237-227 juta tahun yang lalu.",
      secdescription:
        "Shonisaurus hidup pada tahap Carnian pada periode Trias akhir. Dengan tengkorak besar dengan panjang sekitar 2,75 m (9,0 kaki), S. popularis dan berukuran panjang sekitar 13,5-15 meter (44-49 kaki) dan massa tubuh 21,6-29,7 metrik ton (23,8-32,7 ton pendek).",
    },
    {
      id: 75,
      name: "Nothosaurus",
      category: "Dinosaurus piscivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/nothosaurus.png",
      button: "Lihat",
      description:
        "Nothosaurus adalah genus reptil sauropterygian yang telah punah dari periode Trias, sekitar 240-210 juta tahun yang lalu. dengan fosil yang didistribusikan dari Afrika Utara dan Eropa ke Cina. Ia adalah anggota ordo nothosaur yang paling terkenal.",
      secdescription:
        "Nothosaurus adalah hewan semi samudera yang mungkin memiliki gaya hidup mirip dengan anjing laut masa kini . Tingginya sekitar 4 meter (13 kaki), dengan jari kaki berselaput panjang dan mungkin memiliki sirip di ekornya. Namun, beberapa spesies seperti N. zhangi dan N. giganteus berukuran lebih besar, hingga 5-7 meter (16-23 kaki). Saat berenang, Nothosaurus akan menggunakan ekor, tungkai, dan kaki berselaputnya untuk mendorong dan mengarahkannya melewati air.",
    },
    {
      id: 76,
      name: "Elasmosaurus",
      category: "Dinosaurus piscivora",
      image: "/images/elasmosaurus.png",
      button: "Lihat",
      description:
        "Elasmosaurus Yang berarti Kadal Pelat Tipis, adalah genus dari Plesiosauria dengan leher yang sangat panjang yang hidup di periode Kapur, sekitar 80.5 juta tahun yang lalu. Pernah muncul di film animasi jepang yaitu Doraemon dengan nama Pisuke..",
      secdescription:
        "Elasmosaurus panjangnya sekitar 14 m dan beratnya lebih dari 2.000 kg (2,2 ton ), menjadikannya salah satu plesiosaurus terbesar. Tengkoraknya relatif datar, dengan jumlah gigi yang panjang dan menonjol keluar. Leher tulang setelah tengkorak, panjang dan rendah, dan memiliki puncak lateral yang membujur. Seperti kebanyakan elasmosaurids. korset dada berbentuk panjang, dan tidak dimiliki dalam spesimen remaja."
    },
    {
      id: 77,
      name: "Plesiosaurus",
      category: "Dinosaurus piscivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/plesiosaurus.png",
      button: "Lihat",
      description:
        "Plesiosaurus adalah genus reptil sauropterygian laut besar yang telah punah dan hidup pada zaman Jurassic Awal. Hal ini diketahui dari kerangka yang hampir lengkap dari Lias Inggris. Hal ini dapat dibedakan dari kepalanya yang kecil, lehernya yang panjang dan ramping, badannya yang lebar seperti penyu, ekor yang pendek, dan dua pasang dayung yang besar dan memanjang.",
      secdescription:
        "Plesiosaurus adalah plesiosaurus berukuran sedang yang panjangnya mencapai 2,87-3,5 m (9,4-11,5 kaki). Ada sekitar 40 vertebra serviks (vertebra leher), dengan spesimen berbeda mempertahankan 38 hingga 42 vertebra serviks.",
    },
    {
      id: 78,
      name: "Attenborosaurus",
      category: "Dinosaurus piscivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/attenborosaurus.png",
      button: "Lihat",
      description:
        "AttenborosAttenborosaurus adalah genus pliosaurid yang telah punah yang hidup di Dorset, Inggris selama periode Jurassic Awal. Jenis spesiesnya adalahA. conybeari, ditemukan pada tahun 1880 dan dinamai pada tahun 1881 sebagai spesies Plesiosaurus sebelum diberikan genusnya sendiri pada tahun 1993.",
      secdescription:
        "Dilihat dari holotipenya, yang merupakan sisa-sisa sebagian dari satu spesimen, panjang hewan itu sekitar 4,3 m (14 kaki). Sama seperti sepupu plesiosaurusnya, ia adalah hewan pemakan daging. Dari bekas kulit yang ditemukan pada tulangnya, yang kemudian dihancurkan, diduga makhluk tersebut memiliki kulit berselaput, tanpa sisik yang sangat besar, kemungkinan untuk mengurangi ketahanan terhadap air.",
    },
    {
      id: 79,
      name: "Styxosaurus",
      category: "Dinosaurus piscivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/styxosaurus.png",
      button: "Lihat",
      description:
        "Styxosaurus adalah genus plesiosaurusdari keluarga Elasmosauridae, Spesimen tipe ditemukan di Hell Creek di Logan County, Kansas, yang merupakan sumber nama genus yang diciptakan oleh Samuel Paul Welles, yang mendeskripsikan genus tersebut pada tahun 1943.",
      secdescription:
        "Styxosaurus adalah elasmosaurus besar, dengan leher panjang berukuran total sekitar 5,25 meter (17,2 kaki). Panjangnya mencapai 10,5 meter (34 kaki) dan massa tubuhnya 2,3 metrik ton (2,5 ton pendek).",
    },
    {
      id: 80,
      name: "Alamosaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/alamosaurus.png",
      button: "Lihat",
      description:
        "Alamosaurus yang berarti kadal Ojo Alamo, adalah genus dinosaurus sauropoda opisthocoelicaudiine titanosaurian yang mengandung satu spesies yang diketahui, Alamosaurus sanjuanensis, dari zaman Maastrichtian pada Kapur Akhir periode di tempat yang sekarang menjadi bagian barat daya Amerika Utara.",
      secdescription:
        "Alamosaurus adalah herbivora berkaki empat raksasa dengan leher panjang, ekor panjang, dan anggota badan yang relatif panjang. Tubuhnya setidaknya sebagian ditutupi oleh pelindung tulang. Pada tahun 2012, Thomas Holtz memberikan panjang total 30 meter (98 kaki) atau lebih dan perkiraan berat 72,5-80 ton (80-88 short ton) atau lebih.",
    },
    {
      id: 81,
      name: "Apatosaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/apatosaurus.png",
      button: "Lihat",
      description:
        "Apatosaurus yang berarti Kadal Yang Menipu, adalah genus dinosaurus sauropoda herbivora yang hidup di Amerika Utara selama periode Jurassic Akhir.",
      secdescription:
        "Apatosaurus adalah hewan berkaki empat yang besar, berleher panjang, dan memiliki ekor yang panjang seperti cambuk. Tungkai depannya sedikit lebih pendek dari pada tungkai belakangnya. Sebagian besar perkiraan ukuran didasarkan pada spesimen CM 3018, jenis spesimen A. louisae , panjangnya mencapai 21-23 m (69-75 kaki) dan 16,4-22,4 t (panjang 16,1-22,0 ton; 18,1-24,7 ton pendek) di massa tubuh.",
    },
    {
      id: 82,
      name: "Diplodocus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/diplodocus.png",
      button: "Lihat",
      description:
        "Diplodocus adalah genus dinosaurus sauropod diplodocid yang fosilnya pertama kali ditemukan pada tahun 1877 oleh S. W. Williston. Dinosaurus ini hidup di Amerika Utara barat pada akhir periode Jurassic.Diplodocus dinamai berdasarkan bahasa Yunani dan Latin yang berarti Bertiang dua karena ruas serta tulang kakinya yang kokoh.",
      secdescription:
        "Diplodocus mungkin termasuk dalam sepuluh dinosaurus terbesar, dengan panjang 31 m. Tingginya sekitar 5 m, terhitung pendek bagi Sauropoda kebanyakan. Berat sekitar 20 ton yang terhitung ringan karena tulang-tulangnya berrongga."
    },
    {
      id: 83,
      name: "Camarasaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/camarasaurus.png",
      button: "Lihat",
      description:
        "Camarasaurus adalah genus dinosaurusherbivora berkaki empat dan merupakan fosil sauropoda Amerika Utara yang paling umum. Sisa-sisa fosilnya telah ditemukan di Formasi Morrison, yang berasal dari zaman Jurassic Akhir ( tahapan Kimmeridgian hingga Tithonian ), antara 155 dan 145 juta tahun yang lalu.",
      secdescription:
        "Camarasaurus adalah sauropoda berukuran sedang dibandingkan dengan spesies kontemporer dalam formasi yang sama, tetapi pada zaman Tithonian mencapai ukuran besar dengan C. supremus. Ukuran maksimum spesies yang paling umum, C. lentus , panjangnya sekitar 15 m (49 kaki). Spesies terbesar, C. supremus , mencapai panjang maksimum 18 meter (59 kaki) - 23 m (75 kaki) dan, perkiraan berat maksimum 47  metrik ton (51,8  ton ).",
    },
    {
      id: 84,
      name: "Brachiosaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/brachiosaurus.png",
      button: "Lihat",
      description:
        "Branchiosaurus adalah genus dinosaurus sauropoda yang hidup di Amerika Utara selama Jura Akhir, sekitar 154 - 150 juta tahun yang lalu.[2] Dinosaurus ini pertama kali dijelaskan oleh paleontolog Amerika bernama Elmer S. Riggs pada tahun 1903 dari fosil-fosil yang ditemukan di lembah Sungai Colorado di Colorado barat, Amerika Serikat.",
      secdescription:
        "Perkiraan panjang tubuh Brachiosaurus diantaranya adalah 18 meter atau 20 - 26 meter, dan tingginya 16 meter atau 12 - 13 meter. Menurut berbagai penelitian yang melibatkan Giraffatitan dan Brachiosaurus, Giraffatitan diperkirakan memiliki berat 23,3 ton[3] hingga 34,0 ton."
    },
    {
      id: 85,
      name: "Dreadnoughtus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/dreadnoughtus.png",
      button: "Lihat",
      description:
        "Dreadnoughtus adalah genus dinosaurus sauropoda titanosaurian yang mengandung satu spesies, Dreadnoughtus schrani. D. schrani diketahui dari dua kerangka parsial yang ditemukan di batuan Kapur Atas ( Campanian hingga Maastrichtian kira-kira 76-70 Ma) Formasi Cerro Fortaleza di Provinsi Santa Cruz, Argentina.",
      secdescription:
        "Perkiraan berdasarkan pengukuran bagian kerangka yang diketahui menunjukkan bahwa satu-satunya individu Dreadnoughtus schrani yang diketahui memiliki panjang sekitar 26 meter (85 kaki) dan tingginya sekitar 2 lantai. Dengan tinggi 1,74 m, tulang belikatnya lebih panjang dari tulang belikat titanosaurus lainnya yang diketahui. Iliumnya, tulang bagian atas panggul, juga lebih besar dari tulang lainnya, berukuran panjang 1,31 m.",
    },
    {
      id: 86,
      name: "Mamenchisaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/mamenchisaurus.png",
      button: "Lihat",
      description:
        "Mamenchisaurus adalah genus dinosaurus sauropoda yang dikenal karena lehernya yang sangat panjang [2] yang panjangnya hampir setengah dari total panjang tubuhnya. Banyak spesies telah dimasukkan ke dalam genus; namun, banyak di antaranya yang mungkin dipertanyakan. Fosil telah ditemukan di Cekungan Sichuan dan Provinsi Yunnan di Tiongkok.",
      secdescription:
        "Sebagian besar spesies adalah sauropoda berukuran sedang hingga besar, dengan panjang sekitar 15 hingga 26 meter (49 hingga 85 kaki) dan mungkin hingga 35 meter (115 kaki) berdasarkan dua tulang belakang yang belum terdeskripsikan.",
    },
    {
      id: 87,
      name: "Brontosaurus",
      category: "Dinosaurus herbivora",
      image: "/images/brontosaurus.png",
      button: "Lihat",
      description:
        "Brontosaurus artinya Kadal Petir, adalah genus dari dinosaurus sauropoda herbivora yang hidup di Amerika Serikat saat iniselama periode Jurassic Akhir . Ia dijelaskan oleh ahli paleontologi Amerika Otniel Charles Marsh pada tahun 1879.",
      secdescription:
        "Beberapa perkiraan ukuran telah dibuat, dengan spesies terbesar B. excelsus mencapai panjang 21 hingga 22 meter dari kepala hingga ekor dan berbobot 15 hingga 17 ton), sedangkan spesies yang lebih kecil B. parvus hanya mencapai panjang 19 m (62 kaki). Spesimen remaja Brontosaurus telah diketahui, dengan individu yang lebih muda tumbuh dengan cepat hingga mencapai ukuran dewasa hanya dalam waktu 15 tahun."
    },
    {
      id: 88,
      name: "Nigersaurus",  
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/nigersaurus.png",
      button: "Lihat",
      description:
        "Nigersaurus adalah genus dinosaurus sauropoda rebbachisaurid yang hidup pada periode Kapur tengah, sekitar 115 hingga 105 juta tahun yang lalu. Ditemukan di Formasi Elrhaz di daerah yang disebut Gadoufaoua, di Niger. Fosil dinosaurus ini pertama kali dideskripsikan pada tahun 1976, namun baru diberi nama Nigersaurus taqueti pada tahun 1999",
      secdescription:
        "Seperti semua sauropoda, Nigersaurus adalah hewan berkaki empat dengan kepala kecil, kaki belakang tebal, dan ekor menonjol. Di antara clade tersebut, Nigersaurus cukup kecil, dengan panjang tubuh hanya 9 m (30 kaki) dan tulang paha hanya mencapai 1 m (3 kaki 3 in) beratnya mungkin sekitar 1,9-4 t (2,1-4,4 short ton), sebanding dengan gajah modern.",
    },
    {
      id: 89,
      name: "Amargasaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/amargasaurus.png",
      button: "Lihat",
      description:
        "Amargasaurus yang berarti La Amarga kadal, adalah genus dinosaurus sauropoda dari zaman Kapur Awal (129,4-122,46 juta tahun yang lalu ) di wilayah yang sekarang disebut Argentina.",
      secdescription:
        "Amargasaurus berukuran kecil untuk ukuran sauropoda, berukuran panjang 9 hingga 13 meter (30 hingga 43 kaki) dan berat sekitar 2,6-4 metrik ton (2,9-4,4 ton pendek). 304 Ia mengikuti bentuk tubuh sauropoda yang khas, dengan ekor dan leher panjang, kepala kecil, dan belalai berbentuk tong yang ditopang oleh empat kaki seperti kolom. Leher Amargasaurus lebih pendek daripada kebanyakan sauropoda lainnya, suatu ciri umum dalam Dicraeosauridae.",
    },
    {
      id: 90,
      name: "Sinoceratops",
      category: "Dinosaurus herbivora",
      image: "/images/sinoceratops.png",
      button: "Lihat",
      description:
        "Sinoceratops adalah genus dinosaurus ceratopsian yang telah punah dan hidup sekitar 73 juta tahun yang lalu pada bagian akhir Zaman Kapur di tempat yang sekarang menjadi provinsi Shandong di Tiongkok . Ia dinamakan pada tahun 2010 oleh Xu Xing dkk. untuk tiga tengkorak dari Zhucheng , Cina. Nama spesies jenisnya Sinoceratops zhuchengensis berarti wajah bertanduk Cina dari Zhucheng, sesuai dengan lokasi penemuannya.",
      secdescription:
        "Sinoceratops adalah herbivora berkaki empat yang berukuran sedang, dan satu-satunya ceratopsida yang diketahui dari Asia. Semua centrosaurine lain , dan semua chasmosaurine , diketahui dari fosil yang ditemukan di Amerika Utara, kecuali kemungkinan Turanoceratops. Panjangnya diperkirakan mencapai 5 meter dan beratnya mencapai 2 ton."
    },
    {
      id: 91,
      name: "Pentaceratops",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/pentaceratops.png",
      button: "Lihat",
      description:
        "pentaceratops yang berarti Wajah Bertanduk Lima, adalah genus dinosaurus ceratopsida herbivora dari Zaman Kapur akhirdi wilayah yang sekarang menjadi Amerika Utara. Fosil hewan ini pertama kali ditemukan pada tahun 1921, tetapi genusnya dinamai pada tahun 1923 ketika spesies jenisnya, Pentaceratops sternbergii, dideskripsikan. Pentaceratops hidup sekitar 76-73 juta tahun yang lalu.",
      secdescription:
        "Pentaceratops adalah ceratopsida besar ; Dodson menganggarkan panjang badannya 6 meter (20 kaki). Panjang tengkorak AMNH 1624 adalah 2,3 meter (7,5 kaki) sedangkan PMU R.200 memiliki panjang 2,16 meter (7,1 kaki). Pada tahun 2016 Paul memperkirakan panjangnya 5,5 meter (18 kaki) dan beratnya 2,5 metrik ton (2,75 ton pendek).",
    },
    {
      id: 92,
      name: "Torosaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/torosaurus.png",
      button: "Lihat",
      description:
        "Torosaurus yang berarti Kadal Berlubang, adalah genus dinosaurus ceratopsian chasmosaurine herbivorayang hidup pada zaman Maastricht akhir pada periode Kapur Akhir, antara 68 dan 66 juta tahun yang lalu, meskipun demikian Ada kemungkinan bahwa kisaran spesiesnya bisa meluas hingga 69 juta tahun yang lalu.",
      secdescription:
        "Individu yang disebut Torosaurus semuanya berukuran besar, sebanding dengan spesimen Triceratops terbesar. Karena embel-embelnya yang memanjang, panjang tengkoraknya sangat besar. Hatcher memperkirakan tengkorak YPM 1830 berukuran 2,2 m (7,2 kaki) dan tengkorak YPM 1831 berukuran 2,35 m (7,7 kaki).",
    },
    {
      id: 93,
      name: "Triceratops",
      category: "Dinosaurus herbivora",
      image: "/images/triceratops.png",
      button: "Lihat",
      description:
        "Triceratops artinya wajah bertanduk tiga, adalah genus dari dinosaurus ceratopsia chasmosaurinae yang hidup pada sub-kala Maastrichtium akhir pada kala Kapur Akhir, sekitar 68 hingga 66 juta tahun lalu pada wilayah yang sekarang merupakan Amerika Utara. Genus ini merupakan salahsatu yang terakhir diketahui dari dinosaurus non-burung, punah pada Peristiwa kepunahan Kapur Paleogen.",
      secdescription:
        "Triceratops memiliki tiga tanduk, dua di alisnya dan satu di hidungnya. Panjang tengkoraknya mencapai 2 m. Triceratops memiliki empat kaki kokoh untuk menopang tubuhnya. Beberapa ahli mengatakan Triceratops tidak bisa berlari cepat, tetapi mereka dapat mencapai kecepatan setidaknya 30 km/jam.",
    },
    {
      id: 94,
      name: "Chasmosaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/chasmosaurus.png",
      button: "Lihat",
      description:
        "Chasmosaurus adalah genus dinosaurus ceratopsid dari Zaman Kapur Akhirdi Amerika Utara. Chasmosaurus berukuran sedikit lebih kecil hingga ukuran 'rata-rata', terutama bila dibandingkan dengan ceratopsia yang lebih besar (seperti Triceratops, yang berukuran sebesar gajah semak Afrika ).",
      secdescription:
        "Chasmosaurus adalah ceratopsid berukuran sedang. Pada tahun 2010 GS Paul memperkirakan panjang C. belli mencapai 4,8 meter, dan beratnya dua ton spesies Formasi Taman Dinosaurus bagian bawah memiliki panjang 4,3 meter dan berat 1,5 ton.",
    },
    {
      id: 95,
      name: "Styracosaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/styracosaurus.png",
      button: "Lihat",
      description:
        "Styracosaurus yang berarti Kadal Berduri, adalah genus dinosaurus ceratopsian herbivora dari Zaman Kapur ( tahap Campanian ), sekitar 75,5 hingga 74,5  juta tahun yang lalu. Ia memiliki empat hingga enam duri parietal panjang yang memanjang dari embel-embel lehernya, sebuah tanduk jugal yang lebih kecil di masing-masing pipinya, dan sebuah tanduk yang menonjol dari hidungnya.",
      secdescription:
        "Individu dari genus Styracosaurus memiliki panjang sekitar 5-5,5 meter (16-18 kaki) saat dewasa dan beratnya sekitar 1,8-2,7 metrik ton (2,0-3,0 ton pendek). Tengkoraknya sangat besar, dengan lubang hidung besar, tanduk hidung lurus tinggi, dan embel-embel skuamosa parietal (jumbai leher ) yang dimahkotai dengan setidaknya empat paku besar.",
    },
    {
      id: 96,
      name: "Nasutoceratops",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/nasutoceratops.png",
      button: "Lihat",
      description:
        "Nasutoceratops adalah genus dinosaurus ceratopsian yang telah punah. Ia adalah centrosaurine basal yang hidup pada Zaman Kapur Akhir (akhir Campanian, sekitar 76.0-75.5 juta tahun yang lalu ). Fosil telah ditemukan di Utah selatan, Amerika Serikat.",
      secdescription:
        "Tengkorak holotipe memiliki panjang sekitar 1,5 meter (4,9 kaki). Panjang tubuhnya diperkirakan 4,5 meter (14,8 kaki), beratnya 1,5 ton (1,7 ton pendek). Nasutoceratops memiliki beberapa ciri turunan unik atau autapomorphies. Bagian moncong di sekitar lubang hidung sangat berkembang, mewakili sekitar tiga perempat panjang tengkorak di depan rongga mata.",
    },
    {
      id: 97,
      name: "Pachyrhinosaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/pachyrhinosaurus.png",
      button: "Lihat",
      description:
        "Pachyrhinosaurus yang berarti Kadal Berhidung Tebal, merupakan genus dinosaurus ceratopsid centrosaurinae dari Zaman Kapur akhir dari Amerika Utara. Contoh pertama ditemukan oleh Charles M. Sternberg di Alberta, Kanada, pada tahun 1946, dan dinamai pada tahun 1950.",
      secdescription:
        "Spesies Pachyrhinosaurus terbesar berukuran sepanjang 5 meter (16 kaki). Ceratopsid ini memiliki berat empat ton. Mereka adalah herbivora dan memiliki gigi pipi yang kuat untuk mengunyah tumbuhan berserat.",
    },
    {
      id: 98,
      name: "Sauropelta",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/sauropelta.png",
      button: "Lihat",
      description:
        "Sauropelta yang berarti Perisai Kadal, adalah genus dinosaurus nodosaurid yang ada pada Periode Kapur Awal di Amerika Utara. Satu spesies ( S.edwardsorum ) telah diberi nama meskipun spesies lain mungkin sudah ada. Secara anatomi, Sauropelta adalah salah satu nodosaurid yang paling banyak dipahami, dengan sisa-sisa fosil yang ditemukan di negara bagian Wyoming, Montana, dan mungkin Utah, AS.",
      secdescription:
        "Sauropelta adalah herbivora berkaki empat bertubuh kekar dengan panjang tubuh kira-kira 5-6 meter (16-20 kaki) dan massa tubuh 1,5-2 t (1,7-2,2 ton pendek).",
    },
    {
      id: 99,
      name: "Polacanthus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/polacanthus.png",
      button: "Lihat",
      description:
        "Polacanthus yang berarti Banyak Duri, adalah dinosaurus ankylosaurian pemakan tumbuhan lapis baja, berduri, dan awal dariperiode Kapur awal Inggris",
      secdescription:
        "Polacanthus adalah ankylosaurus berukuran sedang. Pada tahun 2010, Gregory S. Paul memperkirakan panjangnya 5 meter (16 kaki), beratnya 2 ton (2,2 ton pendek). Thomas Holtz memberikan perkiraan lebih rendah yaitu 4 meter (13 kaki) dan 227-454 kg (500-1.000 lbs) pada tahun 2012. Kaki belakangnya relatif panjang untuk ankylosaurus, dengan panjang tulang paha kanan 555 milimeter dengan holotipe.",
    },
    {
      id: 100,
      name: "Nodosaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/nodosaurus.png",
      button: "Lihat",
      description:
        "Nodosaurus (berarti Kadal Bertanduk) adalah genus dinosaurus ankylosaurian nodosaurid herbivora dari Kapur Akhir, yang fosilnya ditemukan secara eksklusif di Formasi Frontier di Wyoming.",
      secdescription:
        "Pada tahun 2010 Paul memperkirakan panjangnya 6 meter (20 kaki) dan beratnya 3,5 ton (3,85 short ton). Ia memiliki empat kaki pendek, kaki berjari lima, leher pendek, dan ekor panjang, kaku, dan tidak berbentuk tongkat. Kepalanya sempit, dengan moncong runcing, rahang kuat, dan gigi kecil. Ia mungkin memakan tanaman yang lunak, karena ia tidak mampu mengunyah tanaman yang keras dan berserat; atau sebagai alternatif, ia mungkin mengolah yang terakhir dengan gastrolit dan peralatan ususnya yang sangat besar.",
    },
    {
      id: 101,
      name: "Euoplocephalus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/euoplocephalus.png",
      button: "Lihat",
      description:
        "Euoplocephalus adalah genus dinosaurus ankylosaurid herbivora yang sangat besar, yang hidup pada Zaman Kapur Akhir di Kanada. Ia hanya mempunyai satu spesies bernama, Euoplocephalus tutus.",
      secdescription:
        "Di antara ankylosaurid, ukuran Euoplocephalus hanya dilampaui oleh Ankylosaurus, dan mungkin Tarchia dan Cedarpelta . Euoplocephalus panjangnya sekitar 5,3 meter (17 kaki) dan beratnya sekitar 2 metrik ton (2,2 ton pendek). Seperti ankylosaurid lainnya, ia memiliki batang tubuh yang sangat lebar dan datar, tinggi sekitar empat kaki, dengan empat kaki pendek.",
    },
    {
      id: 102,
      name: "Crichtonsaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/crichtonsaurus.png",
      button: "Lihat",
      description:
        "Crichtonsaurus yang berarti Kadal Crichton,  adalah genus dinosaurus ankylosaurid herbivorayang hidup pada Zaman Kapur Akhir di tempat yang sekarang disebut Tiongkok. Namanya diambil dari nama Michael Crichton, penulis novel dinosaurus Jurassic Park.",
      secdescription:
        "Pada tahun 2010, Gregory S. Paul memperkirakan panjang tubuh spesimen Crichtonsaurus bohlini mencapai 3,5 meter, dan beratnya setengah ton. Sebagai anggota ordo Ornithischia, spesies ini memiliki panggul yang menghadap ke belakang, mirip dengan burung.",
    },
    {
      id: 103,
      name: "Ankylosaurus",
      category: "Dinosaurus herbivora",
      image: "/images/ankylosaurus.png",
      button: "Lihat",
      description:
        "Ankylosaurus adalah salah satu jenis dinosaurus yang hidup pada periode kapur akhir sekitar 68 juta hingga 65 juta tahun yang lalu di Amerika Utara.",
      secdescription:
        "Memiliki tubuh sepanjang 8 meter, tingginya sekitar 2 meter, dan beratnya mencapai setidaknya 4 ton. Ankylosaurus memiliki tubuh yang dilindungi oleh semacam cangkang keras yang membuat tubuhnya tidak bisa diserang dengan mudah, bahkan oleh Tyrannosaurus rex. Perisai tulang setebal 5 cm melindungi tubuhnya yang pendek, yang disangga oleh empat kakinya yang kuat, pendek dan gemuk. Di ekornya terdapat bola dari batu seberat 5 kg. Jika Ankylosaurus diadang oleh lawannya, ia akan menyerang lawan tersebut dengan ekor kerasnya dan dalam sekejap lawannya akan terjatuh."
    },
    {
      id: 104,
      name: "Huayangosaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/huayangosaurus.png",
      button: "Lihat",
      description:
        "Huayangosaurus",
      secdescription:
        "",
    },
    {
      id: 105,
      name: "Kentrosaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/kentrosaurus.png",
      button: "Lihat",
      description:
        "Huayangosaurus adalah genus dinosaurus stegosaurian dari Jurassic Tengah di wilayah Tiongkok, Ia hidup pada masa Bathonian hingga Callovian, sekitar 165 juta tahun yang lalu, sekitar 20 juta tahun sebelum kerabatnya yang terkenal, Stegosaurus, muncul di Amerika Utara.",
      secdescription:
        "Seperti stegosaurus lainnya, Huayangosaurus adalah herbivora berkaki empat dengan tengkorak kecil dan ekor berduri. Seperti kerabatnya yang lebih terkenal, Stegosaurus, Huayangosaurus memiliki dua baris pelat khas yang menjadi ciri semua stegosaurus. Pelat-pelat ini menjulang secara vertikal di sepanjang punggungnya yang melengkung. Huayangosaurus adalah salah satu stegosaurus terkecil yang diketahui, dengan panjang hanya 4 meter (13 kaki) dan massa tubuh 500 kilogram (1.100 lb).",
    },
    {
      id: 106,
      name: "Gigantspinosaur",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/gigantspinosaurus.png",
      button: "Lihat",
      description:
        "Gigantspinosaurus adalah genus dinosaurus stegosaurid dari Jurassic Akhir di Wilayah Lindi Tanzania. Jenis spesiesnya adalah K. aethiopicus, dinamai dan dideskripsikan oleh ahli paleontologi Jerman Edwin Hennig pada tahun 1915.",
      secdescription:
        "Kentrosaurus aethiopicus adalah stegosaurus yang relatif kecil, panjangnya mencapai 4-4,5 m (13-15 kaki) dan massa tubuh 700-1.600 kg (1.500-3.500 lb). Beberapa spesimen menunjukkan bahwa mungkin ada individu yang relatif lebih besar.",
    },
    {
      id: 107,
      name: "Chungkingosaur",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/chungkingosaurus.png",
      button: "Lihat",
      description:
        "Chungkingosaurus yang berarti Kadal Chongqing, adalah genus dinosaurus herbivora dari Formasi Shaximiao Atas Jurassic Akhir di tempat yang sekarang disebut Tiongkok.",
      secdescription:
        "Chungkingosaurus memiliki tinggi 1 meter dengan panjanag tubuh 3.2 meter dan memiliki berat 1,5 ton (2,5 lb). Spesimen ini menunjukkan bahwa ada beberapa individu yang relatif lebih besar.",
    },
    {
      id: 108,
      name: "Wuerhosaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/wuerhosaurus.png",
      button: "Lihat",
      description:
        "Wuerhosaurus adalah genus dinosaurus stegosaurid dariPeriode Kapur Awal Tiongkok dan Mongolia. Oleh karena itu, ini adalah salah satu genera stegosaurian terakhir yang diketahui keberadaannya, karena sebagian besar lainnya hidup pada akhir Jurassic",
      secdescription:
        "Wuerhosaurus homheni mungkin adalah hewan berbadan lebar, panjangnya mencapai 7 meter (23 kaki) dan massa tubuh 4 metrik ton (4,4 ton pendek). Hanya beberapa tulang berserakan yang ditemukan, sehingga restorasi penuh menjadi sulit.",
    },
    {
      id: 109,
      name: "Stegosaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/stegosaurus.png",
      button: "Lihat",
      description:
        "Stegosaurus artinya kadal beratap, karena sisik besar di punggungnya (bahasa Yunani stego = piring/atap + sauros = kadal) adalah sebuah genus dinosaurus herbivora besar dari Awal Jurassic di Amerika Utara. Spesies ini adalah salah satu jenis dinosaurus yang paling mudah diidentifikasi, karena kedua baris sisik yang saling silang di punggungnya dan 2 pasang duri panjang di ekornya (disebut thagomizer).",
      secdescription:
        "Stegosaurus adalah salah satu dinosaurus paling tenang, namun penyerangnya seperti Allosaurus atau Saurophaganax akan menghadapi pertahanan kuat-lempeng dengan semburat merah(karena darah yang dipompakan ke dalam ruang lempengannya saat merasa terancam), serta ayunan ekor yang sangat berbahaya. Duri ekor Stegosaurus panjangnya dapat mencapai 1 m , dan dapat melubangi pemangsa sampai sedalam 90 cm.",
    },
    {
      id: 110,
      name: "Dimetrodon",
      category: "Dinosaurus karnivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/dimetrodon.png",
      button: "Lihat",
      description:
        "Dimetrodon adalah genus sinapsidanon-mamalia yang hidup pada zaman Cisuralian periode Permian Awal, sekitar 295-272 juta tahun yang lalu.",
      secdescription:
        "Dimetrodon adalah sinapsid berkaki empat yang didukung layar yang kemungkinan besar memiliki postur semi-menyebar antara mamalia dan kadal dan juga dapat berjalan dalam posisi lebih tegak dengan tubuh dan sebagian besar atau seluruh ekornya terangkat dari tanah. Kebanyakan spesies Dimetrodon memiliki panjang berkisar antara 1,7 hingga 4,6 m (6 hingga 15 kaki) dan diperkirakan memiliki berat antara 28 dan 250 kg (60 dan 550 lb). Spesies terkecil yang diketahui D. teutonis memiliki panjang sekitar 60 cm (24 in) dan berat 14 kilogram (31 lb).",
    },
    {
      id: 111,
      name: "Minmi",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/minmi.png",
      button: "Lihat",
      description:
        "MinmiMinmi adalah genus dinosaurus ankylosaurian herbivora kecil yang hidup pada awal Zaman Kapur Australia, sekitar 120 hingga 112 juta tahun yang lalu. Ini adalah spesimen pertama dari thyreophoran yang ditemukan di Belahan Bumi Selatan",
      secdescription:
        "Minmi adalah ankylosaurian lapis baja berkaki empat herbivora kecil. Pada tahun 2016, Gregory S. Paul memperkirakan panjangnya 3 meter (9,8 kaki), beratnya 300 kilogram (660 lb). Untuk ankylosaurian, Minmi memiliki anggota tubuh yang panjang, mungkin digunakan untuk mencari perlindungan dengan cepat di bawah semak-semak ketika terancam oleh predator besar yang mungkin mampu membalikkan hewan kecil tersebut ke punggungnya.",
    },
    {
      id: 112,
      name: "Lystrosaurus",
      category: "Dinosaurus herbivora",
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/lystrosaurus.png",
      button: "Lihat",
      description:
        "Lystrosaurus yang berarti Sekop Kadal, adalah genus terapi dicynodont herbivora yang telah punah dari zaman Permian akhir danTrias Awal (sekitar 250 juta tahun yang lalu). Ia hidup di tempat yang sekarang disebut Antartika, India, Cina, Mongolia, Rusia Eropa, dan Afrika Selatan",
      secdescription:
        "Lystrosaurus adalah terapisid dicynodont, panjang antara 0,6 hingga 2,5 m (2 hingga 8 kaki) dengan rata-rata sekitar 0,9 m (3 kaki) tergantung pada spesiesnya. ia Ukurannya berkisar dari anjing kecil hingga panjang 8 kaki (2,5 meter).",
    },
  ];

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
      
      {selectedDino && (
        <Modal dino={selectedDino} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Data;
