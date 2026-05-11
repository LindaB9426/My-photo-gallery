export const galleries = {
  plitvice: Array.from({ length: 8 }, (_, i) => ({
    src: `/plitvice/${i + 1}.jpg`,
  })),

  split: Array.from({ length: 8 }, (_, i) => ({
    src: `/split/${i + 1}.jpg`,
  })),

  trogir: Array.from({ length: 8 }, (_, i) => ({
    src: `/trogir/${i + 1}.jpg`,
  })),
};