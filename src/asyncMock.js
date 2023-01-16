const products = [
  {
    id: "1",
    name: "iPhone 12 Pro Max 128gb",
    price: 1099.99,
    category: "apple",
    img: "https://itechstore.com.ar/wp-content/uploads/2020/06/iphone-12-pro-gold-hero-600x710.png",
    img2: "https://res.cloudinary.com/grover/image/upload/f_webp,q_auto/b_white,c_pad,dpr_2.0,h_500,w_520/f_auto,q_auto/v1630928786/iyehv2ikrbelpvi9cwvh.png",
    img3:"https://as-images.apple.com/is/refurb-iphone-12-pro-max-blue-2020?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1635202944000",
    stock: 12,
    description: "El iPhone 12 Pro Max es la variante con mayor tamaño de pantalla de la serie iPhone 12. Con una pantalla OLED de 6.7 pulgadas; cuenta con un procesador Apple A14 Bionic con opciones de 128GB, 256GB, o 512GB de almacenamiento, cámara cuádruple con tres lentes de 12 megapixels, cámara selfie de 12 megapixels, estabilización de imagen, zoom óptico 5x, parlantes stereo, carga rápida e inalámbrica, resistencia al polvo y agua con certificación iP68, y corre iOS 14.",
  },
  
  {
    id: "2",
    name: "Ipad 10va generacion 64gb",
    price: 450.99,
    category: "apple",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-10th-gen-finish-unselect-gallery-1-202212?wid=2560&hei=1440&fmt=p-jpg&qlt=95&.v=1667592106064",
    img2:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-10th-gen-finish-unselect-gallery-2-202212?wid=2560&hei=1440&fmt=p-jpg&qlt=95&.v=1667592114752",
    img3:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-10th-gen-finish-unselect-gallery-3-202212?wid=2560&hei=1440&fmt=p-jpg&qlt=95&.v=1667592109587",
    stock: 3,
    description: "El Apple iPad (2022), también conocido como Apple iPad 10th gen, llega con importantes upgrades y cuenta con una pantalla de 10.9 pulgadas del tipo Liquid Retina. Potenciado por un procesador A14 Bionic de Apple, el nuevo iPad está disponible en opciones de 64GB o 256GB de almacenamiento. Una cámara ultrawide de 12MP se ubica al frente, mientras que una cámara de 12MP regular se ubica en la parte posterior. El iPad 2022 cuenta con parlantes stereo, lector de huellas lateral, soporte para el Apple Pencil en su primera generación, puerto USB-C y está disponible en versiones solo WiFi o LTE.",
  },
  {
    id: "3",
    name: "iPhone 11 128gb",
    price: 315.09,
    category: "apple",
    img: "https://falabella.scene7.com/is/image/FalabellaCO/9722721_1?wid=1500&hei=1500&qlt=70",
    img2: "https://falabella.scene7.com/is/image/FalabellaCO/9722721_2?wid=1500&hei=1500&qlt=70",
    img3: "https://falabella.scene7.com/is/image/FalabellaCO/9722721_3?wid=1500&hei=1500&qlt=70",
    stock: 5,
    description:
      "El iPhone 11 llega con una pantalla de 6.1 pulgadas con resolución Liquid Retina y potenciado por un procesador Apple A13 Bionic con 128 GB de almacenamiento interno. La cámara posterior ahora es dual, con un lente regular de 12 MP y otro gran angular de 12 MP, mientras que su cámara frontal es de 12 MP. Cuenta con una batería de 3110 mAh con carga rápida, parlantes stereo con sonido Dolby Atmos, carga inalámbrica y utiliza reconocimiento de rostro Face ID para seguridad.",
  },
  {
    id: "4",
    name: "iPhone 13 mini 128gb",
    price: 599.99 ,
    category: "apple",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1671463144812",
    img2:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch_AV1?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1671463142529",
    img3:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch_AV3?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1671463145857",
    stock: 26,
    description: "El Apple iPhone 13 mini representa una mínima iteración con respecto al iPhone 12 mini del año pasado. Con la misma pantalla OLED Super Retina XDR de 5.4 pulgadas, el notch que aloja Face ID se reduce un 20 por ciento. Por dentro, encontramos al nuevo Apple A15 Bionic con opciones de 128GB, 256GB, o 512GB de almacenamiento. El iPhone 13 mini tiene una cámara dual con dos sensores de 12MP, wide y ultrawide respectivamente, con estabilización IBIS, mientras que la cámara selfie también es dual, con un sensor de 12MP y un sensor TrueDepth. El iPhone 13 mini completa sus características con parlantes stereo, batería de carga rápida con hasta 17 horas de autonomía, rating IP68 de resistencia al polvo y agua, y conectividad 5G con más bandas.",
  },
  {
    id: "5",
    name: "iPhone 13 256gb",
    price: 799.99,
    category: "apple",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1671463144812",
    img2:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch_AV1?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1671463142529",
    img3:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch_AV3?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1671463145857",
    stock: 26,
    description: "El Apple iPhone 13 representa una actualización menor del iPhone 12. Conservando la pantalla OLED de 6.1 pulgadas, el iPhone 13 cuenta con un procesador Apple A15 Bionic, con opciones de almacenamiento de 128GB. 256GB. o 512GB. La cámara principal del iPhone 13 es dual, con lentes wide y ultrawide de 12MP con IBIS y zoom óptico 2x, y la cámara frontal es de 12MP. El iPhone 13 tiene parlantes stereo, soporta carga rápida tanto por cable como inalámbrica, es resistente al polvo y agua, y soporta redes 5G.",
  },
  {
    id: "6",
    name: "Samsung S21 5G 128gb - Renovado",
    price: 263.00,
    category: "samsung",
    img: "https://co.celulares.com/fotos/samsung-galaxy-s21-5g-89035-g-alt.jpg",
    img2:"https://co.celulares.com/fotos/samsung-galaxy-s21-5g-89038-g-alt.jpg",
    img3:"https://images.samsung.com/co/smartphones/galaxy-s21-5g/images/galaxy-s21-5g-share-image.jpg",
    stock: 19,
    description: "El Samsung Galaxy S21 marca la llegada de la nueva generación de flagships de Samsung para el 2021. El Galaxy S21 cuenta con una pantalla Dynamic AMOLED de 6.2 pulgadas a resolución Full HD+, con tasa de refresco de 120 Hz y protegida por Gorilla Glass Victus. Por dentro, encontramos un procesador Exynos 2100 - en su versión internacional - o Snapdragon 888 para la versión USA, China y Corea. En ambos casos, la memoria RAM es de 8GB con 128GB o 256GB de almacenamiento interno pero sin posibilidad de expansión. En el posterior del Galaxy S21 observamos una cámara triple con lente wide de 12MP, lente telefoto de 64MP y lente ultrawide de 12MP y al frente la cámara es de 10MP, capaz de capturar video 4K. El resto de las características del Galaxy S21 incluyen parlantes stereo con sonido de alta fidelidad de AKG, batería de 4000 mAh de carga rápida, soportando también carga inalámbrica y reversible, lector de huellas integrado en la pantalla, resistencia al polvo y agua y corre Android 11 con la interfaz One UI.",
  },
  {
    id: "7",
    name: "Samsung M32 128gb",
    price: 163.00,
    category: "samsung",
    img: "https://i.linio.com/p/3a55eaba250ae348dc63f2ab6e350654-product.webp",
    img2:"https://i.linio.com/p/c459e1f370f8d1b79bf65aaa62fa759e-product.webp",
    img3:"https://i.linio.com/p/d750d154e7ad696bb0c10f833dae188a-product.webp",
    stock: 29,
    description: "El Samsung Galaxy M32 es un smartphone Android con una pantalla Super AMOLED de 6.4 pulgadas con tasa de refresco de 90Hz. Por dentro, encontramos un procesador Helio G80 de MediaTek, acompañado de hasta 6GB de memoria RAM y hasta 128GB de almacenamiento interno. La cámara cuádruple del Galaxy M32 cuenta con lente principal de 64MP, ultrawide de 8MP y secundarios de 2MP, y la cámara selfie es de 20MP. Con una batería de 6000 mAh de carga rápida, el Galaxy M32 completa sus características con un lector de huellas sobre el botón de encendido, sonido Dolby Atmos, y corre Android 11 con One UI 3.1.",
  },
  {
    id: "8",
    name: "Samsung S22+ 256gb",
    price: 849.99,
    category: "samsung",
    img: "https://www.alkosto.com/medias/8806094480733-002-1400Wx1400H?context=bWFzdGVyfGltYWdlc3wzMDI1NTJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDYzL2hmMy8xMjcyNjg5NTkzNTUxOC5qcGd8NzRmZTc2MDgyMDY5ODBhNjIxOWRkMjgwN2NhZjhmMjY5NWFjNWQzYWFlOTE3OWE1OWRlMGVkZjdhZWJiNDBhNg",
    img2:"https://www.alkosto.com/medias/8806094480733-004-1400Wx1400H?context=bWFzdGVyfGltYWdlc3wxNDgwMzN8aW1hZ2UvanBlZ3xpbWFnZXMvaGYzL2gxYS8xMjcyNjg5NzExNTE2Ni5qcGd8MWNhNTc1MDc1MDgwNGU3MmQwNmE0YTU1N2IyMDM2M2Q2MDBkNDI4Y2VkZDBiN2M4NjkxNzZlMzAyMjhjMDM1ZA",
    img3:"https://www.alkosto.com/medias/8806094480733-006-1400Wx1400H?context=bWFzdGVyfGltYWdlc3w4MzQyNnxpbWFnZS9qcGVnfGltYWdlcy9oMjMvaDc1LzEyNzI2ODk4Mjk0ODE0LmpwZ3xlOTcyOWI5YjhiMzE3MDc1NWUwYjczYTQ0MDM2YmRkYTQxYTgzMmQzNjRhMTQ0NGU1NmQ3Y2YxOGM1ZDhmOGQ0",
    stock: 13,
    description: "El Samsung Galaxy S22+ es la variante más grande del S22. Con una pantalla AMOLED de 6.6 pulgadas a resolución FHD+ y tasa de refresco de 120Hz, el Galaxy S22+ está potenciado por un procesador Snapdragon 8 Gen 1 o un Exynos 2200 dependiendo de la región, con 8GB de RAM y hasta 256GB de almacenamiento interno no expandible. La cámara principal del Galaxy S22+ es de 50MP y es complementada por una ultrawide de 12MP y una telefoto de 10MP con OIS, zoom 3x y IA. La cámara selfie en tanto es de 10MP. El Galaxy S22+ cuenta con una batería de 4500 mAh de carga rápida y completa sus características con parlantes stereo, certificación IP68 de resistencia al polvo y agua, lector de huellas bajo la pantalla y Android 12 con la interfaz One UI 4.1.",
  },
  {
    id: "9",
    name: "Samsung ZFold4 256GB 5G",
    price: 1699.99,
    category: "samsung",
    img: "https://www.alkosto.com/medias/8806094731170-004-1400Wx1400H?context=bWFzdGVyfGltYWdlc3wyMDY4ODJ8aW1hZ2UvanBlZ3xoODgvaGYxLzEzMzg1NjE4NjUzMjE0Lzg4MDYwOTQ3MzExNzBfMDA0XzE0MDBXeDE0MDBIfGNmOTAyZjgwYTk0NWM3ODJiYTBlYjk4MGZiMzk5ZGQyZTBjNThhZmU1ZjM2NmZmNzI3ODg4NzQ1NDdmN2Y5ZTY",
    img2:"https://www.alkosto.com/medias/8806094731170-005-1400Wx1400H?context=bWFzdGVyfGltYWdlc3wxODQxOTd8aW1hZ2UvanBlZ3xoN2UvaDk1LzEzMzg1NjE5MjQzMDM4Lzg4MDYwOTQ3MzExNzBfMDA1XzE0MDBXeDE0MDBIfDI3MzQxNTU4NDhjYWYzOGYzZmQwNzJmOGY1MTRmMDg4NTcyNjU4MjIzYzA2MzRkNDBmNTJhMDIwMjZlNjM3MTE",
    img3:"https://www.alkosto.com/medias/8806094731170-010-1400Wx1400H?context=bWFzdGVyfGltYWdlc3wyNDM5MTV8aW1hZ2UvanBlZ3xoMzEvaGFkLzEzMzg1NjIyMTkyMTU4Lzg4MDYwOTQ3MzExNzBfMDEwXzE0MDBXeDE0MDBIfDZmYmY1M2RkMjAzNGYxNjNiZGQ0OWI3ZTBlYzE1NGY3ZjgyNjZjODRhMWVmMjgxMDhlNjlhOTUyZjU3YTNmNmY",
    stock: 3,
    description: "El Samsung Galaxy Z Fold 4 es la cuarta generación del primer foldable smartphone de Samsung. El Galaxy Z Fold4 cuenta con una pantalla interna AMOLED de 7.6 pulgadas a resolución FHD+ y tasa de refresco de 120Hz, que esconde una cámara selfie de 4MP. Al estar cerrado, el Galaxy Z Fold 4 cuenta con una pantalla AMOLED de 6.2 pulgadas, también de 120Hz de refresco. Por dentro encontramos un procesador Snapdragon 8+ Gen 1 acompañado de 12GB de RAM con hasta 1TB de almacenamiento interno, y una batería de 4400 mAh con carga rápida de 25W por cable y carga inalámbrica de 15W. La cámara posterior del Galaxy Z Fold4 es triple, con un sensor principal de 50MP, una cámara ultrawide de 12MP y una cámara telefoto de 10MP y la cámara selfie de la pantalla cover es de 10MP. El Galaxy Z Fold4 completa sus características con parlantes stereo, lector de huellas lateral, resistencia al agua y polvo, soporte para stylus S Pen, Samsung DeX, y corre Android 12L.",
  },
  {
    id: "10",
    name: "Samsung A53 5G 128gb",
    price: 336.99,
    category: "samsung",
    img: "https://www.alkosto.com/medias/8806094178838-001-1400Wx1400H?context=bWFzdGVyfGltYWdlc3w0MDQ1NDZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDBjL2g3ZC8xMzI5OTAwOTQ1NDExMC5qcGd8ZjRjYTYwODY4YTZhOWZmMmY4OWFhYjQ5ZjczYjFkY2MwYjA4OWQxMTFhNjRkZGM4MjE1ZGE5MDMzYTBjNzAzNQ",
    img2:"https://www.alkosto.com/medias/8806094178838-002-1400Wx1400H?context=bWFzdGVyfGltYWdlc3wzMzMxODZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDc3L2g2Ny8xMTc1NjQ0MTc5NjYzOC5qcGd8ZjAzMGJmNWEwNmUxOTY1NzBjODAwMjJkNjNiZjU4MDdlYjg4ZTY1ZTMxNDQwNjhjNWE5NDUyODc0Y2RhMGZiZQ",
    img3:"https://www.alkosto.com/medias/8806094178838-004-1400Wx1400H?context=bWFzdGVyfGltYWdlc3w0ODgzMXxpbWFnZS9qcGVnfGltYWdlcy9oOTgvaDAzLzExNzU2NDQyMzg2NDYyLmpwZ3wzM2U0YWQwOGUwMmE1N2I3MTQxZjU1OTcwN2U5YmVjMGYzNDMwNTU5OGM2ODM4OGZhY2I5OTE5ZTU1YTE4Yjli",
    stock: 30,
    description: "El Samsung Galaxy A53 5G es el sucesor del A52 con una pantalla Super AMOLED de 6.5 pulgadas a resolución FHD+ y tasa de refresco de 120Hz, protegida por vidrio Gorilla Glass 5. Por dentro, encontramos un procesador octa-core con hasta 8GB de RAM y 128GB o 256GB de almacenamiento interno expandible. La cámara trasera es cuádruple, con lentes de 64MP con OIS, ultrawide de 12MP, macro de 5MP y profundidad de 5MP, siendo la cámara selfie de 32MP. El Galaxy A53 5G está alimentado por una batería de 5000 mAh de carga rápida, tiene parlantes stereo, lector de huellas bajo la pantalla, resistencia al agua IP67 y corre Android 12.",
  },
];

export const getProducts = (categoryId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 750);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 750);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === id));
    }, 500);
  });
};
