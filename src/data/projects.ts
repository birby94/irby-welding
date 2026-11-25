export type ProjectPhoto = {
  src: string;
  alt: string;
  /** Featured tiles get larger treatment */
  featured?: boolean;
};

/**
 * Curated Completed Projects — flattering side/angle views of finished buildings only.
 * Removed: roof-only/texture (07, video-07), underside detail (06), mid-work (01, 02),
 * high roof-dominant aerials (15, 17, 18, 19, video-01), flat gable peak (video-06),
 * near-dupe video-03. Kept video-04 carefully (side aerial + subtle logo overlay).
 */
export const projectPhotos: ProjectPhoto[] = [
  {
    src: "/projects/completed-16.jpg",
    alt: "Golden-hour aerial side view of covered arena and ranch buildings",
    featured: true,
  },
  {
    src: "/projects/completed-09.jpg",
    alt: "Finished covered riding arena from the front of the sand floor",
    featured: true,
  },
  {
    src: "/projects/completed-05.jpg",
    alt: "Finished open-sided metal arena from a flattering angle",
    featured: true,
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
    src: "/projects/completed-12.jpg",
    alt: "Aerial side angle of covered arena in pasture",
  },
  {
    src: "/projects/completed-13.jpg",
    alt: "Aerial three-quarter view of finished metal arena",
  },
  {
    src: "/projects/completed-video-02.jpg",
    alt: "Drone side view of covered arena at golden hour",
  },
  {
    src: "/projects/completed-video-05.jpg",
    alt: "Drone side profile of long covered arena",
  },
  {
    src: "/projects/completed-video-08.jpg",
    alt: "Drone three-quarter view of finished metal building",
  },
  {
    src: "/projects/completed-video-09.jpg",
    alt: "Drone side angle of covered arena and grounds",
  },
  {
    src: "/projects/completed-video-04.jpg",
    alt: "Drone side view of completed IRBY arena project",
  },
];

export const heroProjectImage = "/projects/completed-09.jpg";
export const aboutProjectImage = "/projects/completed-05.jpg";
