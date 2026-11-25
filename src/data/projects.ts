export type ProjectPhoto = {
  src: string;
  alt: string;
  /** Featured tiles get larger treatment */
  featured?: boolean;
};

/**
 * Curated gallery — flattering side/angle finished buildings only.
 * Batch 1 + batch 2. Restored completed-07 (side shot; roof issue was video-07).
 * Skipped high aerials (e.g. icloud-18), unfinished (icloud-07), roof-only.
 */
export const projectPhotos: ProjectPhoto[] = [
  {
    src: "/projects/completed-09.jpg",
    alt: "Finished covered riding arena facing the groomed sand floor",
    featured: true,
  },
  {
    src: "/projects/icloud-09.jpg",
    alt: "Tan enclosed metal barn three-quarter view in golden-hour light",
    featured: true,
  },
  {
    src: "/projects/icloud-26.jpg",
    alt: "Open-sided covered arena three-quarter view under blue sky",
    featured: true,
  },
  {
    src: "/projects/icloud-12.jpg",
    alt: "Open-sided pavilion three-quarter view at dusk with sand footing",
  },
  {
    src: "/projects/icloud-02.jpg",
    alt: "White metal shop with office wing and open bays",
  },
  {
    src: "/projects/icloud-16.jpg",
    alt: "Tan barn with open lean-to wing, clean three-quarter side view",
  },
  {
    src: "/projects/icloud-20.jpg",
    alt: "Finished indoor riding arena interior with sand and kick wall",
  },
  {
    src: "/projects/icloud-01.jpg",
    alt: "White metal shop three-quarter front with open bay",
  },
  {
    src: "/projects/icloud-05.jpg",
    alt: "White shop end wall with roll-up doors and concrete apron",
  },
  {
    src: "/projects/icloud-11.jpg",
    alt: "Open-sided pavilion on a grassy rise",
  },
  {
    src: "/projects/completed-07.jpg",
    alt: "Long metal building side elevation at golden hour",
  },
  {
    src: "/projects/completed-05.jpg",
    alt: "Finished open-sided metal arena from a flattering angle",
  },
  {
    src: "/projects/completed-03.jpg",
    alt: "Long open-sided metal building side elevation",
  },
  {
    src: "/projects/completed-04.jpg",
    alt: "Open-sided steel structure full side view",
  },
  {
    src: "/projects/completed-10.jpg",
    alt: "Covered riding arena side angle with arena fencing",
  },
  {
    src: "/projects/completed-11.jpg",
    alt: "Covered arena perspective side view",
  },
  {
    src: "/projects/completed-14.jpg",
    alt: "Elevated angle of open-sided covered arena",
  },
  {
    src: "/projects/completed-16.jpg",
    alt: "Golden-hour view of covered arena and ranch buildings",
  },
  {
    src: "/projects/icloud-video-01.jpg",
    alt: "Side view inside finished arena with wood kick wall",
  },
];

export const heroProjectImage = "/projects/completed-09.jpg";
export const aboutProjectImage = "/projects/completed-05.jpg";
