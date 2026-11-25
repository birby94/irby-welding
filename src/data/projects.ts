export type ProjectPhoto = {
  src: string;
  alt: string;
  caption: string;
  /** Featured tiles get larger treatment */
  featured?: boolean;
};

/**
 * Curated Completed Projects gallery.
 * Notes from owner pack: skip near-duplicate video-03; use completed-02 sparingly;
 * completed-07 / 18 / 19 are secondary; video-04 has IRBY overlay — OK carefully.
 */
export const projectPhotos: ProjectPhoto[] = [
  {
    src: "/projects/completed-16.jpg",
    alt: "Golden-hour aerial of covered arena and ranch buildings",
    caption: "Covered arena — aerial",
    featured: true,
  },
  {
    src: "/projects/completed-09.jpg",
    alt: "Finished covered riding arena with open sides and groomed sand floor",
    caption: "Covered riding arena — completed",
    featured: true,
  },
  {
    src: "/projects/completed-05.jpg",
    alt: "Finished open-sided metal building",
    caption: "Open-sided metal building",
    featured: true,
  },
  {
    src: "/projects/completed-03.jpg",
    alt: "Finished open-sided barn structure",
    caption: "Open-sided barn",
  },
  {
    src: "/projects/completed-01.jpg",
    alt: "Completed metal building project",
    caption: "Metal building",
  },
  {
    src: "/projects/completed-04.jpg",
    alt: "Completed steel structure on site",
    caption: "Steel structure",
  },
  {
    src: "/projects/completed-06.jpg",
    alt: "Completed covered arena framing and roof",
    caption: "Arena structure",
  },
  {
    src: "/projects/completed-10.jpg",
    alt: "Covered riding arena exterior view",
    caption: "Riding arena",
  },
  {
    src: "/projects/completed-11.jpg",
    alt: "Finished arena and ranch site",
    caption: "Arena site",
  },
  {
    src: "/projects/completed-12.jpg",
    alt: "Covered arena from the field",
    caption: "Field view",
  },
  {
    src: "/projects/completed-13.jpg",
    alt: "Completed metal building exterior",
    caption: "Metal building",
  },
  {
    src: "/projects/completed-14.jpg",
    alt: "Finished barn and steel work",
    caption: "Barn steel",
  },
  {
    src: "/projects/completed-15.jpg",
    alt: "Completed covered structure",
    caption: "Covered structure",
  },
  {
    src: "/projects/completed-17.jpg",
    alt: "Aerial view of completed arena project",
    caption: "Aerial — arena",
  },
  {
    src: "/projects/completed-video-01.jpg",
    alt: "Drone frame of covered arena under construction or complete",
    caption: "Drone — arena",
  },
  {
    src: "/projects/completed-video-02.jpg",
    alt: "Drone frame of completed covered riding arena",
    caption: "Drone — site",
  },
  {
    src: "/projects/completed-video-05.jpg",
    alt: "Drone frame of ranch metal buildings",
    caption: "Drone — buildings",
  },
  {
    src: "/projects/completed-video-06.jpg",
    alt: "Drone overview of completed project site",
    caption: "Drone — overview",
  },
  {
    src: "/projects/completed-video-07.jpg",
    alt: "Drone frame of open-sided steel building",
    caption: "Drone — steel",
  },
  {
    src: "/projects/completed-video-08.jpg",
    alt: "Drone frame of finished metal construction",
    caption: "Drone — finish",
  },
  {
    src: "/projects/completed-video-09.jpg",
    alt: "Drone frame of covered arena and grounds",
    caption: "Drone — grounds",
  },
  {
    src: "/projects/completed-18.jpg",
    alt: "High aerial of completed project property",
    caption: "High aerial",
  },
  {
    src: "/projects/completed-19.jpg",
    alt: "High aerial overview of ranch project",
    caption: "High aerial",
  },
  {
    src: "/projects/completed-video-04.jpg",
    alt: "Drone frame of IRBY completed project with logo overlay",
    caption: "Project highlight",
  },
  {
    src: "/projects/completed-07.jpg",
    alt: "Metal roof detail on completed structure",
    caption: "Roof detail",
  },
  {
    src: "/projects/completed-02.jpg",
    alt: "In-progress arena work with boom lift on site",
    caption: "In progress",
  },
];

export const heroProjectImage = "/projects/completed-09.jpg";
export const aboutProjectImage = "/projects/completed-05.jpg";
