// Ajustes generales del sitio. Rellenad las redes cuando las tengáis:
// los enlaces vacíos no se muestran.
export const SITE = {
  title: 'Rancherita',
  tagline: 'Lejos del asfalto, cerca de la gente.',
  description:
    'Blog de viajes de Rancherita, nuestra Toyota Hilux 4×4 con cabina Tischer. Pistas, naturaleza y encuentros con la gente del lugar: Marruecos, los Balcanes y Albania.',
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
    foto: undefined,
    fotoAlt: undefined,
  },
  balcanes: {
    nombre: 'Balcanes',
    resumen: 'De la costa del Adriático a las montañas de Albania, por carreteras secundarias y pistas.',
    cover: 'balcanes',
    foto: '/fotos/balcanes-rancherita.jpg',
    fotoAlt: 'Rancherita en una carretera de montaña de los Balcanes bajo un cielo de tormenta',
  },
} as const;

export type DestinoId = keyof typeof DESTINOS;

export const url = (path = '') =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
