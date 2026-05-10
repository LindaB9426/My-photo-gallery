export const galleries = {
  plitvice: Array.from({ length: 8 }, (_, i) => ({
    src: `/images/${i + 1}.jpg`,
  })),

  split: Array.from({ length: 6 }, (_, i) => ({
    src: `/split/${String.fromCharCode(97 + i)}.jpg`,
  })),

  trogir: Array.from({ length: 5 }, (_, i) => ({
    src: `/trogir/${i + 1}.jpg`,
  })),
};