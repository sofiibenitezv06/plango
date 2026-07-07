// Restaurantes REALES de Gran Asunción (datos de fuentes públicas 2026:
// Google Maps, prensa local, sitios oficiales). Ubicaciones y rubros son reales;
// menús, precios y calificaciones son INDICATIVOS/aproximados y pueden variar.
export const RESTAURANTS = [
  {
    "id": "el-cafe-de-aca",
    "name": "El Café de Acá",
    "category": "cafeteria",
    "emoji": "☕",
    "city": "Asunción",
    "address": "Tte. Vera 1390 esq. Dr. Morra, Villa Morra, Asunción",
    "lat": -25.2937,
    "lng": -57.5745,
    "priceFrom": 45000,
    "priceTo": 90000,
    "priceLevel": 2,
    "rating": 4.4,
    "reviewsCount": 0,
    "hours": "Mar a Dom · 07:30 – 00:00 (Lun cerrado)",
    "menuUpdated": "hoy",
    "openNow": true,
    "distanceKm": 6.2,
    "gradient": [
      "#F59E0B",
      "#B45309"
    ],
    "tagline": "Café de especialidad y cocina paraguaya con toque moderno en un patio-jardín de Villa Morra.",
    "tags": [
      "Café de especialidad",
      "Cocina paraguaya",
      "Familiar"
    ],
    "services": {
      "estacionamiento": false,
      "wifi": true,
      "terraza": true,
      "delivery": true,
      "tarjeta": true,
      "petfriendly": false
    },
    "promo": {
      "active": false,
      "text": ""
    },
    "menu": [
      {
        "section": "Cafés",
        "items": [
          {
            "name": "Café con leche",
            "price": 22000
          },
          {
            "name": "Capuchino",
            "price": 26000
          },
          {
            "name": "Cocido quemado",
            "price": 20000
          }
        ]
      },
      {
        "section": "Desayunos y para compartir",
        "items": [
          {
            "name": "Burrito de desayuno",
            "price": 48000
          },
          {
            "name": "Mbejú capresse",
            "price": 42000
          }
        ]
      },
      {
        "section": "Platos paraguayos",
        "items": [
          {
            "name": "Empanadas de mandioca",
            "price": 30000
          },
          {
            "name": "Lomito casero",
            "price": 55000
          }
        ]
      }
    ],
    "reviews": [],
    "sources": [
      "https://www.elcafedeaca.com/",
      "https://py.sluurpy.com/asunci%C3%B3n/restaurante/5445586/el-cafe-de-aca"
    ]
  },
  {
    "id": "kaffe-i-coffee-roasters",
    "name": "Kaffe'i - Coffee Roasters",
    "category": "cafeteria",
    "emoji": "☕",
    "city": "Asunción",
    "address": "Palma 438, microcentro, Asunción",
    "lat": -25.282,
    "lng": -57.635,
    "priceFrom": 35000,
    "priceTo": 75000,
    "priceLevel": 2,
    "rating": 4.6,
    "reviewsCount": 0,
    "hours": "Lun a Vie · 07:00 – 20:00 · Sáb y Dom · 09:00 – 20:00",
    "menuUpdated": "hoy",
    "openNow": true,
    "distanceKm": 0.0,
    "gradient": [
      "#F59E0B",
      "#B45309"
    ],
    "tagline": "Micro-tostaduría de café de especialidad en el centro; nominada entre las Top 100 cafeterías de Sudamérica.",
    "tags": [
      "Café de especialidad",
      "Tostaduría",
      "Para trabajar"
    ],
    "services": {
      "estacionamiento": false,
      "wifi": true,
      "terraza": false,
      "delivery": false,
      "tarjeta": true,
      "petfriendly": false
    },
    "promo": {
      "active": false,
      "text": ""
    },
    "menu": [
      {
        "section": "Café filtrado",
        "items": [
          {
            "name": "V60 / Filtrado de origen",
            "price": 30000
          },
          {
            "name": "Cold brew",
            "price": 32000
          }
        ]
      },
      {
        "section": "Espresso",
        "items": [
          {
            "name": "Café con leche",
            "price": 24000
          },
          {
            "name": "Café frappe",
            "price": 30000
          }
        ]
      },
      {
        "section": "Para acompañar",
        "items": [
          {
            "name": "Sandwich BLT",
            "price": 45000
          },
          {
            "name": "Pastelería del día",
            "price": 28000
          }
        ]
      }
    ],
    "reviews": [],
    "sources": [
      "https://kaffei.com.py/",
      "https://www.abc.com.py/gastronomia/2025/10/23/cafeteria-paraguaya-seleccionada-entre-las-top-100-de-sudamerica/"
    ]
  },
  {
    "id": "mary-s-coffee-house",
    "name": "Mary's Coffee House",
    "category": "cafeteria",
    "emoji": "☕",
    "city": "Asunción",
    "address": "Lillo 1178 c/ Malutín, Asunción",
    "lat": -25.2965,
    "lng": -57.576,
    "priceFrom": 35000,
    "priceTo": 80000,
    "priceLevel": 2,
    "rating": 4.3,
    "reviewsCount": 0,
    "hours": "Lun a Sáb · 09:00 – 20:00 (Dom cerrado)",
    "menuUpdated": "hoy",
    "openNow": true,
    "distanceKm": 6.2,
    "gradient": [
      "#F59E0B",
      "#B45309"
    ],
    "tagline": "La primera casa de café de especialidad de Paraguay, con métodos de extracción y grano propio Montebrujas.",
    "tags": [
      "Café de especialidad",
      "Métodos de filtrado",
      "Pionera"
    ],
    "services": {
      "estacionamiento": false,
      "wifi": true,
      "terraza": false,
      "delivery": true,
      "tarjeta": true,
      "petfriendly": false
    },
    "promo": {
      "active": false,
      "text": ""
    },
    "menu": [
      {
        "section": "Espresso",
        "items": [
          {
            "name": "Latte",
            "price": 28000
          },
          {
            "name": "Caramel macchiato",
            "price": 32000
          },
          {
            "name": "Mocha",
            "price": 32000
          }
        ]
      },
      {
        "section": "Métodos de filtrado",
        "items": [
          {
            "name": "Chemex",
            "price": 34000
          },
          {
            "name": "Aeropress",
            "price": 32000
          }
        ]
      },
      {
        "section": "Sin cafeína",
        "items": [
          {
            "name": "Té aromático",
            "price": 20000
          },
          {
            "name": "Licuado de frutas",
            "price": 30000
          }
        ]
      }
    ],
    "reviews": [],
    "sources": [
      "https://www.lanacion.com.py/la-nacion-del-finde/2022/08/06/marys-coffee-house-la-primera-casa-de-cafe-de-especialidad/",
      "https://www.facebook.com/maryscoffeehouse/"
    ]
  },
  {
    "id": "restaurante-bolsi",
    "name": "Restaurante Bolsi",
    "category": "paraguaya",
    "emoji": "🫓",
    "city": "Asunción",
    "address": "Estrella 399 esq. Alberdi, Centro Histórico, Asunción",
    "lat": -25.2827,
    "lng": -57.6358,
    "priceFrom": 60000,
    "priceTo": 150000,
    "priceLevel": 3,
    "rating": 4.6,
    "reviewsCount": 0,
    "hours": "Lun a Dom · 07:00 – 00:00",
    "menuUpdated": "hoy",
    "openNow": true,
    "distanceKm": 0.1,
    "gradient": [
      "#F97316",
      "#C2410C"
    ],
    "tagline": "Ícono familiar de la gastronomía asuncena desde 1960, Patrimonio Histórico de la Ciudad.",
    "tags": [
      "Paraguaya",
      "Tradicional",
      "Familiar"
    ],
    "services": {
      "estacionamiento": false,
      "wifi": true,
      "terraza": false,
      "delivery": true,
      "tarjeta": true,
      "petfriendly": false
    },
    "promo": {
      "active": false,
      "text": ""
    },
    "menu": [
      {
        "section": "Entradas y típicos",
        "items": [
          {
            "name": "Chipa",
            "price": 15000
          },
          {
            "name": "Croquetas de la casa",
            "price": 35000
          },
          {
            "name": "Sopa paraguaya",
            "price": 25000
          }
        ]
      },
      {
        "section": "Platos principales",
        "items": [
          {
            "name": "Surubí a la teja",
            "price": 110000
          },
          {
            "name": "Asado / carnes a la parrilla",
            "price": 95000
          },
          {
            "name": "Milanesa napolitana con guarnición",
            "price": 75000
          }
        ]
      },
      {
        "section": "Postres",
        "items": [
          {
            "name": "Ensalada de frutas",
            "price": 28000
          },
          {
            "name": "Flan casero",
            "price": 25000
          }
        ]
      }
    ],
    "reviews": [],
    "sources": [
      "https://www.bolsi.com.py/",
      "https://www.tripadvisor.com/Restaurant_Review-g294080-d1086614-Reviews-Restaurante_Bolsi-Asuncion.html"
    ]
  },
  {
    "id": "la-paraguayita",
    "name": "La Paraguayita",
    "category": "paraguaya",
    "emoji": "🫓",
    "city": "Asunción",
    "address": "Av. Brasilia esq. República de Siria, Asunción",
    "lat": -25.2742,
    "lng": -57.6103,
    "priceFrom": 70000,
    "priceTo": 160000,
    "priceLevel": 3,
    "rating": 4.4,
    "reviewsCount": 0,
    "hours": "Lun a Dom · 11:00 – 00:45",
    "menuUpdated": "hoy",
    "openNow": true,
    "distanceKm": 2.6,
    "gradient": [
      "#F97316",
      "#C2410C"
    ],
    "tagline": "Parrillada y cocina típica paraguaya, un clásico de la noche asuncena desde 1977.",
    "tags": [
      "Parrilla",
      "Paraguaya",
      "Familiar"
    ],
    "services": {
      "estacionamiento": true,
      "wifi": false,
      "terraza": false,
      "delivery": false,
      "tarjeta": true,
      "petfriendly": false
    },
    "promo": {
      "active": false,
      "text": ""
    },
    "menu": [
      {
        "section": "Típicos paraguayos",
        "items": [
          {
            "name": "Chipa guasu",
            "price": 30000
          },
          {
            "name": "Sopa paraguaya",
            "price": 28000
          },
          {
            "name": "Mandioca frita",
            "price": 20000
          }
        ]
      },
      {
        "section": "Parrilla",
        "items": [
          {
            "name": "Parrillada completa para dos",
            "price": 150000
          },
          {
            "name": "Tapita de cuadril de novillo",
            "price": 95000
          },
          {
            "name": "Chinchulines a la parrilla",
            "price": 65000
          }
        ]
      },
      {
        "section": "Pescados",
        "items": [
          {
            "name": "Surubí grillé al limón",
            "price": 105000
          },
          {
            "name": "Ryguasu a la leña con mandioca",
            "price": 85000
          }
        ]
      }
    ],
    "reviews": [],
    "sources": [
      "https://cdiadmin.wixsite.com/laparaguayita",
      "https://www.tripadvisor.com/Restaurant_Review-g294080-d2569081-Reviews-La_Paraguayita-Asuncion.html"
    ]
  },
  {
    "id": "tierra-colorada-gastro",
    "name": "Tierra Colorada Gastró",
    "category": "paraguaya",
    "emoji": "🫓",
    "city": "Asunción",
    "address": "Av. Santísima Trinidad 784 c/ Tte. Fernández, Barrio Trinidad, Asunción",
    "lat": -25.266,
    "lng": -57.5765,
    "priceFrom": 180000,
    "priceTo": 350000,
    "priceLevel": 3,
    "rating": 4.8,
    "reviewsCount": 0,
    "hours": "Almuerzo Mié a Vie 12:00 – 14:30 · Cena Lun a Sáb 20:00 – 23:00",
    "menuUpdated": "hoy",
    "openNow": true,
    "distanceKm": 6.2,
    "gradient": [
      "#F97316",
      "#C2410C"
    ],
    "tagline": "Alta cocina paraguaya del chef Rodolfo Angenscheidt; su asado a la olla se cocina más de 24 horas.",
    "tags": [
      "Paraguaya",
      "Gourmet",
      "Autor"
    ],
    "services": {
      "estacionamiento": true,
      "wifi": true,
      "terraza": true,
      "delivery": false,
      "tarjeta": true,
      "petfriendly": false
    },
    "promo": {
      "active": false,
      "text": ""
    },
    "menu": [
      {
        "section": "Entradas",
        "items": [
          {
            "name": "Payaguá de langostinos",
            "price": 85000
          },
          {
            "name": "Croquetas de arroz quesú",
            "price": 70000
          },
          {
            "name": "Sopa pyta",
            "price": 65000
          }
        ]
      },
      {
        "section": "Principales",
        "items": [
          {
            "name": "Asado a la olla (cocción 24h)",
            "price": 220000
          },
          {
            "name": "Surubí grillé",
            "price": 190000
          },
          {
            "name": "Chupín de pescado",
            "price": 175000
          }
        ]
      },
      {
        "section": "Postres",
        "items": [
          {
            "name": "Trufa de chocolate semiamargo",
            "price": 60000
          },
          {
            "name": "Postre de mandioca",
            "price": 60000
          }
        ]
      }
    ],
    "reviews": [],
    "sources": [
      "https://www.theworlds50best.com/discovery/Establishments/Paraguay/Asuncion/Tierra-Colorada-Gastr%C3%B3.html",
      "https://www.tripadvisor.com/Restaurant_Review-g294080-d2406869-Reviews-Tierra_Colorada_Gastro-Asuncion.html"
    ]
  },
  {
    "id": "paulista-grill-churrasqueria",
    "name": "Paulista Grill Churrasquería",
    "category": "parrilla",
    "emoji": "🥩",
    "city": "Asunción",
    "address": "Av. Gral. José de San Martín c/ Mcal. López, Asunción",
    "lat": -25.2944,
    "lng": -57.5763,
    "priceFrom": 130000,
    "priceTo": 160000,
    "priceLevel": 3,
    "rating": 4.3,
    "reviewsCount": 0,
    "hours": "Lun a Dom · 11:30 – 15:00 y 19:00 – 00:00",
    "menuUpdated": "hoy",
    "openNow": true,
    "distanceKm": 6.1,
    "gradient": [
      "#B91C1C",
      "#7F1D1D"
    ],
    "tagline": "Churrasquería estilo rodízio con carne premium Neuland y buffet de ensaladas y postres.",
    "tags": [
      "Churrasquería",
      "Parrilla libre",
      "Familiar"
    ],
    "services": {
      "estacionamiento": true,
      "wifi": false,
      "terraza": false,
      "delivery": false,
      "tarjeta": true,
      "petfriendly": false
    },
    "promo": {
      "active": false,
      "text": ""
    },
    "menu": [
      {
        "section": "Parrilla (rodízio)",
        "items": [
          {
            "name": "Picaña",
            "price": 145000
          },
          {
            "name": "Cupim (jorobado de res)",
            "price": 145000
          },
          {
            "name": "Costilla de cerdo",
            "price": 140000
          }
        ]
      },
      {
        "section": "Buffet y guarniciones",
        "items": [
          {
            "name": "Buffet de ensaladas",
            "price": 45000
          },
          {
            "name": "Platos calientes y guarniciones",
            "price": 40000
          }
        ]
      },
      {
        "section": "Postres",
        "items": [
          {
            "name": "Barra de postres variados",
            "price": 35000
          },
          {
            "name": "Piña asada a la parrilla",
            "price": 30000
          }
        ]
      }
    ],
    "reviews": [],
    "sources": [
      "https://www.tripadvisor.com/Restaurant_Review-g294080-d1096665-Reviews-Paulista_Grill-Asuncion.html",
      "https://www.google.com/maps/search/?api=1&query=Paulista+Grill+Churrasquer%C3%ADa,+Asuncion&query_place_id=ChIJ9YjDGpioXZQRtosZRUeskIk"
    ]
  },
  {
    "id": "lo-de-osvaldo",
    "name": "Lo de Osvaldo",
    "category": "parrilla",
    "emoji": "🥩",
    "city": "Asunción",
    "address": "Cerro Corá 883, Barrio Recoleta, Asunción",
    "lat": -25.287518,
    "lng": -57.628248,
    "priceFrom": 90000,
    "priceTo": 180000,
    "priceLevel": 3,
    "rating": 4.5,
    "reviewsCount": 0,
    "hours": "Dom a Jue · 11:00 – 23:00 · Vie y Sáb · 11:00 – 00:00",
    "menuUpdated": "hoy",
    "openNow": true,
    "distanceKm": 0.9,
    "gradient": [
      "#B91C1C",
      "#7F1D1D"
    ],
    "tagline": "Parrilla asuncena de culto con cortes bien marmolados y decoración de camisetas de fútbol.",
    "tags": [
      "Parrilla",
      "Asado",
      "Cortes premium"
    ],
    "services": {
      "estacionamiento": false,
      "wifi": false,
      "terraza": true,
      "delivery": false,
      "tarjeta": true,
      "petfriendly": false
    },
    "promo": {
      "active": false,
      "text": ""
    },
    "menu": [
      {
        "section": "La Previa (entradas)",
        "items": [
          {
            "name": "Provoleta LDO",
            "price": 45000
          },
          {
            "name": "Mollejas a la parrilla",
            "price": 55000
          },
          {
            "name": "Chorizo casero",
            "price": 35000
          }
        ]
      },
      {
        "section": "Cortes",
        "items": [
          {
            "name": "Ojo de bife",
            "price": 110000
          },
          {
            "name": "Bife de chorizo",
            "price": 105000
          },
          {
            "name": "Tomahawk",
            "price": 175000
          }
        ]
      },
      {
        "section": "El Alargue (postres)",
        "items": [
          {
            "name": "Helado de queso Paraguay",
            "price": 35000
          },
          {
            "name": "Volcán de chocolate",
            "price": 38000
          }
        ]
      }
    ],
    "reviews": [],
    "sources": [
      "https://www.lodeosvaldo.com.py/",
      "https://www.lodeosvaldo.com.py/carta"
    ]
  },
  {
    "id": "parrillada-valencia",
    "name": "Parrillada Valencia",
    "category": "parrilla",
    "emoji": "🥩",
    "city": "Asunción",
    "address": "Azara Félix de 3845 c/ Capitán Cañiza, Barrio Seminario, Asunción",
    "lat": -25.2566,
    "lng": -57.6122,
    "priceFrom": 55000,
    "priceTo": 90000,
    "priceLevel": 2,
    "rating": 3.8,
    "reviewsCount": 0,
    "hours": "Mar a Sáb · 19:00 – 23:30 · Dom · 11:00 – 15:00 (a la carta)",
    "menuUpdated": "hoy",
    "openNow": true,
    "distanceKm": 3.7,
    "gradient": [
      "#B91C1C",
      "#7F1D1D"
    ],
    "tagline": "Clásica parrillada de barrio desde 1979, famosa por su tenedor libre y su chanchito a las brasas.",
    "tags": [
      "Parrilla",
      "Tenedor libre",
      "Tradicional"
    ],
    "services": {
      "estacionamiento": true,
      "wifi": false,
      "terraza": true,
      "delivery": true,
      "tarjeta": true,
      "petfriendly": false
    },
    "promo": {
      "active": false,
      "text": ""
    },
    "menu": [
      {
        "section": "Tenedor libre",
        "items": [
          {
            "name": "Tenedor libre de parrilla (por persona)",
            "price": 55000
          }
        ]
      },
      {
        "section": "Parrilla",
        "items": [
          {
            "name": "Chanchito a las brasas (costeleta de cerdo)",
            "price": 60000
          },
          {
            "name": "Asado de vaca",
            "price": 55000
          },
          {
            "name": "Tapa de cuadril",
            "price": 58000
          }
        ]
      },
      {
        "section": "Guarniciones paraguayas",
        "items": [
          {
            "name": "Sopa paraguaya",
            "price": 15000
          },
          {
            "name": "Chipa guazú",
            "price": 15000
          }
        ]
      }
    ],
    "reviews": [],
    "sources": [
      "https://py.sluurpy.com/asunci%C3%B3n/restaurante/5449044/parrillada-valencia",
      "https://elomnivoro.com/2014/07/02/valencia-la-ultima-parrillada-de-barrio/"
    ]
  },
  {
    "id": "walterio",
    "name": "Walterio",
    "category": "hamburguesas",
    "emoji": "🍔",
    "city": "Asunción",
    "address": "Avda. Dr. Guido Boggiani 5739 c/ José Campos Lanzoni, Barrio Las Mercedes, Asunción",
    "lat": -25.2864,
    "lng": -57.6119,
    "priceFrom": 55000,
    "priceTo": 110000,
    "priceLevel": 2,
    "rating": 4.5,
    "reviewsCount": 0,
    "hours": "Lun a Jue · 18:00 – 00:30 · Vie a Dom · 18:00 – 02:00",
    "menuUpdated": "hoy",
    "openNow": true,
    "distanceKm": 2.4,
    "gradient": [
      "#D97706",
      "#92400E"
    ],
    "tagline": "Hamburguesas artesanales de carne Brangus molida a diario y gran carta de cervezas.",
    "tags": [
      "Hamburguesas",
      "Artesanal",
      "Cervezas"
    ],
    "services": {
      "estacionamiento": false,
      "wifi": false,
      "terraza": false,
      "delivery": true,
      "tarjeta": true,
      "petfriendly": false
    },
    "promo": {
      "active": false,
      "text": ""
    },
    "menu": [
      {
        "section": "Hamburguesas",
        "items": [
          {
            "name": "Good Father",
            "price": 65000
          },
          {
            "name": "Cheese Burger",
            "price": 58000
          },
          {
            "name": "Volks Burger",
            "price": 72000
          }
        ]
      },
      {
        "section": "Para acompañar",
        "items": [
          {
            "name": "Papas Walterio",
            "price": 35000
          },
          {
            "name": "Ranchero Fries (bacon y cheddar)",
            "price": 42000
          },
          {
            "name": "Aros de cebolla",
            "price": 32000
          }
        ]
      }
    ],
    "reviews": [],
    "sources": [
      "https://www.tripadvisor.com/Restaurant_Review-g294080-d4364842-Reviews-Walterio-Asuncion.html",
      "https://foursquare.com/v/walterio/4ee66ec3e5e8ed8c64dece75"
    ]
  },
  {
    "id": "la-burguesa",
    "name": "La Burguesa",
    "category": "hamburguesas",
    "emoji": "🍔",
    "city": "Asunción",
    "address": "Villa Morra Food Park, Av. Mariscal López c/ San Rafael, Villa Morra, Asunción",
    "lat": -25.2938,
    "lng": -57.5782,
    "priceFrom": 50000,
    "priceTo": 100000,
    "priceLevel": 2,
    "rating": 4.4,
    "reviewsCount": 0,
    "hours": "Mar a Dom · 18:30 – 23:30",
    "menuUpdated": "hoy",
    "openNow": true,
    "distanceKm": 5.9,
    "gradient": [
      "#D97706",
      "#92400E"
    ],
    "tagline": "Hamburguesas gourmet del chef Bruno Brusquetti, famosa por su burger de entrecostilla.",
    "tags": [
      "Hamburguesas",
      "Gourmet",
      "Artesanal"
    ],
    "services": {
      "estacionamiento": false,
      "wifi": false,
      "terraza": true,
      "delivery": true,
      "tarjeta": true,
      "petfriendly": false
    },
    "promo": {
      "active": false,
      "text": ""
    },
    "menu": [
      {
        "section": "Hamburguesas",
        "items": [
          {
            "name": "Entrecostilla (con papas)",
            "price": 68000
          },
          {
            "name": "Bondiola (con papas)",
            "price": 65000
          },
          {
            "name": "Buffalo Burger (con papas)",
            "price": 70000
          }
        ]
      },
      {
        "section": "Especiales",
        "items": [
          {
            "name": "La Burguesa de la semana",
            "price": 72000
          },
          {
            "name": "Opción sin gluten",
            "price": 70000
          }
        ]
      }
    ],
    "reviews": [],
    "sources": [
      "https://www.lanacion.com.py/la-nacion-del-finde/2022/09/03/la-burguesa-una-de-las-hamburguesas-favoritas-de-asuncion/",
      "https://infonegocios.com.py/conosur/conociendo-a-bruno-brusquetti-chef-y-propietario-de-la-burguesa"
    ]
  },
  {
    "id": "hiroshima-restaurant",
    "name": "Hiroshima Restaurant",
    "category": "sushi",
    "emoji": "🍣",
    "city": "Asunción",
    "address": "Av. Choferes del Chaco 1803 esq. José Martí, Asunción",
    "lat": -25.2965,
    "lng": -57.571,
    "priceFrom": 80000,
    "priceTo": 180000,
    "priceLevel": 3,
    "rating": 4.1,
    "reviewsCount": 0,
    "hours": "Mar a Dom · 11:45 – 14:30 y 19:00 – 23:00 (Lun cerrado)",
    "menuUpdated": "hoy",
    "openNow": true,
    "distanceKm": 6.6,
    "gradient": [
      "#0EA5E9",
      "#0369A1"
    ],
    "tagline": "El restaurante japonés más tradicional de Asunción, con más de 30 años de historia.",
    "tags": [
      "Japonés",
      "Sushi",
      "Tradicional"
    ],
    "services": {
      "estacionamiento": false,
      "wifi": false,
      "terraza": false,
      "delivery": true,
      "tarjeta": true,
      "petfriendly": false
    },
    "promo": {
      "active": false,
      "text": ""
    },
    "menu": [
      {
        "section": "Sushi y Makis",
        "items": [
          {
            "name": "Roll de langostino (aka langostino)",
            "price": 55000
          },
          {
            "name": "Sashimi de salmón",
            "price": 70000
          },
          {
            "name": "Maki variado",
            "price": 48000
          }
        ]
      },
      {
        "section": "Platos calientes",
        "items": [
          {
            "name": "Pollo teriyaki",
            "price": 65000
          },
          {
            "name": "Gyoza",
            "price": 42000
          },
          {
            "name": "Curry japonés",
            "price": 60000
          }
        ]
      },
      {
        "section": "Entradas",
        "items": [
          {
            "name": "Sopa de miso",
            "price": 25000
          },
          {
            "name": "Spring rolls",
            "price": 38000
          }
        ]
      }
    ],
    "reviews": [],
    "sources": [
      "https://www.tripadvisor.com/Restaurant_Review-g294080-d3187304-Reviews-Hiroshima_Restaurant-Asuncion.html",
      "https://py.sluurpy.com/asunci%C3%B3n/restaurante/5446775/hiroshima-restaurant"
    ]
  },
  {
    "id": "kazu-sushi",
    "name": "Kazu Sushi",
    "category": "sushi",
    "emoji": "🍣",
    "city": "Luque",
    "address": "Tte. Ramos Alfaro casi Ballivián N° 420, Luque",
    "lat": -25.286,
    "lng": -57.533,
    "priceFrom": 90000,
    "priceTo": 200000,
    "priceLevel": 3,
    "rating": 5.0,
    "reviewsCount": 0,
    "hours": "Mar a Jue · 18:00 – 22:00 · Vie y Sáb · 18:00 – 22:30 (Dom y Lun cerrado)",
    "menuUpdated": "hoy",
    "openNow": true,
    "distanceKm": 10.3,
    "gradient": [
      "#0EA5E9",
      "#0369A1"
    ],
    "tagline": "Barra de sushi íntima especializada en omakase y cocina nikkei, cerca del aeropuerto.",
    "tags": [
      "Nikkei",
      "Omakase",
      "Sushi Bar"
    ],
    "services": {
      "estacionamiento": false,
      "wifi": false,
      "terraza": false,
      "delivery": true,
      "tarjeta": true,
      "petfriendly": false
    },
    "promo": {
      "active": false,
      "text": ""
    },
    "menu": [
      {
        "section": "Omakase",
        "items": [
          {
            "name": "Experiencia omakase (13 tiempos)",
            "price": 180000
          },
          {
            "name": "Nigiri de salmón",
            "price": 30000
          }
        ]
      },
      {
        "section": "Sashimi",
        "items": [
          {
            "name": "Sashimi de salmón",
            "price": 75000
          },
          {
            "name": "Sashimi variado",
            "price": 95000
          }
        ]
      },
      {
        "section": "Entradas",
        "items": [
          {
            "name": "Sopa de miso",
            "price": 25000
          },
          {
            "name": "Edamame",
            "price": 30000
          }
        ]
      }
    ],
    "reviews": [],
    "sources": [
      "https://www.tripadvisor.com/Restaurant_Review-g4413270-d27790904-Reviews-Kazu_Sushi-Luque_Central_Department.html",
      "https://www.instagram.com/kazusushipy/"
    ]
  },
  {
    "id": "grosso-cocina-italiana",
    "name": "Grosso Cocina Italiana",
    "category": "pizza",
    "emoji": "🍕",
    "city": "Asunción",
    "address": "Shopping delSol, Av. Aviadores del Chaco 2917, Asunción",
    "lat": -25.2831,
    "lng": -57.5668,
    "priceFrom": 80000,
    "priceTo": 180000,
    "priceLevel": 3,
    "rating": 4.8,
    "reviewsCount": 0,
    "hours": "Lun a Dom · 12:00 – 23:00",
    "menuUpdated": "hoy",
    "openNow": true,
    "distanceKm": 6.9,
    "gradient": [
      "#DC2626",
      "#7F1D1D"
    ],
    "tagline": "Cocina italiana premiada, entre las mejores pizzerías de Latinoamérica según 50 Top Pizza",
    "tags": [
      "Pizza",
      "Italiano",
      "Premiada"
    ],
    "services": {
      "estacionamiento": true,
      "wifi": true,
      "terraza": false,
      "delivery": true,
      "tarjeta": true,
      "petfriendly": false
    },
    "promo": {
      "active": false,
      "text": ""
    },
    "menu": [
      {
        "section": "Pizzas",
        "items": [
          {
            "name": "Pizza Margherita",
            "price": 65000
          },
          {
            "name": "Pizza Prosciutto e Funghi",
            "price": 85000
          },
          {
            "name": "Pizza Pepperoni",
            "price": 80000
          }
        ]
      },
      {
        "section": "Pastas y Risottos",
        "items": [
          {
            "name": "Gnocchi",
            "price": 75000
          },
          {
            "name": "Risotto de hongos",
            "price": 90000
          },
          {
            "name": "Risotto al nero di seppia (tinta de calamar)",
            "price": 110000
          }
        ]
      },
      {
        "section": "Entradas",
        "items": [
          {
            "name": "Carpaccio",
            "price": 70000
          },
          {
            "name": "Ensalada César",
            "price": 55000
          }
        ]
      }
    ],
    "reviews": [],
    "sources": [
      "https://www.tripadvisor.com/Restaurant_Review-g294080-d20015094-Reviews-Grosso_Pizzeria-Asuncion.html",
      "https://www.abc.com.py/negocios/2026/04/15/grosso-entre-las-mejores-pizzerias-de-latinoamerica-por-segundo-ano-consecutivo/"
    ]
  },
  {
    "id": "il-mangiare-ristorante-y-pizzeria",
    "name": "Il Mangiare Ristorante y Pizzeria",
    "category": "pizza",
    "emoji": "🍕",
    "city": "Asunción",
    "address": "Av. España casi San Rafael 1435, Asunción",
    "lat": -25.2958,
    "lng": -57.5808,
    "priceFrom": 60000,
    "priceTo": 150000,
    "priceLevel": 3,
    "rating": 3.6,
    "reviewsCount": 0,
    "hours": "Lun a Dom · 11:30 – 23:30",
    "menuUpdated": "hoy",
    "openNow": true,
    "distanceKm": 5.7,
    "gradient": [
      "#DC2626",
      "#7F1D1D"
    ],
    "tagline": "Ristorante y pizzería italiana tradicional sobre Av. España, con más de dos décadas de trayectoria",
    "tags": [
      "Pizza",
      "Italiano",
      "Familiar"
    ],
    "services": {
      "estacionamiento": true,
      "wifi": true,
      "terraza": false,
      "delivery": true,
      "tarjeta": true,
      "petfriendly": false
    },
    "promo": {
      "active": false,
      "text": ""
    },
    "menu": [
      {
        "section": "Pizzas",
        "items": [
          {
            "name": "Pizza Margherita",
            "price": 55000
          },
          {
            "name": "Pizza Napolitana",
            "price": 60000
          },
          {
            "name": "Pizza Cuatro Quesos",
            "price": 70000
          }
        ]
      },
      {
        "section": "Pastas",
        "items": [
          {
            "name": "Spaghetti a la Bolognesa",
            "price": 65000
          },
          {
            "name": "Lasagna",
            "price": 75000
          },
          {
            "name": "Ñoquis con salsa",
            "price": 60000
          }
        ]
      },
      {
        "section": "Antipasti",
        "items": [
          {
            "name": "Bruschetta",
            "price": 40000
          },
          {
            "name": "Carpaccio de lomo",
            "price": 70000
          }
        ]
      }
    ],
    "reviews": [],
    "sources": [
      "https://www.tripadvisor.com/Restaurant_Review-g294080-d6985614-Reviews-Il_Mangiare_Ristorante_y_Pizzeria-Asuncion.html",
      "https://www.arpy.com.py/Directorio/il-mangiare/"
    ]
  },
  {
    "id": "negroni-downtown-skybar",
    "name": "Negroni Downtown Skybar",
    "category": "bar",
    "emoji": "🍹",
    "city": "Asunción",
    "address": "15 de Agosto 310 esq. Estrella, Edificio Unicentro (pisos 15 y 16), Asunción",
    "lat": -25.2865,
    "lng": -57.636,
    "priceFrom": 90000,
    "priceTo": 220000,
    "priceLevel": 3,
    "rating": 4.4,
    "reviewsCount": 0,
    "hours": "Lun 12:00 – 00:00 · Mar a Jue 12:00 – 01:00 · Vie 12:00 – 02:00 · Sáb y Dom 16:00 – 02:00",
    "menuUpdated": "hoy",
    "openNow": true,
    "distanceKm": 0.5,
    "gradient": [
      "#7C3AED",
      "#4C1D95"
    ],
    "tagline": "Skybar en el corazón del centro con vista panorámica a la bahía, cócteles de autor y sushi.",
    "tags": [
      "Rooftop",
      "Cócteles",
      "Vista panorámica"
    ],
    "services": {
      "estacionamiento": false,
      "wifi": true,
      "terraza": true,
      "delivery": false,
      "tarjeta": true,
      "petfriendly": false
    },
    "promo": {
      "active": false,
      "text": ""
    },
    "menu": [
      {
        "section": "Cócteles",
        "items": [
          {
            "name": "Negroni clásico",
            "price": 45000
          },
          {
            "name": "Aperol Spritz",
            "price": 42000
          },
          {
            "name": "Gin Tonic de autor",
            "price": 48000
          }
        ]
      },
      {
        "section": "Sushi",
        "items": [
          {
            "name": "Roll California",
            "price": 55000
          },
          {
            "name": "Combinado 15 piezas",
            "price": 95000
          }
        ]
      },
      {
        "section": "Cocina",
        "items": [
          {
            "name": "Burger Negroni",
            "price": 65000
          },
          {
            "name": "Tabla para compartir",
            "price": 90000
          }
        ]
      }
    ],
    "reviews": [],
    "sources": [
      "https://www.negronibistrobar.com/sucursal/negroni-downtown-skybar/",
      "https://visitparaguay.travel/establishments/negroni-skybar"
    ]
  },
  {
    "id": "casa-gin",
    "name": "Casa Gin",
    "category": "bar",
    "emoji": "🍹",
    "city": "Asunción",
    "address": "Shopping del Sol, delSol Rooftop, Aviadores del Chaco esq. Prof. Delia González, Asunción",
    "lat": -25.2832898,
    "lng": -57.5682077,
    "priceFrom": 80000,
    "priceTo": 200000,
    "priceLevel": 3,
    "rating": 4.5,
    "reviewsCount": 0,
    "hours": "Mar a Dom · 18:00 – 01:00",
    "menuUpdated": "hoy",
    "openNow": true,
    "distanceKm": 6.7,
    "gradient": [
      "#7C3AED",
      "#4C1D95"
    ],
    "tagline": "El bar con la mayor selección de gin de las Américas: más de 250 etiquetas y cócteles de autor.",
    "tags": [
      "Gin Bar",
      "Cócteles",
      "Rooftop"
    ],
    "services": {
      "estacionamiento": true,
      "wifi": true,
      "terraza": true,
      "delivery": false,
      "tarjeta": true,
      "petfriendly": false
    },
    "promo": {
      "active": false,
      "text": ""
    },
    "menu": [
      {
        "section": "Gin & Cócteles",
        "items": [
          {
            "name": "Gin Tonic de autor",
            "price": 50000
          },
          {
            "name": "Negroni",
            "price": 48000
          },
          {
            "name": "Cóctel de la casa",
            "price": 52000
          }
        ]
      },
      {
        "section": "Tapas",
        "items": [
          {
            "name": "Tabla de fiambres y quesos",
            "price": 95000
          },
          {
            "name": "Croquetas",
            "price": 55000
          }
        ]
      },
      {
        "section": "Principales",
        "items": [
          {
            "name": "Plato principal del día",
            "price": 90000
          },
          {
            "name": "Postre francés",
            "price": 45000
          }
        ]
      }
    ],
    "reviews": [],
    "sources": [
      "https://visitparaguay.travel/establishments/casa-gin",
      "https://www.instagram.com/casaginpy/"
    ]
  },
  {
    "id": "el-heladero",
    "name": "El Heladero",
    "category": "postres",
    "emoji": "🍨",
    "city": "Lambaré",
    "address": "Cap. Víctor Islas 842 esq. Av. Bruno Guggiari, Lambaré",
    "lat": -25.3347,
    "lng": -57.6225,
    "priceFrom": 12000,
    "priceTo": 45000,
    "priceLevel": 1,
    "rating": 4.4,
    "reviewsCount": 0,
    "hours": "Lun a Sáb · 10:00 – 22:00 · Dom 10:00 – 21:00",
    "menuUpdated": "hoy",
    "openNow": true,
    "distanceKm": 6.0,
    "gradient": [
      "#DB2777",
      "#9D174D"
    ],
    "tagline": "Heladería artesanal paraguaya nacida en Lambaré, con precios accesibles y decenas de sabores.",
    "tags": [
      "Heladería",
      "Artesanal",
      "Familiar"
    ],
    "services": {
      "estacionamiento": true,
      "wifi": false,
      "terraza": false,
      "delivery": true,
      "tarjeta": true,
      "petfriendly": false
    },
    "promo": {
      "active": false,
      "text": ""
    },
    "menu": [
      {
        "section": "Helados",
        "items": [
          {
            "name": "Cono simple",
            "price": 12000
          },
          {
            "name": "Copa helada",
            "price": 22000
          },
          {
            "name": "Pote 1 litro",
            "price": 45000
          }
        ]
      },
      {
        "section": "Batidos y postres",
        "items": [
          {
            "name": "Milkshake / batido natural",
            "price": 25000
          },
          {
            "name": "Crepe con helado",
            "price": 30000
          },
          {
            "name": "Torta helada (porción)",
            "price": 20000
          }
        ]
      }
    ],
    "reviews": [],
    "sources": [
      "https://www.buscoinfo.com.py/local/el-heladero-casa-central/LOC767510001",
      "https://www.ultimahora.com/el-heladero-tiene-5-locales-propios-y-27-franquicias-n287369"
    ]
  },
  {
    "id": "helados-glace",
    "name": "Helados Glace",
    "category": "postres",
    "emoji": "🍨",
    "city": "Mariano Roque Alonso",
    "address": "Hovenia 123 e/ Transchaco y Palo Santo, Mariano Roque Alonso",
    "lat": -25.205,
    "lng": -57.545,
    "priceFrom": 15000,
    "priceTo": 60000,
    "priceLevel": 2,
    "rating": 4.5,
    "reviewsCount": 0,
    "hours": "Lun a Jue · 09:00 – 21:30 · Vie a Dom 09:00 – 22:00",
    "menuUpdated": "hoy",
    "openNow": true,
    "distanceKm": 12.5,
    "gradient": [
      "#DB2777",
      "#9D174D"
    ],
    "tagline": "Heladería con helados sin azúcar, sin gluten y sin lactosa, avalados por FUPADI y FUPACEL.",
    "tags": [
      "Heladería",
      "Sin azúcar",
      "Apto celíacos"
    ],
    "services": {
      "estacionamiento": true,
      "wifi": false,
      "terraza": false,
      "delivery": true,
      "tarjeta": true,
      "petfriendly": false
    },
    "promo": {
      "active": false,
      "text": ""
    },
    "menu": [
      {
        "section": "Helados",
        "items": [
          {
            "name": "Cono",
            "price": 15000
          },
          {
            "name": "Copa helada con toppings",
            "price": 28000
          },
          {
            "name": "Milkshake",
            "price": 25000
          }
        ]
      },
      {
        "section": "Para llevar",
        "items": [
          {
            "name": "Pote 1/2 kilo",
            "price": 40000
          },
          {
            "name": "Torta helada",
            "price": 60000
          },
          {
            "name": "Alfajor helado",
            "price": 15000
          }
        ]
      }
    ],
    "reviews": [],
    "sources": [
      "https://www.facebook.com/heladosglacepy/videos/local-de-mariano-roque-alonso-habilitado-/405431877370639/",
      "https://www.instagram.com/glacemariano/"
    ]
  },
  {
    "id": "don-helado",
    "name": "Don Helado",
    "category": "postres",
    "emoji": "🍨",
    "city": "San Lorenzo",
    "address": "España 759 casi 10 de Agosto (c/ Mcal. Estigarribia), San Lorenzo",
    "lat": -25.339,
    "lng": -57.508,
    "priceFrom": 10000,
    "priceTo": 70000,
    "priceLevel": 2,
    "rating": 4.4,
    "reviewsCount": 0,
    "hours": "Lun a Sáb · 08:00 – 18:00 · Dom cerrado",
    "menuUpdated": "hoy",
    "openNow": true,
    "distanceKm": 14.3,
    "gradient": [
      "#DB2777",
      "#9D174D"
    ],
    "tagline": "Fábrica y venta de helados paraguayos: baldes, copas, palitos y tortas heladas.",
    "tags": [
      "Heladería",
      "Fábrica",
      "Tortas heladas"
    ],
    "services": {
      "estacionamiento": true,
      "wifi": false,
      "terraza": false,
      "delivery": true,
      "tarjeta": true,
      "petfriendly": false
    },
    "promo": {
      "active": false,
      "text": ""
    },
    "menu": [
      {
        "section": "Helados",
        "items": [
          {
            "name": "Palito helado",
            "price": 10000
          },
          {
            "name": "Copa helada",
            "price": 20000
          },
          {
            "name": "Balde de helado 1 litro",
            "price": 40000
          }
        ]
      },
      {
        "section": "Tortas heladas",
        "items": [
          {
            "name": "Torta chocolate con Americana",
            "price": 65000
          },
          {
            "name": "Torta frutilla con Americana",
            "price": 65000
          },
          {
            "name": "Torta dulce de leche con vainilla",
            "price": 70000
          }
        ]
      }
    ],
    "reviews": [],
    "sources": [
      "https://paraguayentumano.com/loc/central/san-lorenzo/don-helado-fabrica-y-ventas/",
      "https://x.com/banco_familiar/status/1291771035457552384"
    ]
  }
]

export const getRestaurantById = (id) => RESTAURANTS.find((r) => r.id === id)

export const formatGs = (n) =>
  'Gs. ' + Math.round(n).toLocaleString('es-PY').replace(/,/g, '.')

export const priceRangeLabel = (r) => `${formatGs(r.priceFrom)} – ${formatGs(r.priceTo)}`
