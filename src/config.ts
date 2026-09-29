// Ajustes generales del sitio. Rellenad las redes cuando las tengáis:
// los enlaces vacíos no se muestran.
export const SITE = {
  title: 'Rancherita',
  tagline: 'Lejos del asfalto, cerca de la gente.',
  description:
    'Blog de viajes de Rancherita, nuestra Toyota Hilux 4×4 con cabina Tischer. Pistas, naturaleza y encuentros con la gente del lugar: Marruecos, los Balcanes y Albania, Normandía, Bretaña, Suiza y Córcega.',
  lang: 'es',
  social: {
    instagram: '', // p. ej. 'https://instagram.com/rancherita'
    youtube: '',
    email: '', // p. ej. 'hola@rancherita.com'
  },
};

export const DESTINOS = {
  marruecos: {
    nombre: 'Marruecos',
    resumen: 'Cuatro meses y medio entre el Rif, el Atlas, el Anti-Atlas y las puertas del Sáhara.',
    cover: 'dunas',
    foto: '/fotos/marruecos-burros.jpg',
    fotoAlt: 'Rancherita en una carretera de montaña de Marruecos junto a unos burros cargados',
  },
  balcanes: {
    nombre: 'Balcanes',
    resumen: 'De la costa del Adriático a las montañas de Albania, por carreteras secundarias y pistas.',
    cover: 'balcanes',
    foto: '/fotos/balcanes-mirador.jpg',
    fotoAlt: 'Rancherita en una pista entre pastos y pinos, con las montañas de los Balcanes al fondo',
  },
  normandia: {
    nombre: 'Normandía',
    resumen: 'Acantilados, playas del Canal de la Mancha y caminos rurales entre prados y pueblos de piedra.',
    cover: 'horizonte',
    foto: '/fotos/normandia-rancherita-mar.jpg',
    fotoAlt: 'Rancherita aparcada sobre la hierba junto al mar, bajo un cielo gris',
    galeria: [
      { src: '/fotos/normandia-rancherita-mar.jpg', alt: 'Rancherita aparcada sobre la hierba, entre matorrales, con el mar al fondo y un cielo de nubes grises' },
      { src: '/fotos/normandia-casetas-faro.jpg', alt: 'Hilera de casetas de playa blancas con tejados de colores sobre una playa de cantos rodados, con un faro al fondo' },
      { src: '/fotos/normandia-acantilados.jpg', alt: 'Aguja de roca blanca en el mar, vista entre dos acantilados cubiertos de hierba y flores amarillas' },
    ],
  },
  bretana: {
    nombre: 'Bretaña',
    resumen: 'Faros, calas y senderos de costa en el extremo occidental de Francia.',
    cover: 'pista',
    foto: undefined,
    fotoAlt: undefined,
  },
  suiza: {
    nombre: 'Suiza',
    resumen: 'Puertos de montaña, lagos y valles alpinos.',
    cover: 'atlas',
    foto: undefined,
    fotoAlt: undefined,
  },
  corcega: {
    nombre: 'Córcega',
    resumen: 'Una montaña en mitad del Mediterráneo: carreteras de curvas, maquis y costa salvaje.',
    cover: 'balcanes',
    foto: undefined,
    fotoAlt: undefined,
  },
} as const;

export type DestinoId = keyof typeof DESTINOS;

export const url = (path = '') =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
