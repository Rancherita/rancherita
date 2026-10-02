// Ajustes generales del sitio. Rellenad las redes cuando las tengáis:
// los enlaces vacíos no se muestran.
export const SITE = {
  title: 'Rancherita',
  // El lema y la descripción, en cada idioma, están en src/i18n.ts
  social: {
    instagram: '', // p. ej. 'https://instagram.com/rancherita'
    youtube: '',
    email: '', // p. ej. 'hola@rancherita.com'
  },
};

// Cada destino tiene sus textos en español (es) y en alemán de Suiza (de).
export const DESTINOS = {
  marruecos: {
    cover: 'dunas',
    foto: '/fotos/marruecos-burros.jpg',
    es: {
      nombre: 'Marruecos',
      resumen: 'Cuatro meses y medio entre el Rif, el Atlas, el Anti-Atlas y las puertas del Sáhara.',
      fotoAlt: 'Rancherita en una carretera de montaña de Marruecos junto a unos burros cargados',
    },
    de: {
      nombre: 'Marokko',
      resumen: 'Viereinhalb Monate zwischen Rif, Atlas, Antiatlas und den Toren der Sahara.',
      fotoAlt: 'Rancherita auf einer Bergstrasse in Marokko neben beladenen Eseln',
    },
  },
  balcanes: {
    cover: 'balcanes',
    foto: '/fotos/balcanes-mirador.jpg',
    es: {
      nombre: 'Balcanes',
      resumen: 'De la costa del Adriático a las montañas de Albania, por carreteras secundarias y pistas.',
      fotoAlt: 'Rancherita en una pista entre pastos y pinos, con las montañas de los Balcanes al fondo',
    },
    de: {
      nombre: 'Balkan',
      resumen: 'Von der Adriaküste bis in die Berge Albaniens, über Nebenstrassen und Pisten.',
      fotoAlt: 'Rancherita auf einer Piste zwischen Weiden und Kiefern, im Hintergrund die Berge des Balkans',
    },
  },
  normandia: {
    cover: 'horizonte',
    foto: '/fotos/normandia-rancherita-mar.jpg',
    es: {
      nombre: 'Normandía',
      resumen: 'Acantilados, playas del Canal de la Mancha y caminos rurales entre prados y pueblos de piedra.',
      fotoAlt: 'Rancherita aparcada sobre la hierba junto al mar, bajo un cielo gris',
    },
    de: {
      nombre: 'Normandie',
      resumen: 'Steilküsten, Strände am Ärmelkanal und Feldwege zwischen Wiesen und Steindörfern.',
      fotoAlt: 'Rancherita auf der Wiese am Meer parkiert, unter grauem Himmel',
    },
    galeria: [
      {
        src: '/fotos/normandia-rancherita-mar.jpg',
        es: 'Rancherita aparcada sobre la hierba, entre matorrales, con el mar al fondo y un cielo de nubes grises',
        de: 'Rancherita auf der Wiese zwischen Sträuchern parkiert, dahinter das Meer und graue Wolken',
      },
      {
        src: '/fotos/normandia-casetas-faro.jpg',
        es: 'Hilera de casetas de playa blancas con tejados de colores sobre una playa de cantos rodados, con un faro al fondo',
        de: 'Eine Reihe weisser Strandhäuschen mit farbigen Dächern auf einem Kiesstrand, im Hintergrund ein Leuchtturm',
      },
      {
        src: '/fotos/normandia-acantilados.jpg',
        es: 'Aguja de roca blanca en el mar, vista entre dos acantilados cubiertos de hierba y flores amarillas',
        de: 'Eine weisse Felsnadel im Meer, gesehen zwischen zwei Klippen mit Gras und gelben Blumen',
      },
    ],
  },
  bretana: {
    cover: 'pista',
    foto: undefined,
    es: { nombre: 'Bretaña', resumen: 'Faros, calas y senderos de costa en el extremo occidental de Francia.', fotoAlt: undefined },
    de: { nombre: 'Bretagne', resumen: 'Leuchttürme, Buchten und Küstenpfade am westlichsten Zipfel Frankreichs.', fotoAlt: undefined },
  },
  suiza: {
    cover: 'atlas',
    foto: undefined,
    es: { nombre: 'Suiza', resumen: 'Puertos de montaña, lagos y valles alpinos.', fotoAlt: undefined },
    de: { nombre: 'Schweiz', resumen: 'Pässe, Seen und Alpentäler.', fotoAlt: undefined },
  },
  corcega: {
    cover: 'balcanes',
    foto: undefined,
    es: {
      nombre: 'Corsica',
      resumen: 'Una montaña en mitad del Mediterráneo: carreteras de curvas, maquis y costa salvaje.',
      fotoAlt: undefined,
    },
    de: {
      nombre: 'Corsica',
      resumen: 'Ein Gebirge mitten im Mittelmeer: kurvige Strassen, Macchia und wilde Küsten.',
      fotoAlt: undefined,
    },
  },
} as const;

export type DestinoId = keyof typeof DESTINOS;

export const url = (path = '') =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
