export const galleries = {
  plitvice: Array.from({ length: 8 }, (_, i) => ({
    src: `/plitvice/${i + 1}.webp`,
  })),

  split: Array.from({ length: 8 }, (_, i) => ({
    src: `/split/${i + 1}.webp`,
  })),

  trogir: Array.from({ length: 8 }, (_, i) => ({
    src: `/trogir/${i + 1}.webp`,
  })),

  bibinje: Array.from({ length: 7 }, (_, i) => ({
    src: `/bibinje/${i + 1}.webp`,
  })),
};